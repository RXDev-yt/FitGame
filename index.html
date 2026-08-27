<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Fit Royale — Arcade Fitness RPG</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<style>
  :root{
    --bg-dark:#141C33;
    --bg-deep:#0B1222;
    --card-dark:rgba(30,41,59,0.82);
    --card-solid:#1E293B;
    --card-2:#273449;
    --purple:#8B5CF6;
    --purple-deep:#6D28D9;
    --gold:#F59E0B;
    --red:#F87171;
    --green:#10B981;
    --text:#F1F5F9;
    --dim:#A9B6CC;
    --line:rgba(241,245,249,0.10);
    --grad-purple:linear-gradient(135deg,#8B5CF6,#6D28D9);
    --grad-cta:linear-gradient(135deg,#8B5CF6 10%,#F59E0B 120%);
  }
  *{ box-sizing:border-box; margin:0; padding:0; -webkit-tap-highlight-color:transparent; }
  html,body{ height:100%; }
  body{
    background:#070B14; color:var(--text);
    font-family:'Nunito',system-ui,sans-serif; line-height:1.5;
    display:flex; justify-content:center; overflow:hidden;
  }
  button{ font-family:inherit; color:inherit; background:none; border:none; cursor:pointer; }
  svg{ display:block; }
  h1,h2,h3,.hdr{ font-weight:900; text-shadow:0 3px 0 rgba(0,0,0,0.45); letter-spacing:0.01em; }

  #app{ position:relative; width:100%; max-width:430px; height:100dvh; background:var(--bg-dark); overflow:hidden; box-shadow:0 0 90px rgba(139,92,246,0.22); }
  .screen{ position:absolute; inset:0; overflow-y:auto; padding:13px 14px 92px; display:none; scrollbar-width:none; }
  .screen::-webkit-scrollbar{ display:none; }
  .screen.active{ display:block; animation:si .2s ease; }
  @keyframes si{ from{opacity:0; transform:translateY(8px);} to{opacity:1;} }

  .card{ padding:14px; margin-bottom:10px; background:var(--card-dark); backdrop-filter:blur(8px); border:1px solid var(--line); border-radius:20px; padding:16px; margin-bottom:13px; }
  .row{ display:flex; align-items:center; }
  .grow{ flex:1; }
  .dim{ color:var(--dim); }
  .gold{ color:var(--gold); }
  .green{ color:var(--green); }
  .red{ color:var(--red); }

  .pbar{ height:9px; border-radius:99px; background:rgba(0,0,0,0.4); overflow:hidden; }
  .pbar i{ display:block; height:100%; border-radius:99px; transition:width .45s cubic-bezier(.2,.9,.3,1.15); }
  .fill-p i{ background:var(--grad-purple); }
  .fill-g i{ background:linear-gradient(90deg,#FCD34D,var(--gold)); }
  .fill-r i{ background:linear-gradient(90deg,#F87171,var(--red)); }
  .fill-gr i{ background:linear-gradient(90deg,#34D399,var(--green)); }

  .btn{ font-size:15.5px; display:flex; align-items:center; justify-content:center; gap:8px; font-weight:900; font-size:15px; padding:15px; border-radius:16px; width:100%; transition:transform .1s, filter .15s; text-shadow:0 2px 0 rgba(0,0,0,0.3); }
  .btn:active{ transform:scale(.97); }
  .b-purple{ background:var(--grad-purple); color:#fff; box-shadow:0 6px 18px rgba(139,92,246,.45); }
  .b-gold{ background:linear-gradient(135deg,#FCD34D,var(--gold)); color:#3A2503; text-shadow:none; box-shadow:0 6px 18px rgba(245,158,11,.4); }
  .b-red{ background:linear-gradient(135deg,#F87171,var(--red)); color:#fff; box-shadow:0 6px 18px rgba(239,68,68,.4); }
  .b-ghost{ background:var(--card-2); border:1px solid var(--line); }
  .b-cta{ background:var(--grad-cta); color:#fff; box-shadow:0 0 26px rgba(245,158,11,.5),0 8px 22px rgba(139,92,246,.5); animation:glowP 2.2s infinite; }
  @keyframes glowP{ 50%{ box-shadow:0 0 40px rgba(245,158,11,.75),0 8px 22px rgba(139,92,246,.6);} }
  .b-sm{ padding:9px 15px; width:auto; font-size:12.5px; border-radius:12px; }

  .chip{ display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:900; padding:5px 10px; border-radius:99px; background:var(--card-2); color:var(--dim); }
  .rchip svg{ display:inline-block; vertical-align:-2px; }
  .pod .crown svg{ margin:0 auto; }

  /* ---- TOP STATUS BAR (home) ---- */
  .statusbar{ display:flex; align-items:center; gap:10px; margin-bottom:16px; }
  .av-wrap{ position:relative; flex:none; }
  .avatar{ width:46px; height:46px; border-radius:50%; background:var(--grad-purple); display:flex; align-items:center; justify-content:center; font-weight:900; font-size:15px; }
  .av-frame-gold .avatar{ box-shadow:0 0 0 3px var(--gold),0 0 16px rgba(245,158,11,.6); }
  .av-frame-neon .avatar{ box-shadow:0 0 0 3px var(--green),0 0 18px rgba(16,185,129,.7); animation:glowP 1.8s infinite; }
  .av-pet{ position:absolute; right:-8px; bottom:-6px; font-size:17px; filter:drop-shadow(0 2px 3px rgba(0,0,0,.6)); }
  .lvl-badge{ position:absolute; left:-6px; top:-6px; background:var(--gold); color:#3A2503; font-size:9.5px; font-weight:900; padding:2px 6px; border-radius:99px; box-shadow:0 2px 5px rgba(0,0,0,.5); }
  .xp-mini{ flex:1; }
  .xp-mini .t{ display:flex; justify-content:space-between; font-size:10.5px; font-weight:900; color:var(--dim); margin-bottom:4px; }
  .pillstat{ display:flex; align-items:center; gap:4px; font-weight:900; font-size:12.5px; background:var(--card-dark); border:1px solid var(--line); padding:7px 10px; border-radius:99px; flex:none; }

  /* ---- HOME ---- */
  .boss-banner{ background:linear-gradient(135deg,#3B1D6E,#1E293B); border:1px solid rgba(139,92,246,.5); position:relative; overflow:hidden; }
  .boss-banner::after{ content:""; position:absolute; inset:0; background:radial-gradient(circle at 88% 15%,rgba(245,158,11,.25),transparent 45%); pointer-events:none; }
  .boss-sprite{ font-size:52px; filter:drop-shadow(0 6px 8px rgba(0,0,0,.6)); animation:bob 2.4s ease-in-out infinite; }
  @keyframes bob{ 50%{ transform:translateY(-6px);} }
  .boss-tag{ font-size:10px; font-weight:900; letter-spacing:.12em; color:var(--gold); }
  .boss-nm{ font-size:19px; font-weight:900; }
  .reward-chips{ display:flex; gap:7px; margin-top:9px; flex-wrap:wrap; }
  .rchip{ font-size:11px; font-weight:900; padding:4px 10px; border-radius:99px; background:rgba(0,0,0,.35); }

  .quest-card .row{ gap:12px; margin-bottom:9px; }
  .q-ico{ width:42px; height:42px; border-radius:13px; background:var(--card-2); display:flex; align-items:center; justify-content:center; font-size:19px; flex:none; }
  .quest-card b{ font-size:14px; }
  .quest-card .sub{ font-size:11.5px; color:var(--dim); font-weight:700; }
  .q-foot{ display:flex; justify-content:space-between; align-items:center; margin-top:9px; font-size:12px; font-weight:900; }
  .claim{ background:var(--gold); color:#3A2503; padding:7px 14px; border-radius:99px; font-weight:900; font-size:12px; }
  .claim:disabled{ background:var(--card-2); color:var(--dim); }

  .qstats{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; }
  .qstat{ background:var(--card-dark); border:1px solid var(--line); border-radius:16px; padding:12px 8px; text-align:center; }
  .qstat .n{ font-size:19px; font-weight:900; }
  .qstat .l{ font-size:9.5px; font-weight:900; color:var(--dim); letter-spacing:.06em; text-transform:uppercase; }

  .seclbl{ color:var(--gold); letter-spacing:.16em; font-size:11px; font-weight:900; letter-spacing:.14em; text-transform:uppercase; color:var(--dim); margin:18px 0 9px; }

  /* ---- CAMPAIGN MAP ---- */
  .chap-head{ background:linear-gradient(135deg,#233355,#1E293B); }
  #map-wrap{ position:relative; margin-top:6px; min-height:200px; }
  #map-svg{ position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
  #map-wrap::before{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0;
    background:
      radial-gradient(360px 200px at 12% 6%, rgba(139,92,246,.14), transparent 62%),
      radial-gradient(320px 180px at 88% 42%, rgba(245,158,11,.10), transparent 62%),
      radial-gradient(340px 200px at 20% 82%, rgba(16,185,129,.08), transparent 62%); }
  .node{ z-index:2; }
  .node.done{ border-color:rgba(16,185,129,.65); box-shadow:0 0 16px rgba(16,185,129,.28); }
  .node.act{ box-shadow:0 0 0 4px rgba(245,158,11,.20), 0 0 26px rgba(245,158,11,.55); }
  .node.lock{ filter:saturate(.35) brightness(.72); }
  .node .num{ background:rgba(0,0,0,.62); backdrop-filter:blur(3px); }
  .node .st{ text-shadow:0 1px 3px rgba(0,0,0,.8); }
  .chap-head{ background:linear-gradient(140deg,#2A1A63,#171240 70%,#0F172A);
    border:1.5px solid rgba(245,158,11,.35); box-shadow:0 10px 30px rgba(0,0,0,.5); }
  .chap-prog{ height:8px; border-radius:99px; background:rgba(0,0,0,.4); overflow:hidden; margin-top:10px; }
  .chap-prog i{ display:block; height:100%; border-radius:99px;
    background:linear-gradient(90deg,var(--violet-light),var(--gold)); box-shadow:0 0 12px rgba(245,158,11,.6);
    transition:width .6s cubic-bezier(.2,.9,.3,1.1); }
  .node.boss{ width:76px; height:76px; border-width:3px; box-shadow:0 0 26px rgba(239,68,68,.6); }
  .node.boss .em svg{ width:44px; height:44px; }
  .node.boss::after{ content:"BIG MATCH"; position:absolute; bottom:-16px; left:50%; transform:translateX(-50%);
    font-size:8.5px; font-weight:900; letter-spacing:.12em; color:var(--red); }
  .node{ position:absolute; width:62px; height:62px; border-radius:50%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-weight:900; transition:transform .1s; }
  .node:active{ transform:scale(.94); }
  .node .em{ font-size:22px; }
  .node .st{ font-size:9px; letter-spacing:1px; margin-top:-2px; }
  .node.done{ background:linear-gradient(135deg,#FCD34D,var(--gold)); color:#3A2503; box-shadow:0 5px 14px rgba(245,158,11,.5); }
  .node.act{ background:var(--grad-purple); color:#fff; box-shadow:0 0 0 5px rgba(139,92,246,.3),0 0 24px rgba(139,92,246,.8); animation:nodePulse 1.6s infinite; }
  @keyframes nodePulse{ 50%{ box-shadow:0 0 0 9px rgba(139,92,246,.15),0 0 34px rgba(139,92,246,.9);} }
  .node.lock{ background:var(--card-solid); color:var(--dim); border:1px solid var(--line); }
  .node .num{ position:absolute; top:-7px; right:-4px; background:var(--bg-dark); border:1px solid var(--line); font-size:9.5px; padding:1px 6px; border-radius:99px; }

  /* episode drawer */
  #drawer{ position:absolute; left:0; right:0; bottom:0; z-index:55; background:var(--card-solid); border-radius:24px 24px 0 0; border-top:1px solid var(--line); padding:20px 18px calc(20px + env(safe-area-inset-bottom)); transform:translateY(110%); transition:transform .28s cubic-bezier(.2,.9,.3,1.1); box-shadow:0 -18px 50px rgba(0,0,0,.55); }
  #drawer.open{ transform:translateY(0); }
  .dr-handle{ width:44px; height:5px; border-radius:99px; background:var(--line); margin:0 auto 14px; }
  .dr-creature{ display:flex; gap:14px; align-items:center; margin-bottom:14px; }
  .dr-sprite{ width:64px; height:64px; border-radius:18px; background:var(--card-2); display:flex; align-items:center; justify-content:center; font-size:34px; flex:none; }
  .ex-chips{ display:flex; gap:7px; flex-wrap:wrap; margin:8px 0 12px; }
  .exchip{ font-size:11px; font-weight:900; padding:5px 11px; border-radius:99px; background:rgba(139,92,246,.18); color:#C4B5FD; }
  .drops{ font-size:12px; font-weight:800; color:var(--dim); margin-bottom:16px; }

  /* ---- ARENA ---- */
  .mode-card{ position:relative; overflow:hidden; }
  .mode-card .em{ font-size:30px; }
  .mode-card b{ font-size:16px; display:block; }
  .mode-card p{ font-size:12px; color:var(--dim); font-weight:700; margin-top:2px; }
  .target-pills{ display:flex; gap:8px; margin-top:11px; }
  .tpill{ flex:1; text-align:center; font-weight:900; font-size:12.5px; padding:8px; border-radius:11px; background:var(--card-2); border:1.5px solid transparent; color:var(--dim); }
  .tpill.sel{ border-color:var(--gold); color:var(--gold); background:rgba(245,158,11,.1); }
  .exsel{ display:flex; gap:8px; margin-top:10px; }

  /* ---- BATTLE ---- */
  .combat-hud{ background:var(--card-dark); backdrop-filter:blur(8px); border:1px solid var(--line); border-radius:18px; padding:12px 14px; margin-bottom:12px; position:relative; }
  .creature-line{ display:flex; align-items:center; gap:12px; }
  .creature-sprite{ font-size:40px; animation:bob 2s infinite; filter:drop-shadow(0 4px 6px rgba(0,0,0,.6)); }
  .combat-hud.hit .creature-sprite{ animation:shake .22s ease; }
  @keyframes shake{ 25%{transform:translateX(-6px) rotate(-4deg);} 75%{transform:translateX(6px) rotate(4deg);} }
  .e-name{ font-weight:900; font-size:15px; }
  .e-meta{ font-size:10.5px; font-weight:900; color:var(--dim); }
  .hud-timer{ margin-left:auto; text-align:right; }
  .hud-timer .t{ font-size:17px; font-weight:900; }
  .hud-timer .l{ font-size:9px; font-weight:900; color:var(--dim); letter-spacing:.1em; }
  .hp-line{ margin-top:9px; }
  .hp-line .t{ display:flex; justify-content:space-between; font-size:10.5px; font-weight:900; margin-bottom:4px; }

  .viewport{ position:relative; border-radius:20px; overflow:hidden; background:#000; aspect-ratio:3/4.1; border:1px solid var(--line); margin-bottom:12px; }
  .viewport video{ width:100%; height:100%; object-fit:cover; }
  .viewport video, .duel-half.me video, .pose-canvas{ transform:scaleX(-1); } /* mirror self-view; canvas flips with it so skeleton stays aligned */
  .pose-canvas{ position:absolute; inset:0; width:100%; height:100%; z-index:2; pointer-events:none; }
  .track-pill{ position:absolute; top:10px; left:10px; z-index:4; font-size:10.5px; font-weight:900; padding:6px 12px; border-radius:99px; background:rgba(0,0,0,.55); backdrop-filter:blur(4px); }
  .track-pill.ai{ color:var(--green); }
  .track-pill.load{ color:var(--gold); }
  .track-pill.tap{ color:#C4B5FD; }
  .stage-tag.ai{ color:var(--green); }
  .stage-tag.load{ color:var(--gold); }
  .stage-tag.tap{ color:#C4B5FD; pointer-events:auto; cursor:pointer; text-decoration:underline; text-underline-offset:2px; }
  .vp-fallback{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:radial-gradient(circle at 50% 35%,#1C2A47,#0B1222); }
  .skel{ position:absolute; inset:0; pointer-events:none; }
  .skel line{ stroke:var(--gold); stroke-width:3; stroke-linecap:round; opacity:.9; filter:drop-shadow(0 0 6px rgba(245,158,11,.8)); }
  .skel circle{ fill:#FCD34D; filter:drop-shadow(0 0 5px rgba(245,158,11,.9)); }
  .skel.breathe{ animation:sk 2.6s ease-in-out infinite; }
  @keyframes sk{ 50%{ transform:translateY(5px) scale(1.012);} }
  .dmg{ position:absolute; font-weight:900; font-size:21px; color:#FCD34D; text-shadow:0 0 12px rgba(245,158,11,.9),0 2px 0 rgba(0,0,0,.5); pointer-events:none; animation:dUp .7s forwards; z-index:5; }
  @keyframes dUp{ to{ opacity:0; transform:translateY(-44px) scale(1.3);} }
  .calib{ position:absolute; bottom:10px; left:10px; right:10px; z-index:4; display:flex; justify-content:center; }
  .calib span{ font-size:11px; font-weight:900; padding:6px 13px; border-radius:99px; background:rgba(0,0,0,.55); backdrop-filter:blur(4px); }
  .calib .ok{ color:var(--green); } .calib .warn{ color:var(--gold); }

  .bottom-hud{ display:flex; gap:10px; align-items:center; }
  .rep-pill{ flex:1; background:var(--card-dark); border:2px solid var(--purple); border-radius:99px; text-align:center; padding:12px; box-shadow:0 0 20px rgba(139,92,246,.4); }
  .rep-pill .n{ font-size:26px; font-weight:900; line-height:1; }
  .rep-pill .l{ font-size:9.5px; font-weight:900; color:var(--dim); letter-spacing:.12em; }
  .rep-pill.bump{ animation:bmp .16s; }
  @keyframes bmp{ 50%{ transform:scale(1.07); box-shadow:0 0 34px rgba(139,92,246,.8);} }
  .round-btn{ width:52px; height:52px; border-radius:50%; background:var(--card-2); border:1px solid var(--line); display:flex; align-items:center; justify-content:center; font-size:19px; flex:none; }

  /* ---- QUEUE ---- */
  .queue-box{ text-align:center; padding:46px 0 20px; }
  .radar{ width:130px; height:130px; margin:0 auto 22px; border-radius:50%; border:2px solid rgba(139,92,246,.4); position:relative; overflow:hidden; }
  .radar::after{ content:""; position:absolute; inset:0; background:conic-gradient(from 0deg,rgba(139,92,246,.7),transparent 70deg); animation:spin 1.3s linear infinite; }
  @keyframes spin{ to{ transform:rotate(360deg);} }
  .radar .c{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:36px; z-index:2; }
  .found-card{ animation:si .3s ease; }

  /* ---- DUEL (split) ---- */
  #scr-duel{ padding:12px 12px calc(88px + env(safe-area-inset-bottom)); display:none; flex-direction:column; }
  #scr-duel.active{ display:flex; }
  .duel-half{ flex:1; position:relative; border-radius:18px; overflow:hidden; border:2px solid var(--line); background:#000; min-height:0; }
  .duel-half.opp{ border-color:rgba(239,68,68,.6); }
  .duel-half.me{ border-color:rgba(139,92,246,.7); margin-top:10px; }
  .duel-half video{ width:100%; height:100%; object-fit:cover; }
  .feed-fake{ position:absolute; inset:0; background:linear-gradient(120deg,#131C30 30%,#1C2A47 50%,#131C30 70%); background-size:220% 100%; animation:shimmer 2.1s linear infinite; display:flex; align-items:center; justify-content:center; }
  @keyframes shimmer{ to{ background-position:-220% 0;} }
  .duel-ov{ position:absolute; inset:0; padding:10px; display:flex; flex-direction:column; justify-content:space-between; z-index:3; pointer-events:none; }
  .duel-top{ display:flex; align-items:center; gap:8px; }
  .live-b{ font-size:9px; font-weight:900; background:var(--red); padding:3px 8px; border-radius:99px; letter-spacing:.1em; }
  .duel-nm{ font-weight:900; font-size:13px; text-shadow:0 2px 4px rgba(0,0,0,.8); }
  .duel-lvl{ font-size:10px; font-weight:900; color:var(--gold); text-shadow:0 2px 4px rgba(0,0,0,.8); }
  .duel-reps{ align-self:flex-end; text-align:right; }
  .duel-reps .n{ font-size:38px; font-weight:900; line-height:1; text-shadow:0 3px 0 rgba(0,0,0,.5); }
  .duel-reps .l{ font-size:9px; font-weight:900; letter-spacing:.14em; color:rgba(255,255,255,.75); }
  .duel-hp{ pointer-events:none; }
  .duel-mid{ display:flex; align-items:center; justify-content:center; gap:12px; padding:9px 0 0; }
  .lead-tag{ font-weight:900; font-size:13px; padding:7px 15px; border-radius:99px; background:var(--card-2); border:1px solid var(--line); transition:transform .15s; }
  .lead-tag.ahead{ color:var(--green); border-color:rgba(16,185,129,.5); }
  .lead-tag.behind{ color:var(--red); border-color:rgba(239,68,68,.5); }
  .lead-tag.flash{ animation:bmp .3s; }
  .duel-timer{ font-weight:900; font-size:17px; }
  .duel-tapzone{ position:absolute; inset:0; z-index:4; }

  /* ---- VICTORY ---- */
  #scr-victory{ text-align:center; }
  .vic-stars{ font-size:38px; letter-spacing:6px; height:52px; margin-top:16px; }
  .vic-stars span{ display:inline-block; opacity:0; transform:scale(0); }
  .vic-stars span.on{ animation:starPop .4s cubic-bezier(.2,.9,.3,1.4) forwards; }
  .vic-stars span.off{ opacity:.22; transform:none; filter:grayscale(1); }
  @keyframes starPop{ to{ opacity:1; transform:scale(1);} }
  .vic-h{ font-size:34px; color:var(--gold); text-shadow:0 4px 0 rgba(0,0,0,.5),0 0 26px rgba(245,158,11,.55); margin:4px 0 18px; }
  .vic-h.lose{ color:var(--red); text-shadow:0 4px 0 rgba(0,0,0,.5),0 0 26px rgba(239,68,68,.5); }
  .lvlup-flash{ display:inline-block; margin-top:8px; font-weight:900; color:var(--green); font-size:14px; animation:bmp .5s 3; }
  .vic-grid{ display:grid; grid-template-columns:1fr 1fr; gap:11px; margin:16px 0; }

  /* ---- LEADERBOARD ---- */
  .season-head{ background:linear-gradient(135deg,#31255C,#1E293B); text-align:center; }
  .season-head .lg{ font-size:19px; font-weight:900; }
  .podium{ display:flex; align-items:flex-end; justify-content:center; gap:8px; margin:14px 0 16px; }
  .pod{ text-align:center; flex:1; }
  .pod .avatar{ margin:0 auto 6px; }
  .pod .crown{ font-size:19px; height:22px; }
  .pod .nm{ font-size:11px; font-weight:900; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .pod .pts{ font-size:10.5px; font-weight:900; color:var(--gold); }
  .stand{ margin-top:6px; border-radius:10px 10px 0 0; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:17px; }
  .p1 .stand{ height:64px; background:linear-gradient(180deg,#FCD34D,var(--gold)); color:#3A2503; }
  .p2 .stand{ height:46px; background:linear-gradient(180deg,#CBD5E1,#94A3B8); color:#1E293B; }
  .p3 .stand{ height:36px; background:linear-gradient(180deg,#D97706,#92400E); color:#FDE68A; }
  #lb-scroll{ max-height:330px; overflow-y:auto; border-radius:16px; scrollbar-width:none; }
  #lb-scroll::-webkit-scrollbar{ display:none; }
  .lb-row{ display:flex; align-items:center; gap:11px; padding:11px 13px; background:var(--card-dark); border:1px solid var(--line); border-radius:14px; margin-bottom:7px; transition:background .3s; }
  .lb-row.me{ border-color:var(--gold); background:rgba(245,158,11,.1); }
  .lb-row.moved{ background:rgba(139,92,246,.2); }
  .lb-pos{ width:26px; text-align:center; font-weight:900; font-size:13px; color:var(--dim); flex:none; }
  .lb-row .avatar{ width:34px; height:34px; font-size:11px; }
  .lb-row b{ font-size:13px; display:block; }
  .lb-row .sub{ font-size:10px; color:var(--dim); font-weight:800; }
  .lb-xp{ margin-left:auto; font-weight:900; font-size:13.5px; color:#C4B5FD; }

  /* ---- PROFILE ---- */
  .ptabs{ display:flex; background:var(--card-dark); border:1px solid var(--line); border-radius:14px; padding:4px; margin-bottom:15px; }
  .ptab{ flex:1; text-align:center; font-weight:900; font-size:12.5px; padding:9px; border-radius:10px; color:var(--dim); }
  .ptab.on{ background:var(--grad-purple); color:#fff; }
  .prof-hero{ text-align:center; padding:8px 0 16px; }
  .prof-hero .av-wrap{ display:inline-block; }
  .prof-hero .avatar{ width:84px; height:84px; font-size:26px; }
  .prof-title{ display:inline-block; margin-top:9px; font-size:11px; font-weight:900; color:var(--gold); background:rgba(245,158,11,.12); padding:6px 14px; border-radius:99px; }
  .gear-row{ display:flex; gap:11px; align-items:center; padding:12px 13px; background:var(--card-dark); border:1px solid var(--line); border-radius:15px; margin-bottom:9px; }
  .gear-em{ width:42px; height:42px; border-radius:12px; background:var(--card-2); display:flex; align-items:center; justify-content:center; font-size:20px; flex:none; }
  .gear-row b{ font-size:13.5px; display:block; }
  .gear-row .sub{ font-size:11px; color:var(--dim); font-weight:800; }
  .own{ font-size:11px; font-weight:900; color:var(--green); }
  .heat{ display:grid; grid-template-columns:repeat(7,1fr); gap:5px; }
  .heat i{ aspect-ratio:1; border-radius:6px; background:var(--card-2); }
  .heat i.on1{ background:rgba(16,185,129,.35); }
  .heat i.on2{ background:rgba(16,185,129,.7); }
  .heat i.on3{ background:var(--green); box-shadow:0 0 8px rgba(16,185,129,.5); }
  .chart{ display:flex; align-items:flex-end; gap:7px; height:120px; padding-top:8px; }
  .chart .c{ flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; gap:5px; height:100%; }
  .chart .b{ width:100%; max-width:24px; border-radius:7px 7px 3px 3px; background:var(--grad-purple); min-height:4px; }
  .chart .c.td .b{ background:linear-gradient(180deg,#FCD34D,var(--gold)); }
  .chart .d{ font-size:9px; font-weight:900; color:var(--dim); }
  .dist-row{ margin-bottom:10px; }
  .dist-row .t{ display:flex; justify-content:space-between; font-size:11.5px; font-weight:900; margin-bottom:4px; }
  .set-row{ display:flex; align-items:center; gap:12px; padding:14px 15px; background:var(--card-dark); border:1px solid var(--line); border-radius:15px; margin-bottom:9px; font-weight:800; font-size:13.5px; }
  .toggle{ margin-left:auto; width:46px; height:26px; border-radius:99px; background:var(--card-2); position:relative; transition:background .2s; flex:none; }
  .toggle i{ position:absolute; top:3px; left:3px; width:20px; height:20px; border-radius:50%; background:#fff; transition:left .2s; }
  .toggle.on{ background:var(--green); }
  .toggle.on i{ left:23px; }
  .sens{ margin-left:auto; display:flex; gap:5px; }
  .sens button{ width:28px; height:28px; border-radius:8px; background:var(--card-2); font-weight:900; font-size:12px; color:var(--dim); }
  .sens button.on{ background:var(--purple); color:#fff; }

  /* ---- NAV ---- */
  #nav{ position:absolute; left:0; right:0; bottom:0; z-index:40; display:flex; padding:9px 6px calc(10px + env(safe-area-inset-bottom)); background:rgba(11,18,34,.94); backdrop-filter:blur(12px); border-top:1px solid var(--line); }
  .nv{ flex:1; display:flex; flex-direction:column; align-items:center; gap:3px; font-size:9.5px; font-weight:900; color:var(--dim); padding-top:3px; }
  .nv svg{ width:22px; height:22px; }
  .nv{ font-size:10px; }
  .nv.on{ color:#C4B5FD; }

  /* ---- MODAL / TOAST / FX ---- */
  #modal-layer{ position:absolute; inset:0; z-index:60; display:none; align-items:center; justify-content:center; background:rgba(4,7,15,.78); backdrop-filter:blur(6px); padding:26px; }
  #modal-layer.open{ display:flex; }
  .modal{ width:100%; background:var(--card-solid); border:1px solid var(--line); border-radius:24px; padding:28px 22px; text-align:center; animation:mIn .3s cubic-bezier(.2,.9,.3,1.3); }
  @keyframes mIn{ from{ transform:scale(.82); opacity:0;} }
  .modal{ max-height:82%; overflow-y:auto; scrollbar-width:none; }
  .modal::-webkit-scrollbar{ display:none; }
  .modal.left{ text-align:left; }
  .devstep{ display:flex; gap:11px; margin-bottom:14px; }
  .devstep .n{ flex:none; width:24px; height:24px; border-radius:50%; background:var(--grad-purple); display:flex; align-items:center; justify-content:center; font-weight:900; font-size:12px; }
  .devstep b{ font-size:13.5px; display:block; margin-bottom:3px; }
  .devstep p{ font-size:12px; color:var(--dim); font-weight:700; margin:0 0 6px; }
  .code{ display:block; font-family:ui-monospace,Menlo,Consolas,monospace; font-size:12px; background:#0B1222; border:1px solid var(--line); border-radius:9px; padding:8px 11px; color:#7DD3FC; margin:4px 0; user-select:all; }
  .track-pill.tap{ pointer-events:auto; cursor:pointer; text-decoration:underline; text-underline-offset:2px; }
  .modal .em{ font-size:52px; margin-bottom:8px; }
  .modal h3{ font-size:22px; margin-bottom:8px; }
  .modal p{ color:var(--dim); font-size:13.5px; font-weight:800; margin-bottom:18px; }
  .modal .btn{ margin-top:8px; }
  #toast{ position:absolute; top:14px; left:50%; transform:translateX(-50%) translateY(-90px); z-index:70; background:var(--card-solid); border:1px solid rgba(245,158,11,.55); border-radius:99px; padding:10px 19px; font-size:12.5px; font-weight:900; white-space:nowrap; transition:transform .35s cubic-bezier(.2,.9,.3,1.2); box-shadow:0 10px 28px rgba(0,0,0,.55); max-width:92%; overflow:hidden; text-overflow:ellipsis; }
  #toast.show{ transform:translateX(-50%) translateY(0); }
  .conf{ position:absolute; width:9px; height:9px; z-index:64; pointer-events:none; border-radius:2px; animation:cf 1.5s ease-in forwards; }
  @keyframes cf{ from{ transform:translateY(-12px) rotate(0);} to{ transform:translateY(360px) rotate(540deg); opacity:0;} }
  .xpf{ position:absolute; z-index:65; font-weight:900; font-size:17px; color:var(--green); text-shadow:0 0 12px rgba(16,185,129,.8),0 2px 0 rgba(0,0,0,.4); pointer-events:none; animation:dUp .9s forwards; }

  /* ---- SPLASH / AUTH / PAYWALL ---- */
  .fullflow{ padding:0; display:none; flex-direction:column; }
  .fullflow.active{ display:flex; }
  .splash{ flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px;
    background:radial-gradient(circle at 50% 30%,#1D1145,var(--bg-dark)); }
  .splash .logo-big{ width:96px; height:96px; border-radius:26px; background:var(--grad-purple);
    display:flex; align-items:center; justify-content:center; box-shadow:0 0 50px rgba(139,92,246,.6); animation:bob 2.6s infinite; }
  .splash h1{ font-size:30px; }
  .splash p{ color:var(--dim); font-weight:800; font-size:13px; letter-spacing:.14em; text-transform:uppercase; }
  .authbox{ flex:1; display:flex; flex-direction:column; justify-content:center; padding:26px 24px 40px;
    background:radial-gradient(circle at 50% 0%,#1D1145,var(--bg-dark)); }
  .stay-row{ display:flex; align-items:center; gap:11px; padding:12px 13px; margin-bottom:12px;
    background:var(--card-dark); border:1.5px solid var(--line); border-radius:14px; }
  .stay-row.on{ border-color:rgba(139,92,246,.55); background:rgba(139,92,246,.09); }
  .stay-box{ width:24px; height:24px; flex:none; border-radius:8px; border:2px solid var(--line);
    display:flex; align-items:center; justify-content:center; transition:all .18s; }
  .stay-row.on .stay-box{ background:var(--grad-purple); border-color:transparent; }
  .stay-box svg{ opacity:0; transition:opacity .18s; }
  .stay-row.on .stay-box svg{ opacity:1; }
  .stay-row b{ font-size:13px; display:block; line-height:1.2; }
  .stay-row span{ font-size:10.5px; font-weight:800; color:var(--dim); }
  .fp-link{ text-align:center; margin-top:2px; font-size:12.5px; font-weight:800; color:var(--violet-light); }
  .resetbox{ flex:1; display:flex; flex-direction:column; justify-content:center; padding:26px 24px 40px;
    background:radial-gradient(circle at 50% 0%,#1D1145,var(--bg-dark)); }
  .reset-ico{ width:70px; height:70px; border-radius:20px; background:var(--card-solid); border:1.5px solid rgba(139,92,246,.5);
    display:flex; align-items:center; justify-content:center; margin:0 auto 16px; box-shadow:0 0 34px rgba(139,92,246,.4); }
  .pw-strength{ display:flex; gap:5px; margin-top:8px; }
  .pw-strength i{ flex:1; height:4px; border-radius:99px; background:var(--card-2); }
  .authbox .logo-big{ width:64px; height:64px; border-radius:18px; background:var(--grad-purple);
    display:flex; align-items:center; justify-content:center; margin:0 auto 14px; box-shadow:0 0 34px rgba(139,92,246,.55); }
  .checkmail{ flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;
    padding:34px 28px; background:radial-gradient(circle at 50% 30%,#1D1145,var(--bg-dark)); gap:6px; }
  .checkmail .env{ width:84px; height:84px; border-radius:24px; background:var(--card-solid); border:1.5px solid rgba(16,185,129,.5);
    display:flex; align-items:center; justify-content:center; margin-bottom:18px; box-shadow:0 0 40px rgba(16,185,129,.3); }
  .checkmail .em-addr{ font-weight:900; color:var(--gold); word-break:break-all; }
  .checkmail .hint{ background:var(--card-dark); border:1px solid var(--line); border-radius:14px; padding:14px 16px;
    text-align:left; margin-top:24px; font-size:12.5px; color:var(--dim); font-weight:700; }
  .auth-tabs{ display:flex; background:var(--card-dark); border:1px solid var(--line); border-radius:14px; padding:4px; margin:22px 0 18px; }
  .auth-tab{ flex:1; text-align:center; font-weight:900; font-size:13px; padding:10px; border-radius:10px; color:var(--dim); }
  .auth-tab.on{ background:var(--grad-purple); color:#fff; }
  .field{ margin-bottom:12px; }
  .field label{ display:block; font-size:11px; font-weight:900; letter-spacing:.1em; text-transform:uppercase; color:var(--dim); margin-bottom:6px; }
  .field input{ width:100%; background:var(--card-dark); border:1.5px solid var(--line); border-radius:13px; padding:14px 15px;
    color:var(--text); font-family:inherit; font-weight:700; font-size:15px; outline:none; }
  .field input:focus{ border-color:var(--purple); box-shadow:0 0 0 3px rgba(139,92,246,.2); }
  .auth-err{ color:var(--red); font-size:12.5px; font-weight:800; min-height:18px; margin-bottom:8px; }
  .paywrap{ flex:1; overflow-y:auto; padding:34px 22px 40px; background:radial-gradient(circle at 50% 0%,#1D1145,var(--bg-dark)); scrollbar-width:none; }
  .paycard{ background:var(--card-solid); border:1.5px solid rgba(245,158,11,.5); border-radius:26px; padding:28px 22px; text-align:center;
    box-shadow:0 0 44px rgba(245,158,11,.18); }
  .price-strike{ font-size:26px; font-weight:900; color:var(--dim); text-decoration:line-through; text-decoration-color:var(--red); text-decoration-thickness:3px; }
  .price-free{ font-size:44px; font-weight:900; color:var(--gold); text-shadow:0 4px 0 rgba(0,0,0,.5),0 0 30px rgba(245,158,11,.5); }
  .pay-feat{ text-align:left; margin:20px 0; display:grid; gap:10px; }
  .pay-feat div{ display:flex; gap:10px; align-items:center; font-weight:800; font-size:13.5px; }
  .pay-feat svg{ flex:none; }
  .founder-badge{ display:inline-block; font-size:10.5px; font-weight:900; letter-spacing:.14em; background:rgba(245,158,11,.15);
    color:var(--gold); padding:6px 14px; border-radius:99px; margin-bottom:14px; }
  body.locked #nav{ display:none; }
  body.in-match #nav{ display:none; }

  /* ---------- AMBIENT / POLISH ---------- */
  #app::before{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0;
    background:
      radial-gradient(600px 300px at 15% -5%, rgba(139,92,246,.16), transparent 60%),
      radial-gradient(500px 260px at 95% 8%, rgba(245,158,11,.10), transparent 60%); }
  .screen{ z-index:1; }
  .orb{ position:absolute; border-radius:50%; pointer-events:none; z-index:0; filter:blur(28px); opacity:.5;
    animation:drift 14s ease-in-out infinite; }
  @keyframes drift{ 50%{ transform:translate(18px,-26px) scale(1.15);} }

  /* staggered entrance for cards */
  .screen.active .card, .screen.active .qstat, .screen.active .mode-card, .screen.active .lb-row{
    animation:riseIn .42s cubic-bezier(.2,.9,.3,1.1) backwards; }
  .screen.active .card:nth-child(1){animation-delay:.02s} .screen.active .card:nth-child(2){animation-delay:.07s}
  .screen.active .card:nth-child(3){animation-delay:.12s} .screen.active .card:nth-child(4){animation-delay:.17s}
  .screen.active .card:nth-child(5){animation-delay:.22s}
  @keyframes riseIn{ from{ opacity:0; transform:translateY(16px) scale(.985);} }

  .btn{ font-size:15.5px; position:relative; overflow:hidden; }
  .btn::after{ content:""; position:absolute; top:0; left:-60%; width:40%; height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent); transform:skewX(-20deg);
    animation:sheen 4.5s ease-in-out infinite; }
  @keyframes sheen{ 0%,72%{ left:-60%; } 88%,100%{ left:130%; } }

  .hdr.glow{ animation:hdrGlow 3.4s ease-in-out infinite; }
  @keyframes hdrGlow{ 50%{ text-shadow:0 3px 0 rgba(0,0,0,.45),0 0 26px rgba(245,158,11,.55);} }
  .pop{ animation:popIn .38s cubic-bezier(.2,.9,.3,1.4) backwards; }
  @keyframes popIn{ from{ opacity:0; transform:scale(.86);} }
  .float-slow{ animation:bob 3.2s ease-in-out infinite; }

  /* ---------- ONBOARDING ---------- */
  .obwrap{ flex:1; display:flex; flex-direction:column; padding:30px 24px calc(26px + env(safe-area-inset-bottom));
    background:radial-gradient(circle at 50% 12%,#241458,var(--bg-dark)); overflow-y:auto; scrollbar-width:none; }
  .obwrap::-webkit-scrollbar{ display:none; }
  .ob-dots{ display:flex; gap:7px; justify-content:center; margin-bottom:24px; }
  .ob-dots i{ width:26px; height:5px; border-radius:99px; background:var(--card-2); transition:background .3s; }
  .ob-dots i.on{ background:var(--gold); box-shadow:0 0 12px rgba(245,158,11,.6); }
  .ob-hero{ text-align:center; margin-bottom:20px; }
  .ob-sprite{ width:120px; height:120px; margin:0 auto 16px; border-radius:34px; background:var(--card-solid);
    border:2px solid rgba(139,92,246,.55); display:flex; align-items:center; justify-content:center;
    box-shadow:0 0 46px rgba(139,92,246,.45); animation:bob 3s ease-in-out infinite; }
  .ob-title{ font-size:25px; font-weight:900; text-shadow:0 3px 0 rgba(0,0,0,.45); }
  .ob-sub{ color:var(--dim); font-weight:800; font-size:13.5px; margin-top:9px; line-height:1.6; }
  .ob-step{ display:none; animation:riseIn .4s cubic-bezier(.2,.9,.3,1.1); }
  .ob-step.on{ display:block; }
  .taste-row{ display:flex; gap:13px; align-items:center; background:var(--card-dark); border:1px solid var(--line);
    border-radius:17px; padding:14px; margin-bottom:11px; animation:riseIn .45s backwards; }
  .taste-row:nth-child(2){animation-delay:.08s} .taste-row:nth-child(3){animation-delay:.16s} .taste-row:nth-child(4){animation-delay:.24s}
  .taste-ico{ width:46px; height:46px; border-radius:14px; background:var(--card-2); flex:none;
    display:flex; align-items:center; justify-content:center; }
  .taste-row b{ font-size:14px; display:block; }
  .taste-row span{ font-size:12px; color:var(--dim); font-weight:700; }
  .cam-state{ border-radius:18px; padding:18px; text-align:center; font-weight:800; font-size:13px; margin:16px 0; border:1.5px solid var(--line); background:var(--card-dark); }
  .cam-state.ok{ border-color:rgba(16,185,129,.55); color:var(--green); }
  .cam-state.bad{ border-color:rgba(239,68,68,.55); color:var(--red); }

  /* ---------- WAVE REST ---------- */
  .restgate{ position:absolute; inset:0; z-index:9; display:none; flex-direction:column; align-items:center;
    justify-content:center; gap:12px; background:rgba(6,10,22,.9); backdrop-filter:blur(6px); text-align:center; padding:26px; }
  .restgate.on{ display:flex; animation:riseIn .3s; }
  .rest-title{ font-size:13px; font-weight:900; letter-spacing:.2em; color:var(--green); }
  .rest-cd{ font-size:66px; font-weight:900; color:#fff; text-shadow:0 4px 0 rgba(0,0,0,.5),0 0 34px rgba(16,185,129,.6);
    line-height:1; }
  .rest-next{ font-size:12.5px; font-weight:800; color:var(--dim); }
  .rest-next b{ color:var(--gold); }
  .hold-btn{ position:relative; overflow:hidden; width:100%; max-width:260px; padding:16px; border-radius:16px;
    background:var(--card-2); border:1.5px solid var(--line); font-weight:900; font-size:14px; }
  .hold-btn .fillbar{ position:absolute; left:0; top:0; bottom:0; width:0%; background:linear-gradient(90deg,var(--violet),var(--gold));
    opacity:.45; transition:width .05s linear; }
  .hold-btn span{ position:relative; z-index:2; }
  .rest-ring{ width:96px; height:96px; border-radius:50%; border:4px solid rgba(16,185,129,.35);
    display:flex; align-items:center; justify-content:center; animation:bob 2.4s infinite; }

  /* ---------- DUEL POLISH ---------- */
  .vs-intro{ position:absolute; inset:0; z-index:12; display:flex; align-items:center; justify-content:center;
    background:rgba(6,10,22,.92); backdrop-filter:blur(8px); }
  .vs-intro.gone{ display:none; }
  .vs-card{ display:flex; align-items:center; gap:6px; }
  .vs-fighter{ text-align:center; animation:slideL .55s cubic-bezier(.2,.9,.3,1.2) backwards; }
  .vs-fighter.right{ animation-name:slideR; }
  @keyframes slideL{ from{ opacity:0; transform:translateX(-70px) scale(.8);} }
  @keyframes slideR{ from{ opacity:0; transform:translateX(70px) scale(.8);} }
  .vs-fighter .hexwrap{ width:84px; height:94px; }
  .vs-fighter .hex.inner svg{ width:58px; height:58px; }
  .vs-fighter b{ display:block; font-size:14px; margin-top:6px; }
  .vs-fighter span{ font-size:11px; font-weight:900; color:var(--gold); }
  .vs-clash{ font-size:40px; font-weight:900; color:var(--gold); text-shadow:0 0 30px rgba(245,158,11,.9);
    animation:clashIn .5s cubic-bezier(.2,.9,.3,1.6) .35s backwards; }
  @keyframes clashIn{ from{ opacity:0; transform:scale(2.4) rotate(-14deg);} }
  .tug-bar i{ position:relative; }
  .tug-bar.lead-me{ box-shadow:inset 0 2px 6px rgba(0,0,0,.5),0 0 16px rgba(16,185,129,.5); }
  .tug-bar.lead-op{ box-shadow:inset 0 2px 6px rgba(0,0,0,.5),0 0 16px rgba(239,68,68,.5); }
  .rank-side.hitme{ animation:bmp .3s; }

  /* ---------- OAUTH ---------- */
  .oauth-row{ display:grid; gap:10px; margin-bottom:14px; }
  .oauth-btn{ display:flex; align-items:center; justify-content:center; gap:10px; padding:14px; border-radius:14px;
    font-weight:800; font-size:14.5px; border:1.5px solid var(--line); background:#fff; color:#1E293B;
    transition:transform .1s, filter .15s; }
  .oauth-btn:active{ transform:scale(.97); }
  .oauth-btn.apple{ background:#000; color:#fff; border-color:#000; }
  .oauth-sep{ display:flex; align-items:center; gap:12px; margin:4px 0 14px; }
  .oauth-sep i{ flex:1; height:1px; background:var(--line); }
  .oauth-sep span{ font-size:11px; font-weight:900; color:var(--dim); letter-spacing:.1em; }

  .page-head{ display:flex; align-items:center; gap:11px; margin-bottom:14px; }
  .page-head .ph-ico{ width:42px; height:42px; border-radius:14px; flex:none;
    display:flex; align-items:center; justify-content:center; }
  .page-head b{ font-size:23px; font-weight:900; display:block; line-height:1.1; }
  .page-head span{ font-size:12.5px; font-weight:800; color:var(--dim); }
  .big-card{ border-radius:22px; padding:18px; background:var(--card-dark); border:1.5px solid var(--line); }
  .big-card + .big-card{ margin-top:12px; }
  .big-card .bc-top{ display:flex; align-items:center; gap:12px; }
  .big-card .bc-ico{ width:46px; height:46px; border-radius:14px; flex:none;
    display:flex; align-items:center; justify-content:center; }
  .big-card b{ font-size:17px; font-weight:900; display:block; line-height:1.15; }
  .big-card p{ font-size:13px; font-weight:800; color:var(--dim); margin-top:3px; }
  .big-card .btn{ margin-top:13px; }
  .big-card.gold{ border-color:rgba(245,158,11,.45); background:rgba(245,158,11,.07); }
  .big-card.gold .bc-ico{ background:rgba(245,158,11,.2); }
  .big-card.green{ border-color:rgba(16,185,129,.45); background:rgba(16,185,129,.06); }
  .big-card.green .bc-ico{ background:rgba(16,185,129,.2); }
  .big-card.purple{ border-color:rgba(139,92,246,.45); background:rgba(139,92,246,.07); }
  .big-card.purple .bc-ico{ background:rgba(139,92,246,.2); }

  /* ---------- KID-CLEAR HOME ---------- */
  .hello-card{ padding:12px 14px;
    background:linear-gradient(135deg,#3A2A7A,#221A55); border-radius:22px;
    border:1.5px solid rgba(245,158,11,.35); }
  .hello-top{ display:flex; align-items:center; gap:12px; }
  .hello-av{ width:50px; height:50px; border-radius:50%; overflow:hidden; flex:none;
    border:3px solid var(--gold); background:#1A1440; display:flex; align-items:center; justify-content:center; }
  .hello-av img{ width:100%; height:100%; object-fit:cover; }
  .hello-txt b{ font-size:18px; font-weight:900; display:block; line-height:1.15; }
  .hello-txt span{ font-size:12px; font-weight:800; color:var(--dim); }
  .hello-lvl{ margin-left:auto; text-align:center; flex:none; background:rgba(0,0,0,.3);
    border-radius:12px; padding:6px 11px; }
  .hello-lvl b{ display:block; font-size:18px; font-weight:900; color:var(--gold); line-height:1; }
  .hello-lvl span{ font-size:8px; font-weight:900; letter-spacing:.14em; color:var(--dim); }
  .hello-xp{ display:flex; align-items:center; gap:8px; margin-top:9px; }
  .hello-xp .bar{ flex:1; height:6px; border-radius:99px; background:rgba(0,0,0,.32); overflow:hidden; }
  .hello-xp .bar i{ display:block; height:100%; border-radius:99px;
    background:linear-gradient(90deg,var(--violet-light),var(--gold)); }
  .hello-xp span{ font-size:10px; font-weight:900; color:var(--dim); flex:none; }

  .big-play{ display:block; width:100%; margin-top:10px; padding:15px 16px; border-radius:22px;
    background:linear-gradient(135deg,#FBBF24,#F59E0B); color:#241703; text-align:left;
    box-shadow:0 12px 30px rgba(245,158,11,.42); position:relative; overflow:hidden;
    transition:transform .12s; }
  .big-play:active{ transform:scale(.975); }
  .big-play .bp-lbl{ font-size:11px; font-weight:900; letter-spacing:.2em; opacity:.8; }
  .big-play .bp-name{ font-size:25px; font-weight:900; line-height:1.1; margin-top:3px; }
  .big-play .bp-sub{ font-size:13px; font-weight:800; opacity:.85; margin-top:5px; }
  .big-play .bp-mon{ position:absolute; right:12px; bottom:6px; opacity:.95;
    animation:bob 3s ease-in-out infinite; }
  .big-play .bp-go{ display:inline-flex; align-items:center; gap:6px; margin-top:12px;
    background:rgba(0,0,0,.22); border-radius:99px; padding:9px 16px; font-size:14px; font-weight:900; }

  .tiles{ display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:9px; }
  .tile{ padding:11px 12px; border-radius:16px; background:var(--card-dark);
    border:1.5px solid var(--line); text-align:left; transition:transform .12s; }
  .tile:active{ transform:scale(.96); }
  .tile .ti{ width:38px; height:38px; border-radius:12px; display:flex; align-items:center;
    justify-content:center; margin-bottom:9px; }
  .tile b{ font-size:15px; font-weight:900; display:block; }
  .tile span{ font-size:11.5px; font-weight:800; color:var(--dim); }
  .tile.map{ border-color:rgba(139,92,246,.5); } .tile.map .ti{ background:rgba(139,92,246,.2); }
  .tile.vs{ border-color:rgba(16,185,129,.45); } .tile.vs .ti{ background:rgba(16,185,129,.2); }
  .tile.help{ border-color:rgba(96,165,250,.45); } .tile.help .ti{ background:rgba(96,165,250,.18); }
  .tile.train{ border-color:rgba(245,158,11,.42); } .tile.train .ti{ background:rgba(245,158,11,.18); }

  .today-strip{ display:flex; gap:7px; margin-top:9px; }
  .today-strip div{ flex:1; background:var(--card-dark); border:1px solid var(--line);
    border-radius:13px; padding:8px 6px; text-align:center; }
  .today-strip b{ display:block; font-size:19px; font-weight:900; line-height:1; }
  .today-strip span{ font-size:9px; font-weight:900; letter-spacing:.1em; color:var(--dim); }

  /* ---------- ROYALE HOME ---------- */
  .crest{ position:relative; border-radius:22px; padding:13px 14px 12px; overflow:hidden;
    background:linear-gradient(150deg,#3B2478 0%,#221650 45%,#141033 100%);
    border:1.5px solid rgba(245,158,11,.42);
    box-shadow:0 14px 40px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.10); }
  .crest::before{ content:""; position:absolute; inset:0; pointer-events:none;
    background:radial-gradient(300px 160px at 92% -10%, rgba(245,158,11,.30), transparent 62%); }
  .crest::after{ content:""; position:absolute; left:0; right:0; bottom:0; height:2px;
    background:linear-gradient(90deg,transparent,var(--gold),transparent); opacity:.75; }
  .crest-top{ display:flex; align-items:center; gap:13px; position:relative; z-index:1; }
  .crest-av{ width:60px; height:60px; border-radius:50%; overflow:hidden; flex:none;
    border:2.5px solid var(--gold); box-shadow:0 0 22px rgba(245,158,11,.5);
    display:flex; align-items:center; justify-content:center; background:#160F33; }
  .crest-av img{ width:100%; height:100%; object-fit:cover; }
  .crest-name{ font-size:20px; font-weight:900; line-height:1.1; text-shadow:0 2px 0 rgba(0,0,0,.5);
    display:flex; align-items:center; gap:7px; }
  .crest-tier{ display:inline-flex; align-items:center; gap:5px; font-size:10px; font-weight:900;
    letter-spacing:.14em; padding:4px 9px; border-radius:99px; margin-top:5px;
    background:rgba(0,0,0,.34); border:1px solid rgba(255,255,255,.14); }
  .crest-lvl{ margin-left:auto; text-align:center; flex:none; }
  .crest-lvl b{ display:block; font-size:26px; font-weight:900; line-height:1; color:var(--gold);
    text-shadow:0 2px 0 rgba(0,0,0,.5); }
  .crest-lvl span{ font-size:8.5px; font-weight:900; letter-spacing:.18em; color:var(--dim); }
  .crest-xp{ margin-top:12px; position:relative; z-index:1; }
  .crest-xp .t{ display:flex; justify-content:space-between; font-size:10px; font-weight:900;
    color:rgba(255,255,255,.75); margin-bottom:5px; }
  .crest-xp .bar{ height:9px; border-radius:99px; background:rgba(0,0,0,.42); overflow:hidden; }
  .crest-xp .bar i{ display:block; height:100%; border-radius:99px;
    background:linear-gradient(90deg,var(--violet-light),var(--gold)); box-shadow:0 0 12px rgba(245,158,11,.65);
    transition:width .5s cubic-bezier(.2,.9,.3,1.1); }
  .crest-stats{ display:flex; gap:8px; margin-top:12px; position:relative; z-index:1; }
  .crest-stat{ flex:1; background:rgba(0,0,0,.30); border:1px solid rgba(255,255,255,.10);
    border-radius:14px; padding:9px 6px; text-align:center; }
  .crest-stat b{ display:flex; align-items:center; justify-content:center; gap:4px;
    font-size:15px; font-weight:900; line-height:1; }
  .crest-stat span{ font-size:8.5px; font-weight:900; letter-spacing:.12em; color:var(--dim); display:block; margin-top:4px; }

  .quick-row{ display:grid; grid-template-columns:repeat(3,1fr); gap:9px; margin-top:12px; }
  .quick{ background:var(--card-dark); border:1.5px solid var(--line); border-radius:18px;
    padding:13px 6px; text-align:center; transition:transform .12s, border-color .2s, box-shadow .25s; }
  .quick:active{ transform:scale(.95); }
  .quick .qi{ height:26px; display:flex; align-items:center; justify-content:center; margin-bottom:6px; }
  .quick b{ font-size:11px; font-weight:900; display:block; }
  .quick.gold{ border-color:rgba(245,158,11,.45); box-shadow:0 0 18px rgba(245,158,11,.14); }
  .quick.purple{ border-color:rgba(139,92,246,.45); box-shadow:0 0 18px rgba(139,92,246,.14); }

  .sect-head{ display:flex; align-items:center; gap:9px; margin:14px 0 8px; }
  .sect-head .ln{ flex:1; height:1px; background:linear-gradient(90deg,var(--line),transparent); }
  .sect-head b{ font-size:11px; font-weight:900; letter-spacing:.18em; color:var(--gold); }

  /* ---------- CURRENT EPISODE HERO ---------- */
  .ep-hero{ position:relative; overflow:hidden; border-radius:24px; padding:18px;
    background:linear-gradient(140deg,#2A1866,#16113A 60%,#0F172A);
    border:1.5px solid rgba(139,92,246,.45); box-shadow:0 12px 34px rgba(0,0,0,.5); }
  .ep-hero::before{ content:""; position:absolute; inset:0; pointer-events:none;
    background:radial-gradient(240px 140px at 88% 8%, rgba(245,158,11,.25), transparent 65%); }
  .ep-hero .eyebrow{ font-size:10px; font-weight:900; letter-spacing:.22em; color:var(--gold); }
  .ep-hero .chap{ font-size:12px; font-weight:900; color:var(--dim); margin-top:2px; }
  .ep-hero .epname{ font-size:23px; font-weight:900; line-height:1.15; margin-top:6px;
    text-shadow:0 3px 0 rgba(0,0,0,.45); }
  .ep-hero .row2{ display:flex; align-items:center; gap:14px; margin-top:12px; position:relative; z-index:1; }
  .ep-hero .mon{ width:78px; height:78px; flex:none; border-radius:20px; background:rgba(0,0,0,.32);
    display:flex; align-items:center; justify-content:center; border:1.5px solid rgba(255,255,255,.10);
    animation:bob 3s ease-in-out infinite; }
  .ep-meta{ display:flex; flex-wrap:wrap; gap:6px; }
  .ep-meta span{ font-size:10.5px; font-weight:900; padding:5px 10px; border-radius:99px;
    background:rgba(255,255,255,.10); }
  .ep-meta span.hp{ color:#FCA5A5; } .ep-meta span.ex{ color:#A7F3D0; } .ep-meta span.bs{ color:#FDE68A; }
  .ep-hero .btn{ margin-top:14px; position:relative; z-index:1; }
  .ep-hero.pulse{ animation:heroPulse .5s cubic-bezier(.2,.9,.3,1.4); }
  @keyframes heroPulse{ 40%{ transform:scale(1.02);} }

  /* exercise clarity banner in battle */
  .form-meter{ display:flex; align-items:center; gap:9px; background:rgba(0,0,0,.55); backdrop-filter:blur(6px);
    border:1px solid rgba(255,255,255,.12); border-radius:12px; padding:7px 10px; position:absolute;
    left:10px; bottom:10px; z-index:7; }
  .form-meter .fm-bar{ width:74px; height:7px; border-radius:99px; background:rgba(255,255,255,.14); overflow:hidden; }
  .form-meter .fm-bar i{ display:block; height:100%; border-radius:99px; transition:width .1s linear;
    background:linear-gradient(90deg,var(--green),var(--gold)); }
  .form-meter b{ font-size:11px; font-weight:900; min-width:34px; text-align:right; }
  .form-meter.down b{ color:var(--gold); }
  .ex-banner{ display:flex; align-items:center; gap:10px; background:var(--card-2);
    border:1.5px solid rgba(139,92,246,.4); border-radius:14px; padding:9px 12px; margin-bottom:8px; }
  .ex-banner .eb-ico{ width:34px; height:34px; flex:none; border-radius:10px; background:rgba(139,92,246,.2);
    display:flex; align-items:center; justify-content:center; }
  .ex-banner b{ font-size:14px; display:block; line-height:1.15; }
  .ex-banner span{ font-size:10.5px; font-weight:800; color:var(--dim); }

  /* ---------- RANK TIERS ---------- */
  .rank-card{ background:linear-gradient(135deg,var(--rc1),var(--rc2)); border-radius:22px; padding:20px;
    position:relative; overflow:hidden; text-align:center; box-shadow:0 10px 34px rgba(0,0,0,.45); }
  .rank-card::after{ content:""; position:absolute; inset:0;
    background:radial-gradient(circle at 80% -10%,rgba(255,255,255,.28),transparent 55%); pointer-events:none; }
  .rank-emblem{ width:88px; height:88px; margin:0 auto 10px; position:relative; z-index:1;
    filter:drop-shadow(0 6px 14px rgba(0,0,0,.5)); animation:bob 3.2s ease-in-out infinite; }
  .rank-tier{ font-size:23px; font-weight:900; letter-spacing:.04em; text-shadow:0 3px 0 rgba(0,0,0,.4); position:relative; z-index:1; }
  .rank-sub{ font-size:12px; font-weight:900; color:rgba(255,255,255,.85); position:relative; z-index:1; }
  .rank-prog{ margin-top:14px; position:relative; z-index:1; }
  .rank-prog .t{ display:flex; justify-content:space-between; font-size:10.5px; font-weight:900;
    color:rgba(255,255,255,.9); margin-bottom:5px; }
  .rank-prog .bar{ height:9px; border-radius:99px; background:rgba(0,0,0,.35); overflow:hidden; }
  .rank-prog .bar i{ display:block; height:100%; border-radius:99px; background:#fff; box-shadow:0 0 12px rgba(255,255,255,.8);
    transition:width .6s cubic-bezier(.2,.9,.3,1.1); }
  .tier-row{ display:flex; gap:6px; margin-top:14px; overflow-x:auto; scrollbar-width:none; padding-bottom:2px; }
  .tier-row::-webkit-scrollbar{ display:none; }
  .tier-chip{ flex:none; display:flex; flex-direction:column; align-items:center; gap:4px; padding:9px 11px;
    border-radius:13px; background:var(--card-dark); border:1.5px solid var(--line); min-width:64px; opacity:.45; }
  .tier-chip.on{ opacity:1; border-color:var(--gold); box-shadow:0 0 16px rgba(245,158,11,.3); }
  .tier-chip.done{ opacity:.85; }
  .tier-chip b{ font-size:9.5px; letter-spacing:.04em; }
  .tier-chip span{ font-size:8.5px; font-weight:900; color:var(--dim); }

  /* ---------- MEMBERSHIP ---------- */
  .offer-banner{ background:linear-gradient(135deg,#EF4444,#F59E0B); border-radius:20px; padding:16px;
    text-align:center; margin-bottom:14px; position:relative; overflow:hidden;
    box-shadow:0 8px 30px rgba(239,68,68,.4); animation:offerGlow 2.4s ease-in-out infinite; }
  @keyframes offerGlow{ 50%{ box-shadow:0 8px 44px rgba(245,158,11,.65);} }
  .offer-banner .tag{ font-size:10px; font-weight:900; letter-spacing:.2em; color:rgba(255,255,255,.9); }
  .offer-banner .big{ font-size:26px; font-weight:900; text-shadow:0 3px 0 rgba(0,0,0,.35); }
  .offer-banner .was{ text-decoration:line-through; opacity:.75; font-size:14px; font-weight:900; }
  .offer-cd{ display:inline-flex; gap:5px; margin-top:8px; }
  .offer-cd b{ background:rgba(0,0,0,.32); padding:5px 9px; border-radius:8px; font-size:15px; font-weight:900;
    min-width:38px; display:inline-block; }
  .offer-cd span{ font-size:9px; font-weight:900; opacity:.8; display:block; }
  .plan{ background:var(--card-dark); border:1.5px solid var(--line); border-radius:20px; padding:18px; margin-bottom:12px;
    position:relative; transition:transform .12s, border-color .2s; }
  .plan:active{ transform:scale(.985); }
  .plan.best{ border-color:var(--gold); background:rgba(245,158,11,.07); box-shadow:0 0 24px rgba(245,158,11,.18); }
  .plan .pbadge{ position:absolute; top:-9px; right:16px; font-size:9.5px; font-weight:900; letter-spacing:.12em;
    background:var(--gold); color:#26190A; padding:4px 11px; border-radius:99px; }
  .plan h4{ font-size:16px; font-weight:900; }
  .plan .price{ font-size:28px; font-weight:900; color:var(--gold); line-height:1.1; margin:4px 0 2px; }
  .plan .per{ font-size:11.5px; font-weight:800; color:var(--dim); }
  .plan .save{ font-size:11px; font-weight:900; color:var(--green); margin-top:4px; }

  /* ---------- EXTRA MOTION ---------- */
  .xpbar-glow{ animation:xpGlow .8s ease-out; }
  @keyframes xpGlow{ 0%{ filter:brightness(2.2) saturate(1.6);} 100%{ filter:none; } }
  .nv.on svg{ animation:navPop .34s cubic-bezier(.2,.9,.3,1.6); }
  @keyframes navPop{ 40%{ transform:translateY(-5px) scale(1.22);} }
  .card-tap{ animation:cardTap .22s; }
  @keyframes cardTap{ 50%{ transform:scale(.975);} }
  .hp-drain{ animation:hpDrain .4s; }
  @keyframes hpDrain{ 25%{ transform:translateX(-4px);} 60%{ transform:translateX(4px);} }
  .creature-sprite.enter{ animation:creatureEnter .5s cubic-bezier(.2,.9,.3,1.4); }
  @keyframes creatureEnter{ from{ opacity:0; transform:translateY(-26px) scale(.5) rotate(-12deg);} }
  .rep-pill.streak{ box-shadow:0 0 30px rgba(245,158,11,.85); border-color:var(--gold); }
  .lvl-card.levelup{ animation:lvlFlare .9s; }
  @keyframes lvlFlare{ 0%{ filter:brightness(2.4);} 100%{ filter:none;} }
  .toastpop{ animation:bmp .3s; }

  /* ---------- COIN FLY ---------- */
  .flycoin{ position:absolute; z-index:80; pointer-events:none; width:26px; height:26px;
    filter:drop-shadow(0 0 8px rgba(245,158,11,.9)); }
  .coin-pop{ animation:coinPop .4s cubic-bezier(.2,.9,.3,1.7); }
  @keyframes coinPop{ 50%{ transform:scale(1.45); } }

  /* ---------- DIFFICULTY PICKER ---------- */
  .diff-row{ display:grid; grid-template-columns:repeat(4,1fr); gap:7px; margin:10px 0 8px; }
  .diff-pick{ padding:10px 4px; border-radius:13px; background:var(--card-2); border:2px solid transparent;
    transition:transform .12s, border-color .2s, box-shadow .25s; }
  .diff-pick:active{ transform:scale(.94); }
  .diff-pick b{ display:block; font-size:11.5px; color:var(--dim); }
  .diff-pick span{ font-size:9.5px; font-weight:900; color:var(--dim); opacity:.7; }
  .diff-pick.on{ border-color:var(--dc); background:color-mix(in srgb, var(--dc) 14%, transparent);
    box-shadow:0 0 18px color-mix(in srgb, var(--dc) 40%, transparent); }
  .diff-pick.on b, .diff-pick.on span{ color:var(--dc); }
  .diff-note{ font-size:11.5px; font-weight:800; text-align:center; }

  /* ---------- LOADING SCREEN (clean, smooth) ---------- */
  #loader{ position:absolute; inset:0; z-index:200; display:flex; flex-direction:column; align-items:center;
    justify-content:center; overflow:hidden;
    background:radial-gradient(circle at 50% 38%, #2E2170 0%, #1A1444 55%, #0E0B26 100%);
    transition:opacity .5s ease, visibility .5s; }
  #loader.gone{ opacity:0; visibility:hidden; }

  .ld-stage{ position:relative; z-index:2; display:flex; flex-direction:column; align-items:center; gap:22px; }

  .ld-logo-wrap{ position:relative; width:112px; height:112px; display:flex; align-items:center; justify-content:center; }
  .ld-glow{ position:absolute; inset:-30px; border-radius:50%;
    background:radial-gradient(circle, rgba(245,158,11,.35), transparent 70%);
    animation:glowBreathe 2.6s ease-in-out infinite; }
  @keyframes glowBreathe{ 0%,100%{ opacity:.55; transform:scale(.92);} 50%{ opacity:1; transform:scale(1.08);} }
  .ld-logo{ position:relative; width:104px; height:104px; object-fit:contain; z-index:2;
    filter:drop-shadow(0 8px 18px rgba(0,0,0,.45));
    animation:logoBreathe 2.6s cubic-bezier(.45,0,.55,1) infinite; }
  @keyframes logoBreathe{ 0%,100%{ transform:scale(1);} 50%{ transform:scale(1.055);} }

  /* single clean orbit ring instead of hand-drawn character */
  .ld-orbit{ position:absolute; inset:-20px; border-radius:50%; z-index:1; }
  .ld-orbit svg{ width:100%; height:100%; animation:spin 2.8s linear infinite; }
  @keyframes spin{ to{ transform:rotate(360deg); } }

  .ld-title{ font-size:26px; font-weight:900; letter-spacing:.005em; color:#fff;
    text-shadow:0 2px 0 rgba(0,0,0,.4); }

  .ld-tip{ font-size:12.5px; font-weight:800; color:#AEB8D4; max-width:26ch; text-align:center;
    min-height:34px; line-height:1.5; }
  .ld-tip span{ display:inline-block; animation:tipIn .4s ease; }
  @keyframes tipIn{ from{ opacity:0; transform:translateY(6px);} }

  .ld-track{ width:190px; height:6px; border-radius:99px; background:rgba(255,255,255,.10); overflow:hidden; }
  .ld-track i{ display:block; height:100%; width:0%; border-radius:99px;
    background:linear-gradient(90deg,#8B5CF6,#F59E0B);
    transition:width .4s cubic-bezier(.3,.9,.4,1); box-shadow:0 0 10px rgba(245,158,11,.6); }

  .ld-pct{ font-size:10.5px; font-weight:900; color:#8D96B8; letter-spacing:.16em; }

  /* payoff: brief warm flash + settle when loading actually finishes */
  #loader.reveal .ld-logo{ animation:revealPop .5s cubic-bezier(.25,.85,.35,1.25); }
  @keyframes revealPop{ 0%{ transform:scale(1);} 45%{ transform:scale(1.18);} 100%{ transform:scale(1);} }
  #loader.reveal .ld-glow{ animation:glowBurst .5s ease-out forwards; }
  @keyframes glowBurst{ 0%{ opacity:.7; transform:scale(1);} 100%{ opacity:0; transform:scale(1.9);} }

  /* ---------- EXTREME FX ---------- */  /* ---------- EXTREME FX ---------- */  /* ---------- EXTREME FX ---------- */  /* ---------- EXTREME FX ---------- */  /* ---------- EXTREME FX ---------- */
  .spark{ position:absolute; width:7px; height:7px; border-radius:2px; pointer-events:none; z-index:66;
    animation:sparkFly .62s cubic-bezier(.15,.7,.3,1) forwards; }
  @keyframes sparkFly{ to{ transform:translate(var(--sx),var(--sy)) rotate(var(--sr)) scale(.2); opacity:0; } }
  .shockwave{ position:absolute; border-radius:50%; pointer-events:none; z-index:65; border:3px solid rgba(245,158,11,.9);
    animation:shock .5s ease-out forwards; }
  @keyframes shock{ from{ width:10px; height:10px; opacity:1; } to{ width:220px; height:220px; opacity:0; } }
  #app.quake{ animation:quake .34s; }
  @keyframes quake{ 15%{transform:translate(-6px,4px)} 35%{transform:translate(7px,-5px)}
    55%{transform:translate(-5px,-3px)} 75%{transform:translate(4px,4px)} }
  #flashlayer{ position:absolute; inset:0; z-index:63; pointer-events:none; opacity:0; background:#fff; }
  #flashlayer.go{ animation:flashy .3s ease-out; }
  @keyframes flashy{ 0%{ opacity:.55; } 100%{ opacity:0; } }
  .screen.active{ animation:screenSlide .3s cubic-bezier(.2,.9,.3,1.05); }
  @keyframes screenSlide{ from{ opacity:0; transform:translateY(14px) scale(.99);} }
  .tug-num.pump{ animation:pump .22s cubic-bezier(.2,.9,.3,1.6); }
  @keyframes pump{ 50%{ transform:scale(1.35); } }

  /* ---------- ACCOUNT / BADGES / INVENTORY ---------- */
  .gear-btn{ width:38px; height:38px; border-radius:12px; background:var(--card-dark); border:1px solid var(--line);
    display:flex; align-items:center; justify-content:center; }
  .pfp-wrap{ position:relative; width:96px; height:96px; margin:0 auto 12px; }
  .pfp{ width:96px; height:96px; border-radius:50%; overflow:hidden; background:var(--grad-purple);
    display:flex; align-items:center; justify-content:center; box-shadow:0 0 34px rgba(139,92,246,.5); }
  .pfp img{ width:100%; height:100%; object-fit:cover; }
  .pfp svg{ width:62px; height:62px; }
  .pfp-edit{ position:absolute; right:-2px; bottom:-2px; width:34px; height:34px; border-radius:50%;
    background:var(--gold); display:flex; align-items:center; justify-content:center; border:3px solid var(--bg-dark); }
  .bio-box{ width:100%; background:var(--card-dark); border:1.5px solid var(--line); border-radius:14px;
    padding:13px 14px; color:var(--text); font-family:inherit; font-weight:700; font-size:13.5px; outline:none; resize:none; }
  .bio-box:focus{ border-color:var(--purple); }
  .badge-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
  .badge{ background:var(--card-dark); border:1px solid var(--line); border-radius:16px; padding:14px 8px; text-align:center; }
  .badge.got{ border-color:rgba(245,158,11,.55); background:rgba(245,158,11,.08); box-shadow:0 0 18px rgba(245,158,11,.15); }
  .badge .bi{ height:34px; display:flex; align-items:center; justify-content:center; margin-bottom:6px; }
  .badge.locked .bi{ filter:grayscale(1); opacity:.3; }
  .badge b{ font-size:10.5px; display:block; }
  .badge span{ font-size:9px; color:var(--dim); font-weight:800; }
  .locked-page{ flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;
    text-align:center; padding:40px 26px; gap:10px; }
  .locked-page .lk{ width:96px; height:96px; border-radius:28px; background:var(--card-solid); border:2px solid var(--line);
    display:flex; align-items:center; justify-content:center; margin-bottom:8px; animation:bob 3s infinite; }
  .soon-tag{ display:inline-block; font-size:10.5px; font-weight:900; letter-spacing:.16em; background:rgba(139,92,246,.18);
    color:var(--violet-light); padding:7px 15px; border-radius:99px; margin-top:6px; }
  .inv-preview{ display:grid; grid-template-columns:repeat(3,1fr); gap:11px; width:100%; margin-top:22px; opacity:.45; }
  .inv-slot{ aspect-ratio:1; border-radius:16px; background:var(--card-dark); border:1.5px dashed var(--line);
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px; }
  .inv-slot span{ font-size:9.5px; font-weight:900; color:var(--dim); }
  .nv.lock{ opacity:.45; }

  /* ---------- PLAYER Energy + POSITION GATE ---------- */
  .php-wrap{ margin-top:9px; }
  .php-lbl{ display:flex; justify-content:space-between; font-size:10.5px; font-weight:900; margin-bottom:4px; }
  .php-bar{ height:11px; border-radius:99px; background:rgba(0,0,0,.45); overflow:hidden; }
  .php-bar i{ display:block; height:100%; border-radius:99px; transition:width .3s;
    background:linear-gradient(90deg,#34D399,var(--green)); }
  .php-bar.warn i{ background:linear-gradient(90deg,#FCD34D,var(--gold)); }
  .php-bar.crit i{ background:linear-gradient(90deg,#F87171,var(--red)); animation:pulseLive .5s infinite; }
  .posgate{ position:absolute; inset:0; z-index:8; display:flex; flex-direction:column; align-items:center;
    justify-content:center; gap:12px; background:rgba(6,10,22,.86); backdrop-filter:blur(4px); text-align:center; padding:26px; }
  .posgate{ gap:10px; }
  .pose-guide{ position:absolute; inset:0; z-index:7; pointer-events:none; display:none;
    align-items:center; justify-content:center; }
  .pose-guide.on{ display:flex; }
  .pose-guide svg{ width:78%; max-width:280px; opacity:.30; animation:guidePulse 2.4s ease-in-out infinite; }
  @keyframes guidePulse{ 50%{ opacity:.5; transform:scale(1.02);} }
  .prep-word{ font-size:15px; font-weight:900; letter-spacing:.3em; color:var(--gold);
    text-shadow:0 0 20px rgba(245,158,11,.7); animation:pulseLive 1.4s infinite; }
  .posgate .pg-ico{ width:80px; height:80px; border-radius:24px; background:var(--card-solid);
    border:2px solid rgba(245,158,11,.5); display:flex; align-items:center; justify-content:center; animation:bob 2.2s infinite; }
  .posgate h4{ font-size:19px; font-weight:900; text-shadow:0 3px 0 rgba(0,0,0,.5); }
  .posgate p{ font-size:12.5px; font-weight:800; color:var(--dim); max-width:24ch; }
  .hold-circle{ position:relative; width:150px; height:150px; margin:6px auto 0;
    display:flex; align-items:center; justify-content:center; touch-action:none; user-select:none;
    -webkit-user-select:none; -webkit-tap-highlight-color:transparent; }
  .hold-circle svg{ position:absolute; inset:0; width:150px; height:150px; transform:rotate(-90deg); }
  .hold-circle .hc-track{ stroke:rgba(255,255,255,.12); }
  .hold-circle .hc-count{ stroke:var(--gold); stroke-linecap:round;
    transition:stroke-dashoffset 1s linear; filter:drop-shadow(0 0 8px rgba(245,158,11,.85)); }
  .hold-circle .hc-hold{ stroke:var(--violet-light); stroke-linecap:round;
    transition:stroke-dashoffset .06s linear; filter:drop-shadow(0 0 10px rgba(167,139,250,.95)); }
  .hold-circle .hc-mid{ position:relative; z-index:2; display:flex; flex-direction:column;
    align-items:center; justify-content:center; width:112px; height:112px; border-radius:50%;
    background:rgba(10,7,26,.75); border:1px solid rgba(255,255,255,.10); transition:transform .12s; }
  .hold-circle.holding .hc-mid{ transform:scale(.93); background:rgba(30,18,66,.9); }
  .hold-circle .hc-num{ font-size:44px; font-weight:900; line-height:1; color:var(--gold);
    text-shadow:0 0 22px rgba(245,158,11,.8); }
  .hold-circle .hc-lbl{ font-size:8.5px; font-weight:900; letter-spacing:.16em; color:var(--dim); margin-top:5px; }
  .hold-circle.holding .hc-lbl{ color:var(--violet-light); }
  .prep-timer{ display:flex; flex-direction:column; align-items:center; gap:6px; margin-top:4px; }
  .prep-ring{ position:relative; width:74px; height:74px; }
  .prep-ring svg{ width:74px; height:74px; transform:rotate(-90deg); }
  .prep-ring .track{ stroke:rgba(255,255,255,.14); }
  .prep-ring .fill{ stroke:var(--gold); stroke-linecap:round; transition:stroke-dashoffset 1s linear;
    filter:drop-shadow(0 0 6px rgba(245,158,11,.8)); }
  .prep-ring b{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
    font-size:26px; font-weight:900; color:var(--gold); text-shadow:0 0 16px rgba(245,158,11,.7); }
  .prep-note{ font-size:11px; font-weight:800; color:var(--dim); }
  .posgate .cd{ font-size:56px; font-weight:900; color:var(--gold); text-shadow:0 0 26px rgba(245,158,11,.7); }
  .dmg.crit{ color:#FF5A5A; font-size:30px; text-shadow:0 0 18px rgba(239,68,68,.95),0 2px 0 rgba(0,0,0,.5); }
  .critflash{ position:absolute; inset:0; z-index:7; pointer-events:none; background:radial-gradient(circle,rgba(239,68,68,.35),transparent 65%);
    animation:cfl .35s ease-out forwards; }
  @keyframes cfl{ to{ opacity:0; } }
  .shake-hard{ animation:hardShake .32s; }
  @keyframes hardShake{ 20%{transform:translate(-7px,3px) rotate(-2deg)} 45%{transform:translate(6px,-3px) rotate(2deg)}
    70%{transform:translate(-4px,2px) rotate(-1deg)} }

  /* ---------- RANKED DUEL HUD ---------- */
  .rank-hud{ background:linear-gradient(180deg,#16213F,#101A33); border:1px solid rgba(255,255,255,.10);
    border-radius:20px; padding:12px 14px 14px; margin-bottom:10px; position:relative; box-shadow:0 8px 26px rgba(0,0,0,.45); }
  .rank-label{ text-align:center; font-size:10px; font-weight:900; letter-spacing:.24em; color:var(--gold);
    text-shadow:0 0 14px rgba(245,158,11,.5); margin-bottom:8px; }
  .rank-top{ display:grid; grid-template-columns:1fr auto 1fr; gap:8px; align-items:start; }
  .rank-side{ text-align:center; min-width:0; }
  .rank-side.r{ text-align:center; }
  .hexwrap{ position:relative; width:66px; height:74px; margin:0 auto 4px; }
  .hex{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; overflow:hidden;
    clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%); }
  .hex.frame{ background:var(--green); }
  .hex.frame.creature{ background:var(--red); }
  .hex.inner{ inset:3px; background:#0C1428; }
  .hex.inner svg{ width:46px; height:46px; }
  #d-opp-video{ position:absolute; inset:3px; width:calc(100% - 6px); height:calc(100% - 6px);
    object-fit:cover; clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
    opacity:0; transition:opacity .3s ease; pointer-events:none; transform:scaleX(-1); }
  #d-opp-video.live{ opacity:1; }
  .live-cam-tag{ position:absolute; bottom:-14px; left:50%; transform:translateX(-50%);
    font-size:7.5px; font-weight:900; letter-spacing:.1em; color:var(--green); opacity:0;
    transition:opacity .3s; white-space:nowrap; }
  #d-opp-video.live ~ .live-cam-tag{ opacity:1; }
  .rank-name{ font-weight:900; font-size:15px; text-shadow:0 2px 0 rgba(0,0,0,.5); white-space:nowrap;
    overflow:hidden; text-overflow:ellipsis; }
  .rank-elo{ font-size:11.5px; font-weight:900; color:#8FA3C8; letter-spacing:.02em; }
  .rank-mid{ text-align:center; padding-top:6px; }
  .rank-mid .tl{ font-size:9.5px; font-weight:900; letter-spacing:.2em; color:#8FA3C8; }
  .rank-mid .tv{ font-size:30px; font-weight:900; line-height:1; text-shadow:0 3px 0 rgba(0,0,0,.5); }
  .rank-mid .tv.low{ color:var(--red); animation:pulseLive .7s infinite; }

  .tug-row{ display:grid; grid-template-columns:auto 1fr auto; gap:10px; align-items:center; margin-top:12px; }
  .tug-num{ font-size:30px; font-weight:900; line-height:1; text-shadow:0 3px 0 rgba(0,0,0,.5); min-width:38px; }
  .tug-num.me{ color:var(--green); text-align:left; }
  .tug-num.op{ color:var(--red); text-align:right; }
  .tug-bar{ position:relative; height:20px; border-radius:99px; overflow:hidden; background:var(--red);
    box-shadow:inset 0 2px 6px rgba(0,0,0,.5); }
  .tug-bar i{ display:block; height:100%; background:linear-gradient(90deg,#34D399,var(--green)); width:50%;
    transition:width .35s cubic-bezier(.2,.9,.3,1.1); }
  .tug-knob{ position:absolute; top:50%; width:14px; height:14px; margin:-7px 0 0 -7px; border-radius:3px;
    background:#EAF6FF; transform:rotate(45deg); box-shadow:0 0 12px rgba(255,255,255,.9);
    transition:left .35s cubic-bezier(.2,.9,.3,1.1); }

  .duel-stage{ flex:1; position:relative; border-radius:20px; overflow:hidden; background:#000;
    border:1px solid var(--line); min-height:0; }
  .duel-stage video{ width:100%; height:100%; object-fit:cover; background:#000; }
  /* hide every native media control (iOS shows a big play button on empty/unstarted video) */
  video::-webkit-media-controls,
  video::-webkit-media-controls-start-playback-button,
  video::-webkit-media-controls-play-button,
  video::-webkit-media-controls-panel,
  video::-webkit-media-controls-overlay-play-button{ display:none !important; -webkit-appearance:none; opacity:0; }
  video{ pointer-events:none; }
  #d-video, #b-video{ opacity:0; transition:opacity .35s; }
  #d-video.live, #b-video.live{ opacity:1; }
  /* combo popup — only visible while you're actually landing reps */
  .combo{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); z-index:7;
    display:flex; flex-direction:column; align-items:center; gap:2px; pointer-events:none;
    opacity:0; transition:opacity .35s ease; }
  .combo.show{ opacity:1; }
  .combo-n{ font-size:74px; font-weight:900; line-height:.9; color:#FCD34D;
    text-shadow:0 5px 0 rgba(0,0,0,.45), 0 0 40px rgba(245,158,11,.9); }
  .combo-lbl{ font-size:13px; font-weight:900; letter-spacing:.24em; color:#fff;
    text-shadow:0 2px 6px rgba(0,0,0,.8); }
  .combo.pop .combo-n{ animation:comboPop .28s cubic-bezier(.2,.9,.3,1.7); }
  @keyframes comboPop{ 0%{ transform:scale(.55) rotate(-8deg); } 60%{ transform:scale(1.28) rotate(3deg); } }
  .combo.hot .combo-n{ color:#FF7A45; text-shadow:0 5px 0 rgba(0,0,0,.45), 0 0 46px rgba(239,68,68,.95); }
  .stage-tag{ position:absolute; bottom:12px; right:12px; z-index:6; font-size:10px; font-weight:900;
    letter-spacing:.1em; padding:6px 11px; border-radius:99px; background:rgba(0,0,0,.55); backdrop-filter:blur(4px); }
  .lead-float{ position:absolute; bottom:12px; left:12px; z-index:6; font-size:12px; font-weight:900;
    padding:7px 14px; border-radius:99px; background:rgba(0,0,0,.65); backdrop-filter:blur(6px);
    border:1px solid rgba(255,255,255,.12); }
  .lead-float.ahead{ color:var(--green); } .lead-float.behind{ color:var(--red); }
  .lead-float.flash{ animation:bmp .3s; }

  /* avatar picker */
  .av-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
  .av-pick{ aspect-ratio:1; border-radius:16px; background:var(--card-dark); border:2px solid var(--line);
    display:flex; align-items:center; justify-content:center; transition:transform .1s, border-color .2s; }
  .av-pick:active{ transform:scale(.94); }
  .av-pick.on{ border-color:var(--gold); background:rgba(245,158,11,.12); box-shadow:0 0 18px rgba(245,158,11,.35); }
  .av-pick svg{ width:38px; height:38px; }

  /* ---------- DUEL LOBBY ---------- */
  .code-box{ font-family:ui-monospace,Menlo,monospace; font-size:38px; font-weight:900; letter-spacing:10px;
    color:var(--gold); background:var(--card-solid); border:1.5px dashed rgba(245,158,11,.55); border-radius:18px;
    padding:18px; text-align:center; margin:14px 0; text-shadow:0 0 22px rgba(245,158,11,.5); }
  .code-in{ width:100%; background:var(--card-dark); border:1.5px solid var(--line); border-radius:14px; padding:16px;
    color:var(--text); font-family:ui-monospace,Menlo,monospace; font-size:26px; font-weight:900; letter-spacing:8px;
    text-align:center; text-transform:uppercase; outline:none; }
  .code-in:focus{ border-color:var(--gold); }
  .lobby-players{ display:flex; align-items:center; justify-content:center; gap:16px; margin:18px 0; }
  .lobby-p{ text-align:center; opacity:.35; transition:opacity .35s; }
  .lobby-p.in{ opacity:1; }
  .lobby-p .avatar{ margin:0 auto 7px; width:54px; height:54px; font-size:17px; }
  .lobby-p b{ font-size:12.5px; display:block; }
  .live-dot{ width:8px; height:8px; border-radius:50%; background:var(--green); display:inline-block;
    box-shadow:0 0 9px var(--green); animation:pulseLive 1.3s infinite; }
  @keyframes pulseLive{ 50%{ opacity:.25; } }
  .rt-badge{ position:absolute; top:10px; left:50%; transform:translateX(-50%); z-index:5; font-size:9.5px; font-weight:900; letter-spacing:.1em;
    padding:5px 10px; border-radius:99px; background:rgba(16,185,129,.2); color:var(--green); }

  @media (prefers-reduced-motion:reduce){
    .conf,.b-cta,.node.act,.radar::after,.feed-fake,.btn::after,.orb,.hdr.glow,.float-slow{ animation:none; }
  }
</style>
</head>
<body>
<div id="app">

<!-- ============ PRACTICE ============ -->
<section class="screen" id="scr-workout">
  <div class="page-head">
    <div class="ph-ico" style="background:rgba(245,158,11,.18)">
      <svg viewBox="0 0 24 24" style="width:24px;height:24px" fill="none" stroke="#F59E0B" stroke-width="2.3" stroke-linecap="round"><path d="M2 12h3M19 12h3M5 8v8M19 8v8M8 12h8"/></svg>
    </div>
    <div><b>Practice</b><span>Train without a match</span></div>
  </div>

  <div class="sect-head"><b>PICK YOUR MOVE</b><span class="ln"></span></div>
  <div class="target-pills" id="sr-ex">
    <button class="tpill sel" onclick="pickEx(this,'Push-ups')">Push-ups</button>
    <button class="tpill" onclick="pickEx(this,'Sit-ups')">Sit-ups</button>
    <button class="tpill" onclick="pickEx(this,'Squats')">Squats</button>
  </div>

  <div class="sect-head"><b>HOW HARD?</b><span class="ln"></span></div>
  <div class="card" id="diff-card"></div>

  <div class="sect-head"><b>CHOOSE A MODE</b><span class="ln"></span></div>
  <div class="big-card gold">
    <div class="bc-top">
      <div class="bc-ico"><svg viewBox="0 0 24 24" style="width:24px;height:24px" fill="#F59E0B"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg></div>
      <div class="grow"><b>Speed Run</b><p>Hit your target as fast as you can</p></div>
    </div>
    <div class="target-pills" id="sr-targets" style="margin-top:11px">
      <button class="tpill sel" onclick="pickTarget(this,10)">10 reps</button>
      <button class="tpill" onclick="pickTarget(this,25)">25 reps</button>
      <button class="tpill" onclick="pickTarget(this,50)">50 reps</button>
    </div>
    <button class="btn b-gold" onclick="startSpeedRun()">START</button>
  </div>

  <div class="big-card green">
    <div class="bc-top">
      <div class="bc-ico"><svg viewBox="0 0 24 24" style="width:24px;height:24px" fill="none" stroke="#10B981" stroke-width="2.2" stroke-linecap="round"><path d="M2 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/></svg></div>
      <div class="grow"><b>Endless Waves</b><p>Creatures keep coming — how far can you go?</p></div>
    </div>
    <button class="btn b-purple" onclick="startHorde()">START</button>
  </div>

  <div class="big-card purple">
    <div class="bc-top">
      <div class="bc-ico"><svg viewBox="0 0 24 24" style="width:24px;height:24px" fill="none" stroke="#A78BFA" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.2 6.2 19.6l1.5-6.5-5-4.4 6.6-.6z"/></svg></div>
      <div class="grow"><b>Max Reps</b><p>One big set. Your best: <b class="gold" id="pr-show">0</b></p></div>
    </div>
    <button class="btn b-ghost" onclick="startMax()">START</button>
  </div>
</section>

<!-- ============ 1. HOME / QUEST DASHBOARD ============ -->
<section class="screen active" id="scr-home">
  <div class="hello-card">
    <div class="hello-top">
      <div class="hello-av" id="crest-av"></div>
      <div class="hello-txt" style="min-width:0">
        <b id="home-uname">Champion</b>
        <span id="hello-sub">Ready to play?</span>
      </div>
      <div class="hello-lvl"><b id="h-lvl">1</b><span>LEVEL</span></div>
    </div>
    <div class="hello-xp">
      <div class="bar"><i id="h-xpbar" style="width:0%"></i></div>
      <span><span id="h-xp">0</span>/<span id="h-xpn">50</span> XP</span>
    </div>
  </div>

  <button class="big-play" onclick="playCurrentEpisode()">
    <div class="bp-lbl" id="hero-eyebrow">YOUR NEXT MATCH</div>
    <div class="bp-name" id="hero-name">Grib</div>
    <div class="bp-sub" id="hero-sub">3 push-ups to win</div>
    <div class="bp-go">▶ PLAY NOW</div>
    <div class="bp-mon" id="hero-mon"></div>
  </button>

  <div class="tiles">
    <button class="tile map" onclick="goToMapSmooth()">
      <div class="ti"><svg viewBox="0 0 24 24" style="width:22px;height:22px" fill="none" stroke="#A78BFA" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20 3 17V4l6 3 6-3 6 3v13l-6-3-6 3zM9 7v13M15 4v13"/></svg></div>
      <b>Map</b><span>See all the lands</span>
    </button>
    <button class="tile vs" onclick="nav('scr-arena')">
      <div class="ti"><svg viewBox="0 0 24 24" style="width:22px;height:22px" fill="none" stroke="#10B981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c.8-3 3.3-4.8 6.5-4.8s5.7 1.8 6.5 4.8"/><circle cx="17.5" cy="9" r="2.4"/></svg></div>
      <b>Versus</b><span>Play a friend</span>
    </button>
    <button class="tile train" onclick="nav('scr-workout')">
      <div class="ti"><svg viewBox="0 0 24 24" style="width:22px;height:22px" fill="none" stroke="#F59E0B" stroke-width="2.3" stroke-linecap="round"><path d="M2 12h3M19 12h3M5 8v8M19 8v8M8 12h8"/></svg></div>
      <b>Practice</b><span>Free workout</span>
    </button>
    <button class="tile help" onclick="showHowToPlay()">
      <div class="ti"><svg viewBox="0 0 24 24" style="width:22px;height:22px" fill="none" stroke="#60A5FA" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.2a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.5v.4"/><circle cx="12" cy="17" r="1" fill="#60A5FA" stroke="none"/></svg></div>
      <b>How to Play</b><span>Quick guide</span>
    </button>
  </div>

  <div style="display:none">
    <span id="qs-time"></span><span id="qs-cal"></span><span id="crest-reps"></span>
    <span id="crest-tier"></span><span id="ps-flame"></span><span id="ps-coin"></span>
    <span id="db-sprite"></span><span id="db-name"></span><span id="db-hp"></span>
    <span id="db-bar"></span><span id="db-target"></span><span id="db-coinchip"></span>
    <span id="hero-chap"></span><span id="hero-meta"></span><span id="ep-hero"></span>
    <span id="qs-reps"></span><span id="h-streak"></span><span id="h-coins"></span>
    <div id="quest-list"></div>
  </div>
</section>

<!-- ============ 3. CAMPAIGN ============ -->
<section class="screen" id="scr-campaign">
  <div class="card chap-head">
    <div class="row" style="gap:12px">
      <button class="round-btn" id="ch-prev" onclick="switchChap(-1)">‹</button>
      <div id="ch-icon" style="flex:none"></div>
      <div class="grow">
        <div class="boss-tag" id="ch-num">CHAPTER 1 / 3</div>
        <div class="hdr" style="font-size:19px" id="ch-name">Sprout Caves</div>
        <div class="dim" style="font-size:11.5px;font-weight:800">Episode <span id="ch-prog">2</span>/18 · <span id="ch-stars">2</span>★ earned</div>
      </div>
      <button class="round-btn" id="ch-next" onclick="switchChap(1)">›</button>
    </div>
    <div class="chap-prog"><i id="ch-bar" style="width:0%"></i></div>
    <div class="dim" id="ch-global" style="font-size:11px;font-weight:900;margin-top:8px;color:var(--gold)">0 / 108 episodes</div>
    <button class="btn b-red b-sm" id="boss-jump" style="margin-top:10px" onclick="jumpToBoss()">GO TO BIG MATCH</button>
    <div id="ch-lock" class="dim" style="display:none;font-size:11.5px;font-weight:900;margin-top:10px;color:var(--gold)">🔒 Finish the previous chapter to unlock this one</div>
  </div>
  <div id="map-wrap">
    <svg id="map-svg"></svg>
    <div id="map-nodes"></div>
  </div>
</section>

<!-- ============ 4. ARENA HUB ============ -->
<section class="screen" id="scr-arena">
  <div class="page-head">
    <div class="ph-ico" style="background:rgba(16,185,129,.18)">
      <svg viewBox="0 0 24 24" style="width:24px;height:24px" fill="none" stroke="#10B981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c.8-3 3.3-4.8 6.5-4.8s5.7 1.8 6.5 4.8"/><circle cx="17.5" cy="9" r="2.4"/></svg>
    </div>
    <div><b>Versus</b><span>Race someone, rep for rep</span></div>
  </div>

  <div class="rank-card" id="rankcard" style="--rc1:#8C5A2B;--rc2:#5B3617;margin-bottom:12px">
    <div class="rank-emblem" id="rank-emblem"></div>
    <div class="rank-tier" id="rank-tier">BRONZE</div>
    <div class="rank-sub"><span id="rank-elo-n">1000</span> RANK POINTS</div>
    <div class="rank-prog">
      <div class="t"><span id="rank-cur">BRONZE</span><span id="rank-nxt">SILVER 900</span></div>
      <div class="bar"><i id="rank-fill" style="width:0%"></i></div>
    </div>
  </div>
  <p class="dim" style="font-size:11px;font-weight:800;margin:10px 0 6px;text-align:center">Win Versus matches to earn rank points and climb this ladder</p>
  <div class="tier-row" id="tier-row"></div>

  <div class="sect-head"><b>WHO DO YOU WANT TO PLAY?</b><span class="ln"></span></div>

  <div class="big-card purple">
    <div class="bc-top">
      <div class="bc-ico"><svg viewBox="0 0 24 24" style="width:24px;height:24px" fill="none" stroke="#A78BFA" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c.8-3 3.3-4.8 6.5-4.8s5.7 1.8 6.5 4.8"/><circle cx="17.5" cy="9" r="2.4"/><path d="M15.7 14.4c2.6.2 4.7 1.8 5.5 4.4"/></svg></div>
      <div class="grow"><b>A Friend</b><p>Make a room and share the code</p></div>
    </div>
    <button class="btn b-purple" onclick="openLobby()">PLAY WITH FRIEND</button>
  </div>

  <div class="big-card gold">
    <div class="bc-top">
      <div class="bc-ico"><svg viewBox="0 0 24 24" style="width:24px;height:24px" fill="none" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/></svg></div>
      <div class="grow"><b>Someone Online</b><p>Win to earn rank points</p></div>
    </div>
    <button class="btn b-gold" onclick="findMatch()">FIND SOMEONE TO PLAY</button>
  </div>

  <div class="today-strip" style="margin-top:16px">
    <div><b id="duel-elo2">1000</b><span>RANK POINTS</span></div>
    <div><b id="duel-wins">0</b><span>WINS</span></div>
  </div>
  <div style="display:none"><span id="duel-elo"></span></div>
</section>

<!-- ============ 2. BATTLE ============ -->
<section class="screen" id="scr-battle">
  <div class="combat-hud" id="c-hud">
    <div class="creature-line">
      <span class="creature-sprite" id="b-sprite"></span>
      <div>
        <div class="e-name" id="b-ename">Goblin</div>
        <div class="e-meta"><span id="b-wave">Wave 1/3</span> · <span id="b-diff" style="color:var(--gold)">NORMAL</span></div>
      </div>
      <div class="hud-timer"><div class="t" id="b-timer">0:00</div><div class="l">TIME</div></div>
    </div>
    <div class="ex-banner">
      <div class="eb-ico" id="eb-ico"></div>
      <div><b id="eb-name">Push-ups</b><span id="eb-tip">Chest to the floor, then push all the way up</span></div>
    </div>
    <div class="hp-line">
      <div class="t"><span class="red" id="b-hplbl">Energy</span><span id="b-hptxt">3 / 5</span></div>
      <div class="pbar fill-r"><i id="b-hpbar" style="width:60%"></i></div>
    </div>
    <div class="php-wrap">
      <div class="php-lbl"><span class="green">YOUR ENERGY</span><span id="php-txt">100 / 100</span></div>
      <div class="php-bar" id="php-bar"><i id="php-fill" style="width:100%"></i></div>
    </div>
  </div>

  <div class="viewport" id="b-vp">
    <video id="b-video" autoplay playsinline muted disablepictureinpicture controlslist="nodownload noplaybackrate nofullscreen"></video>
    <canvas class="pose-canvas" id="b-canvas"></canvas>
    <div class="vp-fallback" id="b-fb" style="display:none">
      <span style="font-size:60px;opacity:.4">🧍</span>
    </div>
    <svg class="skel breathe" id="b-skel" viewBox="0 0 100 130" preserveAspectRatio="xMidYMid meet" style="display:none"></svg>
    <div class="track-pill load" id="b-track">⏳ Loading AI model…</div>
    <div class="calib"><span class="ok" id="b-calib">✓ Body in frame — form looks good</span></div>
    <div class="restgate" id="restgate">
      <div class="rest-ring" id="rest-ring"></div>
      <div class="rest-title">WAVE CLEARED — REST</div>
      <div class="rest-cd" id="rest-cd">20</div>
      <div class="rest-next">Next up: <b id="rest-next">Goblin</b></div>
      <button class="hold-btn" id="skip-btn"><span class="fillbar" id="skip-fill"></span><span>HOLD TO SKIP REST</span></button>
    </div>
    <div class="pose-guide" id="pose-guide">
      <svg viewBox="0 0 200 120" fill="none" stroke="#F59E0B" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
        <!-- push-up silhouette guide: head, plank body line, planted arms -->
        <circle cx="44" cy="46" r="13"/>
        <path d="M56 52 L120 62 L168 74"/>
        <path d="M60 54 L58 88"/>
        <path d="M112 61 L118 92"/>
        <path d="M58 88 L48 92 M58 88 L68 92"/>
        <path d="M118 92 L110 96 M118 92 L128 96"/>
        <path d="M168 74 L182 78 M168 74 L180 68"/>
        <path d="M30 104 L190 104" stroke-dasharray="5 8" opacity=".7"/>
      </svg>
    </div>
    <div class="form-meter" id="form-meter" style="display:none">
      <span style="font-size:9.5px;font-weight:900;letter-spacing:.1em;color:var(--dim)">DEPTH</span>
      <div class="fm-bar"><i id="fm-fill" style="width:0%"></i></div>
      <b id="fm-deg">—</b>
    </div>
    <div class="posgate" id="posgate">
      <div class="prep-word" id="prep-word">PREPARE</div>
      <div class="pg-ico" id="pg-ico"></div>
      <h4 class="hdr" id="pg-title">Get into position</h4>
      <p id="pg-text">Prop your phone up, get on the floor facing the camera, arms extended. The fight starts when you're set.</p>
      <div class="cd" id="pg-cd" style="display:none">3</div>
      <div class="hold-circle" id="hold-circle">
        <svg viewBox="0 0 150 150">
          <circle class="hc-track" cx="75" cy="75" r="66" fill="none" stroke-width="7"/>
          <circle class="hc-count" id="hc-count" cx="75" cy="75" r="66" fill="none" stroke-width="7"
            stroke-dasharray="415" stroke-dashoffset="0"/>
          <circle class="hc-hold" id="hc-hold" cx="75" cy="75" r="57" fill="none" stroke-width="5"
            stroke-dasharray="358" stroke-dashoffset="358"/>
        </svg>
        <div class="hc-mid">
          <div class="hc-num" id="hc-num">10</div>
          <div class="hc-lbl" id="hc-lbl">HOLD TO SKIP</div>
        </div>
      </div>
    </div>
  </div>

  <div class="bottom-hud">
    <button class="round-btn" onclick="pauseBattle()">⏸</button>
    <button class="rep-pill" id="rep-pill" onclick="manualRep()">
      <div class="n" id="b-reps">0</div><div class="l" id="rep-mode-lbl">TAP = 1 REP</div>
    </button>
    <button class="round-btn" id="b-auto" onclick="toggleBattleAuto()">▶</button>
  </div>
  <button class="btn b-ghost" style="margin-top:11px;display:none" id="b-endset" onclick="finishBattle(true)">END SET</button>
</section>

<!-- ============ 1v1 QUEUE ============ -->
<section class="screen" id="scr-queue">
  <div class="queue-box" id="q-search">
    <div class="radar"><span class="c">⚔️</span></div>
    <div class="hdr" style="font-size:19px">Searching for opponent…</div>
    <p class="dim" style="font-weight:800;font-size:12.5px;margin-top:6px">Matching you with a player near your pace</p>
    <button class="btn b-ghost" style="max-width:200px;margin:26px auto 0" onclick="cancelQueue()">Cancel</button>
  </div>
  <div class="queue-box found-card" id="q-found" style="display:none">
    <div class="hdr" style="font-size:15px;color:var(--green);margin-bottom:14px">OPPONENT FOUND!</div>
    <div class="av-wrap" style="display:inline-block">
      <span class="lvl-badge">LVL <span id="q-olvl">5</span></span>
      <div class="avatar" id="q-oav" style="width:72px;height:72px;font-size:22px">IP</div>
    </div>
    <div class="hdr" style="font-size:19px;margin-top:10px" id="q-oname">IronPusher99</div>
    <p class="dim" style="font-weight:800;font-size:12px;margin-top:4px">Ranked Duel · First to 20 push-ups</p>
    <button class="btn b-gold" style="max-width:230px;margin:22px auto 0" onclick="beginDuel()">FIGHT!</button>
  </div>
</section>

<!-- ============ 5. DUEL SPLIT SCREEN ============ -->
<section class="screen" id="scr-duel">
  <div class="rank-hud">
    <div class="rank-label">RANKED MATCH</div>
    <div class="rank-top">
      <div class="rank-side">
        <div class="hexwrap">
          <div class="hex frame"></div>
          <div class="hex inner" id="d-me-av"></div>
        </div>
        <div class="rank-name" id="d-me-name">You</div>
        <div class="rank-elo"><span id="d-me-elo">1000</span> ELO</div>
      </div>
      <div class="rank-mid">
        <div class="tl">TIME</div>
        <div class="tv" id="d-timer">0:00</div>
      </div>
      <div class="rank-side r">
        <div class="hexwrap">
          <div class="hex frame creature"></div>
          <div class="hex inner" id="d-oav-big"></div>
          <video id="d-opp-video" autoplay playsinline muted disablepictureinpicture></video>
          <span class="live-cam-tag">● LIVE</span>
        </div>
        <div class="rank-name" id="d-oname">Opponent</div>
        <div class="rank-elo"><span id="d-oelo">1000</span> ELO</div>
      </div>
    </div>
    <div class="tug-row">
      <div class="tug-num me" id="d-myreps">0</div>
      <div class="tug-bar"><i id="d-tug"></i><span class="tug-knob" id="d-knob" style="left:50%"></span></div>
      <div class="tug-num op" id="d-oreps">0</div>
    </div>
  </div>

  <div class="duel-stage">
    <div class="vs-intro gone" id="vs-intro">
      <div class="vs-card">
        <div class="vs-fighter">
          <div class="hexwrap"><div class="hex frame"></div><div class="hex inner" id="vs-me-av"></div></div>
          <b id="vs-me-name">You</b><span id="vs-me-elo">1000 ELO</span>
        </div>
        <div class="vs-clash hdr">VS</div>
        <div class="vs-fighter right">
          <div class="hexwrap"><div class="hex frame creature"></div><div class="hex inner" id="vs-op-av"></div></div>
          <b id="vs-op-name">Rival</b><span id="vs-op-elo">1000 ELO</span>
        </div>
      </div>
    </div>
    <video id="d-video" autoplay playsinline muted disablepictureinpicture controlslist="nodownload noplaybackrate nofullscreen"></video>
    <canvas class="pose-canvas" id="d-canvas"></canvas>
    <div class="vp-fallback" id="d-fb" style="display:none"><span style="font-size:54px;opacity:.4">🧍</span></div>
    <button class="duel-tapzone" id="d-tapzone" onclick="duelTap()" aria-label="Tap to count rep"></button>
    <span class="stage-tag" id="d-track">Loading AI…</span>
    <button class="stage-tag" id="d-skip-ai" style="right:12px;left:auto;top:44px;bottom:auto;display:none;background:rgba(239,68,68,.75)" onclick="forceDuelTapMode()">SKIP — TAP MODE</button>
    <span class="rt-badge" id="rt-badge" style="display:none">● LIVE OPPONENT</span>
    <span class="lead-float" id="d-lead">EVEN</span>
    <div class="combo" id="d-combo">
      <div class="combo-n" id="d-combo-n">2</div>
      <div class="combo-lbl" id="d-combo-l">COMBO</div>
    </div>
  </div>

  <div class="row" style="gap:10px;margin-top:10px">
    <button class="btn b-ghost" style="flex:1" onclick="abortDuel()">LEAVE</button>
    <span class="chip" style="flex:none" id="d-hint">First to 20 reps wins</span>
  </div>
</section>

<!-- ============ 7. VICTORY ============ -->
<section class="screen" id="scr-victory">
  <div class="vic-stars" id="v-stars"><span><svg viewBox="0 0 24 24" style="width:36px;height:36px" fill="#F59E0B"><path d="M12 2l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.2 6.2 19.6l1.5-6.5-5-4.4 6.6-.6z"/></svg></span><span><svg viewBox="0 0 24 24" style="width:36px;height:36px" fill="#F59E0B"><path d="M12 2l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.2 6.2 19.6l1.5-6.5-5-4.4 6.6-.6z"/></svg></span><span><svg viewBox="0 0 24 24" style="width:36px;height:36px" fill="#F59E0B"><path d="M12 2l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.2 6.2 19.6l1.5-6.5-5-4.4 6.6-.6z"/></svg></span></div>
  <div class="vic-h hdr" id="v-head">VICTORY!</div>
  <div class="card" style="text-align:left">
    <div class="t row" style="justify-content:space-between;font-size:11px;font-weight:900;margin-bottom:5px">
      <span>LEVEL <span id="v-lvl">5</span></span><span id="v-xptxt">90/250 XP</span>
    </div>
    <div class="pbar fill-g"><i id="v-xpbar" style="width:36%"></i></div>
    <div id="v-lvlup" style="display:none"><span class="lvlup-flash">🎉 LEVEL UP!</span></div>
  </div>
  <div class="vic-grid">
    <div class="qstat"><div class="n" id="v-reps">0</div><div class="l">Reps</div></div>
    <div class="qstat"><div class="n" id="v-time">0:00</div><div class="l">Active time</div></div>
    <div class="qstat"><div class="n green" id="v-acc">96%</div><div class="l">Form accuracy</div></div>
    <div class="qstat"><div class="n gold" id="v-coins">+0</div><div class="l">Coins</div></div>
  </div>
  <button class="btn b-purple" onclick="victoryContinue()">CONTINUE</button>
  <button class="btn b-ghost" style="margin-top:10px" onclick="toast('📸 Workout card copied — ready to share!')">SHARE WORKOUT CARD</button>
</section>

<!-- ============ 6. LEADERBOARD ============ -->
<section class="screen" id="scr-ranks">
  <div class="card season-head">
    <div class="boss-tag">SEASON 4</div>
    <div class="lg hdr">Gladiator League</div>
    <div class="dim" style="font-size:11.5px;font-weight:900;margin-top:3px">Resets in <span id="season-cd" class="gold">6d 11:59:59</span></div>
  </div>
  <div class="podium" id="podium"></div>
  <div id="lb-scroll"></div>
</section>

<!-- ============ 8. PROFILE ============ -->
<section class="screen" id="scr-profile">
  <div class="topline">
    <div class="screen-title hdr">Me</div>
  </div>

  <div class="ptabs">
    <button class="ptab on" id="pt-char" onclick="profTab('char')">Profile</button>
    <button class="ptab" id="pt-ana" onclick="profTab('ana')">Stats</button>
    <button class="ptab" id="pt-set" onclick="profTab('set')">Settings</button>
  </div>

  <div id="p-char">
    <div class="card" style="text-align:center;padding:20px">
      <div class="pfp-wrap">
        <div class="pfp" id="pfp-view"></div>
        <button class="pfp-edit" onclick="$('pfp-file').click()" aria-label="Change photo">
          <svg viewBox="0 0 24 24" style="width:17px;height:17px" fill="none" stroke="#26190A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h2L9 4h6l1.5 2h2A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.4"/></svg>
        </button>
        <input type="file" id="pfp-file" accept="image/*" style="display:none" onchange="uploadPfp(event)">
      </div>
      <button onclick="editName()" style="display:flex;align-items:center;gap:8px;margin:10px auto 0">
        <span class="hdr" style="font-size:22px" id="prof-uname">Champion</span>
        <svg viewBox="0 0 24 24" style="width:17px;height:17px;flex:none" fill="none" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
      </button>
      <div class="crest-tier" id="p-tier" style="margin-top:8px"></div>
      <p class="dim" style="font-size:11px;font-weight:800;margin-top:10px">Tap your name or the camera to change them</p>
    </div>

    <div class="today-strip">
      <div><b id="p-lvl">1</b><span>LEVEL</span></div>
      <div><b id="p-total">0</b><span>TOTAL REPS</span></div>
      <div><b id="p-streak">1</b><span>DAY STREAK</span></div>
    </div>
    <div class="today-strip" style="margin-top:9px">
      <div><b id="p-elo">1000</b><span>RANK POINTS</span></div>
      <div><b id="p-coins">0</b><span>COINS</span></div>
    </div>

    <div class="sect-head"><b>ABOUT ME</b><span class="ln"></span></div>
    <textarea class="bio-box" id="bio-in" rows="3" maxlength="140" placeholder="Say something about your training…" oninput="bioChanged()"></textarea>
    <div class="dim" style="text-align:right;font-size:10.5px;font-weight:800;margin-top:5px"><span id="bio-count">0</span>/140</div>

    <div class="sect-head"><b>MY BADGES</b><span class="ln"></span></div>
    <div class="badge-grid" id="badge-grid"></div>

    <div class="sect-head"><b>PICK AN ICON</b><span class="ln"></span></div>
    <div class="av-grid" id="av-grid"></div>
    <p class="dim" style="font-size:11px;font-weight:800;margin-top:8px">Or use your own photo with the camera button above.</p>
    <div style="display:none"><span id="p-title"></span><span id="shop-frames"></span><span id="shop-titles"></span><span id="shop-pets"></span></div>
  </div>

  <div id="p-ana" style="display:none">
    <div class="card"><b style="font-size:13.5px">Reps this week</b><div class="chart" id="ana-chart"></div></div>
    <div class="card"><b style="font-size:13.5px">What you've been doing</b><div style="margin-top:11px" id="ana-dist"></div></div>
    <div class="card"><b style="font-size:13.5px">Last 4 weeks</b><div class="heat" id="ana-heat" style="margin-top:11px"></div></div>
  </div>

  <div id="p-set" style="display:none">
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#8B5CF6" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 8.5a5 5 0 0 1 0 7"/></svg> Sound <button class="toggle on" id="set-sound" onclick="toggleSound()"><i></i></button></div>
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#F59E0B" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.4"/></svg> Camera sensitivity
      <div class="sens"><button onclick="setSens(1)" id="sn1">1</button><button class="on" onclick="setSens(2)" id="sn2">2</button><button onclick="setSens(3)" id="sn3">3</button></div>
    </div>
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#60A5FA" stroke-width="2.1" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.2a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.5v.4"/><circle cx="12" cy="17" r="1" fill="#60A5FA" stroke="none"/></svg> How to play <button class="claim" style="margin-left:auto" onclick="showHowToPlay()">OPEN</button></div>
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#8B5CF6" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg> Account <span class="dim" style="margin-left:auto;font-size:12px" id="set-email">—</span></div>
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#F59E0B" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.2 6.2 19.6l1.5-6.5-5-4.4 6.6-.6z"/></svg> Membership <span class="own" style="margin-left:auto">FOUNDER</span></div>
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#10B981" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Progress saving
      <span class="dim" style="margin-left:auto;font-size:12px" id="set-save">—</span></div>
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#A78BFA" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.01"/></svg> Diagnostics
      <button class="claim" style="margin-left:auto" onclick="showDiag()">OPEN</button></div>
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#60A5FA" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7M21 3v6h-6"/></svg> App version
      <span class="dim" style="margin-left:auto;font-size:12px" id="set-build">—</span>
      <button class="claim" style="margin-left:8px" onclick="forceRefresh()">REFRESH</button></div>
    <div class="set-row"><svg viewBox="0 0 24 24" style="width:19px;height:19px;flex:none" fill="none" stroke="#F87171" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l-5-5 5-5M5 12h9"/></svg> Log out <button class="claim" style="margin-left:auto;background:var(--red);color:#fff" onclick="confirmLogout()">SIGN OUT</button></div>
  </div>
</section>

<!-- ============ SPLASH ============ -->
<section class="screen fullflow active" id="scr-splash">
  <div class="splash">
    <div class="logo-big">
      <svg viewBox="0 0 24 24" style="width:48px;height:48px" fill="#fff"><path d="M3 8l4.5 4L12 4l4.5 8L21 8v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="3" cy="6.6" r="1.7"/><circle cx="12" cy="2.6" r="1.7"/><circle cx="21" cy="6.6" r="1.7"/></svg>
    </div>
    <h1 class="hdr">Fit Royale</h1>
    <p>Rise Through The Ranks</p>
  </div>
</section>

<!-- ============ AUTH ============ -->
<section class="screen fullflow" id="scr-auth">
  <div class="authbox">
    <div class="logo-big">
      <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="#fff"><path d="M3 8l4.5 4L12 4l4.5 8L21 8v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="3" cy="6.6" r="1.7"/><circle cx="12" cy="2.6" r="1.7"/><circle cx="21" cy="6.6" r="1.7"/></svg>
    </div>
    <div class="hdr" style="font-size:24px;text-align:center">Welcome, Fighter</div>
    <p class="dim" style="text-align:center;font-weight:800;font-size:12.5px;margin-top:4px">Your progress is saved to your account</p>
    <div class="oauth-row">
      <button class="oauth-btn" onclick="oauth('google')">
        <svg viewBox="0 0 24 24" style="width:20px;height:20px"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.4v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.3 14.3a7.1 7.1 0 0 1 0-4.6V6.6H1.4a12 12 0 0 0 0 10.8l3.9-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.4 6.6l3.9 3.1A7.2 7.2 0 0 1 12 4.8z"/></svg>
        Continue with Google
      </button>
      <button class="oauth-btn apple" onclick="oauth('apple')">
        <svg viewBox="0 0 24 24" style="width:20px;height:20px" fill="#fff"><path d="M16.4 1.4c.02 1.14-.44 2.24-1.13 3.05-.75.86-1.98 1.53-2.98 1.44-.13-1.1.42-2.26 1.1-3.02.77-.87 2.08-1.5 3.01-1.47zM20.7 17.2c-.32.75-.7 1.46-1.15 2.13-.62.92-1.13 1.56-1.53 1.92-.62.6-1.28.9-2 .92-.51.02-1.13-.15-1.85-.5-.72-.35-1.38-.5-1.99-.5-.64 0-1.32.15-2.05.5-.74.35-1.33.53-1.79.55-.68.03-1.35-.28-2-.93-.43-.4-.97-1.06-1.62-2-.7-1-1.27-2.17-1.72-3.5-.48-1.44-.72-2.83-.72-4.18 0-1.55.34-2.88 1.01-4 .53-.9 1.23-1.6 2.1-2.13.87-.52 1.82-.79 2.83-.81.55-.01 1.27.17 2.16.53.89.36 1.46.54 1.72.54.19 0 .82-.21 1.87-.63 1-.4 1.85-.56 2.55-.5 1.88.15 3.3.9 4.24 2.24-1.68 1.02-2.51 2.44-2.5 4.27.02 1.42.53 2.6 1.52 3.55.45.44.96.78 1.51 1.03-.12.35-.25.7-.4 1.04z"/></svg>
        Continue with Apple
      </button>
    </div>
    <div class="oauth-sep"><i></i><span>OR</span><i></i></div>

    <div class="auth-tabs">
      <button class="auth-tab on" id="at-login" onclick="authTab('login')">Log in</button>
      <button class="auth-tab" id="at-signup" onclick="authTab('signup')">Sign up</button>
    </div>
    <div class="field">
      <label>Email</label>
      <input id="in-email" type="email" placeholder="you@email.com" autocomplete="email">
    </div>
    <div class="field">
      <label>Password</label>
      <input id="in-pass" type="password" placeholder="••••••••" autocomplete="current-password">
    </div>
    <button class="stay-row on" id="stay-row" onclick="toggleStay()">
      <div class="stay-box">
        <svg viewBox="0 0 24 24" style="width:15px;height:15px" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>
      </div>
      <div style="text-align:left">
        <b>Stay logged in</b>
        <span id="stay-sub">This device only — skip the login screen next time</span>
      </div>
    </button>
    <div class="auth-err" id="auth-err"></div>
    <button class="btn b-purple" id="auth-go" onclick="doAuth()">LOG IN</button>
    <p class="fp-link" id="fp-link" onclick="goForgot()">Forgot your password?</p>
    <p class="dim" style="text-align:center;font-size:11px;font-weight:800;margin-top:10px">Free account · No card needed</p>
  </div>
</section>

<!-- ============ FORGOT PASSWORD ============ -->
<section class="screen fullflow" id="scr-forgot">
  <div class="resetbox">
    <div class="reset-ico">
      <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="none" stroke="#8B5CF6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    </div>
    <div class="hdr" style="font-size:22px;text-align:center">Reset your password</div>
    <p class="dim" style="text-align:center;font-weight:800;font-size:12.5px;margin-top:6px">We'll email you a link to set a new one</p>
    <div class="field" style="margin-top:20px">
      <label>Email</label>
      <input id="fp-email" type="email" placeholder="you@email.com" autocomplete="email">
    </div>
    <div class="auth-err" id="fp-err"></div>
    <button class="btn b-purple" id="fp-go" onclick="sendReset()">SEND RESET LINK</button>
    <button class="btn b-ghost" style="margin-top:10px" onclick="goFlow('scr-auth')">BACK TO LOG IN</button>
  </div>
</section>

<!-- ============ RESET SENT (check email) ============ -->
<section class="screen fullflow" id="scr-resetsent">
  <div class="checkmail">
    <div class="env">
      <svg viewBox="0 0 24 24" style="width:38px;height:38px" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 7l9 6 9-6"/></svg>
    </div>
    <div class="hdr" style="font-size:22px">Check your email</div>
    <p class="dim" style="font-weight:800;font-size:13px;margin-top:8px">We sent a password reset link to</p>
    <div class="em-addr" id="rs-email">you@email.com</div>
    <p class="dim" style="font-weight:700;font-size:12.5px;margin-top:12px">Tap the link — it'll bring you back here to set a new password.</p>
    <div class="hint">Don't see it? Check spam/junk. It can take a minute.</div>
    <button class="btn b-ghost" style="margin-top:22px" onclick="goFlow('scr-auth')">BACK TO LOG IN</button>
    <button class="btn b-purple" style="margin-top:10px" onclick="resendReset()" id="resend-reset-btn">RESEND LINK</button>
  </div>
</section>

<!-- ============ SET NEW PASSWORD (arrived via email link) ============ -->
<section class="screen fullflow" id="scr-newpass">
  <div class="resetbox">
    <div class="reset-ico">
      <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>
    </div>
    <div class="hdr" style="font-size:22px;text-align:center">Set a new password</div>
    <p class="dim" style="text-align:center;font-weight:800;font-size:12.5px;margin-top:6px">Almost there — pick something strong</p>
    <div class="field" style="margin-top:20px">
      <label>New password</label>
      <input id="np-pass1" type="password" placeholder="••••••••" oninput="pwStrength()">
      <div class="pw-strength"><i id="ps1"></i><i id="ps2"></i><i id="ps3"></i><i id="ps4"></i></div>
    </div>
    <div class="field">
      <label>Confirm password</label>
      <input id="np-pass2" type="password" placeholder="••••••••">
    </div>
    <div class="auth-err" id="np-err"></div>
    <button class="btn b-gold" id="np-go" onclick="setNewPassword()">UPDATE PASSWORD</button>
  </div>
</section>

<!-- ============ CHECK YOUR EMAIL ============ -->
<section class="screen fullflow" id="scr-checkmail">
  <div class="checkmail">
    <div class="env">
      <svg viewBox="0 0 24 24" style="width:38px;height:38px" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 7l9 6 9-6"/></svg>
    </div>
    <div class="hdr" style="font-size:22px">Check your email</div>
    <p class="dim" style="font-weight:800;font-size:13px;margin-top:8px">We sent a confirmation link to</p>
    <div class="em-addr" id="cm-email">you@email.com</div>
    <p class="dim" style="font-weight:700;font-size:12.5px;margin-top:12px">Tap the link in that email, then come back and log in.</p>
    <div class="hint">
      Don't see it? Check spam/junk — confirmation emails sometimes land there first. It can take a minute to arrive.
    </div>
    <button class="btn b-ghost" style="margin-top:22px" onclick="backToLogin()">BACK TO LOG IN</button>
    <button class="btn b-purple" style="margin-top:10px" onclick="resendConfirm()" id="resend-btn">RESEND EMAIL</button>
  </div>
</section>

<!-- ============ ONBOARDING ============ -->
<section class="screen fullflow" id="scr-onboard">
  <div class="obwrap">
    <div class="ob-dots"><i id="od1" class="on"></i><i id="od2"></i><i id="od3"></i></div>

    <!-- step 1: name -->
    <div class="ob-step on" id="ob1">
      <div class="ob-hero">
        <div class="ob-sprite" id="ob-hero-art"></div>
        <div class="ob-title hdr">Pick your name</div>
        <div class="ob-sub">This is the name other players will see.</div>
      </div>
      <div class="field">
        <label>Your name</label>
        <input id="ob-name" type="text" maxlength="20" placeholder="IronPusher_CZ">
      </div>
      <label style="display:block;font-size:11px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin:14px 0 8px">Pick your icon or upload a photo</label>
      <div class="row" style="gap:12px;align-items:center;margin-bottom:12px">
        <div class="pfp-wrap" style="width:64px;height:64px;margin:0">
          <div class="pfp" id="ob-pfp-view" style="width:64px;height:64px"></div>
          <button class="pfp-edit" style="width:26px;height:26px" onclick="$('ob-pfp-file').click()" aria-label="Upload photo">
            <svg viewBox="0 0 24 24" style="width:14px;height:14px" fill="none" stroke="#26190A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h2L9 4h6l1.5 2h2A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.4"/></svg>
          </button>
          <input type="file" id="ob-pfp-file" accept="image/*" style="display:none" onchange="uploadPfp(event,true)">
        </div>
        <span class="dim" style="font-size:11.5px;font-weight:800">A creature icon is picked already — uploading a photo is optional</span>
      </div>
      <div class="av-grid" id="av-grid-ob"></div>
      <div class="auth-err" id="ob-err"></div>
      <button class="btn b-purple" onclick="obNext(1)">CONTINUE</button>
    </div>

    <!-- step 2: the taste -->
    <div class="ob-step" id="ob2">
      <div class="ob-hero">
        <div class="ob-sprite" id="ob-goblin-art"></div>
        <div class="ob-title hdr glow" id="ob-greet">Welcome to the Arena!</div>
        <div class="ob-sub" id="ob-story">In the land of Royale, everyone trains to become champion.<br><br>
          Friendly creatures guard every cave, forest and mountain — and they all love a good contest.
          Beat them with push-ups, sit-ups and squats!</div>
      </div>
      <div class="taste-row">
        <div class="taste-ico" id="ti1"></div>
        <div><b>Every rep is a move</b><span>Do a rep, land a hit. Fast reps = combos!</span></div>
      </div>
      <div class="taste-row">
        <div class="taste-ico" id="ti2"></div>
        <div><b>The camera is the referee</b><span>AI watches your form — sloppy reps don't count</span></div>
      </div>
      <div class="taste-row">
        <div class="taste-ico" id="ti3"></div>
        <div><b>108 episodes, 6 chapters</b><span>Sprout Caves → the crown at Dragon Sky</span></div>
      </div>
      <div class="taste-row">
        <div class="taste-ico" id="ti4"></div>
        <div><b>Real fighters, real duels</b><span>Race a friend live, 20 reps, first to finish wins</span></div>
      </div>
      <button class="btn b-purple" style="margin-top:16px" onclick="obNext(2)">I'M READY</button>
    </div>

    <!-- step 3: camera gate -->
    <div class="ob-step" id="ob3">
      <div class="ob-hero">
        <div class="ob-sprite" id="ob-cam-art"></div>
        <div class="ob-title hdr">One thing before you fight</div>
        <div class="ob-sub">Fit Royale counts your reps with the camera. Nothing is recorded, uploaded, or saved — the video never leaves your phone.</div>
      </div>
      <div class="cam-state" id="cam-state">Camera permission required to play</div>
      <button class="btn b-gold" id="cam-btn" onclick="requestCamOnce()">ALLOW CAMERA</button>
      <p class="dim" style="text-align:center;font-size:11.5px;font-weight:800;margin-top:14px">
        Without camera access the arena stays locked — there's no way to count reps.</p>
    </div>
  </div>
</section>

<!-- ============ DUEL LOBBY ============ -->
<section class="screen" id="scr-lobby">
  <div class="topline">
    <button class="back-btn" onclick="leaveLobby()">‹ Back</button>
    <div class="screen-title hdr">1v1 Duel</div>
    <span style="width:44px"></span>
  </div>

  <div class="card" style="text-align:center">
    <div class="ob-title hdr" style="font-size:18px">Fight a friend</div>
    <p class="dim" style="font-weight:800;font-size:12.5px;margin-top:6px">Create a room and send them the code</p>
    <button class="btn b-gold" style="margin-top:14px" onclick="hostRoom()">CREATE ROOM</button>
  </div>

  <div class="card">
    <div class="dim" style="font-size:11px;font-weight:900;letter-spacing:.12em;text-align:center">HAVE A CODE?</div>
    <input class="code-in" id="join-code" maxlength="5" placeholder="ABCDE" style="margin:12px 0">
    <button class="btn b-purple" onclick="joinRoom()">JOIN ROOM</button>
  </div>

  <div class="card" style="text-align:center">
    <div class="dim" style="font-size:12.5px;font-weight:800">No friend around?</div>
    <button class="btn b-ghost" style="margin-top:11px" onclick="findMatch()">FIND RANDOM OPPONENT</button>
  </div>
</section>

<!-- ============ ROOM WAITING ============ -->
<section class="screen" id="scr-room">
  <div class="topline">
    <button class="back-btn" onclick="leaveLobby()">‹ Leave</button>
    <div class="screen-title hdr">Duel Room</div>
    <span style="width:44px"></span>
  </div>

  <div class="card" style="text-align:center">
    <div class="dim" style="font-size:11.5px;font-weight:900;letter-spacing:.12em">ROOM CODE — SHARE THIS</div>
    <div class="code-box" id="room-code">-----</div>
    <button class="btn b-ghost b-sm" style="margin:0 auto" onclick="shareCode()">COPY CODE</button>
  </div>

  <div class="card">
    <div class="lobby-players">
      <div class="lobby-p in" id="lp-me">
        <div class="avatar" id="lp-me-av">ME</div>
        <b id="lp-me-name">You</b>
        <span class="dim" style="font-size:10.5px;font-weight:800"><span class="live-dot"></span> Ready</span>
      </div>
      <div class="vs-badge">VS</div>
      <div class="lobby-p" id="lp-opp">
        <div class="avatar" id="lp-opp-av">?</div>
        <b id="lp-opp-name">Waiting…</b>
        <span class="dim" style="font-size:10.5px;font-weight:800" id="lp-opp-state">Not joined</span>
      </div>
    </div>
    <button class="btn b-gold" id="room-start" onclick="hostStart()" style="display:none">START DUEL</button>
    <p class="dim" style="text-align:center;font-size:11.5px;font-weight:800;margin-top:10px" id="room-hint">
      Send the code to your friend — the duel starts when they join.</p>
  </div>
</section>

<!-- ============ PAYWALL (unskippable) ============ -->
<section class="screen fullflow" id="scr-paywall">
  <div class="paywrap">
    <div style="text-align:center;margin-bottom:16px">
      <div class="hdr" style="font-size:25px">Unlock the full arena</div>
      <p class="dim" style="font-weight:800;font-size:12.5px;margin-top:6px">108 episodes · ranked duels · AI tracking</p>
    </div>

    <div class="offer-banner" id="offer-banner">
      <div class="tag">⚡ 24-HOUR LAUNCH OFFER</div>
      <div class="big"><span class="was" id="off-was">1799</span> &nbsp;<span id="off-now">899 Kč</span></div>
      <div class="tag" style="letter-spacing:.14em">LIFETIME — PAY ONCE, KEEP FOREVER</div>
      <div class="offer-cd">
        <div><b id="oc-h">23</b><span>HRS</span></div>
        <div><b id="oc-m">59</b><span>MIN</span></div>
        <div><b id="oc-s">59</b><span>SEC</span></div>
      </div>
    </div>

    <div class="plan best" onclick="choosePlan('lifetime')">
      <span class="pbadge">BEST VALUE</span>
      <h4>Lifetime</h4>
      <div class="price" id="pl-life">899 Kč</div>
      <div class="per">One payment · yours forever</div>
      <div class="save" id="pl-life-save">Save 50% during launch</div>
    </div>

    <div class="plan" onclick="choosePlan('yearly')">
      <h4>Yearly</h4>
      <div class="price" id="pl-year">999 Kč</div>
      <div class="per" id="pl-year-per">per year</div>
      <div class="save" id="pl-year-save">Cheaper than monthly</div>
    </div>

    <div class="plan" onclick="choosePlan('monthly')">
      <h4>Monthly</h4>
      <div class="price" id="pl-month">149 Kč</div>
      <div class="per">per month · cancel anytime</div>
    </div>

    <div class="pay-feat" style="margin-top:18px">
      <div><svg viewBox="0 0 24 24" style="width:18px;height:18px" fill="none" stroke="#10B981" stroke-width="2.6" stroke-linecap="round"><path d="M4 12l5 5 11-11"/></svg> All 6 chapters, 108 episodes</div>
      <div><svg viewBox="0 0 24 24" style="width:18px;height:18px" fill="none" stroke="#10B981" stroke-width="2.6" stroke-linecap="round"><path d="M4 12l5 5 11-11"/></svg> AI camera rep tracking, unlimited</div>
      <div><svg viewBox="0 0 24 24" style="width:18px;height:18px" fill="none" stroke="#10B981" stroke-width="2.6" stroke-linecap="round"><path d="M4 12l5 5 11-11"/></svg> Ranked duels + ELO ladder</div>
      <div><svg viewBox="0 0 24 24" style="width:18px;height:18px" fill="none" stroke="#10B981" stroke-width="2.6" stroke-linecap="round"><path d="M4 12l5 5 11-11"/></svg> Founder badge on your profile</div>
    </div>

    <button class="btn b-gold" style="font-size:16px;padding:17px;margin-top:6px" onclick="claimFounder()">
      START FREE — FOUNDER BETA
    </button>
    <p class="dim" style="font-size:10.5px;font-weight:800;margin-top:12px;text-align:center">
      Beta testers get everything free. Prices apply after launch.</p>
  </div>
</section>

<!-- ============ ONBOARDING ============ -->
<!-- ============ NAV ============ -->
<nav id="nav">
  <button class="nv on" data-s="scr-home" onclick="nav('scr-home')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M5 8h14l1 12H4z"/><path d="M9 13h6"/></svg>Home</button>
  <button class="nv" data-s="scr-campaign" onclick="nav('scr-campaign')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20 3 17V4l6 3 6-3 6 3v13l-6-3-6 3zM9 7v13M15 4v13"/></svg>Map</button>
  <button class="nv" data-s="scr-arena" onclick="nav('scr-arena')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l8 8M3 3v4M3 3h4M21 3l-8 8M21 3v4M21 3h-4M7 17l-3 3M17 17l3 3M6 14l4 4M18 14l-4 4"/></svg>Versus</button>
  <button class="nv" data-s="scr-profile" onclick="nav('scr-profile')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>Me</button>
  <button class="nv lock" data-s="scr-inventory" onclick="armoryPopup()">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>Gear</button>
</nav>

<section class="screen" id="scr-inventory">
  <div class="locked-page">
    <div class="lk">
      <svg viewBox="0 0 24 24" style="width:44px;height:44px" fill="none" stroke="#8B5CF6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V6.5a4 4 0 0 1 8 0V10"/><circle cx="12" cy="15.5" r="1.6"/></svg>
    </div>
    <div class="hdr" style="font-size:23px">Armory</div>
    <span class="soon-tag">COMING SOON</span>
    <p class="dim" style="font-weight:800;font-size:13px;margin-top:10px;max-width:30ch;line-height:1.6">
      Forge and equip armor, gloves and relics. Better gear means more damage per rep — turn the same push-up into a bigger hit.</p>
    <div class="inv-preview">
      <div class="inv-slot"><svg viewBox="0 0 24 24" style="width:26px;height:26px" fill="none" stroke="#8B5CF6" stroke-width="1.8"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z"/></svg><span>ARMOR</span></div>
      <div class="inv-slot"><svg viewBox="0 0 24 24" style="width:26px;height:26px" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round"><path d="M8 11V6a1.5 1.5 0 0 1 3 0v5M11 10.5V5a1.5 1.5 0 0 1 3 0v6M14 10.5V7a1.5 1.5 0 0 1 3 0v7c0 3.3-2.2 6-6 6-2.4 0-3.6-.8-4.7-2.2L4.6 14a1.4 1.4 0 0 1 2-2l1.4 1"/></svg><span>GLOVES</span></div>
      <div class="inv-slot"><svg viewBox="0 0 24 24" style="width:26px;height:26px" fill="none" stroke="#10B981" stroke-width="1.8"><path d="M12 2l2.6 6.4L21 11l-6.4 2.6L12 20l-2.6-6.4L3 11l6.4-2.6z"/></svg><span>RELIC</span></div>
    </div>
    <p class="dim" style="font-size:11px;font-weight:800;margin-top:20px">Unlocks in a future update — your coins are already piling up for it.</p>
  </div>
</section>

<div id="flashlayer"></div>
<div id="loader">
  <div class="ld-stage">
    <div class="ld-logo-wrap">
      <div class="ld-glow"></div>
      <div class="ld-orbit">
        <svg viewBox="0 0 152 152">
          <circle cx="76" cy="76" r="66" fill="none" stroke="rgba(245,158,11,.5)" stroke-width="2.5"
            stroke-linecap="round" stroke-dasharray="14 240"/>
          <circle cx="76" cy="76" r="66" fill="none" stroke="rgba(139,92,246,.4)" stroke-width="2.5"
            stroke-linecap="round" stroke-dasharray="10 244" stroke-dashoffset="140"/>
        </svg>
      </div>
      <img class="ld-logo" src="data:image/png;base64,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">
    </div>
    <div class="ld-title">Fit Royale</div>
    <div class="ld-tip" id="ld-tip"><span>Getting things ready…</span></div>
    <div class="ld-track"><i id="ld-fill"></i></div>
    <div class="ld-pct" id="ld-pct">0%</div>
    <div class="dim" id="ld-build" style="font-size:9px;font-weight:900;letter-spacing:.14em;opacity:.4">BUILD —</div>
  </div>
</div>

<div id="modal-layer"><div class="modal" id="modal-box"></div></div>
<div id="toast"></div>
</div>

<script>
/* ================= STATE ================= */
const $=id=>document.getElementById(id);
const rnd=(a,b)=>a+Math.random()*(b-a);
const ri=(a,b)=>Math.floor(rnd(a,b+1));
const fmt=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');

const S={
  user:{ lvl:5, xp:90, streak:7, coins:1450, todayReps:0, activeSec:0, cal:0, pr:35, avgRepSec:2.1,
         frame:'basic', title:'ROOKIE', pet:'' },
  quests:[
    { id:'q1', icon:'bolt', name:'Do 30 reps', ex:'ANY', target:30, prog:15, rw:{xp:50}, claimed:false },
    { id:'q2', icon:'bolt', name:'Complete 1 Speed Run', ex:null, target:1, prog:0, rw:{coins:100}, claimed:false },
  ],
  dailyBoss:{ name:'Chief Grib', sprite:'chief', hp:60, max:60, done:false, rwXP:150, rwCoins:200 },
  speedTarget:10, speedEx:'Push-ups',
  B:null, duel:null, queueT:null,
  shop:{
    frames:[ {id:'basic',ico:()=>ICO.ring(22,'#64748B'),name:'Basic Frame',cost:0,own:true},
             {id:'gold',ico:()=>ICO.ring(22,'#F59E0B'),name:'Gold Ring',cost:300,own:false},
             {id:'neon',ico:()=>ICO.ring(22,'#10B981'),name:'Neon Pulse',cost:600,own:false} ],
    titles:[ {id:'ROOKIE',ico:()=>ICO.medal(22,'#94A3B8'),name:'Rookie',cost:0,own:true},
             {id:'IRON PUSHER',ico:()=>ICO.shield(22),name:'Iron Pusher',cost:250,own:false},
             {id:'BIG MATCH STAR',ico:()=>ICO.skull(22),name:'Big Match Star',cost:500,own:false} ],
    pets:[ {id:'',ico:()=>ICO.ring(22,'#334155'),name:'No Pet',cost:0,own:true},
           {id:'slime',ico:()=>mon('slime',26),name:'Baby Slime',cost:400,own:false},
           {id:'dragonet',ico:()=>mon('dragonet',26),name:'Mini Dragon',cost:900,own:false} ],
  },
  week:[34,58,12,49,66,28,0], dist:[['Push-ups',46],['Squats',30],['Sit-ups',15],['Plank',9]],
  lb:[], seasonEnd:Date.now()+ (6*24*3600+11*3600+59*60+59)*1000,
  sound:true, sens:2,
};

/* ================= SVG ART (no emojis) ================= */
const ART={
  goblin:`<ellipse cx="32" cy="36" rx="20" ry="18" fill="#4ADE80"/><path d="M12 30 L2 18 L16 24 Z" fill="#4ADE80"/><path d="M52 30 L62 18 L48 24 Z" fill="#4ADE80"/><circle cx="25" cy="33" r="4" fill="#0F172A"/><circle cx="39" cy="33" r="4" fill="#0F172A"/><circle cx="26.3" cy="31.8" r="1.3" fill="#fff"/><circle cx="40.3" cy="31.8" r="1.3" fill="#fff"/><path d="M22 44 Q32 50 42 44" stroke="#0F172A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M26 45 l3 4 3-4" fill="#fff"/><path d="M25 26 l6 3" stroke="#166534" stroke-width="2.5" stroke-linecap="round"/><path d="M39 26 l-6 3" stroke="#166534" stroke-width="2.5" stroke-linecap="round"/>`,
  archer:`<ellipse cx="32" cy="38" rx="18" ry="16" fill="#4ADE80"/><path d="M14 36 Q10 12 32 10 Q54 12 50 36 L44 30 Q32 24 20 30 Z" fill="#166534"/><circle cx="26" cy="38" r="3.6" fill="#0F172A"/><circle cx="38" cy="38" r="3.6" fill="#0F172A"/><path d="M24 48 Q32 52 40 48" stroke="#0F172A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 20 Q60 32 50 46" stroke="#A16207" stroke-width="3" fill="none"/><line x1="50" y1="20" x2="50" y2="46" stroke="#FDE68A" stroke-width="1.6"/>`,
  bat:`<path d="M32 26 Q16 8 4 20 Q14 20 14 30 Q22 26 24 34 Z" fill="#7C3AED"/><path d="M32 26 Q48 8 60 20 Q50 20 50 30 Q42 26 40 34 Z" fill="#7C3AED"/><ellipse cx="32" cy="36" rx="11" ry="13" fill="#8B5CF6"/><path d="M27 24 l-3 -6 4 3 Z" fill="#8B5CF6"/><path d="M37 24 l3 -6 -4 3 Z" fill="#8B5CF6"/><circle cx="28" cy="34" r="2.8" fill="#FDE68A"/><circle cx="36" cy="34" r="2.8" fill="#FDE68A"/><path d="M28 43 l3 3 3-3" stroke="#0F172A" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  spider:`<ellipse cx="32" cy="38" rx="14" ry="12" fill="#1E1B34"/><circle cx="32" cy="24" r="8" fill="#2D2A4A"/><circle cx="29" cy="23" r="2.6" fill="#fff"/><circle cx="35" cy="23" r="2.6" fill="#fff"/><circle cx="29.4" cy="23.4" r="1.3" fill="#0F172A"/><circle cx="35.4" cy="23.4" r="1.3" fill="#0F172A"/><g stroke="#2D2A4A" stroke-width="3" stroke-linecap="round" fill="none"><path d="M20 32 Q8 26 6 16"/><path d="M19 38 Q6 38 4 30"/><path d="M20 44 Q10 50 8 58"/><path d="M44 32 Q56 26 58 16"/><path d="M45 38 Q58 38 60 30"/><path d="M44 44 Q54 50 56 58"/></g><path d="M26 40 q6 4 12 0" stroke="#8B5CF6" stroke-width="2" fill="none"/>`,
  bone:`<circle cx="32" cy="32" r="18" fill="#EEF2F7"/><circle cx="25" cy="29" r="4" fill="#0F172A"/><circle cx="39" cy="29" r="4" fill="#0F172A"/><circle cx="26.2" cy="27.8" r="1.4" fill="#fff"/><circle cx="40.2" cy="27.8" r="1.4" fill="#fff"/><path d="M24 40 q8 6 16 0" stroke="#0F172A" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="18" cy="36" r="3" fill="#FCA5A5" opacity=".6"/><circle cx="46" cy="36" r="3" fill="#FCA5A5" opacity=".6"/><path d="M32 12 l2 4 -4 0 Z" fill="#CBD5E1"/>`,
  troll:`<ellipse cx="32" cy="34" rx="21" ry="19" fill="#84A98C"/><path d="M13 30 Q8 24 12 18 L18 26 Z" fill="#84A98C"/><path d="M51 30 Q56 24 52 18 L46 26 Z" fill="#84A98C"/><circle cx="25" cy="31" r="3.4" fill="#0F172A"/><circle cx="39" cy="31" r="3.4" fill="#0F172A"/><path d="M20 44 Q32 40 44 44" stroke="#0F172A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M23 44 l0 -7 4 7 Z" fill="#F1F5F9"/><path d="M41 44 l0 -7 -4 7 Z" fill="#F1F5F9"/><path d="M22 22 q10 -8 20 0" stroke="#52796F" stroke-width="3" fill="none"/>`,
  ghoul:`<path d="M14 52 Q12 18 32 14 Q52 18 50 52 L44 46 L38 53 L32 47 L26 53 L20 46 Z" fill="#94E2D5" opacity=".92"/><ellipse cx="25" cy="32" rx="4.6" ry="6" fill="#0F172A"/><ellipse cx="39" cy="32" rx="4.6" ry="6" fill="#0F172A"/><circle cx="26" cy="30" r="1.5" fill="#34D399"/><circle cx="40" cy="30" r="1.5" fill="#34D399"/><ellipse cx="32" cy="44" rx="4" ry="5.5" fill="#0F172A"/>`,
  wraith:`<path d="M16 54 Q10 20 32 10 Q54 20 48 54 Q44 48 40 54 Q36 48 32 54 Q28 48 24 54 Q20 48 16 54 Z" fill="#312E5E"/><path d="M20 30 Q32 20 44 30 L42 40 Q32 34 22 40 Z" fill="#1A1836"/><circle cx="27" cy="33" r="3" fill="#8B5CF6"><animate attributeName="opacity" values="1;.4;1" dur="1.6s" repeatCount="indefinite"/></circle><circle cx="37" cy="33" r="3" fill="#8B5CF6"><animate attributeName="opacity" values="1;.4;1" dur="1.6s" repeatCount="indefinite"/></circle>`,
  warlord:`<ellipse cx="32" cy="38" rx="20" ry="17" fill="#4ADE80"/><path d="M12 32 L4 22 L16 27 Z" fill="#4ADE80"/><path d="M52 32 L60 22 L48 27 Z" fill="#4ADE80"/><path d="M14 28 Q14 10 32 8 Q50 10 50 28 L44 24 Q32 18 20 24 Z" fill="#64748B"/><path d="M28 8 l4 -6 4 6 Z" fill="#EF4444"/><circle cx="25" cy="37" r="3.8" fill="#0F172A"/><circle cx="39" cy="37" r="3.8" fill="#0F172A"/><circle cx="26.2" cy="36" r="1.3" fill="#fff"/><circle cx="40.2" cy="36" r="1.3" fill="#fff"/><path d="M22 48 Q32 44 42 48" stroke="#0F172A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M25 48 l0 -5 4 5 Z" fill="#fff"/><path d="M39 48 l0 -5 -4 5 Z" fill="#fff"/>`,
  skelking:`<circle cx="32" cy="33" r="16" fill="#EEF2F7"/><path d="M18 22 L18 10 L24 17 L32 8 L40 17 L46 10 L46 22 Z" fill="#F59E0B"/><circle cx="21" cy="12" r="2" fill="#EF4444"/><circle cx="32" cy="10" r="2" fill="#EF4444"/><circle cx="43" cy="12" r="2" fill="#EF4444"/><circle cx="26" cy="31" r="4" fill="#0F172A"/><circle cx="38" cy="31" r="4" fill="#0F172A"/><circle cx="27.2" cy="29.8" r="1.4" fill="#fff"/><circle cx="39.2" cy="29.8" r="1.4" fill="#fff"/><path d="M25 41 q7 5 14 0" stroke="#0F172A" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
  brood:`<ellipse cx="32" cy="40" rx="17" ry="14" fill="#3B0764"/><circle cx="32" cy="22" r="10" fill="#581C87"/><g fill="#EF4444"><circle cx="27" cy="20" r="2.4"/><circle cx="37" cy="20" r="2.4"/><circle cx="24" cy="25" r="1.7"/><circle cx="40" cy="25" r="1.7"/><circle cx="29" cy="26.5" r="1.4"/><circle cx="35" cy="26.5" r="1.4"/></g><g stroke="#581C87" stroke-width="3.4" stroke-linecap="round" fill="none"><path d="M18 34 Q4 28 3 16"/><path d="M17 42 Q3 42 2 32"/><path d="M18 48 Q8 56 7 62"/><path d="M46 34 Q60 28 61 16"/><path d="M47 42 Q61 42 62 32"/><path d="M46 48 Q56 56 57 62"/></g><path d="M26 44 q6 5 12 0" stroke="#F59E0B" stroke-width="2" fill="none"/>`,
  chief:`<ellipse cx="32" cy="38" rx="19" ry="17" fill="#4ADE80"/><path d="M13 32 L4 21 L17 27 Z" fill="#4ADE80"/><path d="M51 32 L60 21 L47 27 Z" fill="#4ADE80"/><path d="M20 22 L20 10 L26 16 L32 8 L38 16 L44 10 L44 22 Z" fill="#F59E0B"/><circle cx="25" cy="36" r="3.8" fill="#0F172A"/><circle cx="39" cy="36" r="3.8" fill="#0F172A"/><circle cx="26.2" cy="34.8" r="1.2" fill="#fff"/><circle cx="40.2" cy="34.8" r="1.2" fill="#fff"/><path d="M22 47 Q32 52 42 47" stroke="#0F172A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M26 48 l3 4 3 -4" fill="#fff"/>`,
  slime:`<path d="M12 46 Q10 22 32 20 Q54 22 52 46 Q52 54 32 54 Q12 54 12 46 Z" fill="#34D399"/><path d="M20 28 Q26 22 30 26" stroke="#A7F3D0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="26" cy="38" r="3.4" fill="#0F172A"/><circle cx="40" cy="38" r="3.4" fill="#0F172A"/><path d="M28 46 q4 3 8 0" stroke="#0F172A" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
  dragonet:`<ellipse cx="32" cy="38" rx="15" ry="13" fill="#8B5CF6"/><path d="M18 34 Q6 26 8 14 Q16 22 22 24 Z" fill="#6D28D9"/><path d="M46 34 Q58 26 56 14 Q48 22 42 24 Z" fill="#6D28D9"/><circle cx="32" cy="24" r="9" fill="#A78BFA"/><path d="M26 16 l2-6 3 5 Z" fill="#F59E0B"/><path d="M33 15 l3-6 2 6 Z" fill="#F59E0B"/><circle cx="28.5" cy="23" r="2.4" fill="#0F172A"/><circle cx="35.5" cy="23" r="2.4" fill="#0F172A"/><path d="M29 29 q3 2.5 6 0" stroke="#0F172A" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M44 46 Q52 50 54 44" stroke="#6D28D9" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  dummy:`<rect x="28" y="40" width="8" height="16" rx="2" fill="#A16207"/><rect x="18" y="54" width="28" height="5" rx="2.5" fill="#854D0E"/><circle cx="32" cy="24" r="17" fill="#F1F5F9"/><circle cx="32" cy="24" r="11.5" fill="#EF4444"/><circle cx="32" cy="24" r="6.5" fill="#F1F5F9"/><circle cx="32" cy="24" r="2.6" fill="#EF4444"/>`,
};
function mon(key,size){ return `<svg viewBox="0 0 64 64" style="width:${size}px;height:${size}px;overflow:visible">${ART[key]||ART.goblin}</svg>`; }
const ICO={
  flame:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="#F59E0B"><path d="M12 2c1 4-3 5-3 9a3 3 0 0 0 6 .5C16.5 13 18 11 17.5 8c2.5 2 3.5 5 3.5 7.5A7.5 7.5 0 0 1 6 18c-2-4 1-7 2.5-9C9 11 11 10 12 2z"/></svg>`,
  coin:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px"><circle cx="12" cy="12" r="10" fill="#F59E0B"/><circle cx="12" cy="12" r="7.2" fill="#FCD34D"/><path d="M12 7.5v9M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4.5" stroke="#B45309" stroke-width="1.7" fill="none" stroke-linecap="round"/></svg>`,
  bolt:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="#F59E0B"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>`,
  waves:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="none" stroke="#EF4444" stroke-width="2.2" stroke-linecap="round"><path d="M2 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/></svg>`,
  dumbbell:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="none" stroke="#8B5CF6" stroke-width="2.2" stroke-linecap="round"><path d="M2 12h3M19 12h3M5 8v8M19 8v8M8 12h8"/></svg>`,
  swords:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l8 8M3 3v4M3 3h4M21 3l-8 8M21 3v4M21 3h-4M7 17l-3 3M17 17l3 3M6 14l4 4M18 14l-4 4"/></svg>`,
  squat:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="none" stroke="#10B981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.2"/><path d="M12 7v4l-4 3 1.5 6M12 11l4 3-1.5 6M6 10h12"/></svg>`,
  crown:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="#F59E0B"><path d="M3 9l4 4 5-7 5 7 4-4v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="3.5" cy="8" r="1.6"/><circle cx="12" cy="5" r="1.6"/><circle cx="20.5" cy="8" r="1.6"/></svg>`,
  medal:(s,c)=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px"><path d="M8 2h3l2 5-4 1z" fill="${c}" opacity=".7"/><path d="M16 2h-3l-2 5 4 1z" fill="${c}" opacity=".5"/><circle cx="12" cy="14" r="7" fill="${c}"/><circle cx="12" cy="14" r="4.6" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="1.4"/></svg>`,
  ring:(s,c)=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px"><circle cx="12" cy="12" r="8.5" fill="none" stroke="${c}" stroke-width="4"/></svg>`,
  shield:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="#8B5CF6"><path d="M12 2l8 3v6c0 5-3.4 9.2-8 11-4.6-1.8-8-6-8-11V5z"/><path d="M12 5.5l5 1.9v3.8c0 3.3-2.1 6.2-5 7.6z" fill="#A78BFA"/></svg>`,
  skull:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="#FCD34D"><path d="M12 2l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.2 6.2 19.6l1.5-6.5-5-4.4 6.6-.6z"/></svg>`,
  star:s=>`<svg viewBox="0 0 24 24" style="width:${s}px;height:${s}px" fill="#F59E0B"><path d="M12 2l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.2 6.2 19.6l1.5-6.5-5-4.4 6.6-.6z"/></svg>`,
};

/* campaign: 3 chapters × 18 episodes = 54 */
const CHAPTERS=[
  { name:'Sprout Caves', icon:'goblin',
    pool:[['Grib','goblin'],['Flit','bat'],['Twig','archer'],['Webby','spider'],['Rattle','bone'],['Boulder','troll']],
    boss:['Chief Grib','chief'] },
  { name:'Bubble Caverns', icon:'skelking',
    pool:[['Rattle','bone'],['Wisp','ghoul'],['Echo','bat'],['Skitter','spider'],['Shade','wraith'],['Rocky','troll']],
    boss:['King Rattle','skelking'] },
  { name:'Web Woods', icon:'brood',
    pool:[['Tiny Webby','spider'],['Buzz','bat'],['Fuzz','ghoul'],['Leafy','goblin'],['Dusk','wraith'],['Mossy','troll']],
    boss:['Queen Webby','brood'] },
  { name:'Sunny Keep', icon:'warlord',
    pool:[['Sparky','goblin'],['Ember','bat'],['Glow','ghoul'],['Forge','troll'],['Flare','archer'],['Clatter','bone']],
    boss:['Captain Sparky','warlord'] },
  { name:'Frosty Peaks', icon:'wraith',
    pool:[['Chill','wraith'],['Icy','spider'],['Frosty','ghoul'],['Snowy','troll'],['Crackle','bone'],['Flurry','bat']],
    boss:['Snow King','skelking'] },
  { name:'Dragon Sky', icon:'dragonet',
    pool:[['Puff','dragonet'],['Breeze','wraith'],['Pebble','troll'],['Sky Webby','spider'],['Whistle','bone'],['Feather','archer']],
    boss:['Big Puff','dragonet'] },
];
S.chapters=CHAPTERS.map((c,ci)=>({ name:c.name, icon:c.icon, eps:[] }));
CHAPTERS.forEach((c,ci)=>{
  for(let i=0;i<18;i++){
    const boss=(i+1)%6===0, g=(ci*18)+i;
    const e=c.pool[i%c.pool.length];
    S.chapters[ci].eps.push({
      c:ci, i, boss,
      name: boss?c.boss[0]:e[0],
      sprite: boss?c.boss[1]:e[1],
      hp: boss? (8+Math.round(g*1.1)) : (3+Math.floor(g*0.55)),
      waves: boss?1:(i>=6 && i%4===0 ? 2 : 1),
      stars: (ci===0&&i===0)?2:0,
      exs: ['Push-ups'],
      drops: boss?'Chapter Crown · 80–120 coins':'Small Energy Potion · '+(5+g)+'–'+(15+g)+' coins',
    });
  }
});
S.cur={ c:0, e:1 };       /* active pointer: chapter 1, episode 2 */
S.viewC=0;                 /* chapter being viewed on the map */

/* ---- campaign progress persistence: stars + current position ---- */
function campaignSnapshot(){
  const stars={};
  S.chapters.forEach((c,ci)=>c.eps.forEach((e,i)=>{ if(e.stars>0) stars[ci+'-'+i]=e.stars; }));
  return JSON.stringify({ c:S.cur.c, e:S.cur.e, stars });
}
function restoreCampaign(raw){
  if(!raw) return;
  let data; try{ data=JSON.parse(raw); }catch(e){ return; }
  if(!data) return;
  if(Number.isInteger(data.c) && Number.isInteger(data.e)){
    S.cur.c=Math.max(0,Math.min(S.chapters.length-1,data.c));
    S.cur.e=Math.max(0,Math.min(17,data.e));
    S.viewC=S.cur.c;
  }
  if(data.stars){
    Object.entries(data.stars).forEach(([k,v])=>{
      const [ci,i]=k.split('-').map(Number);
      if(S.chapters[ci]?.eps[i]) S.chapters[ci].eps[i].stars=v;
    });
  }
}
function saveCampaign(){
  if(PROFILE){ PROFILE.campaign=campaignSnapshot(); saveProfile(); }
}

/* leaderboard generation per tier spec */
const NAMES=['IronPusher99','VikingSquatter','FitKnight','RepLord','SquatWitch','PushCzar','GymGoblinX','FlexFalcon','PlankPirate','CoreCrusher','MuscleMage','SetSniper','BeastMode_CZ','RepRanger','SwolePaladin','GrindGuru','FitViking22','PumpKnight','IronMaiden7','CardioComet','DumbbellDuke','SquatSquad1','PushPixel','RepRaptor','FlexPhantom','GainzGnome','TurboTriceps','WarriorWill','ZenLifter','MightyMarta','OmegaReps','PowerPetr','SteelStina','VoltVaclav','RapidRita','BlitzBohumil','NitroNela','MaxMirek','HyperHana','DynamoDan'];
(function buildLB(){
  let n=0;
  const mk=(xp,tier)=>({ name:NAMES[n++%NAMES.length]+(n>NAMES.length?n:''), lvl:ri(3,30), xp, tier, bot:true });
  S.lb.push(mk(9850,'L'),mk(9310,'L'),mk(8720,'L'));                    /* legendary 1-3 */
  for(let i=0;i<40;i++) S.lb.push(mk(ri(1200,7800),'C'));               /* competitive 4-50 */
  for(let i=0;i<25;i++) S.lb.push(mk(ri(80,1100),'B'));                 /* community 51+ */
  S.lb.push({ name:'You', lvl:S.user.lvl, xp:2140, me:true, tier:'C' });
  S.lb.sort((a,b)=>b.xp-a.xp);
})();

/* ================= AUDIO ================= */
let AC=null;
function beep(f,d,type){
  if(!S.sound) return;
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    const o=AC.createOscillator(),g=AC.createGain();
    o.type=type||'square'; o.frequency.value=f;
    g.gain.setValueAtTime(.06,AC.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+d);
    o.connect(g); g.connect(AC.destination);
    o.start(); o.stop(AC.currentTime+d);
  }catch(e){}
}

/* ---------- EXTREME FX ENGINE ---------- */
function burstAt(el,color,count){
  const app=$('app'), r=app.getBoundingClientRect();
  let cx=r.width/2, cy=r.height/2;
  if(el&&el.getBoundingClientRect){ const b=el.getBoundingClientRect(); cx=b.left-r.left+b.width/2; cy=b.top-r.top+b.height/2; }
  const cols=color?[color]:['#F59E0B','#8B5CF6','#10B981','#FCD34D'];
  const n=count||14;
  for(let i=0;i<n;i++){
    const s=document.createElement('div'); s.className='spark';
    const ang=(Math.PI*2*i)/n + Math.random()*.5, dist=48+Math.random()*70;
    s.style.cssText='left:'+cx+'px;top:'+cy+'px;background:'+cols[i%cols.length]+
      ';--sx:'+(Math.cos(ang)*dist)+'px;--sy:'+(Math.sin(ang)*dist)+'px;--sr:'+(Math.random()*540)+'deg';
    app.appendChild(s); setTimeout(()=>s.remove(),650);
  }
}
function shockwave(el,color){
  const app=$('app'), r=app.getBoundingClientRect();
  let cx=r.width/2, cy=r.height/2;
  if(el&&el.getBoundingClientRect){ const b=el.getBoundingClientRect(); cx=b.left-r.left+b.width/2; cy=b.top-r.top+b.height/2; }
  const w=document.createElement('div'); w.className='shockwave';
  w.style.cssText='left:'+cx+'px;top:'+cy+'px;margin:-5px 0 0 -5px;border-color:'+(color||'rgba(245,158,11,.9)');
  app.appendChild(w); setTimeout(()=>w.remove(),520);
}
function quake(){ const a=$('app'); a.classList.remove('quake'); void a.offsetWidth; a.classList.add('quake');
  setTimeout(()=>a.classList.remove('quake'),360); }
function flashScreen(){ const f=$('flashlayer'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
function pump(id){ const e=$(id); if(!e) return; e.classList.remove('pump'); void e.offsetWidth; e.classList.add('pump'); }

function chord(freqs,d,type){ freqs.forEach((f,i)=>setTimeout(()=>beep(f,d||.12,type||'square'),i*55)); }
const SFX={
  rep:()=>beep(520,.06),
  crit:()=>{ chord([660,880,1180],.10); },
  hit:()=>beep(300,.05,'sine'),
  kill:()=>chord([523,659,784,1046],.13),
  levelup:()=>chord([523,659,784,1046,1318],.15),
  win:()=>chord([784,988,1318],.18),
  lose:()=>chord([392,330,262],.22,'sine'),
  click:()=>beep(660,.05),
  err:()=>beep(180,.16,'sine'),
  hurt:()=>beep(220,.12,'sawtooth'),
  ready:()=>chord([700,900],.11),
};

/* ================= NAV / SHELL ================= */
/* ================= ROUTING (History API) ================= */
const ROUTES={
  '':'scr-home', home:'scr-home', workout:'scr-workout', campaign:'scr-campaign',
  duels:'scr-arena', arena:'scr-arena', ranks:'scr-ranks', account:'scr-profile', profile:'scr-profile', stats:'scr-stats', gear:'scr-inventory', quests:'scr-home',
  achievements:'scr-achievements', friends:'scr-friends',
};
const SLUG_OF={}; Object.entries(ROUTES).forEach(([k,v])=>{ if(k) SLUG_OF[v]=k; });
let routing=false;   /* guards against pushState loops while popping state */

const FLOW_SCREENS=new Set(['scr-splash','scr-auth','scr-checkmail','scr-forgot','scr-resetsent','scr-newpass','scr-onboard','scr-paywall']);
function nav(id, opts){
  cleanupFlows(id);
  if(!FLOW_SCREENS.has(id)) document.body.classList.remove('locked');
  document.body.classList.remove('in-match');
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));
  document.querySelectorAll('.nv').forEach(n=>n.classList.toggle('on',n.dataset.s===id));
  ({ 'scr-home':renderHome,'scr-campaign':renderMap,'scr-arena':renderArena,
     'scr-ranks':renderLB,'scr-profile':renderProfile,'scr-workout':renderWorkout })[id]?.();
  updateUrl(id, opts);
}
function updateUrl(id, opts){
  if(routing) return;                       /* don't re-push while handling a popstate */
  const slug=SLUG_OF[id]; if(slug===undefined) return;   /* only real nav-tab screens get URLs */
  const path='/'+(slug||'');
  const replace = opts && opts.replace;
  const state={ scr:id };
  try{
    if(replace) history.replaceState(state,'',path);
    else if(location.pathname!==path) history.pushState(state,'',path);
  }catch(e){ /* file:// or sandboxed preview — routing silently no-ops */ }
}
window.addEventListener('popstate', e=>{
  const id=e.state?.scr;
  if(!id) return;
  routing=true;
  if(!FLOW_SCREENS.has(id)) document.body.classList.remove('locked');
  document.body.classList.remove('in-match');
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));
  document.querySelectorAll('.nv').forEach(n=>n.classList.toggle('on',n.dataset.s===id));
  ({ 'scr-home':renderHome,'scr-campaign':renderMap,'scr-arena':renderArena,
     'scr-ranks':renderLB,'scr-profile':renderProfile })[id]?.();
  routing=false;
});
function routeFromUrl(){
  const slug=location.pathname.replace(/^\/+/,'').split('/')[0];
  return ROUTES.hasOwnProperty(slug) ? ROUTES[slug] : null;
}
const MATCH_SCREENS=new Set(['scr-battle','scr-duel']);
function goFlow(id){ /* flow screens without nav highlight */
  document.body.classList.toggle('in-match', MATCH_SCREENS.has(id));
  /* auth / onboarding / paywall must never show the tab bar */
  if(FLOW_SCREENS.has(id)) document.body.classList.add('locked');
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));
  document.querySelectorAll('.nv').forEach(n=>n.classList.remove('on'));
}
function cleanupFlows(dest){
  if(dest!=='scr-room'&&dest!=='scr-duel'&&dest!=='scr-lobby'&&dest!=='scr-victory'&&dest!=='scr-queue'){
    try{ RT.ch?.unsubscribe(); }catch(e){} try{ RT.lob?.unsubscribe(); }catch(e){}
    RT.ch=null; RT.lob=null; RT.seeking=false; if(RT.seekT){clearTimeout(RT.seekT);RT.seekT=null;}
  }
  if(S.B && dest!=='scr-battle' && dest!=='scr-victory') killBattle();
  if(S.duel && dest!=='scr-duel' && dest!=='scr-victory') killDuel();
  if(S.queueT){ clearTimeout(S.queueT); S.queueT=null; }
  stopCams();
}

/* ================= XP / COINS ================= */
const xpNeed=()=>S.user.lvl*50;
let pendingLvlUps=0;
function addXP(n){
  S.user.xp+=n; pendingLvlUps=0;
  while(S.user.xp>=xpNeed()){ S.user.xp-=xpNeed(); S.user.lvl++; pendingLvlUps++; }
}
function addCoins(n,fromEl){ S.user.coins+=n; if(n>0) flyCoins(fromEl,n); }
function floatFX(txt,color){
  const el=document.createElement('div'); el.className='xpf'; el.textContent=txt;
  if(color) el.style.color=color;
  el.style.left=(28+Math.random()*40)+'%'; el.style.top=(38+Math.random()*14)+'%';
  $('app').appendChild(el); setTimeout(()=>el.remove(),900);
}
function confetti(){
  const cols=['#F59E0B','#8B5CF6','#10B981','#EF4444','#FCD34D'];
  for(let i=0;i<26;i++){
    const c=document.createElement('div'); c.className='conf';
    c.style.left=Math.random()*100+'%'; c.style.top='-10px';
    c.style.background=cols[i%cols.length]; c.style.animationDelay=(Math.random()*.4)+'s';
    $('app').appendChild(c); setTimeout(()=>c.remove(),2000);
  }
}

/* ================= HOME ================= */
function exIcon(name,size){
  const s=size||20;
  if(name==='Sit-ups') return '<svg viewBox="0 0 24 24" style="width:'+s+'px;height:'+s+'px" fill="none" stroke="#10B981" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="6.5" r="2.2"/><path d="M9 8.5l4 3 5-1M4 19h9l4-4M9 8.5L6 14l-2 5"/></svg>';
  if(name==='Squats')  return '<svg viewBox="0 0 24 24" style="width:'+s+'px;height:'+s+'px" fill="none" stroke="#F59E0B" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.2"/><path d="M12 7v4l-4 3 1.5 6M12 11l4 3-1.5 6M6 10h12"/></svg>';
  return '<svg viewBox="0 0 24 24" style="width:'+s+'px;height:'+s+'px" fill="none" stroke="#8B5CF6" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="8" r="2"/><path d="M7.5 9.5L14 12l5.5-1.5M4 16h7l4-3M7.5 9.5L6 14"/></svg>';
}
function currentEp(){ return S.chapters[S.cur.c]?.eps[S.cur.e]; }
function renderEpHero(){
  const e=currentEp(); if(!e) return;
  const ch=S.chapters[S.cur.c];
  setTxt('hero-eyebrow', e.boss ? 'BIG MATCH!' : 'YOUR NEXT MATCH');
  setTxt('hero-chap','Chapter '+(S.cur.c+1)+' · '+ch.name);
  setTxt('hero-name', e.name);
  setHTML('hero-mon', mon(e.sprite,64));
  const hp=Math.max(1,Math.ceil(e.hp*D().hp));
  const reps=Math.max(1,Math.ceil(e.hp*D().hp));
  setTxt('hero-sub', reps+' '+e.exs[0].toLowerCase()+' to win · '+ch.name);
  setHTML('hero-meta',
    '<span class="hp">'+hp+' Energy · '+hp+' reps</span>'+
    '<span class="ex">'+e.exs[0]+'</span>'+
    (e.waves>1?'<span>'+e.waves+' waves</span>':'')+
    (e.boss?'<span class="bs">BIG MATCH</span>':'')+
    '<span>'+D().name+'</span>');
}
function playCurrentEpisode(){
  const hero=$('ep-hero');
  if(hero){ hero.classList.remove('pulse'); void hero.offsetWidth; hero.classList.add('pulse'); }
  SFX.kill(); flashScreen(); quake(); burstAt(hero,'#F59E0B',24); shockwave(hero);
  setTimeout(()=>startEpisode(S.cur.c,S.cur.e),260);
}
function goToMapSmooth(){
  SFX.click(); burstAt($('ep-hero'),'#8B5CF6',12);
  S.viewC=S.cur.c;
  nav('scr-campaign');
  setTimeout(()=>{
    const node=$('map-nodes')?.children[S.cur.e];
    if(node) node.scrollIntoView({behavior:'smooth',block:'center'});
  },320);
}
function renderHome(){
  if($('ps-flame') && !$('ps-flame').dataset.ico){
    $('ps-flame').insertAdjacentHTML('afterbegin',ICO.flame(14)); $('ps-flame').dataset.ico=1;
    $('ps-coin').insertAdjacentHTML('afterbegin',ICO.coin(14)); $('ps-coin').dataset.ico=1; }
  if(PROFILE){ setTxt('home-uname', PROFILE.username); paintAvatars(); }
  setTxt('hello-sub', greetLine()+' — ready to play?');
  renderEpHero();
  /* royale crest */

  setTxt('crest-reps', ((PROFILE?.total_reps)||0).toLocaleString('en-US'));
  setTxt('h-lvl', S.user.lvl);
  setTxt('h-xp', S.user.xp); setTxt('h-xpn', xpNeed());
  const xb=$('h-xpbar');
  if(xb){ xb.style.width=(S.user.xp/xpNeed()*100)+'%';
    xb.classList.remove('xpbar-glow'); void xb.offsetWidth; xb.classList.add('xpbar-glow'); }
  setTxt('h-streak', S.user.streak);
  setTxt('h-coins', S.user.coins.toLocaleString('en-US'));
  const b=S.dailyBoss; if(!$('db-name')) return;
  $('db-name').textContent=b.done?b.name+' — OUT OF ENERGY':b.name;
  $('db-hp').textContent=b.hp+' / '+b.max;
  $('db-bar').style.width=(b.hp/b.max*100)+'%';
  $('db-target').textContent=b.max;
  $('db-sprite').innerHTML=mon(b.sprite,56);
  $('db-coinchip').innerHTML=ICO.coin(12)+' '+b.rwCoins;
  $('qs-reps').textContent=S.user.todayReps;
  $('qs-time').textContent=fmt(S.user.activeSec);
  $('qs-cal').textContent=S.user.cal;
  const ql=$('quest-list'); ql.innerHTML='';
  S.quests.forEach(q=>{
    const p=Math.min(q.prog,q.target), ready=p>=q.target&&!q.claimed;
    const rw=q.rw.xp?('+'+q.rw.xp+' XP'):('🪙 '+q.rw.coins);
    const el=document.createElement('div');
    el.className='card quest-card';
    el.innerHTML=`
      <div class="row"><div class="q-ico">${ICO[q.icon]?ICO[q.icon](20):q.icon}</div>
        <div class="grow"><b>${q.name}</b><div class="sub">Daily quest</div></div></div>
      <div class="pbar fill-gr"><i style="width:${p/q.target*100}%"></i></div>
      <div class="q-foot"><span class="dim">${p} / ${q.target}</span>
        ${q.claimed?'<span class="green">CLAIMED ✓</span>':
          `<button class="claim" ${ready?'':'disabled'} onclick="claimQuest('${q.id}')">${ready?'CLAIM '+rw:rw}</button>`}</div>`;
    ql.appendChild(el);
  });
}
function applyFrame(w){
  w.classList.remove('av-frame-gold','av-frame-neon');
  if(S.user.frame==='gold') w.classList.add('av-frame-gold');
  if(S.user.frame==='neon') w.classList.add('av-frame-neon');
}
function claimQuest(id){ saveProfile();
  const q=S.quests.find(x=>x.id===id);
  if(!q||q.claimed||q.prog<q.target) return;
  q.claimed=true;
  if(q.rw.xp){ addXP(q.rw.xp); floatFX('+'+q.rw.xp+' XP'); }
  if(q.rw.coins){ addCoins(q.rw.coins, document.querySelector('.claim')); }
  SFX.levelup(); confetti(); burstAt(null,'#FCD34D',20); renderHome();
  if(pendingLvlUps) toast('🎉 LEVEL UP! Now level '+S.user.lvl);
}

/* ================= CAMPAIGN MAP ================= */
function chapUnlocked(ci){ return ci<=S.cur.c; }
function epStatus(e){
  if(e.stars>0) return 'done';
  if(e.c<S.cur.c || (e.c===S.cur.c && e.i<S.cur.e)) return 'done';
  if(e.c===S.cur.c && e.i===S.cur.e) return 'act';
  return 'lock';
}
function switchChap(dir){
  const n=S.viewC+dir;
  if(n<0||n>=S.chapters.length) return;
  S.viewC=n; renderMap();
}
function renderMap(_attempt){
  _attempt=_attempt||0;
  try{
    const ch=S.chapters[S.viewC], unlocked=chapUnlocked(S.viewC);
    if(!ch) throw new Error('no chapter at viewC='+S.viewC);
    const wrapEl=$('map-wrap');
    if(!wrapEl) throw new Error('map-wrap missing from DOM');
    if(wrapEl.clientWidth===0 && _attempt<6){
      /* container isn't measurable yet (mid-transition) — retry a few times with
         growing delay instead of silently giving up after one try */
      setTimeout(()=>renderMap(_attempt+1), 60*(_attempt+1));
      return;
    }
    if(unlocked) setTimeout(()=>maybeChapterStory(S.viewC),250);
    if(S.viewC===S.cur.c) setTimeout(()=>{
      const n=$('map-nodes')?.children[S.cur.e];
      if(n) n.scrollIntoView({behavior:'smooth',block:'center'});
    },140);
    const done=ch.eps.filter(e=>epStatus(e)==='done').length;
    setTxt('ch-name', ch.name);
    setTxt('ch-num', 'CHAPTER '+(S.viewC+1)+' / '+S.chapters.length);
    const allEps=S.chapters.reduce((a,c)=>a+c.eps.length,0);
    const allDone=S.chapters.reduce((a,c)=>a+c.eps.filter(e=>e.stars>0).length,0);
    setTxt('ch-global', allDone+' / '+allEps+' episodes cleared');
    const chDone=ch.eps.filter(e=>epStatus(e)==='done').length;
    if($('ch-bar')) $('ch-bar').style.width=(chDone/ch.eps.length*100)+'%';
    setHTML('ch-icon', mon(ch.icon,40));
    setTxt('ch-prog', unlocked?Math.min(done+1,18):0);
    setTxt('ch-stars', ch.eps.reduce((a,e)=>a+e.stars,0));
    if($('ch-prev')) $('ch-prev').disabled=S.viewC===0;
    if($('ch-next')) $('ch-next').disabled=S.viewC===S.chapters.length-1;
    if($('ch-lock')) $('ch-lock').style.display=unlocked?'none':'block';
    if($('boss-jump')) $('boss-jump').style.display=unlocked?'flex':'none';
    const wrap=$('map-nodes'), svg=$('map-svg');
    if(!wrap||!svg) throw new Error('map-nodes/map-svg missing from DOM');
    const W=wrapEl.clientWidth||360;
    const H=18*94+40; wrapEl.style.height=H+'px';
    svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
    wrap.innerHTML='';
    const pts=[];
    ch.eps.forEach((e,i)=>{
      const x=W/2+Math.sin(i*.85)*(W*.27)-31, y=14+i*94;
      pts.push([x+31,y+31]);
      const st=unlocked?epStatus(e):'lock';
      const n=document.createElement('button');
      n.className='node '+st+(e.boss?' boss':'');
      n.style.left=x+'px'; n.style.top=y+'px';
      n.innerHTML=`<span class="num">${i+1}</span>
        <span class="em">${st==='lock'?'<svg viewBox="0 0 24 24" style="width:20px;height:20px" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>':mon(e.sprite,34)}</span>
        ${e.stars>0?`<span class="st">${'★'.repeat(e.stars)}</span>`:st==='act'?'<span class="st">GO!</span>':''}`;
      n.onclick=()=>openDrawer(S.viewC,i);
      wrap.appendChild(n);
    });
    let d='M'+pts[0][0]+' '+pts[0][1];
    for(let i=1;i<pts.length;i++){
      const [x1,y1]=pts[i-1],[x2,y2]=pts[i];
      d+=` C ${x1} ${y1+45}, ${x2} ${y2-45}, ${x2} ${y2}`;
    }
    svg.innerHTML=`<path d="${d}" fill="none" stroke="rgba(245,158,11,.45)" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/>`;
  }catch(err){
    console.error('[FitRoyale] renderMap failed', err);
    const wrap=$('map-nodes');
    if(wrap) wrap.innerHTML='<div style="text-align:center;padding:30px 12px;position:relative;z-index:2">'+
      '<p class="dim" style="font-size:13px;font-weight:800;margin-bottom:12px">The map didn&#39;t load.</p>'+
      '<button class="btn b-purple" style="max-width:220px;margin:0 auto" onclick="renderMap()">TRY AGAIN</button></div>';
  }
}
function editName(){
  SFX.click();
  const cur=(PROFILE?.username||'').replace(/"/g,'&quot;');
  openModal('<h3 class="hdr">Change your name</h3>'+
    '<p style="margin-bottom:14px">This is the name other players see.</p>'+
    '<input id="name-in" class="bio-box" style="text-align:center;font-size:17px;font-weight:900" '+
      'maxlength="20" value="'+cur+'" placeholder="Your name">'+
    '<div class="auth-err" id="name-err" style="margin-top:8px"></div>'+
    '<button class="btn b-gold" onclick="saveName()">SAVE NAME</button>'+
    '<button class="btn b-ghost" style="margin-top:9px" onclick="closeModal()">CANCEL</button>');
  setTimeout(()=>{ const i=$('name-in'); if(i){ i.focus(); i.select(); } },80);
}
function saveName(){
  const v=($('name-in')?.value||'').trim();
  const err=$('name-err');
  if(v.length<3){ if(err) err.textContent='Name needs at least 3 letters.'; SFX.err(); return; }
  if(v.length>20){ if(err) err.textContent='Keep it under 20 letters.'; SFX.err(); return; }
  closeModal();                                   /* close first — never looks stuck */
  setTxt('home-uname', v); setTxt('prof-uname', v);
  if(PROFILE){ PROFILE.username=v; cacheProfileLocally(); saveProfile(); }
  SFX.ready(); burstAt(null,'#F59E0B',14);
  toast('Name changed to '+v);
  setTimeout(()=>{ try{ renderProfile(); }catch(e){console.error(e);}
                   try{ renderHome(); }catch(e){console.error(e);} },30);
}
function showHowToPlay(){
  SFX.click();
  showStoryModal(STORY.howItWorks.title, STORY.howItWorks.body, 'GOT IT');
}
async function forceRefresh(){
  SFX.click();
  try{
    if('serviceWorker' in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.unregister()));
    }
    if(window.caches){ const k=await caches.keys(); await Promise.all(k.map(x=>caches.delete(x))); }
  }catch(e){}
  sessionStorage.removeItem('fr_purged');
  toast('Getting the newest version…');
  setTimeout(()=>location.reload(true),600);
}
function showDiag(){
  const local=(()=>{ try{ return JSON.parse(localStorage.getItem(localKey())||'null'); }catch(e){ return null; } })();
  const row=(k,v)=>'<div style="display:flex;gap:8px;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--line)">'+
    '<span class="dim" style="font-size:11px;font-weight:900">'+k+'</span>'+
    '<span style="font-size:11px;font-weight:800;text-align:right;word-break:break-all;max-width:60%">'+v+'</span></div>';
  const yn=v=>v?'<span style="color:var(--green)">yes</span>':'<span style="color:var(--red)">no</span>';
  openModal('<h3 class="hdr">Diagnostics</h3>'+
    '<div style="text-align:left;margin:12px 0">'+
    row('Build', BUILD)+
    row('Signed in', yn(!!ME))+
    row('Email', ME?.email||'—')+
    row('Supabase ready', yn(!!sb))+
    row('PROFILE loaded', yn(!!PROFILE))+
    row('Name in memory', PROFILE?.username||'—')+
    row('Photo in memory', PROFILE?.avatar_url ? 'yes ('+Math.round(PROFILE.avatar_url.length/1024)+' KB)' : 'no')+
    row('Icon', PROFILE?.avatar||'—')+
    row('Local backup', local ? 'yes' : '<span style="color:var(--red)">none</span>')+
    row('Name in backup', local?.username||'—')+
    row('Photo in backup', local?.avatar_url?'yes':'no')+
    row('Cloud save', lastSave.ok===true?'<span style="color:var(--green)">working</span>':
        lastSave.ok===false?'<span style="color:var(--gold)">failing</span>':'not tried')+
    row('Last error', lastSave.ok===false?lastSave.msg:'—')+
    row('Skipped columns', badCols.size?[...badCols].join(', '):'none')+
    '</div>'+
    '<button class="btn b-purple" onclick="copyDiag()">COPY THIS INFO</button>'+
    '<button class="btn b-ghost" style="margin-top:9px" onclick="closeModal()">CLOSE</button>');
}
function copyDiag(){
  const local=(()=>{ try{ return JSON.parse(localStorage.getItem(localKey())||'null'); }catch(e){ return null; } })();
  const txt=['build='+BUILD,'signedIn='+!!ME,'email='+(ME?.email||''),'sb='+!!sb,
    'profile='+!!PROFILE,'name='+(PROFILE?.username||''),'photo='+(PROFILE?.avatar_url?'yes':'no'),
    'localBackup='+(local?'yes':'no'),'localName='+(local?.username||''),
    'save='+lastSave.ok,'err='+(lastSave.msg||''),'badCols='+[...badCols].join('|')].join('\n');
  try{ navigator.clipboard.writeText(txt); toast('Copied — paste it in chat'); }
  catch(e){ toast(txt); }
}
function armoryPopup(){
  SFX.click(); quake();
  openModal('<div style="display:flex;justify-content:center;margin-bottom:6px">'+
    '<svg viewBox="0 0 24 24" style="width:58px;height:58px" fill="none" stroke="#8B5CF6" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+
    '<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V6.5a4 4 0 0 1 8 0V10"/><circle cx="12" cy="15.5" r="1.6"/></svg></div>'+
    '<h3 class="hdr">Armory</h3>'+
    '<span class="soon-tag">UNDER CONSTRUCTION — COMING SOON</span>'+
    '<p style="margin-top:12px;line-height:1.65">Forge armor, gloves and relics that make every rep hit harder.<br><br>'+
    'Keep stacking coins — you\'ll be able to spend them here.</p>'+
    '<button class="btn b-purple" onclick="closeModal()">GOT IT</button>');
}
function jumpToBoss(){
  const ch=S.chapters[S.viewC];
  if(!chapUnlocked(S.viewC)){ toast('Finish the previous chapter first'); SFX.err(); return; }
  /* next boss you haven't 3-starred, else the first boss */
  let idx=ch.eps.findIndex(e=>e.boss && e.stars<1);
  if(idx<0) idx=ch.eps.findIndex(e=>e.boss);
  if(idx<0) return;
  const node=$('map-nodes')?.children[idx];
  if(node) node.scrollIntoView({behavior:'smooth',block:'center'});
  SFX.click();
  setTimeout(()=>openDrawer(S.viewC,idx),260);
}
function openDrawer(ci,i){
  const e=S.chapters[ci].eps[i];
  const st=chapUnlocked(ci)?epStatus(e):'lock';
  let dr=$('drawer');
  if(!dr){ dr=document.createElement('div'); dr.id='drawer'; $('app').appendChild(dr); }
  dr.innerHTML=`
    <div class="dr-handle"></div>
    <div class="dr-creature">
      <div class="dr-sprite">${mon(e.sprite,46)}</div>
      <div class="grow">
        <div class="boss-tag">${e.boss?'BIG MATCH':'MATCH '+(i+1)}</div>
        <div class="hdr" style="font-size:18px">${e.name}</div>
        <div class="dim" style="font-size:11.5px;font-weight:800">${e.hp} Energy ${e.waves>1?'· '+e.waves+' waves':''} ${e.stars?'· '+'★'.repeat(e.stars):''}</div>
      </div>
      <button class="round-btn" onclick="closeDrawer()">✕</button>
    </div>
    <div class="dim" style="font-size:11px;font-weight:900;letter-spacing:.1em">REQUIRED EXERCISES</div>
    <div class="ex-chips">${e.exs.map(x=>`<span class="exchip">${x}</span>`).join('')}</div>
    <div class="dim" style="font-size:11px;font-weight:900;letter-spacing:.1em">POSSIBLE DROPS</div>
    <div class="drops">${e.drops}</div>
    <div class="dim" style="font-size:11px;font-weight:900;letter-spacing:.1em">DIFFICULTY</div>
    ${diffPickerHTML()}
    ${st==='lock'
      ? '<button class="btn b-ghost" disabled>🔒 Clear previous episodes first</button>'
      : `<button class="btn ${e.boss?'b-red':'b-purple'}" onclick="startEpisode(${ci},${i})">${e.stars>0?'REPLAY':'START'} EPISODE</button>`}`;
  requestAnimationFrame(()=>dr.classList.add('open'));
}
function closeDrawer(){ $('drawer')?.classList.remove('open'); }

/* ================= ARENA ================= */
function renderTierStrip(){
  const w=$('tier-row'); if(!w) return;
  const e=myElo(), cur=tierOf(e);
  w.innerHTML='';
  TIERS.forEach(t=>{
    const el=document.createElement('div');
    el.className='tier-chip'+(t.n===cur.n?' on':(e>t.min?' done':''));
    el.innerHTML='<b style="color:'+t.col+'">'+t.n+'</b><span>'+t.min+'+</span>';
    w.appendChild(el);
  });
}
function renderRankCard(){
  try{
  const e=myElo(), t=tierOf(e), nx=nextTier(e);
  const card=$('rankcard'); if(!card) return;
  card.style.setProperty('--rc1',t.c1); card.style.setProperty('--rc2',t.c2);
  $('rank-emblem').innerHTML=tierEmblem(t,88);
  $('rank-tier').textContent=t.n;
  $('rank-elo-n').textContent=e;
  $('rank-cur').textContent=t.n;
  if(nx){
    $('rank-nxt').textContent=nx.n+' '+nx.min;
    const span=nx.min-t.min, into=e-t.min;
    $('rank-fill').style.width=Math.max(4,Math.min(100,into/span*100))+'%';
  } else {
    $('rank-nxt').textContent='MAX TIER';
    $('rank-fill').style.width='100%';
  }
  renderTierStrip();
  }catch(err){ console.error('[FitRoyale] renderRankCard failed', err); }
}
function renderArena(){
  try{
  renderRankCard();
  const e=myElo();
  if($('duel-elo')) $('duel-elo').textContent=e+' ELO';
  if($('duel-elo2')) $('duel-elo2').textContent=e;
  if($('duel-wins')) $('duel-wins').textContent=PROFILE?.duel_wins||0;
  }catch(err){ console.error('[FitRoyale] renderArena failed', err); }
}
function renderWorkout2(){ if($('pr-show')) $('pr-show').textContent=S.user.pr;
  if($('diff-card')) $('diff-card').innerHTML=diffPickerHTML(); }
function pickTarget(el,t){ S.speedTarget=t; document.querySelectorAll('#sr-targets .tpill').forEach(p=>p.classList.toggle('sel',p===el)); }
function pickEx(el,x){ S.speedEx=x; document.querySelectorAll('#sr-ex .tpill').forEach(p=>p.classList.toggle('sel',p===el)); }

/* ================= BATTLE ENGINE ================= */
function makeBattle(cfg){
  S.B={ ...cfg, waveIdx:0, reps:0, sec:0, paused:false, timers:[], repTs:[], eEnergy:cfg.waves[0].hp,
        tracking:false, live:false, php:100, lastRepAt:0, gate:true };
  goFlow('scr-battle');
  if($('b-diff')) $('b-diff').textContent=D().name.toUpperCase();
  const EXTIP={ 'Push-ups':'Hands under shoulders, body straight, lower and press up',
                'Sit-ups':'Lie back, then crunch up until your chest meets your knees',
                'Squats':'Feet shoulder-width, sit down until thighs are level, stand tall' };
  if($('eb-ico')){ $('eb-ico').innerHTML=exIcon(cfg.exercise,22);
    $('eb-name').textContent=cfg.exercise;
    $('eb-tip').textContent=(curDiff()==='easy'?'Easy mode: half-depth reps count. ':'')+(EXTIP[cfg.exercise]||''); }
  $('b-endset').style.display=cfg.endset?'block':'none';
  $('b-auto').textContent='▶'; $('b-auto').style.display='flex';
  $('b-reps').textContent='0';
  $('rep-mode-lbl').textContent='TAP = 1 REP';
  $('b-skel').style.display='none';
  syncCreatureHUD(true);
  $('pg-ico').innerHTML=mon(cfg.waves[0].sprite,48);
  showGate(true,'Get into position',"Prop your phone up, get on the floor facing the camera, arms extended. The fight starts when you're set.");
  syncStamina();
  acquireWake();
  startBattleTracking();
  const t=setInterval(()=>{
    if(!S.B||S.B.paused||S.B.gate||S.B.resting) return;
    S.B.sec++; S.user.activeSec++;
    $('b-timer').textContent=fmt(S.B.sec);
    tickStamina();
  },1000);
  S.B.timers.push(t);
  const atk=setInterval(creatureStrike, (ENEMY_ATK[curDiff()]||ENEMY_ATK.normal).ms);
  S.B.timers.push(atk);
}
async function startBattleTracking(){
  const myB=S.B;
  if(!camGranted){
    try{ const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}}); s.getTracks().forEach(t=>t.stop()); camGranted=true; }
    catch(e){
      openModal('<div style="display:flex;justify-content:center;margin-bottom:6px"><svg viewBox="0 0 24 24" style="width:54px;height:54px" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h2L9 4h6l1.5 2h2A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.6"/></svg></div><h3 class="hdr">Camera needed</h3><p>Fit Royale counts reps with the camera. Allow camera access for this site, then try again.</p><button class="btn b-purple" onclick="closeModal();quitBattle()">OK</button>');
      return;
    }
  }
  const ok=await PoseEngine.start('b-video','b-canvas',myB.exercise,
    ()=>{ if(S.B===myB && !S.B.paused) battleRep(); },
    (type,msg)=>{
      setTrackPill('b-track','b-calib',type,msg);
      updateFormMeter(type,msg);
      if(S.B===myB && S.B.gate===true && typeof msg==='string' &&
         (msg.indexOf('IN POSITION')>-1 || msg.indexOf('Tracking you')>-1)) onInPosition();
    });
  if(S.B!==myB){ if(ok) PoseEngine.stop(); return; }   /* battle ended while loading */
  if(ok){
    myB.tracking=true;
    $('rep-mode-lbl').textContent='AUTO-TRACKING ✓';
    $('b-auto').style.display='none';                    /* demo button not needed */
    $('b-fb').style.display='none';
  } else {
    /* pose unavailable → plain camera preview + tap mode + decorative skeleton */
    initCam('b-video','b-fb');
    showGate(true,'Tap mode','AI tracking is unavailable. Tap the rep pill each time you complete a push-up. Tap below to begin.');
    $('posgate').onclick=()=>{ if(S.B&&S.B.gate===true) onInPosition(); };
    $('b-skel').style.display='block';
    drawSkeleton();
  }
}
/* rest length scales with difficulty — easier = longer breather */
const REST_SECS={ easy:30, normal:25, hard:20, nightmare:15 };
/* creature damage per strike + how often it swings (ms) */
const ENEMY_ATK={ easy:{d:5,ms:9000}, normal:{d:8,ms:7000}, hard:{d:12,ms:5500}, nightmare:{d:18,ms:4200} };
function startRest(nextName,nextSprite){
  const B=S.B; if(!B) return;
  B.resting=true;
  let left=REST_SECS[curDiff()] ?? 25;
  $('rest-cd').textContent=left;
  $('rest-next').textContent=nextName||'Next creature';
  $('rest-ring').innerHTML=mon(nextSprite||'goblin',52);
  $('restgate').classList.add('on');
  SFX.ready();
  const t=setInterval(()=>{
    if(!S.B||!S.B.resting){ clearInterval(t); return; }
    left--;
    $('rest-cd').textContent=Math.max(0,left);
    if(left<=3 && left>0) beep(520,.07);
    if(left<=0){ clearInterval(t); endRest(); }
  },1000);
  B.restTimer=t; B.timers.push(t);
  bindHoldSkip();
}
function endRest(){
  const B=S.B; if(!B) return;
  clearInterval(B.restTimer);
  B.resting=false;
  B.php=Math.min(100,B.php+25);          /* rest restores some stamina */
  B.lastRepAt=performance.now(); B._warned=false;
  syncStamina();
  $('restgate').classList.remove('on');
  $('skip-fill').style.width='0%';
  /* re-arm the pose gate so the next wave starts on your terms */
  if(PoseEngine.target){ PoseEngine.target.armed=false; PoseEngine.target.extSince=0; PoseEngine.target.phase='READY'; }
  B.gate=true;
  showGate(true,'Next wave','Get back into position — the next creature is coming.');
  SFX.kill();
}
let holdTimer=null, holdStart=0;
function bindHoldSkip(){
  const btn=$('skip-btn'), fill=$('skip-fill');
  if(!btn || btn.dataset.bound) { if(fill) fill.style.width='0%'; return; }
  btn.dataset.bound=1;
  const HOLD_MS=900;
  const start=(e)=>{
    e.preventDefault();
    if(!S.B||!S.B.resting) return;
    holdStart=performance.now();
    clearInterval(holdTimer);
    holdTimer=setInterval(()=>{
      const p=Math.min(100,(performance.now()-holdStart)/HOLD_MS*100);
      fill.style.width=p+'%';
      if(p>=100){ clearInterval(holdTimer); fill.style.width='0%'; burstAt(btn,'#F59E0B',12); endRest(); }
    },30);
  };
  const cancel=()=>{ clearInterval(holdTimer); fill.style.width='0%'; };
  btn.addEventListener('pointerdown',start);
  btn.addEventListener('pointerup',cancel);
  btn.addEventListener('pointerleave',cancel);
  btn.addEventListener('pointercancel',cancel);
}
function updateFormMeter(type,msg){
  const m=$('form-meter'); if(!m) return;
  const t=PoseEngine.target;
  if(type!=='ai' || !t || !t.armed){ m.style.display='none'; return; }
  m.style.display='flex';
  const deg=(msg.match(/(\d+)°/)||[])[1];
  if(deg){
    $('fm-deg').textContent=deg+'°';
    const range=Math.max(1,(t.aMax||180)-(t.aMin||0));
    const pct=Math.max(0,Math.min(100, (( (t.aMax||180) - Number(deg)) / range)*100));
    $('fm-fill').style.width=pct+'%';
    m.classList.toggle('down', pct>55);
  } else { $('fm-deg').textContent='—'; }
}
let prepT=null, prepHoldT=null;
function stopPrepTimer(){
  clearInterval(prepT); prepT=null;
  clearInterval(prepHoldT); prepHoldT=null;
  const r=$('hc-hold'); if(r) r.style.strokeDashoffset='358';
  const c=$('hold-circle'); if(c) c.classList.remove('holding');
  const l=$('hc-lbl'); if(l) l.textContent='HOLD TO SKIP';
}
function startPrepTimer(){
  stopPrepTimer();
  const PREP=10, C_LEN=415;
  let left=PREP;
  const num=$('hc-num'), arc=$('hc-count');
  const paint=()=>{
    if(num) num.textContent=left;
    if(arc) arc.style.strokeDashoffset=String(C_LEN*(1-left/PREP));
  };
  paint();
  prepT=setInterval(()=>{
    if(!S.B || S.B.gate!==true){ stopPrepTimer(); return; }
    left--;
    paint();
    if(left<=3 && left>0) beep(520,.06);
    if(left<=0){ stopPrepTimer(); onInPosition(); }
  },1000);
  bindPrepSkip();
}
function bindPrepSkip(){
  const circ=$('hold-circle'), ring=$('hc-hold'), lbl=$('hc-lbl');
  if(!circ||!ring) return;
  if(circ.dataset.bound){ ring.style.strokeDashoffset='358'; return; }
  circ.dataset.bound=1;
  const HOLD=900, R_LEN=358;
  let started=0;
  const begin=(e)=>{
    e.preventDefault();
    if(!S.B || S.B.gate!==true) return;
    started=performance.now();
    circ.classList.add('holding');
    if(lbl) lbl.textContent='KEEP HOLDING…';
    clearInterval(prepHoldT);
    prepHoldT=setInterval(()=>{
      const p=Math.min(1,(performance.now()-started)/HOLD);
      ring.style.strokeDashoffset=String(R_LEN*(1-p));
      if(p>=1){
        clearInterval(prepHoldT);
        circ.classList.remove('holding');
        burstAt(circ,'#F59E0B',18); shockwave(circ); SFX.ready();
        stopPrepTimer(); onInPosition();
      }
    },30);
  };
  const cancel=()=>{
    clearInterval(prepHoldT);
    circ.classList.remove('holding');
    ring.style.strokeDashoffset=String(358);
    if(lbl) lbl.textContent='HOLD TO SKIP';
  };
  circ.addEventListener('pointerdown',begin);
  circ.addEventListener('pointerup',cancel);
  circ.addEventListener('pointerleave',cancel);
  circ.addEventListener('pointercancel',cancel);
}
function showGate(on,title,text){
  const g=$('posgate'); if(!g) return;
  g.style.display=on?'flex':'none';
  if(on) startPrepTimer(); else stopPrepTimer();
  const guide=$('pose-guide');
  if(guide) guide.classList.toggle('on', !!on && (S.B?.exercise==='Push-ups'));
  if(title) $('pg-title').textContent=title;
  if(text) $('pg-text').textContent=text;
  $('pg-cd').style.display='none';
}
function onInPosition(){
  const B=S.B; if(!B||!B.gate) return;
  stopPrepTimer();
  B.gate='counting';
  $('pg-title').textContent='Ready!';
  $('pg-text').textContent='Hold it…';
  const cd=$('pg-cd'); cd.style.display='block';
  let n=3; cd.textContent=n; SFX.ready();
  const t=setInterval(()=>{
    if(!S.B){ clearInterval(t); return; }
    n--;
    if(n>0){ cd.textContent=n; beep(620,.09); }
    else if(n===0){ cd.textContent='FIGHT!'; SFX.kill(); }
    else{
      clearInterval(t);
      if(!S.B) return;
      S.B.gate=false; S.B.lastRepAt=performance.now();
      showGate(false);
      toast('Every rep = damage. Keep moving or you lose stamina!');
    }
  },700);
  B.timers.push(t);
}
function syncStamina(){
  const B=S.B; if(!B) return;
  const bw=$('php-bar'); if(bw){ bw.classList.remove('hp-drain'); void bw.offsetWidth; bw.classList.add('hp-drain'); }
  const p=Math.max(0,Math.round(B.php));
  $('php-txt').textContent=p+' / 100';
  $('php-fill').style.width=p+'%';
  const bar=$('php-bar');
  bar.className='php-bar'+(p<=25?' crit':p<=55?' warn':'');
}
function creatureStrike(){
  const B=S.B; if(!B||B.gate||B.resting||B.paused||B.noEnergy) return;
  const a=ENEMY_ATK[curDiff()]||ENEMY_ATK.normal;
  B.php-=a.d;
  syncStamina();
  SFX.hurt(); quake();
  const hud=$('c-hud'); if(hud){ hud.classList.remove('shake-hard'); void hud.offsetWidth; hud.classList.add('shake-hard'); }
  const d=document.createElement('div'); d.className='dmg crit'; d.textContent='-'+a.d+' YOU';
  d.style.left=(38+Math.random()*24)+'%'; d.style.top='58%';
  $('b-vp').appendChild(d); setTimeout(()=>d.remove(),700);
  const fl=document.createElement('div'); fl.className='critflash';
  $('b-vp').appendChild(fl); setTimeout(()=>fl.remove(),400);
  if(B.php<=0){ B.php=0; syncStamina(); loseBattle(); }
}
function tickStamina(){
  const B=S.B; if(!B||B.gate||B.noEnergy) return;
  const idle=(performance.now()-B.lastRepAt)/1000;
  if(idle>4){
    B.php-=D().drain;                              /* stalling drains you */
    if(B.php<=30 && !B._warned){ B._warned=true; toast('Energy is dropping — keep moving!'); SFX.hurt(); }
    syncStamina();
    if(B.php<=0){ B.php=0; syncStamina(); loseBattle(); }
  }
}
function loseBattle(){
  const B=S.B; if(!B) return;
  B.timers.forEach(t=>{clearInterval(t);clearTimeout(t);});
  $('restgate')?.classList.remove('on');
  stopCams(); SFX.lose(); quake(); flashScreen();
  const reps=B.reps, sec=Math.max(1,B.sec);
  vicCtx={ origin:S.B_origin, headline:'OUT OF ENERGY', stars:0, reps, sec, coins:reps*1, win:false };
  addXP(reps*10); addCoins(reps);
  S.B=null; saveProfile(); showVictory();
}
function setTrackPill(pillId,calibId,type,msg){
  const p=$(pillId); if(!p) return;
  if(!p.dataset.devbound){ p.dataset.devbound=1; p.onclick=()=>{ if(p.classList.contains('tap')) openDevModal(); }; }
  p.classList.remove('ai','load','tap','warn');
  p.classList.add(type==='ai'?'ai':(type==='load'||type==='warn')?'load':'tap');
  p.textContent=msg;
  const c=$(calibId);
  if(c){
    if(type==='warn'){ c.className='warn'; c.textContent='⚠ Keep your full body in the frame'; }
    else { c.className='ok'; c.textContent='✓ Body in frame — form looks good'; }
  }
}
function manualRep(){
  const B=S.B; if(!B||B.paused) return;
  if(B.tracking) return;   /* AI counts for you — no tapping needed */
  battleRep();
}
function syncCreatureHUD(spawn){
  const B=S.B, w=B.waves[B.waveIdx];
  $('b-sprite').innerHTML=mon(w.sprite,44);
  $('b-ename').textContent=w.name;
  $('b-wave').textContent=(B.infinite||B.waves.length>1)?('Wave '+(B.waveIdx+1)+'/'+(B.infinite?'∞':B.waves.length)):(B.modeName||'Battle');
  $('b-hplbl').textContent=B.noEnergy?'PR TARGET':'Energy';
  $('b-hptxt').textContent=B.noEnergy?(B.reps+' / '+S.user.pr):(B.eEnergy+' / '+w.hp);
  $('b-hpbar').style.width=B.noEnergy?Math.min(100,B.reps/S.user.pr*100)+'%':(B.eEnergy/w.hp*100)+'%';
  if(spawn){
    const hd=$('c-hud'); hd.classList.remove('hit');
    const sp=$('b-sprite'); if(sp){ sp.classList.remove('enter'); void sp.offsetWidth; sp.classList.add('enter'); }
  }
}
function battleRep(){
  const B=S.B; if(!B||B.paused||B.gate||B.resting) return;
  B.reps++; recordPace(B.repTs);
  B.lastRepAt=performance.now();
  B.php=Math.min(100,B.php+2.5); B._warned=false; syncStamina();
  S.user.todayReps++; S.user.cal=Math.round(S.user.cal+0.35);
  questProgress(B.exercise);
  $('b-reps').textContent=B.reps;
  const rp=$('rep-pill'); rp.classList.remove('bump'); void rp.offsetWidth; rp.classList.add('bump');
  SFX.rep(); burstAt($('rep-pill'),'#F59E0B',8);
  const rp2=$('rep-pill');
  if(rp2){ rp2.classList.add('streak'); clearTimeout(B._streakT); B._streakT=setTimeout(()=>rp2.classList.remove('streak'),2600); }
  if(!B.noEnergy){
    const crit=Math.random()<0.14, dmg=crit?3:1;
    B.eEnergy=Math.max(0,B.eEnergy-dmg);
    const hud=$('c-hud'); hud.classList.remove('hit','shake-hard'); void hud.offsetWidth;
    hud.classList.add(crit?'shake-hard':'hit');
    const d=document.createElement('div'); d.className='dmg'+(crit?' crit':''); d.textContent=crit?'SUPER HIT!':'-1';
    d.style.left=(30+Math.random()*40)+'%'; d.style.top='22%';
    $('b-vp').appendChild(d); setTimeout(()=>d.remove(),700);
    if(crit){
      SFX.crit(); quake(); flashScreen();
      burstAt($('c-hud'),'#EF4444',20); shockwave($('c-hud'),'rgba(239,68,68,.9)');
      const fl=document.createElement('div'); fl.className='critflash';
      $('b-vp').appendChild(fl); setTimeout(()=>fl.remove(),400);
    }
    if(B.eEnergy<=0){
      SFX.kill(); quake(); flashScreen(); shockwave($('c-hud')); burstAt($('c-hud'),null,26);
      if(B.infinite){
        B.waveIdx++; B.waves.push(nextHordeWave(B.waveIdx)); B.eEnergy=B.waves[B.waveIdx].hp;
        syncCreatureHUD(true); startRest(B.waves[B.waveIdx].name,B.waves[B.waveIdx].sprite); return;
      }
      else if(B.waveIdx<B.waves.length-1){
        B.waveIdx++; B.eEnergy=B.waves[B.waveIdx].hp;
        syncCreatureHUD(true); startRest(B.waves[B.waveIdx].name,B.waves[B.waveIdx].sprite); return;
      }
      else { finishBattle(true); return; }
    }
  } else if(B.reps===S.user.pr+1){ toast('🔥 NEW RECORD TERRITORY!'); beep(900,.15); }
  if(B.target && B.reps>=B.target){ finishBattle(true); return; }
  syncCreatureHUD();
}
function recordPace(arr){
  const now=performance.now();
  if(arr.length){ const dt=(now-arr[arr.length-1])/1000;
    if(dt>0.5&&dt<6){ S.user.avgRepSec=Math.min(4,Math.max(1.2,S.user.avgRepSec*.8+dt*.2)); } }
  arr.push(now);
}
function nextHordeWave(i){ const p=CHAPTERS[0].pool; const e=p[i%p.length]; return { name:e[0]+(i?' +'+i:''), sprite:e[1], hp:3+Math.round(i*1.4) }; }
function toggleBattleAuto(){
  const B=S.B; if(!B) return;
  if(B.autoI){ clearInterval(B.autoI); B.autoI=null; $('b-auto').textContent='▶'; }
  else { B.autoI=setInterval(()=>battleRep(),1400); B.timers.push(B.autoI); $('b-auto').textContent='⏸'; }
}
function pauseBattle(){
  const B=S.B; if(!B) return;
  B.paused=true;
  openModal(`<div style="display:flex;justify-content:center;margin-bottom:6px"><svg viewBox="0 0 24 24" style="width:54px;height:54px" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="5" width="3.6" height="14" rx="1.4"/><rect x="13.4" y="5" width="3.6" height="14" rx="1.4"/></svg></div><h3 class="hdr">Paused</h3><p>Catch your breath, warrior.</p>
    <button class="btn b-purple" onclick="resumeBattle()">RESUME</button>
    <button class="btn b-ghost" onclick="quitBattle()">LEAVE (no rewards)</button>`);
}
function resumeBattle(){ if(S.B) S.B.paused=false; closeModal(); }
function quitBattle(){ closeModal(); killBattle(); nav(S.B_origin==='campaign'?'scr-campaign':S.B_origin==='home'?'scr-home':'scr-arena'); }
function killBattle(){ if(!S.B) return; stopPrepTimer(); $('restgate')?.classList.remove('on'); const fm=$('form-meter'); if(fm) fm.style.display='none'; S.B.timers.forEach(t=>{clearInterval(t);clearTimeout(t);}); S.B._dead=true; S.B=null; }

/* launchers */
function startEpisode(ci,i){
  closeDrawer(); S.B_origin='campaign';
  const e=S.chapters[ci].eps[i];
  const waves=[];
  const dm=D().hp;
  for(let w=0;w<e.waves;w++) waves.push({ name:e.name+(e.waves>1?' '+(w+1):''), sprite:e.sprite, hp:Math.max(1,Math.ceil(e.hp*dm/e.waves)) });
  makeBattle({ kind:'episode', chap:ci, ep:i, exercise:e.exs[0], waves, modeName:'Episode '+(i+1) });
}
function fightDailyBoss(){
  const b=S.dailyBoss; if(!$('db-name')) return; S.B_origin='home';
  if(b.done){ toast('✓ Boss already defeated today — try the Arena!'); return; }
  makeBattle({ kind:'boss', exercise:'Push-ups', waves:[{name:b.name,sprite:b.sprite,hp:b.hp}], modeName:'Daily Boss' });
}
function startSpeedRun(){ S.B_origin='arena';
  makeBattle({ kind:'speed', exercise:S.speedEx, target:S.speedTarget, waves:[{name:'Practice Buddy',sprite:'dummy',hp:S.speedTarget}], modeName:'Speed Run' }); }
function startHorde(){ S.B_origin='arena';
  makeBattle({ kind:'horde', exercise:S.speedEx, infinite:true, endset:true, waves:[nextHordeWave(0)], modeName:'Horde' }); }
function startMax(){ S.B_origin='arena';
  makeBattle({ kind:'max', exercise:S.speedEx, noEnergy:true, endset:true, waves:[{name:'Practice Buddy',sprite:'dummy',hp:1}], modeName:'Max Reps' }); }

function questProgress(ex){
  S.quests.forEach(q=>{ if(!q.claimed && (q.ex===ex||q.ex==='ANY') && q.prog<q.target){ q.prog++;
    if(q.prog===q.target) toast('Quest ready: '+q.name); } });
}

/* ================= FINISH → VICTORY ================= */
let vicCtx=null;
function finishBattle(win){
  const B=S.B; if(!B) return;
  B.timers.forEach(t=>{clearInterval(t);clearTimeout(t);});
  $('restgate')?.classList.remove('on');
  stopCams();
  const reps=B.reps, sec=Math.max(1,B.sec);
  let stars=0, headline='VICTORY!', bonusXP=0, bonusC=0, newPR=false;
  if(B.kind==='speed'){ const pace=sec/Math.max(1,reps); stars=pace<2?3:pace<3?2:1; bonusC=30;
    S.quests.forEach(q=>{ if(q.id==='q2'&&!q.claimed&&q.prog<q.target){ q.prog++; } }); }
  else if(B.kind==='episode'){
    const e=S.chapters[B.chap].eps[B.ep]; const pace=sec/Math.max(1,reps);
    stars=pace<2.2?3:pace<3.2?2:1;
    e.stars=Math.max(e.stars,stars);
    if(B.chap===S.cur.c && B.ep===S.cur.e){
      if(S.cur.e<17){ S.cur.e++; }
      else if(S.cur.c<S.chapters.length-1){ S.cur.c++; S.cur.e=0; S.viewC=S.cur.c; toast('🏆 Chapter cleared! '+S.chapters[S.cur.c].name+' unlocked!'); }
      else { toast('👑 Campaign complete — you beat every chapter!'); }
    }
    saveCampaign();
    bonusC=15+(B.chap*18+B.ep)*3; bonusXP=e.boss?80:25;
  }
  else if(B.kind==='boss'){ stars=3; if(PROFILE) PROFILE.bosses=(PROFILE.bosses||0)+1; S.dailyBoss.done=true; S.dailyBoss.hp=0; bonusXP=S.dailyBoss.rwXP; bonusC=S.dailyBoss.rwCoins; }
  else if(B.kind==='horde'){ stars=Math.min(3,1+Math.floor(B.waveIdx/2)); headline='SURVIVED '+B.waveIdx+' WAVE'+(B.waveIdx===1?'':'S')+'!'; bonusC=B.waveIdx*12; }
  else if(B.kind==='tutorial'){
    stars=3; headline='FIRST WIN!'; bonusXP=50; bonusC=50;
    if(PROFILE){ PROFILE.tutorial_done=true; saveProfile(); }   /* never replay the tutorial */
  }
  else if(B.kind==='max'){ stars=reps>=S.user.pr?3:reps>=S.user.pr*.7?2:1;
    if(reps>S.user.pr){ S.user.pr=reps; newPR=true; headline='NEW RECORD!'; } bonusC=20; }
  const dm=D();
  const coins=Math.round((reps*2+bonusC)*dm.coin), xp=Math.round((reps*10+bonusXP)*dm.xp);
  addXP(xp); addCoins(coins, $('b-reps'));
  vicCtx={ origin:S.B_origin, headline, stars, reps, sec, coins, win:true, newPR };
  S.B=null;
  if(PROFILE){ PROFILE.total_reps=(PROFILE.total_reps||0)+reps; }
  saveProfile();
  showVictory();
}
function showVictory(){
  goFlow('scr-victory');
  const v=vicCtx;
  $('v-head').textContent=v.headline;
  $('v-head').classList.toggle('lose',!v.win);
  $('v-stars').style.display=v.stars?'block':'none';
  $('v-reps').textContent=v.reps;
  $('v-time').textContent=fmt(v.sec);
  $('v-acc').textContent=ri(90,99)+'%';
  $('v-coins').textContent='+'+v.coins;
  $('v-lvl').textContent=S.user.lvl;
  $('v-xptxt').textContent=S.user.xp+'/'+xpNeed()+' XP';
  $('v-lvlup').style.display=pendingLvlUps?'block':'none';
  const bar=$('v-xpbar'); bar.style.width='6%';
  setTimeout(()=>bar.style.width=(S.user.xp/xpNeed()*100)+'%',150);
  const stars=$('v-stars').children;
  for(let i=0;i<3;i++){ stars[i].className=''; }
  for(let i=0;i<3;i++){
    if(i<v.stars) setTimeout(()=>{ stars[i].classList.add('on'); beep(600+i*140,.12); },300+i*350);
    else stars[i].classList.add('off');
  }
  if(v.win){ confetti(); burstAt(null,null,24); if(v.stars>=3){ setTimeout(()=>{flashScreen(); shockwave(null);},400); } }
  pendingLvlUps=0;
}
function victoryContinue(){
  const o=vicCtx?.origin||'home'; vicCtx=null;
  if(o==='tutorial'){ showPaywall(); return; }
  nav(o==='campaign'?'scr-campaign':o==='arena'?'scr-arena':'scr-home');
}

/* ================= REAL STATS TRACKING ================= */
function statsKey(){ return 'fr_stats_'+(ME?.id||'anon'); }
function loadStats(){
  try{ return JSON.parse(localStorage.getItem(statsKey())||'{}'); }catch(e){ return {}; }
}
function saveStats(o){ try{ localStorage.setItem(statsKey(), JSON.stringify(o)); }catch(e){} }
function todayKey(){ const d=new Date(); return d.toISOString().slice(0,10); }
function logReps(n,exercise){
  const s=loadStats();
  const k=todayKey();
  s.days=s.days||{}; s.days[k]=(s.days[k]||0)+n;
  s.ex=s.ex||{}; if(exercise) s.ex[exercise]=(s.ex[exercise]||0)+n;
  s.total=(s.total||0)+n;
  saveStats(s);
}
function last7(){
  const s=loadStats(), out=[], lbl=[];
  for(let i=6;i>=0;i--){
    const d=new Date(); d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    out.push((s.days&&s.days[k])||0);
    lbl.push(i===0?'Today':['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]);
  }
  return { data:out, labels:lbl };
}
function heat28(){
  const s=loadStats(), out=[];
  for(let i=27;i>=0;i--){
    const d=new Date(); d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    const v=(s.days&&s.days[k])||0;
    out.push(v===0?0:v<15?1:v<40?2:3);
  }
  return out;
}

/* ================= RANK TIERS ================= */
const TIERS=[
  { n:'BRONZE',   min:0,    c1:'#8C5A2B', c2:'#5B3617', ico:'medal',  col:'#CD7F32' },
  { n:'SILVER',   min:900,  c1:'#9AA7B8', c2:'#5F6C7D', ico:'medal',  col:'#C0C0C0' },
  { n:'GOLD',     min:1100, c1:'#E0A526', c2:'#9A6B0C', ico:'medal',  col:'#F59E0B' },
  { n:'PLATINUM', min:1300, c1:'#4FD1C5', c2:'#1F7A70', ico:'shield', col:'#4FD1C5' },
  { n:'DIAMOND',  min:1500, c1:'#60A5FA', c2:'#1D4ED8', ico:'star',   col:'#60A5FA' },
  { n:'MASTER',   min:1800, c1:'#A78BFA', c2:'#6D28D9', ico:'crown',  col:'#A78BFA' },
  { n:'CHAMPION', min:2100, c1:'#F87171', c2:'#991B1B', ico:'crown',  col:'#F87171' },
];
function tierOf(elo){
  let t=TIERS[0];
  for(const x of TIERS){ if(elo>=x.min) t=x; }
  return t;
}
function nextTier(elo){ return TIERS.find(x=>x.min>elo)||null; }
function tierEmblem(t,size){
  const s=size||80;
  return '<svg viewBox="0 0 100 100" style="width:'+s+'px;height:'+s+'px">'+
    '<defs><linearGradient id="tg'+t.n+'" x1="0" y1="0" x2="0" y2="1">'+
    '<stop offset="0" stop-color="'+t.c1+'"/><stop offset="1" stop-color="'+t.c2+'"/></linearGradient></defs>'+
    '<path d="M50 6 L88 24 V54 C88 74 70 88 50 95 C30 88 12 74 12 54 V24 Z" fill="url(#tg'+t.n+')" stroke="rgba(255,255,255,.55)" stroke-width="3"/>'+
    '<path d="M50 18 L76 30 V54 C76 68 64 78 50 84 C36 78 24 68 24 54 V30 Z" fill="rgba(255,255,255,.14)"/>'+
    '<path d="M50 32 l6.5 14.5 15.5 1.6 -11.7 10.4 3.4 15.3 L50 65.6 36.3 73.8 39.7 58.5 28 48.1 43.5 46.5 Z" fill="#fff" opacity=".92"/>'+
    '</svg>';
}

/* ================= COIN FLY ================= */
function flyCoins(fromEl,amount){
  const app=$('app'), r=app.getBoundingClientRect();
  const target=$('ps-coin') || $('h-coins');
  if(!target) return;
  const tb=target.getBoundingClientRect();
  const tx=tb.left-r.left+tb.width/2, ty=tb.top-r.top+tb.height/2;
  let sx=r.width/2, sy=r.height/2;
  if(fromEl?.getBoundingClientRect){ const b=fromEl.getBoundingClientRect(); sx=b.left-r.left+b.width/2; sy=b.top-r.top+b.height/2; }
  const n=Math.min(14, Math.max(5, Math.round((amount||10)/8)));
  for(let i=0;i<n;i++){
    const c=document.createElement('div');
    c.className='flycoin';
    c.innerHTML=ICO.coin(26);
    const jx=sx+(Math.random()*70-35), jy=sy+(Math.random()*50-25);
    c.style.cssText='left:'+jx+'px;top:'+jy+'px;transform:translate(-50%,-50%) scale(.5);opacity:0;transition:none';
    app.appendChild(c);
    requestAnimationFrame(()=>{
      c.style.transition='transform .62s cubic-bezier(.4,0,.25,1), opacity .2s';
      c.style.opacity='1';
      c.style.transform='translate(-50%,-50%) scale(1)';
      setTimeout(()=>{
        c.style.transform='translate('+(tx-jx-13)+'px,'+(ty-jy-13)+'px) scale(.42)';
        c.style.opacity='.9';
      }, 60+i*45);
    });
    setTimeout(()=>{
      c.remove();
      const t=$('ps-coin'); if(t){ t.classList.remove('coin-pop'); void t.offsetWidth; t.classList.add('coin-pop'); }
      beep(880+Math.random()*180,.05);
    }, 760+i*45);
  }
}

/* ================= PRICING / MEMBERSHIPS ================= */
const PRICES={
  CZ:{ sym:'Kč', suf:true, m:149,  y:999,  life:1799, offer:899  },
  SK:{ sym:'€',  m:5.99,  y:39.99, life:74.99, offer:36.99 },
  DE:{ sym:'€',  m:5.99,  y:39.99, life:74.99, offer:36.99 },
  AT:{ sym:'€',  m:5.99,  y:39.99, life:74.99, offer:36.99 },
  FR:{ sym:'€',  m:5.99,  y:39.99, life:74.99, offer:36.99 },
  ES:{ sym:'€',  m:5.99,  y:39.99, life:74.99, offer:36.99 },
  IT:{ sym:'€',  m:5.99,  y:39.99, life:74.99, offer:36.99 },
  NL:{ sym:'€',  m:5.99,  y:39.99, life:74.99, offer:36.99 },
  PL:{ sym:'zł', suf:true, m:26,   y:169,  life:319,  offer:159 },
  GB:{ sym:'£',  m:4.99,  y:34.99, life:64.99, offer:32.99 },
  US:{ sym:'$',  m:6.99,  y:44.99, life:79.99, offer:39.99 },
  CA:{ sym:'C$', m:8.99,  y:59.99, life:109,  offer:54.99 },
  AU:{ sym:'A$', m:9.99,  y:64.99, life:119,  offer:59.99 },
  CH:{ sym:'CHF',suf:true, m:6.90, y:44.90, life:84.90, offer:41.90 },
  SE:{ sym:'kr', suf:true, m:69,   y:449,  life:849,  offer:429 },
  NO:{ sym:'kr', suf:true, m:69,   y:449,  life:849,  offer:429 },
  UA:{ sym:'₴',  suf:true, m:249,  y:1599, life:2999, offer:1499 },
  JP:{ sym:'¥',  m:900,   y:5800, life:10800, offer:5400 },
  BR:{ sym:'R$', m:24.90, y:159,  life:299,  offer:149 },
  IN:{ sym:'₹',  m:299,   y:1899, life:3499, offer:1749 },
  MX:{ sym:'MX$',m:119,   y:749,  life:1399, offer:699 },
};
function priceSet(){ return PRICES[detectRegion()] || PRICES.US; }
function fmtPrice(v){
  const p=priceSet();
  const n = Number.isInteger(v) ? v : v.toFixed(2);
  return p.suf ? (n+' '+p.sym) : (p.sym+n);
}
/* 24h lifetime offer — starts the first time the player sees the paywall */
function offerEndsAt(){
  if(!PROFILE) return Date.now()+864e5;
  if(!PROFILE.offer_started){ PROFILE.offer_started=Date.now(); saveProfile(); }
  return Number(PROFILE.offer_started)+864e5;
}
function offerLeft(){ return Math.max(0, offerEndsAt()-Date.now()); }
let offerTimer=null;
function startOfferCountdown(){
  clearInterval(offerTimer);
  const upd=()=>{
    const ms=offerLeft();
    const hh=String(Math.floor(ms/3600000)).padStart(2,'0');
    const mm=String(Math.floor(ms/60000)%60).padStart(2,'0');
    const ss=String(Math.floor(ms/1000)%60).padStart(2,'0');
    if($('oc-h')) $('oc-h').textContent=hh;
    if($('oc-m')) $('oc-m').textContent=mm;
    if($('oc-s')) $('oc-s').textContent=ss;
    if(ms<=0){ clearInterval(offerTimer); const b=$('offer-banner'); if(b) b.style.display='none'; }
  };
  upd(); offerTimer=setInterval(upd,1000);
}

/* ================= STORY ================= */
const STORY={
  intro:{
    title:'Welcome to the Arena!',
    lines:[
      'In the land of Royale, everyone trains to become champion.',
      'Friendly creatures guard each cave, forest and mountain — and they love a good contest.',
      'Beat them with push-ups, sit-ups and squats. No fighting, just moving!',
      'Every rep you do is one point. Fill the bar, win the match, level up.',
      'Start in Sprout Caves. Finish on top of Dragon Sky.',
    ],
  },
  howItWorks:{
    title:'How to play',
    body:'<b>Your body is the controller.</b> The camera watches you and counts every rep. No tapping needed!<br><br>'+
         '<b>1 rep = 1 point.</b> Empty the creature\'s energy bar before yours runs out.<br><br>'+
         '<b>Keep moving.</b> If you stop for too long your energy drops. Take a breath, then keep going.<br><br>'+
         '<b>Fast reps make combos</b> and sometimes SUPER HITS worth triple points!',
  },
  chapters:[
    { t:'Chapter 1 — Sprout Caves',    s:'Little green Gribs live down here. They are cheeky, quick, and love to race.<br><br>Everyone starts in Sprout Caves. Beat Chief Grib and the next land opens up.' },
    { t:'Chapter 2 — Bubble Caverns',  s:'Bouncy caves full of echoes and giggles. King Rattle keeps the beat down here — match his rhythm and you win.' },
    { t:'Chapter 3 — Web Woods',       s:'Silky webs hang between the trees. Queen Webby has been counting your reps since you walked in. She is very patient!' },
    { t:'Chapter 4 — Sunny Keep',      s:'A warm golden castle where the strongest helpers train all day. Captain Sparky waits at the top of the stairs.' },
    { t:'Chapter 5 — Frosty Peaks',    s:'Cold enough to make your arms tingle. Keep moving to stay warm — the Snow King is watching from the ice.' },
    { t:'Chapter 6 — Dragon Sky',      s:'Above the clouds! Thin air, tired arms, and Big Puff the friendly dragon waiting at the very top. This is the final match.' },
  ],
};

function showStoryModal(title,body,btn,cb){
  openModal('<div style="display:flex;justify-content:center;margin-bottom:6px"><svg viewBox="0 0 24 24" style="width:54px;height:54px" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9a3 3 0 0 1 3 3v12a3 3 0 0 0 3 3H8a3 3 0 0 1-3-3V6"/><path d="M9 8h6M9 12h6M9 16h3"/></svg></div><h3 class="hdr">'+title+'</h3><p style="line-height:1.7">'+body+'</p>'+
    '<button class="btn b-gold" id="story-ok">'+(btn||'CONTINUE')+'</button>');
  $('story-ok').onclick=()=>{ closeModal(); SFX.click(); if(cb) cb(); };
}
/* fires once per chapter, the first time you open it */
function maybeChapterStory(ci){
  if(!PROFILE) return false;
  const seen=(PROFILE.story_seen||'').split(',').filter(Boolean);
  const key='c'+ci;
  if(seen.includes(key)) return false;
  seen.push(key);
  PROFILE.story_seen=seen.join(','); saveProfile();
  const c=STORY.chapters[ci]; if(!c) return false;
  showStoryModal(c.t,c.s,'ENTER');
  return true;
}

/* ================= DIFFICULTY ================= */
const DIFFS={
  easy:      { name:'Chill',      hp:0.7, xp:0.7, coin:0.7, drain:2.0, col:'#10B981', desc:'Half push-ups count. Great for starting out!' },
  normal:    { name:'Normal',    hp:1.0, xp:1.0, coin:1.0, drain:3.5, col:'#8B5CF6', desc:'The normal way to play' },
  hard:      { name:'Tough',      hp:1.4, xp:1.5, coin:1.5, drain:5.0, col:'#F59E0B', desc:'Tougher enemies, better rewards' },
  nightmare: { name:'Super', hp:2.0, xp:2.2, coin:2.2, drain:7.0, col:'#EF4444', desc:'Very hard! Huge XP and coins.' },
};
const DIFF_KEYS=['easy','normal','hard','nightmare'];
/* how forgiving the rep depth is per difficulty.
   enter = how far DOWN you must go, exit = how far UP you must return.
   Easy lets a half-depth push-up count; Nightmare demands full lockout. */
const DIFF_REP={
  easy:      { enter:+28, exit:-22, arm:-22, vis:-0.08 },
  normal:    { enter:0,   exit:0,   arm:0,   vis:0     },
  hard:      { enter:-6,  exit:+5,  arm:+5,  vis:0.03  },
  nightmare: { enter:-12, exit:+8,  arm:+8,  vis:0.06  },
};
function repMod(){ return DIFF_REP[curDiff()] || DIFF_REP.normal; }
function curDiff(){ return DIFFS[PROFILE?.difficulty] ? PROFILE.difficulty : 'easy'; }
function D(){ return DIFFS[curDiff()]; }
function setDiff(k){
  if(!DIFFS[k]) return;
  if(PROFILE){ PROFILE.difficulty=k; saveProfile(); }
  document.querySelectorAll('.diff-pick').forEach(b=>b.classList.toggle('on',b.dataset.d===k));
  document.querySelectorAll('.diff-note').forEach(n=>{ n.textContent=DIFFS[k].desc+' · '+Math.round(DIFFS[k].xp*100)+'% XP'; });
  SFX.click(); burstAt(null);
}
function diffPickerHTML(){
  return '<div class="diff-row">'+DIFF_KEYS.map(k=>{
    const d=DIFFS[k];
    return '<button class="diff-pick'+(curDiff()===k?' on':'')+'" data-d="'+k+'" style="--dc:'+d.col+'" onclick="setDiff(\''+k+'\')">'
      +'<b>'+d.name+'</b><span>'+Math.round(d.xp*100)+'% XP</span></button>';
  }).join('')+'</div><p class="diff-note dim">'+D().desc+' · '+Math.round(D().xp*100)+'% XP</p>';
}

/* ================= PROFILE PHOTO UPLOAD ================= */
function uploadPfp(ev, isOnboarding){
  const file=ev.target.files?.[0];
  if(!file) return;
  const btn = ev.target.previousElementSibling; /* the pfp-edit button, for a loading state */
  if(file.size>8*1024*1024){ toast('Image too big — pick one under 8MB'); SFX.err(); ev.target.value=''; return; }

  const type=(file.type||'').toLowerCase();
  if(type.includes('heic')||type.includes('heif')){
    toast("This photo format isn't supported — try a screenshot or a normal JPG/PNG instead");
    SFX.err(); ev.target.value=''; return;
  }

  let done=false;
  const bail=(msg)=>{
    if(done) return; done=true;
    toast(msg||"Couldn't load that photo — pick a different one or keep your icon");
    SFX.err(); ev.target.value='';
    if(btn) btn.classList.remove('loading');
  };
  const safety=setTimeout(()=>bail("That photo took too long — try a smaller one"), 8000);

  if(btn) btn.classList.add('loading');
  const rd=new FileReader();
  rd.onerror=()=>{ clearTimeout(safety); bail("Couldn't read that file"); };
  rd.onload=()=>{
    const img=new Image();
    img.onerror=()=>{ clearTimeout(safety); bail("That image couldn't be opened — try a different photo"); };
    img.onload=()=>{
      clearTimeout(safety);
      if(done) return; done=true;
      try{
        /* square-crop + downscale to 256px so it fits comfortably in the DB */
        const S2=256, c=document.createElement('canvas'); c.width=S2; c.height=S2;
        const ctx=c.getContext('2d');
        const side=Math.min(img.width,img.height);
        ctx.drawImage(img,(img.width-side)/2,(img.height-side)/2,side,side,0,0,S2,S2);
        const url=c.toDataURL('image/jpeg',0.82);
        if(PROFILE){ PROFILE.avatar_url=url; saveProfile(); }
        paintAvatars();
        if(isOnboarding){
          const ob=$('ob-pfp-view'); if(ob) ob.innerHTML='<img src="'+url+'">';
          document.querySelectorAll('#av-grid-ob .av-pick').forEach(x=>x.classList.remove('on'));
        }
        if(btn) btn.classList.remove('loading');
        SFX.ready(); toast('Photo set!');
      }catch(e){
        console.error('[FitRoyale] avatar processing failed', e);
        if(btn) btn.classList.remove('loading');
        toast("Couldn't process that photo — your icon is fine as-is");
        SFX.err();
      }
    };
    img.src=rd.result;
  };
  rd.readAsDataURL(file);
  ev.target.value='';
}
function bioChanged(){
  const v=$('bio-in').value;
  $('bio-count').textContent=v.length;
  if(PROFILE){ PROFILE.bio=v; saveProfile(); }
}

/* ================= BADGES ================= */
const BADGES=[
  { id:'first',  name:'First Win',  desc:'Finish the tutorial', ico:()=>ICO.bolt(26),   has:()=>!!PROFILE?.tutorial_done },
  { id:'founder',name:'Founder',      desc:'Beta supporter',      ico:()=>ICO.crown(26),  has:()=>PROFILE?.membership==='founder' },
  { id:'c100',   name:'Century',      desc:'100 total reps',      ico:()=>ICO.medal(26,'#F59E0B'), has:()=>(PROFILE?.total_reps||0)>=100 },
  { id:'c500',   name:'Iron Will',    desc:'500 total reps',      ico:()=>ICO.shield(26), has:()=>(PROFILE?.total_reps||0)>=500 },
  { id:'boss',   name:'Big Match Star',  desc:'Win a big match',         ico:()=>ICO.skull(26),  has:()=>(PROFILE?.bosses||0)>=1 },
  { id:'duel',   name:'Duelist',      desc:'Win a live duel',     ico:()=>ICO.swords(26), has:()=>(PROFILE?.duel_wins||0)>=1 },
  { id:'lvl10',  name:'Veteran',      desc:'Reach level 10',      ico:()=>ICO.star(26),   has:()=>S.user.lvl>=10 },
  { id:'elo1200',name:'Ranked',       desc:'Hit 1200 ELO',        ico:()=>ICO.flame(26),  has:()=>myElo()>=1200 },
  { id:'streak7',name:'Unbroken',     desc:'7-day streak',        ico:()=>ICO.coin(26),   has:()=>S.user.streak>=7 },
];
function renderBadges(){
  const w=$('badge-grid'); if(!w) return;
  w.innerHTML='';
  BADGES.forEach(b=>{
    const got=!!b.has();
    const el=document.createElement('div');
    el.className='badge '+(got?'got':'locked');
    el.innerHTML='<div class="bi">'+b.ico()+'</div><b>'+b.name+'</b><span>'+b.desc+'</span>';
    w.appendChild(el);
  });
}

/* ================= AVATARS + ELO ================= */
const AVATARS=['goblin','warlord','chief','skelking','brood','troll','ghoul','wraith','bone','spider','dragonet','slime'];
const myAv=()=> PROFILE?.avatar || 'goblin';
function avHTML(key,size){
  const u=PROFILE?.avatar_url;
  if(u) return '<img src="'+u+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%">';
  return mon(key||'goblin',size);
}
function paintAvatars(){
  const k=myAv();
  try{
  const set=(id,s)=>{ const el=$(id); if(el) el.innerHTML=avHTML(k,s); };
  document.querySelectorAll('.statusbar .avatar').forEach(el=>{ el.innerHTML=avHTML(k,30); });
  document.querySelectorAll('.prof-hero .avatar').forEach(el=>{ el.innerHTML=avHTML(k,56); });
  set('lp-me-av',34); set('d-me-av',46);
  const pv=$('pfp-view');
  if(pv) pv.innerHTML = PROFILE?.avatar_url
    ? '<img src="'+PROFILE.avatar_url+'">'
    : mon(k,62);
  const cav=$('crest-av');
  if(cav) cav.innerHTML = PROFILE?.avatar_url ? '<img src="'+PROFILE.avatar_url+'">' : mon(k,42);
  }catch(e){ console.error('[FitRoyale] paintAvatars', e); }
}
function renderAvPicker(){
  const w=$('av-grid'); if(!w) return;
  w.innerHTML='';
  AVATARS.forEach(k=>{
    const b=document.createElement('button');
    b.className='av-pick'+(myAv()===k?' on':'');
    b.innerHTML=mon(k,38);
    b.onclick=()=>{ if(PROFILE){ PROFILE.avatar=k; PROFILE.avatar_url=null; cacheProfileLocally(); saveProfile(); } paintAvatars(); renderAvPicker(); try{ renderHome(); }catch(e){} beep(660,.08); };
    w.appendChild(b);
  });
}
function myElo(){ return PROFILE?.elo ?? 1000; }
function applyElo(win,live){
  if(!PROFILE) return 0;
  const delta = live ? (win?25:-15) : (win?14:-10);
  PROFILE.elo = Math.max(0,(PROFILE.elo??1000)+delta);
  saveProfile();
  return delta;
}
function resetDuelHud(){
  const d=S.duel; if(!d) return;
  resetCombo();
  $('d-me-name').textContent=PROFILE?.username||'You';
  $('d-me-elo').textContent=myElo();
  $('d-me-av').innerHTML=avHTML(myAv(),46);
  $('d-oname').textContent=d.opp;
  $('d-oelo').textContent=d.oppElo||1000;
  $('d-timer').textContent='0:00'; $('d-timer').classList.remove('low');
  d.my=d.my||0; d.op=d.op||0;
  syncDuelUI(); setLead();
}

/* ================= REALTIME 1v1 (Supabase channels) ================= */
const RT={ ch:null, code:null, host:false, opp:null, started:false, seeking:false, seekT:null };

/* ================= LIVE OPPONENT VIDEO (WebRTC, signaled over the duel channel) =================
   Both players already grant camera access for pose tracking — this reuses that same stream
   as the outgoing video track, so no extra camera permission or connection is needed.
   If the peer connection can't establish (strict NAT, no camera yet, etc.) this fails silently
   and the match continues exactly as before with just the avatar shown — it never blocks play. */
const RTCLink={
  pc:null,
  async ensureLocalStream(){
    if(PoseEngine.stream && PoseEngine.stream.getVideoTracks().length) return PoseEngine.stream;
    if(cams[0] && cams[0].getVideoTracks().length) return cams[0];
    try{
      const s=await navigator.mediaDevices.getUserMedia({ video:{ facingMode:'user' }, audio:false });
      cams.push(s);
      return s;
    }catch(e){ return null; }
  },
  async start(isHost){
    if(!RT.ch || this.pc) return;
    const stream=await this.ensureLocalStream();
    if(!stream) return;
    try{
      const pc=new RTCPeerConnection({ iceServers:[{urls:'stun:stun.l.google.com:19302'}] });
      this.pc=pc;
      stream.getVideoTracks().forEach(t=>pc.addTrack(t,stream));
      pc.ontrack=(e)=>{
        const v=$('d-opp-video');
        if(v){ v.srcObject=e.streams[0]; v.classList.add('live'); }
      };
      pc.onicecandidate=(e)=>{
        if(e.candidate && RT.ch){ try{ RT.ch.send({ type:'broadcast', event:'rtc-ice', payload:{ candidate:e.candidate } }); }catch(err){} }
      };
      pc.onconnectionstatechange=()=>{
        if(['failed','closed','disconnected'].includes(pc.connectionState)){
          const v=$('d-opp-video'); if(v) v.classList.remove('live');
        }
      };
      if(isHost){
        const offer=await pc.createOffer();
        await pc.setLocalDescription(offer);
        RT.ch.send({ type:'broadcast', event:'rtc-offer', payload:{ sdp:offer } });
      }
    }catch(e){ console.warn('[FitRoyale] live video unavailable', e); this.stop(); }
  },
  async onOffer(sdp){
    if(!this.pc) await this.start(false);
    if(!this.pc) return;
    try{
      await this.pc.setRemoteDescription(sdp);
      const answer=await this.pc.createAnswer();
      await this.pc.setLocalDescription(answer);
      RT.ch.send({ type:'broadcast', event:'rtc-answer', payload:{ sdp:answer } });
    }catch(e){ console.warn('[FitRoyale] offer handling failed', e); }
  },
  async onAnswer(sdp){
    if(!this.pc) return;
    try{ await this.pc.setRemoteDescription(sdp); }catch(e){}
  },
  async onIce(candidate){
    if(!this.pc) return;
    try{ await this.pc.addIceCandidate(candidate); }catch(e){}
  },
  stop(){
    if(this.pc){ try{ this.pc.close(); }catch(e){} this.pc=null; }
    const v=$('d-opp-video'); if(v){ v.srcObject=null; v.classList.remove('live'); }
  },
};
const myUid=()=> ME?.id || ('guest-'+Math.random().toString(36).slice(2,9));
function makeCode(){ const A='ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let s=''; for(let i=0;i<5;i++) s+=A[Math.floor(Math.random()*A.length)]; return s; }
function openLobby(){ nav('scr-lobby'); }

function bindRoom(code,isHost){
  RT.code=code; RT.host=isHost; RT.opp=null; RT.started=false;
  $('room-code').textContent=code;
  $('lp-me-name').textContent=PROFILE?.username||'You';
  $('lp-me-av').textContent=(PROFILE?.username||'ME').slice(0,2).toUpperCase();
  $('lp-opp').classList.remove('in');
  $('lp-opp-name').textContent='Waiting…'; $('lp-opp-av').textContent='?';
  $('lp-opp-state').textContent='Not joined';
  $('room-start').style.display='none';
  $('room-hint').textContent=isHost?'Send the code to your friend — the duel starts the instant they join.':'Joined! Starting as soon as the host is ready…';
  goFlow('scr-room');

  const ch=sb.channel('duel-'+code,{ config:{ presence:{ key:myUid() }, broadcast:{ self:false } } });
  ch.on('presence',{event:'sync'},()=>{
      const st=ch.presenceState(); const others=[];
      Object.entries(st).forEach(([k,v])=>{ if(k!==myUid()) others.push(v[0]); });
      if(others.length){
        RT.opp=others[0];
        $('lp-opp').classList.add('in');
        $('lp-opp-name').textContent=RT.opp.name||'Fighter';
        $('lp-opp-av').innerHTML=avHTML(RT.opp.av,34);
        $('lp-opp-state').innerHTML='<span class="live-dot"></span> Ready · LVL '+(RT.opp.lvl||1);
        beep(700,.1);
        /* instant join: the host auto-starts the moment both players are present —
           no manual button, no waiting on each other */
        if(RT.host && !RT.started){
          $('room-hint').textContent='Opponent found — starting now!';
          setTimeout(()=>{ if(RT.host && RT.opp && !RT.started) hostStart(); }, 500);
        }
      } else {
        RT.opp=null; $('lp-opp').classList.remove('in');
        $('lp-opp-name').textContent='Waiting…'; $('lp-opp-state').textContent='Not joined';
      }
    })
   .on('broadcast',{event:'start'},({payload})=>{ beginRealDuel(payload.at); })
   .on('broadcast',{event:'rep'},({payload})=>{ onOppRep(payload.reps); })
   .on('broadcast',{event:'done'},()=>{ if(S.duel&&S.duel.running) endDuel(false); })
   .on('broadcast',{event:'rtc-offer'},({payload})=>{ RTCLink.onOffer(payload.sdp); })
   .on('broadcast',{event:'rtc-answer'},({payload})=>{ RTCLink.onAnswer(payload.sdp); })
   .on('broadcast',{event:'rtc-ice'},({payload})=>{ RTCLink.onIce(payload.candidate); })
   .subscribe(async s=>{ if(s==='SUBSCRIBED') await ch.track({ name:PROFILE?.username||'Fighter', lvl:S.user.lvl, av:myAv(), elo:myElo(), t:Date.now() }); });
  RT.ch=ch;
}
function hostRoom(){ if(!sb){ toast('Connection error'); return; } bindRoom(makeCode(),true); }
function joinRoom(){
  const c=$('join-code').value.trim().toUpperCase();
  if(c.length<5){ toast('Enter the 5-letter code'); return; }
  if(!sb){ toast('Connection error'); return; }
  bindRoom(c,false);
}
function shareCode(){
  const c=RT.code||'';
  try{ navigator.clipboard.writeText(c); toast('Code '+c+' copied — send it to your friend'); }
  catch(e){ toast('Your code is '+c); }
}
function hostStart(){
  if(!RT.ch||!RT.opp) return;
  const at=Date.now()+3200;
  RT.ch.send({ type:'broadcast', event:'start', payload:{ at } });
  beginRealDuel(at);
}
function beginRealDuel(at){
  if(RT.started) return; RT.started=true;
  /* NOTE: camera is acquired exactly once, by PoseEngine.start() inside
     startDuelTracking() when the countdown ends — deliberately NOT warmed up
     here beforehand. A second concurrent getUserMedia() call on the same
     video element (which an early initCam() warm-up would cause) hangs
     indefinitely on many devices, especially iOS — that was silently
     breaking every duel's AI tracking while solo battles (single camera
     request only) worked fine. */
  S.B_origin='arena';
  S.duel={ opp:RT.opp?.name||'Fighter', oppLvl:RT.opp?.lvl||1, oppElo:RT.opp?.elo||1000, target:20, my:0, op:0, sec:0,
           running:false, timers:[], live:true, myTs:[] };
  goFlow('scr-duel');
  $('rt-badge').style.display='block';
  $('d-oname').textContent=S.duel.opp;
  $('d-oav-big').innerHTML=mon(RT.opp?.av||'goblin',46);
  $('d-oelo').textContent=RT.opp?.elo||1000;
  resetDuelHud();
  playVsIntro();
  d_countdown(at);
}
function playVsIntro(){
  const d=S.duel; if(!d) return;
  $('vs-me-av').innerHTML=avHTML(myAv(),58);
  $('vs-me-name').textContent=PROFILE?.username||'You';
  $('vs-me-elo').textContent=myElo()+' ELO';
  $('vs-op-av').innerHTML=mon(RT.opp?.av || d.oppAv || 'goblin',58);
  $('vs-op-name').textContent=d.opp;
  $('vs-op-elo').textContent=(d.oppElo||1000)+' ELO';
  const v=$('vs-intro'); v.classList.remove('gone');
  SFX.ready(); quake();
  setTimeout(()=>{ flashScreen(); burstAt(null,'#F59E0B',22); }, 380);
  setTimeout(()=>{ v.classList.add('gone'); }, 1700);
}
function d_countdown(at){
  const d=S.duel;
  const tick=setInterval(()=>{
    const left=Math.ceil((at-Date.now())/1000);
    if(left>0){ $('d-timer').textContent=left; $('d-hint').textContent='Get in position!'; }
    else{
      clearInterval(tick);
      $('d-timer').textContent='0:00'; $('d-hint').textContent='GO!'; beep(880,.16);
      d.running=true;
      startDuelTracking(d);
      const clock=setInterval(()=>{ if(!S.duel) return; S.duel.sec++; S.user.activeSec++; $('d-timer').textContent=fmt(S.duel.sec); },1000);
      d.timers.push(clock);
    }
  },200);
  d.timers.push(tick);
}
function onOppRep(n){
  const d=S.duel; if(!d||!d.running) return;
  d.op=n; syncDuelUI(); pump('d-oreps');
  const os=document.querySelectorAll('.rank-side')[1]; if(os){ os.classList.remove('hitme'); void os.offsetWidth; os.classList.add('hitme'); }
  setLead(); beep(300,.05,'sine');
  if(d.op>=d.target) endDuel(false);
}
function leaveLobby(){
  try{ RT.ch?.unsubscribe(); }catch(e){}
  RTCLink.stop();
  RT.ch=null; RT.code=null; RT.started=false; RT.opp=null;
  if(RT.seekT){ clearTimeout(RT.seekT); RT.seekT=null; }
  RT.seeking=false;
  nav('scr-arena');
}
/* random matchmaking: wait in shared lobby, pair with earliest waiting player, bot only if truly nobody */
function findMatch(){
  if(!sb){ queueDuel(); return; }
  RT.seeking=true;
  goFlow('scr-queue');
  $('q-search').style.display='block'; $('q-found').style.display='none';
  const myCode=makeCode(), mine={ code:myCode, name:PROFILE?.username||'Fighter', lvl:S.user.lvl, t:Date.now() };
  const lob=sb.channel('fr-lobby',{ config:{ presence:{ key:myUid() } } });
  lob.on('presence',{event:'sync'},()=>{
      if(!RT.seeking) return;
      const st=lob.presenceState(); const others=[];
      Object.entries(st).forEach(([k,v])=>{ if(k!==myUid()&&v[0]?.code) others.push(v[0]); });
      if(!others.length) return;
      others.sort((a,b)=>a.t-b.t);
      const first=others[0];
      RT.seeking=false; clearTimeout(RT.seekT);
      try{ lob.unsubscribe(); }catch(e){}
      /* earliest waiter hosts; the other joins their code */
      if(first.t < mine.t) bindRoom(first.code,false);
      else bindRoom(myCode,true);
      toast('Opponent found — '+(first.name||'Fighter')+'!');
    })
   .subscribe(async s=>{ if(s==='SUBSCRIBED') await lob.track(mine); });
  RT.lob=lob;
  /* nobody after 10s → bot fallback (only then) */
  RT.seekT=setTimeout(()=>{
    if(!RT.seeking) return;
    RT.seeking=false;
    try{ lob.unsubscribe(); }catch(e){}
    toast('No human online — ranked bot matched to your ELO');
    queueDuel(true);
  },10000);
}

/* ================= BOT FALLBACK (only when nobody is online) ================= */
const BOTS=['IronPusher99','VikingSquatter','FitKnight','RepLord_77','SquatWitch','PushCzar','FlexFalcon','PlankPirate'];
const BOT_AVATARS=['goblin','troll','bone','ghoul','wraith','skelking','brood','warlord'];
function queueDuel(fast){
  S.B_origin='arena';
  goFlow('scr-queue');
  $('q-search').style.display='block'; $('q-found').style.display='none';
  S.queueT=setTimeout(()=>{
    const name=BOTS[ri(0,BOTS.length-1)];
    const av=BOT_AVATARS[ri(0,BOT_AVATARS.length-1)];
    const lvl=Math.max(1,S.user.lvl+ri(-2,2));           /* level ±2 of player */
    S.duel={ opp:name, oppAv:av, oppLvl:lvl, oppElo:Math.max(100, myElo()+ri(-90,90)), target:20, my:0, op:0, sec:0, running:false, timers:[],
             tBase:S.user.avgRepSec, fatigued:false, myTs:[] };
    $('q-oname').textContent=name; $('q-olvl').textContent=lvl;
    $('q-oav').innerHTML=mon(av,32);
    $('q-search').style.display='none'; $('q-found').style.display='block';
    beep(700,.14);
  },fast?600:4000);
}
function cancelQueue(){ clearTimeout(S.queueT); S.queueT=null; nav('scr-arena'); }
function beginDuel(){
  const d=S.duel; if(!d) return;
  goFlow('scr-duel');
  $('d-oname').textContent=d.opp;
  $('d-oav-big').innerHTML=mon(d.oppAv||['goblin','troll','bone','ghoul'][ri(0,3)],56);
  resetDuelHud();
  playVsIntro();
  d.tracking=false;
  $('d-hint').textContent='Tap anywhere = 1 rep';
  $('d-tapzone').style.pointerEvents='auto';
  acquireWake();
  startDuelTracking(d);
  d.running=true;
  const clock=setInterval(()=>{ if(!S.duel) return; S.duel.sec++; S.user.activeSec++; $('d-timer').textContent=fmt(S.duel.sec); },1000);
  d.timers.push(clock);
  scheduleBotRep();
}
async function startDuelTracking(d){
  const skipBtn=$('d-skip-ai');
  if(skipBtn){ skipBtn.style.display='none'; clearTimeout(window._duelSkipT);
    window._duelSkipT=setTimeout(()=>{ if(S.duel===d && !d.tracking) skipBtn.style.display='block'; },2500); }
  const ok=await PoseEngine.start('d-video','d-canvas','Push-ups',
    ()=>{ if(S.duel===d && S.duel.running) duelRep(); },
    (type,msg)=>setTrackPill('d-track',null,type,msg));
  clearTimeout(window._duelSkipT);
  if(skipBtn) skipBtn.style.display='none';
  if(S.duel!==d){ if(ok) PoseEngine.stop(); return; }
  if(ok){
    d.tracking=true;
    $('d-hint').textContent='AI is counting your reps';
    $('d-tapzone').style.pointerEvents='none';
    if(RT.host) RTCLink.start(true);   /* camera is warm now — safe to reuse it for the video call */
  } else {
    initCam('d-video','d-fb');
    if(RT.host) RTCLink.start(true);   /* falls back to its own request if AI tracking never got a camera */
  }
}
function forceDuelTapMode(){
  const d=S.duel; if(!d) return;
  clearTimeout(window._duelSkipT);
  try{ PoseEngine.stop(); }catch(e){}
  d.tracking=false;
  $('d-skip-ai').style.display='none';
  $('d-hint').textContent='Tap anywhere = 1 rep';
  $('d-tapzone').style.pointerEvents='auto';
  setTrackPill('d-track',null,'tap','Tap mode — tap screen per rep');
  initCam('d-video','d-fb');
  SFX.click();
}
function duelTap(){
  const d=S.duel; if(!d||!d.running||d.tracking) return;
  duelRep();
}
/* Pace Emulation: T_rep = T_base + random(-0.4, +0.5); fatigue after 60%: +15–30% */
function scheduleBotRep(){
  const d=S.duel; if(!d||!d.running||d.live) return;
  let base=d.tBase*0.92;    /* bots run ~8% faster than your own average — real competition, not a freebie */
  if(d.op>=d.target*0.72 && !d.fatigued){ d.fatigued=true; d.fatigueMul=1+rnd(.08,.18); }
  if(d.fatigued) base*=d.fatigueMul;
  const delay=Math.max(550,(base+rnd(-0.3,0.35))*1000);
  const t=setTimeout(()=>{
    const dd=S.duel; if(!dd||!dd.running) return;
    dd.op++; syncDuelUI();
    setLead(); beep(300,.05,'sine');
    if(dd.op>=dd.target){ endDuel(false); return; }
    scheduleBotRep();
  },delay);
  d.timers.push(t);
}
/* combo: consecutive reps within a window; only visible while you're landing damage */
let comboN=0, comboT=null, comboHide=null;
const COMBO_WINDOW=4200;
function hitCombo(){
  comboN++;
  clearTimeout(comboT); clearTimeout(comboHide);
  const box=$('d-combo'), n=$('d-combo-n'), l=$('d-combo-l');
  if(!box) return;
  if(comboN>=2){
    n.textContent='x'+comboN;
    l.textContent = comboN>=10 ? 'UNSTOPPABLE' : comboN>=6 ? 'ON FIRE' : 'COMBO';
    box.classList.toggle('hot',comboN>=6);
    box.classList.add('show');
    box.classList.remove('pop'); void box.offsetWidth; box.classList.add('pop');
    if(comboN>=6) burstAt(box,'#FF7A45',10);
  }
  /* combo expires if you stop repping */
  comboT=setTimeout(()=>{ comboN=0; hideCombo(); }, COMBO_WINDOW);
  /* popup fades shortly after each hit — it's a damage flash, not a permanent HUD */
  comboHide=setTimeout(hideCombo, 1100);
}
function hideCombo(){ const b=$('d-combo'); if(b) b.classList.remove('show'); }
function resetCombo(){ comboN=0; clearTimeout(comboT); clearTimeout(comboHide); hideCombo(); }

function duelRep(){
  const d=S.duel; if(!d||!d.running) return;
  d.my++; recordPace(d.myTs);
  if(d.live&&RT.ch){ try{ RT.ch.send({ type:'broadcast', event:'rep', payload:{ reps:d.my } }); }catch(e){} }
  d.tBase=S.user.avgRepSec;                     /* bot keeps matching player pace */
  S.user.todayReps++; S.user.cal=Math.round(S.user.cal+0.35);
  questProgress('Push-ups');
  syncDuelUI(); pump('d-myreps');
  hitCombo();
  burstAt($('d-myreps'),'#F59E0B',9);
  SFX.rep(); setLead();
  if(d.my>=d.target){ if(d.live&&RT.ch){ try{ RT.ch.send({type:'broadcast',event:'done',payload:{}}); }catch(e){} } endDuel(true); }
}
let lastLead=0;
function setLead(){
  const d=S.duel; if(!d) return;
  const diff=d.my-d.op, tag=$('d-lead');
  tag.classList.remove('ahead','behind','flash');
  if(diff>0){ tag.textContent='+'+diff+' Reps Ahead'; tag.classList.add('ahead'); }
  else if(diff<0){ tag.textContent=diff+' Reps Behind'; tag.classList.add('behind'); }
  else tag.textContent='EVEN';
  const tb=document.querySelector('.tug-bar');
  if(tb){ tb.classList.toggle('lead-me',diff>0); tb.classList.toggle('lead-op',diff<0); }
  const lead=Math.sign(diff);
  if(lead!==lastLead){ void tag.offsetWidth; tag.classList.add('flash'); lastLead=lead; }
}
function endDuel(win){
  const d=S.duel; if(!d) return;
  d.running=false; d.timers.forEach(t=>{clearInterval(t);clearTimeout(t);});
  stopCams();
  const xp=win?150:50, coins=win?60:15;
  addXP(xp); addCoins(coins, $('d-myreps'));
  const eloD=applyElo(win, !!d.live);
  if(win&&PROFILE){ PROFILE.duel_wins=(PROFILE.duel_wins||0)+1; }
  vicCtx={ origin:'arena', headline:win?'VICTORY!':'DEFEAT', stars:win?3:1,
           reps:d.my, sec:d.sec, coins, win };
  S.duel=null; lastLead=0; RT.started=false; resetCombo();
  try{ RT.ch?.unsubscribe(); }catch(e){} RT.ch=null;
  RTCLink.stop();
  $('rt-badge').style.display='none';
  saveProfile();
  showVictory();
  toast((win?'Victory! ':'Nice try! ')+(eloD>=0?'+':'')+eloD+' ELO · now '+myElo());
}
function abortDuel(){ killDuel(); RTCLink.stop(); nav('scr-arena'); }
function killDuel(){ if(!S.duel) return; S.duel.running=false; S.duel.timers.forEach(t=>{clearInterval(t);clearTimeout(t);}); S.duel=null; lastLead=0; }

/* ================= LEADERBOARD ================= */
function renderLB(){
  /* podium */
  const pod=$('podium'); pod.innerHTML='';
  const order=[1,0,2], cls=['p2','p1','p3'], crowns=[ICO.medal(20,'#CBD5E1'),ICO.crown(24),ICO.medal(20,'#B45309')];
  order.forEach((idx,k)=>{
    const u=S.lb[idx];
    const el=document.createElement('div');
    el.className='pod '+cls[k];
    el.innerHTML=`<div class="crown">${crowns[k]}</div>
      <div class="avatar">${u.name.slice(0,2).toUpperCase()}</div>
      <div class="nm">${u.name}</div><div class="pts">${u.xp.toLocaleString('en-US')} XP</div>
      <div class="stand">${idx+1}</div>`;
    pod.appendChild(el);
  });
  /* table */
  const sc=$('lb-scroll'); sc.innerHTML='';
  let meRow=null;
  S.lb.forEach((u,i)=>{
    if(i<3) return;
    const el=document.createElement('div');
    el.className='lb-row'+(u.me?' me':'');
    el.innerHTML=`<div class="lb-pos">${i+1}</div>
      <div class="avatar">${u.name.slice(0,2).toUpperCase()}</div>
      <div><b>${u.name}${u.me?' ★':''}</b><span class="sub">LVL ${u.me?S.user.lvl:u.lvl}</span></div>
      <div class="lb-xp">${u.xp.toLocaleString('en-US')}</div>`;
    sc.appendChild(el);
    if(u.me) meRow=el;
  });
  if(meRow) setTimeout(()=>meRow.scrollIntoView({block:'center',behavior:'smooth'}),150);
}
/* season countdown */
setInterval(()=>{
  const el=$('season-cd'); if(!el) return;
  let s=Math.max(0,Math.floor((S.seasonEnd-Date.now())/1000));
  const d=Math.floor(s/86400); s%=86400;
  const h=Math.floor(s/3600); s%=3600;
  const m=Math.floor(s/60);
  el.textContent=`${d}d ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
},1000);
/* Simulated Leaderboard Populator: session-scaled version of ΔXP=rnd(50,200) every 4-6h */
setInterval(()=>{
  const cands=S.lb.filter(u=>u.bot&&u.tier==='C');
  for(let k=0;k<3;k++){ const u=cands[ri(0,cands.length-1)]; u.xp+=ri(15,60); }
  S.lb.sort((a,b)=>b.xp-a.xp);
  if($('scr-ranks').classList.contains('active')){
    renderLB();
    document.querySelectorAll('#lb-scroll .lb-row').forEach((r,i)=>{ if(Math.random()<.08) r.classList.add('moved'); });
    setTimeout(()=>document.querySelectorAll('.moved').forEach(r=>r.classList.remove('moved')),900);
  }
},45000);

/* ================= PROFILE ================= */
function profTab(t){
  ['char','ana','set'].forEach(k=>{
    $('p-'+k).style.display=k===t?'block':'none';
    $('pt-'+k).classList.toggle('on',k===t);
  });
  if(t==='ana') renderAnalytics();
}
function setTxt(id,v){ const e=$(id); if(e) e.textContent=v; }
function setHTML(id,v){ const e=$(id); if(e) e.innerHTML=v; }
function renderProfile(){
  setTxt('prof-uname', PROFILE?.username || 'Champion');
  setTxt('p-elo', myElo());
  setTxt('p-lvl', S.user.lvl);
  setTxt('p-title', S.user.title);
  const t=tierOf(myElo());
  setHTML('p-tier', tierEmblem(t,16)+'<span style="color:'+t.col+'">'+t.n+'</span>');
  paintAvatars(); renderAvPicker(); renderBadges();
  const bi=$('bio-in');
  if(bi && document.activeElement!==bi){
    bi.value=PROFILE?.bio||'';
    setTxt('bio-count',(PROFILE?.bio||'').length);
  }
  setTxt('p-total', (PROFILE?.total_reps||0).toLocaleString('en-US'));
  setTxt('p-streak', S.user.streak);
  setTxt('p-coins', S.user.coins.toLocaleString('en-US'));
  setTxt('set-email', ME?.email || '—');
  setTxt('set-build', 'Build '+BUILD);
  const sv=$('set-save');
  if(sv){
    sv.textContent = lastSave.ok===true ? 'Saved ✓' : lastSave.ok===false ? 'On this device only' : 'Ready';
    sv.style.color = lastSave.ok===true ? 'var(--green)' : lastSave.ok===false ? 'var(--gold)' : 'var(--dim)';
  }
  if($('shop-frames')) renderShop('shop-frames',S.shop.frames,'frame');
  if($('shop-titles')) renderShop('shop-titles',S.shop.titles,'title');
  if($('shop-pets'))   renderShop('shop-pets',S.shop.pets,'pet');
  const ss=$('set-sound'); if(ss) ss.classList.toggle('on',S.sound);
  [1,2,3].forEach(n=>{ const e=$('sn'+n); if(e) e.classList.toggle('on',S.sens===n); });
}
function renderShop(elId,items,slot){
  const wrap=$(elId); wrap.innerHTML='';
  items.forEach(it=>{
    const eq=(slot==='frame'&&S.user.frame===it.id)||(slot==='title'&&S.user.title===it.name.toUpperCase())||(slot==='pet'&&S.user.pet===it.id);
    const el=document.createElement('div');
    el.className='gear-row';
    el.innerHTML=`<div class="gear-em">${it.ico()}</div>
      <div class="grow"><b>${it.name}</b><span class="sub">${it.cost?(it.cost+' coins'):'Default'}</span></div>
      ${eq?'<span class="own">EQUIPPED ✓</span>':
        it.own?`<button class="btn b-purple b-sm" onclick="equip('${slot}','${it.id}','${it.name}')">Equip</button>`:
        `<button class="btn b-gold b-sm" onclick="buy('${slot}','${it.id}')">Buy</button>`}`;
    wrap.appendChild(el);
  });
}
function buy(slot,id){
  const pool=slot==='frame'?S.shop.frames:slot==='title'?S.shop.titles:S.shop.pets;
  const it=pool.find(x=>x.id===id);
  if(!it||it.own) return;
  if(S.user.coins<it.cost){ toast('Not enough coins — fight more bosses!'); beep(200,.15); return; }
  S.user.coins-=it.cost; it.own=true;
  equip(slot,id,it.name);
  confetti(); beep(880,.14); saveProfile();
  toast('Unlocked: '+it.name+'!');
}
function equip(slot,id,name){
  if(slot==='frame') S.user.frame=id;
  if(slot==='title') S.user.title=name.toUpperCase();
  if(slot==='pet') S.user.pet=id;
  renderProfile();
}
function renderAnalytics(){
  const s=loadStats();
  const w=last7();
  const max=Math.max(...w.data,10);
  const ch=$('ana-chart'); if(ch){
    ch.innerHTML='';
    w.data.forEach((v,i)=>{
      const c=document.createElement('div'); c.className='c'+(i===6?' td':'');
      c.innerHTML='<div class="b" style="height:'+Math.max(4,v/max*100)+'%"></div><div class="d">'+w.labels[i]+'</div>';
      c.title=v+' reps';
      ch.appendChild(c);
    });
  }
  const di=$('ana-dist'); if(di){
    di.innerHTML='';
    const ex=s.ex||{};
    const tot=Object.values(ex).reduce((a,b)=>a+b,0);
    const rows=Object.entries(ex).sort((a,b)=>b[1]-a[1]);
    if(!rows.length){
      di.innerHTML='<p class="dim" style="font-size:12px;font-weight:800">No sessions yet — finish a fight to see your split.</p>';
    } else {
      rows.forEach(([n,v])=>{
        const p=Math.round(v/tot*100);
        di.innerHTML+='<div class="dist-row"><div class="t"><span>'+n+'</span><span class="dim">'+v+' reps · '+p+'%</span></div>'+
          '<div class="pbar fill-p"><i style="width:'+p+'%"></i></div></div>';
      });
    }
  }
  const he=$('ana-heat'); if(he){
    he.innerHTML='';
    heat28().forEach(lvl=>{ he.innerHTML+='<i class="'+(lvl?'on'+lvl:'')+'"></i>'; });
  }
  if($('p-total')) $('p-total').textContent=(s.total||PROFILE?.total_reps||0).toLocaleString('en-US');
}
function toggleSound(){ S.sound=!S.sound; $('set-sound').classList.toggle('on',S.sound); if(S.sound) beep(660,.1); }
function setSens(n){ S.sens=n; [1,2,3].forEach(k=>$('sn'+k).classList.toggle('on',k===n)); toast('Pose sensitivity: '+n); }

/* ================= POSE ENGINE (MediaPipe) ================= */
/* ---------------------------------------------------------------------
   POSE TRACKING — MediaPipe Tasks Vision (PoseLandmarker)
   The old "@mediapipe/pose" legacy package was officially discontinued
   by Google in March 2023 and hasn't been updated since — that's almost
   certainly why tracking was unreliable no matter how the thresholds
   were tuned. This uses Google's current, actively maintained API.
   The output is the SAME 33-point BlazePose landmark format, so all the
   rep-counting/drawing logic below (checkRep, drawPose) is unchanged.
--------------------------------------------------------------------- */
const TASKS_VISION_VER='0.10.14';
const WASM_URL='https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@'+TASKS_VISION_VER+'/wasm';
const MODEL_URL='https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';
let _visionMod=null;
const EX_CFG={
  /* enterA = "down"/contracted angle, exitA = "up"/extended angle, armA = hold-here-to-start */
  'Push-ups':{ L:[11,13,15], R:[12,14,16], enterA:100, exitA:140, armA:140, joint:'Elbow', plant:true  },
  'Squats':  { L:[23,25,27], R:[24,26,28], enterA:100, exitA:155, armA:155, joint:'Knee',  plant:false },
  'Sit-ups': { L:[11,23,25], R:[12,24,26], enterA:95,  exitA:140, armA:140, joint:'Hip',   plant:false },
};
function getAngle(A,B,C){
  const r=Math.atan2(C.y-B.y,C.x-B.x)-Math.atan2(A.y-B.y,A.x-B.x);
  let d=Math.abs(r*180/Math.PI);
  return d>180?360-d:d;
}
function loadScript(src,ms){   /* still used by other CDN scripts elsewhere in the app */
  return new Promise((res,rej)=>{
    const s=document.createElement('script');
    const to=setTimeout(()=>{ s.remove(); rej(new Error('timeout '+src)); },ms||9000);
    s.src=src;
    s.onload=()=>{ clearTimeout(to); res(); };
    s.onerror=()=>{ clearTimeout(to); rej(new Error('fail '+src)); };
    document.head.appendChild(s);
  });
}
const PoseEngine={
  state:'idle', landmarker:null, stream:null, rafId:null,
  target:null, /* {video,canvas,ctx,cfg,onRep,onStatus, phase, lastRep, lowVisSince, ...} */
  async load(){
    if(this.state==='ready') return true;
    if(this.state==='loading') return this._loadP;
    this.state='loading';
    this._loadP=(async()=>{
      try{
        if(!_visionMod){
          _visionMod=await import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@'+TASKS_VISION_VER);
        }
        const { PoseLandmarker, FilesetResolver } = _visionMod;
        const files=await FilesetResolver.forVisionTasks(WASM_URL);
        this.landmarker=await PoseLandmarker.createFromOptions(files, {
          baseOptions:{ modelAssetPath:MODEL_URL, delegate:'GPU' },
          runningMode:'VIDEO',
          numPoses:1,
        });
        this.state='ready';
        return true;
      }catch(e){
        console.error('[FitRoyale] pose model load failed', e);
        this.state='failed';
        return false;
      }
    })();
    return this._loadP;
  },
  async start(videoId,canvasId,exercise,onRep,onStatus){
    const video=$(videoId), canvas=$(canvasId);
    onStatus('load','Loading AI model…');
    try{
      return await this._startInner(video,canvas,exercise,onRep,onStatus);
    }catch(e){
      console.error('[FitRoyale] PoseEngine.start failed', e);
      onStatus('tap','Tap mode — AI unavailable');
      return false;
    }
  },
  async _startInner(video,canvas,exercise,onRep,onStatus){
    const withTimeout=(p,ms,label)=>Promise.race([
      p, new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout: '+label)),ms))
    ]);
    /* CAMERA FIRST so the screen is never black while the model loads */
    if(!navigator.mediaDevices?.getUserMedia){ onStatus('tap','Tap mode — no camera'); return false; }
    try{
      this.stream=await withTimeout(
        navigator.mediaDevices.getUserMedia({ video:{ facingMode:'user', width:1280, height:720 } }),
        12000, 'camera permission'
      );
    }catch(e){ onStatus('tap','Tap mode — camera blocked'); return false; }
    video.srcObject=this.stream;
    video.play().catch(()=>{});
    video.classList.add('live');
    onStatus('load','Camera on — loading AI…');
    if(this.state==='loading'){
      if(!this._loadStartedAt) this._loadStartedAt=Date.now();
      if(Date.now()-this._loadStartedAt>15000){ this.state='idle'; this._loadP=null; }
    }
    if(this.state==='idle') this._loadStartedAt=Date.now();
    let ok=false;
    try{ ok = await withTimeout(this.load(), 16000, 'model load'); }
    catch(e){ this.state='failed'; ok=false; }
    if(!ok){
      onStatus('tap','Tap mode — AI unavailable');
      cams.push(this.stream); this.stream=null;
      return false;
    }
    this.target={ video, canvas, ctx:canvas.getContext('2d'),
      cfg:EX_CFG[exercise]||EX_CFG['Push-ups'], onRep, onStatus,
      phase:'READY', lastRep:0, lowVisSince:0, armed:false, extSince:0, aMin:180, aMax:0, calib:false,
      lowSince:0, seenSince:0, downSince:0, upSince:0, downAt:0, _firstResult:false,
      jointName:(EX_CFG[exercise]||EX_CFG['Push-ups']).joint };

    clearTimeout(this._resultWatchdog);
    this._resultWatchdog=setTimeout(()=>{
      if(this.target && !this.target._firstResult){
        console.warn('[FitRoyale] pose model produced no results in time — falling back to tap mode');
        const vId=video.id, fbId=vId==='d-video'?'d-fb':'b-fb';
        onStatus('tap','Tap mode — AI unavailable');
        try{ this.stop(); }catch(e){}
        initCam(vId, fbId);
        if(vId==='d-video' && S.duel){ S.duel.tracking=false; $('d-hint').textContent='Tap anywhere = 1 rep'; $('d-tapzone').style.pointerEvents='auto'; }
        if(vId==='b-video' && S.B){ S.B.tracking=false; $('rep-mode-lbl').textContent='TAP = 1 REP'; $('b-auto').style.display='flex'; $('b-fb').style.display='none'; }
      }
    }, 15000);

    /* manual per-frame loop — Tasks Vision VIDEO mode is a direct call, no callback wrapper needed */
    const loop=()=>{
      const t=this.target;
      if(!t || !this.landmarker){ this.rafId=null; return; }
      if(video.readyState>=2 && video.videoWidth){
        try{
          const res=this.landmarker.detectForVideo(video, performance.now());
          const lm=res?.landmarks?.[0]||null;
          if(!t._firstResult && lm){ t._firstResult=true; onStatus('ai','AI tracking ON'); }
          this.drawPose(lm,t);
          if(lm) this.checkRep(lm,t);
          else this.lowVis(t);
        }catch(e){ console.error('[FitRoyale] detectForVideo failed',e); }
      }
      this.rafId=requestAnimationFrame(loop);
    };
    this.rafId=requestAnimationFrame(loop);
    onStatus('load','Warming up the camera AI…');
    return true;
  },
  drawPose(lm,t){
    const {canvas,ctx,video}=t;
    const dpr=window.devicePixelRatio||1;
    const cw=canvas.clientWidth, chh=canvas.clientHeight;
    if(!cw||!video.videoWidth) return;
    if(canvas.width!==Math.round(cw*dpr)){ canvas.width=Math.round(cw*dpr); canvas.height=Math.round(chh*dpr); }
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,cw,chh);
    if(!lm) return;
    const vw=video.videoWidth, vh=video.videoHeight;
    const sc=Math.max(cw/vw, chh/vh);            /* object-fit: cover */
    const ox=(cw-vw*sc)/2, oy=(chh-vh*sc)/2;
    const P=l=>({ x:l.x*vw*sc+ox, y:l.y*vh*sc+oy, v:l.visibility??0 });
    const vis=i=>(lm[i]?.visibility??0)>0.45;
    /* body-only connections (skip the noisy face mesh) */
    const BONES=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,31],[28,32]];
    ctx.globalAlpha=0.72;                        /* subtle transparency over the body */
    ctx.lineCap='round'; ctx.lineJoin='round';
    ctx.strokeStyle='#F59E0B'; ctx.lineWidth=5;
    ctx.shadowColor='rgba(245,158,11,.85)'; ctx.shadowBlur=10;
    ctx.beginPath();
    BONES.forEach(([a,b])=>{
      if(!vis(a)||!vis(b)) return;
      const A=P(lm[a]), B=P(lm[b]);
      ctx.moveTo(A.x,A.y); ctx.lineTo(B.x,B.y);
    });
    ctx.stroke();
    ctx.shadowBlur=0;
    const JOINTS=[0,11,12,13,14,15,16,23,24,25,26,27,28];
    JOINTS.forEach(i=>{
      if(!vis(i)) return;
      const p=P(lm[i]);
      ctx.fillStyle='#8B5CF6';
      ctx.beginPath(); ctx.arc(p.x,p.y,5.5,0,7); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.9)';
      ctx.beginPath(); ctx.arc(p.x,p.y,2,0,7); ctx.fill();
    });
    ctx.globalAlpha=1;
  },
  lowVis(t){
    const now=performance.now();
    if(!t.lowVisSince) t.lowVisSince=now;
    if(now-t.lowVisSince>1200) t.onStatus('warn','Step back — full body not in frame');
  },
  checkRep(lm,t){
    const c=t.cfg;
    const rm=repMod();
    const visL=avgVis(lm,c.L), visR=avgVis(lm,c.R);
    const bestVis=Math.max(visL,visR);
    const now=performance.now();

    /* --- can we see the working limb at all? that's the only hard requirement --- */
    if(bestVis < 0.25){
      t.lowSince=t.lowSince||now;
      if(now-t.lowSince>1500){ t.armed=false; t.extSince=0; }
      t.onStatus('warn','Move back so your whole body is in frame');
      return;
    }
    t.lowSince=0;

    const useL=(visL>=visR);
    const side=useL?c.L:c.R;
    const angle=getAngle(lm[side[0]],lm[side[1]],lm[side[2]]);

    /* --- Real body-orientation check for push-ups: shoulders and hips must be at
       roughly the SAME height in frame (a lying/plank posture), not one far above
       the other (standing). This is what actually stops walking/standing from
       ever registering as reps — the old check only looked at wrist height,
       which a standing or walking person satisfies easily. */
    let inPlankPosture=true;
    if(c.plant){
      const shMidY=(lm[11].y+lm[12].y)/2, hipMidY=(lm[23].y+lm[24].y)/2;
      inPlankPosture = Math.abs(shMidY-hipMidY) < 0.24;
    }

    /* --- ARMING: forgiving on angle/timing, but never skips the posture check. --- */
    if(!t.armed){
      let looksReady = angle >= (c.armA - 50 + rm.arm) && inPlankPosture;
      if(looksReady){
        if(!t.extSince) t.extSince=now;
        const held=now-t.extSince;
        if(held>350){
          t.armed=true; t.aMin=angle; t.aMax=angle; t.calib=false;
          t.onStatus('ai','IN POSITION — GO!'); beep(700,.1);
        } else t.onStatus('load','Hold still…');
      } else {
        t.extSince=0;
        t.onStatus('load', c.plant && !inPlankPosture ? 'Get down on the floor — I can tell you\'re still standing' :
          c.plant?'Get into push-up position':'Get to the start position');
      }
      /* mercy: if we can see you clearly for 4s but never "armed", arm anyway —
         BUT ONLY once you're actually in a plank posture. Mercy skips waiting
         for the hold-still timer, never skips verifying you're even down on
         the floor — that gap was letting simple standing/walking auto-arm. */
      if(inPlankPosture){
        t.seenSince=t.seenSince||now;
        if(now-t.seenSince>4000){
          t.armed=true; t.aMin=angle; t.aMax=angle; t.calib=false;
          t.onStatus('ai','Tracking you — go!'); beep(700,.1);
        }
      } else {
        t.seenSince=0;
      }
      return;
    }

    /* if a plank-mode player stands back up mid-set, disarm rather than keep counting */
    if(c.plant && !inPlankPosture){
      t.armed=false; t.extSince=0; t.seenSince=0; t.calib=false; t.aMin=180; t.aMax=0;
      t.onStatus('load','Get back down into push-up position');
      return;
    }

    /* --- ADAPTIVE RANGE: learn the player's actual range of motion ---
       (dwell-time + rep-duration checks further down already reject a fast
       phone-shake, so we don't need a separate whole-body-drift filter here —
       that filter was blocking genuine push-up motion, since a real push-up
       facing the camera legitimately moves the torso toward the lens.) */
    if(angle<t.aMin) t.aMin=angle;
    if(angle>t.aMax) t.aMax=angle;
    t.aMin += 0.04; t.aMax -= 0.04;
    const range=t.aMax-t.aMin;

    t.onStatus('ai','AI · '+c.joint+' '+Math.round(angle)+'°');
    const MIN_RANGE = curDiff()==='easy' ? 15 : curDiff()==='normal' ? 30 : curDiff()==='hard' ? 40 : 50;
    if(range < MIN_RANGE){
      if(!t.calib){ t.onStatus('load','Do one full rep so I can learn your range…'); }
      return;
    }
    if(!t.calib){ t.calib=true; beep(880,.08); t.onStatus('ai','Range set — counting!'); }

    const frac = curDiff()==='easy' ? 0.45 : curDiff()==='normal' ? 0.32 : 0.26;
    const downAt = t.aMin + range*frac;
    const upAt   = t.aMax - range*frac;

    /* --- DWELL: you must HOLD each end briefly. A wobble spikes and vanishes;
           a real rep sits at the bottom and at the top. ------------------- */
    const DOWN_DWELL=180, UP_DWELL=140;
    if(angle<=downAt){
      t.downSince = t.downSince || now;
      if(t.phase!=='DOWN' && now-t.downSince>=DOWN_DWELL){
        t.phase='DOWN'; t.downAt=now;
      }
    } else { t.downSince=0; }

    if(angle>=upAt){
      t.upSince = t.upSince || now;
      if(t.phase==='DOWN' && now-t.upSince>=UP_DWELL){
        const repMs = now - (t.downAt||now);
        /* a human rep takes at least ~0.45s and at most ~8s */
        if(repMs>=450 && repMs<=8000 && now-t.lastRep>420){
          t.lastRep=now; t.phase='READY'; t.upSince=0; t.downSince=0; t.onRep();
        } else if(repMs>8000){
          t.phase='READY'; t.upSince=0; t.downSince=0;   /* too slow, discard */
        }
      }
    } else { t.upSince=0; }
  },
  stop(){
    const t=this.target;
    this.target=null;
    clearTimeout(this._resultWatchdog);
    if(this.rafId){ cancelAnimationFrame(this.rafId); this.rafId=null; }
    this.stream?.getTracks().forEach(tr=>tr.stop());
    this.stream=null;
    if(t){ try{ t.video.classList.remove('live'); t.video.srcObject=null; t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height); }catch(e){} }
  },
};
function avgVis(lm,ids){ return ids.reduce((s,i)=>s+(lm[i]?.visibility??0),0)/ids.length; }
/* warm up the model download in the background */
setTimeout(()=>PoseEngine.load(),1200);

/* ================= SUPABASE AUTH & CLOUD SAVE ================= */
const BUILD='39.0';
/* A previously installed service worker (from the old app package) caches index.html
   cache-first and will happily serve week-old code forever. Remove it and wipe caches. */
(async function purgeStaleCache(){
  try{
    if('serviceWorker' in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      if(regs.length){
        await Promise.all(regs.map(r=>r.unregister()));
        console.warn('[FitRoyale] removed '+regs.length+' old service worker(s)');
      }
    }
    if(window.caches){
      const keys=await caches.keys();
      if(keys.length){
        await Promise.all(keys.map(k=>caches.delete(k)));
        console.warn('[FitRoyale] cleared caches:',keys);
        /* if we just removed a cache that served this page, reload once to get fresh code */
        if(!sessionStorage.getItem('fr_purged')){
          sessionStorage.setItem('fr_purged','1');
          location.reload();
        }
      }
    }
  }catch(e){ console.warn('[FitRoyale] cache purge failed',e); }
})();
console.log('[FitRoyale] build',BUILD);
const SB_URL='https://yxtfhqkrhxpkaaexzvcn.supabase.co';
const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4dGZocWtyaHhwa2FhZXh6dmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2Mjg0ODgsImV4cCI6MjEwMzIwNDQ4OH0.y4dMu9spDHMZBNr3uAfzmNzHKxJCuujVY6QmqxNteOg';
let sb=null, ME=null, PROFILE=null;
const STAY_KEY='fr_stay';
function hasStoredSession(){
  try{
    const has=s=>Object.keys(s).some(k=>k.startsWith('sb-')&&k.includes('auth-token'));
    return has(localStorage)||has(sessionStorage);
  }catch(e){ return false; }
}
function stayLoggedIn(){
  try{ return localStorage.getItem(STAY_KEY)!=='0'; }catch(e){ return true; }
}
/* When "stay logged in" is ON we persist to localStorage (survives closing the app).
   When OFF we use sessionStorage, so the session dies with the tab/app. */
const authStorage={
  getItem(k){ try{ return (stayLoggedIn()?localStorage:sessionStorage).getItem(k); }catch(e){ return null; } },
  setItem(k,v){ try{ (stayLoggedIn()?localStorage:sessionStorage).setItem(k,v); }catch(e){} },
  removeItem(k){ try{ localStorage.removeItem(k); sessionStorage.removeItem(k); }catch(e){} },
};
try{
  sb=window.supabase?.createClient(SB_URL,SB_KEY,{
    auth:{ persistSession:true, autoRefreshToken:true, detectSessionInUrl:true, storage:authStorage }
  });
}catch(e){ sb=null; }
let inRecovery = /type=recovery/.test(location.hash) || /type=recovery/.test(location.search);
sb?.auth.onAuthStateChange((event)=>{
  if(event==='PASSWORD_RECOVERY'){
    inRecovery=true;
    ldDone();
    document.body.classList.add('locked');
    goFlow('scr-newpass');
  }
});

function toggleStay(){
  const on=!stayLoggedIn();
  try{ localStorage.setItem(STAY_KEY, on?'1':'0'); }catch(e){}
  paintStay();
  SFX.click();
  if(!on){
    /* moving to session-only: shift any stored auth keys out of localStorage */
    try{
      Object.keys(localStorage).filter(k=>k.startsWith('sb-')).forEach(k=>{
        sessionStorage.setItem(k, localStorage.getItem(k));
        localStorage.removeItem(k);
      });
    }catch(e){}
  } else {
    try{
      Object.keys(sessionStorage).filter(k=>k.startsWith('sb-')).forEach(k=>{
        localStorage.setItem(k, sessionStorage.getItem(k));
        sessionStorage.removeItem(k);
      });
    }catch(e){}
  }
}
function paintStay(){
  const r=$('stay-row'); if(!r) return;
  const on=stayLoggedIn();
  r.classList.toggle('on',on);
  $('stay-sub').textContent = on
    ? 'This device only — skip the login screen next time'
    : "You'll be asked to log in again when you close the app";
}
let authMode='login';
function authTab(m){
  authMode=m;
  $('at-login').classList.toggle('on',m==='login');
  $('at-signup').classList.toggle('on',m==='signup');
  $('auth-go').textContent=m==='signup'?'CREATE ACCOUNT':'LOG IN';
  $('auth-err').textContent='';
}
let pendingSignupEmail=null;
async function doAuth(){
  if(!sb){ $('auth-err').textContent='Connection error — try again.'; return; }
  const email=$('in-email').value.trim(), pass=$('in-pass').value;
  if(!email||!pass){ $('auth-err').textContent='Fill in email and password.'; return; }
  $('auth-go').textContent='…'; $('auth-err').textContent='';
  try{
    if(authMode==='signup'){
      const { data, error } = await sb.auth.signUp({ email, password:pass });
      if(error) throw error;
      if(!data.session){
        pendingSignupEmail=email;
        $('cm-email').textContent=email;
        goFlow('scr-checkmail');
        return;
      }
      ME=data.user;
    } else {
      const { data, error } = await sb.auth.signInWithPassword({ email, password:pass });
      if(error) throw error;
      ME=data.user;
    }
    await loadProfile();
    enterApp();
  }catch(e){
    const msg=(e.message||'Login failed');
    if(msg.toLowerCase().includes('rate limit')){
      $('auth-err').textContent='Too many emails sent — wait a bit and try again, or check your inbox for one already sent.';
    } else if(msg.toLowerCase().includes('email not confirmed')){
      $('auth-err').textContent='Please confirm your email first — check your inbox.';
    } else {
      $('auth-err').textContent=msg.replace('AuthApiError: ','');
    }
  }
  finally{ $('auth-go').textContent=authMode==='signup'?'CREATE ACCOUNT':'LOG IN'; }
}
async function oauth(provider){
  if(!sb){ $('auth-err').textContent='Connection error — try again.'; return; }
  SFX.click();
  try{
    const { error } = await sb.auth.signInWithOAuth({
      provider,
      options:{ redirectTo: location.origin }
    });
    if(error) throw error;
  }catch(e){
    const nice=provider.charAt(0).toUpperCase()+provider.slice(1);
    const m=(e.message||'').toLowerCase();
    $('auth-err').textContent = (m.includes('provider')||m.includes('not enabled')||m.includes('unsupported'))
      ? nice+' sign-in isn\'t switched on for this app yet — use email for now.'
      : 'Could not start '+nice+' sign-in. Try email instead.';
    SFX.err();
  }
}
let pendingResetEmail=null;
function goForgot(){
  SFX.click();
  $('fp-email').value=$('in-email').value.trim();
  $('fp-err').textContent='';
  goFlow('scr-forgot');
}
async function sendReset(){
  if(!sb){ $('fp-err').textContent='Connection error — try again.'; return; }
  const email=$('fp-email').value.trim();
  if(!email){ $('fp-err').textContent='Enter your email.'; return; }
  $('fp-go').textContent='…'; $('fp-err').textContent='';
  try{
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin+'/reset' });
    if(error) throw error;
    pendingResetEmail=email;
    $('rs-email').textContent=email;
    goFlow('scr-resetsent');
    SFX.ready();
  }catch(e){
    const msg=(e.message||'').toLowerCase();
    $('fp-err').textContent = msg.includes('rate limit')
      ? 'Too many attempts — wait a bit and try again.'
      : 'Could not send reset email — check the address and try again.';
    SFX.err();
  } finally{ $('fp-go').textContent='SEND RESET LINK'; }
}
async function resendReset(){
  if(!pendingResetEmail) return;
  const b=$('resend-reset-btn'); b.textContent='SENDING…';
  try{
    const { error } = await sb.auth.resetPasswordForEmail(pendingResetEmail, { redirectTo: location.origin+'/reset' });
    if(error) throw error;
    toast('Reset link resent — check your inbox');
  }catch(e){ toast('Could not resend — wait a few minutes'); }
  finally{ b.textContent='RESEND LINK'; }
}
function pwStrength(){
  const v=$('np-pass1').value;
  let score=0;
  if(v.length>=8) score++;
  if(/[A-Z]/.test(v)&&/[a-z]/.test(v)) score++;
  if(/[0-9]/.test(v)) score++;
  if(/[^A-Za-z0-9]/.test(v)) score++;
  const cols=['#EF4444','#F59E0B','#FCD34D','#10B981'];
  [1,2,3,4].forEach(i=>{ $('ps'+i).style.background = i<=score ? cols[score-1] : ''; });
}
async function setNewPassword(){
  const p1=$('np-pass1').value, p2=$('np-pass2').value;
  $('np-err').textContent='';
  if(p1.length<8){ $('np-err').textContent='Password needs at least 8 characters.'; return; }
  if(p1!==p2){ $('np-err').textContent="Passwords don't match."; return; }
  $('np-go').textContent='…';
  try{
    const { error } = await sb.auth.updateUser({ password:p1 });
    if(error) throw error;
    SFX.win(); confetti();
    openModal('<div style="display:flex;justify-content:center;margin-bottom:6px"><svg viewBox="0 0 24 24" style="width:54px;height:54px" fill="none" stroke="#10B981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16 9.5"/></svg></div><h3 class="hdr">Password updated!</h3><p>You\'re signed in with your new password.</p><button class="btn b-purple" onclick="closeModal();afterPasswordReset()">CONTINUE</button>');
  }catch(e){
    $('np-err').textContent=(e.message||'Could not update password — the link may have expired. Request a new one.');
    SFX.err();
  } finally{ $('np-go').textContent='UPDATE PASSWORD'; }
}
async function afterPasswordReset(){
  inRecovery=false;
  try{ history.replaceState(null,'',location.pathname); }catch(e){}
  try{ const { data } = await sb.auth.getSession(); ME=data?.session?.user||ME; await loadProfile(); enterApp(); }
  catch(e){ goFlow('scr-auth'); }
}
function backToLogin(){
  authTab('login'); paintStay();
  if(pendingSignupEmail) $('in-email').value=pendingSignupEmail;
  goFlow('scr-auth');
}
async function resendConfirm(){
  if(!sb||!pendingSignupEmail) return;
  const b=$('resend-btn'); b.textContent='SENDING…';
  try{
    const { error } = await sb.auth.resend({ type:'signup', email:pendingSignupEmail });
    if(error) throw error;
    toast('Email resent — check your inbox');
  }catch(e){
    toast(e.message?.toLowerCase().includes('rate limit') ? 'Too many resends — wait a few minutes' : 'Could not resend — try again soon');
  }
  finally{ b.textContent='RESEND EMAIL'; }
}
async function loadProfile(){
  if(!sb||!ME) return;
  const emailName=(ME.email||'').split('@')[0].replace(/[^a-zA-Z0-9_]/g,'').slice(0,16);
  const DEFAULTS={ id:ME.id, username:ME.user_metadata?.username || emailName || 'Champion', level:1, xp:0, coins:200,
    streak:1, pr:0, total_reps:0, tutorial_done:false, membership:null,
    elo:1000, bio:'', avatar:'goblin', avatar_url:null, duel_wins:0, bosses:0,
    difficulty:'easy', story_seen:'', offer_started:null, campaign:null };
  let data=null;
  try{ ({ data } = await sb.from('profiles').select('*').eq('id',ME.id).maybeSingle()); }
  catch(e){ console.error('[FitRoyale] profile load failed:', e.message||e); }

  const local=loadLocalProfile();
  const isReal=v => v!==null && v!==undefined && v!=='';

  /* Cloud is authoritative whenever a cloud row exists — no timestamp racing.
     Local storage is ONLY a fallback for brand-new accounts / offline first load.
     (The previous "whichever copy is newer" system could treat a stale local
     zero as valid and push it back over correct cloud progress — permanently
     wiping real coins/reps. Simpler and safer to just trust the server.) */
  if(data){
    PROFILE={ ...DEFAULTS, ...Object.fromEntries(Object.entries(data).filter(([,v])=>isReal(v))) };
    if(local?.tutorial_done) PROFILE.tutorial_done=true;   /* a completed tutorial never regresses */
  } else if(local){
    PROFILE={ ...DEFAULTS, ...Object.fromEntries(Object.entries(local).filter(([,v])=>isReal(v))) };
    await pushProfile();
  } else {
    PROFILE={ ...DEFAULTS };
    await pushProfile();
  }
  PROFILE.id=ME.id;
  if(!isReal(PROFILE.username) || ['Player','Fighter'].includes(PROFILE.username)){
    PROFILE.username = emailName || 'Champion';
  }
  cacheProfileLocally();
  /* apply to game state */
  S.user.lvl=PROFILE.level||1; S.user.xp=PROFILE.xp||0; S.user.coins=PROFILE.coins||0;
  S.user.streak=PROFILE.streak||1; S.user.pr=PROFILE.pr||0;
  restoreCampaign(PROFILE.campaign);
}
let saveT=null;
const PROFILE_COLS=['id','username','level','xp','coins','streak','pr','total_reps','tutorial_done',
  'membership','elo','bio','avatar','avatar_url','duel_wins','bosses','difficulty','story_seen','offer_started','updated_at','campaign'];
let badCols=new Set();
let lastSave={ ok:null, msg:'Not saved yet', at:0 };        /* columns the DB rejected — skipped on later saves */
let warnedSave=false;

function localKey(){ return 'fr_profile_'+(ME?.id||'anon'); }
function cacheProfileLocally(){
  try{
    if(PROFILE) PROFILE._ts=Date.now();
    localStorage.setItem(localKey(), JSON.stringify(PROFILE));
  }catch(e){}
}
function loadLocalProfile(){
  try{ const raw=localStorage.getItem(localKey()); return raw?JSON.parse(raw):null; }catch(e){ return null; }
}

function saveProfile(){
  if(!sb||!ME||!PROFILE) return;
  clearTimeout(saveT);
  saveT=setTimeout(async()=>{
    PROFILE.level=S.user.lvl; PROFILE.xp=S.user.xp; PROFILE.coins=S.user.coins;
    PROFILE.streak=S.user.streak; PROFILE.pr=S.user.pr;
    PROFILE.total_reps=(PROFILE.total_reps||0);
    cacheProfileLocally();                       /* always keep a local copy */
    await pushProfile();
  },800);
}
async function pushProfile(attempt){
  attempt=attempt||0;
  /* only send columns we know about, minus any the DB has already rejected */
  const payload={};
  PROFILE_COLS.forEach(k=>{ if(k in PROFILE && !badCols.has(k)) payload[k]=PROFILE[k]; });
  payload.id=PROFILE.id;
  payload.updated_at=new Date().toISOString();
  try{
    const { error } = await sb.from('profiles').upsert(payload);
    if(error) throw error;
    lastSave={ ok:true, msg:'Saved to cloud', at:Date.now() };
    const el=$('set-save'); if(el){ el.textContent='Saved ✓'; el.style.color='var(--green)'; }
  }catch(e){
    const msg=(e.message||e.details||'')+'';
    /* Postgres/PostgREST tells us exactly which column is missing — drop it and retry */
    const m=msg.match(/'([a-z_]+)' column|column "?([a-z_]+)"?/i);
    const col=m && (m[1]||m[2]);
    if(col && PROFILE_COLS.includes(col) && !badCols.has(col) && attempt<PROFILE_COLS.length){
      badCols.add(col);
      console.warn('[FitRoyale] DB is missing column "'+col+'" — saving without it. Run the latest SQL migration.');
      return pushProfile(attempt+1);
    }
    console.error('[FitRoyale] profile save failed:', msg);
    lastSave={ ok:false, msg:msg.slice(0,90), at:Date.now() };
    const el2=$('set-save'); if(el2){ el2.textContent='On this device only'; el2.style.color='var(--gold)'; }
    if(!warnedSave){
      warnedSave=true;
      toast('Cloud save issue — progress kept on this device');
    }
  }
}
function confirmLogout(){
  SFX.click();
  openModal('<div style="display:flex;justify-content:center;margin-bottom:6px"><svg viewBox="0 0 24 24" style="width:54px;height:54px" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l-5-5 5-5M5 12h9"/></svg></div><h3 class="hdr">Sign out?</h3>'+
    '<p>Your progress is saved to your account — you can sign back in any time.</p>'+
    '<button class="btn b-red" onclick="logout()">SIGN OUT</button>'+
    '<button class="btn b-ghost" style="margin-top:10px" onclick="closeModal()">STAY</button>');
}
async function logout(){
  try{ await sb?.auth.signOut(); }catch(e){}
  try{
    Object.keys(localStorage).filter(k=>k.startsWith('sb-')).forEach(k=>localStorage.removeItem(k));
    Object.keys(sessionStorage).filter(k=>k.startsWith('sb-')).forEach(k=>sessionStorage.removeItem(k));
  }catch(e){}
  location.reload();
}
function greetLine(){
  const hr=new Date().getHours();
  const t = hr<5?'Still awake':hr<12?'Good morning':hr<18?'Good afternoon':'Good evening';
  return t;
}
let camGranted=false;
function obStep(n){
  [1,2,3].forEach(i=>{ $('ob'+i).classList.toggle('on',i===n); $('od'+i).classList.toggle('on',i<=n); });
}
function obNext(from){
  if(from===1){
    const n=$('ob-name').value.trim();
    if(n.length<3){ $('ob-err').textContent='Pick a name with at least 3 characters.'; return; }
    $('ob-err').textContent='';
    if(PROFILE){ PROFILE.username=n; saveProfile(); }
    $('ob-greet').textContent='Welcome, '+n+'!';
    obStep(2);
  } else if(from===2){ obStep(3); }
}
async function requestCamOnce(){
  const st=$('cam-state'), btn=$('cam-btn');
  btn.textContent='REQUESTING…';
  try{
    const s=await navigator.mediaDevices.getUserMedia({ video:{ facingMode:'user' } });
    s.getTracks().forEach(t=>t.stop());
    camGranted=true;
    st.className='cam-state ok'; st.textContent='✓ Camera ready — the arena is open';
    btn.textContent='ENTER THE ARENA'; btn.onclick=startTutorial;
    beep(760,.13); confetti();
    PoseEngine.load().catch(()=>{});   /* warm the AI model quietly in the background */
  }catch(e){
    camGranted=false;
    st.className='cam-state bad';
    st.textContent='Camera blocked. Open your browser settings for this site, allow Camera, then tap retry.';
    btn.textContent='RETRY CAMERA';
  }
}
function startOnboarding(){
  document.body.classList.add('locked');
  $('ob-hero-art').innerHTML=mon('chief',72);
  $('ob-goblin-art').innerHTML=mon('warlord',72);
  $('ob-cam-art').innerHTML='<svg viewBox="0 0 24 24" style="width:60px;height:60px" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h2L9 4h6l1.5 2h2A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="4"/></svg>';
  $('ti1').innerHTML=ICO.bolt(22); $('ti2').innerHTML=ICO.star(22);
  $('ti3').innerHTML=mon('spider',26); $('ti4').innerHTML=ICO.swords(22);
  $('ob-name').value=PROFILE?.username||'';
  const g=$('av-grid-ob'); g.innerHTML='';
  const obpv=$('ob-pfp-view');
  if(obpv) obpv.innerHTML = PROFILE?.avatar_url ? '<img src="'+PROFILE.avatar_url+'">' : mon(myAv(),44);
  AVATARS.forEach(k=>{
    const b=document.createElement('button');
    b.className='av-pick'+(!PROFILE?.avatar_url && myAv()===k?' on':'');
    b.innerHTML=mon(k,38);
    b.onclick=()=>{
      if(PROFILE){ PROFILE.avatar=k; PROFILE.avatar_url=null; }
      g.querySelectorAll('.av-pick').forEach(x=>x.classList.remove('on')); b.classList.add('on');
      if(obpv) obpv.innerHTML=mon(k,44);
      beep(660,.08);
    };
    g.appendChild(b);
  });
  obStep(1);
  goFlow('scr-onboard');
}
function enterApp(){
  const uname=PROFILE?.username||'Fighter';
  document.querySelectorAll('.hello .name, .prof-name').forEach(e=>{});
  if(!PROFILE?.tutorial_done){ startOnboarding(); return; }
  document.body.classList.remove('locked');
  nav('scr-home', { replace:true });
  if(PROFILE?.tutorial_done) PoseEngine.load().catch(()=>{});   /* returning player — camera was granted before */
  /* belt-and-braces: repaint once more after the DOM settles */
  setTimeout(()=>{ try{ paintAvatars(); renderHome(); }catch(e){console.error(e);} },60);
  setTimeout(()=>toast(greetLine()+', '+(PROFILE?.username||'Champion')+'!'),500);
  setTimeout(()=>toast('Running Build '+BUILD),2200);
}
/* ---- Tutorial: one wave, then unskippable paywall ---- */
function startTutorial(){
  document.body.classList.add('locked');
  if(PROFILE && !(PROFILE.story_seen||'').includes('intro')){
    const seen=(PROFILE.story_seen||'').split(',').filter(Boolean);
    seen.push('intro'); PROFILE.story_seen=seen.join(','); saveProfile();
    showStoryModal(STORY.howItWorks.title, STORY.howItWorks.body, 'NEXT', ()=>{
      showStoryModal('Your first fight',
        'Coach Grib wants to see what you can do. He has <b>three</b> energy points.<br><br>'+
        'Three push-ups and you win. Get on the floor and go!',
        'START', ()=>beginTutorialFight());
    });
    return;
  }
  beginTutorialFight();
}
function beginTutorialFight(){
  document.body.classList.add('locked');
  S.B_origin='tutorial';
  makeBattle({ kind:'tutorial', exercise:'Push-ups',
    waves:[{name:'Coach Grib',sprite:'goblin',hp:3}], modeName:'Tutorial' });
}
/* ---- Local currency paywall ---- */
const CCY={ CZ:['Kč',499,'CZK'], SK:['€',19.99,'EUR'], DE:['€',19.99,'EUR'], AT:['€',19.99,'EUR'], FR:['€',19.99,'EUR'],
  ES:['€',19.99,'EUR'], IT:['€',19.99,'EUR'], NL:['€',19.99,'EUR'], PL:['zł',89,'PLN'], GB:['£',16.99,'GBP'],
  US:['$',19.99,'USD'], CA:['C$',26.99,'CAD'], AU:['A$',29.99,'AUD'], JP:['¥',2900,'JPY'], KR:['₩',26000,'KRW'],
  BR:['R$',99,'BRL'], IN:['₹',1499,'INR'], MX:['MX$',349,'MXN'], SE:['kr',219,'SEK'], NO:['kr',219,'NOK'],
  CH:['CHF',19.99,'CHF'], UA:['₴',799,'UAH'] };
function detectRegion(){
  try{
    const parts=(navigator.language||'en-US').split('-');
    if(parts[1]) return parts[1].toUpperCase();
    const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';
    if(tz.includes('Prague')) return 'CZ';
  }catch(e){}
  return 'US';
}
function showPaywall(){
  document.body.classList.add('locked');
  const p=priceSet();
  $('off-was').textContent=fmtPrice(p.life);
  $('off-now').textContent=fmtPrice(p.offer);
  $('pl-life').textContent=fmtPrice(p.offer);
  $('pl-year').textContent=fmtPrice(p.y);
  $('pl-month').textContent=fmtPrice(p.m);
  const perMonth=(p.y/12);
  $('pl-year-per').textContent='per year · '+fmtPrice(Number(perMonth.toFixed(2)))+'/mo';
  const savePct=Math.round((1-(p.y/12)/p.m)*100);
  $('pl-year-save').textContent = savePct>0 ? ('Save '+savePct+'% vs monthly') : 'Best for regulars';
  $('pl-life-save').textContent='Save '+Math.round((1-p.offer/p.life)*100)+'% during launch';
  startOfferCountdown();
  goFlow('scr-paywall');
}
function choosePlan(kind){
  SFX.click();
  const p=priceSet();
  const label = kind==='lifetime' ? 'Lifetime — '+fmtPrice(p.offer)
    : kind==='yearly' ? 'Yearly — '+fmtPrice(p.y)
    : 'Monthly — '+fmtPrice(p.m);
  showStoryModal('Beta is free', label+'<br><br>Payments aren\'t live yet — every beta tester gets full access at no cost. Your founder status is locked in.', 'CLAIM FREE ACCESS', claimFounder);
}
async function claimFounder(){
  if(PROFILE){ PROFILE.tutorial_done=true; PROFILE.membership='founder'; saveProfile(); }
  confetti(); beep(880,.15);
  toast('Founder access unlocked — welcome to the arena!');
  document.body.classList.remove('locked');
  nav('scr-home');
}

/* ================= WAKE LOCK (screen stays on mid-set) ================= */
let wakeLock=null;
async function acquireWake(){
  try{ wakeLock=await navigator.wakeLock?.request('screen'); }catch(e){ wakeLock=null; }
}
function releaseWake(){ try{ wakeLock?.release(); }catch(e){} wakeLock=null; }
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible' && (S.B||S.duel)) acquireWake();
});

/* ================= DEV TESTING MODAL ================= */
function openDevModal(){
  openModal(`
    <div class="hdr" style="font-size:19px;margin-bottom:6px">Test on your phone</div>
    <p style="margin-bottom:18px">Phone browsers only allow camera access over <b>HTTPS</b> (or localhost). Here's the fastest path:</p>
    <div class="modal left" style="max-height:none;padding:0;background:none;border:none;animation:none">
      <div class="devstep"><div class="n">1</div><div>
        <b>Serve the file locally</b>
        <p>Put this file in a folder as <b>index.html</b>, then in a terminal:</p>
        <span class="code">npx serve</span>
        <p>or:</p>
        <span class="code">python3 -m http.server 3000</span>
      </div></div>
      <div class="devstep"><div class="n">2</div><div>
        <b>Find your computer's local IP</b>
        <span class="code">ipconfig</span>
        <p>Windows — look for "IPv4 Address". Mac:</p>
        <span class="code">ipconfig getifaddr en0</span>
        <p>Phone on the <b>same Wi-Fi</b> can now open http://YOUR_IP:3000 — but the camera will be blocked, because it's not HTTPS. That's what step 3 fixes.</p>
      </div></div>
      <div class="devstep"><div class="n">3</div><div>
        <b>Tunnel it with ngrok (HTTPS)</b>
        <span class="code">ngrok http 3000</span>
        <p>Open the <b>https://…ngrok…</b> URL it prints on your phone → Safari/Chrome will ask for camera permission → Allow. iOS needs Safari 14.3+; Android Chrome just works.</p>
      </div></div>
      <div class="devstep"><div class="n">4</div><div>
        <b>Or just deploy it</b>
        <span class="code">vercel deploy</span>
        <p>Any static host (Vercel, Netlify, GitHub Pages) serves HTTPS out of the box — easiest for repeat testing.</p>
      </div></div>
      <div class="devstep"><div class="n">✓</div><div>
        <b>In the workout</b>
        <p>Prop the phone up facing you, step back until your full body is in frame, and the gold skeleton should snap onto you. If the pill says "Tap mode", the model CDN or camera was blocked — check you're on the HTTPS URL.</p>
      </div></div>
    </div>
    <button class="btn b-purple" onclick="closeModal()">GOT IT</button>`);
}

/* ================= CAMERA ================= */
let cams=[];
function initCam(vid,fbId){
  const v=$(vid), fb=$(fbId);
  if(!navigator.mediaDevices?.getUserMedia){ v.style.display='none'; fb.style.display='flex'; return; }
  navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}})
    .then(st=>{ cams.push(st); v.srcObject=st; v.style.display='block'; v.classList.add('live'); v.play().catch(()=>{}); fb.style.display='none'; })
    .catch(()=>{ v.style.display='none'; fb.style.display='flex'; });
}
function stopCams(){ cams.forEach(s=>s.getTracks().forEach(t=>t.stop())); cams=[]; PoseEngine.stop(); releaseWake(); }
function drawSkeleton(){
  /* gold joint-and-bone overlay (plank/push-up pose) */
  const j={head:[24,52],sh:[38,50],hipR:[62,58],kneeR:[76,66],footR:[90,72],elb:[40,68],hand:[42,84],hipTop:[62,58]};
  const bones=[['head','sh'],['sh','hipR'],['hipR','kneeR'],['kneeR','footR'],['sh','elb'],['elb','hand']];
  const P=(k)=>j[k];
  let svg='';
  bones.forEach(([a,b])=>{ const [x1,y1]=P(a),[x2,y2]=P(b);
    svg+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; });
  Object.values(j).forEach(([x,y])=>{ svg+=`<circle cx="${x}" cy="${y}" r="3.4"/>`; });
  $('b-skel').innerHTML=svg;
}

/* ================= MODAL / TOAST ================= */
function openModal(html){ $('modal-box').innerHTML=html; $('modal-layer').classList.add('open'); }
function closeModal(){ $('modal-layer').classList.remove('open'); }
let toastT=null;
function toast(m){ const t=$('toast'); t.textContent=m; t.classList.add('show');
  t.classList.remove('toastpop'); void t.offsetWidth; t.classList.add('toastpop');
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),2500); }

/* ambient background orbs */
(function orbs(){
  const cfg=[[ -40,-30,220,'rgba(139,92,246,.30)'],[ 300,120,180,'rgba(245,158,11,.16)'],[-60,520,200,'rgba(16,185,129,.10)']];
  cfg.forEach((c,i)=>{
    const o=document.createElement('div'); o.className='orb';
    o.style.cssText='left:'+c[0]+'px;top:'+c[1]+'px;width:'+c[2]+'px;height:'+c[2]+'px;background:'+c[3]+';animation-delay:'+(i*2.5)+'s';
    $('app').prepend(o);
  });
})();

/* ================= LOADING SCREEN ================= */
const LD_TIPS=[
  'Every rep you do is one point of damage.',
  'Keep moving — resting too long drains your energy.',
  'Some reps land as SUPER HITS worth triple points!',
  'Fast reps in a row build a combo streak.',
  'Chill mode counts half push-ups. Perfect for starting out.',
  'Big Matches wait at the end of every 6th episode.',
  'Beat a friend in Versus to earn rank points.',
  'The camera counts for you — no tapping needed.',
];
let ldVal=0, ldTarget=0, ldRAF=null, ldTipTimer=null, ldCreep=null;

function ldSet(p,msg){
  ldTarget=Math.max(ldTarget,Math.min(100,p));
  if(msg) ldTip(msg);
  if(!ldRAF) ldAnimate();
}
function ldAnimate(){
  ldRAF=requestAnimationFrame(()=>{
    ldRAF=null;
    const diff=ldTarget-ldVal;
    if(Math.abs(diff)<0.15) ldVal=ldTarget;
    else ldVal += diff*0.09;
    const fill=$('ld-fill'), pct=$('ld-pct');
    if(fill) fill.style.width=ldVal.toFixed(1)+'%';
    if(pct) pct.textContent=Math.round(ldVal)+'%';
    if(ldVal<ldTarget-0.15 || ldTarget<100) ldAnimate();
  });
}
function ldTip(text){ const t=$('ld-tip'); if(t) t.innerHTML='<span>'+text+'</span>'; }
function ldStart(){
  ldVal=0; ldTarget=0;
  setTxt('ld-build', 'BUILD '+BUILD);
  let i=Math.floor(Math.random()*LD_TIPS.length);
  ldTip(LD_TIPS[i]);
  ldTipTimer=setInterval(()=>{ i=(i+1)%LD_TIPS.length; ldTip(LD_TIPS[i]); },2800);
  ldCreep=setInterval(()=>{ if(ldTarget<88) ldSet(ldTarget+2+Math.random()*5); },420);
}
function ldDone(){
  clearInterval(ldCreep); clearInterval(ldTipTimer);
  ldTip('Ready!'); ldSet(100);
  const l=$('loader');
  setTimeout(()=>{ if(l) l.classList.add('reveal'); }, 200);
  setTimeout(()=>{ if(l) l.classList.add('gone'); }, 700);
}

/* ================= BOOT ================= */
document.body.classList.add('locked');
async function boot(){
  ldStart();
  /* hard safety net: the loader can NEVER outlive this, whatever goes wrong */
  const failsafe=setTimeout(()=>{
    console.warn('[FitRoyale] boot failsafe fired');
    ldDone();
    const stuck = !document.querySelector('.screen.active') || $('scr-splash').classList.contains('active');
    if(!stuck) return;
    /* NEVER kick a logged-in player to the login screen just because the network was slow */
    if(hasStoredSession()){
      goFlow('scr-splash');
      openModal('<h3 class="hdr">Slow connection</h3><p>Still reaching the arena. Your login is saved.</p>'+
        '<button class="btn b-purple" onclick="closeModal();location.reload()">RETRY</button>'+
        '<button class="btn b-ghost" style="margin-top:9px" onclick="closeModal();goFlow(\'scr-auth\')">LOG IN INSTEAD</button>');
    } else {
      goFlow('scr-auth'); paintStay();
    }
  }, 12000);
  try{
    goFlow('scr-splash');
    const minSplash=new Promise(r=>setTimeout(r,1400));
    ldSet(25,'Connecting to the arena…');
    let session=null;
    try{ session=(await sb?.auth.getSession())?.data?.session||null; }catch(e){ console.error('[FitRoyale] session error',e); }
    ldSet(55,'Checking your account…');
    await minSplash;
    if(inRecovery){
      ME = session?.user || ME;
      document.body.classList.add('locked');
      goFlow('scr-newpass');
      return;
    }
    if(session){
      ME=session.user;
      ldSet(75,'Loading your fighter…');
      try{ await loadProfile(); }catch(e){ console.error('[FitRoyale] loadProfile failed',e); }
      /* belt-and-suspenders: stamp the real name/photo directly the instant we have them,
         regardless of any render race elsewhere */
      if(PROFILE){
        setTxt('home-uname', PROFILE.username);
        setTxt('prof-uname', PROFILE.username);
        try{ paintAvatars(); }catch(e){}
      }
      try{ enterApp(); }catch(e){ console.error('[FitRoyale] enterApp failed',e); document.body.classList.remove('locked'); nav('scr-home'); }
    } else {
      goFlow('scr-auth');
    }
  }catch(e){
    console.error('[FitRoyale] boot failed',e);
    if(hasStoredSession() && ME){ document.body.classList.remove('locked'); nav('scr-home'); }
    else { goFlow('scr-auth'); paintStay(); }
  }finally{
    clearTimeout(failsafe);
    ldDone();
  }
}
boot();
window.addEventListener('resize',()=>{ if($('scr-campaign').classList.contains('active')) renderMap(); });
</script>
</body>
</html>
