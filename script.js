/* ════════════════════════════════════════
     TOKENS
  ════════════════════════════════════════ */
:root {
  --gold: #c9a84c;
  --gold-light: #e8c97a;
  --gold-dim: rgba(201, 168, 76, 0.12);
  --cream: #f5f0e8;
  --ink: #0d0b08;
  --paper: #161209;
  --paper-2: #1e1810;
  --muted: rgba(245, 240, 232, 0.42);
  --blue: #4a9ebb;
  --serif: "Cormorant Garamond", Georgia, serif;
  --mono: "DM Mono", "Courier New", monospace;
  --sans: "Outfit", sans-serif;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background: var(--ink);
  color: var(--cream);
  font-family: var(--sans);
  font-weight: 300;
  overflow-x: hidden;
  cursor: none;
  min-height: 100vh;
}

/* ── GRAIN + PROGRESS ── */
#grain-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.055;
}
#progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 1.5px;
  width: 0%;
  background: linear-gradient(90deg, var(--gold), var(--gold-light));
  z-index: 10000;
  pointer-events: none;
  transition: width 0.08s linear;
}

/* ── CURSOR ── */
body:not(.touch) * {
  cursor: none !important;
}
#cur {
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold-light);
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  transition:
    transform 0.12s var(--ease-out),
    opacity 0.3s,
    background 0.2s;
  mix-blend-mode: difference;
}
#cur.big {
  transform: translate(-50%, -50%) scale(3.5);
  background: rgba(232, 201, 122, 0.2);
}
#cur.gone {
  opacity: 0;
}
#cur-ring {
  position: fixed;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 76, 0.4);
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  transition:
    transform 0.35s var(--ease-out),
    opacity 0.3s,
    width 0.35s var(--ease-out),
    height 0.35s var(--ease-out);
}
#cur-ring.big {
  width: 44px;
  height: 44px;
  border-color: rgba(201, 168, 76, 0.2);
}
#cur-ring.gone {
  opacity: 0;
}

/* ── LOADER ── */
#loader {
  position: fixed;
  inset: 0;
  background: var(--ink);
  display: grid;
  place-items: center;
  z-index: 99999;
  transition:
    opacity 0.9s ease,
    visibility 0.9s ease;
}
#loader.out {
  opacity: 0;
  visibility: hidden;
}
#loader-inner {
  text-align: center;
}
#loader-bar-wrap {
  width: clamp(160px, 28vw, 280px);
  height: 1px;
  background: rgba(201, 168, 76, 0.15);
  margin: 0 auto 2.5rem;
  position: relative;
  overflow: hidden;
}
#loader-bar {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  animation: loaderSweep 1.1s ease-in-out infinite;
}
@keyframes loaderSweep {
  to {
    left: 100%;
  }
}
#loader-step {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  color: rgba(245, 240, 232, 0.28);
  text-transform: uppercase;
  margin-bottom: 1rem;
  min-height: 1.2em;
  transition: opacity 0.25s;
  opacity: 0;
}
#loader-step.show {
  opacity: 1;
}
#loader-year {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(6rem, 20vw, 16rem);
  font-weight: 300;
  line-height: 0.82;
  letter-spacing: -0.03em;
  color: var(--cream);
  transition:
    opacity 0.15s,
    color 0.3s;
}
#loader-year.gold {
  color: var(--gold-light);
}
#loader-sub {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.4em;
  color: rgba(201, 168, 76, 0.35);
  text-transform: uppercase;
  margin-top: 2rem;
  opacity: 0;
  transition: opacity 0.3s;
}
#loader-sub.show {
  opacity: 1;
}

/* ── PAGE SHELL ── */
.page {
  visibility: hidden;
}

/* ── VIDEO BG ── */
.vid-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}
.vid-bg video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.14;
}
.vid-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 60% 40%,
    rgba(201, 168, 76, 0.06) 0%,
    transparent 70%
  );
}

