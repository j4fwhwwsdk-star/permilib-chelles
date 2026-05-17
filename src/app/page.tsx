"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PHONE, SCHOOL_NAME } from "@/lib/site";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 7.1 + 4) % 100}%`,
  delay: `${(i * 0.58) % 8}s`,
  duration: `${8 + (i * 0.44) % 7}s`,
  size: `${3 + (i * 0.3) % 4}px`,
  opacity: 0.22 + (i * 0.035) % 0.38,
}));

const FORMATIONS = [
  { emoji: "🚗", title: "Permis B Manuel",       tag: "Le plus populaire", desc: "Formation complète avec suivi individualisé. Code inclus, véhicules récents 2024.", prix: "990 €",    href: "/formations" },
  { emoji: "⚙️", title: "Boîte Automatique",      tag: "Idéal en ville",    desc: "Formation plus courte et accessible. Départ en automatique dès le 1er cours.",    prix: "Sur devis", href: "/formations" },
  { emoji: "👥", title: "Conduite Accompagnée",   tag: "Dès 15 ans",        desc: "Commencez tôt, accumulez de l'expérience. Examen possible dès 17 ans.",            prix: "Sur devis", href: "/formations" },
];

const AVIS = [
  { init: "M", name: "Marie L.",  formation: "Permis B",            text: "Moniteurs très patients et pédagogues. J'ai eu mon permis du premier coup. Accompagnement au top du début à la fin !" },
  { init: "T", name: "Thomas R.", formation: "Permis B Auto",       text: "Équipe professionnelle, horaires flexibles, ambiance bienveillante. Je recommande vivement à toute ma famille." },
  { init: "S", name: "Sophie M.", formation: "Conduite accompagnée", text: "Formateurs à l'écoute, vraie pédagogie individualisée. Ma fille a passé son permis dès 17 ans. Merci !" },
];

const PHOTOS = [
  { src: "/media/photo1.webp", alt: `${SCHOOL_NAME} - Nos locaux` },
  { src: "/media/photo2.webp", alt: `${SCHOOL_NAME} - Accueil` },
  { src: "/media/photo3.webp", alt: `${SCHOOL_NAME} - Devanture` },
  { src: "/media/photo4.webp", alt: `${SCHOOL_NAME} - Élèves` },
];

const STEPS = [
  { icon: "📋", title: "Inscription", desc: "Venez nous rencontrer en agence ou contactez-nous en ligne. Devis personnalisé gratuit, sans engagement." },
  { icon: "🚗", title: "Formation",   desc: "Code de la route + leçons de conduite à votre rythme. Moniteurs certifiés Qualiopi, véhicules récents 2024." },
  { icon: "🎓", title: "Votre permis !", desc: "Passez votre examen sereinement. Avec 98 % de réussite, on met toutes les chances de votre côté." },
];

