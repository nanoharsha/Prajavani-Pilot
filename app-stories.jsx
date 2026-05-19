// ════════════════════════════════════════════════════════════════════════════
// SECTION 9: CASE STORIES — from the Adilabad Pilot report
// ════════════════════════════════════════════════════════════════════════════

function CaseStories() {
  useLang();
  const printMode = usePrintMode();
  const isMobile = useIsMobile();
  const [active, setActive] = React.useState(0);
  const stripRef = React.useRef(null);

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

  React.useEffect(() => {
    if (!isMobile || !stripRef.current) return;
    const el = stripRef.current.querySelector('[data-active="true"]');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [active, isMobile]);

  return (
    <section id="cases" data-screen-label="12 Cases" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Voices & Stories', 'గొంతులు & కథలు')}</div>
        <h2 style={SS.sectionTitle}>{t('Case stories from Adilabad', 'ఆదిలాబాద్ నుండి కేసు కథలు')}</h2>
        <p style={SS.sectionLead}>
          {t('Real cases from the Pilot — both successes and the failures the system has not yet been able to address. Drawn from Section 6 of the Pilot report.', 'పైలట్ నుండి నిజమైన కేసులు — విజయాలు మరియు వ్యవస్థ ఇన్నికీ పరిష్కరించలేని వైఫల్యాలు రెండు. పైలట్ నివేదికలోని సెక్షన్ 6 నుండి తీసుకోబడింది.')}
        </p>

        {isMobile ? (
          <div style={{ marginBottom: 22 }} className={printMode ? 'print-hide' : ''}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0} aria-label="Previous case" style={{
                width: 38, height: 38, flexShrink: 0, borderRadius: '50%', cursor: active === 0 ? 'default' : 'pointer',
                border: `1px solid ${C.border}`, background: C.white, color: active === 0 ? C.border : C.navy,
                fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>‹</button>
              <div style={{ flexGrow: 1, textAlign: 'center' }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.amber, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t('Case', 'కేసు')} {active + 1} / {cases.length}</div>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: C.navy }}>{c.name}</div>
              </div>
              <button onClick={() => setActive(Math.min(cases.length - 1, active + 1))} disabled={active === cases.length - 1} aria-label="Next case" style={{
                width: 38, height: 38, flexShrink: 0, borderRadius: '50%', cursor: active === cases.length - 1 ? 'default' : 'pointer',
                border: `1px solid ${C.border}`, background: C.white, color: active === cases.length - 1 ? C.border : C.navy,
                fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>›</button>
            </div>
            <div ref={stripRef} style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 6, scrollbarWidth: 'none' }}>
              {cases.map((cs, i) => (
                <button key={i} data-active={active === i} onClick={() => setActive(i)} style={{
                  flexShrink: 0, padding: '8px 13px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 12,
                  fontWeight: active===i?700:500, color: active===i?C.white:C.textMid,
                  background: active===i?C.navy:C.white, border: `1px solid ${active===i?C.navy:C.border}`, borderRadius: 100, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap'
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: statusColor[cs.status], display: 'inline-block', flexShrink: 0 }} />
                  <span>{cs.name}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
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
        )}

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
    { label: { en: 'Mandatory digitisation', te: 'తప్పనిసరి డిజిటలీకరణ' }, body: { en: 'All grievances received during Prajavani across all levels of administration must be registered on a unified Prajavani Portal', te: 'అన్ని పరిపాలనా స్థాయులలో ప్రజావాణిలో అందుకున్న అన్ని ఫిర్యాదులు ఏకీకృత ప్రజావాణి పోర్టల్‌లో నమోదు చేయాలి' } },
    { label: { en: 'Dated receipts', te: 'తేదీగల రసీదులు' }, body: { en: 'Dated acknowledgement receipts with unique reference IDs for online tracking', te: 'ఆన్‌లైన్ ట్రాకింగ్ కోసం ప్రత్యేక రెఫరెన్స్ ఐడీలతో తేదీగల రసీదులు' } },
    { label: { en: 'Weekly Prajavani', te: 'వారపు ప్రజావాణి' }, body: { en: 'Weekly Prajavani sessions at state, district and division levels — extended to the Mandal level in a phased manner', te: 'రాష్ట్ర, జిల్లా, డివిజన్ స్థాయులలో వారపు ప్రజావాణి సెషన్‌లు — దశలవారీగా మండల స్థాయికి విస్తరణ' } },
    { label: { en: '30-day ATR timeline', te: '30 రోజుల ATR గడువు' }, body: { en: '30-day timeline for filing ATRs, in line with SOPs to be publicly issued by Line Departments', te: 'లైన్ శాఖలు బహిరంగంగా జారీ చేసే SOPలకు అనుగుణంగా ATRల దాఖలుకు 30 రోజుల గడువు' } },
    { label: { en: 'Escalation & appeals', te: 'ఎస్కలేషన్ & అప్పీళ్లు' }, body: { en: 'Automatic escalation for non-adherence to the timeline, and a multi-tier appellate mechanism', te: 'గడువు పాటించకపోతే స్వయంచాలక ఎస్కలేషన్, మరియు బహుళ-స్థాయి అప్పీలు యంత్రాంగం' } },
    { label: { en: 'Right to track', te: 'ట్రాక్ చేసే హక్కు' }, body: { en: 'Citizens can track grievance status, download ATRs, and participate in proceedings', te: 'పౌరులు ఫిర్యాదు స్థితిని ట్రాక్ చేయవచ్చు, ATRలు డౌన్‌లోడ్ చేయవచ్చు, కార్యకలాపాలలో పాల్గొనవచ్చు' } },
    { label: { en: 'Nodal Officers', te: 'నోడల్ అధికారులు' }, body: { en: 'Designation of Nodal Officers across line departments and levels of administration', te: 'లైన్ శాఖలు మరియు పరిపాలనా స్థాయులలో నోడల్ అధికారుల నియామకం' } },
  ];

  const goGaps = [
    { en: 'Monitoring and review procedures', te: 'పర్యవేక్షణ మరియు సమీక్షా విధానాలు' },
    { en: 'Constitution of monitoring committees at different levels', te: 'వివిధ స్థాయులలో పర్యవేక్షణ కమిటీల ఏర్పాటు' },
    { en: 'Capacity building for officers', te: 'అధికారులకు సామర్థ్య నిర్మాణం' },
    { en: 'Institutional arrangements with SSAAT and Self-Help Groups (SHGs)', te: 'SSAAT మరియు స్వయం సహాయక సంఘాల (SHGs) సంస్థాగత ఏర్పాట్లు' },
  ];

  // ─── Strategic priorities (expandable, full text from Way Forward draft) ───
  const priorities = [
    {
      num: '01', priority: 'Critical',
      title: { en: 'Grievance Filing as per People\'s Convenience', te: 'ప్రజల సౌకర్యం ప్రకారం ఫిర్యాదు దాఖలు' },
      lead: { en: 'A key element missing from the GO is multi-modal registration of grievances — online, over a toll-free phone line, or in person. An open citizen-facing web portal and IFCs down to the Panchayat level must be established.', te: 'GOలో లేని కీలక అంశం — ఫిర్యాదుల బహుళ-మార్గ నమోదు: ఆన్‌లైన్, టోల్-ఫ్రీ ఫోన్ లైన్ ద్వారా, లేదా నేరుగా. పౌరులకు అందుబాటులో ఉండే ఓపెన్ వెబ్ పోర్టల్ మరియు పంచాయితీ స్థాయి వరకు IFCలు ఏర్పాటు చేయాలి.' },
      paragraphs: [
        { en: 'A key element missing from the GO is the option of multi-modal registration of grievances — be it online through a web-based portal, over the phone via a toll-free number, or in person such as at IFCs. An online portal for citizens to file grievances directly — already provided for under the GO — must be established at the earliest. Telangana retains the distressing reputation of being one of the only States in the country without an open web portal through which citizens can file grievances at any given point in time.', te: 'GOలో లేని కీలక అంశం — ఫిర్యాదుల బహుళ-మార్గ నమోదు అవకాశం: వెబ్ పోర్టల్ ద్వారా ఆన్‌లైన్‌లో, టోల్-ఫ్రీ నంబర్ ద్వారా ఫోన్‌లో, లేదా IFCల వంటి చోట్ల నేరుగా. GOలో ఇప్పటికే నిబంధన ఉన్న — పౌరులు నేరుగా ఫిర్యాదులు దాఖలు చేసే ఆన్‌లైన్ పోర్టల్ — వీలైనంత త్వరగా ఏర్పాటు చేయాలి. ఏ సమయంలోనైనా పౌరులు ఫిర్యాదులు దాఖలు చేయగల ఓపెన్ వెబ్ పోర్టల్ లేని అతికొద్ది రాష్ట్రాలలో తెలంగాణ ఒకటిగా మిగిలి ఉంది.' },
        { en: 'The GRO must be automatically assigned upon filing a grievance, for which grievance categories need to be identified and officers designated by the respective Line Departments. At the same time, IFCs should be established as close to people as possible — down to the Panchayat level — which citizens can physically visit to access information and file grievances as per their convenience, beyond the weekly Prajavani sessions.', te: 'ఫిర్యాదు దాఖలు చేయగానే GRO స్వయంచాలకంగా కేటాయించబడాలి — దీని కోసం ఫిర్యాదు వర్గాలను గుర్తించి, ఆయా లైన్ శాఖలు అధికారులను నియమించాలి. అదే సమయంలో, IFCలను ప్రజలకు వీలైనంత దగ్గరగా — పంచాయితీ స్థాయి వరకు — ఏర్పాటు చేయాలి, తద్వారా వారపు ప్రజావాణి సెషన్‌లకు అతీతంగా పౌరులు తమ సౌకర్యం ప్రకారం అక్కడికి వెళ్లి సమాచారం పొందవచ్చు, ఫిర్యాదులు దాఖలు చేయవచ్చు.' },
      ],
    },
    {
      num: '02', priority: 'High',
      title: { en: 'Facilitation and Mobilisation', te: 'సహాయం మరియు సమీకరణ' },
      lead: { en: 'Many citizens never file their grievances — hindered by the effort required, or assuming their issues are not redressable. Filing support through existing village-level networks must be institutionalised.', te: 'చాలామంది పౌరులు తమ ఫిర్యాదులను ఎప్పుడూ దాఖలు చేయరు — అవసరమైన శ్రమ వల్ల, లేదా తమ సమస్యలు పరిష్కరించలేనివని భావించడం వల్ల. ఇప్పటికే ఉన్న గ్రామ-స్థాయి నెట్‌వర్క్‌ల ద్వారా దాఖలు మద్దతును సంస్థాగతం చేయాలి.' },
      paragraphs: [
        { en: 'Many citizens never end up filing their grievances on the system, either hindered by the effort required or assuming that their issues are not redressable.', te: 'చాలామంది పౌరులు తమ ఫిర్యాదులను వ్యవస్థలో దాఖలు చేయనే చేయరు — అవసరమైన శ్రమ వల్ల అడ్డుపడ్డవారు, లేదా తమ సమస్యలు పరిష్కరించలేనివని భావించేవారు.' },
        { en: 'Filing support through existing village-level networks — SSAAT resource persons, VOAs, SHGs, PESA Mobilisers, SERP Cluster Coordinators — must be institutionalised, with clear designated roles for information dissemination, grievance filing and facilitation of hearings. Panchayat functionaries including Sarpanches, Secretaries and Ward Members should be brought on board wherever possible.', te: 'ఇప్పటికే ఉన్న గ్రామ-స్థాయి నెట్‌వర్క్‌ల ద్వారా దాఖలు మద్దతును — SSAAT వనరుల వ్యక్తులు, VOAలు, SHGలు, PESA సమీకరణకారులు, SERP క్లస్టర్ సమన్వయకర్తలు — సంస్థాగతం చేయాలి, సమాచార వ్యాప్తి, ఫిర్యాదు దాఖలు, మరియు విచారణల నిర్వహణకు స్పష్టమైన పాత్రలతో. సర్పంచులు, కార్యదర్శులు మరియు వార్డు సభ్యులతో సహా పంచాయితీ సిబ్బందిని వీలైన చోటల్లా కలుపుకోవాలి.' },
      ],
    },
    {
      num: '03', priority: 'Critical',
      title: { en: 'The Right to a Hearing — and to a Written Record of Hearing', te: 'విచారణ హక్కు — మరియు విచారణ వ్రాతపూర్వక రికార్డు హక్కు' },
      lead: { en: 'Citizens engaging directly with the GRO in their own language produces qualitatively different outcomes. But a hearing is incomplete if the citizen leaves with no record of what was agreed.', te: 'పౌరులు తమ స్వంత భాషలో GROతో నేరుగా మాట్లాడటం గుణాత్మకంగా భిన్నమైన ఫలితాలను ఇస్తుంది. కానీ ఏం అంగీకరించారో రికార్డు లేకుండా పౌరుడు వెళ్తే ఆ విచారణ అసంపూర్ణం.' },
      paragraphs: [
        { en: 'The Pilot demonstrated that citizens engaging directly with the relevant GRO, in their own language, produces qualitatively different outcomes from grievance collection at a counter. But the right to a hearing is incomplete if the citizen has no evidence of what was agreed to at such hearing. During the weekly Prajavani sessions, considerable effort goes into diagnosing a grievance and deciding the next course of action — yet citizens often leave without any record of such interaction.', te: 'పౌరులు తమ స్వంత భాషలో సంబంధిత GROతో నేరుగా మాట్లాడటం, కౌంటర్ వద్ద ఫిర్యాదులు సేకరించడం కంటే గుణాత్మకంగా భిన్నమైన ఫలితాలను ఇస్తుందని పైలట్ నిరూపించింది. కానీ విచారణలో ఏం అంగీకరించారో సాక్ష్యం పౌరునికి లేకపోతే విచారణ హక్కు అసంపూర్ణం. వారపు ప్రజావాణి సెషన్‌లలో, ఒక ఫిర్యాదును నిర్ధారించడానికి, తదుపరి చర్య నిర్ణయించడానికి గణనీయమైన శ్రమ జరుగుతుంది — అయినా పౌరులు తరచుగా ఆ సంభాషణ రికార్డు ఏదీ లేకుండా వెళ్లిపోతారు.' },
        { en: 'If the system\'s base architecture captures only the final online ATR and not the interactions during the weekly Prajavanis, a crucial link in accountability is broken and the effort that goes into running these weekly sessions delivers little advantage. It is therefore imperative that citizens receive a written record of such interactions with GROs, and that the same is entered into the IT system in real time, to affix accountability of the concerned officer(s).', te: 'వ్యవస్థ యొక్క మౌలిక నిర్మాణం చివరి ఆన్‌లైన్ ATRను మాత్రమే నమోదు చేసి వారపు ప్రజావాణుల సంభాషణలను నమోదు చేయకపోతే, జవాబుదారీతనంలో కీలక లింకు తెగిపోతుంది, ఈ వారపు సెషన్‌ల శ్రమ తక్కువ ప్రయోజనాన్ని ఇస్తుంది. కాబట్టి పౌరులు GROలతో జరిగిన ఇటువంటి సంభాషణల వ్రాతపూర్వక రికార్డును అందుకోవడం, మరియు సంబంధిత అధికారుల జవాబుదారీతనాన్ని నిర్ధారించడానికి అదే రియల్-టైంలో IT వ్యవస్థలో నమోదు కావడం తప్పనిసరి.' },
        { en: 'The administration\'s common refrain — that overcrowding at district Prajavanis hinders such record-keeping — in fact makes the case for further decentralisation of these weekly sessions. If Prajavani were conducted weekly at the Division and Mandal levels, the smaller scale and proximity of frontline officers would enable reasoned remarks and give the IFC operator the time and space to enter them on the portal immediately. Higher levels are then best reserved for escalation, appeal and policy-level coordination. This must be hard-wired into the grievance redressal system across the State.', te: 'జిల్లా ప్రజావాణుల వద్ద రద్దీ ఇటువంటి రికార్డు-నిర్వహణకు ఆటంకమని పరిపాలన చెప్పే సాధారణ సాకు — నిజానికి ఈ వారపు సెషన్‌ల మరింత వికేంద్రీకరణకు బలమైన వాదన. ప్రజావాణి డివిజన్ మరియు మండల స్థాయులలో వారానికి నిర్వహిస్తే, చిన్న పరిమాణం మరియు ముందువరుస అధికారుల సమీపత వల్ల కారణసహిత వ్యాఖ్యలు సాధ్యమవుతాయి, IFC ఆపరేటర్‌కు వాటిని వెంటనే పోర్టల్‌లో నమోదు చేసే సమయం దొరుకుతుంది. ఉన్నత స్థాయులు అప్పుడు ఎస్కలేషన్, అప్పీలు, విధాన-స్థాయి సమన్వయానికి కేటాయించడం ఉత్తమం. ఇది రాష్ట్రవ్యాప్తంగా ఫిర్యాదు పరిష్కార వ్యవస్థలో దృఢంగా నిర్మించబడాలి.' },
      ],
    },
    {
      num: '04', priority: 'High',
      title: { en: 'Standard Operating Procedures', te: 'ప్రామాణిక ఆపరేటింగ్ ప్రొసీజర్‌లు' },
      lead: { en: 'SOPs issued by Line Departments — with prescribed timelines — proved central to the Pilot. They must be issued by all departments and, crucially, not prepared in silos.', te: 'లైన్ శాఖలు జారీ చేసిన SOPలు — నిర్దేశిత గడువులతో — పైలట్‌కు కేంద్రంగా రుజువయ్యాయి. అవి అన్ని శాఖలు జారీ చేయాలి, కీలకంగా, సైలోలలో తయారు చేయకూడదు.' },
      paragraphs: [
        { en: 'SOPs issued by Line Departments — including prescribed timelines — proved central to the Pilot, anchoring GRO responses and reducing the burden passed back to citizens. SOPs must therefore be issued by all Line Departments and, crucially, not prepared in silos. Categories and sub-categories should be finalised first, and related SOPs prepared in dialogue with citizen collectives and civil society organisations who carry working knowledge of people\'s issues and the standard administrative responses they typically receive.', te: 'లైన్ శాఖలు జారీ చేసిన SOPలు — నిర్దేశిత గడువులతో సహా — పైలట్‌కు కేంద్రంగా రుజువయ్యాయి, GRO ప్రతిస్పందనలను స్థిరపరిచి, పౌరులపై తిరిగి వేసే భారాన్ని తగ్గించాయి. కాబట్టి SOPలను అన్ని లైన్ శాఖలు జారీ చేయాలి, కీలకంగా, సైలోలలో తయారు చేయకూడదు. వర్గాలు మరియు ఉప-వర్గాలను ముందుగా ఖరారు చేయాలి, సంబంధిత SOPలను ప్రజల సమస్యలు మరియు వారు సాధారణంగా అందుకునే పరిపాలనా ప్రతిస్పందనలపై పని అవగాహన ఉన్న పౌర సముదాయాలు మరియు పౌర సంస్థలతో సంభాషణలో తయారు చేయాలి.' },
        { en: 'SOPs should be updated regularly based on District Administration feedback, and made accessible to citizens in relevant languages during Prajavani proceedings.', te: 'జిల్లా పరిపాలన అభిప్రాయం ఆధారంగా SOPలను క్రమం తప్పకుండా నవీకరించాలి, మరియు ప్రజావాణి కార్యకలాపాల సమయంలో సంబంధిత భాషలలో పౌరులకు అందుబాటులో ఉంచాలి.' },
        { en: 'A direct consequence of well-defined SOPs is that GRO assignment can, and should, be system-driven. The portal as rolled out post the GO currently places the burden of GRO assignment on the Data Entry Operator at the Prajavani. Once SOPs and category-to-officer mappings are clear, the system should auto-assign the designated GRO for every category, with the Presiding Officer retaining authority to override. The default onus of identifying a GRO should not rest on a DEO or a Presiding Officer on the day.', te: 'బాగా నిర్వచించిన SOPల ప్రత్యక్ష పర్యవసానం — GRO నియామకం వ్యవస్థ-నడిచేదిగా ఉండగలదు, ఉండాలి. GO తర్వాత ప్రారంభించిన పోర్టల్ ప్రస్తుతం GRO నియామకం భారాన్ని ప్రజావాణిలో డేటా ఎంట్రీ ఆపరేటర్‌పై ఉంచుతోంది. SOPలు మరియు వర్గం-నుండి-అధికారి మ్యాపింగ్‌లు స్పష్టంగా ఉన్నాక, వ్యవస్థ ప్రతి వర్గానికి నిర్దేశిత GROను స్వయంచాలకంగా కేటాయించాలి, ప్రెసైడింగ్ ఆఫీసర్‌కు దాన్ని మార్చే అధికారం ఉంటుంది. GROను గుర్తించే డిఫాల్ట్ బాధ్యత DEOపై లేదా ఆ రోజు ప్రెసైడింగ్ ఆఫీసర్‌పై ఉండకూడదు.' },
      ],
    },
    {
      num: '05', priority: 'Critical',
      title: { en: 'Citizen Feedback and Independent Verification', te: 'పౌర అభిప్రాయం మరియు స్వతంత్ర సత్యాపన' },
      lead: { en: 'Field-level follow-up on individual grievances was a backbone of the Pilot. The GO\'s call-centre feedback channel must be complemented by on-ground verification through independent organisations.', te: 'వ్యక్తిగత ఫిర్యాదులపై క్షేత్ర-స్థాయి ఫాలో-అప్ పైలట్‌కు వెన్నెముక. GO యొక్క కాల్-సెంటర్ అభిప్రాయ చానెల్‌కు స్వతంత్ర సంస్థల ద్వారా క్షేత్ర-స్థాయి సత్యాపన తోడుగా ఉండాలి.' },
      paragraphs: [
        { en: 'Field-level follow-up on individual grievances emerged as a backbone of the Pilot. While the GO\'s provision for a call centre-based feedback mechanism is welcome, it must be complemented by on-ground verification through independent organisations such as SSAAT — checking whether grievances have actually been resolved, whether citizens are satisfied, and assisting them in filing appeals where required.', te: 'వ్యక్తిగత ఫిర్యాదులపై క్షేత్ర-స్థాయి ఫాలో-అప్ పైలట్‌కు వెన్నెముకగా ఉద్భవించింది. కాల్ సెంటర్-ఆధారిత అభిప్రాయ యంత్రాంగానికి GO నిబంధన స్వాగతించదగినది అయినా, దానికి SSAAT వంటి స్వతంత్ర సంస్థల ద్వారా క్షేత్ర-స్థాయి సత్యాపన తోడుగా ఉండాలి — ఫిర్యాదులు నిజంగా పరిష్కరించబడ్డాయా, పౌరులు సంతృప్తి చెందారా అని తనిఖీ చేయడం, అవసరమైన చోట అప్పీళ్లు దాఖలు చేయడంలో సహాయపడటం.' },
        { en: 'The distinction between procedural "disposal" and "independently verified resolution" is central to the credibility of the system, and guidelines must be issued to formalise it.', te: 'ప్రక్రియాపరమైన "పరిష్కారం (డిస్పోజల్)" మరియు "స్వతంత్రంగా సత్యాపన పొందిన పరిష్కారం" మధ్య తేడా వ్యవస్థ విశ్వసనీయతకు కేంద్రం, దాన్ని అధికారికం చేయడానికి మార్గదర్శకాలు జారీ చేయాలి.' },
      ],
    },
    {
      num: '06', priority: 'High',
      title: { en: 'Multi-tier Appellate Mechanism', te: 'బహుళ-స్థాయి అప్పీలు యంత్రాంగం' },
      lead: { en: 'The appeal mechanism remained the most significant unfinished piece of the Pilot — only one hearing was held, covering four mandals. The GO\'s multi-tier structure must be operationalised.', te: 'అప్పీలు యంత్రాంగం పైలట్‌లో అత్యంత ముఖ్యమైన అసంపూర్ణ భాగంగా మిగిలింది — నాలుగు మండలాలకు సంబంధించి ఒక్క విచారణ మాత్రమే జరిగింది. GO యొక్క బహుళ-స్థాయి నిర్మాణం అమలులోకి తీసుకురావాలి.' },
      paragraphs: [
        { en: 'The appeal mechanism remained the most significant unfinished piece of the Pilot, with only one appeal hearing held, covering only four mandals. The GO\'s multi-tier appeal structure addresses this gap structurally; for it to be meaningful, scheduling must be prioritised at par with the Prajavani sessions themselves, and Department-level Presiding Officers for appeals must be identified and planned in advance.', te: 'అప్పీలు యంత్రాంగం పైలట్‌లో అత్యంత ముఖ్యమైన అసంపూర్ణ భాగంగా మిగిలింది — నాలుగు మండలాలకు సంబంధించి ఒక్క అప్పీలు విచారణ మాత్రమే జరిగింది. GO యొక్క బహుళ-స్థాయి అప్పీలు నిర్మాణం ఈ లోటును నిర్మాణాత్మకంగా పరిష్కరిస్తుంది; అది అర్థవంతంగా ఉండాలంటే, షెడ్యూలింగ్‌కు ప్రజావాణి సెషన్‌లతో సమానంగా ప్రాధాన్యత ఇవ్వాలి, అప్పీళ్ల కోసం శాఖ-స్థాయి ప్రెసైడింగ్ ఆఫీసర్లను ముందుగానే గుర్తించి ప్రణాళిక చేయాలి.' },
        { en: 'The case of Geddam Dhavu (Section 6.1) illustrates the institutional value of a working appeal forum: a five-year-old revenue records error, which had stalled even after entering the Pilot, was resolved only when the full history was examined at the Collector Appeal and a time-bound direction was issued.', te: 'గెడం ధావు కేసు (సెక్షన్ 6.1) పనిచేసే అప్పీలు ఫోరం యొక్క సంస్థాగత విలువను చూపిస్తుంది: ఐదేళ్ల పాత రెవెన్యూ రికార్డుల తప్పిదం — పైలట్‌లోకి ప్రవేశించిన తర్వాత కూడా స్థంభించిపోయింది — కలెక్టర్ అప్పీలులో పూర్తి చరిత్ర పరిశీలించి సమయ-బద్ధ ఆదేశం జారీ అయినప్పుడే పరిష్కారమైంది.' },
        { en: 'A functional appeal process also intensifies the substantive role of the District and State Prajavanis. With qualitative hearings anchored at the Mandal/Division level, the upper tiers gain the space to engage seriously with the evidence — Mandal and Division ATRs, written remarks from earlier hearings, departmental responses on policy-level issues — rather than functioning as another counter for registration. District and State Prajavani sessions must be planned and scheduled with due advance notice to both citizens and officers, so Department officers have time to study the file and citizens travelling up the ladder can plan their visit. Not every citizen will travel the full ladder from Mandal to State — but for those who do, serious review at each level will improve individual outcomes and surface structural and policy-level gaps that no individual ATR can capture.', te: 'పనిచేసే అప్పీలు ప్రక్రియ జిల్లా మరియు రాష్ట్ర ప్రజావాణుల వాస్తవిక పాత్రను కూడా పెంచుతుంది. గుణాత్మక విచారణలు మండల/డివిజన్ స్థాయిలో స్థిరపడితే, ఉన్నత స్థాయులకు సాక్ష్యంతో — మండల, డివిజన్ ATRలు, మునుపటి విచారణల వ్రాతపూర్వక వ్యాఖ్యలు, విధాన-స్థాయి సమస్యలపై శాఖల ప్రతిస్పందనలు — తీవ్రంగా నిమగ్నమయ్యే అవకాశం దొరుకుతుంది, కేవలం నమోదుకు మరో కౌంటర్‌గా పనిచేయడానికి కాదు. జిల్లా మరియు రాష్ట్ర ప్రజావాణి సెషన్‌లను పౌరులకు మరియు అధికారులకు తగిన ముందస్తు సూచనతో ప్రణాళిక చేసి షెడ్యూల్ చేయాలి, తద్వారా శాఖల అధికారులకు ఫైలు అధ్యయనానికి సమయం, పైకి ప్రయాణించే పౌరులకు తమ సందర్శనను ప్రణాళిక చేసుకునే అవకాశం దొరుకుతుంది. ప్రతి పౌరుడూ మండల నుండి రాష్ట్ర వరకు పూర్తి నిచ్చెన ప్రయాణించరు — కానీ ప్రయాణించేవారికి, ప్రతి స్థాయిలో తీవ్ర సమీక్ష వ్యక్తిగత ఫలితాలను మెరుగుపరుస్తుంది, ఏ ఒక్క ATR పట్టుకోలేని నిర్మాణాత్మక మరియు విధాన-స్థాయి లోటులను బయటపెడుతుంది.' },
      ],
    },
    {
      num: '07', priority: 'Critical',
      title: { en: 'Access to Information', te: 'సమాచారం పొందే హక్కు' },
      lead: { en: 'The biggest hurdle for those seeking entitlements is a lack of clarity on application status, reasons for rejection, or requirements. Proactive disclosure is mandated under Section 4(2) of the RTI Act.', te: 'హక్కులు కోరేవారికి అతిపెద్ద అడ్డంకి దరఖాస్తు స్థితి, తిరస్కరణ కారణాలు, లేదా అవసరాలపై స్పష్టత లేకపోవడం. చురుకైన బహిర్గతం RTI చట్టం సెక్షన్ 4(2) కింద తప్పనిసరి.' },
      paragraphs: [
        { en: 'The most significant hurdle for those seeking entitlements is a lack of clarity regarding application status, reasons for rejection, or specific application requirements. Evidence from the Pilot shows that numerous grievances filed are in fact requests for information, or are uninformed. A proactive disclosure system must be implemented to provide comprehensive details on government schemes — including eligibility criteria, exclusion rules, and real-time updates on the status of applications, rejections and benefit transfers.', te: 'హక్కులు కోరేవారికి అత్యంత ముఖ్యమైన అడ్డంకి దరఖాస్తు స్థితి, తిరస్కరణ కారణాలు, లేదా నిర్దిష్ట దరఖాస్తు అవసరాలపై స్పష్టత లేకపోవడం. దాఖలైన అనేక ఫిర్యాదులు నిజానికి సమాచార అభ్యర్థనలే, లేదా అవగాహన లేకుండా దాఖలైనవి అని పైలట్ సాక్ష్యం చూపిస్తుంది. ప్రభుత్వ పథకాలపై సమగ్ర వివరాలు — అర్హతా ప్రమాణాలు, మినహాయింపు నియమాలు, దరఖాస్తులు, తిరస్కరణలు, ప్రయోజన బదిలీల స్థితిపై రియల్-టైం అప్‌డేట్‌లతో సహా — అందించడానికి చురుకైన బహిర్గత వ్యవస్థను అమలు చేయాలి.' },
        { en: 'Such disclosure is mandated under Section 4(2) of the Right to Information Act, which puts public authorities under an active obligation to provide as much information suo motu to the public at regular intervals, so that the public have minimum resort to the Act to obtain information. Non-disclosure is not only an unnecessary impediment for citizens accessing their legal rights, it is a flagrant violation of the existing mandate under the RTI Act.', te: 'ఇటువంటి బహిర్గతం సమాచార హక్కు చట్టం సెక్షన్ 4(2) కింద తప్పనిసరి — ఇది ప్రజలు సమాచారం కోసం చట్టాన్ని కనిష్టంగా ఆశ్రయించేలా, ప్రజా అధికారులు క్రమ వ్యవధులలో వీలైనంత ఎక్కువ సమాచారాన్ని తమంతట తాముగా ప్రజలకు అందించే చురుకైన బాధ్యతలో ఉంచుతుంది. సమాచారం బహిర్గతం చేయకపోవడం పౌరులు తమ చట్టపరమైన హక్కులు పొందడానికి అనవసర అడ్డంకి మాత్రమే కాదు, RTI చట్టం కింద ఉన్న నిబంధనను స్పష్టంగా ఉల్లంఘించడం.' },
        { en: 'A coordinated effort is already underway. On 24 April 2025, the Special Chief Secretary, ITE&C, issued guidelines establishing the Praja Soochana Portal — a web-based platform disclosing transaction-based information about government programmes and public institutions in real time, free of cost. It builds on precedents such as Rajasthan\'s Jan Soochna Portal and Karnataka\'s Mahiti Kanaja. In the first phase, ten schemes and programmes across eight Line Departments have been selected for disclosure. The State should prioritise expanding Praja Soochana in tandem with Prajavani.', te: 'సమన్వయ ప్రయత్నం ఇప్పటికే నడుస్తోంది. 24 ఏప్రిల్ 2025న, ప్రత్యేక ముఖ్య కార్యదర్శి, ITE&C, ప్రజా సూచన పోర్టల్ ఏర్పాటుకు మార్గదర్శకాలు జారీ చేశారు — ఇది ప్రభుత్వ కార్యక్రమాలు మరియు ప్రజా సంస్థల గురించి లావాదేవీ-ఆధారిత సమాచారాన్ని రియల్-టైంలో, ఉచితంగా వెల్లడించే వెబ్ ప్లాట్‌ఫారం. ఇది రాజస్థాన్ జన్ సూచన పోర్టల్, కర్ణాటక మహితి కనజ వంటి ముందస్తు దాఖలాలపై నిర్మించబడింది. మొదటి దశలో, ఎనిమిది లైన్ శాఖలలో పది పథకాలు మరియు కార్యక్రమాలు బహిర్గతం కోసం ఎంపిక చేయబడ్డాయి. ప్రజావాణితో పాటు ప్రజా సూచనను విస్తరించడానికి రాష్ట్రం ప్రాధాన్యత ఇవ్వాలి.' },
      ],
    },
    {
      num: '08', priority: 'Critical',
      title: { en: 'Developing Tech from the Citizen\'s Perspective', te: 'పౌరుని దృక్కోణం నుండి టెక్నాలజీని అభివృద్ధి చేయడం' },
      lead: { en: 'Technology can act as an enabler or a bottleneck. Minor Pilot tech changes vastly improved responsiveness; missing features dampened accountability. A public dashboard and open-sourcing are needed.', te: 'టెక్నాలజీ ఎనేబ్లర్‌గా లేదా అడ్డంకిగా పనిచేయగలదు. చిన్న పైలట్ టెక్ మార్పులు ప్రతిస్పందనను బాగా మెరుగుపరిచాయి; లేని ఫీచర్లు జవాబుదారీతనాన్ని తగ్గించాయి. పబ్లిక్ డాష్‌బోర్డ్ మరియు ఓపెన్-సోర్సింగ్ అవసరం.' },
      paragraphs: [
        { en: 'Technology can act as an enabler as well as a potential bottleneck of any administrative initiative. Minor tech-based changes during the Pilot — category-specific fields for grievance filing, and pre-formatted hearing receipts — immensely improved the responsiveness of the system. At the same time, failure to incorporate features such as auto-escalation and a dedicated module for appeal and review continued to dampen accountability.', te: 'టెక్నాలజీ ఏ పరిపాలనా కార్యక్రమానికైనా ఎనేబ్లర్‌గా అలాగే సంభావ్య అడ్డంకిగా పనిచేయగలదు. పైలట్ సమయంలో చిన్న టెక్-ఆధారిత మార్పులు — ఫిర్యాదు దాఖలుకు వర్గం-నిర్దిష్ట ఫీల్డ్‌లు, ముందుగా-ఫార్మాట్ చేసిన విచారణ రసీదులు — వ్యవస్థ ప్రతిస్పందనను అమితంగా మెరుగుపరిచాయి. అదే సమయంలో, స్వయంచాలక ఎస్కలేషన్ మరియు అప్పీలు, సమీక్ష కోసం ప్రత్యేక మాడ్యూల్ వంటి ఫీచర్లను చేర్చకపోవడం జవాబుదారీతనాన్ని తగ్గిస్తూనే ఉంది.' },
        { en: 'Several specific design priorities follow from the Pilot: real-time GRO assignment on grievance registration, with the citizen clearly informed of the assignment; symmetric real-time status access for officers and citizens; correction of the CM Prajavani practice of requiring administrative approval before information is shared with the citizen, which inverts accountability; and proactive citizen communication through WhatsApp, email and mandatory SMS at each step, in line with the standard set by banks, schools and other public agencies.', te: 'పైలట్ నుండి అనేక నిర్దిష్ట డిజైన్ ప్రాధాన్యతలు వస్తాయి: ఫిర్యాదు నమోదుపై రియల్-టైం GRO నియామకం, పౌరునికి నియామకం గురించి స్పష్టంగా తెలియజేయడం; అధికారులకు మరియు పౌరులకు సమకాలిక రియల్-టైం స్థితి యాక్సెస్; పౌరునికి సమాచారం పంచకముందు పరిపాలనా ఆమోదం అవసరమనే CM ప్రజావాణి పద్ధతిని సరిదిద్దడం, ఎందుకంటే అది జవాబుదారీతనాన్ని తలకిందులు చేస్తుంది; మరియు బ్యాంకులు, పాఠశాలలు ఏర్పరిచిన ప్రమాణం మేరకు WhatsApp, ఇమెయిల్ మరియు ప్రతి దశలో తప్పనిసరి SMS ద్వారా చురుకైన పౌర సమాచారం.' },
        { en: 'A public dashboard must be established for sharing the real-time status of grievance redress across geographies and departments. Filing volumes, pendency, ATR timeliness, appeal outcomes and resolution rates should all be visible to complainants, citizens, civil society and the administration alike. Such a dashboard makes the system accessible to the citizen, creates symmetric accountability across the administrative ladder, and surfaces geographic, departmental and scheme-specific patterns that no individual ATR or quarterly review can reveal. The CPGRAMS dashboard offers a working precedent.', te: 'భౌగోళికాలు మరియు శాఖల వ్యాప్తంగా ఫిర్యాదు పరిష్కార రియల్-టైం స్థితిని పంచుకోవడానికి పబ్లిక్ డాష్‌బోర్డ్ ఏర్పాటు చేయాలి. దాఖలు పరిమాణాలు, పెండింగ్, ATR సకాలికత, అప్పీలు ఫలితాలు మరియు పరిష్కార రేట్లు — అన్నీ ఫిర్యాదుదారులకు, పౌరులకు, పౌర సమాజానికి, పరిపాలనకు సమానంగా కనిపించాలి. ఇటువంటి డాష్‌బోర్డ్ వ్యవస్థను పౌరునికి అందుబాటులోకి తెస్తుంది, పరిపాలనా నిచ్చెన అంతటా సమకాలిక జవాబుదారీతనం సృష్టిస్తుంది, ఏ ఒక్క ATR లేదా త్రైమాసిక సమీక్ష బయటపెట్టలేని భౌగోళిక, శాఖాపరమైన, పథక-నిర్దిష్ట నమూనాలను బయటపెడుతుంది. CPGRAMS డాష్‌బోర్డ్ ఒక పనిచేసే ముందస్తు దాఖలాను అందిస్తుంది.' },
        { en: 'A structured in-portal channel for citizens and officers to report portal issues, acted upon in a time-bound manner, should be built in. The Government should also move towards open-sourcing the non-sensitive components of the system — workflow engines, categorisation frameworks, APIs, dashboards, technical documentation — drawing on Indian precedents such as the DIGIT platform, while protecting all sensitive citizen data and infrastructure details. Such an approach would reduce vendor lock-in, lower long-term costs, and open the system to contribution by civil society, universities and technology partners.', te: 'పౌరులు మరియు అధికారులు పోర్టల్ సమస్యలను నివేదించడానికి నిర్మాణాత్మక పోర్టల్-అంతర్గత చానెల్‌ను నిర్మించాలి, ఆ నివేదికలపై సమయ-బద్ధంగా చర్య తీసుకోవాలి. ప్రభుత్వం వ్యవస్థ యొక్క సున్నితం కాని భాగాలను — వర్క్‌ఫ్లో ఇంజిన్‌లు, వర్గీకరణ ఫ్రేమ్‌వర్క్‌లు, APIలు, డాష్‌బోర్డ్‌లు, సాంకేతిక డాక్యుమెంటేషన్ — DIGIT ప్లాట్‌ఫారం వంటి భారతీయ ముందస్తు దాఖలాలను ఆధారం చేసుకొని ఓపెన్-సోర్స్ చేయడం వైపు కదలాలి, అన్ని సున్నిత పౌర డేటా మరియు మౌలికసదుపాయ వివరాలను రక్షిస్తూ. ఇటువంటి విధానం వెండర్ లాక్-ఇన్‌ను తగ్గిస్తుంది, దీర్ఘకాలిక ఖర్చులను తగ్గిస్తుంది, పౌర సమాజం, విశ్వవిద్యాలయాలు మరియు సాంకేతిక భాగస్వాముల తోడ్పాటుకు వ్యవస్థను తెరుస్తుంది.' },
      ],
    },
    {
      num: '09', priority: 'Critical',
      title: { en: 'An Accountability Law', te: 'జవాబుదారీతనం చట్టం' },
      lead: { en: 'The paramount strategic goal: a comprehensive Grievance Redressal Law making the right to be heard, to written remarks, to time-bound redressal, and to appeal fully enforceable statutory rights.', te: 'అత్యున్నత వ్యూహాత్మక లక్ష్యం: విచారణ హక్కు, వ్రాతపూర్వక వ్యాఖ్యల హక్కు, సమయ-బద్ధ పరిష్కార హక్కు, మరియు అప్పీలు హక్కును పూర్తిగా అమలుచేయదగిన చట్టబద్ధ హక్కులుగా చేసే సమగ్ర ఫిర్యాదు పరిష్కార చట్టం.' },
      paragraphs: [
        { en: 'The paramount strategic goal remains the progression toward enacting a comprehensive Grievance Redressal Law, which would establish the right to be heard, the right to written remarks, the right to time-bound redressal, and the right to appeal as fully enforceable statutory rights for every citizen.', te: 'అత్యున్నత వ్యూహాత్మక లక్ష్యం సమగ్ర ఫిర్యాదు పరిష్కార చట్టం రూపొందించడం వైపు పురోగమనమే — ఇది విచారణ హక్కు, వ్రాతపూర్వక వ్యాఖ్యల హక్కు, సమయ-బద్ధ పరిష్కార హక్కు, మరియు అప్పీలు హక్కును ప్రతి పౌరునికి పూర్తిగా అమలుచేయదగిన చట్టబద్ధ హక్కులుగా స్థాపిస్తుంది.' },
        { en: 'Such a legislative framework is essential to transition the system from reliance on administrative discretion and procedural disposal toward a rights-based, citizen-centric accountability framework — and to ensure the gains institutionalised by GO Ms No. 3 are protected against future administrative drift.', te: 'ఇటువంటి శాసన నిర్మాణం వ్యవస్థను పరిపాలనా విచక్షణ మరియు ప్రక్రియా పరిష్కారంపై ఆధారపడటం నుండి హక్కు-ఆధారిత, పౌర-కేంద్రీకృత జవాబుదారీ నిర్మాణం వైపు మార్చడానికి అవసరం — మరియు GO Ms No. 3 ద్వారా సంస్థాగతం చేయబడిన లాభాలు భవిష్యత్ పరిపాలనా ప్రవాహానికి వ్యతిరేకంగా రక్షించబడేలా చూడటానికి.' },
        { en: 'There have been previous efforts toward a legal framework for time-bound grievance redressal and public accountability — the Bihar Right to Public Grievance Redressal Act, 2015; the Rajasthan Right to Hearing Act, 2012; and the Right of Citizens for Time-Bound Delivery of Goods and Services and Redressal of their Grievances Bill, passed by the Lok Sabha in 2011. It is recommended that the Government of Telangana build on these best practices and incorporate the contemporary lessons of the Adilabad Pilot to introduce a robust, practical and decentralised grievance redressal law for the State.', te: 'సమయ-బద్ధ ఫిర్యాదు పరిష్కారం మరియు ప్రజా జవాబుదారీతనం కోసం చట్టపరమైన నిర్మాణం వైపు గతంలో ప్రయత్నాలు జరిగాయి — బీహార్ రైట్ టు పబ్లిక్ గ్రీవెన్స్ రిడ్రెసల్ యాక్ట్, 2015; రాజస్థాన్ రైట్ టు హియరింగ్ యాక్ట్, 2012; మరియు 2011లో లోక్‌సభ ఆమోదించిన వస్తువులు, సేవల సమయ-బద్ధ బట్వాడా మరియు ఫిర్యాదుల పరిష్కారానికి పౌరుల హక్కు బిల్లు. తెలంగాణ ప్రభుత్వం ఈ ఉత్తమ పద్ధతులపై నిర్మించి, ఆదిలాబాద్ పైలట్ యొక్క సమకాలీన పాఠాలను చేర్చి, రాష్ట్రానికి ఒక బలమైన, ఆచరణాత్మక, వికేంద్రీకృత ఫిర్యాదు పరిష్కార చట్టాన్ని తీసుకురావాలని సిఫార్సు చేయబడింది.' },
      ],
    },
    {
      num: '10', priority: 'High',
      title: { en: 'Institutionalised Role of Civil Society', te: 'పౌర సమాజం యొక్క సంస్థాగత పాత్ర' },
      lead: { en: 'An active collaboration between civil society and government was one of the pillars of the Pilot\'s success. That role must be institutionalised through coordination committees at the State and District levels.', te: 'పౌర సమాజం మరియు ప్రభుత్వం మధ్య చురుకైన సహకారం పైలట్ విజయానికి మూలస్తంభాలలో ఒకటి. ఆ పాత్రను రాష్ట్ర మరియు జిల్లా స్థాయులలో సమన్వయ కమిటీల ద్వారా సంస్థాగతం చేయాలి.' },
      paragraphs: [
        { en: 'One of the pillars that formed the basis of success for the Adilabad Pilot was an active collaboration between civil society and government. While ensuring registration and redressal of grievances within a time-bound manner remains the core obligation of the public administration, the role of civil society organisations was irreplaceable — in capacity building, facilitating people in filing grievances, bringing issues of public concern and priority to the public hearing, and following up on the status of resolutions.', te: 'ఆదిలాబాద్ పైలట్ విజయానికి ఆధారమైన మూలస్తంభాలలో ఒకటి పౌర సమాజం మరియు ప్రభుత్వం మధ్య చురుకైన సహకారం. ఫిర్యాదుల నమోదు మరియు సమయ-బద్ధ పరిష్కారాన్ని నిర్ధారించడం ప్రజా పరిపాలన యొక్క ప్రధాన బాధ్యతగా ఉన్నప్పటికీ, పౌర సంస్థల పాత్ర భర్తీచేయలేనిది — సామర్థ్య నిర్మాణంలో, ప్రజలకు ఫిర్యాదుల దాఖలులో సహాయం చేయడంలో, ప్రజా ప్రాధాన్యత సమస్యలను బహిరంగ విచారణకు తీసుకురావడంలో, మరియు పరిష్కారాల స్థితిని ఫాలో-అప్ చేయడంలో.' },
        { en: 'To build on this learning, it is recommended that the role of CSOs in capacity building and in monitoring the implementation of the GO be ensured — through the setting up of coordination committees at the State and District levels with civil society representation.', te: 'ఈ పాఠంపై నిర్మించడానికి, GO అమలును సామర్థ్య నిర్మాణంలో మరియు పర్యవేక్షణలో పౌర సంస్థల (CSO) పాత్రను నిర్ధారించాలని సిఫార్సు చేయబడింది — పౌర సమాజ ప్రాతినిధ్యంతో రాష్ట్ర మరియు జిల్లా స్థాయులలో సమన్వయ కమిటీలను ఏర్పాటు చేయడం ద్వారా.' },
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
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: '#ff8068', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>{t('GO Components Pending Guidelines', 'మార్గదర్శకాలు పెండింగ్‌లో ఉన్న GO భాగాలు')}</div>
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
          {t('Ten strategic priorities beyond the GO', 'GOకి అతీతంగా పది వ్యూహాత్మక ప్రాధాన్యతలు')}
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