/* ── SCROLL BADGE ── */
#scroll-badge {
  position: fixed;
  top: 2.5rem;
  left: 3vw;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  pointer-events: none;
  transition:
    opacity 0.5s,
    visibility 0.5s;
}
#scroll-badge.gone {
  opacity: 0;
  visibility: hidden;
}
.sb-ring {
  position: absolute;
  inset: 0;
  animation: sbSpin 14s linear infinite;
}
.sb-text {
  font-family: var(--mono);
  font-size: 9.5px;
  fill: rgba(201, 168, 76, 0.38);
  letter-spacing: 0.2em;
}
.sb-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 76, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}
@keyframes sbSpin {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 767px) {
  #scroll-badge {
    top: 1.2rem;
    left: 1.2rem;
    width: 90px;
    height: 90px;
  }
}

/* ── TOP NAV ── */
#top-nav {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 998;
  padding: 1.4rem 3vw;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-link {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.3);
  text-decoration: none;
  transition: color 0.25s;
  cursor: none;
}
.nav-link:hover {
  color: var(--gold);
}
.nav-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  opacity: 0.5;
}

/* ── HERO ── */
#hero {
  position: relative;
  min-height: 100vh;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 5vw;
  gap: 4vw;
}
.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-eyebrow {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  color: rgba(201, 168, 76, 0.5);
  text-transform: uppercase;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.hero-eyebrow::before {
  content: "";
  width: 32px;
  height: 1px;
  background: rgba(201, 168, 76, 0.4);
  flex-shrink: 0;
}
.hero-title {
  font-family: var(--serif);
  font-weight: 300;
  font-size: clamp(3.8rem, 7.5vw, 7.5rem);
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: var(--cream);
}
.hero-title .line-gold {
  font-style: italic;
  color: var(--gold-light);
  display: block;
}
.hero-title .line-sm {
  font-size: clamp(1.4rem, 2.6vw, 2.8rem);
  color: rgba(245, 240, 232, 0.55);
  font-style: normal;
  letter-spacing: 0.01em;
  display: block;
  margin-top: 0.4rem;
}
.hero-body {
  font-family: var(--mono);
  font-size: clamp(0.65rem, 1vw, 0.78rem);
  line-height: 1.9;
  color: rgba(245, 240, 232, 0.42);
  margin-top: 2rem;
  max-width: 40ch;
  letter-spacing: 0.03em;
}
.hero-body strong {
  color: var(--cream);
  font-weight: 400;
}
.hero-stats {
  display: flex;
  gap: 0;
  margin-top: 2.8rem;
  border-top: 1px solid rgba(201, 168, 76, 0.14);
}
.hstat {
  padding: 1.2rem 2.2rem 1.2rem 0;
  margin-right: 2.2rem;
  border-right: 1px solid rgba(201, 168, 76, 0.1);
}
.hstat:last-child {
  border-right: none;
  margin-right: 0;
}
.hstat-val {
  font-family: var(--serif);
  font-size: 2.6rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--cream);
  display: block;
}
.hstat-lbl {
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.2em;
  color: rgba(245, 240, 232, 0.28);
  text-transform: uppercase;
  margin-top: 0.35rem;
  display: block;
}
.hero-right {
  position: relative;
  aspect-ratio: 4/5;
  max-height: 84vh;
  overflow: hidden;
  opacity: 0;
  transform: translateX(30px);
  animation: heroImgIn 1.2s 1s var(--ease-out) forwards;
}
@keyframes heroImgIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  filter: sepia(45%) saturate(0.7) brightness(0.72);
  transition: filter 0.6s;
  animation: float 6s ease-in-out infinite;
}
.hero-right:hover .hero-img {
  filter: sepia(20%) saturate(0.9) brightness(0.82);
}
.corner {
  position: absolute;
  width: 18px;
  height: 18px;
  z-index: 3;
  pointer-events: none;
}
.corner-tl {
  top: 10px;
  left: 10px;
  border-top: 1.5px solid rgba(201, 168, 76, 0.5);
  border-left: 1.5px solid rgba(201, 168, 76, 0.5);
}
.corner-tr {
  top: 10px;
  right: 10px;
  border-top: 1.5px solid rgba(201, 168, 76, 0.5);
  border-right: 1.5px solid rgba(201, 168, 76, 0.5);
}
.corner-bl {
  bottom: 10px;
  left: 10px;
  border-bottom: 1.5px solid rgba(201, 168, 76, 0.5);
  border-left: 1.5px solid rgba(201, 168, 76, 0.5);
}
.corner-br {
  bottom: 10px;
  right: 10px;
  border-bottom: 1.5px solid rgba(201, 168, 76, 0.5);
  border-right: 1.5px solid rgba(201, 168, 76, 0.5);
}
.hero-scanline {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(13, 11, 8, 0.09) 3px,
    rgba(13, 11, 8, 0.09) 4px
  );
}
.hero-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(13, 11, 8, 0.3) 0%,
    transparent 30%,
    transparent 60%,
    rgba(13, 11, 8, 0.6) 100%
  );
}
.hero-caption {
  position: absolute;
  bottom: 1.2rem;
  left: 1.4rem;
  z-index: 4;
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.22em;
  color: rgba(201, 168, 76, 0.6);
  text-transform: uppercase;
}
.hero-index {
  position: absolute;
  top: 1.2rem;
  right: 1.4rem;
  z-index: 4;
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.18em;
  color: rgba(245, 240, 232, 0.2);
  text-transform: uppercase;
}
.hero-ghost {
  position: absolute;
  bottom: -8vh;
  right: -2vw;
  font-family: var(--serif);
  font-style: italic;
  font-size: min(40vw, 380px);
  font-weight: 300;
  line-height: 1;
  color: rgba(201, 168, 76, 0.032);
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.04em;
  z-index: 1;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
@media (max-width: 960px) {
  #hero {
    grid-template-columns: 1fr;
    padding-top: 7rem;
    padding-bottom: 4rem;
    gap: 3rem;
  }
  .hero-right {
    max-height: 55vw;
    aspect-ratio: 16/10;
  }
  .hero-ghost {
    display: none;
  }
}
@media (max-width: 600px) {
  .hero-title {
    font-size: clamp(2.8rem, 14vw, 4.5rem);
  }
}

