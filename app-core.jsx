// ════════════════════════════════════════════════════════════════════════════
// SHARED — constants, photo placeholder, bar component
// ════════════════════════════════════════════════════════════════════════════

const C = {
  navy: '#0d2137', navyLight: '#1a3a56',
  amber: '#c47d2e', amberLight: '#f0a84a',
  teal: '#2a706a', tealLight: '#3a9088',
  red: '#c0392b',
  bg: '#f7f4ef', bgAlt: '#edeae4',
  white: '#ffffff', border: '#d8d4cc',
  text: '#1a1814', textMid: '#4a4640', textLight: '#7a7570'
};

const SS = {
  section: (bg) => ({ background: bg || C.white, padding: '80px 0' }),
  container: { maxWidth: 1100, margin: '0 auto', padding: '0 32px' },
  eyebrow: { fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.amber, marginBottom: 12 },
  sectionTitle: { fontFamily: "'Libre Baskerville', serif", fontSize: 36, fontWeight: 700, color: C.navy, marginBottom: 16, lineHeight: 1.2 },
  sectionLead: { fontFamily: "'Source Sans 3', sans-serif", fontSize: 18, color: C.textMid, lineHeight: 1.7, maxWidth: 720, marginBottom: 48 },
  card: { background: C.white, border: `1px solid ${C.border}`, borderRadius: 4, padding: '22px 26px' }
};

function PhotoPlaceholder({ label, aspect = '4/3', dark = true, height }) {
  return (
    <div style={{
      aspectRatio: height ? undefined : aspect,
      height: height || undefined,
      background: dark ? C.navyLight : C.bgAlt,
      borderRadius: 4,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 8, padding: 16
    }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={dark ? 'rgba(255,255,255,0.25)' : C.textLight} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M3 9h2M3 15h2" />
      </svg>
      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, textAlign: 'center', lineHeight: 1.4, color: dark ? 'rgba(255,255,255,0.3)' : C.textLight }}>{label}</div>
    </div>);

}

