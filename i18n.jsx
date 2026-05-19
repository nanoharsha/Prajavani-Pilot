// ════════════════════════════════════════════════════════════════════════════
// LANGUAGE / i18n — global lang state + useLang hook + t() inline helper
// English ↔ Telugu toggle. Persisted to localStorage.
// ════════════════════════════════════════════════════════════════════════════

(function () {
  try {
    window.__lang = localStorage.getItem('prajavani_lang') || 'en';
  } catch (e) { window.__lang = 'en'; }
  window.__langListeners = new Set();
})();

function setLang(l) {
  window.__lang = l;
  try { localStorage.setItem('prajavani_lang', l); } catch (e) {}
  document.documentElement.setAttribute('lang', l === 'te' ? 'te' : 'en');
  document.body.classList.toggle('lang-te', l === 'te');
  window.__langListeners.forEach(f => { try { f(); } catch (e) {} });
}

function useLang() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => {
    window.__langListeners.add(force);
    return () => window.__langListeners.delete(force);
  }, []);
  return window.__lang;
}

// Translation helper.
//   Two-arg form:  t('English', 'తెలుగు')  — inline pair, used by existing code.
//   One-arg form:  t('English')            — looks the string up in window.TR
//                                            (the central dictionary in tr-te.jsx).
// Reads current lang at render time (component must use useLang to subscribe to changes).
function t(en, te) {
  if (te !== undefined) return window.__lang === 'te' && te ? te : en;
  if (window.__lang === 'te' && window.TR) {
    const hit = window.TR[en];
    if (hit) return hit;
    if (window.__TR_WARN) console.warn('[i18n] missing Telugu for:', en);
  }
  return en;
}

// Number formatter — Indian style (12,110 ; 5,000)
function fmt(n) {
  if (typeof n !== 'number') return n;
  return n.toLocaleString('en-IN');
}

Object.assign(window, { setLang, useLang, t, fmt });


// ════════════════════════════════════════════════════════════════════════════
// PRINT MODE — global flag flipped by the "Save as PDF" button so multi-state
// components (tabs, modals, accordions, case-by-case panels) can unpack all
// content for printing. Listens to beforeprint/afterprint to handle native
// Ctrl/Cmd+P too.
// ════════════════════════════════════════════════════════════════════════════

window.__printMode = false;
window.__pmListeners = new Set();

function setPrintMode(b) {
  window.__printMode = !!b;
  document.body.classList.toggle('print-mode', !!b);
  window.__pmListeners.forEach(f => { try { f(); } catch (e) {} });
}

function usePrintMode() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => {
    window.__pmListeners.add(force);
    const onBefore = () => setPrintMode(true);
    const onAfter = () => setPrintMode(false);
    window.addEventListener('beforeprint', onBefore);
    window.addEventListener('afterprint', onAfter);
    return () => {
      window.__pmListeners.delete(force);
      window.removeEventListener('beforeprint', onBefore);
      window.removeEventListener('afterprint', onAfter);
    };
  }, []);
  return window.__printMode;
}

// Print trigger — set mode, let React re-render fully, then call print()
async function triggerPrint() {
  setPrintMode(true);
  // wait a few frames for React to render unpacked content
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  await new Promise(r => setTimeout(r, 350));
  window.print();
  // afterprint event will clear; this is a backup
  setTimeout(() => setPrintMode(false), 1500);
}

Object.assign(window, { setPrintMode, usePrintMode, triggerPrint });