/* ── MARQUEE ── */
#marquee {
  position: relative;
  z-index: 2;
  overflow: hidden;
  border-top: 1px solid rgba(201, 168, 76, 0.1);
  border-bottom: 1px solid rgba(201, 168, 76, 0.1);
  padding: 0.85rem 0;
  background: rgba(13, 11, 8, 0.5);
  backdrop-filter: blur(6px);
}
.mq-track {
  display: flex;
  white-space: nowrap;
  animation: mqScroll 38s linear infinite;
}
#marquee:hover .mq-track {
  animation-play-state: paused;
}
.mq-item {
  display: inline-flex;
  align-items: center;
  padding: 0 3rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.3);
  gap: 1rem;
}
.mq-item .sep {
  color: rgba(201, 168, 76, 0.3);
}
.mq-gold {
  color: var(--gold);
}
@keyframes mqScroll {
  to {
    transform: translateX(-50%);
  }
}

/* ── CHAPTER SCROLL ── */
#chapters {
  position: relative;
  height: 400vh;
  z-index: 2;
}
#ch-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}
#ch-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background: var(--gold);
  z-index: 20;
  transition: width 0.08s linear;
}
#ch-track {
  display: flex;
  width: 300vw;
  height: 100vh;
  will-change: transform;
}
.ch-panel {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 6vw;
  gap: 5vw;
  position: relative;
  overflow: hidden;
}
.ch-ghost {
  position: absolute;
  bottom: -6vh;
  right: -2vw;
  font-family: var(--serif);
  font-style: italic;
  font-size: min(38vw, 360px);
  font-weight: 300;
  line-height: 1;
  color: rgba(201, 168, 76, 0.03);
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.04em;
}
.ch-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.ch-chapter-num {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.3em;
  color: rgba(201, 168, 76, 0.35);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
}
.ch-chapter-num span {
  color: var(--gold);
  font-size: 0.8rem;
}
.ch-num-line {
  width: 40px;
  height: 1px;
  background: rgba(201, 168, 76, 0.25);
}
.ch-heading {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(3.5rem, 9vw, 8rem);
  font-weight: 300;
  line-height: 0.88;
  letter-spacing: -0.02em;
  color: var(--cream);
  display: block;
}
.ch-heading.gold {
  color: var(--gold-light);
}
.ch-sub {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: rgba(245, 240, 232, 0.28);
  text-transform: uppercase;
  margin-top: 0.9rem;
  display: block;
}
.ch-body {
  font-family: var(--mono);
  font-size: clamp(0.6rem, 0.95vw, 0.78rem);
  line-height: 1.9;
  color: rgba(245, 240, 232, 0.45);
  margin-top: 2.2rem;
  max-width: 44ch;
  letter-spacing: 0.025em;
}
.ch-body strong {
  color: var(--cream);
  font-weight: 400;
}
.ch-divider {
  width: 40px;
  height: 1px;
  background: rgba(201, 168, 76, 0.3);
  margin: 2.2rem 0;
}
.ch-trio {
  display: flex;
  gap: 0;
  border-top: 1px solid rgba(201, 168, 76, 0.1);
}
.ch-stat {
  padding: 0.9rem 1.8rem 0.9rem 0;
  margin-right: 1.8rem;
  border-right: 1px solid rgba(201, 168, 76, 0.08);
}
.ch-stat:last-child {
  border-right: none;
  margin-right: 0;
}
.ch-stat-val {
  font-family: var(--serif);
  font-size: 1.9rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--cream);
  display: block;
}
.ch-stat-lbl {
  font-family: var(--mono);
  font-size: 0.48rem;
  letter-spacing: 0.18em;
  color: rgba(245, 240, 232, 0.25);
  text-transform: uppercase;
  margin-top: 0.3rem;
  display: block;
}
.ch-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ch-img-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  max-height: 72vh;
  overflow: hidden;
  outline: 1px solid rgba(201, 168, 76, 0.12);
  outline-offset: 8px;
}
.ch-img-frame::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(13, 11, 8, 0.07) 3px,
    rgba(13, 11, 8, 0.07) 4px
  );
}
.ch-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(35%) saturate(0.75) brightness(0.72);
  transition:
    filter 0.5s,
    transform 0.6s var(--ease-out);
}
.ch-img-frame:hover .ch-img {
  filter: sepia(15%) saturate(0.95) brightness(0.85);
  transform: scale(1.04);
}
.ch-img-grad {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(13, 11, 8, 0.65) 100%
  );
}
.ch-img-tag {
  position: absolute;
  bottom: 1.2rem;
  left: 1.4rem;
  z-index: 4;
  font-family: var(--mono);
  font-size: 0.52rem;
  letter-spacing: 0.22em;
  color: rgba(201, 168, 76, 0.65);
  text-transform: uppercase;
}
.ch-vert-label {
  position: absolute;
  right: -3rem;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.35em;
  color: rgba(201, 168, 76, 0.2);
  text-transform: uppercase;
  white-space: nowrap;
}
@media (max-width: 800px) {
  .ch-panel {
    grid-template-columns: 1fr;
    padding-top: 7rem;
    align-items: start;
    overflow-y: auto;
  }
  .ch-img-frame {
    aspect-ratio: 16/9;
    max-height: 38vw;
  }
  .ch-heading {
    font-size: 3rem;
  }
  .ch-vert-label,
  .ch-ghost {
    display: none;
  }
}

