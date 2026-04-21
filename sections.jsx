
// ── SHARED UTILITIES ──────────────────────────────────────────────────────────
const C = {
  navy: '#0d2137', navyLight: '#1a3a56',
  amber: '#c47d2e', amberLight: '#f0a84a',
  teal: '#2a706a', tealLight: '#3a9088',
  bg: '#f7f4ef', bgAlt: '#edeae4',
  white: '#ffffff', border: '#d8d4cc',
  text: '#1a1814', textMid: '#4a4640', textLight: '#7a7570',
};

const SS = {
  section: (bg) => ({ background: bg || C.white, padding: '80px 0' }),
  container: { maxWidth: 1100, margin: '0 auto', padding: '0 32px' },
  eyebrow: { fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.amber, marginBottom: 12 },
  sectionTitle: { fontFamily: "'Libre Baskerville', serif", fontSize: 36, fontWeight: 700, color: C.navy, marginBottom: 16, lineHeight: 1.2 },
  sectionLead: { fontFamily: "'Source Sans 3', sans-serif", fontSize: 18, color: C.textMid, lineHeight: 1.7, maxWidth: 640, marginBottom: 48 },
};

// ── PHOTO PLACEHOLDER ──────────────────────────────────────────────────────────
function PhotoPlaceholder({ label, aspect = '4/3', dark = true, height }) {
  return (
    <div style={{
      aspectRatio: height ? undefined : aspect,
      height: height || undefined,
      background: dark ? C.navyLight : C.bgAlt,
      borderRadius: 4,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 8, padding: 16,
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={dark ? 'rgba(255,255,255,0.25)' : C.textLight} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <circle cx="12" cy="12" r="3.5"/>
        <path d="M3 9h2M3 15h2"/>
      </svg>
      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, textAlign: 'center', lineHeight: 1.4, color: dark ? 'rgba(255,255,255,0.3)' : C.textLight }}>{label}</div>
    </div>
  );
}

// ── SECTION 2: WHY CHANGE ──────────────────────────────────────────────────────
function WhyChange() {
  const problems = [
    { title: 'Centralised filing only', desc: 'Citizens must travel to Hyderabad — hundreds of kilometres — to register a grievance at CM Prajavani.' },
    { title: 'No acknowledgement receipt', desc: 'No dated proof of filing. Citizens have no record that their complaint was received.' },
    { title: 'No status tracking', desc: 'Once filed, there is no way to check progress. Officers face no accountability for delays.' },
    { title: 'No public hearings', desc: 'Grievances are processed invisibly, without any collective accountability forum.' },
    { title: 'Self-reported resolution', desc: 'CM Prajavani reports 74% resolved — without independent verification, disposal is mistaken for resolution.' },
    { title: 'No appeal mechanism', desc: 'If an ATR is unsatisfactory or delayed, there is no formal pathway for citizens to escalate.' },
  ];
  const comparison = [
    { label: 'Filing location', cmpv: 'Only Hyderabad', pilot: '16 mandal IFCs + online' },
    { label: 'Acknowledgement', cmpv: 'None', pilot: 'Dated printed receipt' },
    { label: 'Status tracking', cmpv: 'None', pilot: 'Online portal (prajavani.cgg.gov.in)' },
    { label: 'Public hearing', cmpv: 'None', pilot: 'Monthly mandal-level hearings' },
    { label: 'ATR deadline', cmpv: 'No standard', pilot: '30 days mandatory' },
    { label: 'GRO procedures', cmpv: 'None', pilot: '17 SOPs across 7 departments' },
    { label: 'Independent verification', cmpv: 'None', pilot: 'SSAAT + civil society field visits' },
    { label: 'Appeal mechanism', cmpv: 'None', pilot: 'Collector-level appeal process' },
  ];
  return (
    <section id="why" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>The Problem</div>
        <h2 style={SS.sectionTitle}>Why the existing system needed reform</h2>
        <p style={SS.sectionLead}>Existing grievance redress systems share structural limitations that undermine access and accountability for citizens in rural Telangana.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20, marginBottom: 56 }}>
          {problems.map((p, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderTop: `3px solid ${C.amber}`, borderRadius: 4, padding: '24px 28px' }}>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: '#c0392b', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Limitation</div>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 18 }}>Comparing systems</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Source Sans 3',sans-serif", fontSize: 14 }}>
            <thead>
              <tr style={{ background: C.navy }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: C.white, fontWeight: 600 }}>Feature</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#f4a261', fontWeight: 600 }}>CM Prajavani (existing)</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#52d9d1', fontWeight: 600 }}>Adilabad Pilot</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} style={{ background: i%2===0 ? C.white : C.bg }}>
                  <td style={{ padding: '10px 16px', color: C.text, fontWeight: 600 }}>{row.label}</td>
                  <td style={{ padding: '10px 16px', color: '#c0392b' }}>{row.cmpv}</td>
                  <td style={{ padding: '10px 16px', color: C.teal, fontWeight: 600 }}>{row.pilot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3: PILOT JOURNEY ───────────────────────────────────────────────────
function PilotJourney() {
  const events = [
    { date: 'Sep 2024', label: 'Civil society public meeting on GRM reform. Consultations with communities across Adilabad.', milestone: false },
    { date: 'Jan 2025', label: 'Adilabad Pilot formally launched (27 Jan 2025). IFCs activated across 16 mandals. GROs trained on 17 SOPs.', milestone: true },
    { date: 'Feb 2025', label: 'First round of public hearings — 16 hearings across 16 mandals within 2 weeks. 55%+ complainant attendance.', milestone: true },
    { date: 'Nov 2025', label: 'Weekly Mandal Prajavani institutionalised — every Monday. Regular hearing rhythm established across all mandals.', milestone: false },
    { date: 'Jan 2026', label: 'Mandal Prajavani formally launched with full features: digital portal, ATR tracking, Collector appeal.', milestone: true },
    { date: 'Apr 2026', label: '12,741 grievances registered. 82 public hearings held. 7,998 ATRs filed. Model under policy review.', milestone: false },
  ];
  const scale = [
    { num: '16', label: 'Mandals covered' },
    { num: '~100', label: 'Grievance Redress Officers' },
    { num: '60+', label: 'Volunteers from 9 organisations' },
    { num: '17', label: 'Standard Operating Procedures' },
    { num: '7', label: 'Departments participating' },
    { num: '20', label: 'Grievance categories' },
  ];
  return (
    <section id="journey" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>The Journey</div>
        <h2 style={SS.sectionTitle}>From consultation to institutionalisation</h2>
        <p style={SS.sectionLead}>The pilot moved from civil society advocacy to a formally institutionalised district-level system within 15 months.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            {events.map((ev, i) => (
              <div key={i} style={{ display: 'flex', gap: 0, marginBottom: 18 }}>
                {/* Date label */}
                <div style={{ width: 76, flexShrink: 0, textAlign: 'right', paddingRight: 14, paddingTop: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: ev.milestone ? C.amber : C.textLight, lineHeight: 1.3 }}>{ev.date}</div>
                {/* Dot + vertical line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 20 }}>
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: ev.milestone ? C.amber : C.border, border: `2px solid ${ev.milestone ? C.amber : C.bgAlt}`, flexShrink: 0, marginTop: 2 }} />
                  {i < events.length - 1 && <div style={{ width: 2, flexGrow: 1, background: C.border, marginTop: 4, minHeight: 16 }} />}
                </div>
                {/* Text */}
                <div style={{ paddingLeft: 12, paddingBottom: 4, flexGrow: 1, fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.6, background: ev.milestone ? `${C.amber}10` : 'transparent', padding: ev.milestone ? '6px 12px' : '2px 12px', borderLeft: ev.milestone ? `3px solid ${C.amber}` : 'none', borderRadius: ev.milestone ? 3 : 0 }}>{ev.label}</div>
              </div>
            ))}
          </div>
          <div>
            <PhotoPlaceholder label="Photo: Pilot launch ceremony, 27 January 2025, Adilabad" aspect="4/3" />
          </div>
        </div>
        <div style={{ background: C.navy, borderRadius: 6, padding: '36px 40px' }}>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 17, color: C.white, marginBottom: 24, opacity: 0.9 }}>Scale of the pilot</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 24 }}>
            {scale.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 32, fontWeight: 700, color: C.amberLight }}>{s.num}</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 4: HOW IT WORKS (with expandable modals) ─────────────────────────
