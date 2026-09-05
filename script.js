
/* =========================================================
ATELIER — PREMIUM RESPONSIVE STYLESHEET
========================================================= */

/* =========================================================
01 — ROOT / RESET
========================================================= */

:root {
--ink: #242320;
--ink-soft: #373530;

--paper: #f5f3ef;
--stone: #e8e2d8;
--sand: #d8d0c3;

--white: #ffffff;

--muted: #77736c;
--muted-light: rgba(255, 255, 255, 0.55);

--border: rgba(36, 35, 32, 0.14);
--border-light: rgba(255, 255, 255, 0.16);

--serif: "Playfair Display", Georgia, serif;
--sans: "DM Sans", Arial, sans-serif;

--container: 1380px;

--ease: cubic-bezier(0.22, 1, 0.36, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

html {
scroll-behavior: smooth;
}

body {
background: var(--paper);
color: var(--ink);
font-family: var(--sans);
font-size: 16px;
line-height: 1.5;
overflow-x: hidden;
}

body.menu-open {
overflow: hidden;
}

img {
display: block;
width: 100%;
}

button,
input {
font: inherit;
}

button {
border: 0;
background: none;
cursor: pointer;
}

a {
color: inherit;
text-decoration: none;
}

::selection {
background: var(--ink);
color: var(--paper);
}

/* =========================================================
02 — GLOBAL
========================================================= */

.container {
width: min(
var(--container),
calc(100% - 48px)
);

margin-inline: auto;
}

.section {
padding: 140px 0;
}

.section-small {
padding: 95px 0;
}

.section-dark {
background: var(--ink);
color: var(--white);
}

.section-stone {
background: var(--stone);
}

.eyebrow {
display: block;

margin-bottom: 25px;

color: var(--muted);

font-size: 11px;
font-weight: 500;

letter-spacing: 0.22em;
line-height: 1.3;

text-transform: uppercase;
}

.eyebrow-light {
color: rgba(255, 255, 255, 0.45);
}

.section-title {
max-width: 800px;

font-family: var(--serif);

font-size: clamp(
54px,
6vw,
96px
);

font-weight: 400;

letter-spacing: -0.055em;

line-height: 0.94;
}

.section-title em {
font-style: italic;
}

.title-light {
color: white;
}

.body-text {
max-width: 620px;

margin-top: 32px;

color: var(--muted);

font-size: 15px;

line-height: 1.85;
}

.body-light {
color: rgba(255, 255, 255, 0.5);
}

.large-text {
max-width: 850px;

font-family: var(--serif);

font-size: clamp(
30px,
3vw,
48px
);

letter-spacing: -0.035em;

line-height: 1.18;
}

.text-link {
display: inline-flex;

align-items: center;
gap: 9px;

margin-top: 38px;

font-size: 13px;

transition:
opacity 0.3s ease,
gap 0.3s var(--ease);
}

.text-link svg {
width: 15px;
height: 15px;

transition:
transform 0.3s var(--ease);
}

.text-link:hover {
gap: 14px;
}

.text-link:hover svg {
transform: translate(2px, -2px);
}

.dark-link {
border-bottom: 1px solid rgba(36, 35, 32, 0.35);

padding-bottom: 8px;
}

.light-link {
color: white;
}

.button {
display: inline-flex;

min-height: 54px;

align-items: center;
justify-content: center;
gap: 12px;

padding: 0 27px;

border-radius: 100px;

font-size: 13px;

transition:
transform 0.35s var(--ease),
background 0.35s ease,
color 0.35s ease;
}

.button svg {
width: 16px;
height: 16px;

transition:
transform 0.35s var(--ease);
}

.button:hover {
transform: translateY(-3px);
}

.button:hover svg {
transform: translate(2px, -2px);
}

.button-light {
background: white;
color: var(--ink);
}

.button-light:hover {
background: var(--stone);
}

.button-dark {
background: var(--ink);
color: white;
}

.button-dark:hover {
background: #000;
}

/* =========================================================
03 — HEADER
========================================================= */

.site-header {
position: absolute;

top: 0;
left: 0;
right: 0;

z-index: 100;
}

.nav-container {
height: 100px;

display: flex;

align-items: center;
justify-content: space-between;
}

.logo {
color: white;

font-size: 19px;
font-weight: 500;

letter-spacing: 0.24em;
}

.logo span {
opacity: 0.5;
}

.desktop-nav {
display: flex;

align-items: center;

gap: 38px;

margin-left: auto;
margin-right: 42px;
}

.desktop-nav a {
position: relative;

color: rgba(255, 255, 255, 0.72);

font-size: 12px;

transition: color 0.3s ease;
}

.desktop-nav a::after {
content: "";

position: absolute;

left: 0;
bottom: -7px;

width: 0;
height: 1px;

background: white;

transition: width 0.35s var(--ease);
}

.desktop-nav a:hover {
color: white;
}

.desktop-nav a:hover::after {
width: 100%;
}

.nav-cta {
display: flex;

align-items: center;
gap: 9px;

padding: 12px 20px;

border: 1px solid rgba(255, 255, 255, 0.3);

border-radius: 100px;

color: white;

font-size: 11px;

transition:
background 0.3s ease,
color 0.3s ease;
}

.nav-cta svg {
width: 14px;
height: 14px;
}

.nav-cta:hover {
background: white;
color: var(--ink);
}

.mobile-menu-button {
display: none;

color: white;
}

.mobile-menu-button svg {
width: 25px;
height: 25px;
}

/* =========================================================
04 — MOBILE MENU
========================================================= */

.mobile-menu {
position: fixed;

inset: 0;

z-index: 200;

visibility: hidden;
opacity: 0;

background: var(--ink);

transition:
opacity 0.4s ease,
visibility 0.4s ease;
}

.mobile-menu.active {
visibility: visible;
opacity: 1;
}

.mobile-menu-inner {
width: min(
var(--container),
calc(100% - 48px)
);

height: 100%;

margin: auto;

display: flex;

flex-direction: column;
}

.mobile-menu-close {
align-self: flex-end;

margin-top: 30px;

color: white;
}

.mobile-menu-close svg {
width: 25px;
height: 25px;
}

.mobile-menu nav {
flex: 1;

display: flex;

flex-direction: column;

justify-content: center;

gap: 18px;
}

.mobile-menu nav a {
color: white;

font-family: var(--serif);

font-size: clamp(
48px,
12vw,
76px
);

letter-spacing: -0.045em;

line-height: 0.95;

opacity: 0.9;

transition:
opacity 0.3s ease,
padding-left 0.4s var(--ease);
}

.mobile-menu nav a:hover {
opacity: 0.5;

padding-left: 12px;
}

/* =========================================================
05 — HERO
========================================================= */

.hero {
position: relative;

min-height: 100vh;

min-height: 780px;

display: flex;

align-items: flex-end;

overflow: hidden;

color: white;

background: #222;
}

.hero-image {
position: absolute;

inset: 0;

overflow: hidden;
}

.hero-image img {
width: 100%;
height: 100%;

object-fit: cover;

object-position: center;

animation:
heroImageReveal 1.8s var(--ease)
both;
}

@keyframes heroImageReveal {

from {
transform: scale(1.08);
}

to {
transform: scale(1);
}

}

.hero-overlay {
position: absolute;

inset: 0;

background: rgba(0, 0, 0, 0.18);
}

.hero-gradient {
position: absolute;

inset: 0;

background:
linear-gradient(
to bottom,
rgba(0, 0, 0, 0.3),
transparent 35%,
rgba(0, 0, 0, 0.72)
);
}

.hero-container {
position: relative;

width: 100%;

min-height: 780px;

padding-top: 180px;
padding-bottom: 78px;

display: flex;

align-items: flex-end;

justify-content: space-between;

gap: 80px;
}

.hero-content {
max-width: 1050px;
}

.hero-eyebrow {
margin-bottom: 30px;

color: rgba(255, 255, 255, 0.62);

animation:
heroTextReveal 1s 0.15s var(--ease)
both;
}

.hero-title {
font-family: var(--serif);

font-size: clamp(
66px,
9vw,
128px
);

font-weight: 400;

letter-spacing: -0.065em;

line-height: 0.86;

animation:
heroTextReveal 1s 0.25s var(--ease)
both;
}

.hero-title em {
color: rgba(255, 255, 255, 0.82);

font-style: italic;
}

.hero-description {
max-width: 520px;

margin-top: 34px;

color: rgba(255, 255, 255, 0.7);

font-size: 15px;

line-height: 1.7;

animation:
heroTextReveal 1s 0.35s var(--ease)
both;
}

.hero-actions {
display: flex;

align-items: center;

gap: 28px;

margin-top: 38px;

animation:
heroTextReveal 1s 0.45s var(--ease)
both;
}

@keyframes heroTextReveal {

from {
opacity: 0;
transform: translateY(35px);
}

to {
opacity: 1;
transform: translateY(0);
}

}

.hero-metrics {
flex-shrink: 0;

display: flex;

flex-direction: column;

gap: 30px;
}

.metric {
min-width: 185px;

padding-left: 25px;

border-left: 1px solid rgba(255, 255, 255, 0.35);
}

.metric-number {
display: block;

font-family: var(--serif);

font-size: 48px;

line-height: 1;
}

.metric-label {
display: block;

margin-top: 9px;

color: rgba(255, 255, 255, 0.52);

font-size: 10px;

letter-spacing: 0.17em;

text-transform: uppercase;
}

.scroll-indicator {
position: absolute;

bottom: 26px;

left: 50%;

z-index: 2;

transform: translateX(-50%);

display: flex;

flex-direction: column;

align-items: center;

gap: 9px;

color: rgba(255, 255, 255, 0.55);

font-size: 9px;

letter-spacing: 0.2em;

text-transform: uppercase;
}

.scroll-indicator svg {
width: 15px;
height: 15px;

animation:
scrollArrow 1.7s infinite ease-in-out;
}

@keyframes scrollArrow {

0%,
100% {
transform: translateY(0);
}

50% {
transform: translateY(6px);
}

}

/* =========================================================
06 — ABOUT
========================================================= */

.about {
background: var(--paper);
}

.about-grid {
display: grid;

grid-template-columns:
minmax(280px, 0.75fr)
minmax(0, 1.25fr);

gap: 80px;
}

.about-heading {
padding-top: 5px;
}

.about-content {
padding-top: 70px;
}

.stats-grid {
display: grid;

grid-template-columns:
repeat(4, 1fr);

margin-top: 65px;

padding-top: 28px;

border-top: 1px solid var(--border);
}

.stat {
padding-right: 20px;
}

.stat-number {
display: block;

font-family: var(--serif);

font-size: 44px;

letter-spacing: -0.04em;

line-height: 1;
}

.stat-label {
display: block;

margin-top: 10px;

color: var(--muted);

font-size: 10px;

letter-spacing: 0.16em;

text-transform: uppercase;
}

.about-image {
height: 700px;

margin-top: 135px;

overflow: hidden;
}

.about-image img {
height: 100%;

object-fit: cover;

transition:
transform 1.2s var(--ease);
}

.about-image:hover img {
transform: scale(1.025);
}

/* =========================================================
07 — BENEFITS
========================================================= */

.benefits {
background: var(--stone);
}

.section-intro {
display: flex;

align-items: flex-end;

justify-content: space-between;

gap: 70px;

margin-bottom: 70px;
}

.intro-description {
max-width: 390px;

margin-bottom: 5px;

color: var(--muted);

font-size: 14px;

line-height: 1.75;
}

.benefits-grid {
display: grid;

grid-template-columns:
repeat(2, 1fr);

border-top: 1px solid var(--border);

border-left: 1px solid var(--border);
}

.benefit-card {
min-height: 350px;

padding: 36px;

display: flex;

flex-direction: column;

justify-content: space-between;

border-right: 1px solid var(--border);
border-bottom: 1px solid var(--border);

transition:
background 0.5s ease,
transform 0.5s var(--ease);
}

.benefit-card:hover {
background: rgba(255, 255, 255, 0.24);

transform: translateY(-5px);
}

.card-top {
display: flex;

align-items: center;

justify-content: space-between;
}

.card-number {
color: var(--muted);

font-size: 11px;
}

.card-symbol {
color: var(--muted);

font-family: var(--serif);

font-size: 24px;

transition:
transform 0.5s var(--ease);
}

.benefit-card:hover .card-symbol {
transform: rotate(90deg);
}

.card-content h3 {
font-family: var(--serif);

font-size: 35px;

font-weight: 400;

letter-spacing: -0.035em;
}

.card-content p {
max-width: 500px;

margin-top: 14px;

color: var(--muted);

font-size: 14px;

line-height: 1.7;
}

/* =========================================================
08 — SERVICES
========================================================= */

.services {
background: var(--paper);
}

.services-grid {
display: grid;

grid-template-columns:
minmax(280px, 0.75fr)
minmax(0, 1.25fr);

gap: 90px;
}

.services-intro .body-text {
max-width: 400px;
}

.services-list {
border-top: 1px solid var(--border);
}

.service-item {
border-bottom: 1px solid var(--border);
}

.service-header {
width: 100%;

min-height: 120px;

display: flex;

align-items: center;

justify-content: space-between;

gap: 30px;

color: var(--ink);

text-align: left;
}

.service-title-wrapper {
display: flex;

align-items: center;

gap: 30px;
}

.service-number {
color: var(--muted);

font-size: 11px;
}

.service-header h3 {
font-family: var(--serif);

font-size: clamp(
28px,
3vw,
42px
);

font-weight: 400;

letter-spacing: -0.035em;
}

.service-icon {
width: 40px;
height: 40px;

flex-shrink: 0;

display: flex;

align-items: center;
justify-content: center;

border: 1px solid var(--border);

border-radius: 50%;

transition:
background 0.3s ease,
color 0.3s ease,
transform 0.3s var(--ease);
}

.service-icon svg {
width: 15px;
height: 15px;
}

.service-header:hover .service-icon {
background: var(--ink);

color: white;

transform: rotate(90deg);
}

.service-content {
display: grid;

grid-template-rows: 0fr;

transition:
grid-template-rows 0.5s var(--ease);
}

.service-content.active {
grid-template-rows: 1fr;
}

.service-content p {
min-height: 0;

max-width: 620px;

overflow: hidden;

padding-left: 59px;

padding-bottom: 0;

color: var(--muted);

font-size: 15px;

line-height: 1.8;

opacity: 0;

transition:
opacity 0.3s ease,
padding-bottom 0.5s var(--ease);
}

.service-content.active p {
padding-bottom: 35px;

opacity: 1;
}

/* =========================================================
09 — GALLERY
========================================================= */

.gallery {
background: var(--paper);
}

.gallery-heading {
display: flex;

align-items: flex-end;

justify-content: space-between;

margin-bottom: 70px;
}

.gallery-label {
color: var(--muted);

font-size: 10px;

letter-spacing: 0.18em;

text-transform: uppercase;
}

.gallery-grid {
display: grid;

grid-template-columns:
repeat(12, 1fr);

gap: 18px;
}

.gallery-image {
overflow: hidden;

background: var(--stone);
}

.gallery-image img {
width: 100%;
height: 100%;

object-fit: cover;

transition:
transform 1s var(--ease);
}

.gallery-image:hover img {
transform: scale(1.045);
}

.gallery-large {
grid-column: span 7;

height: 650px;
}

.gallery-small {
grid-column: span 5;

height: 500px;

margin-top: 120px;
}

.gallery-medium {
grid-column: span 5;

height: 520px;
}

.gallery-full {
grid-column: span 7;

height: 650px;
}

.gallery-grid > .gallery-full {
grid-column: span 12;

height: 600px;

margin-top: 10px;
}

/* =========================================================
10 — PROJECTS
========================================================= */

.projects {
background: var(--ink);

color: white;
}

.projects-heading {
display: flex;

align-items: flex-end;

justify-content: space-between;

gap: 50px;

margin-bottom: 70px;
}

.projects-grid {
display: grid;

grid-template-columns:
repeat(2, 1fr);

gap: 22px;
}

.project-card {
min-width: 0;
}

.project-image {
position: relative;

height: 500px;

overflow: hidden;

background: #333;
}

.project-featured {
grid-column: span 2;
}

.project-featured .project-image {
height: 670px;
}

.project-image > img {
width: 100%;
height: 100%;

object-fit: cover;

transition:
transform 1s var(--ease);
}

.project-card:hover .project-image > img {
transform: scale(1.045);
}

.project-overlay {
position: absolute;

inset: 0;

display: flex;

align-items: flex-end;

padding: 42px;

background:
linear-gradient(
to top,
rgba(0, 0, 0, 0.72),
rgba(0, 0, 0, 0.05) 60%
);

opacity: 0;

transition:
opacity 0.5s ease;
}

.project-card:hover .project-overlay {
opacity: 1;
}

.project-overlay-content {
width: 100%;

display: flex;

align-items: flex-end;

justify-content: space-between;

transform: translateY(20px);

transition:
transform 0.6s var(--ease);
}

.project-card:hover
.project-overlay-content {
transform: translateY(0);
}

.project-overlay-content span:not(.project-arrow) {
display: block;

margin-bottom: 10px;

color: rgba(255, 255, 255, 0.6);

font-size: 10px;

letter-spacing: 0.17em;

text-transform: uppercase;
}

.project-overlay-content h3 {
font-family: var(--serif);

font-size: 42px;

font-weight: 400;

letter-spacing: -0.04em;

line-height: 1;
}

.project-overlay-content p {
margin-top: 8px;

color: rgba(255, 255, 255, 0.65);

font-size: 12px;
}

.project-arrow {
width: 52px;
height: 52px;

display: flex;

align-items: center;
justify-content: center;

flex-shrink: 0;

border-radius: 50%;

background: white;

color: var(--ink);
}

.project-arrow svg {
width: 18px;
height: 18px;
}

.project-mobile-info {
display: none;
}

/* =========================================================
11 — PROCESS
========================================================= */

.process {
background: var(--paper);
}

.process-grid {
display: grid;

grid-template-columns:
minmax(280px, 0.75fr)
minmax(0, 1.25fr);

gap: 90px;
}

.process-list {
border-top: 1px solid var(--border);
}

.process-step {
display: grid;

grid-template-columns: 70px 1fr;

gap: 20px;

padding: 43px 0;

border-bottom: 1px solid var(--border);
}

.process-number {
color: var(--muted);

font-size: 11px;
}

.process-step h3 {
font-family: var(--serif);

font-size: 38px;

font-weight: 400;

letter-spacing: -0.035em;

line-height: 1;
}

.process-step p {
max-width: 600px;

margin-top: 15px;

color: var(--muted);

font-size: 14px;

line-height: 1.75;
}

/* =========================================================
12 — TESTIMONIALS
========================================================= */

.testimonials {
background: var(--stone);

overflow: hidden;
}

.testimonials-heading {
display: flex;

align-items: flex-end;

justify-content: space-between;

margin-bottom: 65px;
}

.testimonial-controls {
display: flex;

gap: 9px;
}

.testimonial-controls button {
width: 46px;
height: 46px;

display: flex;

align-items: center;
justify-content: center;

border: 1px solid var(--border);

border-radius: 50%;

transition:
background 0.3s ease,
color 0.3s ease;
}

.testimonial-controls button:hover {
background: var(--ink);

color: white;
}

.testimonial-controls svg {
width: 16px;
height: 16px;
}

.testimonial-slider {
overflow: hidden;

border-top: 1px solid var(--border);
}

.testimonial-track {
display: flex;

width: 300%;

transition:
transform 0.7s var(--ease);
}

.testimonial {
width: 33.333333%;

flex-shrink: 0;

display: grid;

grid-template-columns:
minmax(220px, 0.4fr)
minmax(0, 1fr);

gap: 80px;

padding: 70px 0 45px;
}

.testimonial-person img {
width: 105px;
height: 105px;

border-radius: 50%;

object-fit: cover;

filter: grayscale(100%);
}

.testimonial-location {
margin-top: 28px;

color: var(--muted);

font-size: 10px;

letter-spacing: 0.15em;

text-transform: uppercase;
}

.testimonial-name {
margin-top: 5px;

font-size: 14px;
}

.testimonial-role {
margin-top: 3px;

color: var(--muted);

font-size: 12px;
}

.stars {
display: flex;

gap: 4px;

margin-bottom: 30px;
}

.stars svg {
width: 13px;
height: 13px;

fill: currentColor;
}

.testimonial blockquote {
max-width: 950px;

font-family: var(--serif);

font-size: clamp(
34px,
4vw,
62px
);

letter-spacing: -0.045em;

line-height: 1.12;
}

.testimonial-dots {
display: flex;

gap: 7px;

margin-top: 18px;
}

.testimonial-dots button {
width: 25px;
height: 2px;

background: rgba(36, 35, 32, 0.2);

transition:
width 0.4s var(--ease),
background 0.3s ease;
}

.testimonial-dots button.active {
width: 52px;

background: var(--ink);
}

/* =========================================================
13 — PARTNERS
========================================================= */

.partners {
background: var(--paper);

overflow: hidden;
}

.logo-marquee {
margin-top: 45px;

overflow: hidden;

border-top: 1px solid var(--border);
border-bottom: 1px solid var(--border);
}

.logo-track {
display: flex;

width: max-content;

animation:
logoMarquee 28s linear infinite;
}

.logo-track:hover {
animation-play-state: paused;
}

.partner-logo {
width: 220px;
height: 125px;

display: flex;

align-items: center;
justify-content: center;

border-right: 1px solid var(--border);

color: rgba(36, 35, 32, 0.48);

font-size: 13px;

letter-spacing: 0.19em;

white-space: nowrap;
}

@keyframes logoMarquee {

from {
transform: translateX(0);
}

to {
transform: translateX(-50%);
}

}

/* =========================================================
14 — WHY US
========================================================= */

.why-us {
background: var(--ink);

color: white;
}

.why-grid {
display: grid;

grid-template-columns:
minmax(280px, 0.8fr)
minmax(0, 1.2fr);

gap: 90px;
}

.why-list {
border-top: 1px solid var(--border-light);
}

.why-item {
display: grid;

grid-template-columns: 60px 1fr;

gap: 20px;

padding: 40px 0;

border-bottom: 1px solid var(--border-light);
}

.why-number {
color: rgba(255, 255, 255, 0.35);

font-size: 11px;
}

.why-item h3 {
font-family: var(--serif);

font-size: 38px;

font-weight: 400;

letter-spacing: -0.035em;

line-height: 1;
}

.why-item p {
max-width: 600px;

margin-top: 15px;

color: rgba(255, 255, 255, 0.45);

font-size: 14px;

line-height: 1.75;
}

/* =========================================================
15 — NEWSLETTER
========================================================= */

.newsletter {
background: var(--stone);

text-align: center;
}

.newsletter-content {
max-width: 950px;

margin-inline: auto;
}

.newsletter-content .eyebrow {
margin-bottom: 28px;
}

.newsletter-title {
margin-inline: auto;
}

.newsletter-description {
max-width: 550px;

margin: 30px auto 0;

color: var(--muted);

font-size: 14px;

line-height: 1.7;
}

.newsletter-form {
max-width: 650px;

margin: 45px auto 0;

display: flex;

gap: 9px;
}

.newsletter-form input {
flex: 1;

height: 56px;

min-width: 0;

padding: 0 25px;

border: 1px solid rgba(36, 35, 32, 0.14);

border-radius: 100px;

outline: none;

background: var(--paper);

color: var(--ink);

font-size: 13px;

transition:
border-color 0.3s ease,
box-shadow 0.3s ease;
}

.newsletter-form input::placeholder {
color: var(--muted);
}

.newsletter-form input:focus {
border-color: rgba(36, 35, 32, 0.5);

box-shadow:
0 0 0 4px
rgba(36, 35, 32, 0.04);
}

.newsletter-form .button {
flex-shrink: 0;

min-height: 56px;
}

.privacy-note {
margin-top: 17px;

color: var(--muted);

font-size: 10px;
}

/* =========================================================
16 — FOOTER
========================================================= */

.footer {
background: var(--paper);
}

.footer-grid {
display: grid;

grid-template-columns:
2fr
1fr
1.2fr
1fr;

gap: 60px;

padding: 80px 0;
}

.footer-brand .logo {
color: var(--ink);
}

.footer-brand p {
max-width: 350px;

margin-top: 25px;

color: var(--muted);

font-size: 13px;

line-height: 1.8;
}

.social-links {
display: flex;

gap: 8px;

margin-top: 28px;
}

.social-links a {
width: 40px;
height: 40px;

display: flex;

align-items: center;
justify-content: center;

border: 1px solid var(--border);

border-radius: 50%;

transition:
background 0.3s ease,
color 0.3s ease;
}

.social-links a:hover {
background: var(--ink);

color: white;
}

.social-links svg {
width: 15px;
height: 15px;
}

.footer-column {
display: flex;

flex-direction: column;

align-items: flex-start;
}

.footer-column h4 {
margin-bottom: 24px;

color: var(--muted);

font-size: 10px;

font-weight: 500;

letter-spacing: 0.18em;

text-transform: uppercase;
}

.footer-column a,
.footer-column p {
margin-bottom: 11px;

color: var(--ink);

font-size: 13px;

transition:
opacity 0.3s ease;
}

.footer-column a:hover {
opacity: 0.45;
}

.footer-bottom {
min-height: 75px;

display: grid;

grid-template-columns:
1fr
auto
1fr;

align-items: center;

gap: 30px;

border-top: 1px solid var(--border);

color: var(--muted);

font-size: 10px;
}

.footer-bottom-links {
display: flex;

gap: 25px;
}

.footer-bottom a {
transition:
color 0.3s ease;
}

.footer-bottom a:hover {
color: var(--ink);
}

.back-to-top {
justify-self: end;

display: flex;

align-items: center;

gap: 8px;
}

.back-to-top svg {
width: 13px;
height: 13px;
}

/* =========================================================
17 — SCROLL REVEAL
========================================================= */

.reveal {
opacity: 0;

transform: translateY(45px);

transition:
opacity 0.9s var(--ease),
transform 0.9s var(--ease);
}

.reveal.visible {
opacity: 1;

transform: translateY(0);
}

/* =========================================================
18 — TABLET
========================================================= */

@media (max-width: 1100px) {

.section {
padding: 110px 0;
}

.desktop-nav {
gap: 25px;

```
margin-right: 25px;
```

}

.hero-container {
padding-bottom: 65px;
}

.hero-title {
font-size: clamp(
62px,
9vw,
100px
);
}

.hero-metrics {
display: none;
}

.about-grid,
.services-grid,
.process-grid,
.why-grid {
grid-template-columns:
0.65fr
1.35fr;

```
gap: 60px;
```

}

.about-content {
padding-top: 40px;
}

.about-image {
height: 580px;

```
margin-top: 100px;
```

}

.testimonial {
gap: 50px;
}

.footer-grid {
grid-template-columns:
1.7fr
1fr
1fr;
}

}

/* =========================================================
19 — MOBILE
========================================================= */

@media (max-width: 767px) {

.container {
width: calc(100% - 36px);
}

.section {
padding: 90px 0;
}

.section-small {
padding: 70px 0;
}

.section-title {
font-size: clamp(
49px,
14vw,
72px
);

```
letter-spacing: -0.055em;
```

}

.eyebrow {
margin-bottom: 20px;

```
font-size: 9px;
```

}

.body-text {
margin-top: 25px;

```
font-size: 14px;

line-height: 1.75;
```

}

.large-text {
font-size: 29px;
}

/* Header */

.nav-container {
height: 82px;
}

.desktop-nav,
.nav-cta {
display: none;
}

.mobile-menu-button {
display: block;
}

/* Hero */

.hero {
min-height: 760px;
}

.hero-container {
min-height: 760px;

```
padding-top: 150px;
padding-bottom: 70px;

align-items: flex-end;
```

}

.hero-title {
font-size: clamp(
57px,
15.8vw,
82px
);

```
line-height: 0.88;
```

}

.hero-description {
max-width: 380px;

```
margin-top: 26px;

font-size: 13px;
```

}

.hero-actions {
flex-direction: column;

```
align-items: flex-start;

gap: 22px;

margin-top: 28px;
```

}

.button {
min-height: 50px;

```
padding: 0 22px;
```

}

.scroll-indicator {
display: none;
}

/* About */

.about-grid {
display: block;
}

.about-content {
padding-top: 50px;
}

.stats-grid {
grid-template-columns:
repeat(2, 1fr);

```
row-gap: 32px;

margin-top: 45px;
```

}

.stat-number {
font-size: 37px;
}

.about-image {
height: 430px;

```
margin-top: 70px;
```

}

/* Benefits */

.section-intro {
display: block;

```
margin-bottom: 45px;
```

}

.intro-description {
margin-top: 28px;

```
font-size: 13px;
```

}

.benefits-grid {
grid-template-columns: 1fr;
}

.benefit-card {
min-height: 285px;

```
padding: 27px;
```

}

.card-content h3 {
font-size: 31px;
}

.card-content p {
font-size: 13px;
}

/* Services */

.services-grid {
display: block;
}

.services-intro {
margin-bottom: 55px;
}

.service-header {
min-height: 95px;
}

.service-title-wrapper {
gap: 17px;
}

.service-header h3 {
font-size: 27px;
}

.service-number {
font-size: 9px;
}

.service-icon {
width: 34px;
height: 34px;
}

.service-content p {
padding-left: 39px;

```
font-size: 13px;
```

}

.service-content.active p {
padding-bottom: 28px;
}

/* Gallery */

.gallery-heading {
display: block;

```
margin-bottom: 45px;
```

}

.gallery-label {
display: block;

```
margin-top: 20px;
```

}

.gallery-grid {
display: grid;

```
grid-template-columns: 1fr;

gap: 12px;
```

}

.gallery-large,
.gallery-small,
.gallery-medium,
.gallery-full,
.gallery-grid > .gallery-full {
grid-column: auto;

```
width: 100%;

height: 390px;

margin-top: 0;
```

}

.gallery-grid > .gallery-full {
height: 420px;
}

/* Projects */

.projects-heading {
display: block;

```
margin-bottom: 50px;
```

}

.projects-heading .text-link {
margin-top: 25px;
}

.projects-grid {
grid-template-columns: 1fr;

```
gap: 38px;
```

}

.project-featured {
grid-column: auto;
}

.project-image,
.project-featured .project-image {
height: 430px;
}

.project-overlay {
display: none;
}

.project-mobile-info {
display: block;

```
padding-top: 17px;
```

}

.project-mobile-info h3 {
font-family: var(--serif);

```
font-size: 27px;

font-weight: 400;

letter-spacing: -0.035em;
```

}

.project-mobile-info p {
margin-top: 5px;

```
color: rgba(255, 255, 255, 0.5);

font-size: 10px;

letter-spacing: 0.08em;

text-transform: uppercase;
```

}

/* Process */

.process-grid {
display: block;
}

.process-intro {
margin-bottom: 55px;
}

.process-step {
grid-template-columns: 42px 1fr;

```
padding: 32px 0;
```

}

.process-step h3 {
font-size: 31px;
}

.process-step p {
font-size: 13px;

```
line-height: 1.7;
```

}

/* Testimonials */

.testimonials-heading {
display: block;

```
margin-bottom: 45px;
```

}

.testimonial-controls {
margin-top: 30px;
}

.testimonial {
grid-template-columns: 1fr;

```
gap: 35px;

padding: 50px 0 35px;
```

}

.testimonial-person img {
width: 80px;
height: 80px;
}

.testimonial-location {
margin-top: 18px;
}

.testimonial-content {
padding-bottom: 10px;
}

.testimonial blockquote {
font-size: 35px;

```
line-height: 1.14;
```

}

/* Partners */

.partner-logo {
width: 160px;

```
height: 95px;

font-size: 11px;
```

}

/* Why */

.why-grid {
display: block;
}

.why-intro {
margin-bottom: 55px;
}

.why-item {
grid-template-columns: 42px 1fr;

```
padding: 32px 0;
```

}

.why-item h3 {
font-size: 30px;
}

.why-item p {
font-size: 13px;
}

/* Newsletter */

.newsletter-title {
font-size: 51px;
}

.newsletter-description {
font-size: 13px;
}

.newsletter-form {
flex-direction: column;

```
margin-top: 35px;
```

}

.newsletter-form input,
.newsletter-form .button {
width: 100%;

```
height: 54px;
```

}

/* Footer */

.footer-grid {
grid-template-columns:
repeat(2, 1fr);

```
gap: 50px 30px;

padding: 65px 0;
```

}

.footer-brand {
grid-column: span 2;
}

.footer-column a,
.footer-column p {
font-size: 12px;
}

.footer-bottom {
grid-template-columns: 1fr;

```
padding: 25px 0;

gap: 16px;
```

}

.footer-bottom-links {
order: 3;
}

.back-to-top {
justify-self: start;
}

}

/* =========================================================
20 — SMALL MOBILE
========================================================= */

@media (max-width: 420px) {

.container {
width: calc(100% - 30px);
}

.hero-title {
font-size: 53px;
}

.hero {
min-height: 720px;
}

.hero-container {
min-height: 720px;
}

.section {
padding: 75px 0;
}

.section-title {
font-size: 47px;
}

.large-text {
font-size: 27px;
}

.about-image {
height: 350px;
}

.gallery-large,
.gallery-small,
.gallery-medium,
.gallery-full,
.gallery-grid > .gallery-full {
height: 330px;
}

.project-image,
.project-featured .project-image {
height: 360px;
}

.testimonial blockquote {
font-size: 31px;
}

.newsletter-title {
font-size: 46px;
}

}

/* =========================================================
21 — ACCESSIBILITY
========================================================= */

@media (prefers-reduced-motion: reduce) {

html {
scroll-behavior: auto;
}

*,
*::before,
*::after {
animation-duration: 0.01ms !important;

```
animation-iteration-count: 1 !important;

transition-duration: 0.01ms !important;
```

}

}

/* =========================================================
22 — FOCUS STATES
========================================================= */

a:focus-visible,
button:focus-visible,
input:focus-visible {
outline: 2px solid currentColor;

outline-offset: 4px;
}

/* =========================================================
END
========================================================= */