/* ── SECTION DIVIDER ── */
.sec-divider {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 5rem 2rem;
}
.sec-divider-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(201, 168, 76, 0.4),
    transparent
  );
  margin: 0 auto 1.5rem;
}
.sec-divider p {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.32em;
  color: rgba(201, 168, 76, 0.4);
  text-transform: uppercase;
}

/* ── DESTINATIONS ── */
#destinations {
  position: relative;
  z-index: 2;
  padding: 0 0 60px;
}
.dest-head {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  padding: 0 5vw 3.5rem;
  gap: 2rem;
}
.dest-head-left {
  display: flex;
  flex-direction: column;
}
.dest-head-label {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: rgba(201, 168, 76, 0.4);
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.dest-head-h2 {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 300;
  line-height: 1;
  color: var(--cream);
  letter-spacing: -0.02em;
}
.dest-head-h2 em {
  color: var(--gold-light);
}
.dest-head-line {
  width: 1px;
  height: 80px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(201, 168, 76, 0.35),
    transparent
  );
  justify-self: center;
}
.dest-head-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}
.dest-nav {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.dest-btn {
  padding: 7px 16px;
  border-radius: 1px;
  border: 1px solid rgba(201, 168, 76, 0.25);
  background: transparent;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: all 0.22s;
}
.dest-btn:hover,
.dest-btn.on {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--ink);
}
.dest-search-wrap {
  position: relative;
}
.dest-search {
  padding: 8px 16px 8px 32px;
  width: 220px;
  background: rgba(245, 240, 232, 0.04);
  border: 1px solid rgba(201, 168, 76, 0.18);
  border-radius: 1px;
  color: var(--cream);
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.06em;
  outline: none;
  transition:
    border-color 0.22s,
    background 0.22s,
    width 0.35s var(--ease-out);
}
.dest-search:focus {
  border-color: var(--gold);
  background: rgba(201, 168, 76, 0.05);
  width: 260px;
}
.dest-search::placeholder {
  color: rgba(245, 240, 232, 0.25);
}
.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.3;
  pointer-events: none;
}
#result-count {
  text-align: center;
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.28);
  padding: 0 5vw 1.8rem;
}
@media (max-width: 800px) {
  .dest-head {
    grid-template-columns: 1fr;
  }
  .dest-head-line {
    display: none;
  }
  .dest-head-right {
    align-items: flex-start;
  }
  .dest-search,
  .dest-search:focus {
    width: 100%;
  }
}

