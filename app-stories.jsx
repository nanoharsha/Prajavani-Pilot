// ════════════════════════════════════════════════════════════════════════════
// SECTION 9: CASE STORIES — from the Adilabad Pilot report
// ════════════════════════════════════════════════════════════════════════════

function CaseStories() {
  useLang();
  const printMode = usePrintMode();
  const [active, setActive] = React.useState(0);

  const cases = [
    {
      id: 'DGADIL27012500003', name: 'Gedam Dhavu', dept: 'Revenue', mandal: 'Jainath', status: 'resolved',
      photo: 'Photo: Gedam Dhavu with his patta, Koora village, Jainath',
      issue: 'Land owned by his late father (3.10 ac. guntas in Koora village) had been incorrectly classified as ceiling surplus and added to the Prohibited Occupation List (POB) since 2021. The classification prevented both mutation in Dhavu\'s name and any processing through Dharani. Despite repeated visits to revenue offices, officials said no option was available.',
      intervention: 'Registered as one of the first grievances under the Pilot on 27 January 2025 — the day of launch. RDO advised TM33 module via MeeSeva; application stalled for 5 months. June 2025: Kisan Mitra team took Dhavu to Collector Prajavani; Collector identified that TM15 (land nature correction) was the correct form, not TM33. Filed at Jainath MRO via Bhu Bharathi. 12 September 2025: matter taken up as Collector Appeal. Collector directed Tahsildar to resolve within 15 days.',
      outcome: 'On 8 April 2026 — 5 years after the original classification error — Dhavu received the patta in his name.',
      quote: 'For five years no option was available within the system. The Pilot finally gave me a way.',
      lesson: 'Demonstrates the value of proactive village outreach (the grievance was filed on Day 1 because volunteers came to Koora) combined with sustained follow-up and the Collector Appeal mechanism.',
    },
    {
      id: 'ADB2025JNTH00001', name: 'Menthula Laxmi', dept: 'Food & Civil Supplies', mandal: 'Jainath', status: 'resolved',
      photo: 'Photo: Menthula Laxmi at Jainath IFC — first grievance filed at this centre',
      issue: 'Family ration card showed one fewer person than reality. Daughter Menthula Pravanthi had been deleted from the card for reasons unknown to the family. Family was receiving rice for one less person.',
      intervention: 'First grievance filed at newly established Jainath IFC on 28 January 2025. GRO investigation showed the online application was pending at the RI (Revenue Inspector) login — but the RI login was not even visible in the ePDS portal at that time. The GRO admitted this in writing in the ATR.',
      outcome: 'GRO initiated action proactively to overcome the technical issue. Menthula Pravanthi was added back to the family ration card. Family now receives full food security entitlement.',
      lesson: 'An ATR can carry value precisely because it admits a system fault in writing. The written admission "RI login not visible in ePDS portal" became the basis for proactive corrective action — without it, the family would have continued losing rice.',
    },
    {
      id: 'ADB2025TLMG00224', name: 'Serla Bhumakka', dept: 'Energy', mandal: 'Talamadugu', status: 'resolved',
      photo: 'Photo: Serla Bhumakka at Talamadugu Public Hearing — Aadhaar/USC matching desk',
      issue: 'Not receiving Gruhajyothi (free electricity) benefit despite applying. Aadhaar, ration card, and USC Number not matched with each other.',
      intervention: 'Grievance filed 6 February 2025. Public hearing on 7 February — Energy Department officials and MPDO staff present. Issue identified on the spot: data mismatch. Officials performed the matching during the hearing itself.',
      outcome: 'ATR (in Telugu): "Your Aadhaar card, ration card, USC NO. 12578661 has been matched on the public administration website. Therefore, we inform you that you are eligible for the Gruha Jyoti scheme." Bhumakka is now receiving the benefit without hassle.',
      lesson: 'One of many Gruhajyothi and Gas Subsidy cases resolved during the hearing itself. Demonstrates the value of bringing portal access + officer authority into the same room as the citizen — the kind of intervention only a public hearing makes possible.',
    },
    {
      id: 'ADB2025GDNR00675', name: 'Rathod Vijay Kumar (Guruj village)', dept: 'Rural Water Supply', mandal: 'Gudihathnur', status: 'resolved',
      photo: 'Photo: RO water plant installed at Guruj village, Gudihathnur',
      issue: 'Residents of Guruj village had been drinking contaminated water for an extended period. At least 10 villagers undergoing kidney dialysis, directly linked to the water source. Repeated appeals to local officials by community representative Rathod Vijay Kumar had led nowhere.',
      intervention: 'SSAAT Resource Person visited the village; Vijay Kumar submitted a detailed grievance documenting both the contamination and the health damage. At the public hearing, water testing was ordered and conducted on-site. GRO filed an ATR reporting no health hazards — but the community escalated to the Collector via SSAAT.',
      outcome: 'Collector, recognising the health emergency, sanctioned funds for an RO (Reverse Osmosis) water purification plant. Plant is now operational. Sustainable supply of safe drinking water restored to the village.',
      lesson: 'Shows the importance of community escalation when an ATR is at odds with lived reality, and the importance of the Collector\'s role.',
    },
    {
      id: 'Pension-2019', name: 'Madavi Ganith Kumar', dept: 'Pensions', mandal: 'Narnoor', status: 'resolved',
      photo: 'Photo: Madavi Ganith Kumar with his father Badi Rao, Malkuguda village',
      issue: 'First applied for disability pension on 11 May 2019 — more than 6 years before lodging a Pilot grievance. The official portal showed pension approved at all administrative levels including District Collector in 2019, but was later marked ineligible. No remarks on the portal explained why. Pension ID generated and continued to exist. Disability certificate renewed three times. Pension never reached him.',
      intervention: 'In Narnoor public hearing, GRO assured pension would be restored. Presiding Officer noted it as a "state level issue" in writing on the public hearing receipt. SSAAT used this written receipt as authentication of eligibility, followed up consistently at all levels of administration.',
      outcome: 'Pension approved. Ganith Kumar now receives regular disability pension payments after 6 years of struggle.',
      lesson: 'The Public Hearing receipt — bearing the Presiding Officer\'s signature — became a portable form of administrative authentication that SSAAT carried through till the state-level follow-up. The written receipt itself was the breakthrough.',
    },
    {
      id: 'ADB2025UTNR00563', name: 'Gurijala Rajeshwar', dept: 'Panchayat Raj & RD', mandal: 'Utnoor', status: 'partial',
      photo: 'Photo: MGNREGA worksite, Utnoor — name addition cases',
      issue: 'Requested addition of his name and his wife G Lavanya\'s name to his mother\'s existing MGNREGA Job Card. Filed 4 May 2025. ATR filed 16 May 2025 stated the applicant did not have a Job Card and that new issuances were suspended per instructions from Commissioner of Rural Development, Telangana.',
      intervention: 'ATR was factually wrong on two counts. First, the Pilot was about name addition to an existing card — not new card issuance. Second, even if new card issuance was on hold, this was a statutory violation: Section 5 read with Schedule II, Paragraph 2 of MGNREGA Act mandates issuance within 15 days. SSAAT verification confirmed the existing Job Card existed; the ATR was inaccurate. Case marked for Collector Appeal.',
      outcome: 'Grievance ultimately resolved following intervention and follow-up by SSAAT Resource Person in Utnoor Mandal — but only because of civil society pressure.',
      lesson: 'One of 221 MGNREGA grievances marked for appeal — 128 specifically under the "adding name to Jobcard" sub-category. ATRs cited a state-level hold even when the grievance did not pertain to that. Without auto-escalation in the system, every such case requires manual civil society push or be unresolved.',
    },
    {
      id: 'ADB2025TLMG00411', name: 'Nalla Ram Reddy', dept: 'Agriculture', mandal: 'Talamadugu', status: 'pending-policy',
      photo: 'Photo: Talamadugu mandal — Crop Loan Waiver beneficiary verification camp',
      issue: 'Outstanding loan amount only ₹1 lakh (well within the ₹2 lakh waiver cap). Was not in the Government\'s notified list of beneficiaries. Did not receive the waiver despite being eligible. Filed grievance 24 February 2025 through Kisan Mitra resource persons.',
      intervention: 'GRO acted promptly — filed ATR stating a letter had been sent to Lead District Manager for inclusion of his name. Systematic follow-up by Kisan Mitra with the District Agricultural Officer, District Collector, and Director of Agriculture revealed a pattern: across the State, Bank of Maharashtra had submitted erroneous data of farmers with outstanding loan amounts to the government.',
      outcome: 'Issue repeatedly raised at the state level by Kisan Mitra and Rythu Swarajya Vedika. With the closure of the benefit disbursement window, the case currently awaits redressal at policy level. Ram Reddy has not received the waiver.',
      lesson: 'Demonstrates how grievances expose systemic policy failures that no individual GRO can fix. The Pilot framework correctly classified this as "Policy Decision Awaited" — but the policy decision hasn\'t come. Many eligible farmer-families are in the same position because of one bank\'s data submission error.',
    },
    {
      id: 'IFR-Heerapur', name: 'K Parasuram', dept: 'Tribal Welfare', mandal: 'Utnoor', status: 'unresolved',
      photo: 'Photo: Forest land cultivated by K Parasuram, Heerapur-j village',
      issue: 'Cultivating 4 acres in Heerapur-j village for years; land yet to be surveyed; forest rights not recognised. The Pilot\'s sub-category list did not include "non-issuance of new RoFR Patta" or "forest survey not conducted" — so Parasuram filed under "Land Succession Issue" on 19 February 2025, the closest available option, hoping any Prajavani entry might yield action.',
      intervention: 'GRO\'s ATR remarks: "A letter addressed to the Tahasildar concerned for calling Succession proposal of the individual for taking further necessary action in this matter." A copy of the letter was not uploaded. Even a simple reading of the grievance gist would show it was not about succession.',
      outcome: '12 other IFR grievances received the identical succession-related ATR template. Direct follow-up calls with complainants confirmed: their actual grievances had nothing to do with succession. Pilot software only allows one final ATR — once filed, no follow-up. Discussed with PO-ITDA on 8 December 2025; assurance given that ATRs shall not be filed without application of mind.',
      lesson: 'Mechanical disposal pattern — a template response applied without reading the grievance. The Pilot software\'s "one ATR" rule then closes the case. Demonstrates both a software architecture issue (more flexibility for multi-step grievances needed) and a training issue (GROs shall apply mind and substantively resolve a grievance).',
    },
  ];

  const c = cases[active];
  const statusColor = { resolved: C.teal, partial: C.amber, unresolved: C.red, 'pending-policy': '#c45a3a' };
  const statusLabel = { resolved: '✓ Resolved', partial: '◑ Partially resolved (with effort)', unresolved: '○ Unresolved — system failure', 'pending-policy': '⏸ Pending state policy decision' };

  return (
    <section id="cases" data-screen-label="12 Cases" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Voices & Stories', 'గొంతులు & కథలు')}</div>
        <h2 style={SS.sectionTitle}>{t('Case stories from Adilabad', 'ఆదిలాబాద్ నుండి కేసు కథలు')}</h2>
        <p style={SS.sectionLead}>
          {t('Real cases from the Pilot — both successes and the failures the system has not yet been able to address. Drawn from Section 6 of the Pilot report.', 'పైలట్ నుండి నిజమైన కేసులు — విజయాలు మరియు వ్యవస్థ ఇన్నికీ పరిష్కరించలేని వైఫల్యాలు రెండు. పైలట్ నివేదికలోని సెక్షన్ 6 నుండి తీసుకోబడింది.')}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }} className={printMode ? 'print-hide' : ''}>
          {cases.map((cs, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '10px 16px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 12,
              fontWeight: active===i?700:500, color: active===i?C.white:C.textMid,
              background: active===i?C.navy:C.white, border: `1px solid ${active===i?C.navy:C.border}`, borderRadius: 3, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8, textAlign: 'left'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: statusColor[cs.status], display: 'inline-block', flexShrink: 0 }} />
              <span>{cs.name}</span>
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 28 }} className={printMode ? 'print-hide' : ''}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <PhotoPlaceholder label={c.photo} aspect="4/3" />
            <div style={{ ...SS.card, background: C.white }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, background: `${C.navy}10`, color: C.navy, padding: '2px 7px', borderRadius: 2 }}>{c.id}</span>
                <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, background: `${C.teal}15`, color: C.teal, padding: '2px 7px', borderRadius: 2 }}>{c.dept}</span>
                <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, background: `${C.amber}15`, color: C.amber, padding: '2px 7px', borderRadius: 2 }}>{c.mandal}</span>
              </div>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 4 }}>{c.name}</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, padding: '4px 8px', borderRadius: 2, background: `${statusColor[c.status]}15`, color: statusColor[c.status], display: 'inline-block' }}>{statusLabel[c.status]}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ ...SS.card, background: C.white }}>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.textLight, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 5 }}>The issue</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7 }}>{c.issue}</div>
            </div>
            <div style={{ ...SS.card, background: C.white }}>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.textLight, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 5 }}>Intervention through the Pilot</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7 }}>{c.intervention}</div>
            </div>
            <div style={{ ...SS.card, background: `${statusColor[c.status]}0a`, border: `1px solid ${statusColor[c.status]}40` }}>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: statusColor[c.status], letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 5 }}>Outcome</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7 }}>{c.outcome}</div>
            </div>
            {c.quote && (
              <div style={{ background: C.navy, borderRadius: 4, padding: '22px 26px' }}>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 30, color: C.amberLight, lineHeight: 1, marginBottom: 6 }}>"</div>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, color: C.white, lineHeight: 1.6, fontStyle: 'italic' }}>{c.quote}</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 10 }}>— {c.name}, {c.mandal} mandal</div>
              </div>
            )}
            <div style={{ ...SS.card, background: C.bgAlt, borderLeft: `3px solid ${C.amber}` }}>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.amber, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 5 }}>What this case shows</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7 }}>{c.lesson}</div>
            </div>
          </div>
        </div>

        {/* Print-only stack: all 8 cases fully unpacked */}
        {printMode && (
          <div className="print-stack">
            {cases.map((cs, i) => (
              <div key={i} className="print-case-item" style={{ background: C.white, border: `1px solid ${C.border}`, borderLeft: `4px solid ${statusColor[cs.status]}`, borderRadius: 4, padding: '22px 26px', marginBottom: 18 }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                  <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, background: `${C.navy}10`, color: C.navy, padding: '2px 7px', borderRadius: 2 }}>{cs.id}</span>
                  <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, background: `${C.teal}15`, color: C.teal, padding: '2px 7px', borderRadius: 2 }}>{cs.dept}</span>
                  <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, background: `${C.amber}15`, color: C.amber, padding: '2px 7px', borderRadius: 2 }}>{cs.mandal}</span>
                  <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, background: `${statusColor[cs.status]}15`, color: statusColor[cs.status], padding: '2px 7px', borderRadius: 2 }}>{statusLabel[cs.status]}</span>
                </div>
                <h4 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 10 }}>{cs.name}</h4>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: C.textLight, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>The issue</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.65 }}>{cs.issue}</div>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: C.textLight, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>Intervention</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.65 }}>{cs.intervention}</div>
                </div>
                <div style={{ marginBottom: 10, padding: '10px 14px', background: `${statusColor[cs.status]}0a`, borderRadius: 3 }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: statusColor[cs.status], letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>Outcome</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.65 }}>{cs.outcome}</div>
                </div>
                {cs.quote && (
                  <div style={{ background: C.navy, borderRadius: 3, padding: '14px 18px', marginBottom: 10 }}>
                    <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, color: C.white, lineHeight: 1.6, fontStyle: 'italic' }}>“{cs.quote}”</div>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>— {cs.name}, {cs.mandal} mandal</div>
                  </div>
                )}
                <div style={{ background: C.bgAlt, borderLeft: `3px solid ${C.amber}`, padding: '10px 14px', borderRadius: 3 }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: C.amber, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>What this case shows</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.65 }}>{cs.lesson}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SECTION 10: WAY FORWARD — anchored on the 30 April 2026 Government Order
