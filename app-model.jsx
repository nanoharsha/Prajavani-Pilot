// ════════════════════════════════════════════════════════════════════════════
// SECTION 4: HOW THE MODEL WORKS — 7 clickable components with modals
// ════════════════════════════════════════════════════════════════════════════

function HowItWorks() {
  useLang();
  const printMode = usePrintMode();
  const [active, setActive] = React.useState(null);

  const components = [
    {
      code: 'IFC', title: 'Information Facilitation Centre',
      short: 'A dedicated data-entry desk at each mandal office, staffed by an operator who registers grievances and issues acknowledgement receipts.',
      photo: 'Photo: IFC desk at mandal office, Adilabad',
      subtitle: 'Mandal-level access point',
      content: {
        body: '16 IFCs were established across 16 mandals, operational 9 am to 5 pm on all working days. The IFC reduces travel cost — citizens no longer need to travel to Hyderabad — but the Pilot also revealed that mandal-level was not enough: most grievances were filed at village/panchayat level with SSAAT and civil society support.',
        sections: [
          { heading: 'Activities at an IFC', items: [
            'Register grievances across all 20 Pilot categories on the Prajavani-CGG portal',
            'Issue a dated, printed acknowledgement receipt to the complainant',
            'Provide proactive information about scheme eligibility (Mahalaxmi, Gruhajyothi, MGNREGA, etc.)',
            'Verify identity documents and ration card details where required',
            'Assist with status tracking and ATR access once portal opened to public (Oct 2025)',
          ]},
          { heading: 'Gap revealed by the Pilot', items: [
            'IFC at mandal level still required travel for many citizens',
            'Most grievances came via SSAAT + civil society outreach at panchayat level',
            'Way Forward: IFCs should be made more accessible to local communities — at panchayat or village level',
          ]},
        ]
      }
    },
    {
      code: 'PDI', title: 'Proactive Disclosure of Information',
      short: 'Proactive disclosure of information about government programmes — pensions, ration cards, farmer subsidies — so citizens understand their entitlements and can file informed grievances.',
      photo: 'Photo: Information facilitation at a mandal Prajavani',
      subtitle: 'Information as the first step to redress',
      content: {
        body: 'A key component of the model is the proactive disclosure of information about government programmes — social security pensions, ration cards, farmer subsidies and similar schemes. Access to clear information improves citizens’ understanding of various government initiatives, helps them diagnose problems with their own applications, and enables them to file informed grievances that seek the appropriate intervention.',
        sections: [
          { heading: 'Why proactive disclosure matters', items: [
            'Many citizens do not file grievances simply because they are unaware of their entitlements, or of why an application was rejected',
            'Clear information about eligibility and application status lets citizens identify the actual problem before approaching the system',
            'Informed grievances are better defined, easier for GROs to act on, and quicker to resolve',
          ]},
          { heading: 'How it featured in the Pilot', items: [
            'IFC operators and civil society volunteers shared scheme eligibility information while registering grievances',
            'Information was actively carried to the village level — not left passively available online',
            'Way Forward: a dedicated proactive disclosure system (Praja Soochana) should sit alongside Prajavani statewide',
          ]},
        ]
      }
    },
    {
      code: 'GRO', title: 'Grievance Redress Officer',
      short: 'A mandal-level officer one level above frontline staff — given additional charge of investigating and responding to grievances within their department.',
      photo: 'Photo: GRO conducting field inquiry in a village',
      subtitle: 'Designated authority for adjudication',
      content: {
        body: 'In an ideal system, the GRO would be independent of the implementing authority — but this was not practically feasible across all line departments. The Pilot designated officers one level higher than frontline staff: 90+ GROs across 9 line departments, all given orientation on Pilot modalities.',
        sections: [
          { heading: 'Department-wise GRO designation', items: [
            'Agriculture → Mandal Agricultural Officer (MAO)',
            'Revenue → Tahsildar / Mandal Revenue Officer (MRO)',
            'Energy → Assistant Engineer (AE), Electricity Department',
            'Panchayat Raj & RD → Mandal Parishad Development Officer (MPDO)',
            'Food & Civil Supplies → Tahsildar / Revenue division',
            'Tribal Welfare → Deputy Director, ITDA (Forest Rights)',
            'Housing → Housing officer, Mandal level',
          ]},
          { heading: 'GRO responsibilities under Pilot SOPs', items: [
            'Conduct enquiry into the grievances marked to them, including conducting field verification, in line with the SOPs',
            'File a written ATR with specific action remarks within 30 days',
            'Attend Mandal Prajavanis and share enquiry findings; record remarks on pre-formatted receipt in writing',
            'Respond to Collector Appeal if the case is escalated',
          ]},
          { heading: 'Observed limitations', items: [
            'Several GROs continued to show lack of ownership over the system',
            'Repeated training is required, including in-person rounds — currently uneven across mandals',
          ]},
        ]
      }
    },
    {
      code: 'SOP', title: 'Standard Operating Procedures',
      short: '17 SOPs issued by the respective line departments — specifying exactly what action a GRO must take for each grievance category.',
      photo: 'Photo: SOP reference document — Pension category',
      subtitle: 'Converting discretion into procedure',
      content: {
        body: 'SOPs proved one of the Pilot\'s most valuable design choices. They enabled reasoned, time-bound action by officers without passing the burden back onto citizens. During hearings, GROs frequently referenced SOPs — and citizens received clearer written commitments as a result.',
        sections: [
          { heading: 'Why SOPs matter', items: [
            'Specify the minimum steps the GRO must take before filing an ATR',
            'Set clear expectations for the citizen about what will happen',
            'Make ATR quality comparable across mandals and departments',
            'Reduce arbitrariness — responses follow category, not individual discretion',
            'Help GROs justify decisions where the issue is state-level or policy-bound',
          ]},
          { heading: 'Departments with SOPs issued', items: [
            'Panchayat Raj & RD — MGNREGA, Pensions',
            'Food & Civil Supplies — Gas Subsidy, Ration Card',
            'Energy — Gruhajyothi, Service Issues, Electrocution Death',
            'Revenue — Land Issues, Survey, Certificates',
            'Agriculture — PM Kisan, Crop Loan Waiver, Rythu Bima',
            'Tribal Welfare — Individual Forest Rights (IFR)',
          ]},
          { heading: 'Recommendation', items: [
            'SOPs must be regularly updated in consultation with mandal- and district-level officials',
            'Updates must reflect both local issues and state-level policy changes',
            'Way Forward: All line departments statewide should issue SOPs for grievances pertaining to their schemes',
          ]},
        ]
      }
    },
    {
      code: 'PH', title: 'Public Hearing / Mandal Prajavani',
      short: 'Open public platform where citizens and GROs meet face to face. Initially monthly; institutionalised as weekly Mandal Prajavani every Monday from November 2025.',
      photo: 'Photo: Public hearing under shamiyana, Adilabad — Feb 2025',
      subtitle: 'The Pilot\'s most effective feature',
      content: {
        body: 'Five rounds of public hearings (80+ hearings) were held at the mandal level in the first year. Each public hearing was presided over by a district-level officer, with all mandal-level officers present and open for the public to attend. The space was organised with a series of desks to manage the flow of proceedings: an Entry Desk to issue tokens to complainants (for registered grievances), the Presiding Officer\'s Desk, various GROs\' Desks (department-wise), an Exit Desk to record officers\' responses before the citizen left, and a separate IFC Desk for filing new grievances.',
        sections: [
          { heading: 'What was achieved at hearings', items: [
            'Agriculture Department officials acknowledged errors in crop loan waiver records — agreed to write to concerned banks',
            'Rural Development officials followed up on pensions withheld at the State level for years',
            'Data mismatches across Aadhaar, ration cards, and LPG records were corrected on the spot at dedicated desks',
            'Pension restorations confirmed in writing; urgent decisions taken immediately',
            'Inter-departmental coordination — gas agencies, MeeSeva centres also attended and processed applications',
          ]},
          { heading: 'Friction encountered during the Pilot', items: [
            'Scheduling monthly hearings required repeated follow-up — officers prioritised other administrative work',
            'Only 5 rounds in 10 months — leading to the shift to weekly Mandal Prajavani',
            'In Gondi-speaking areas, citizens often did not follow Telugu proceedings beyond their own case',
            'Lack of drinking water and accessible toilets in some mandal offices — particularly hard on women petitioners',
            'When the Collector was present, hearings were more orderly; otherwise discipline degraded as sessions ran into late afternoon',
          ]},
          { heading: 'November 2025 — weekly Mandal Prajavani', items: [
            'Every Monday at MPDO office; all concerned mandal-level officers present',
            'IFC operators register grievances; citizens receive pre-formatted receipts',
            'GRO\'s remarks recorded on receipt in writing during the session',
            'Remarks uploaded to portal before exit',
            'Operates at minimal additional cost by repurposing existing mandal infrastructure',
          ]},
        ]
      }
    },
    {
      code: 'ATR', title: 'Action Taken Report',
      short: 'Mandatory written response from the GRO within 30 days. Available online (Oct 2025+) and downloadable by the citizen.',
      photo: 'Photo: Sample ATR with GRO and Presiding Officer signatures',
      subtitle: 'From verbal promise to written record',
      content: {
        body: 'The ATR was the Pilot\'s primary accountability document. By forcing officials to put their response in writing, it transformed cases that would otherwise be evaded. Under MGNREGA, for instance, ATRs stating jobs were on hold "as per instructions of Commissioner RD TS" became written proof of statutory violation.',
        sections: [
          { heading: 'Pilot ATR statistics', items: [
            '7,998 ATRs filed (as of data cut-off)',
            '30-day timeline mandatory per SOPs',
            '520 grievances marked for Collector Appeal because no ATR was filed at all',
            '486 additional grievances marked for appeal due to non-compliance with SOP or wrong ATR remarks',
          ]},
          { heading: 'Critical gaps identified', items: [
            'System allows only one final ATR per grievance — obscures cases that move through multiple levels',
            'A mandal officer may file a "final" ATR while case actually requires district / state action',
            'No automatic SMS notification to citizen when ATR is filed (active until Jan 2026; now stopped)',
            'Disposed ≠ Resolved — Pilot moved away from binary "Disposed/Pending" framework to 11-status review',
          ]},
          { heading: 'Standardisation of remarks', items: [
            'Civil society + CGG designed category-specific remark templates after early hearings',
            'Separate templates for Pensions, Gas Subsidy, Gruhajyothi, Crop Loan Waiver',
            '3–4 standard options plus an "Other" box per category',
            'Result: faster, more consistent officer responses; clearer commitments for citizens',
          ]},
        ]
      }
    },
    {
      code: 'APL', title: 'Collector Appeal',
      short: 'Second-tier escalation where the District Collector personally reviews unresolved or non-compliant cases.',
      photo: 'Photo: District Collector at appeal hearing, 12 Sep 2025',
      subtitle: 'A safeguard for procedural accountability',
      content: {
        body: 'Before the Pilot, a local official\'s response was effectively final — there was no institutional recourse. The Collector Appeal establishes a rights-based pathway when ATRs are inadequate, non-compliant, or delayed. Of 5,000 reviewed grievances, 1,006 (20%) were marked for appeal.',
        sections: [
          { heading: 'When a case is marked for appeal', items: [
            'No ATR has been filed within the 30-day window (520 of the 1,006 appeal cases)',
            'ATR filed but non-compliant with the SOP',
            'ATR filed but factually inaccurate (revealed via field verification)',
            'Specific high-volume issues — e.g. 221 MGNREGA appeals where GROs cited Commissioner\'s instructions to hold up new job cards',
          ]},
          { heading: 'Pilot appeal proceedings', items: [
            'Only one Collector Appeal hearing held during the Pilot — 12 September 2025',
            '49 grievances from Adilabad (Rural), Jainath, Narnoor, and Utnoor mandals',
            'Collector presided; district-level officers and GROs attended; tripartite dialogue with complainants',
            'Resolved exceptional cases requiring state-level clarification and long-pending issues',
          ]},
          { heading: 'Critical gaps', items: [
            'No dedicated software module for Collector Appeal — was a Pilot software shortfall',
            'No auto-escalation when ATRs aren\'t filed within 30 days',
            'Until Jan 2026 citizens couldn\'t file appeals directly — entirely facilitated by SSAAT and civil society',
            'A second appeal hearing could not be scheduled due to various reasons',
          ]},
        ]
      }
    },
    {
      code: 'DGT', title: 'Digital Platform',
      short: 'The "Adilabad Pilot" tab on prajavani.cgg.gov.in — added after persistent follow-up with the SNO and the Adilabad Collector.',
      photo: 'Screenshot: Adilabad Pilot tab on prajavani.cgg.gov.in',
      subtitle: 'Built around the citizen, not the back-end',
      content: {
        body: 'The digital platform was developed by CGG in three phases between January 2025 and April 2026. The most important learning: software shapes practice more than instructions do. Regardless of the SOP, officers act on what their login screen prompts them to do.',
        sections: [
          { heading: 'Features built into the portal', items: [
            'Mobile-OTP filing — no in-person visit to Hyderabad required',
            'Status tracking without OTP barriers',
            'ATR download as PDF',
            'Automatic routing of grievances to designated GROs',
            'Dynamic category-specific fields: LPG Consumer Number, USC Number, PPB Number, Job Card Number',
            'Pre-formatted public hearing receipts — bulk and individual download',
            'Inter-departmental tagging for coordinated cases',
            'Multilingual receipts (Telugu)',
          ]},
          { heading: 'Critical gaps that remain', items: [
            'No auto-escalation when ATR is not filed within 30 days',
            'No dedicated module for the Collector Appeal process',
            'SMS notification on grievance filing stopped from January 2026',
            'Hearing date / ATR / Mandal Prajavani notifications still pending despite October 2025 request',
            'Citizen feedback on ATRs done outside the system (via SSAAT / Kisan Mitra phone calls and visits)',
            'Status review framework (11 categories) built outside the portal by civil society',
          ]},
          { heading: 'Citizen-centric design principle', items: [
            'Technology cannot replace dialogue — but it can protect it',
            'The portal triggers both a 30-day timeline and the right to a public hearing',
            'The role of technology was to record interactions properly, not to replace them',
          ]},
        ]
      }
    },
  ];

  const active_data = active !== null ? components[active] : null;

  const Modal = () => active_data ? (
    <div onClick={() => setActive(null)} style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.white, borderRadius: 6, maxWidth: 820, width: '100%', maxHeight: '88vh', overflow: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}>
        <div style={{ background: C.navy, padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderRadius: '6px 6px 0 0', position: 'sticky', top: 0, zIndex: 1 }}>
          <div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: C.amberLight, textTransform: 'uppercase', marginBottom: 6 }}>{active_data.code}</div>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, fontWeight: 700, color: C.white, lineHeight: 1.2 }}>{active_data.title}</div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>{active_data.subtitle}</div>
          </div>
          <button onClick={() => setActive(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: C.white, width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 16 }}>×</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.7fr)', gap: 0 }}>
          <div style={{ padding: 24, background: C.bg, borderRight: `1px solid ${C.border}` }}>
            <PhotoPlaceholder label={active_data.photo} aspect="3/4" />
          </div>
          <div style={{ padding: '28px 32px' }}>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 15, color: C.textMid, lineHeight: 1.7, marginBottom: 22 }}>{active_data.content.body}</p>
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

  const flowSteps = ['Village outreach', 'IFC filing', 'GRO inquiry', 'Mandal Prajavani', 'Written ATR', 'Collector Appeal'];

  return (
    <section id="model" data-screen-label="05 Model" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('The Model', 'నమూనా')}</div>
        <h2 style={SS.sectionTitle}>{t('How the Adilabad model works', 'ఆదిలాబాద్ నమూనా ఎలా పనిచేస్తుంది')}</h2>
        <p style={{ ...SS.sectionLead, marginBottom: 24 }}>
          {t('Seven interlocking components form a complete grievance redress cycle.', 'ఏడు అన్యోన్య బంధిత భాగాలు పూర్తి ఫిర్యాదు పరిష్కార చక్రాన్ని రూపొందిస్తాయి.')} <strong style={{ color: C.navy }}>{t('Click any component', 'ఏదైనా భాగాన్ని క్లిక్ చేయండి')}</strong> {t('to explore in detail — including what works and what didn\'t during the Pilot.', '— పైలట్లో ఏది పనిచేసింది, ఏది పని చేయలేదో వివరంగా చూడండి.')}
        </p>

        <div style={{ background: C.navy, borderRadius: 6, padding: '24px 20px', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
            {flowSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div style={{ background: C.amber, color: C.navy, padding: '10px 16px', borderRadius: 4, fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>{step}</div>
                {i < flowSteps.length-1 && <div style={{ color: C.amberLight, fontSize: 16, padding: '0 4px', opacity: 0.5 }}>→</div>}
              </React.Fragment>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 12, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Independent verification by SSAAT + civil society wraps around every step</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }} className={printMode ? 'print-hide' : ''}>
          {components.map((comp, i) => (
            <div key={i} onClick={() => setActive(i)}
              style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 4, padding: '22px 24px', cursor: 'pointer', transition: 'all 0.18s' }}
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

        {/* Print-only stack: all 7 components fully unpacked */}
        {printMode && (
          <div className="print-stack">
            {components.map((comp, i) => (
              <div key={i} className="print-component-item" style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 4, marginBottom: 20, overflow: 'hidden' }}>
                <div style={{ background: C.navy, padding: '14px 22px' }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: C.amberLight, textTransform: 'uppercase' }}>{comp.code}</div>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: C.white, lineHeight: 1.25, marginTop: 3 }}>{comp.title}</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{comp.subtitle}</div>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7, marginBottom: 14 }}>{comp.content.body}</p>
                  {comp.content.sections.map((sec, si) => (
                    <div key={si} style={{ marginBottom: 14 }}>
                      <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{sec.heading}</div>
                      <ul style={{ paddingLeft: 18, margin: 0 }}>
                        {sec.items.map((item, ii) => (
                          <li key={ii} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textMid, lineHeight: 1.65, marginBottom: 4 }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Modal />
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SECTION 5: DIGITAL TECHNOLOGY — phase-based exploration
// ════════════════════════════════════════════════════════════════════════════

function DigitalTechnology() {
  useLang();
  const printMode = usePrintMode();
  const [phase, setPhase] = React.useState(0);

  const phases = [
    {
      label: 'Pre-Pilot',
      title: 'November 2024 — early discussions',
      body: 'Initial discussions between CGG and civil society groups in November 2024 agreed core architectural elements. Grievance categories and sub-categories mapped to line departments. Directory mapping IFC operators, GROs, and Presiding Officers. Auto-assignment of grievances on filing. Mandatory text fields for GRO and Presiding Officer remarks. Independent logins for civil society volunteers.',
      built: [
        'Category → department mapping',
        'GRO and Presiding Officer directory',
        'Auto-assignment of grievances on filing',
        'Mandatory remarks field for GRO and PO',
        'Civil society volunteer logins for direct filing',
      ],
      friction: [],
    },
    {
      label: 'Phase 1',
      title: 'Feb 2025 — testing through public hearings',
      body: 'The first sixteen hearings (6–14 February 2025) tested the digital system in the field. Several gaps surfaced quickly. Word mail-merge templates with Excel — generating 300–400 receipts a day manually — were the workaround until proper receipts were built into the portal.',
      built: [
        'Mandatory remarks field forcing officer accountability',
        'Initial public hearing scheduling workflow',
        'Workaround templates for receipt generation',
      ],
      friction: [
        'GRO remarks were free-text — varied widely, often vague enough to defeat accountability',
        'Public hearing receipts had to be generated outside the portal via Excel mail-merge',
        'Officers\' handwritten remarks at hearings often could not be uploaded in real-time — broke the link to the ATR',
        'Citizens had to be informed of each hearing date separately — no fixed schedule',
        'District approval required for each hearing — caused repeated delays',
      ],
    },
    {
      label: 'Phase 2',
      title: 'Mid-2025 — redesigning the portal',
      body: 'By mid-2025, workarounds were being built directly into the portal. Officers had repeatedly complained that grievance attachments lacked basic information — forcing them to call citizens. Drawing on the Kisan Mitra helpline practice of category-specific diagnostic questions, dynamic fields were added.',
      built: [
        'Bulk and individual download of pre-formatted public hearing receipts',
        'Category-specific remark templates — Pensions, Gas Subsidy, Gruhajyothi, Crop Loan Waiver (3–4 options + "Other")',
        'Dynamic category-specific input fields: LPG Consumer Number, USC Number, PPB Number, Job Card Number',
        'Admin login for District Collector to edit category fields and templates',
        'One-ATR rule — only one final ATR per grievance, with an "Interim Reply" field for partial updates',
      ],
      friction: [
        'One-ATR rule creates visibility gap for grievances moving through multiple bureaucratic levels',
        'A mandal officer may file a "final" ATR while case still needs district/state action — citizens left unclear on next steps',
        'Editing functionality created some dependence on CGG team in Hyderabad for changes',
      ],
    },
    {
      label: 'Phase 3',
      title: 'October 2025 — opening the portal to citizens',
      body: 'Until October 2025, the grievance-filing portal was not open to citizens. They could file only at IFCs or through panchayat-level volunteers. A formal request was submitted to the SNO Prajavani for four changes — converting information flows from primarily upward to downward and horizontal.',
      built: [
        'Direct filing by citizens with mobile OTP authentication',
        'Status tracking without OTP barriers',
        'ATR download communicated directly to complainants',
        'Dashboard for District Officers to monitor mandal-level ATR filing',
      ],
      friction: [
        'Auto-escalation when ATR not filed within 30 days — still not implemented',
        'Dedicated software module for Collector Appeal — still not built',
        'Inter-departmental tagging for cases requiring multi-officer coordination — partial',
        'GROs cannot attach files when filing Interim Replies',
        'Citizen notifications (SMS / Telugu) — partial; automatic SMS on filing stopped Jan 2026',
      ],
    },
    {
      label: 'Phase 4',
      title: 'Nov 2025 — transition to Weekly Mandal Prajavani',
      body: 'When the system transitioned from monthly hearings to weekly Mandal Prajavani — where MPDOs often functioned as both Presiding Officer and GRO — the software did not adapt cleanly. Several features remained tied to the earlier monthly hearing workflow. CGG was already developing a unified statewide Prajavani portal to replace CPGRAMS, so the existing module was not redesigned specifically for Mandal Prajavani.',
      built: [
        'Continued use of public-hearing receipt format for Mandal Prajavani sessions',
        'Same workflow extended to weekly cadence',
      ],
      friction: [
        'Receipt format was designed for monthly hearings — not optimal for weekly use',
        'When MPDO functions as both PO and GRO, the dual-role workflow is awkward',
        'A statewide unified portal is being built — delaying further pilot-specific changes',
      ],
    },
    {
      label: 'Outside',
      title: 'What was built outside the system',
      body: 'Several critical functions were never built into the portal — and ended up being handled by civil society on parallel systems. These gaps reveal what an institutional digital system would need to add.',
      built: [
        'Citizen feedback on ATRs — SSAAT and Kisan Mitra phone calls and panchayat visits',
        'Status review and aggregation framework — 11 ATR status categories developed by civil society review team',
        'Custom IT system for documenting field follow-up (built by July 2025)',
        'Hearing notifications — Exotel cloud-based voice calls + Panchayat Secretary calls',
        'PNG WhatsApp accountability reports for mandal officers — weekly ATR pendency leaderboards',
      ],
      friction: [
        'Feedback data is not integrated into official portal',
        '11-status framework remains civil-society-maintained, not institutional',
        'When civil society withdraws, these functions disappear with them',
      ],
    },
  ];

  const phaseData = phases[phase];

  const learnings = [
    {
      title: 'Software shapes practice more than instructions do',
      body: 'Regardless of the SOP, officers act on what their login screen prompts them to do. Building accountability into the workflow — mandatory remarks fields, category-specific inputs — produced more behavioural change than training alone.'
    },
    {
      title: 'Build around the citizen, not the back-end',
      body: 'The decisions that mattered most — mobile-OTP filing without barriers, status tracking without OTPs, printed Telugu receipts, dynamic category-specific fields — came from keeping citizens\' needs at the forefront, not top-down administrative control.'
    },
    {
      title: 'Technology cannot replace dialogue, but it can protect it',
      body: 'The most effective feature of the Pilot was the public hearing — direct interaction between citizens and officials. The role of technology was to ensure these interactions were properly recorded, tracked, and followed through within defined timelines.'
    },
  ];

  return (
    <section id="digital" data-screen-label="07 Digital" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Role of Digital Technology', 'డిజిటల్ టెక్నాలజీ పాత్ర')}</div>
        <h2 style={SS.sectionTitle}>{t('Designing a citizen-centric digital backbone', 'పౌర-కేంద్రీకృత డిజిటల్ బాక్‌బోన్ రూపకల్పన')}</h2>
        <p style={SS.sectionLead}>
          {t('The digital platform — hosted as the "Adilabad Pilot" tab on prajavani.cgg.gov.in — was developed by the Centre for Good Governance in collaboration with civil society over five phases between January 2025 and April 2026. The Pilot revealed how software design shapes administrative behaviour more directly than instructions or SOPs.', 'డిజిటల్ ప్లాట్‌ఫార్మ్ — prajavani.cgg.gov.inలో "ఆదిలాబాద్ పైలట్" ట్యాబ్గా హోస్ట్ చేసినది — జనవరి 2025 నుండి ఏప్రిల్ 2026 మధ్య ఐదు దశలలో పౌర సమాజంతో కలిసి సెంటర్ ఫోర్ గుడ్ గవర్నెన్స్ అభివృద్ధి చేసింది. సూచనలు లేదా SOPల కంటే సాఫ్ట్‌వేర్ డిజైన్ పరిపాలనా ప్రవర్తనను ఎలా రూపొందిస్తుందో పైలట్ ప్రదర్శించింది.')}
        </p>

        {/* Phase navigator */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 28, overflowX: 'auto', borderBottom: `2px solid ${C.border}` }}>
          {phases.map((p, i) => (
            <button key={i} onClick={() => setPhase(i)} style={{
              padding: '12px 18px',
              fontFamily: "'Source Sans 3',sans-serif",
              fontSize: 13,
              fontWeight: phase === i ? 700 : 500,
              color: phase === i ? C.navy : C.textLight,
              background: 'none', border: 'none',
              borderBottom: `3px solid ${phase === i ? C.amber : 'transparent'}`,
              marginBottom: -2,
              cursor: 'pointer', whiteSpace: 'nowrap'
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: phase === i ? C.amber : C.textLight, marginBottom: 4 }}>{p.label}</div>
              {p.title.split(' — ')[0]}
            </button>
          ))}
        </div>

        {/* Phase content — single in screen mode, all phases in print mode */}
        {(printMode ? phases : [phases[phase]]).map((phaseData, pIdx) => (
        <div key={pIdx} className={printMode ? 'print-phase' : ''} style={{ marginBottom: 40 }}>
          {printMode && (
            <h3 className="print-only-heading" style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: C.navy, margin: '32px 0 14px', borderTop: `2px solid ${C.amber}`, paddingTop: 16 }}>
              {phaseData.label} — {phaseData.title}
            </h3>
          )}
          <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 12 }}>{phaseData.title}</h3>
          <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 15, color: C.textMid, lineHeight: 1.7, marginBottom: 24, maxWidth: 780 }}>{phaseData.body}</p>

          <div style={{ display: 'grid', gridTemplateColumns: phaseData.friction.length > 0 ? '1fr 1fr' : '1fr', gap: 20 }}>
            <div style={{ ...SS.card, background: C.white, borderLeft: `3px solid ${C.teal}` }}>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.teal, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>What was built</div>
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {phaseData.built.map((item, i) => (
                  <li key={i} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6, marginBottom: 6 }}>{item}</li>
                ))}
              </ul>
            </div>
            {phaseData.friction.length > 0 && (
              <div style={{ ...SS.card, background: C.white, borderLeft: `3px solid ${C.red}` }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.red, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Friction & gaps</div>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {phaseData.friction.map((item, i) => (
                    <li key={i} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6, marginBottom: 6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        ))}

        {/* Learnings */}
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 14 }}>Three learnings about technology and grievance redress</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {learnings.map((l, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 4, padding: '22px 26px' }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{l.title}</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7 }}>{l.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SECTION 6: FOLLOW-UP MECHANISM
// ════════════════════════════════════════════════════════════════════════════

function FollowUpMechanism() {
  useLang();
  const printMode = usePrintMode();
  const [tab, setTab] = React.useState('process');

  const processSteps = [
    { num: '1', title: 'Field verification', body: 'SSAAT resource persons and Kisan Mitra volunteers visit the complainant. Verify whether the ATR is accurate and implemented. Identify gaps in scheme design.', actor: 'SSAAT + Kisan Mitra resource persons' },
    { num: '2', title: 'Custom IT system entry', body: 'Findings entered into a separate civil-society-built IT system (built by July 2025). Records next steps, current pending level, follow-up medium.', actor: 'Civil society review team' },
    { num: '3', title: 'Desk-based lifecycle review', body: 'A 5–7 member civil society desk team examines the entire lifecycle: grievance → GRO enquiry → Mandal Prajavani remarks → ATR → field verification. Assigns one of 11 status categories.', actor: 'Civil society desk team' },
    { num: '4', title: 'Outcome', body: 'Status assigned: Resolved, Sent to Next Level, Marked for Collector Appeal, Policy Decision Awaited, or Other. Feeds the report\'s analytical framework.', actor: 'Review framework' },
  ];

  // 11 review-status categories, grouped by the 5-category framework presented in the report
  const statusCategories = [
    { group: 'Positively Disposed', color: C.teal, items: [
      { name: 'Disposed (Resolved)',              note: 'The citizen is now receiving the entitlement / benefit.' },
      { name: 'Disposed (Ineligible)',            note: 'The citizen does not meet the eligibility criteria of the scheme.' },
      { name: 'Disposed (Civil Dispute)',         note: 'The grievance is a subject-matter of a civil dispute, or can be dealt with only through a civil dispute.' },
      { name: 'Pending (citizen action / info awaited)', note: 'The citizen is yet to obtain and / or submit necessary documentation for redressal.' },
    ]},
    { group: 'Sent to Next Level', color: '#5a7ec4', items: [
      { name: 'Disposed (Sent to District level)', note: 'The GRO has processed the grievance and sent it to the District-level Officer for further action.' },
      { name: 'Disposed (Sent to State level)',    note: 'The GRO has processed the grievance and sent it to the State-level Officer for further action.' },
    ]},
    { group: 'Appeal', color: C.amber, items: [
      { name: 'Collector Appeal', note: 'No ATR filed beyond the 30-day limit, or ATR filed in non-compliance with the SoP or wrongly for other reasons.' },
    ]},
    { group: 'Policy Decision Awaited', color: '#c45a3a', items: [
      { name: 'Disposed (Policy Decision)', note: 'The elected government is yet to make a policy decision on the scheme or service.' },
    ]},
    { group: 'Others', color: C.textLight, items: [
      { name: 'Disposed (burden shifted on citizen)', note: 'The GRO wrongly places the burden of the grievance redress process on the citizen, in non-compliance with the SoP.' },
      { name: 'Pending (at mandal level)', note: 'The citizen has submitted the necessary documentation as requested by the GRO and action is yet to be taken by the GRO.' },
      { name: 'Wrong Category / Grievance', note: 'The grievance was filed wrongly.' },
    ]},
  ];

  const teamRoles = [
    { org: 'SSAAT', full: 'Society for Social Audit, Accountability and Transparency — a Telangana Government social audit unit', role: 'Lead field verification — every closed grievance', focus: ['Field-verify ATR claims', 'Maintain master review dataset', 'Flag wrong-ATR cases for Collector Appeal', 'Identify ATR template misuse (e.g. mechanical succession remarks for non-succession grievances)'], color: C.teal },
    { org: 'Kisan Mitra', full: 'Civil society organisation focused on agricultural livelihoods', role: 'Citizen mobilisation + agricultural grievance follow-up', focus: ['Mobilise complainants — especially women, elders, tribal communities', 'Follow up on pension, MGNREGA, Crop Loan Waiver, PM Kisan cases', 'Conduct phone-based and panchayat-level follow-up'], color: C.amber },
    { org: 'Civil society volunteers', full: 'Over 60 volunteers from across the country — including law and policy students', role: 'Pilot rollout, ongoing support, and desk review', focus: ['CCD, CPF, DEF, RSV, MKSS, Dalit Bahujan Front, SAFA, SAFAR', 'Specialised support — IFR cases (CPF), MGNREGA (MKSS)', 'Joined for Feb 2025 hearings; ongoing rotational support', 'Students assist the 5–7 member desk team in reviewing every grievance\'s lifecycle and assigning one of the 11 status categories'], color: '#5a7ec4' },
  ];

  const followUpStat = { num: '5,900', label: 'Grievances followed up by SSAAT + civil society (as of 18 April 2026)' };

  return (
    <section id="followup" data-screen-label="09 Follow-up" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Verification & Follow-up', 'సత్యాపన & ఫాలో-అప్')}</div>
        <h2 style={SS.sectionTitle}>{t('The mechanism for follow-up', 'ఫాలో-అప్ యంత్రాంగం')}</h2>
        <p style={SS.sectionLead}>
          {t('A distinct feature of the Adilabad Decentralized Prajavani Pilot has been the systematic field follow-ups with citizens and officers conducted by SSAAT resource persons, Kisan Mitra, and civil society volunteers. The follow-ups are conducted via field visits and phone calls. The Pilot has intentionally moved away from the conventional binary reporting framework of “Disposed” versus “Pending” commonly found in official dashboards. While conventional systems measure success through “resolution rates”, the Pilot\'s approach focuses on a more granular understanding of these outcomes.', 'ఆదిలాబాద్ వికేంద్రీకృత ప్రజావాణి పైలట్ యొక్క ప్రత్యేక లక్షణం — SSAAT వనరుల వ్యక్తులు, కిసాన్ మిత్ర, మరియు పౌర సమాజ వాలంటీర్లు క్షేత్ర పర్యటనలు మరియు ఫోన్ కాల్స్ ద్వారా నిర్వహించే ప్రజలతో క్షేత్ర ఫాలో-అప్లను నిర్వహించటం. అధికారిక డాష్‌బోర్డుల్లో సాధారణంగా కనబడే “పరిష్కరించబడింది / పెండింగ్” బైనరీ నమూనా నుండి పైలట్ ಉద్దేశపూర్వకంగా దూరంగా జరిగింది.')}
        </p>

        {/* Headline stat */}
        <div style={{ background: C.navy, borderRadius: 6, padding: '32px 40px', marginBottom: 36, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 56, fontWeight: 700, color: C.amberLight, lineHeight: 1 }}>{followUpStat.num}</div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{followUpStat.label}</div>
          </div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            {t('Field follow-ups were conducted both at the citizen\'s end — through field visits and phone calls — and at the officer\'s end. The findings were then assigned one of 11 review-status categories, grouped into the 5-category framework shown below.', 'క్షేత్ర ఫాలో-అప్లు క్షేత్ర సందర్శనలు మరియు ఫోన్ కాల్స్ ద్వారా పౌరుల వద్ద మరియు అధికారుల వద్ద జరిగాయి. ప్రజావాణి నివేదికలో ప్రజావాణి నివేదికలో ప్రదర్శించినట్టుగా 11 సమీక్షా స్థితులు ఎంపిక చేయబడ్డాయి, వాటిని 5 వర్గాల ఫ్రేమ్‌వర్క్‌లో చేర్చి చూపిస్తున్నారు.')}
          </div>
        </div>

        {/* 11-Status Categories Table */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.amber, marginBottom: 12 }}>{t('The 11 Status Categories', '11 స్థితి వర్గాలు')}</div>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{t('Categories used during desk review, grouped under the 5-category report framework', 'డెస్క్ సమీక్షలో ಉపయోగించిన వర్గాలు, నివేదికలో 5 వర్గాల ఫ్రేమ్‌వర్క్ క్రింద చేర్చబడ్డాయి')}</div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textLight, marginBottom: 20 }}>{t('Source: Adilabad Pilot Report, Table A.', 'మూలం: ఆదిలాబాద్ పైలట్ నివేదిక, పట్టిక A.')}</div>

          <div style={{ overflowX: 'auto', border: `1px solid ${C.border}`, borderRadius: 4 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Source Sans 3',sans-serif", fontSize: 13 }}>
              <thead>
                <tr style={{ background: C.navy }}>
                  <th style={{ padding: '12px 14px', textAlign: 'left', color: C.white, fontWeight: 600, minWidth: 180, width: '22%' }}>{t('Category in the report', 'నివేదికలో వర్గం')}</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left', color: C.white, fontWeight: 600, minWidth: 220, width: '28%' }}>{t('Review status (desk review)', 'సమీక్షా స్థితి')}</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left', color: C.white, fontWeight: 600, minWidth: 280 }}>{t('Explanation', 'వివరణ')}</th>
                </tr>
              </thead>
              <tbody>
                {statusCategories.flatMap((grp, gi) => grp.items.map((it, ii) => (
                  <tr key={`${gi}-${ii}`} style={{ background: (gi % 2 === 0) ? C.white : C.bg, borderTop: `1px solid ${C.border}` }}>
                    {ii === 0 && (
                      <td rowSpan={grp.items.length} style={{ padding: '14px 16px', verticalAlign: 'top', borderRight: `1px solid ${C.border}`, borderLeft: `4px solid ${grp.color}`, background: C.white }}>
                        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: C.navy }}>{grp.group}</div>
                        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: grp.color, marginTop: 6 }}>{grp.items.length} {grp.items.length === 1 ? 'status' : 'statuses'}</div>
                      </td>
                    )}
                    <td style={{ padding: '11px 14px', color: C.navy, fontWeight: 600, verticalAlign: 'top' }}>{it.name}</td>
                    <td style={{ padding: '11px 14px', color: C.textMid, lineHeight: 1.6, verticalAlign: 'top' }}>{it.note}</td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: `2px solid ${C.border}`, marginBottom: 32 }}>
          {[
            { id: 'process', label: 'The Process' },
            { id: 'team', label: 'Who Does It' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: '10px 22px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 14,
              fontWeight: tab===t.id?700:500, color: tab===t.id?C.navy:C.textLight,
              background: 'none', border: 'none', borderBottom: `2px solid ${tab===t.id?C.amber:'transparent'}`,
              marginBottom: -2, cursor: 'pointer'
            }}>{t.label}</button>
          ))}
        </div>

        <TabPanel id="process" label={t('The Process', 'ప్రక్రియ')} active={tab === 'process'} printMode={printMode}>
          <div>
            <div style={{ marginBottom: 28 }}>
              <FollowupFlow />
            </div>
            <div style={{ marginBottom: 14, fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, color: C.navy, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t('Detailed process steps', 'వివరణాత్మక ప్రక్రియ దశలు')}</div>
            {processSteps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 18, marginBottom: 14, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 4, padding: '18px 22px' }}>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 26, fontWeight: 700, color: C.amber, flexShrink: 0, width: 32, lineHeight: 1.1 }}>{s.num}</div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                    <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 16, fontWeight: 700, color: C.navy }}>{s.title}</div>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.teal, background: `${C.teal}15`, padding: '2px 8px', borderRadius: 2, fontWeight: 600 }}>{s.actor}</div>
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.6 }}>{s.body}</div>
                </div>
              </div>
            ))}
            <div style={{ background: C.navy, borderRadius: 6, padding: '28px 36px', marginTop: 24 }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 16, color: C.white, marginBottom: 10 }}>Pendor Vinod Kumar, Kisan Mitra Helpline, Adilabad</div>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontStyle: 'italic' }}>
                "Many citizens know their issues, but the concerned officers often do not take timely action. Officers ask citizens to wait for one or two days. When the citizen returns, they are told that the officer is not available or is busy, and they are asked to come again the following week. Such incidents happen frequently, especially in rural areas. Due to these continuous delays and lack of proper guidance, we are working to support citizens at the grassroots level — through proper follow-up and coordination with the concerned departments."
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel id="team" label={t('Who Does It', 'ఎవరు చేస్తారు')} active={tab === 'team'} printMode={printMode}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {teamRoles.map((t, i) => (
              <div key={i} style={{ background: C.bg, border: `1px solid ${C.border}`, borderTop: `4px solid ${t.color}`, borderRadius: 4, padding: '22px 26px' }}>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: C.navy }}>{t.org}</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight, marginTop: 3, marginBottom: 10 }}>{t.full}</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, background: `${t.color}18`, color: t.color, padding: '3px 8px', borderRadius: 2, display: 'inline-block', marginBottom: 14 }}>{t.role}</div>
                <ul style={{ paddingLeft: 16, margin: 0 }}>
                  {t.focus.map((f, j) => (
                    <li key={j} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6, marginBottom: 5 }}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TabPanel>
      </div>
    </section>
  );
}

Object.assign(window, { HowItWorks, DigitalTechnology, FollowUpMechanism });