/* Card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 8px;
  padding: 0 5vw;
  max-width: 1400px;
  margin: 0 auto;
}
.card {
  position: relative;
  background: rgba(22, 18, 9, 0.8);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(201, 168, 76, 0.09);
  overflow: hidden;
  opacity: 0;
  transform: translateY(22px);
  display: flex;
  flex-direction: column;
  transition:
    background 0.3s,
    border-color 0.3s,
    transform 0.4s var(--ease-out);
}
.card.vis {
  animation: riseIn 0.55s var(--ease-out) forwards;
}
@keyframes riseIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--blue);
  z-index: 2;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.35s var(--ease-out);
}
.card.ph::before {
  background: var(--gold);
}
.card:hover::before {
  transform: scaleY(1);
}
.card:hover {
  background: rgba(30, 24, 12, 0.92);
  border-color: rgba(201, 168, 76, 0.22);
  transform: translateY(-5px);
}
.card-img-wrap {
  position: relative;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(30%) saturate(0.8) brightness(0.74);
  transition:
    transform 0.6s var(--ease-out),
    filter 0.4s;
}
.card:hover .card-img {
  transform: scale(1.08);
  filter: sepia(10%) saturate(1) brightness(0.88);
}
.card-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 35%,
    rgba(13, 11, 8, 0.75) 100%
  );
  pointer-events: none;
}
.card-badge {
  position: absolute;
  bottom: 10px;
  left: 12px;
  font-family: var(--mono);
  font-size: 0.52rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  background: rgba(13, 11, 8, 0.72);
  border-radius: 1px;
  padding: 3px 9px;
  z-index: 3;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(201, 168, 76, 0.32);
}
.card.ph .card-badge {
  color: var(--gold-light);
  border-color: rgba(201, 168, 76, 0.45);
}
.card:not(.ph) .card-badge {
  color: #82cde0;
  border-color: rgba(74, 158, 187, 0.4);
}
.card-body {
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.card-year {
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.18em;
  color: rgba(245, 240, 232, 0.32);
  text-transform: uppercase;
}
.card-title {
  font-family: var(--serif);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.2;
  margin-top: 6px;
  color: var(--cream);
}
.card-rule {
  width: 20px;
  height: 1px;
  background: rgba(201, 168, 76, 0.3);
  margin: 12px 0;
}
.card-desc {
  font-family: var(--mono);
  font-size: 0.6rem;
  line-height: 1.85;
  color: rgba(245, 240, 232, 0.5);
  flex: 1;
  letter-spacing: 0.02em;
}
.card-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 14px;
  font-family: var(--mono);
  font-size: 0.52rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity 0.25s,
    transform 0.25s;
}
.card-cta svg {
  flex-shrink: 0;
}
.card:hover .card-cta {
  opacity: 1;
  transform: translateX(0);
}
.empty-state {
  grid-column: 1/-1;
  text-align: center;
  padding: 70px 20px;
}
.empty-state p {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.25);
}

/* ── BIO SECTION ── */
#bio {
  position: relative;
  z-index: 2;
  padding: 60px 0 90px;
}
.bio-head {
  text-align: center;
  padding: 0 5vw 3.5rem;
}
.bio-head-label {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: rgba(201, 168, 76, 0.4);
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.bio-head-h2 {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(2rem, 4.5vw, 4rem);
  font-weight: 300;
  line-height: 1;
  color: var(--cream);
  letter-spacing: -0.02em;
}
.bio-head-h2 em {
  color: var(--gold-light);
}
.bio-head-rule {
  width: 60px;
  height: 1px;
  background: rgba(201, 168, 76, 0.4);
  margin: 1.5rem auto 0;
}
.bio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 8px;
  padding: 0 5vw;
  max-width: 1400px;
  margin: 0 auto;
}
.bio-card {
  background: rgba(22, 18, 9, 0.8);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(201, 168, 76, 0.09);
  border-top: 2px solid var(--gold);
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(22px);
  transition:
    background 0.3s,
    transform 0.4s var(--ease-out),
    border-top-color 0.3s;
}
.bio-card.vis {
  animation: riseIn 0.55s var(--ease-out) forwards;
}
.bio-card:hover {
  background: rgba(30, 24, 12, 0.92);
  border-top-color: var(--gold-light);
  transform: translateY(-4px);
}
.bio-img-wrap {
  height: 210px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
}
.bio-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(30%) saturate(0.8) brightness(0.75);
  transition:
    transform 0.6s var(--ease-out),
    filter 0.4s;
}
.bio-card:hover .bio-img {
  transform: scale(1.06);
  filter: sepia(12%) saturate(0.95) brightness(0.88);
}
.bio-img-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(13, 11, 8, 0.7) 100%
  );
  pointer-events: none;
}
.bio-body {
  padding: 24px 26px 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.bio-icon {
  font-size: 24px;
  margin-bottom: 10px;
}
.bio-title {
  font-family: var(--serif);
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--cream);
}
.bio-rule {
  width: 20px;
  height: 1px;
  background: rgba(201, 168, 76, 0.3);
  margin: 12px 0;
}
.bio-teaser {
  font-family: var(--mono);
  font-size: 0.6rem;
  line-height: 1.9;
  color: rgba(245, 240, 232, 0.48);
  flex: 1;
  letter-spacing: 0.02em;
}
.bio-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 16px;
  font-family: var(--mono);
  font-size: 0.52rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity 0.25s,
    transform 0.25s;
}
.bio-card:hover .bio-cta {
  opacity: 1;
  transform: translateX(0);
}