function HowItWorks() {
  const [active, setActive] = React.useState(null);

  const components = [
    {
      code: 'IFC', title: 'Information Facilitation Centre',
      short: 'Mandal-level centres staffed by trained operators who register grievances and issue dated acknowledgement receipts.',
      photo: 'Photo: IFC centre at mandal office — registration in session',
      subtitle: 'The citizen\'s first point of contact',
      content: {
        body: 'An IFC is a dedicated desk or room within the mandal office where citizens can register grievances, get receipts, and track status — without travelling to district headquarters or Hyderabad.',
        sections: [
          {
            heading: 'Activities at an IFC',
            items: [
              'Register grievances across all 20 categories in the Prajavani portal',
              'Issue a dated, printed acknowledgement receipt on the spot',
              'Assist citizens with document submission and form-filling',
              'Provide status updates on existing grievances',
              'Explain which GRO is responsible and expected ATR timeline',
              'Guide citizens through the appeals process if ATR is unsatisfactory',
            ]
          },
          {
            heading: 'Operator profile',
            items: [
              'Mandal-level government staff trained on the Prajavani portal',
              'Trained on all 17 SOPs and 20 grievance categories',
              'Available during mandal office hours and on all public hearing days',
              'Operates in Telugu; records in both Telugu and English on the portal',
            ]
          }
        ]
      }
    },
    {
      code: 'GRO', title: 'Grievance Redress Officer',
      short: 'Designated officer — one level above frontline staff — responsible for investigating the grievance and filing an ATR within 30 days.',
      photo: 'Photo: GRO conducting field inquiry in a village',
      subtitle: 'The accountability officer',
      content: {
        body: 'Each grievance is assigned to a GRO within the relevant department. The GRO is responsible for investigating, taking action, and filing a written Action Taken Report within 30 days.',
        sections: [
          {
            heading: 'Department-wise GRO designation',
            items: [
              'Panchayat Raj & RD → Mandal Parishad Development Officer (MPDO)',
              'Energy (Gruhajyothi) → Assistant Divisional Engineer / Junior Engineer',
              'Revenue → Mandal Revenue Officer / Tehsildar',
              'Food & Civil Supplies → Revenue Divisional Officer',
              'Agriculture → Mandal Agriculture Officer (MAO)',
              'Forest → Range Forest Officer (RFO)',
              'Social Welfare → Mandal Welfare Officer',
            ]
          },
          {
            heading: 'GRO responsibilities',
            items: [
              'Investigate the grievance within their department\'s jurisdiction',
              'Conduct field verification where necessary',
              'File a written ATR with specific action details within 30 days',
              'Attend the monthly public hearing and present the ATR',
              'Respond to Collector appeal if the citizen escalates',
            ]
          }
        ]
      }
    },
    {
      code: 'SOP', title: 'Standard Operating Procedures',
      short: '17 SOPs across 7 departments covering 20 grievance categories — specifying exactly what a GRO must do for each type of issue.',
      photo: 'Photo: SOP reference booklet — available at all IFCs and GRO offices',
      subtitle: 'Converting discretion into procedure',
      content: {
        body: 'Before the pilot, GROs could file an ATR saying anything — without specifying what action was taken or why a grievance was unresolved. SOPs change this by specifying minimum steps and verification requirements for each grievance type.',
        sections: [
          {
            heading: 'SOPs by department',
            items: [
              'Panchayat Raj & RD (5): Pension withheld, Pension stopped, New pension application, NREGS wage delays, NREGS job card',
              'Energy (2): Gruhajyothi connection not given, Gruhajyothi benefit not received',
              'Revenue (3): Land in Prohibited (POB) list, Patta mutation, Land records correction',
              'Food & Civil Supplies (2): Gas subsidy, Ration card issues',
              'Agriculture (2): Crop loan waiver, Rythu Bandhu / PM-Kisan',
              'Forest (2): IFR individual title, IFR community title',
              'Social Welfare (1): Scholarship / caste certificate',
            ]
          },
          {
            heading: 'Why SOPs matter',
            items: [
              'Standardise what GROs must verify before filing an ATR',
              'Give citizens clear expectations about what will happen',
              'Make ATR quality comparable and auditable across mandals',
              'Reduce arbitrariness — responses based on category, not officer discretion',
            ]
          }
        ]
      }
    },
    {
      code: 'PH', title: 'Public Hearing',
      short: 'Monthly mandal-level hearings where citizens and GROs meet face to face. 82 hearings conducted; 55% complainant participation.',
      photo: 'Photo: Public hearing in session — citizens, GROs, and SSAAT facilitators',
      subtitle: 'Face-to-face accountability',
      content: {
        body: 'Public hearings transform grievance redress from a back-office administrative process into a public, collective accountability forum. GROs must explain their ATR in front of the citizen, civil society facilitators, and other complainants.',
        sections: [
          {
            heading: 'How a public hearing works',
            items: [
              'Held monthly at each mandal office; facilitated by SSAAT and civil society partners',
              'Citizens whose grievances have received ATRs are notified and invited',
              'GRO presents ATR findings and action taken, in public',
              'Citizen accepts or disputes the ATR — dispute recorded on the spot',
              'Disputed cases are referred directly to the Collector for appeal',
              'Unresolved cases receive a follow-up date with a named responsible officer',
              '55% complainant participation across 82 hearings to date',
            ]
          },
          {
            heading: 'Role of civil society at hearings',
            items: [
              'SSAAT facilitates, documents disputes, and flags quality issues in ATRs',
              'Kisan Mitra mobilises complainants — especially for pension and agriculture cases',
              'Collective setting means individual complainants are not isolated or intimidated',
            ]
          }
        ]
      }
    },
    {
      code: 'ATR', title: 'Action Taken Report',
      short: 'A written, mandatory response from the GRO within 30 days. Available online and downloadable by the citizen.',
      photo: 'Photo: Sample ATR receipt — printed acknowledgement issued at IFC',
      subtitle: 'From verbal promise to written record',
      content: {
        body: 'The ATR is the core accountability document of the pilot. It converts the GRO\'s verbal assurances into a written, trackable record that can be verified, disputed, and compared across cases.',
        sections: [
          {
            heading: 'What an ATR must contain',
            items: [
              'Grievance ID and original filing date',
              'Department name and assigned GRO name',
              'Description of specific action taken (not just "grievance disposed")',
              'Whether the grievance is resolved, pending, or referred elsewhere',
              'Next steps and timeline if unresolved',
              'GRO signature and date of ATR filing',
            ]
          },
          {
            heading: 'Accessing your ATR',
            items: [
              'Download from prajavani.cgg.gov.in using your mobile OTP',
              'Request a printout at any IFC — free of charge',
              'All 7,998 ATRs filed in the pilot are accessible on the portal',
              '30-day rule: delays automatically flagged for Collector review',
            ]
          },
          {
            heading: 'Critical distinction',
            items: [
              'Filing an ATR does NOT mean the grievance is resolved',
              'SSAAT independently verifies whether ATR claims are accurate and implemented',
              'Gap between system-reported disposal (74%) and field-verified resolution (52–55%) is evidence of this distinction',
            ]
          }
        ]
      }
    },
    {
      code: 'APL', title: 'Collector Appeal',
      short: 'Citizens unsatisfied with an ATR quality or facing delays can escalate to the District Collector. A second-level appeal is also available.',
      photo: 'Photo: Collector reviewing cases with district officers',
      subtitle: 'The second chance',
      content: {
        body: 'The Collector appeal closes the accountability loop. It gives citizens a formal recourse when GROs are unresponsive or ATRs are inadequate — and signals to GROs that inaction has escalating consequences.',
        sections: [
          {
            heading: 'When to appeal',
            items: [
              'ATR claims resolution but the citizen\'s problem is not actually solved',
              'ATR has not been filed within 30 days of grievance registration',
              'Citizen disputes the ATR at a public hearing and no resolution is reached',
            ]
          },
          {
            heading: 'Appeal process',
            items: [
              'Submit appeal at any IFC or directly at a public hearing',
              'Case referred to the District Collector\'s office for review',
              'Collector personally reviews selected cases — including field visits for complex land and forest rights cases',
              'Second-level appeal (Collector Appeal 2) available for persistent or complex cases',
              'Selected resolved cases — including multi-year land disputes — were resolved through Collector intervention',
            ]
          }
        ]
      }
    },
    {
      code: 'DGT', title: 'Digital Platform',
      short: 'A dedicated "Adilabad Pilot" tab on prajavani.cgg.gov.in enables 24×7 filing, OTP-based tracking, and ATR downloads.',
      photo: 'Screenshot: Adilabad Pilot tab on prajavani.cgg.gov.in',
      subtitle: 'Grievance redress in your pocket',
      content: {
        body: 'The digital platform extends the pilot\'s reach beyond mandal office hours and geography. But it is designed as a complement to — not a replacement for — the physical IFC channel and the right to be heard in person.',
        sections: [
          {
            heading: 'Features of the Adilabad Pilot portal',
            items: [
              '24×7 grievance filing — no office visit required',
              'OTP-based authentication via mobile number',
              'Real-time status tracking — know exactly where your case stands',
              'ATR download — get your Action Taken Report as a PDF',
              'Complete grievance history under your mobile number',
              'Automatic department routing — grievance assigned to correct GRO',
              'Available in Telugu and English',
            ]
          },
          {
            heading: 'Design principle: digital as enabler',
            items: [
              'Portal supports but does not substitute the right to be heard face-to-face',
              'IFCs remain essential for citizens without smartphones, data access, or literacy support',
              'The combination of online + physical channels captures demand neither channel could reach alone',
            ]
          }
        ]
      }
    },
  ];

  const active_data = active !== null ? components[active] : null;

  const Modal = () => active_data ? (
    <div
      onClick={() => setActive(null)}
      style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: C.white, borderRadius: 6, maxWidth: 780, width: '100%', maxHeight: '88vh', overflow: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}
      >
        {/* Modal header */}
        <div style={{ background: C.navy, padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderRadius: '6px 6px 0 0' }}>
          <div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: C.amberLight, textTransform: 'uppercase', marginBottom: 6 }}>{active_data.code}</div>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, fontWeight: 700, color: C.white, lineHeight: 1.2 }}>{active_data.title}</div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{active_data.subtitle}</div>
          </div>
          <button onClick={() => setActive(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: C.white, width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 16 }}>×</button>
        </div>

        {/* Modal body */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 0 }}>
          {/* Photo */}
          <div style={{ padding: 24, background: C.bg, borderRight: `1px solid ${C.border}` }}>
            <PhotoPlaceholder label={active_data.photo} aspect="3/4" />
          </div>

          {/* Content */}
          <div style={{ padding: '28px 32px', overflowY: 'auto' }}>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 15, color: C.textMid, lineHeight: 1.7, marginBottom: 20 }}>{active_data.content.body}</p>
            {active_data.content.sections.map((sec, si) => (
              <div key={si} style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 10 }}>{sec.heading}</div>
                <ul style={{ paddingLeft: 18 }}>
                  {sec.items.map((item, ii) => (
                    <li key={ii} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6, marginBottom: 6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;

  const flowSteps = ['Village', 'IFC', 'GRO', 'Public Hearing', 'ATR', 'Appeal'];

  return (
    <section id="model" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>The Model</div>
        <h2 style={SS.sectionTitle}>How the Adilabad model works</h2>
        <p style={{ ...SS.sectionLead, marginBottom: 24 }}>Seven interlocking components form a complete grievance redress cycle. <strong style={{ color: C.navy }}>Click any component</strong> to explore in detail.</p>

        <div style={{ background: C.navy, borderRadius: 6, padding: '24px 20px', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, flexWrap: 'wrap' }}>
            {flowSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div style={{ background: i===0 ? 'rgba(255,255,255,0.08)' : C.amber, color: i===0 ? 'rgba(255,255,255,0.65)' : C.navy, padding: '10px 18px', borderRadius: 4, fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>{step}</div>
                {i < flowSteps.length-1 && <div style={{ color: C.amberLight, fontSize: 18, padding: '0 4px', opacity: 0.5 }}>→</div>}
              </React.Fragment>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 10, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Complete grievance redress cycle</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16, marginBottom: 32 }}>
          {components.map((comp, i) => (
            <div key={i}
              onClick={() => setActive(i)}
              style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 4, padding: '22px 24px', cursor: 'pointer', transition: 'all 0.18s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.teal; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 20px rgba(0,0,0,0.08)`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: C.teal, background: `${C.teal}18`, padding: '3px 8px', borderRadius: 2 }}>{comp.code}</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.amber, fontWeight: 600 }}>Details →</div>
              </div>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{comp.title}</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6 }}>{comp.short}</div>
            </div>
          ))}
        </div>

        <div style={{ background: `${C.teal}10`, border: `1px solid ${C.teal}40`, borderRadius: 4, padding: '18px 24px' }}>
          <span style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: C.teal }}>Key distinction: </span>
          <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid }}>Disposal ≠ Resolution. An ATR marked "disposed" does not mean the citizen's problem is solved. SSAAT and civil society teams independently verify every closed case in the field.</span>
        </div>
      </div>
      <Modal />
    </section>
  );
}