// ════════════════════════════════════════════════════════════════════════════

function WayForward() {
  useLang();
  const printMode = usePrintMode();
  const [openIdx, setOpenIdx] = React.useState(0);

  // ─── GO Highlights ───────────────────────────────────────────────
  const goFeatures = [
    { label: { en: 'Decentralisation', te: 'వికేంద్రీకరణ' }, body: { en: 'Extends Prajavani to Revenue Division level with immediate effect, and to Mandal level in phased manner', te: 'ప్రజావాణిని తక్షణం రెవెన్యూ డివిజన్ స్థాయికి, దశలవారీగా మండల స్థాయికి విస్తరిస్తుంది' } },
    { label: { en: 'Mandatory digitisation', te: 'తప్పనిసరి డిజిటలీకరణ' }, body: { en: 'All grievances received at all levels must be registered on the Prajavani Portal', te: 'అన్ని స్థాయులలో అందుకున్న అన్ని ఫిర్యాదులు ప్రజావాణి పోర్టల్‌లో నమోదు చేయాలి' } },
    { label: { en: 'Dated receipts', te: 'తేదీగల రసీదులు' }, body: { en: 'Provision of dated receipts with unique reference IDs for online tracking', te: 'ఆన్‌లైన్ ట్రాకింగ్ కోసం ప్రత్యేక రెఫరెన్స్ ఐడీలతో తేదీగల రసీదులు' } },
    { label: { en: '30-day ATR timeline', te: '30 రోజుల ATR గడువు' }, body: { en: '30-day timeline for filing ATRs across all levels', te: 'అన్ని స్థాయులలో ATR దాఖలుకు 30 రోజుల గడువు' } },
    { label: { en: 'Auto-escalation', te: 'స్వయంచాలక ఎస్కలేషన్' }, body: { en: 'Automatic escalation to next higher authority for non-adherence to the ATR timeline', te: 'ATR గడువు పాటించకపోతే తదుపరి ఉన్నతాధికారికి స్వయంచాలకంగా ఎస్కలేషన్' } },
    { label: { en: 'Right to track', te: 'ట్రాక్ చేసే హక్కు' }, body: { en: 'Citizens can track grievance status, download ATRs, and participate in proceedings', te: 'పౌరులు ఫిర్యాదు స్థితిని ట్రాక్ చేయవచ్చు, ATRలు డౌన్‌లోడ్ చేయవచ్చు' } },
    { label: { en: 'Department SOPs', te: 'శాఖల SOPలు' }, body: { en: 'All departments to develop and publicly disclose Standard Operating Procedures', te: 'అన్ని శాఖలు ప్రామాణిక ఆపరేటింగ్ ప్రొసీజర్‌లను రూపొందించి బహిరంగంగా వెల్లడించాలి' } },
  ];

  const goGaps = [
    { en: 'No provision for citizens to file grievances online by themselves — pending Clause 4 guidelines', te: 'పౌరులు స్వయంగా ఆన్‌లైన్‌లో ఫిర్యాదులు దాఖలు చేయడానికి నిబంధన లేదు — క్లాజ్ 4 మార్గదర్శకాలు పెండింగ్' },
    { en: 'Multi-tier appeals — pending Clause 4 guidelines', te: 'బహుళ-స్థాయి అప్పీళ్లు — క్లాజ్ 4 మార్గదర్శకాలు పెండింగ్' },
    { en: 'Capacity building for officers — provided in Clause 4 but pending guidelines', te: 'అధికారులకు సామర్థ్య నిర్మాణం — క్లాజ్ 4లో ఉంది కానీ మార్గదర్శకాలు పెండింగ్' },
    { en: 'Monitoring and review at all levels — pending Clause 4 guidelines', te: 'అన్ని స్థాయులలో పర్యవేక్షణ — క్లాజ్ 4 మార్గదర్శకాలు పెండింగ్' },
    { en: 'Constitution of grievance monitoring committees — pending Clause 4 guidelines', te: 'ఫిర్యాదు పర్యవేక్షణ కమిటీల ఏర్పాటు — క్లాజ్ 4 మార్గదర్శకాలు పెండింగ్' },
    { en: 'Engagement of SSAAT and SHGs as institutional partners — pending Clause 4 guidelines', te: 'SSAAT మరియు SHGల సంస్థాగత భాగస్వామ్యం — క్లాజ్ 4 మార్గదర్శకాలు పెండింగ్' },
  ];

  // ─── Strategic priorities (expandable, full text from Way Forward draft) ───
  const priorities = [
    {
      num: '01', priority: 'Critical',
      title: { en: 'Right to a Hearing — and the Right to Written Remarks', te: 'విచారణ హక్కు — మరియు వ్రాతపూర్వక వ్యాఖ్యల హక్కు' },
      lead: { en: 'Citizens must engage directly with the GRO in their own language. But a hearing is incomplete without written remarks in hand — currently, citizens often leave Prajavanis with nothing concrete.', te: 'పౌరులు తమ స్వంత భాషలో GROతో నేరుగా మాట్లాడగలగాలి. కానీ చేతిలో వ్రాతపూర్వక వ్యాఖ్య లేని విచారణ అసంపూర్ణం — ప్రస్తుతం, పౌరులు తరచుగా ప్రజావాణుల నుండి ఏ స్పష్టమైన దానితో వెళ్లరు.' },
      paragraphs: [
        { en: 'It is vital that citizens can engage directly with the relevant Grievance Redressal Officer (GRO) to present their cases in their own language and provide specific contextual information. Without this opportunity, any redress system risks becoming superficial, with broad disposal data masking the actual quality of individual outcomes. During the Pilot, the high public participation in Mandal-level hearings — where citizens waited patiently to be heard — demonstrated that these sessions can be conducted successfully and meaningfully at scale.', te: 'పౌరులు తమ స్వంత భాషలో సంబంధిత GROతో నేరుగా మాట్లాడి, నిర్దిష్ట సందర్భోచిత సమాచారం అందించడం చాలా ముఖ్యం. ఈ అవకాశం లేకుండా, ఏ పరిష్కార వ్యవస్థ అయినా ఉపరితలంగా మారే ప్రమాదం ఉంది — విస్తృత పరిష్కార డేటా వ్యక్తిగత ఫలితాల వాస్తవ నాణ్యతను కప్పిపెడుతుంది. పైలట్‌లో, మండల-స్థాయి విచారణలలో అధిక ప్రజల భాగస్వామ్యం — పౌరులు ఓపికగా వినిపించుకోవడానికి వేచిచూసిన చోట — ఈ సెషన్‌లు పెద్ద ఎత్తున విజయవంతంగా, అర్థవంతంగా నిర్వహించబడతాయని నిరూపించింది.' },
        { en: 'However, the right to a hearing is incomplete without a parallel right to written remarks. At Prajavanis conducted at the Division, District and State levels today, citizen grievances are collected and considerable effort is put in by Presiding Officers and Department-specific officers — but in most cases, remarks are either written on the citizen\'s own document, or at best scanned and uploaded later. The citizen leaves the Prajavani with nothing concrete in hand.', te: 'అయితే, విచారణ హక్కు సమాంతర వ్రాతపూర్వక వ్యాఖ్యల హక్కు లేకుండా అసంపూర్ణం. నేడు డివిజన్, జిల్లా, రాష్ట్ర స్థాయులలో నిర్వహించే ప్రజావాణులలో, పౌరుల ఫిర్యాదులు సేకరించబడతాయి, ప్రెసైడింగ్ ఆఫీసర్లు మరియు శాఖల అధికారులు గణనీయమైన శ్రమ పెట్టారు — కానీ చాలా సందర్భాలలో, వ్యాఖ్యలు పౌరుని స్వంత పత్రంపై వ్రాయబడతాయి లేదా తరువాత స్కాన్ చేయబడతాయి. పౌరుడు ప్రజావాణి నుండి ఏ స్పష్టమైనది లేకుండా వెళతారు.' },
        { en: 'This is a critical issue Telangana must address: given the substantial administrative effort being put into running Prajavanis at all levels, if there is no accountability for what is discussed and committed by officers, then this process is no different from one where grievances are simply collected by data entry operators. The Pilot has shown that a Prajavani system can be a powerful differentiator on accountability and trust — but only if the system\'s base architecture captures not just the final ATR filed online, but also the remarks shared by officers during the hearing itself.', te: 'ఇది తెలంగాణ తప్పక పరిష్కరించాల్సిన కీలక సమస్య: అన్ని స్థాయులలో ప్రజావాణులు నడుపుతున్న గణనీయమైన పరిపాలనా శ్రమను దృష్టిలో ఉంచుకుని, అధికారులు చర్చించిన మరియు హామీ ఇచ్చిన దానికి జవాబుదారీతనం లేకపోతే, ఈ ప్రక్రియ డేటా ఎంట్రీ ఆపరేటర్‌లు ఫిర్యాదులను సేకరించడం కంటే భిన్నం కాదు.' },
        { en: 'The Pilot\'s experience points strongly toward anchoring qualitative hearings at the Mandal level. At Mandal Prajavani, the smaller scale, the proximity of all relevant frontline officers, and the dedicated weekly slot together create the conditions for unhurried hearings, considered remarks, and same-day entry of those remarks into the portal through the IFC. The State system should be designed around the Mandal as the primary site for qualitative hearings, with higher levels reserved for escalation, appeal and policy coordination.', te: 'పైలట్ అనుభవం గుణాత్మక విచారణలను మండల స్థాయిలో ఎంకర్ చేయాలని బలంగా సూచిస్తుంది. మండల ప్రజావాణిలో, చిన్న పరిమాణం, అన్ని ముందువరుస అధికారుల సమీపత, మరియు అంకిత వారపు స్లాట్ — ఇవి కలిసి తొందర లేని విచారణలు, పరిగణించిన వ్యాఖ్యలు, మరియు అదే రోజు పోర్టల్‌లో నమోదు కోసం పరిస్థితులు సృష్టిస్తాయి.' },
        { en: 'For certain categories — particularly Revenue matters — it is difficult for officers to commit conclusively when seeing a case for the first time. The reasonable expectation is: where the officer has clarity, record the remark in writing on the spot; for the rest, record a written commitment to conduct an enquiry within a stated timeframe. When officers gave written commitments during the Pilot, citizens returned home with specific information in writing while awaiting the final ATR — this practice must be hard-wired into the system.', te: 'కొన్ని వర్గాల — ముఖ్యంగా రెవెన్యూ విషయాలలో — అధికారులు మొదటిసారి కేసు చూస్తున్నప్పుడు నిర్ణయాత్మకంగా హామీ ఇవ్వడం కష్టం. సహేతుకమైన అంచనా: అధికారికి స్పష్టత ఉన్న చోట, వ్యాఖ్యను అదే చోట వ్రాతలో నమోదు చేయండి; మిగిలిన వాటికి, నిర్దిష్ట సమయవ్యవధిలో విచారణ నిర్వహించడానికి వ్రాతపూర్వక హామీ నమోదు చేయండి.' },
      ],
    },
    {
      num: '02', priority: 'Critical',
      title: { en: 'Proactive Access to Information', te: 'సమాచారం పొందే చురుకైన హక్కు' },
      lead: { en: 'A substantial share of grievances are in fact information requests. A proactive disclosure system — Praja Soochana — should sit alongside Prajavani so citizens know their entitlements before they need to complain.', te: 'గణనీయమైన భాగం ఫిర్యాదులు నిజానికి సమాచార అభ్యర్థనలే. ప్రజలు ఫిర్యాదు చేయకముందే తమ హక్కులు తెలుసుకునేలా చురుకైన బహిర్గత వ్యవస్థ — ప్రజా సూచన — ప్రజావాణి పక్కన ఉండాలి.' },
      paragraphs: [
        { en: 'The most significant hurdle for those seeking entitlements is a lack of clarity on application status, reasons for rejection, or specific requirements. Pilot evidence shows a substantial share of grievances are in fact requests for information, or are filed without full awareness of eligibility criteria. A proactive disclosure system must provide comprehensive details on government schemes — including eligibility rules, exclusion criteria, and real-time updates on benefit transfers.', te: 'హక్కులు పొందాలనుకునే వారికి అతిపెద్ద అడ్డంకి దరఖాస్తు స్థితి, తిరస్కరణ కారణాలు, లేదా నిర్దిష్ట అవసరాలపై స్పష్టత లేకపోవడం. పైలట్ సాక్ష్యం చూపిస్తుంది గణనీయమైన భాగం ఫిర్యాదులు నిజానికి సమాచారం కోసం, లేదా అర్హతా ప్రమాణాలపై పూర్తి అవగాహన లేకుండా దాఖలు చేయబడ్డాయి.' },
        { en: 'This need extends well beyond welfare schemes. For Revenue grievances — a substantial share at District and Division levels — simply checking application status on the Bhu Bharati portal and sharing it in writing is a major positive step. Real-time, verifiable status disclosure should be treated as a core feature of grievance handling.', te: 'ఈ అవసరం సంక్షేమ పథకాల కంటే ఎక్కువగా విస్తరించింది. రెవెన్యూ ఫిర్యాదుల — జిల్లా మరియు డివిజన్ స్థాయులలో గణనీయమైన భాగం — విషయంలో, భూ భారతి పోర్టల్‌లో దరఖాస్తు స్థితిని తనిఖీ చేసి వ్రాతలో పంచుకోవడం ప్రధాన సానుకూల అడుగు.' },
        { en: 'A coordinated effort is already underway: on 24 April 2025, the Special Chief Secretary, ITE&C, issued guidelines for the Praja Soochana Portal — a web-based platform that discloses transaction-based information about government services, entitlements and the functioning of public institutions, in real time and free of cost. Ten schemes across 8 Line Departments are in Phase 1. The State should prioritise expanding Praja Soochana in tandem with Prajavani, and ensure information is actively pushed to the grassroots through panchayats, SHGs, and SSAAT resource persons — not just made passively available online.', te: 'సమన్వయం చేసిన ప్రయత్నం ఇప్పటికే నడుస్తోంది: 24 ఏప్రిల్ 2025న, ప్రత్యేక ముఖ్య కార్యదర్శి, ITE&C, ప్రజా సూచన పోర్టల్ కోసం మార్గదర్శకాలు జారీ చేశారు — ఇది వాస్తవ సమయంలో మరియు ఉచితంగా ప్రభుత్వ సేవలు, హక్కులు, మరియు ప్రజా సంస్థల పనితీరు గురించి లావాదేవీ-ఆధారిత సమాచారాన్ని వెల్లడిస్తుంది. 8 లైన్ శాఖలలో పది పథకాలు మొదటి దశలో ఉన్నాయి.' },
      ],
    },
    {
      num: '03', priority: 'High',
      title: { en: 'Convenient Grievance Filing — IFCs at the village level', te: 'సౌకర్యవంతమైన ఫిర్యాదు దాఖలు — గ్రామ స్థాయిలో IFCలు' },
      lead: { en: 'Traveling to mandal headquarters is impractical for many. Two complementary moves are needed: village-level IFCs, and direct online filing by citizens themselves.', te: 'మండల ప్రధాన కార్యాలయానికి ప్రయాణించడం చాలామందికి అసాధ్యం. రెండు పరస్పర పూరక చర్యలు అవసరం: గ్రామ-స్థాయి IFCలు, మరియు పౌరులు స్వయంగా చేసే నేరుగా ఆన్‌లైన్ దాఖలు.' },
      paragraphs: [
        { en: 'Evidence from the Pilot has shown that travelling to Mandal or District headquarters is often impractical for the public. Efforts must focus on establishing Information Facilitation Centres (IFCs) that are accessible to local communities, alongside village-level mobilisation through existing networks.', te: 'పైలట్ నుండి సాక్ష్యం చూపిస్తుంది మండల లేదా జిల్లా ప్రధాన కార్యాలయాలకు ప్రయాణించడం తరచుగా ప్రజలకు అసాధ్యం. ప్రయత్నాలు స్థానిక సమాజాలకు అందుబాటులో ఉండే IFCలు ఏర్పాటు చేయడంపై దృష్టి పెట్టాలి.' },
        { en: 'Equally, the option for citizens to file grievances online directly must be built into the State system. The online filing form should incorporate category-specific dynamic fields — LPG Consumer Number for Gas Subsidy, Job Card Number for MGNREGA, PPB Number for Rythu Bima — that surface automatically when a citizen selects a category. This Pilot-tested feature dramatically improved the quality of grievances entering the system, reduced the need for officers to call citizens back for basic information, and shortened resolution timelines. The State system should adopt the same approach across all categories from the outset.', te: 'అదే విధంగా, పౌరులు నేరుగా ఆన్‌లైన్‌లో ఫిర్యాదులు దాఖలు చేసే అవకాశం రాష్ట్ర వ్యవస్థలో నిర్మించబడాలి. ఆన్‌లైన్ దాఖలు ఫారంలో వర్గం-నిర్దిష్ట డైనమిక్ ఫీల్డ్‌లు ఉండాలి — గ్యాస్ సబ్సిడీ కోసం LPG వినియోగదారుల నంబర్, NREGA కోసం జాబ్ కార్డ్ నంబర్ — పౌరుడు వర్గాన్ని ఎంచుకున్నప్పుడు అవి స్వయంచాలకంగా కనిపిస్తాయి. ఈ పైలట్-పరీక్షించిన ఫీచర్ వ్యవస్థలోకి ప్రవేశించే ఫిర్యాదుల నాణ్యతను నాటకీయంగా మెరుగుపరిచింది.' },
      ],
    },
    {
      num: '04', priority: 'High',
      title: { en: 'Standard Operating Procedures across all departments', te: 'అన్ని శాఖలలో ప్రామాణిక ఆపరేటింగ్ ప్రొసీజర్‌లు' },
      lead: { en: 'SOPs proved one of the Pilot\'s most valuable design choices — but they must be co-designed with citizens and civil society, not written by officers in silos.', te: 'SOPలు పైలట్ యొక్క అత్యంత విలువైన డిజైన్ ఎంపికలలో ఒకటిగా రుజువు అయ్యాయి — కానీ అవి సైలోలలో అధికారులు రాసేవి కాదు, పౌరులు మరియు పౌర సమాజంతో కలిసి రూపొందించబడాలి.' },
      paragraphs: [
        { en: 'The practice of SOPs with prescribed timelines turned out to be very helpful, given that many issues are pending policy decisions at the State level and beyond the control of Mandal and District officers. During the Pilot, GROs referred to SOPs regularly while dealing with grievances, rather than passing the burden back onto the citizen. All Line Departments must issue SOPs to guide GROs on how to respond to grievances pertaining to their departments.', te: 'SOPలతో నిర్దేశిత గడువులు చాలా సహాయకారిగా రుజువు అయ్యాయి — చాలా సమస్యలు రాష్ట్ర-స్థాయి విధాన నిర్ణయాలపై పెండింగ్‌లో ఉన్నాయి కాబట్టి. పైలట్‌లో, GROలు ఫిర్యాదులను నిర్వహించేటప్పుడు SOPలను క్రమం తప్పకుండా సూచించారు — భారాన్ని తిరిగి పౌరునిపై వేయకుండా.' },
        { en: 'Critically, SOPs should not be prepared by officers in silos. Categories and sub-categories should be finalised first, in dialogue with citizen collectives and civil society organisations who carry an understanding of people\'s issues and the standard administrative responses they typically receive. Every officer must be aware of the SOPs they are accountable for. During Prajavani proceedings, SOPs should be accessible to citizens in all relevant languages.', te: 'కీలకంగా, SOPలను అధికారులు సైలోలలో సిద్ధం చేయకూడదు. వర్గాలు మరియు ఉప-వర్గాలను ముందుగా ఖరారు చేయాలి, ప్రజల సమస్యలను అర్థం చేసుకునే పౌర సముదాయాలు మరియు పౌర సంస్థలతో సంభాషణలో. ప్రతి అధికారి తాము జవాబుదారీగా ఉండే SOPల గురించి తెలుసుకోవాలి. ప్రజావాణి కార్యకలాపాల సమయంలో, SOPలు అన్ని సంబంధిత భాషలలో పౌరులకు అందుబాటులో ఉండాలి.' },
        { en: 'A direct consequence of well-defined SOPs is that GRO assignment can — and should — be system-driven. Currently the burden of choosing which officer a grievance is marked to rests on the Data Entry Operator. Once SOPs are well worked out and category-to-officer mapping is clear, the system should auto-assign the designated GRO for every category. The Presiding Officer should retain authority to override and reassign where required, but the default onus of identifying a GRO should not rest on a DEO.', te: 'బాగా నిర్వచించిన SOPల ప్రత్యక్ష పర్యవసానం — GRO నియామకం వ్యవస్థ-నడిచేదిగా ఉండాలి. ప్రస్తుతం ఏ అధికారికి ఫిర్యాదు మార్క్ చేయాలో నిర్ణయించే భారం DEOపై ఉంది. SOPలు బాగా రూపొందించబడి, వర్గం-నుండి-అధికారి మ్యాపింగ్ స్పష్టంగా ఉన్నాక, వ్యవస్థ ప్రతి వర్గానికి నిర్దేశిత GROను స్వయంచాలకంగా కేటాయించాలి.' },
      ],
    },
    {
      num: '05', priority: 'High',
      title: { en: 'Facilitation and Mobilisation through village networks', te: 'గ్రామ నెట్‌వర్క్‌ల ద్వారా సహాయం మరియు సమీకరణ' },
      lead: { en: 'Many citizens don\'t recognise their issue as a grievance that can be redressed. Build state capacity through SHGs, SSAAT, PESA mobilisers and panchayat networks — and assign them clear roles.', te: 'చాలామంది పౌరులు తమ సమస్యను పరిష్కరించదగిన ఫిర్యాదుగా గుర్తించరు. SHGలు, SSAAT, PESA సమీకరణకారులు మరియు పంచాయితీ నెట్‌వర్క్‌ల ద్వారా రాష్ట్ర సామర్థ్యాన్ని నిర్మించండి — వారికి స్పష్టమైన పాత్రలను అప్పగించండి.' },
      paragraphs: [
        { en: 'Village-level grievance filing — carried out alongside the dissemination of information about schemes and entitlements — was a key feature of the Adilabad Pilot. Many citizens do not recognise their issue as a grievance that can be redressed; they often assume they are not eligible, or that the physical and administrative effort required is too great, and never enter the system at all.', te: 'గ్రామ-స్థాయి ఫిర్యాదు దాఖలు — పథకాలు మరియు హక్కుల గురించి సమాచార వ్యాప్తితో పాటు నిర్వహించబడింది — ఆదిలాబాద్ పైలట్ యొక్క కీలక ఫీచర్. చాలామంది పౌరులు తమ సమస్యను పరిష్కరించదగిన ఫిర్యాదుగా గుర్తించరు; వారు తరచుగా తాము అర్హులు కాదని భావిస్తారు.' },
        { en: 'Building state capacity and institutionalising filing support through existing village-level networks — SSAAT resource persons, VOAs, SHGs, PESA Mobilisers, SERP Cluster Coordinators and other community resource persons — is therefore essential. They must be assigned clear roles, including disseminating relevant information about government programmes, facilitating filing of grievances, and helping coordinate Mandal-level public hearings. Panchayat Sarpanches, Secretaries and Ward Members must also be brought on board wherever possible.', te: 'రాష్ట్ర సామర్థ్యాన్ని నిర్మించడం మరియు ఇప్పటికే ఉన్న గ్రామ-స్థాయి నెట్‌వర్క్‌ల ద్వారా దాఖలు మద్దతును సంస్థాగతం చేయడం అవసరం — SSAAT వనరుల వ్యక్తులు, VOAలు, SHGలు, PESA సమీకరణకారులు, SERP క్లస్టర్ సమన్వయకర్తలు మరియు ఇతర సముదాయ వనరుల వ్యక్తులు. వారికి స్పష్టమైన పాత్రలు అప్పగించాలి.' },
      ],
    },
    {
      num: '06', priority: 'Critical',
      title: { en: 'Citizen Feedback and Independent Verification', te: 'పౌర అభిప్రాయం మరియు స్వతంత్ర సత్యాపన' },
      lead: { en: 'Disposal is not resolution. Independent verification by SSAAT and civil society must be built in — and the GO\'s call-centre feedback channel must be implemented well.', te: 'పరిష్కారం అంటే తీర్పు కాదు. SSAAT మరియు పౌర సమాజం ద్వారా స్వతంత్ర సత్యాపన నిర్మించబడాలి — మరియు GO యొక్క కాల్-సెంటర్ అభిప్రాయ చానెల్ సరిగా అమలు చేయబడాలి.' },
      paragraphs: [
        { en: 'One of the key learnings from the Pilot has been the importance of the follow-up phase. The GO\'s provision for feedback via a Call Centre is a positive development and should be prioritised and implemented well. At the same time, independent verification — by organisations such as SSAAT, which are trained to conduct audits independently — must be built in.', te: 'పైలట్ నుండి కీలక అభ్యాసాలలో ఒకటి — ఫాలో-అప్ దశ యొక్క ప్రాముఖ్యత. కాల్ సెంటర్ ద్వారా అభిప్రాయానికి GO నిబంధన సానుకూల పరిణామం మరియు ప్రాధాన్యత ఇచ్చి బాగా అమలు చేయాలి. అదే సమయంలో, స్వతంత్ర సత్యాపన — SSAAT వంటి సంస్థల ద్వారా — తప్పక నిర్మించబడాలి.' },
        { en: 'Their role should extend to checking whether grievances have actually been resolved, whether citizens are satisfied, and where necessary, assisting citizens in filing appeals. Independent teams can also play a role during the Prajavani process itself, ensuring that citizens are heard well and the process is carried out as designed. Distinguishing "disposal" from "independently verified resolution" is central to the credibility of the entire system, and the GO\'s guidelines under Clause 4 should formalise this distinction.', te: 'వారి పాత్ర ఫిర్యాదులు నిజంగా పరిష్కరించబడ్డాయా, పౌరులు సంతృప్తి చెందారా అని తనిఖీ చేయడం వరకు విస్తరించాలి. "పరిష్కరించబడింది" నుండి "స్వతంత్రంగా సత్యాపన పొందిన పరిష్కారాన్ని" వేరు చేయడం మొత్తం వ్యవస్థ యొక్క విశ్వసనీయతకు కేంద్రం, మరియు క్లాజ్ 4 క్రింద GO మార్గదర్శకాలు ఈ తేడాను అధికారికం చేయాలి.' },
      ],
    },
    {
      num: '07', priority: 'Critical',
      title: { en: 'Technology, the Portal, and Open Source', te: 'టెక్నాలజీ, పోర్టల్, మరియు ఓపెన్ సోర్స్' },
      lead: { en: 'Software shapes practice more than instructions do. The portal must auto-escalate, include an Appeal module, communicate via WhatsApp, and — for non-sensitive components — be open-sourced by default.', te: 'సూచనల కంటే సాఫ్ట్‌వేర్ ప్రవర్తనను ఎక్కువగా రూపొందిస్తుంది. పోర్టల్ స్వయంచాలకంగా ఎస్కలేట్ చేయాలి, అప్పీలు మాడ్యూల్ చేర్చాలి, WhatsApp ద్వారా కమ్యూనికేట్ చేయాలి, మరియు — సున్నితం కాని భాగాలకు — డిఫాల్ట్‌గా ఓపెన్-సోర్స్ చేయబడాలి.' },
      paragraphs: [
        { en: 'As the GO is operationalised and Prajavani is rolled out at Division, District and State levels on a single portal, technology emerges as both the single biggest enabler of the system and one of its most consequential potential choke points. The Pilot demonstrated repeatedly that small portal improvements — category-specific input fields, pre-formatted public hearing receipts, edit access for District administrators — produced disproportionate gains. Equally, missing features such as auto-escalation and a dedicated Appeal module have continued to dampen accountability.', te: 'GO అమలులోకి వచ్చిన తర్వాత, ఒకే పోర్టల్‌లో డివిజన్, జిల్లా, రాష్ట్ర స్థాయులలో ప్రజావాణి ప్రారంభించబడినప్పుడు, టెక్నాలజీ వ్యవస్థ యొక్క అతిపెద్ద ఎనేబ్లర్ మరియు అత్యంత పర్యవసాన చోక్ పాయింట్‌లలో ఒకటిగా రెండింటిగా ఉద్భవిస్తుంది.' },
        { en: 'A structured way of reporting portal issues — for both citizens and officers — should be built directly into the system, with these reports being acted upon in a time-bound manner. There is also a wide community of well-meaning technologists, civic groups and volunteers who would willingly contribute to such a system. The Government should therefore move towards open-sourcing the non-sensitive components of the Prajavani grievance redressal system.', te: 'పోర్టల్ సమస్యలను నివేదించే నిర్మాణాత్మక మార్గం — పౌరులు మరియు అధికారుల కోసం — నేరుగా వ్యవస్థలో నిర్మించబడాలి, ఈ నివేదికలు సమయ-బద్ధ పద్ధతిలో చర్య తీసుకోబడాలి. ప్రభుత్వం ప్రజావాణి యొక్క సున్నితం కాని భాగాలను ఓపెన్-సోర్స్ చేయాలి.' },
        { en: 'Initiatives like DIGIT (eGov Foundation) — whose open-source components have been adopted across multiple state and urban governance systems — provide an important precedent. The Telangana Government may consider adopting "open source by default" as a guiding principle, with all non-sensitive components (workflow engines, grievance categorisation frameworks, APIs, dashboards) released under appropriate licences. Such an approach can reduce vendor lock-in, improve interoperability, lower maintenance costs, strengthen transparency, and enable innovation by civil society, universities, and technology partners — while sensitive citizen data and security credentials remain fully protected.', te: 'DIGIT (eGov Foundation) వంటి కార్యక్రమాలు — దీని ఓపెన్-సోర్స్ భాగాలు బహుళ రాష్ట్ర మరియు పట్టణ పాలన వ్యవస్థలలో స్వీకరించబడ్డాయి — ముఖ్యమైన ముందస్తు దాఖలా అందిస్తాయి. తెలంగాణ ప్రభుత్వం "డిఫాల్ట్‌గా ఓపెన్ సోర్స్"ను మార్గదర్శక సూత్రంగా స్వీకరించడాన్ని పరిగణించవచ్చు.' },
        { en: 'Specific portal priorities: Real-time GRO assignment with citizens informed of assignment. Symmetric real-time status access for officers and citizens. The current CM Prajavani practice of requiring administrative approval before any information is shared with the citizen reduces accountability on the officer filing the ATR — this must be corrected. ATRs should be communicated to citizens over WhatsApp and email; SMS notifications should be mandatory at each step. When citizens routinely receive updates over WhatsApp from banks, schools and government agencies, the grievance redressal system cannot lag behind.', te: 'నిర్దిష్ట పోర్టల్ ప్రాధాన్యతలు: రియల్-టైం GRO నియామకం, పౌరులకు నియామకం గురించి తెలియజేయడం. అధికారులు మరియు పౌరులకు సమకాలిక రియల్-టైం స్థితి యాక్సెస్. ATRలు WhatsApp మరియు ఇమెయిల్ ద్వారా పౌరులకు తెలియజేయాలి; ప్రతి దశలో SMS నోటిఫికేషన్‌లు తప్పనిసరి. బ్యాంకులు, పాఠశాలలు, ప్రభుత్వ ఏజెన్సీల నుండి పౌరులు WhatsApp ద్వారా అప్‌డేట్‌లు అందుకుంటున్నప్పుడు, ఫిర్యాదు పరిష్కార వ్యవస్థ వెనుకబడకూడదు.' },
      ],
    },
    {
      num: '08', priority: 'High',
      title: { en: 'A Functional Appeal Process', te: 'పనిచేసే అప్పీలు ప్రక్రియ' },
      lead: { en: 'Only one Collector Appeal was held during the entire Pilot. The GO\'s multi-tier appeal structure must be operationalised with scheduled hearings, dedicated software, and pre-identified appellate officers.', te: 'మొత్తం పైలట్‌లో ఒక్కటే కలెక్టర్ అప్పీలు జరిగింది. GO యొక్క బహుళ-స్థాయి అప్పీలు నిర్మాణం షెడ్యూల్ చేసిన విచారణలు, అంకిత సాఫ్ట్‌వేర్, మరియు ముందుగా గుర్తించిన అప్పీలేట్ అధికారులతో అమలులోకి తీసుకురావాలి.' },
      paragraphs: [
        { en: 'One of the most significant unfinished pieces from the Pilot has been the appeal mechanism. Despite being designed into the system, an appeal hearing was held only once during the entire Pilot, due to a combination of scheduling, capacity and institutional constraints. The GO addresses this gap by enabling citizens dissatisfied at the Division level to approach the District, and those dissatisfied at the District to approach the State. This multi-tier appeal structure is critical for accountability and for pushing GROs to maintain the quality of their ATRs.', te: 'పైలట్ నుండి అత్యంత ముఖ్యమైన అసంపూర్ణ భాగాలలో ఒకటి అప్పీలు యంత్రాంగం. వ్యవస్థలో రూపొందించబడినప్పటికీ, మొత్తం పైలట్‌లో ఒక్కసారి మాత్రమే అప్పీలు విచారణ జరిగింది — షెడ్యూలింగ్, సామర్థ్యం మరియు సంస్థాగత పరిమితుల కలయిక కారణంగా. GO ఈ ఖాళీని పూరిస్తుంది.' },
        { en: 'The case of Gedam Dhavu illustrates the value of a functioning appeal forum: a five-year-old revenue records error — which had stalled even after entering the Pilot — was finally examined in full at the Collector Appeal on 12 September 2025. The Collector directed the Tahsildar, Jainath, to process the case through Bhu Bharati within fifteen days; the patta was issued in Dhavu\'s name on 8 April 2026. Without the Appeal forum, the case had cycled through multiple offices without resolution. With it, the full history could be reviewed, the correct procedural path identified, and a time-bound direction issued.', te: 'గెడం ధావు కేసు పనిచేసే అప్పీలు ఫోరం యొక్క విలువను చూపిస్తుంది: ఐదేళ్ల పాత రెవెన్యూ రికార్డుల తప్పిదం — పైలట్‌లోకి ప్రవేశించిన తర్వాత కూడా స్థంభించిపోయింది — చివరికి 12 సెప్టెంబర్ 2025న కలెక్టర్ అప్పీలులో పూర్తిగా పరిశీలించబడింది. కలెక్టర్ తహసీల్దారుకు పదిహేను రోజులలో కేసు ప్రాసెస్ చేయాలని ఆదేశించారు; 8 ఏప్రిల్ 2026న ధావు పేరున పట్టా జారీ అయింది.' },
        { en: 'For appeals to be meaningful at scale, scheduling must be prioritised at par with Prajavani sessions themselves. Department-level Presiding Officers for appeals must be identified and planned in advance — not improvised on the day. The Pilot\'s single appeal hearing demonstrated the institutional value: when the District Collector could directly confront a Tahsildar on the basis of a written Prajavani remark or filed ATR, the Tahsildar became accountable to take corrective action, and citizens witnessed this accountability play out in real time.', te: 'పెద్ద ఎత్తున అప్పీళ్లు అర్థవంతంగా ఉండాలంటే, షెడ్యూలింగ్ ప్రజావాణి సెషన్‌ల పక్కన ప్రాధాన్యత ఇవ్వాలి. అప్పీళ్ల కోసం శాఖ-స్థాయి అధ్యక్ష అధికారులు ముందుగానే గుర్తించబడి, ప్రణాళిక చేయబడాలి — ఆ రోజు ఇంప్రోవైజ్ చేయకూడదు.' },
      ],
    },
    {
      num: '09', priority: 'Critical',
      title: { en: 'Towards an Accountability Law', te: 'జవాబుదారీతనం చట్టం వైపు' },
      lead: { en: 'The paramount strategic goal: a comprehensive Grievance Redressal Law that makes the right to be heard, the right to time-bound redressal, and the right to appeal fully enforceable statutory rights.', te: 'అత్యున్నత వ్యూహాత్మక లక్ష్యం: విచారణ హక్కు, సమయ-బద్ధ పరిష్కార హక్కు, మరియు అప్పీలు హక్కు పూర్తి స్థాయి అమలులోకి తీసుకువచ్చే సమగ్ర ఫిర్యాదు పరిష్కార చట్టం.' },
      paragraphs: [
        { en: 'The paramount strategic goal remains the progression toward enacting a comprehensive Grievance Redressal Law, which would establish the right to be heard, the right to time-bound redressal, the right to written remarks, and the right to appeal as fully enforceable statutory rights for every citizen.', te: 'అత్యున్నత వ్యూహాత్మక లక్ష్యం సమగ్ర ఫిర్యాదు పరిష్కార చట్టం రూపొందించడం వైపు పురోగమనం. ఇది విచారణ హక్కు, సమయ-బద్ధ పరిష్కార హక్కు, వ్రాతపూర్వక వ్యాఖ్యల హక్కు, మరియు అప్పీలు హక్కును ప్రతి పౌరునికి పూర్తిగా అమలులోకి తీసుకువచ్చే చట్టబద్ధ హక్కులుగా స్థాపిస్తుంది.' },
        { en: 'Such a legislative framework is essential to transition the system from reliance on administrative discretion and procedural disposal toward a rights-based, citizen-centric accountability framework — and to ensure that the gains institutionalised by GO Ms No. 3 of 30 April 2026 are protected against future administrative drift.', te: 'అటువంటి శాసన నిర్మాణం వ్యవస్థను పరిపాలనా విచక్షణ మరియు ప్రక్రియా పరిష్కారంపై ఆధారపడటం నుండి హక్కు-ఆధారిత, పౌర-కేంద్రీకృత జవాబుదారీ నిర్మాణం వైపు మార్చడానికి అవసరం — మరియు 30 ఏప్రిల్ 2026 GO Ms No. 3 ద్వారా సంస్థాగతం చేయబడిన లాభాలు భవిష్యత్ పరిపాలనా ప్రవాహానికి వ్యతిరేకంగా రక్షించబడేలా చూడటానికి.' },
      ],
    },
  ];

  const priorityColor = { Critical: C.red, High: C.amber, Medium: C.teal };

  return (
    <section id="forward" data-screen-label="13 Way Forward" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Way Forward', 'ముందుకు దారి')}</div>
        <h2 style={SS.sectionTitle}>{t('Building on the 30 April 2026 Government Order', '30 ఏప్రిల్ 2026 ప్రభుత్వ ఉత్తర్వుపై నిర్మించడం')}</h2>
        <p style={SS.sectionLead}>
          {t('On 30 April 2026, the Government of Telangana issued a Government Order (GO Ms No. 3, Planning (V) Department) to institutionalise, decentralise, and integrate the State\'s Public Grievance Redressal Mechanism — Prajavani. The GO institutionalises numerous components ideated and implemented in the Pilot. The work now is to ensure the GO is implemented in practice — and to push for what it still leaves out.', '30 ఏప్రిల్ 2026న, తెలంగాణ ప్రభుత్వం రాష్ట్ర ప్రజా ఫిర్యాదు పరిష్కార యంత్రాంగాన్ని — ప్రజావాణిని — సంస్థాగతీకరించడానికి, వికేంద్రీకరించడానికి, మరియు సమైక్యం చేయడానికి ఒక ప్రభుత్వ ఉత్తర్వు (GO Ms నం. 3, ప్రణాళిక (V) శాఖ) జారీ చేసింది. పైలట్‌లో ఆలోచించబడిన మరియు అమలు చేయబడిన అనేక భాగాలను GO సంస్థాగతీకరిస్తుంది. ఇప్పుడు పని GO ఆచరణలో అమలు అయ్యేలా చూడటం — మరియు అది ఇంకా వదిలిపెట్టిన దాని కోసం పుష్ చేయడం.')}
        </p>

        {/* GO Highlight panel */}
        <div style={{ background: C.navy, borderRadius: 6, padding: 'clamp(20px, 4vw, 32px) clamp(20px, 4vw, 40px)', marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: C.amberLight, textTransform: 'uppercase', marginBottom: 8 }}>{t('Government Order — 30 April 2026', 'ప్రభుత్వ ఉత్తర్వు — 30 ఏప్రిల్ 2026')}</div>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 700, color: C.white, lineHeight: 1.3 }}>{t('Institutionalising Prajavani — a significant milestone', 'ప్రజావాణిని సంస్థాగతీకరించడం — ఒక ప్రముఖ మైలురాయి')}</div>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, color: 'rgba(255,255,255,0.6)', maxWidth: 720, lineHeight: 1.65, marginTop: 12, fontStyle: 'italic' }}>
                {t('"...to enhance responsiveness, transparency, accountability and timely empathetic citizen-centric service delivery in the public grievance redressal system."', '"...ప్రజా ఫిర్యాదు పరిష్కార వ్యవస్థలో ప్రతిస్పందన, పారదర్శకత, జవాబుదారీతనం మరియు సకాలిక సానుభూతిగల పౌర-కేంద్రీకృత సేవా బట్వాడాను పెంచడానికి."')}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14, marginBottom: 28 }}>
            {goFeatures.map((f, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 3, padding: '14px 16px' }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, color: C.amberLight, marginBottom: 4 }}>{t(f.label.en, f.label.te)}</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>{t(f.body.en, f.body.te)}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: '#ff8068', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>{t('What the GO does not yet provide', 'GO ఇంకా అందించని విషయాలు')}</div>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {goGaps.map((g, i) => (
                <li key={i} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 4 }}>{t(g.en, g.te)}</li>
              ))}
            </ul>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 12, lineHeight: 1.6 }}>
              {t('Most of these items are designated to Clause 4 — to be addressed through future guidelines and instructions. The strategic priority is to ensure those guidelines are strong, comprehensive, and built around citizen experience.', 'వీటిలో చాలావరకు క్లాజ్ 4కు కేటాయించబడ్డాయి — భవిష్యత్ మార్గదర్శకాలు మరియు సూచనల ద్వారా పరిష్కరించబడాలి. వ్యూహాత్మక ప్రాధాన్యత ఆ మార్గదర్శకాలు బలంగా, సమగ్రంగా, పౌర అనుభవం చుట్టూ నిర్మించబడేలా చూడటం.')}
            </div>
          </div>
        </div>

        {/* Strategic priorities heading */}
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 700, color: C.navy, marginBottom: 12 }}>
          {t('Nine strategic priorities beyond the GO', 'GOకి అతీతంగా తొమ్మిది వ్యూహాత్మక ప్రాధాన్యతలు')}
        </div>
        <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7, marginBottom: 24, maxWidth: 760 }}>
          {t('Drawing on the experience of the Pilot, these procedural, institutional and technological priorities are proposed to ensure authentic, citizen-centric accountability. Click any priority to read the full draft.', 'పైలట్ అనుభవం ఆధారంగా, ప్రామాణిక, పౌర-కేంద్రీకృత జవాబుదారీతనం కోసం ఈ ప్రక్రియా, సంస్థాగత మరియు సాంకేతిక ప్రాధాన్యతలు ప్రతిపాదించబడ్డాయి. పూర్తి ముసాయిదా చదవడానికి ఏదైనా ప్రాధాన్యతపై క్లిక్ చేయండి.')}
        </p>

        {/* Accordion priorities */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
          {priorities.map((p, i) => {
            const open = printMode || openIdx === i;
            return (
              <div key={i} style={{ background: open ? C.bg : C.white, border: `1px solid ${open ? C.navy : C.border}`, borderLeft: `4px solid ${priorityColor[p.priority]}`, borderRadius: 4, overflow: 'hidden', transition: 'all 0.2s' }}>
                <button onClick={() => setOpenIdx(open ? -1 : i)}
                  style={{ width: '100%', textAlign: 'left', padding: 'clamp(14px, 2.5vw, 18px) clamp(16px, 3vw, 24px)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: 14, fontFamily: "'Source Sans 3',sans-serif" }}>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: priorityColor[p.priority], minWidth: 26, lineHeight: 1.3 }}>{p.num}</div>
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, flexWrap: 'wrap' }}>
                      <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(15px, 2.5vw, 17px)', fontWeight: 700, color: C.navy, lineHeight: 1.3, flex: '1 1 220px' }}>{t(p.title.en, p.title.te)}</div>
                      <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: 2, background: `${priorityColor[p.priority]}18`, color: priorityColor[p.priority], textTransform: 'uppercase', flexShrink: 0 }}>{p.priority}</span>
                    </div>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.6, marginTop: 6 }}>{t(p.lead.en, p.lead.te)}</div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.textLight} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {open && (
                  <div style={{ padding: '0 clamp(16px, 3vw, 24px) clamp(18px, 3vw, 24px) clamp(50px, 6vw, 64px)', borderTop: `1px dashed ${C.border}` }}>
                    {p.paragraphs.map((para, j) => (
                      <p key={j} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.8, marginTop: 14 }}>
                        {t(para.en, para.te)}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing paramount-goal callout */}
        <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.amber}`, borderRadius: 4, padding: 'clamp(22px, 4vw, 28px) clamp(22px, 4vw, 34px)' }}>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: C.amber, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
            {t('The paramount strategic goal', 'అత్యున్నత వ్యూహాత్మక లక్ష్యం')}
          </div>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 700, color: C.navy, marginBottom: 10, lineHeight: 1.35 }}>
            {t('A comprehensive Grievance Redressal Law', 'సమగ్ర ఫిర్యాదు పరిష్కార చట్టం')}
          </div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 15, color: C.textMid, lineHeight: 1.75 }}>
            {t('Establishing the right to be heard, the right to time-bound redressal, the right to written remarks, and the right to appeal as fully enforceable statutory rights for every citizen. Such a legislative framework is essential to transition the system from administrative discretion and procedural disposal toward a rights-based, citizen-centric accountability framework — and to ensure that the gains institutionalised by GO Ms No. 3 of 30 April 2026 are protected against future administrative drift.', 'విచారణ హక్కు, సమయ-బద్ధ పరిష్కార హక్కు, వ్రాతపూర్వక వ్యాఖ్యల హక్కు, మరియు అప్పీలు హక్కును ప్రతి పౌరునికి పూర్తిగా అమలులోకి తీసుకువచ్చే చట్టబద్ధ హక్కులుగా స్థాపించడం. అటువంటి శాసన నిర్మాణం వ్యవస్థను పరిపాలనా విచక్షణ మరియు ప్రక్రియా పరిష్కారం నుండి హక్కు-ఆధారిత, పౌర-కేంద్రీకృత జవాబుదారీ నిర్మాణం వైపు మార్చడానికి అవసరం — మరియు 30 ఏప్రిల్ 2026 GO Ms నం. 3 ద్వారా సంస్థాగతం చేయబడిన లాభాలు భవిష్యత్ పరిపాలనా ప్రవాహానికి వ్యతిరేకంగా రక్షించబడేలా చూడటానికి.')}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CaseStories, WayForward });