/* ── CLOSING ── */
#closing {
  position: relative;
  z-index: 2;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem 5vw;
  overflow: hidden;
}
#closing::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(201, 168, 76, 0.04) 0%,
    transparent 65%
  );
  pointer-events: none;
}
.closing-label {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.32em;
  color: rgba(201, 168, 76, 0.38);
  text-transform: uppercase;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.closing-label::before,
.closing-label::after {
  content: "";
  width: 30px;
  height: 1px;
  background: rgba(201, 168, 76, 0.25);
}
.final-names {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 1.4s ease,
    transform 1.4s var(--ease-out);
}
.final-names.vis {
  opacity: 1;
  transform: translateY(0);
}
.fn-wrap {
  position: relative;
  display: inline-flex;
  align-items: baseline;
}
.fn-name {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(2.6rem, 7vw, 7.2rem);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.03em;
  color: rgba(245, 240, 232, 0.55);
  cursor: default;
  transition: color 0.35s;
}
.fn-wrap:hover .fn-name {
  color: var(--cream);
}
.fn-wrap.hero .fn-name {
  color: var(--cream);
}
.fn-dot {
  font-family: var(--serif);
  font-size: clamp(2.6rem, 7vw, 7.2rem);
  font-weight: 300;
  color: rgba(201, 168, 76, 0.28);
  line-height: 1;
  padding: 0 0.06em;
}
.fn-card {
  position: absolute;
  bottom: calc(100% + 1.4rem);
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--paper);
  border: 1px solid rgba(201, 168, 76, 0.18);
  padding: 1.6rem 2rem;
  min-width: 200px;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.25s,
    transform 0.25s;
  z-index: 20;
  white-space: nowrap;
}
.fn-wrap:hover .fn-card {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.fn-wrap.hero .fn-card {
  border-color: rgba(201, 168, 76, 0.4);
}
.fn-card-rank {
  font-family: var(--mono);
  font-size: 0.48rem;
  letter-spacing: 0.32em;
  color: rgba(245, 240, 232, 0.28);
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.8rem;
}
.fn-card-val {
  font-family: var(--serif);
  font-style: italic;
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 1;
  color: var(--cream);
  display: block;
  margin-bottom: 0.8rem;
}
.fn-card-val span {
  font-family: var(--mono);
  font-size: 0.5rem;
  color: rgba(245, 240, 232, 0.28);
  letter-spacing: 0.1em;
  margin-left: 0.3rem;
  vertical-align: middle;
}
.fn-card-detail {
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.1em;
  color: rgba(245, 240, 232, 0.22);
  text-transform: uppercase;
  line-height: 2;
  border-top: 1px solid rgba(245, 240, 232, 0.06);
  padding-top: 0.8rem;
}
#closing-hint {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.24em;
  color: rgba(245, 240, 232, 0.18);
  text-transform: uppercase;
  white-space: nowrap;
  animation: pulse 3s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

/* ── MODAL ── */
#modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: rgba(13, 11, 8, 0.9);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.35s,
    visibility 0.35s;
}
#modal-overlay.open {
  opacity: 1;
  visibility: visible;
}
#modal-box {
  position: relative;
  background: var(--paper);
  border: 1px solid rgba(201, 168, 76, 0.16);
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translateY(28px) scale(0.97);
  transition: transform 0.45s var(--ease-out);
}
#modal-overlay.open #modal-box {
  transform: translateY(0) scale(1);
}
#modal-img-wrap {
  position: relative;
  height: 230px;
  overflow: hidden;
  flex-shrink: 0;
}
#modal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(25%) brightness(0.72);
}
.modal-img-grad {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 30%,
    rgba(13, 11, 8, 0.88) 100%
  );
}
#modal-label {
  position: absolute;
  bottom: 1.2rem;
  left: 1.6rem;
  z-index: 3;
}
.modal-eyebrow-sm {
  font-family: var(--mono);
  font-size: 0.52rem;
  letter-spacing: 0.28em;
  color: rgba(201, 168, 76, 0.55);
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.3rem;
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 0.5s 0.18s,
    transform 0.5s 0.18s var(--ease-out);
}
.modal-place {
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--cream);
  display: block;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.55s 0.28s,
    transform 0.55s 0.28s var(--ease-out);
}
#modal-overlay.open .modal-eyebrow-sm,
#modal-overlay.open .modal-place {
  opacity: 1;
  transform: translateY(0);
}
.modal-close {
  position: absolute;
  top: 12px;
  right: 14px;
  z-index: 10;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 76, 0.2);
  background: rgba(13, 11, 8, 0.6);
  color: var(--muted);
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s;
}
.modal-close:hover {
  color: var(--cream);
  background: rgba(201, 168, 76, 0.18);
  border-color: var(--gold);
}
#modal-body {
  padding: 24px 32px 32px;
  overflow-y: auto;
  flex: 1;
}
.modal-cat {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}
#modal-title {
  font-family: var(--serif);
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--cream);
  line-height: 1.15;
}
#modal-year {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: var(--gold);
  text-transform: uppercase;
  margin: 0.5rem 0 0.9rem;
}
.modal-rule {
  width: 36px;
  height: 1px;
  background: var(--gold);
  opacity: 0.5;
  margin-bottom: 1rem;
}
#modal-desc {
  font-size: 0.9rem;
  line-height: 2;
  color: rgba(245, 240, 232, 0.75);
  font-family: var(--sans);
  font-weight: 300;
}