function Bar({ value, max, color, height = 8 }) {
  return (
    <div style={{ background: C.bgAlt, borderRadius: 4, height, overflow: 'hidden', flexGrow: 1 }}>
      <div style={{ width: `${value / max * 100}%`, height: '100%', background: color || C.teal, borderRadius: 4, transition: 'width 0.4s ease' }} />
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────
// TabPanel — when printMode is on, render all panels (with heading + break),
// otherwise only show the active tab. Used by Dashboard, FollowUp, Digital.
// ─────────────────────────────────────────────────────────────────────────
function TabPanel({ id, label, active, printMode, children }) {
  if (!active && !printMode) return null;
  return (
    <div className={"tab-panel " + (printMode ? "print-unpacked" : "")} data-tab-id={id}>
      {printMode &&
      <h3 className="print-only-heading" style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: C.navy, margin: '32px 0 14px', borderTop: `2px solid ${C.amber}`, paddingTop: 16 }}>
          {label}
        </h3>
      }
      {children}
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────
// PrintBreak — visual page-break marker in print only
// ─────────────────────────────────────────────────────────────────────────
function PrintBreak() {
  return <div className="print-break" style={{ display: 'none' }} aria-hidden="true" />;
}

// ════════════════════════════════════════════════════════════════════════════
// SECTION 1: WHY CHANGE — comparing CM Prajavani / Collector Prajavani / CPGRAMS / Pilot
// ════════════════════════════════════════════════════════════════════════════

function WhyChange() {
  useLang();
  const features = [
  { label: 'Filing Accessibility', cpgrams: 'Decentralised — web portal, CSCs, district collectorates', cm: 'Centralised — physical submission at Praja Bhavan, Hyderabad', coll: 'Centralised at district level — physical submission at Collector office', pilot: 'Decentralised — 16 mandal IFCs + online (since Oct 2025)' },
  { label: 'Acknowledgement Receipt', cpgrams: 'Automated registration ID via SMS + email', cm: 'Paper receipt only if asked for initially', coll: 'Receipt only if asked', pilot: 'Automated, dated, with grievance ID' },
  { label: 'Status Tracking', cpgrams: 'Online — citizens can track status updates', cm: 'Online but conditional — ATRs visible only after SNO review', coll: 'Online tracking available', pilot: 'Online tracking + ATR download (Telugu / English)' },
  { label: 'Personal Hearing', cpgrams: 'No public hearing; in-person filing only', cm: 'Hearing at filing — usually redirected to district officer', coll: 'Hearing at registration', pilot: 'Monthly mandal hearings → weekly Mandal Prajavani' },
  { label: 'ATR Timeline', cpgrams: '21 days (per SOP)', cm: 'No standard', coll: 'No standard', pilot: '30 days (mandatory)' },
  { label: 'Department SOPs', cpgrams: 'No', cm: 'None', coll: 'None', pilot: '17 SOPs notified by Line Departments' },
  { label: 'Auto-Escalation', cpgrams: 'Yes — built into system', cm: 'None', coll: 'None', pilot: 'Not yet built; pending in software' },
  { label: 'Appeal Mechanism', cpgrams: 'Yes — poor rating triggers appeal', cm: 'None', coll: 'None', pilot: 'Collector Appeal (pilot module pending)' },
  { label: 'Public Disclosure of Data', cpgrams: 'Real-time dashboard + monthly reports', cm: 'None', coll: 'None', pilot: 'Civil society review published; portal data partial' },
  { label: 'Independent Verification', cpgrams: 'None', cm: 'None', coll: 'None', pilot: 'SSAAT + civil society field follow-up of every case' }];


  return (
    <section id="why" data-screen-label="02 Why Change" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('The Problem', 'సమస్య')}</div>
        <h2 style={SS.sectionTitle}>{t('Why the existing system needed reform', 'ప్రస్తుత వ్యవస్థకు సంస్కరణలు ఎందుకు అవసరమయ్యాయి')}</h2>
        <p style={SS.sectionLead}>
          {t('Telangana\'s grievance redress architecture rests on three overlapping structures — the national-level CPGRAMS, the state-level CM Prajavani at Praja Bhavan Hyderabad, and the weekly Collector Prajavani at district headquarters. Each has structural gaps. The Adilabad Pilot tested whether these gaps could be closed at the mandal level.', 'తెలంగాణ ఫిర్యాదు పరిష్కార వ్యవస్థ మూడు అతివ్యాప్త నిర్మాణాలపై ఆధారపడి ఉంది — జాతీయ-స్థాయి CPGRAMS, హైదరాబాద్ ప్రజా భవన్ లో CM ప్రజావాణి, మరియు జిల్లా కేంద్రాలలో వారానికి కలెక్టర్ ప్రజావాణి. ప్రతి ఒక్కదానిలోను బ్యాప్వ్థీకరణ లోపాలు ఉన్నాయి. ఆదిలాబాద్ పైలట్ ఈ లోపాలను మండల స్థాయిలో పూరించగలమా అనేదాన్ని పరీక్షించింది.')}
        </p>

        <div style={{ overflowX: 'auto', marginBottom: 32, border: `1px solid ${C.border}`, borderRadius: 4 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Source Sans 3',sans-serif", fontSize: 13 }}>
            <thead>
              <tr style={{ background: C.navy }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', color: C.white, fontWeight: 600, minWidth: 150 }}>Feature</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', color: 'rgba(255,255,255,0.8)', fontWeight: 600, minWidth: 180 }}>CPGRAMS<br /><span style={{ fontSize: 10, fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>National (Union Govt)</span></th>
                <th style={{ padding: '12px 14px', textAlign: 'left', color: '#f4a261', fontWeight: 600, minWidth: 180 }}>CM Prajavani<br /><span style={{ fontSize: 10, fontWeight: 400, color: 'rgba(244,162,97,0.7)' }}>State — Hyderabad</span></th>
                <th style={{ padding: '12px 14px', textAlign: 'left', color: '#f4a261', fontWeight: 600, minWidth: 180 }}>Collector Prajavani<br /><span style={{ fontSize: 10, fontWeight: 400, color: 'rgba(244,162,97,0.7)' }}>District — weekly</span></th>
                <th style={{ padding: '12px 14px', textAlign: 'left', color: '#52d9d1', fontWeight: 600, minWidth: 200 }}>Adilabad Pilot<br /><span style={{ fontSize: 10, fontWeight: 400, color: 'rgba(82,217,209,0.7)' }}>Mandal — every Monday</span></th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) =>
              <tr key={i} style={{ background: i % 2 === 0 ? C.white : C.bg, borderTop: `1px solid ${C.border}` }}>
                  <td style={{ padding: '11px 14px', color: C.navy, fontWeight: 600 }}>{f.label}</td>
                  <td style={{ padding: '11px 14px', color: C.textMid }}>{f.cpgrams}</td>
                  <td style={{ padding: '11px 14px', color: C.textMid }}>{f.cm}</td>
                  <td style={{ padding: '11px 14px', color: C.textMid }}>{f.coll}</td>
                  <td style={{ padding: '11px 14px', color: C.teal }}>{f.pilot}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          <div style={{ ...SS.card, borderTop: `3px solid ${C.red}` }}>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: C.red, marginBottom: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>CM Prajavani</div>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 24, fontWeight: 700, color: C.navy, marginBottom: 4 }}>64,623</div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.5 }}>Grievances received Dec 2023 – Dec 2025. Self-reported as <strong>74% "resolved/processed"</strong> — without independent verification.</div>
          </div>
          <div style={{ ...SS.card, borderTop: `3px solid ${C.amber}` }}>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: C.amber, marginBottom: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Collector Prajavani</div>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 24, fontWeight: 700, color: C.navy, marginBottom: 4 }}>100–150</div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.5 }}>Petitioners typically processed in a single 2–3 hour Monday sitting. Most receive only brief file-receipt; substantive hearing is rare. Repeat petitioners often return for years.</div>
          </div>
          <div style={{ ...SS.card, borderTop: `3px solid ${C.teal}` }}>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: C.teal, marginBottom: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Adilabad Pilot</div>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 24, fontWeight: 700, color: C.navy, marginBottom: 4 }}>12,110</div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.5 }}>Grievances Jan 2025 – Apr 2026. Of 5,000 reviewed: <strong>66.56% "Positively Dealt With"</strong> after independent field verification.</div>
          </div>
        </div>
      </div>
    </section>);

}