// ── SECTION 5: FOLLOW-UP & VERIFICATION ───────────────────────────────────────
function FollowUp() {
  const teams = [
    {
      org: 'SSAAT',
      fullName: 'Society for Social Audit, Accountability and Transparency',
      role: 'Independent field verification',
      photo: 'Photo: SSAAT team conducting field visit — verifying ATR claims in a village',
      color: C.teal,
      what: [
        'SSAAT is Telangana\'s statutory social audit institution, mandated to independently verify government programme implementation.',
        'In the Adilabad Pilot, SSAAT field teams visit every grievance marked "closed" or "disposed" to verify whether the ATR claims are accurate and whether the citizen\'s problem has actually been resolved.',
        'This field-verified data is the basis for the pilot\'s independently verified resolution rate of 52–55% — compared to the system-reported disposal figure of 74%.',
      ],
      methodology: [
        'Field teams physically visit the complainant\'s household or land',
        'Cross-check ATR claims against documentary evidence (receipts, portals, site observation)',
        'Record outcome as: Resolved · Partially resolved · Unresolved · At State · Policy decision',
        'Flag cases where ATR remarks are inaccurate or misleading for Collector referral',
        'Feed verified data back into the master dataset for accountability reporting',
      ]
    },
    {
      org: 'Kisan Mitra',
      fullName: 'Kisan Mitra (Farmer Friend)',
      role: 'Citizen mobilisation & case follow-up',
      photo: 'Photo: Kisan Mitra volunteer following up with a farmer on ATR status',
      color: C.amber,
      what: [
        'Kisan Mitra is a civil society organisation specialising in agricultural rights and rural livelihoods. In the Adilabad Pilot, Kisan Mitra volunteers serve as connective tissue between citizens and the formal grievance system.',
        'Kisan Mitra focuses especially on pension, MGNREGA, and agriculture-related grievances — areas where citizens are least likely to follow up independently due to literacy or mobility constraints.',
      ],
      methodology: [
        'Mobilise complainants to attend public hearings — especially women, elders, and tribal communities',
        'Conduct follow-up calls and village visits to check whether ATR commitments have been implemented',
        'Assist citizens with uploading documentation or re-filing if a grievance has been closed inaccurately',
        'Escalate cases to SSAAT or the IFC if field follow-up reveals that a resolution hasn\'t happened',
        'Track case progress in the master dataset — linking receipt images to ATR outcomes',
      ]
    },
  ];

  return (
    <section id="followup" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>Verification & Follow-up</div>
        <h2 style={SS.sectionTitle}>Independent follow-up and verification</h2>
        <p style={SS.sectionLead}>Two organisations form the independent accountability layer of the pilot — verifying that ATRs reflect reality and that no complainant falls through the cracks.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28 }}>
          {teams.map((team, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderTop: `4px solid ${team.color}`, borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ padding: '24px 28px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 700, color: C.navy }}>{team.org}</div>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight, marginTop: 3 }}>{team.fullName}</div>
                  </div>
                  <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, background: `${team.color}18`, color: team.color, padding: '3px 8px', borderRadius: 2, whiteSpace: 'nowrap', marginLeft: 12 }}>{team.role}</span>
                </div>
                {team.what.map((p, j) => (
                  <p key={j} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.65, marginBottom: 10 }}>{p}</p>
                ))}
              </div>

              <div style={{ margin: '16px 28px' }}>
                <PhotoPlaceholder label={team.photo} aspect="16/7" />
              </div>

              <div style={{ padding: '0 28px 24px' }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, color: C.navy, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10, marginTop: 4 }}>Methodology</div>
                <ul style={{ paddingLeft: 18 }}>
                  {team.methodology.map((m, j) => (
                    <li key={j} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6, marginBottom: 6 }}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION 6: DASHBOARD ──────────────────────────────────────────────────────
function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('overview');
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'geography', label: 'Geography' },
    { id: 'departments', label: 'Departments' },
    { id: 'timeliness', label: 'Timeliness' },
    { id: 'resolution', label: 'Resolution Quality' },
  ];
  const mandals = [
    { name: 'Adilabad (R)', grievances: 1842, atrs: 1201, rate: 65 },
    { name: 'Tamsi', grievances: 423, atrs: 267, rate: 63 },
    { name: 'Dilawarpur', grievances: 883, atrs: 555, rate: 63 },
    { name: 'Boath', grievances: 1123, atrs: 698, rate: 62 },
    { name: 'Neradigonda', grievances: 867, atrs: 534, rate: 62 },
    { name: 'Utnoor', grievances: 789, atrs: 489, rate: 62 },
    { name: 'Bela', grievances: 687, atrs: 398, rate: 58 },
    { name: 'Jainath', grievances: 534, atrs: 312, rate: 58 },
    { name: 'Ichoda', grievances: 789, atrs: 445, rate: 56 },
    { name: 'Bazarhatnoor', grievances: 934, atrs: 512, rate: 55 },
    { name: 'Talamadugu', grievances: 567, atrs: 289, rate: 51 },
    { name: 'Gudihatnoor', grievances: 456, atrs: 210, rate: 46 },
    { name: 'Indervelly', grievances: 612, atrs: 289, rate: 47 },
    { name: 'Narnoor', grievances: 478, atrs: 198, rate: 41 },
    { name: 'Wankdi', grievances: 412, atrs: 167, rate: 41 },
    { name: 'Sirikonda', grievances: 345, atrs: 134, rate: 39 },
  ];
  const departments = [
    { name: 'Panchayat Raj & RD', count: 4102, atr: 2680, pct: 65, color: C.teal },
    { name: 'Social Welfare', count: 370, atr: 296, pct: 80, color: C.amber },
    { name: 'Food & Civil Supplies', count: 1543, atr: 980, pct: 64, color: '#8b6bb1' },
    { name: 'Energy (Gruhajyothi)', count: 2834, atr: 1790, pct: 63, color: '#c47d2e' },
    { name: 'Revenue', count: 2201, atr: 1320, pct: 60, color: '#5a7ec4' },
    { name: 'Agriculture', count: 1102, atr: 620, pct: 56, color: '#4a9a60' },
    { name: 'Forest (IFR)', count: 589, atr: 312, pct: 53, color: '#c45a3a' },
  ];
  const Bar = ({ value, max, color, height = 8 }) => (
    <div style={{ background: C.bgAlt, borderRadius: 4, height, overflow: 'hidden', flexGrow: 1 }}>
      <div style={{ width: `${(value/max)*100}%`, height: '100%', background: color||C.teal, borderRadius: 4 }} />
    </div>
  );

  return (
    <section id="dashboard" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>Live Data</div>
        <h2 style={SS.sectionTitle}>Grievance dashboard</h2>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.amber, marginBottom: 32 }}>
          ⚠ Dashboard metrics reflect the 5,000-case sample dataset. Headline totals refer to all 12,741 grievances. Live data at prajavani.cgg.gov.in
        </div>
        <div style={{ display: 'flex', gap: 0, borderBottom: `2px solid ${C.border}`, marginBottom: 32, overflowX: 'auto' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ padding: '10px 20px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, fontWeight: activeTab===t.id?700:400, color: activeTab===t.id?C.navy:C.textLight, background: 'none', border: 'none', borderBottom: `2px solid ${activeTab===t.id?C.amber:'transparent'}`, marginBottom: -2, cursor: 'pointer', whiteSpace: 'nowrap' }}>{t.label}</button>
          ))}
        </div>

        {activeTab==='overview' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 16, marginBottom: 28 }}>
              {[{label:'Total grievances filed',value:'12,741',note:'Jan 2025 – Apr 2026'},{label:'ATRs filed',value:'7,998',note:'63% filing rate'},{label:'Public hearings',value:'82',note:'Across 16 mandals'},{label:'Complainant participation',value:'55%',note:'At public hearings'}].map((s,i)=>(
                <div key={i} style={{ background: C.bg, borderRadius: 4, padding: '20px 24px', border: `1px solid ${C.border}` }}>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 30, fontWeight: 700, color: C.navy }}>{s.value}</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, marginTop: 4 }}>{s.label}</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textLight, marginTop: 2 }}>{s.note}</div>
                </div>
              ))}
            </div>
            <div style={{ background: C.bg, borderRadius: 4, padding: '24px 28px', border: `1px solid ${C.border}` }}>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 700, color: C.textMid, marginBottom: 16 }}>Status breakdown (5,000 sample)</div>
              {[{label:'ATR Submitted',value:2890,total:5000,color:C.teal},{label:'Pending GRO action',value:1420,total:5000,color:C.amber},{label:'Closed',value:690,total:5000,color:'#5a7ec4'}].map((s,i)=>(
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, width: 160, flexShrink: 0 }}>{s.label}</div>
                  <Bar value={s.value} max={5000} color={s.color} height={10} />
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 700, color: s.color, width: 50, textAlign: 'right', flexShrink: 0 }}>{s.value.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==='geography' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Source Sans 3',sans-serif", fontSize: 13 }}>
              <thead>
                <tr style={{ background: C.bg, borderBottom: `2px solid ${C.border}` }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: C.navy, fontWeight: 700 }}>Mandal</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: C.navy, fontWeight: 700 }}>Grievances</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: C.navy, fontWeight: 700 }}>ATRs Filed</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: C.navy, fontWeight: 700, minWidth: 160 }}>ATR Rate</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: C.navy, fontWeight: 700 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {mandals.map((m,i)=>(
                  <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, background: i%2===0?C.white:C.bg }}>
                    <td style={{ padding: '8px 14px', color: C.text }}>{m.name}</td>
                    <td style={{ padding: '8px 14px', textAlign: 'right', color: C.textMid }}>{m.grievances.toLocaleString()}</td>
                    <td style={{ padding: '8px 14px', textAlign: 'right', color: C.textMid }}>{m.atrs.toLocaleString()}</td>
                    <td style={{ padding: '8px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ flexGrow: 1, background: C.bgAlt, borderRadius: 4, height: 6, overflow: 'hidden' }}>
                          <div style={{ width: `${m.rate}%`, height: '100%', background: m.rate>=60?C.teal:m.rate>=50?C.amber:'#c0392b', borderRadius: 4 }} />
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: C.textMid, width: 32 }}>{m.rate}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '8px 14px' }}>
                      <span style={{ display: 'inline-block', padding: '2px 7px', borderRadius: 2, fontSize: 10, fontWeight: 700, background: m.rate>=60?`${C.teal}18`:m.rate>=50?`${C.amber}18`:'#c0392b18', color: m.rate>=60?C.teal:m.rate>=50?C.amber:'#c0392b' }}>{m.rate>=60?'Strong':m.rate>=50?'Low':'Critical'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab==='departments' && (
          <div>
            {departments.map((d,i)=>(
              <div key={i} style={{ marginBottom: 16, background: C.bg, borderRadius: 4, padding: '16px 22px', border: `1px solid ${C.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 15, fontWeight: 700, color: C.navy }}>{d.name}</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight }}>{d.count.toLocaleString()} grievances · {d.atr.toLocaleString()} ATRs</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ flexGrow: 1, background: C.bgAlt, borderRadius: 4, height: 10, overflow: 'hidden' }}>
                    <div style={{ width: `${d.pct}%`, height: '100%', background: d.color, borderRadius: 4 }} />
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, fontWeight: 700, color: d.color, width: 36 }}>{d.pct}%</div>
                </div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textLight, marginTop: 3 }}>ATR filing rate</div>
              </div>
            ))}
          </div>
        )}

        {activeTab==='timeliness' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16, marginBottom: 24 }}>
              {[{label:'Filed within 30 days',value:'61%',pct:61,color:C.teal},{label:'Filed 31–60 days',value:'22%',pct:22,color:C.amber},{label:'Filed after 60 days',value:'9%',pct:9,color:'#c0392b'},{label:'No ATR filed',value:'8%',pct:8,color:C.textLight}].map((s,i)=>(
                <div key={i} style={{ background: C.bg, borderRadius: 4, padding: '20px 24px', border: `1px solid ${C.border}` }}>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 26, fontWeight: 700, color: s.color }}>{s.value}</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, marginTop: 4 }}>{s.label}</div>
                  <div style={{ marginTop: 10, background: C.bgAlt, borderRadius: 4, height: 5 }}>
                    <div style={{ width: `${s.pct}%`, height: '100%', background: s.color, borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==='resolution' && (
          <div>
            <div style={{ background: C.navy, borderRadius: 4, padding: '20px 24px', marginBottom: 24 }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, color: C.white, marginBottom: 6 }}>Core methodological distinction</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>"Disposed" = marked closed by system. "Resolved" = independently verified by SSAAT and civil society field teams as actually addressed. The gap between these two figures is the central finding of this pilot.</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, marginBottom: 20 }}>
              <div style={{ background: C.bg, borderRadius: 4, padding: '22px', border: `1px solid ${C.border}`, textAlign: 'center' }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.textLight, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>System-reported</div>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 40, fontWeight: 700, color: '#5a7ec4' }}>74%</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid }}>Disposed (ATR filed)</div>
              </div>
              <div style={{ background: C.bg, borderRadius: 4, padding: '22px', border: `1px solid ${C.border}`, textAlign: 'center' }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.textLight, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Independently verified</div>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 40, fontWeight: 700, color: C.teal }}>52–55%</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid }}>Actually resolved</div>
              </div>
            </div>
            {[{label:'No Further Action Required (resolved)',pct:52,color:C.teal},{label:'Disposed — Policy Decision (state-level)',pct:14,color:'#5a7ec4'},{label:'Pending at State Government',pct:11,color:'#c0392b'},{label:'Disposed — Not Eligible',pct:8,color:C.textLight},{label:'Under Collector Appeal',pct:8,color:C.amberLight},{label:'Action Required from Citizen',pct:7,color:C.amber}].map((s,i)=>(
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, width: 260, flexShrink: 0 }}>{s.label}</div>
                <Bar value={s.pct} max={100} color={s.color} height={8} />
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 700, color: s.color, width: 36, textAlign: 'right', flexShrink: 0 }}>{s.pct}%</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ── SECTION 7: KEY INSIGHTS ───────────────────────────────────────────────────
function KeyInsights() {
  const insights = [
    { num:'01', title:'Decentralisation dramatically improves access', body:'Moving filing from Hyderabad to mandal IFCs removed the single largest barrier for rural citizens. 12,741 grievances in 15 months suggests pent-up demand that existing systems could not capture.' },
    { num:'02', title:'Public hearings improve accountability', body:'Mandals with regular public hearings show higher ATR quality and lower rates of "disposal without resolution." Face-to-face accountability creates different incentives than back-office processing.' },
    { num:'03', title:'Digital + physical hybrid outperforms either alone', body:'The portal enables 24×7 filing and status tracking, but physical IFCs remain essential for citizens without smartphones or literacy support. Neither channel is sufficient on its own.' },
    { num:'04', title:'Independent verification is non-negotiable', body:'The 20+ percentage point gap between system-reported disposal (74%) and field-verified resolution (52–55%) demonstrates that self-reporting cannot substitute for independent accountability.' },
    { num:'05', title:'Written SOPs reduce arbitrariness at scale', body:'17 SOPs across 7 departments standardise what GROs must do — and what citizens can expect. Without them, responses vary by officer rather than by merit of the grievance.' },
  ];
  const limitations = [
    { title:'Data cut-off', desc:'The dataset closes on 31 January 2026. Actual resolution rates are likely higher than captured.' },
    { title:'ATR quality variation', desc:'ATR quality varies significantly across mandals and GROs — from single-line entries to detailed field reports.' },
    { title:'Field verification coverage', desc:'Not all closed grievances were field-verified within the reporting period. Estimated coverage: ~70% of closed cases.' },
    { title:'Mandal variation', desc:'10 of 17 mandals filed zero ATRs in one reporting week despite 3,521 pending cases — indicating chronic underperformance.' },
  ];
  return (
    <section id="insights" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>Evidence</div>
        <h2 style={SS.sectionTitle}>Key insights and learnings</h2>
        <p style={SS.sectionLead}>What the data and field evidence tell us — including what works, what doesn't, and what is still uncertain.</p>
        <div style={{ marginBottom: 48 }}>
          {insights.map((ins,i)=>(
            <div key={i} style={{ display:'flex', gap:24, marginBottom:20, background:C.white, border:`1px solid ${C.border}`, borderRadius:4, padding:'22px 26px' }}>
              <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:30, fontWeight:700, color:C.bgAlt, flexShrink:0, lineHeight:1 }}>{ins.num}</div>
              <div>
                <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:16, fontWeight:700, color:C.navy, marginBottom:6 }}>{ins.title}</div>
                <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.textMid, lineHeight:1.7 }}>{ins.body}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:20, fontWeight:700, color:C.navy, marginBottom:16 }}>Limitations and caveats</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:14 }}>
          {limitations.map((l,i)=>(
            <div key={i} style={{ background:C.white, border:`1px solid ${C.border}`, borderLeft:`3px solid ${C.textLight}`, borderRadius:4, padding:'16px 20px' }}>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:700, color:C.navy, marginBottom:5 }}>{l.title}</div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:C.textMid, lineHeight:1.6 }}>{l.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION 8: CASE STORIES ───────────────────────────────────────────────────
function CaseStories() {
  const [active, setActive] = React.useState(0);
  const cases = [
    { id:'ADB-001', dept:'Revenue', mandal:'Adilabad (R)', status:'resolved', issue:'Land parcel in Prohibited (POB) list for over 5 years. Applicant unable to sell or mortgage land. Multiple redirections across departments.', intervention:'Grievance registered at IFC. GRO from Revenue department assigned. Escalated to Collector after two delayed ATRs. Collector personally reviewed.', outcome:'Land removed from Prohibited list. Patta issued. April 2026.', quote:'For five years no one would listen. Within four months of registering at the IFC, I finally have my documents.', photo:'Photo: Complainant at IFC, Adilabad (R) mandal' },
    { id:'ADB-002', dept:'Energy', mandal:'Boath', status:'at-state', issue:"Gruhajyothi (free electricity scheme) benefit not received. Portal shows 'Not Applied' but applicant was enrolled in Praja Palana.", intervention:'GRO verified enrollment and confirmed portal mismatch. ATR filed noting state-level edit option unavailable.', outcome:'Pending at State Government — portal correction requires state-level intervention. 79 similar cases in the same mandal with identical status.', photo:'Photo: Complainant at IFC discussing Gruhajyothi status, Boath' },
    { id:'ADB-003', dept:'Panchayat Raj', mandal:'Utnoor', status:'resolved', issue:'MGNREGA wages for 42 days of work not paid for 8 months. Bank account linked but transfers failing.', intervention:'IFC operator registered grievance. GRO verified work records. Public hearing flagged this case; local panchayat officer was present.', outcome:'Wages released within 19 days. Biometric linking corrected to prevent recurrence.', quote:'The hearing made the Panchayat officer listen. He could not ignore it in front of everyone.', photo:'Photo: MGNREGA worksite, Utnoor mandal' },
    { id:'ADB-004', dept:'Panchayat Raj', mandal:'Bela', status:'partial', issue:"Widow pension stopped for 14 months following biometric failure. GRO ATR notes 'permanent migration' — applicant has never left the village.", intervention:"SSAAT field team verified applicant's presence. Review status corrected. New biometric enrollment initiated.", outcome:'Pension restored for future months. Arrears of 14 months still pending state-level policy clarification.', photo:'Photo: SSAAT field verification visit, Bela mandal' },
    { id:'ADB-005', dept:'Forest', mandal:'Indervelly', status:'resolved', issue:'Individual Forest Rights (IFR) title pending for 6 years despite Gram Sabha approval at village level.', intervention:'GRO from Forest department traced file to district-level sub-divisional committee. Public hearing facilitated dialogue between applicant and forest officer.', outcome:'IFR title issued after sub-divisional review. One of three similar cases in the mandal resolved in same hearing round.', quote:'The GRO came to our village for the first time in years. The public hearing is what made them move the file.', photo:'Photo: IFR title ceremony, Indervelly mandal' },
    { id:'ADB-006', dept:'Food & Civil Supplies', mandal:'Neradigonda', status:'at-state', issue:'Gas subsidy of ₹1,050 (3 cylinders) matched in portal but not disbursed for 8 months.', intervention:'GRO confirmed portal entry correct. ATR filed. Escalated to district Food & Civil Supplies officer. Confirmed state-level payment gateway issue.', outcome:'Subsidy release pending state treasury clearance. 79 similar cases in the same mandal with identical status.', photo:'Photo: Complainant with ATR receipt, Neradigonda mandal' },
  ];
  const c = cases[active];
  const statusColor = { resolved: C.teal, 'at-state': '#c0392b', partial: C.amber };
  const statusLabel = { resolved: '✓ Resolved', 'at-state': '○ Unresolved', partial: '◑ Partial' };

  return (
    <section id="cases" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>Human Impact</div>
        <h2 style={SS.sectionTitle}>Case stories</h2>
        <p style={SS.sectionLead}>Six representative cases from the pilot — resolved and unresolved. Names anonymised. Dates accurate to data cut-off (31 Jan 2026).</p>

        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:28 }}>
          {cases.map((cs,i)=>(
            <button key={i} onClick={()=>setActive(i)} style={{ padding:'8px 14px', fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:active===i?700:400, color:active===i?C.white:C.textMid, background:active===i?C.navy:C.bg, border:`1px solid ${active===i?C.navy:C.border}`, borderRadius:3, cursor:'pointer' }}>
              {cs.id}
              <span style={{ marginLeft:6, width:7, height:7, borderRadius:'50%', display:'inline-block', background:statusColor[cs.status], verticalAlign:'middle' }} />
            </button>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {/* Photo */}
            <PhotoPlaceholder label={c.photo} aspect="4/3" />

            <div style={{ background:C.bg, border:`1px solid ${C.border}`, borderRadius:4, padding:'18px 22px' }}>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:10 }}>
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, background:`${C.teal}18`, color:C.teal, padding:'2px 7px', borderRadius:2 }}>{c.dept}</span>
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, background:`${C.navy}10`, color:C.navy, padding:'2px 7px', borderRadius:2 }}>{c.mandal}</span>
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:2, background:`${statusColor[c.status]}18`, color:statusColor[c.status] }}>{statusLabel[c.status]}</span>
              </div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, color:C.textLight, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:5 }}>The issue</div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.textMid, lineHeight:1.6 }}>{c.issue}</div>
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            <div style={{ background:C.bg, border:`1px solid ${C.border}`, borderRadius:4, padding:'18px 22px' }}>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, color:C.textLight, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:5 }}>Intervention through the pilot</div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.textMid, lineHeight:1.6 }}>{c.intervention}</div>
            </div>
            <div style={{ background:`${statusColor[c.status]}0e`, border:`1px solid ${statusColor[c.status]}40`, borderRadius:4, padding:'18px 22px' }}>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, color:C.textLight, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:5 }}>Outcome</div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.textMid, lineHeight:1.6 }}>{c.outcome}</div>
            </div>
            {c.quote && (
              <div style={{ background:C.navy, borderRadius:4, padding:'22px 26px' }}>
                <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:32, color:C.amberLight, lineHeight:1, marginBottom:8 }}>"</div>
                <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:16, color:C.white, lineHeight:1.65, fontStyle:'italic' }}>{c.quote}</div>
                <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:'rgba(255,255,255,0.35)', marginTop:10 }}>— Applicant, {c.mandal} mandal</div>
              </div>
            )}
            {!c.quote && (
              <div style={{ background:C.bg, border:`1px solid ${C.border}`, borderRadius:4, padding:'16px 20px' }}>
                <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textLight, lineHeight:1.6 }}>
                  <strong>Note on unresolved cases:</strong> Cases blocked at state-level or policy constraints are documented — not local officer failure. Documenting these cases is essential to identifying systemic reform needs beyond the district level.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 9: WAY FORWARD ────────────────────────────────────────────────────
function WayForward() {
  const recommendations = [
    { area:'Enact a Telangana Grievance Redressal Law', priority:'Critical',
      recs:['Build on the Right of Citizens for Time-Bound Delivery of Goods and Services and Redressal of their Grievances Act, 2013 to institutionalise time-bound grievance redressal, appeal mechanisms, and automatic escalation statewide.'] },
    { area:'Issue a Government Order', priority:'Critical',
      recs:['Formally institutionalise Prajavani through a GO with clear roles, decentralised structures, defined timelines, and provisions for appeal and automatic escalation — making the pilot\'s architecture the state standard.'] },
    { area:'Scale weekly Mandal Prajavani', priority:'High',
      recs:['Scale weekly Prajavani hearings across all districts in Telangana — at mandal, district, and state levels — with the necessary GROs participating, building on the rhythm institutionalised in Adilabad since November 2025.'] },
    { area:'Statewide digital grievance system', priority:'High',
      recs:['Enable a statewide digital system for direct grievance filing, tracking, and integration across all levels — replicating the Adilabad model for every district, with real-time ATR pendency dashboards for collectors.'] },
    { area:'Standardise SOPs across departments', priority:'High',
      recs:['Scale the 17 Adilabad SOPs as a template for all Telangana districts. Develop a living SOP repository with regular updates as schemes change to ensure consistent, time-bound grievance resolution.'] },
    { area:'Independent verification', priority:'Critical',
      recs:["Formalise SSAAT's field verification role via Government Order — not just pilot MoU.",'Publish independently verified resolution rates alongside system-reported disposal rates.'] },
    { area:'Strengthen appeals', priority:'High',
      recs:['Formalise the Collector appeal as a statutory right with defined timelines.','Extend appeals to a state-level ombudsman for cases involving state-level blocks.'] },
  ];
  const priorityColor = { High:C.amber, Critical:'#c0392b', Medium:C.teal };

  return (
    <section id="forward" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>Policy Recommendations</div>
        <h2 style={SS.sectionTitle}>Way forward</h2>
        <p style={SS.sectionLead}>The Adilabad model has demonstrated feasibility. The next challenge is formalisation and replication — not just in Telangana, but as a national model for decentralised grievance redress.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:18, marginBottom:40 }}>
          {recommendations.map((r,i)=>(
            <div key={i} style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:4, padding:'22px 26px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy }}>{r.area}</div>
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:9, fontWeight:700, letterSpacing:'0.1em', padding:'2px 7px', borderRadius:2, background:`${priorityColor[r.priority]}18`, color:priorityColor[r.priority], textTransform:'uppercase', flexShrink:0, marginLeft:8 }}>{r.priority}</span>
              </div>
              <ul style={{ margin:0, padding:'0 0 0 15px' }}>
                {r.recs.map((rec,j)=>(
                  <li key={j} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.65, marginBottom:5 }}>{rec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ background:C.navy, borderRadius:6, padding:'36px 44px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:36 }}>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:20, color:C.white, marginBottom:10 }}>The ask to government</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:'rgba(255,255,255,0.7)', lineHeight:1.7 }}>Issue a formal Government Order recognising SSAAT and civil society as official verification partners in the grievance redress system. This is the single step that would institutionalise the accountability layer that makes this model work.</div>
          </div>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:20, color:C.white, marginBottom:10 }}>The replication opportunity</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:'rgba(255,255,255,0.7)', lineHeight:1.7 }}>Multiple states are watching this pilot. Telangana has the opportunity to establish the national standard for decentralised, participatory, verified grievance redress — building on the CM Prajavani brand and infrastructure.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 10: DOCUMENTARY ───────────────────────────────────────────────────
function Documentary() {
  return (
    <section id="documentary" style={SS.section(C.navy)}>
      <div style={SS.container}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:48, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:C.amberLight, marginBottom:12 }}>Forthcoming</div>
            <h2 style={{ fontFamily:"'Libre Baskerville',serif", fontSize:32, fontWeight:700, color:C.white, lineHeight:1.2, marginBottom:16 }}>Documentary Film</h2>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:17, color:'rgba(255,255,255,0.65)', lineHeight:1.7, marginBottom:24 }}>
              A documentary film on the Adilabad Prajavani pilot — the citizens behind the grievances, the officers who responded, and what happens when accountability becomes a public act.
            </p>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>
              Produced by
            </div>
            <a href="https://vimeo.com/dilmayafilms" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Libre Baskerville',serif", fontSize:18, fontWeight:700, color:C.amberLight, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              Dilmaya Films
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:'rgba(255,255,255,0.3)', marginTop:6 }}>vimeo.com/dilmayafilms</div>
          </div>

          {/* Video placeholder */}
          <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, aspectRatio:'16/9', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
            <div style={{ width:56, height:56, background:'rgba(255,255,255,0.08)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:'rgba(255,255,255,0.3)', textAlign:'center' }}>
              Documentary coming soon<br/>
              <span style={{ fontSize:11, color:'rgba(255,255,255,0.2)' }}>Produced by Dilmaya Films</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 11: PARTNERS ──────────────────────────────────────────────────────
function Partners() {
  const orgs = [
    { name:'SSAAT', full:'Society for Social Audit, Accountability and Transparency', role:'Field verification partner — independently verified every closed grievance', type:'Government institution' },
    { name:'Kisan Mitra', full:'Kisan Mitra', role:'Citizen mobilisation, agricultural grievance follow-up, case tracking', type:'Civil society' },
    { name:'Center for Collective Development', full:'Center for Collective Development', role:'Community mobilisation and field coordination', type:'Civil society' },
    { name:'Center for People\'s Forestry', full:'Center for People\'s Forestry', role:'Forest Rights Act cases — IFR title follow-up', type:'Civil society' },
    { name:'Digital Empowerment Foundation', full:'Digital Empowerment Foundation', role:'Digital access facilitation and portal support', type:'Civil society' },
    { name:'MKSS', full:'Mazdoor Kisan Shakti Sangathan', role:'Right to information and grievance accountability expertise', type:'Civil society' },
    { name:'Rythu Swaraj Vedika', full:'Rythu Swaraj Vedika', role:'Agriculture and farmer rights grievance follow-up', type:'Civil society' },
    { name:'Dalit Bahujan Front', full:'Dalit Bahujan Front (DBF)', role:'Social welfare and caste certificate cases', type:'Civil society' },
    { name:'SAFA', full:'SAFA', role:'Coordination and mobilisation', type:'Civil society' },
    { name:'SAFAR', full:'Social Accountability Forum for Action and Research', role:'Pilot facilitation, design, coordination, and reporting. A collective of activists, researchers and development practitioners working at the interface of state, law and society.', type:'Facilitation organisation' },
    { name:'Adilabad District Administration', full:'Adilabad District Administration, Government of Telangana', role:'Implementation partner — GRO network, public hearings, Collector-level review', type:'Government' },
  ];

  const typeColor = { 'Government institution': C.teal, 'Civil society': C.amber, 'Facilitation organisation': '#5a7ec4', 'Government': '#4a9a60' };

  return (
    <section id="partners" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>Collaborating Partners</div>
        <h2 style={SS.sectionTitle}>Who made this happen</h2>

        <div style={{ background:C.navy, borderRadius:6, padding:'28px 36px', marginBottom:40 }}>
          <p style={{ fontFamily:"'Libre Baskerville',serif", fontSize:17, color:C.white, lineHeight:1.7, fontStyle:'italic' }}>
            "Over 60 civil society volunteers from Kisan Mitra, Center for Collective Development, Center for People's Forestry, Digital Empowerment Foundation, Mazdoor Kisan Shakti Sangathan, Rythu Swaraj Vedika, Dalit Bahujan Front (DBF), SAFA, SAFAR and other civil society organisations from across the country came to Adilabad and collaborated with the District Administration to roll out the pilot."
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:14, marginBottom:36 }}>
          {orgs.map((org,i)=>(
            <div key={i} style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:4, padding:'18px 20px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy }}>{org.name}</div>
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:9, fontWeight:700, letterSpacing:'0.08em', padding:'2px 6px', borderRadius:2, background:`${typeColor[org.type]}18`, color:typeColor[org.type], textTransform:'uppercase', flexShrink:0, marginLeft:8, whiteSpace:'nowrap' }}>{org.type}</span>
              </div>
              {org.full !== org.name && (
                <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:C.textLight, marginBottom:6 }}>{org.full}</div>
              )}
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.55 }}>{org.role}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24 }}>
          <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:4, padding:'20px 24px' }}>
            <PhotoPlaceholder label="Photo: Civil society volunteers at pilot orientation, Adilabad — January 2025" aspect="16/7" dark={false} />
          </div>
          <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:4, padding:'20px 24px' }}>
            <PhotoPlaceholder label="Photo: Public hearing — citizens, GROs, civil society, and district administration together" aspect="16/7" dark={false} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 12: RESOURCES ──────────────────────────────────────────────────────
function Resources() {
  const docs = [
    { title:'Full Pilot Report', desc:'Complete 22–25 page evidence report covering all aspects of the pilot.', type:'PDF', primary:true },
    { title:'ATR Analysis', desc:'Quantitative analysis of ATR filing rates, timeliness, and quality across mandals and departments.', type:'PDF', primary:false },
    { title:'Case Study Compendium', desc:'Extended narratives for 12 representative grievance cases — resolved and unresolved.', type:'PDF', primary:false },
    { title:'Concept Note', desc:'Original concept note for the Adilabad Decentralised Prajavani pilot (September 2024).', type:'PDF', primary:false },
    { title:'SOP Reference Guide', desc:'17 Standard Operating Procedures for GROs across 7 departments and 20 grievance categories.', type:'PDF', primary:false },
    { title:'Grievance Data (5,000)', desc:'Anonymised dataset of 5,000 grievances with follow-up status and review classification.', type:'XLS', primary:false },
  ];

  return (
    <section id="resources" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>Reports &amp; Resources</div>
        <h2 style={SS.sectionTitle}>Download and access</h2>
        <p style={SS.sectionLead}>All published materials from the Adilabad Pilot. For data requests or partnership enquiries, contact SAFAR India.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:14, marginBottom:48 }}>
          {docs.map((d,i)=>(
            <div key={i} style={{ background:d.primary?C.navy:C.bg, border:`1px solid ${d.primary?C.navy:C.border}`, borderRadius:4, padding:'20px 24px', display:'flex', flexDirection:'column', gap:8 }}>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'0.1em', color:d.primary?C.amberLight:C.textLight }}>{d.type}</div>
              <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:d.primary?C.white:C.navy }}>{d.title}</div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:d.primary?'rgba(255,255,255,0.6)':C.textMid, lineHeight:1.5, flexGrow:1 }}>{d.desc}</div>
              <button style={{ marginTop:4, padding:'9px 14px', fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:700, color:d.primary?C.navy:C.white, background:d.primary?C.amberLight:C.navy, border:'none', borderRadius:3, cursor:'pointer', textAlign:'left' }}>
                {d.primary?'Download Report →':'Download →'}
              </button>
            </div>
          ))}
        </div>

        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:36, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:28 }}>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>Digital portal</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.6, marginBottom:6 }}>File grievances, track status, and download ATRs at the Adilabad Pilot tab on the state portal.</div>
            <a href="https://prajavani.cgg.gov.in" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.teal, fontWeight:600, textDecoration:'none' }}>prajavani.cgg.gov.in</a>
          </div>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>For inquiries</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.6, marginBottom:6 }}>Social Accountability Forum for Action and Research — facilitates this pilot. For partnership, replication, or media inquiries:</div>
            <a href="https://safar-india.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.teal, fontWeight:600, textDecoration:'none' }}>safar-india.org</a>
          </div>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>Documentary film</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.6, marginBottom:6 }}>A documentary on the pilot is forthcoming, produced by Dilmaya Films.</div>
            <a href="https://vimeo.com/dilmayafilms" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.teal, fontWeight:600, textDecoration:'none' }}>vimeo.com/dilmayafilms</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export all components
Object.assign(window, {
  WhyChange, PilotJourney, HowItWorks, FollowUp,
  Dashboard, KeyInsights, CaseStories, WayForward,
  Documentary, Partners, Resources,
  PhotoPlaceholder,
});