/* ── FOOTER ── */
footer {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 3rem 2rem 4rem;
  border-top: 1px solid rgba(201, 168, 76, 0.1);
}
footer p {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.22);
}

/* ── FIXED UI ── */
#back-top {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 500;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 76, 0.28);
  background: rgba(22, 18, 9, 0.9);
  backdrop-filter: blur(16px);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition:
    opacity 0.3s,
    transform 0.3s,
    border-color 0.22s,
    background 0.22s;
}
#back-top.vis {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}
#back-top:hover {
  background: rgba(201, 168, 76, 0.14);
  border-color: var(--gold);
}
#music-player {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(22, 18, 9, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 40px;
  padding: 8px 16px 8px 10px;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.55);
}
#music-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 76, 0.35);
  background: rgba(201, 168, 76, 0.08);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.22s;
}
#music-btn:hover {
  background: rgba(201, 168, 76, 0.18);
}
.music-bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 14px;
}
.music-bars span {
  width: 2.5px;
  background: var(--gold);
  height: 3px;
  opacity: 0.35;
  border-radius: 1px;
}
.music-bars.on span:nth-child(1) {
  animation: eq 0.85s infinite alternate;
}
.music-bars.on span:nth-child(2) {
  animation: eq 0.6s 0.1s infinite alternate;
}
.music-bars.on span:nth-child(3) {
  animation: eq 1s 0.2s infinite alternate;
}
.music-bars.on span:nth-child(4) {
  animation: eq 0.7s 0.05s infinite alternate;
}
@keyframes eq {
  from {
    height: 3px;
    opacity: 0.35;
  }
  to {
    height: 14px;
    opacity: 0.9;
  }
}

/* Touch */
@media (hover: none) {
  body {
    cursor: auto;
  }
  #cur,
  #cur-ring {
    display: none;
  }
  * {
    cursor: auto !important;
  }
}