// ════════════════════════════════════════════════════════════════════════════
// SECTION 2: OTHER STATES — landscape of grievance redress in India
// ════════════════════════════════════════════════════════════════════════════

function OtherStates() {
  useLang();
  const [view, setView] = React.useState('volume');

  const states = [
  { name: 'Uttar Pradesh', portal: 'Jansunwai', vol: '74 L+', intensity: 374, pop: 'high', highlight: true },
  { name: 'Madhya Pradesh', portal: 'CM Helpline', vol: '48 L', intensity: 681, pop: 'high', highlight: true },
  { name: 'Rajasthan', portal: 'Rajasthan Sampark', vol: '22 L', intensity: 324, pop: 'high', highlight: false, law: 'Statutory (2012)' },
  { name: 'Odisha', portal: 'Jana Sunani', vol: '6 L', intensity: 151, pop: 'mid' },
  { name: 'Himachal', portal: 'CM Sankalp', vol: '~3 L', intensity: 223, pop: 'mid' },
  { name: 'Uttarakhand', portal: 'CM Helpline', vol: '~1.5 L', intensity: 112, pop: 'mid' },
  { name: 'Haryana', portal: 'CM Window', vol: '~1.5 L', intensity: 50, pop: 'low' },
  { name: 'Maharashtra', portal: 'Aaple Sarkar', vol: '—', intensity: '—', pop: 'mid' },
  { name: 'West Bengal', portal: 'Sorasori Mukhyomontri', vol: '—', intensity: '—', pop: 'mid' },
  { name: 'Bihar', portal: 'BPGRS', vol: '—', intensity: '—', pop: 'mid', law: 'Statutory (2015)' },
  { name: 'Punjab', portal: 'CM Window', vol: '~1 L', intensity: 41, pop: 'low' },
  { name: 'Kerala', portal: 'CM Helpline', vol: '~1 L', intensity: 21, pop: 'low' },
  { name: 'Meghalaya', portal: 'Public Grievance', vol: '—', intensity: '—', pop: 'low', law: 'Statutory (2020)' },
  { name: 'Telangana', portal: 'CM Prajavani', vol: '64,623', intensity: '~17', pop: 'low', highlight: true }];


  const insights = [
  { title: 'A national pattern', body: 'CPGRAMS — the Union Government\'s portal launched in 2007 — has grown over 10× in a decade: from ~2 lakh grievances in 2014 to over 29 lakh in 2024. Two-thirds concern central ministries; one-third state-level issues.' },
  { title: 'Volume vs intensity', body: 'Madhya Pradesh leads in engagement intensity at 681 grievances per 10,000 population, even though Uttar Pradesh has higher absolute volume (74 lakh annually). Telangana sits at the low end of intensity — suggesting suppressed demand, not absence of grievances.' },
  { title: 'Statutes are rare', body: 'Only Rajasthan (2012), Bihar (2015), and Meghalaya (2020) have enacted statutory frameworks recognising grievance registration as a legal right. Most systems run on executive mandate alone — leaving the "right to redress" at administrative discretion.' },
  { title: 'RTPS is not GR', body: 'By 2026, 24 states have enacted Right to Public Services laws covering routine service delivery (licences, certificates, permits). RTPS standardises transactions but lacks independent appellate structures or means for substantive grievance redress.' },
  { title: 'CM-branded portals', body: 'A consistent shift across states: portals are branded with the Chief Minister\'s office to signal direct executive accountability — Haryana\'s CM Window, MP\'s CM Helpline, WB\'s Sorasori Mukhyomontri. Branding promises accountability the architecture often does not deliver.' },
  { title: 'Police consistently top complaints', body: 'Across most states, 10–12 departments account for over 70% of complaints. The Police department frequently ranks in the top recipients — indicating digital portals function as an escalation route for police inaction.' }];


  return (
    <section id="states" data-screen-label="03 Other States" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('National Context', 'జాతీయ సందర్భం')}</div>
        <h2 style={SS.sectionTitle}>{t('Grievance redress across India', 'భారతదేశంలో ఫిర్యాదు పరిష్కారం')}</h2>
        <p style={SS.sectionLead}>
          {t('Most states have built dedicated grievance portals. Few have built statutory rights. Adilabad\'s pilot is positioned within this national landscape — as a model that other states may learn from.', 'చాలా రాష్ట్రాలు ఫిర్యాదు పోర్టల్‌లను నిర్మించాయి. చట్టబద్ధమైన హక్కులు కెలవీ రాష్ట్రాల్లో. ఆదిలాబాద్ పైలట్ ఈ జాతీయ పరిదృశ్యంలో — ఇతర రాష్ట్రాలు నేర్చుకోగల ఒక నమూనాగా నిలుస్తుంది.')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14, marginBottom: 40 }}>
          {insights.map((ins, i) =>
          <div key={i} style={{ ...SS.card, borderLeft: `3px solid ${C.teal}` }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{ins.title}</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6 }}>{ins.body}</div>
            </div>
          )}
        </div>

        <div style={{ marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 700, color: C.navy }}>State grievance volumes (annual)</div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight }}>Source: state portal dashboards, 2024–25</div>
        </div>

        <div style={{ overflowX: 'auto', border: `1px solid ${C.border}`, borderRadius: 4 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Source Sans 3',sans-serif", fontSize: 13 }}>
            <thead>
              <tr style={{ background: C.bg, borderBottom: `2px solid ${C.border}` }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', color: C.navy, fontWeight: 700 }}>State</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', color: C.navy, fontWeight: 700 }}>Portal</th>
                <th style={{ padding: '10px 14px', textAlign: 'right', color: C.navy, fontWeight: 700 }}>Annual volume</th>
                <th style={{ padding: '10px 14px', textAlign: 'right', color: C.navy, fontWeight: 700 }}>Per 10,000 pop.</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', color: C.navy, fontWeight: 700 }}>Legal framework</th>
              </tr>
            </thead>
            <tbody>
              {states.map((s, i) =>
              <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, background: s.name === 'Telangana' ? `${C.amber}10` : i % 2 === 0 ? C.white : C.bg }}>
                  <td style={{ padding: '9px 14px', color: C.text, fontWeight: s.name === 'Telangana' ? 700 : 400 }}>{s.name}{s.name === 'Telangana' && <span style={{ marginLeft: 6, fontSize: 9, padding: '1px 6px', background: C.amber, color: C.white, borderRadius: 2 }}>FOCUS</span>}</td>
                  <td style={{ padding: '9px 14px', color: C.textMid }}>{s.portal}</td>
                  <td style={{ padding: '9px 14px', textAlign: 'right', color: C.textMid, fontWeight: s.highlight ? 600 : 400 }}>{s.vol}</td>
                  <td style={{ padding: '9px 14px', textAlign: 'right', color: typeof s.intensity === 'number' && s.intensity > 200 ? C.teal : C.textLight, fontWeight: typeof s.intensity === 'number' && s.intensity > 200 ? 600 : 400 }}>{s.intensity}</td>
                  <td style={{ padding: '9px 14px' }}>
                    {s.law ?
                  <span style={{ fontSize: 11, fontWeight: 700, background: `${C.teal}18`, color: C.teal, padding: '2px 7px', borderRadius: 2 }}>{s.law}</span> :
                  <span style={{ fontSize: 11, color: C.textLight }}>Executive mandate</span>}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ background: C.navy, borderRadius: 6, padding: '28px 36px', marginTop: 32 }}>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 16, color: C.white, marginBottom: 10 }}>Telangana's earlier digital effort</div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            Telangana was an early mover — a 2005 collaboration between the Ranga Reddy Collector and NIC launched a digital grievance system to support the RTI Act, predating most state-level systems. The Prajavani/Janahitha pilots in Rajanna Sircilla and Suryapet won the 'Gems of Digital Telangana' award (2018). But state bifurcation in 2014 meant no unified state platform emerged; pilots remained limited because officials could close grievances without independent verification and the systems could not scale state-wide. CM Prajavani in 2023 attempted to fill this gap — but only at the state capital.
          </div>
        </div>
      </div>
    </section>);

}