const FEATS = [
  { icon: "🏆", val: "98 %",      title: "Taux de réussite", desc: "Parmi les meilleurs taux de Seine-et-Marne." },
  { icon: "💳", val: "CPF + IDF", title: "Financement",       desc: "Jusqu'à 1 000 € d'aide Région Île-de-France." },
  { icon: "🎯", val: "Sur-mesure",title: "Suivi individuel",  desc: "Chaque élève a son propre programme adapté." },
];

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts]         = useState([0, 0, 0, 0]);
  const [statsVisible, setStatsVis] = useState(false);
  const [showCta, setShowCta]       = useState(false);

  /* Vidéo : autoplay + relance quand on remonte (IntersectionObserver) + retour d'onglet */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});

    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) video.play().catch(() => {}); },
      { threshold: 0.01 }
    );
    io.observe(video);

    const onVisibility = () => { if (!document.hidden && video.paused) video.play().catch(() => {}); };
    document.addEventListener("visibilitychange", onVisibility);

    return () => { io.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".sr").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Count-up trigger */
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVis(true); }, { threshold: 0.4 });
    if (statsRef.current) io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  /* Count-up */
  useEffect(() => {
    if (!statsVisible) return;
    const targets = [990, 98, 5, 24];
    let step = 0;
    const t = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / 55, 3);
      setCounts(targets.map((n) => Math.round(n * ease)));
      if (step >= 55) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, [statsVisible]);

  /* CTA mobile sticky */
  useEffect(() => {
    const onScroll = () => setShowCta(window.scrollY > window.innerHeight * 0.65);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --g:   #00e87a;
          --gb:  #00e87a;
          --g2:  #00c462;
          --gg:  rgba(0,232,122,0.55);
          --gd:  rgba(0,232,122,0.12);
          --tx:  #0f172a;
          --mt:  #64748b;
        }

        /* ── Keyframes ── */
        @keyframes kParticle {
          0%  { transform:translateY(0) scale(0); opacity:0; }
          8%  { opacity:1; }
          92% { opacity:.6; }
          100%{ transform:translateY(-100vh) scale(1.3); opacity:0; }
        }
        @keyframes kBadge   { from{opacity:0;transform:translateY(12px) scale(.92)} to{opacity:1;transform:none} }
        @keyframes kTitleIn { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:none} }
        @keyframes kOrb     { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(26px,-16px) scale(1.06)} 66%{transform:translate(-14px,12px) scale(.96)} }
        @keyframes kFloatA  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes kFloatB  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes kFloatC  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
        @keyframes kBounce  { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
        @keyframes kShimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes kGlow    { 0%,100%{box-shadow:0 0 16px var(--gg)} 50%{box-shadow:0 0 46px var(--gg)} }
        @keyframes kMarquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        /* ── Scroll reveal ── */
        .sr{ opacity:0; transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1); }
        .sr.sr-up   { transform:translateY(34px); }
        .sr.sr-left { transform:translateX(-34px); }
        .sr.sr-right{ transform:translateX(34px); }
        .sr.sr-scale{ transform:scale(.92) translateY(14px); }
        .sr.is-visible{ opacity:1!important; transform:none!important; }
        .sr.sd1{ transition-delay:.08s; } .sr.sd2{ transition-delay:.18s; }
        .sr.sd3{ transition-delay:.28s; } .sr.sd4{ transition-delay:.40s; }
        .sr.sd5{ transition-delay:.52s; }

        @media(prefers-reduced-motion:reduce){
          .sr{ transition:opacity .3s ease; transform:none!important; }
          .feat-card,.strip-track,.hero-particle{ animation:none!important; }
          .strip-track{ overflow-x:auto; }
        }

        /* ══ HERO ══ */
        .hero-wrap{
          position:relative; width:100%; height:100vh; min-height:600px;
          overflow:hidden; display:flex; align-items:flex-end;
          padding:0 clamp(20px,5vw,64px) clamp(52px,8vh,88px);
          background:#08142a;
        }
        .hero-vid-box{ position:absolute; inset:0; z-index:0; }
        .hero-vid-box video{ width:100%; height:100%; object-fit:cover; object-position:center 35%; filter:brightness(.88); }
        .hero-overlay{
          position:absolute; inset:0; z-index:1;
          background:linear-gradient(to top,rgba(8,20,42,.97) 0%,rgba(8,20,42,.42) 55%,rgba(8,20,42,.10) 100%),
                     linear-gradient(to right,rgba(8,20,42,.65) 0%,transparent 60%);
        }
        .hero-orb{ position:absolute; border-radius:50%; filter:blur(70px); pointer-events:none; z-index:1; animation:kOrb ease-in-out infinite; }
        .hero-particle{ position:absolute; bottom:0; border-radius:50%; background:var(--gb); animation:kParticle linear infinite; pointer-events:none; z-index:2; }
        .hero-content{ position:relative; z-index:3; max-width:680px; }

        .badge{
          display:inline-flex; align-items:center; gap:8px;
          background:var(--gd); border:1px solid rgba(34,197,94,.4);
          color:var(--gb); font-size:.68rem; font-weight:700; letter-spacing:.2em; text-transform:uppercase;
          padding:7px 16px; border-radius:99px; margin-bottom:24px;
          animation:kBadge .8s cubic-bezier(.34,1.56,.64,1) both .2s;
        }
        .badge-dot{ width:6px; height:6px; border-radius:50%; background:var(--gb); animation:kGlow 2s ease-in-out infinite; }

        .hero-title{
          font-family:var(--font-display),'Bebas Neue',sans-serif;
          font-size:clamp(3.2rem,9vw,8rem); line-height:.92; letter-spacing:.015em; color:#fff; margin-bottom:18px;
        }
        .hero-title .tline{ display:block; overflow:hidden; }
        .hero-title .tline-in{ display:block; animation:kTitleIn .9s cubic-bezier(.22,1,.36,1) both; }
        .hero-title .tline:nth-child(1) .tline-in{ animation-delay:.35s; }
        .hero-title .tline:nth-child(2) .tline-in{ animation-delay:.56s; }
        .hero-title .accent{ color:var(--gb); text-shadow:0 0 40px var(--gg); }

        .hero-sub{ font-size:1rem; font-weight:300; color:rgba(255,255,255,.6); line-height:1.7; max-width:460px; margin-bottom:34px; animation:kTitleIn .9s cubic-bezier(.22,1,.36,1) both .74s; }
        .hero-btns{ display:flex; gap:12px; align-items:center; flex-wrap:wrap; animation:kTitleIn .9s cubic-bezier(.22,1,.36,1) both .92s; }

        .scroll-ind{ position:absolute; bottom:24px; left:50%; z-index:4; display:flex; flex-direction:column; align-items:center; gap:5px; animation:kBounce 2.2s ease-in-out infinite; }
        .scroll-lbl{ font-size:.58rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:rgba(255,255,255,.26); }
        .scroll-arrow{ width:18px; height:18px; border-right:2px solid rgba(34,197,94,.4); border-bottom:2px solid rgba(34,197,94,.4); transform:rotate(45deg); }

        /* ══ BOUTONS ══ */
        .btn-main{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:var(--g); color:#0a1a0a; font-size:.84rem; font-weight:800; letter-spacing:.06em; text-transform:uppercase;
          padding:14px 28px; border-radius:99px; text-decoration:none;
          position:relative; overflow:hidden; transition:transform .2s,box-shadow .25s; box-shadow:0 0 20px var(--gg); white-space:nowrap;
        }
        .btn-main::before{ content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent); background-size:200%; animation:kShimmer 2.8s linear infinite; }
        .btn-main:hover{ transform:translateY(-2px) scale(1.03); box-shadow:0 0 50px var(--gg),0 6px 24px rgba(0,232,122,.35); }

        .btn-ghost-dark{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          color:rgba(255,255,255,.82); font-size:.84rem; font-weight:600; text-decoration:none;
          border:1px solid rgba(255,255,255,.22); padding:13px 24px; border-radius:99px;
          transition:border-color .25s,color .25s,background .25s; white-space:nowrap;
        }
        .btn-ghost-dark:hover{ border-color:var(--g); color:var(--g); background:var(--gd); }

        .btn-ghost{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          color:var(--tx); font-size:.84rem; font-weight:600; text-decoration:none;
          border:1.5px solid #e2e8f0; padding:12px 24px; border-radius:99px;
          transition:border-color .25s,color .25s,background .25s; white-space:nowrap;
        }
        .btn-ghost:hover{ border-color:var(--g); color:#0a1a0a; background:var(--gd); }

        .btn-dark{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:#0a1a0a; color:#fff; font-size:.84rem; font-weight:800; letter-spacing:.06em; text-transform:uppercase;
          padding:14px 28px; border-radius:99px; text-decoration:none;
          transition:transform .2s,box-shadow .25s; white-space:nowrap;
        }
        .btn-dark:hover{ transform:translateY(-2px); box-shadow:0 6px 24px rgba(0,0,0,.4); }

        .btn-ghost-on-neon{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          color:#0a1a0a; font-size:.84rem; font-weight:600; text-decoration:none;
          border:2px solid rgba(10,26,10,.28); padding:12px 24px; border-radius:99px;
          transition:border-color .25s,background .25s; white-space:nowrap;
        }
        .btn-ghost-on-neon:hover{ border-color:#0a1a0a; background:rgba(10,26,10,.1); }

        /* ══ STATS ══ */
        .stats-bar{
          background:#0f172a; border-top:3px solid var(--g);
          display:grid; grid-template-columns:repeat(4,1fr); position:relative; overflow:hidden;
        }
        .stats-bar::after{ content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,rgba(0,232,122,.06),transparent); animation:kShimmer 5s linear infinite; pointer-events:none; }
        .stat-item{ text-align:center; padding:28px 16px; border-right:1px solid rgba(0,232,122,.10); transition:background .3s; }
        .stat-item:last-child{ border-right:none; }
        .stat-item:hover{ background:rgba(0,232,122,.05); }
        .stat-num{ font-family:var(--font-display),'Bebas Neue',sans-serif; font-size:2.8rem; color:var(--g); line-height:1; text-shadow:0 0 28px var(--gg); }
        .stat-lbl{ font-size:.64rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.38); margin-top:5px; }

        /* ══ SECTIONS ══ */
        .sec{ padding:clamp(56px,8vw,108px) clamp(20px,5vw,64px); }
        .sec-inner{ max-width:1200px; margin:0 auto; }
        .sec-inner-sm{ max-width:1080px; margin:0 auto; }

        .sec-tag{ font-size:.67rem; font-weight:700; letter-spacing:.24em; text-transform:uppercase; color:var(--g2); display:flex; align-items:center; gap:10px; margin-bottom:8px; }
        .sec-tag::before{ content:''; display:block; width:24px; height:2px; background:var(--g); border-radius:1px; box-shadow:0 0 8px var(--gg); }
        .sec-h2{ font-family:var(--font-display),'Bebas Neue',sans-serif; font-size:clamp(2rem,5.5vw,4.8rem); letter-spacing:.02em; color:var(--tx); line-height:.95; margin:0; }
        .accent{ color:var(--g); text-shadow:0 0 22px var(--gg); }

        .sec-head{ margin-bottom:clamp(32px,5vw,52px); }
        .sec-head-row{ display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:14px; }

        /* ══ WELCOME ══ */
        .welcome-grid{ display:grid; grid-template-columns:1fr 1fr; min-height:500px; }
        .welcome-img-wrap{ position:relative; overflow:hidden; }
        .welcome-img-el{ object-fit:cover; filter:brightness(.92) saturate(1.1); }
        .welcome-img-fade{ position:absolute; inset:0; background:linear-gradient(to right,transparent 55%,#fff 100%); pointer-events:none; }
        .welcome-body{ padding:clamp(40px,6vw,80px) clamp(26px,5vw,64px); display:flex; flex-direction:column; justify-content:center; background:#fff; }
        .welcome-txt{ font-size:.97rem; color:var(--mt); line-height:1.75; max-width:460px; margin-bottom:22px; }
        .welcome-chips{ display:flex; flex-wrap:wrap; gap:8px; margin-bottom:26px; }
        .wchip{ display:inline-flex; align-items:center; gap:6px; background:var(--gd); border:1.5px solid rgba(0,232,122,.3); color:#0a1a0a; font-size:.66rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; padding:6px 13px; border-radius:99px; transition:background .25s,border-color .25s; }
        .wchip:hover{ background:rgba(0,232,122,.2); border-color:var(--g); }

        /* ══ STEPS ══ */
        .steps-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:48px; position:relative; }
        .steps-grid::before{ content:''; position:absolute; top:38px; left:calc(16.67% + 20px); right:calc(16.67% + 20px); height:2px; background:linear-gradient(90deg,transparent,var(--g) 20%,var(--g) 80%,transparent); box-shadow:0 0 10px var(--gg); opacity:.4; }
        .step-card{ background:#fff; border:1.5px solid #d1fae5; border-radius:20px; padding:28px 22px; text-align:center; box-shadow:0 4px 18px rgba(0,232,122,.07); transition:transform .3s,box-shadow .3s,border-color .3s; }
        .step-card:hover{ transform:translateY(-5px); box-shadow:0 14px 40px rgba(0,232,122,.14); border-color:rgba(0,232,122,.5); }
        .step-circle{ width:76px; height:76px; border-radius:50%; background:#f0fdf4; border:2px solid rgba(0,232,122,.32); display:flex; align-items:center; justify-content:center; margin:0 auto 20px; position:relative; z-index:1; transition:border-color .3s,background .3s,box-shadow .3s; }
        .step-card:hover .step-circle{ background:var(--gd); border-color:var(--g); box-shadow:0 0 28px var(--gg); }
        .step-n{ font-family:var(--font-display),'Bebas Neue',sans-serif; font-size:1.65rem; color:var(--g); letter-spacing:.04em; line-height:1; text-shadow:0 0 14px var(--gg); }
        .step-ico{ position:absolute; top:-5px; right:-3px; font-size:1.2rem; }
        .step-ttl{ font-size:1.05rem; font-weight:700; color:var(--tx); margin-bottom:8px; }
        .step-desc{ font-size:.84rem; color:var(--mt); line-height:1.65; }

        /* ══ NEON DIVIDER ══ */
        .ndiv{ display:flex; align-items:center; gap:20px; padding:18px clamp(20px,5vw,64px); background:#f8fafc; border-top:1px solid #f1f5f9; border-bottom:1px solid #f1f5f9; }
        .ndiv-line{ flex:1; height:1px; background:linear-gradient(90deg,transparent,rgba(34,197,94,.28),transparent); }
        .ndiv-txt{ font-family:var(--font-display),'Bebas Neue',sans-serif; font-size:.88rem; letter-spacing:.22em; color:var(--gb); text-shadow:0 0 12px rgba(34,197,94,.35); white-space:nowrap; }

        /* ══ FORMATIONS ══ */
        .form-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .form-card{ background:#fff; border:1.5px solid #e8f5ee; border-radius:20px; padding:28px 22px; display:flex; flex-direction:column; text-decoration:none; position:relative; overflow:hidden; box-shadow:0 4px 22px rgba(0,0,0,.06); transition:border-color .3s,transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s; }
        .form-card::before{ content:''; position:absolute; top:0;left:0;right:0;height:3px; background:linear-gradient(90deg,transparent,var(--g),transparent); opacity:0; transition:opacity .35s; }
        .form-card:hover{ border-color:rgba(0,232,122,.55); transform:translateY(-7px); box-shadow:0 22px 52px rgba(0,232,122,.14),0 4px 16px rgba(0,0,0,.05); }
        .form-card:hover::before{ opacity:1; }
        .form-emoji{ font-size:2rem; margin-bottom:10px; }
        .form-tag{ font-size:.65rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:#0a1a0a; background:var(--gd); border:1.5px solid rgba(0,232,122,.3); padding:4px 10px; border-radius:99px; display:inline-block; margin-bottom:12px; width:fit-content; }
        .form-title{ font-size:1.08rem; font-weight:700; color:var(--tx); margin-bottom:8px; }
        .form-desc{ font-size:.85rem; color:var(--mt); line-height:1.62; flex:1; margin-bottom:16px; }
        .form-prix{ font-family:var(--font-display),'Bebas Neue',sans-serif; font-size:1.55rem; color:var(--g); letter-spacing:.04em; text-shadow:0 0 16px var(--gg); }
        .form-arrow{ font-size:.78rem; font-weight:600; color:#94a3b8; margin-top:10px; transition:color .25s,transform .25s; display:block; }
        .form-card:hover .form-arrow{ color:var(--g); transform:translateX(4px); }

        /* ══ AVIS ══ */
        .avis-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .avis-card{ background:#fff; border:1.5px solid #e4f5e4; border-radius:20px; padding:24px 22px; display:flex; flex-direction:column; position:relative; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,.05); transition:border-color .3s,transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s; }
        .avis-card:hover{ border-color:rgba(0,232,122,.45); transform:translateY(-5px); box-shadow:0 14px 42px rgba(0,232,122,.12); }
        .avis-quote{ position:absolute; top:8px; right:14px; font-family:var(--font-display),'Bebas Neue',sans-serif; font-size:68px; line-height:1; color:rgba(0,232,122,.07); pointer-events:none; user-select:none; }
        .avis-stars{ display:flex; gap:2px; margin-bottom:12px; color:#f59e0b; font-size:.85rem; }
        .avis-text{ font-size:.86rem; color:var(--mt); line-height:1.65; font-style:italic; flex:1; margin-bottom:16px; position:relative; z-index:1; }
        .avis-foot{ display:flex; align-items:center; justify-content:space-between; border-top:1px solid #f0fdf4; padding-top:12px; }
        .avis-avatar{ width:36px; height:36px; border-radius:10px; background:var(--g); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.9rem; color:#0a1a0a; box-shadow:0 0 12px var(--gg); flex-shrink:0; }
        .avis-name{ font-weight:700; font-size:.84rem; color:var(--tx); }
        .avis-sub{ font-size:.70rem; color:var(--mt); margin-top:1px; }
        .avis-badge{ font-size:.65rem; font-weight:700; color:#0a1a0a; background:var(--gd); border:1.5px solid rgba(0,232,122,.3); padding:3px 9px; border-radius:99px; }

        /* ══ FEAT ══ */
        .feat-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        .feat-card{ background:#fff; border:1.5px solid #e8f5ee; border-radius:20px; padding:36px 26px; text-align:center; position:relative; overflow:hidden; box-shadow:0 4px 22px rgba(0,0,0,.06); transition:border-color .35s,box-shadow .35s,transform .35s; }
        .feat-card:nth-child(1){ animation:kFloatA 7s ease-in-out infinite; }
        .feat-card:nth-child(2){ animation:kFloatB 8.5s ease-in-out infinite 1.2s; }
        .feat-card:nth-child(3){ animation:kFloatC 6.5s ease-in-out infinite .6s; }
        .feat-card::before{ content:''; position:absolute; top:0;left:0;right:0;height:3px; background:linear-gradient(90deg,transparent,var(--g),transparent); opacity:0; transition:opacity .35s; }
        .feat-card:hover{ border-color:rgba(0,232,122,.55); box-shadow:0 22px 60px rgba(0,232,122,.16); transform:translateY(-8px)!important; }
        .feat-card:hover::before{ opacity:1; }
        .feat-icon{ font-size:2.6rem; margin-bottom:12px; }
        .feat-val{ font-family:var(--font-display),'Bebas Neue',sans-serif; font-size:2.5rem; color:var(--g); letter-spacing:.04em; line-height:1; text-shadow:0 0 24px var(--gg); margin-bottom:6px; }
        .feat-ttl{ font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--mt); margin-bottom:10px; }
        .feat-desc{ font-size:.86rem; color:var(--mt); line-height:1.6; }
        .feat-glow{ position:absolute; width:130px; height:130px; border-radius:50%; background:radial-gradient(circle,rgba(0,232,122,.18) 0%,transparent 70%); bottom:-30px; right:-30px; filter:blur(20px); opacity:0; transition:opacity .35s; pointer-events:none; }
        .feat-card:hover .feat-glow{ opacity:1; }

        /* ══ STRIP ══ */
        .strip-wrap{ overflow:hidden; mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent); -webkit-mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent); touch-action:pan-y; }
        .strip-track{ display:flex; gap:12px; animation:kMarquee 30s linear infinite; width:max-content; pointer-events:none; }
        .strip-track:hover{ animation-play-state:paused; }
        .strip-card{ width:260px; height:350px; border-radius:16px; overflow:hidden; flex-shrink:0; border:2px solid #d1fae5; transition:border-color .3s,box-shadow .3s; }
        .strip-card:hover{ border-color:var(--g); box-shadow:0 0 28px var(--gg); }
        .strip-card img{ width:100%; height:100%; object-fit:cover; filter:saturate(.9); transition:transform .6s ease,filter .4s; }
        .strip-card:hover img{ transform:scale(1.06); filter:saturate(1.2); }

        /* ══ CTA ══ */
        .cta-box{ margin:0 clamp(18px,5vw,56px) clamp(56px,8vw,96px); padding:clamp(40px,6vw,70px) clamp(24px,5vw,64px); background:var(--g); border-radius:24px; display:flex; align-items:center; justify-content:space-between; gap:32px; position:relative; overflow:hidden; box-shadow:0 0 60px var(--gg),0 20px 60px rgba(0,232,122,.22); }
        .cta-box::before{ content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.16) 0%,transparent 55%); pointer-events:none; }
        .cta-orb{ position:absolute; border-radius:50%; filter:blur(50px); pointer-events:none; animation:kOrb ease-in-out infinite; background:rgba(255,255,255,.14); }
        .cta-h2{ font-family:var(--font-display),'Bebas Neue',sans-serif; font-size:clamp(1.8rem,4.5vw,3.2rem); letter-spacing:.03em; color:#0a1a0a; line-height:1; margin-bottom:10px; }
        .cta-p{ font-size:.95rem; font-weight:500; color:rgba(10,26,10,.66); line-height:1.6; }
        .cta-acts{ display:flex; flex-direction:column; gap:10px; flex-shrink:0; position:relative; z-index:1; }

        /* ══ MOBILE STICKY ══ */
        .mobile-cta{ position:fixed; bottom:0; left:0; right:0; z-index:200; display:none; padding:10px 16px; padding-bottom:max(10px,env(safe-area-inset-bottom,10px)); background:rgba(255,255,255,.96); border-top:2px solid var(--g); box-shadow:0 -4px 20px rgba(0,232,122,.12); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); transition:transform .4s cubic-bezier(.16,1,.3,1); gap:10px; }
        .mobile-cta.show{ transform:translateY(0); }
        .mobile-cta.hide{ transform:translateY(100%); }

        /* ══ RESPONSIVE ══ */
        @media(max-width:900px){
          /* transitions plus douces sur mobile */
          .sr{ transition:opacity .5s ease,transform .5s ease; }
          .sr.sr-up   { transform:translateY(22px); }
          .sr.sr-left { transform:translateY(22px); }
          .sr.sr-right{ transform:translateY(22px); }
          .sr.sr-scale{ transform:scale(.96) translateY(10px); }

          .stats-bar{ grid-template-columns:repeat(2,1fr); }
          .stat-item{ border-bottom:1px solid rgba(34,197,94,.07); padding:22px 14px; }
          .stat-num{ font-size:2.2rem; }

          .welcome-grid{ grid-template-columns:1fr; }
          .welcome-img-wrap{ min-height:260px; }
          .welcome-img-fade{ background:linear-gradient(to bottom,transparent 50%,#fff 100%); }
          .welcome-body{ padding:32px 20px 40px; }

          .steps-grid{ grid-template-columns:1fr; gap:14px; margin-top:32px; }
          .steps-grid::before{ display:none; }
          .step-card{ padding:20px 18px; display:flex; align-items:flex-start; gap:16px; text-align:left; }
          .step-circle{ margin:0; width:56px; height:56px; flex-shrink:0; }
          .step-n{ font-size:1.4rem; }

          .form-grid{ grid-template-columns:1fr; gap:12px; }
          .avis-grid{ grid-template-columns:1fr; gap:12px; }
          .feat-grid{ grid-template-columns:1fr; gap:12px; }
          .feat-card{ animation:none!important; }

          .cta-box{ flex-direction:column; text-align:center; border-radius:18px; margin:0 14px clamp(40px,6vw,70px); }
          .cta-acts{ align-items:stretch; width:100%; }
          .mobile-cta{ display:flex; align-items:center; }
          .scroll-ind{ display:none; }
        }

        @media(max-width:600px){
          .hero-title{ font-size:clamp(2.8rem,13vw,4.2rem); }
          .sec{ padding:44px 16px; }
          .hero-btns{ flex-direction:column; align-items:stretch; }
          .strip-card{ width:210px; height:290px; }
          .feat-card{ padding:28px 18px; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="hero-wrap" style={{ marginTop: "-64px" }}>
        <div className="hero-vid-box">
          <video ref={videoRef} autoPlay muted loop playsInline preload="auto">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="hero-orb" style={{ width:360,height:360, background:"radial-gradient(circle,rgba(34,197,94,.14) 0%,transparent 70%)", bottom:"5%", left:"2%", animationDuration:"13s" }} />
        <div className="hero-orb" style={{ width:220,height:220, background:"radial-gradient(circle,rgba(34,197,94,.09) 0%,transparent 70%)", top:"18%", right:"12%", animationDuration:"10s", animationDelay:"4s" }} />
        {PARTICLES.map((p) => (
          <div key={p.id} className="hero-particle" style={{ left:p.left, width:p.size, height:p.size, opacity:p.opacity, animationDelay:p.delay, animationDuration:p.duration }} />
        ))}
        <div className="hero-content">
          <div className="badge"><span className="badge-dot" />📍 Chelles — Auto-école agréée</div>
          <h1 className="hero-title">
            <span className="tline"><span className="tline-in">Votre réussite,</span></span>
            <span className="tline"><span className="tline-in"><span className="accent">notre fierté.</span></span></span>
          </h1>
          <p className="hero-sub">
            Formule libérale, accompagnement personnalisé et taux de réussite exceptionnel.
            Rejoins l&apos;équipe {SCHOOL_NAME} !
          </p>
          <div className="hero-btns">
            <a href={`tel:${PHONE}`} className="btn-main">📞 {PHONE}</a>
            <Link href="/formations" className="btn-ghost-dark">Nos formations →</Link>
          </div>
        </div>
        <div className="scroll-ind">
          <span className="scroll-lbl">Scroll</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div className="stats-bar sr sr-up" ref={statsRef}>
        {[
          { n: counts[0], s: " €", l: "Permis Auto dès" },
          { n: counts[1], s: " %", l: "Taux de réussite" },
          { n: counts[2], s: " ★", l: "Note Google" },
          { n: counts[3], s: " h", l: "Réponse garantie" },
        ].map((st, i) => (
          <div key={i} className="stat-item">
            <div className="stat-num">{st.n}<span style={{ fontSize: "1.5rem" }}>{st.s}</span></div>
            <div className="stat-lbl">{st.l}</div>
          </div>
        ))}
      </div>

      {/* ══ WELCOME ══ */}
      <section style={{ background: "#fff", overflow: "hidden", borderTop: "1px solid #f1f5f9" }} id="agence">
        <div className="welcome-grid">
          <div className="welcome-img-wrap sr sr-left">
            <Image src="/media/photo2.webp" alt={`${SCHOOL_NAME} — Notre salon à Chelles`} fill className="welcome-img-el" sizes="(max-width:900px) 100vw, 50vw" />
            <div className="welcome-img-fade" />
          </div>
          <div className="welcome-body sr sr-right">
            <p className="sec-tag">Notre agence</p>
            <h2 className="sec-h2" style={{ marginBottom: 16 }}>
              Bienvenue chez<br /><span className="accent">{SCHOOL_NAME}</span>
            </h2>
            <p className="welcome-txt">
              Auto-école agréée à Chelles, nous accompagnons nos élèves du premier cours jusqu&apos;à
              l&apos;obtention du permis. Équipe certifiée Qualiopi, véhicules récents et financement CPF.
            </p>
            <div className="welcome-chips">
              <span className="wchip">✅ Qualiopi</span>
              <span className="wchip">📍 Chelles, 77500</span>
              <span className="wchip">🕐 Lun – Sam</span>
              <span className="wchip">💳 CPF accepté</span>
              <span className="wchip">🎓 98 % de réussite</span>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`tel:${PHONE}`} className="btn-main">📞 {PHONE}</a>
              <Link href="/a-propos" className="btn-ghost">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMMENT ÇA MARCHE ══ */}
      <section className="sec" style={{ background: "#f0fdf4", borderTop: "1px solid #d1fae5" }}>
        <div className="sec-inner-sm">
          <div className="sr sr-up sec-head" style={{ textAlign: "center" }}>
            <p className="sec-tag" style={{ justifyContent: "center" }}>Simple &amp; rapide</p>
            <h2 className="sec-h2">Comment obtenir votre <span className="accent">permis ?</span></h2>
          </div>
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} className={`step-card sr sr-up sd${i + 2}`}>
                <div className="step-circle">
                  <span className="step-n">0{i + 1}</span>
                  <span className="step-ico">{s.icon}</span>
                </div>
                <div>
                  <h3 className="step-ttl">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sr sr-up sd5" style={{ textAlign: "center", marginTop: 44 }}>
            <a href={`tel:${PHONE}`} className="btn-main">Commencer maintenant →</a>
          </div>
        </div>
      </section>

      {/* ══ DIVIDER ══ */}
      <div className="ndiv">
        <div className="ndiv-line" /><span className="ndiv-txt">✦ PERMI LIB&apos; CHELLES ✦</span><div className="ndiv-line" />
      </div>

      {/* ══ FORMATIONS ══ */}
      <section className="sec" id="offres" style={{ background: "#fff" }}>
        <div className="sec-inner">
          <div className="sec-head sec-head-row">
            <div className="sr sr-left">
              <p className="sec-tag">Nos formations</p>
              <h2 className="sec-h2">Choisissez votre <span className="accent">permis</span></h2>
            </div>
            <Link href="/formations" className="btn-ghost sr sr-right" style={{ fontSize: ".8rem" }}>Toutes les formations →</Link>
          </div>
          <div className="form-grid">
            {FORMATIONS.map((f, i) => (
              <Link key={i} href={f.href} className={`form-card sr sr-up sd${i + 2}`}>
                <span className="form-emoji">{f.emoji}</span>
                <span className="form-tag">{f.tag}</span>
                <h3 className="form-title">{f.title}</h3>
                <p className="form-desc">{f.desc}</p>
                <div className="form-prix">{f.prix}</div>
                <span className="form-arrow">Voir la formation →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AVIS ══ */}
      <section className="sec" style={{ background: "#f0fdf4", borderTop: "1px solid #d1fae5" }}>
        <div className="sec-inner">
          <div className="sec-head sec-head-row">
            <div className="sr sr-left">
              <p className="sec-tag">Témoignages</p>
              <h2 className="sec-h2">Ils ont eu leur <span className="accent">permis</span></h2>
            </div>
            <Link href="/avis" className="btn-ghost sr sr-right" style={{ fontSize: ".8rem" }}>Tous les avis →</Link>
          </div>
          <div className="avis-grid">
            {AVIS.map((a, i) => (
              <div key={i} className={`avis-card sr sr-up sd${i + 2}`}>
                <span className="avis-quote">&ldquo;</span>
                <div className="avis-stars">{"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}</div>
                <p className="avis-text">&ldquo;{a.text}&rdquo;</p>
                <div className="avis-foot">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div className="avis-avatar">{a.init}</div>
                    <div><div className="avis-name">{a.name}</div><div className="avis-sub">Élève vérifié</div></div>
                  </div>
                  <span className="avis-badge">{a.formation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="sec" style={{ background: "#fff", borderTop: "1px solid #f1f5f9", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 20% 50%,rgba(0,232,122,.04) 0%,transparent 70%),radial-gradient(ellipse 50% 50% at 80% 50%,rgba(0,232,122,.03) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="sec-inner-sm" style={{ position: "relative", zIndex: 1 }}>
          <div className="sr sr-up sec-head" style={{ textAlign: "center" }}>
            <p className="sec-tag" style={{ justifyContent: "center" }}>Pourquoi nous choisir</p>
            <h2 className="sec-h2">Des atouts <span className="accent">uniques</span></h2>
          </div>
          <div className="feat-grid">
            {FEATS.map((f, i) => (
              <div key={i} className={`feat-card sr sr-up sd${i + 2}`}>
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-val">{f.val}</div>
                <div className="feat-ttl">{f.title}</div>
                <p className="feat-desc">{f.desc}</p>
                <div className="feat-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STRIP ══ */}
      <section style={{ paddingBottom: "clamp(56px,8vw,96px)", overflow: "hidden", background: "#f0fdf4", borderTop: "1px solid #d1fae5" }}>
        <div className="sec sr sr-up" style={{ paddingBottom: 32 }}>
          <p className="sec-tag">Nos élèves</p>
          <h2 className="sec-h2">Ils ont réussi <span className="accent">avec nous</span></h2>
        </div>
        <div className="strip-wrap">
          <div className="strip-track">
            {[...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS].map((p, i) => (
              <div key={i} className="strip-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <div className="cta-box sr sr-scale" id="contact">
        <div className="cta-orb" style={{ width:280,height:280, top:"-70px",right:"-50px", animationDuration:"11s" }} />
        <div className="cta-orb" style={{ width:160,height:160, bottom:"-45px",left:"8%", animationDuration:"15s",animationDelay:"5s" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className="cta-h2">Prêt à passer <span style={{ color: "rgba(255,255,255,.9)" }}>ton permis ?</span></h2>
          <p className="cta-p">Contacte-nous dès aujourd&apos;hui. Devis gratuit · CPF · Aide IDF jusqu&apos;à 1 000 €.</p>
        </div>
        <div className="cta-acts">
          <a href={`tel:${PHONE}`} className="btn-dark">📞 {PHONE}</a>
          <Link href="/contact" className="btn-ghost-on-neon" style={{ textAlign: "center" }}>Formulaire de contact →</Link>
        </div>
      </div>

      {/* ══ MOBILE STICKY ══ */}
      <div className={`mobile-cta ${showCta ? "show" : "hide"}`}>
        <a href={`tel:${PHONE}`} className="btn-main" style={{ flex: 1, fontSize: ".88rem" }}>📞 {PHONE}</a>
        <Link href="/contact" className="btn-ghost" style={{ flexShrink: 0, fontSize: ".8rem" }}>Contact</Link>
      </div>
    </>
  );
}
