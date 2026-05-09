import { Resend }       from "resend";
import { NextResponse } from "next/server";
import { headers }      from "next/headers";
import { z }            from "zod";
import { rateLimit }    from "@/lib/ratelimit";
import { escHtml }      from "@/lib/sanitize";

const schema = z.object({
  prenom:    z.string().min(2).max(50),
  nom:       z.string().min(2).max(50),
  telephone: z.string().regex(/^(\+33|0)[1-9](\d{8})$/),
  email:     z.string().email(),
  formation: z.string(),
  message:   z.string().max(1000).optional(),
});

export async function POST(req: Request) {
  const ip = (await headers()).get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans 1 minute." },
      { status: 429 }
    );
  }

  const body = await req.json();
  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  const data = schema.parse(body);

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
    to:   process.env.RESEND_TO_EMAIL!,
    subject: `Demande — ${escHtml(data.formation)} — ${escHtml(data.prenom)} ${escHtml(data.nom)}`,
    html: `
      <h2>Nouvelle demande</h2>
      <p><b>Nom :</b> ${escHtml(data.prenom)} ${escHtml(data.nom)}</p>
      <p><b>Tél :</b> ${escHtml(data.telephone)}</p>
      <p><b>Email :</b> ${escHtml(data.email)}</p>
      <p><b>Formation :</b> ${escHtml(data.formation)}</p>
      <p><b>Message :</b> ${escHtml(data.message ?? "—")}</p>
    `,
  });
  return NextResponse.json({ ok: true });
}