// ════════════════════════════════════════════════════════════════════════════
// SECTION 3: PILOT JOURNEY
// ════════════════════════════════════════════════════════════════════════════

function PilotJourney() {
  useLang();
  const events = [
  { date: 'Sep 2024', label: 'Public hearing in Hyderabad on access to information and grievance redress. 200+ activists, academics, civil society participate. Twenty testimonies presented; eight resolutions agreed.', milestone: false },
  { date: 'Sep 2024 – Jan 2025', label: 'Over 20 design meetings between civil society partners, district administration, and CGG to design Pilot architecture.', milestone: false },
  { date: '27 Jan 2025', label: 'Adilabad Pilot formally launched. IFCs operational across 16 mandals. 90+ GROs designated across 9 line departments.', milestone: true },
  { date: '6–14 Feb 2025', label: 'First round of public hearings — 16 hearings over 9 days. 2,000+ grievances filed; 1,000+ cumulative attendance, peaking at 208 in one session.', milestone: true },
  { date: 'July 2025', label: 'Custom IT system built by civil society to document field follow-up for each grievance.', milestone: false },
  { date: 'Sep 2025', label: 'First Collector Appeal held on 12 September — 49 grievances from 4 mandals. Only one such appeal hearing held during the Pilot.', milestone: false },
  { date: 'Oct 2025', label: 'Digital portal opened to citizens for direct filing. ATR download enabled. Formal request submitted to SNO Prajavani for four key portal changes.', milestone: true },
  { date: 'Nov 2025', label: 'Weekly Mandal Prajavani institutionalised — every Monday at MPDO offices. The Pilot\'s most notable institutional outcome.', milestone: true },
  { date: '19 Jan 2026', label: 'Mandal Prajavani formally launched with full feature set: digital registration, dated receipts, written GRO remarks, online upload before exit.', milestone: true },
  { date: '30 Apr 2026', label: 'Government Order issued: institutionalising, decentralising and integrating the Prajavani mechanism across Telangana.', milestone: true }];


  const scale = [
  { num: '16', label: 'Mandals covered' },
  { num: '90+', label: 'GROs across 9 line departments' },
  { num: '60+', label: 'Civil society volunteers from across India' },
  { num: '17', label: 'Notified SOPs by line departments' },
  { num: '20', label: 'Grievance categories' },
  { num: '7', label: 'Departments with grievance volume' }];


  return (
    <section id="journey" data-screen-label="04 Journey" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('The Journey', 'ప్రయాణం')}</div>
        <h2 style={SS.sectionTitle}>{t('From civil society advocacy to Government Order', 'పౌర సమాజ వకాలతు నుండి ప్రభుత్వ ఉత్తర్వు వరకు')}</h2>
        <p style={SS.sectionLead}>
          {t('15 months from launch to institutionalisation. The Pilot moved deliberately — testing, learning, adjusting — and culminated in a formal Government Order on 30 April 2026.', 'ప్రారంభం నుండి సంస్థాగతీకరణ వరకు 15 నెలలు. పైలట్ ఊహించి పనిచేసింది — పరీక్షించీ, నేర్చుకుంటూ, సరిచేసుకుంటూ — మరియు 30 ఏప్రిల్ 2026న అధికారిక ప్రభుత్వ ఉత్తర్వుతో ముగిసింది.')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 40, marginBottom: 48 }}>
          <div>
            {events.map((ev, i) =>
            <div key={i} style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
                <div style={{ width: 110, flexShrink: 0, textAlign: 'right', paddingRight: 14, paddingTop: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: ev.milestone ? C.amber : C.textLight, lineHeight: 1.3 }}>{ev.date}</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 18 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: ev.milestone ? C.amber : C.border, border: `2px solid ${ev.milestone ? C.amber : C.bgAlt}`, flexShrink: 0, marginTop: 4 }} />
                  {i < events.length - 1 && <div style={{ width: 2, flexGrow: 1, background: C.border, marginTop: 4, minHeight: 16 }} />}
                </div>
                <div style={{ paddingLeft: 14, paddingBottom: 8, flexGrow: 1, fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6, background: ev.milestone ? `${C.amber}0e` : 'transparent', padding: ev.milestone ? '4px 12px 8px' : '2px 0 8px 14px', borderLeft: ev.milestone ? `3px solid ${C.amber}` : 'none', borderRadius: ev.milestone ? 3 : 0 }}>{ev.label}</div>
              </div>
            )}
          </div>
          <div>
            <PhotoPlaceholder label="Photo: Pilot launch — 27 Jan 2025, Adilabad district HQ" aspect="4/5" />
          </div>
        </div>

        <div style={{ background: C.navy, borderRadius: 6, padding: '36px 40px' }}>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 17, color: C.white, marginBottom: 24, opacity: 0.9 }}>Scale of the Pilot</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 24 }}>
            {scale.map((s, i) =>
            <div key={i}>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 32, fontWeight: 700, color: C.amberLight }}>{s.num}</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{s.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { C, SS, PhotoPlaceholder, Bar, TabPanel, PrintBreak, WhyChange, OtherStates, PilotJourney });