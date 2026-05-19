// ════════════════════════════════════════════════════════════════════════════
// SECTION 7: DASHBOARD — Categories, Geography, Resolution Quality, Timeliness
// ════════════════════════════════════════════════════════════════════════════

function Dashboard() {
  useLang();
  const printMode = usePrintMode();
  const [tab, setTab] = React.useState('overview');
  const [excludeGasCrop, setExcludeGasCrop] = React.useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'categories', label: 'Categories' },
    { id: 'departments', label: 'Departments' },
    { id: 'resolution', label: 'Resolution Quality' },
    { id: 'timeliness', label: 'Timelines' },
  ];

  // Department totals (12,110)
  const departments = [
    { name: 'Consumer Affairs, Food & Civil Supplies', count: 5111, pct: 42.20, color: C.amber, top: 'Gas Subsidy (4,856)' },
    { name: 'Agriculture and Co-operation',           count: 2275, pct: 18.79, color: C.teal,  top: 'PM Kisan (1,322), Crop Loan Waiver (918)' },
    { name: 'Panchayat Raj and Rural Development',    count: 2153, pct: 17.78, color: '#5a7ec4',top: 'MGNREGA (1,045), NFBS (576), Pensions (492)' },
    { name: 'Energy',                                 count: 1442, pct: 11.91, color: '#c47d2e',top: 'Gruhajyothi (1,366)' },
    { name: 'Revenue',                                count: 639,  pct: 5.28,  color: '#8b6bb1',top: 'Land Issues (520), Unnatural Deaths, Certificates' },
    { name: 'Tribal Welfare',                         count: 342,  pct: 2.82,  color: '#4a9a60',top: 'Individual Forest Rights (342)' },
    { name: 'Housing',                                count: 148,  pct: 1.22,  color: C.red,    top: 'Indiramma Indlu (148)' },
  ];

  // Top categories
  const topCategories = [
    { name: 'Gas Subsidy',           dept: 'F&CS',    count: 4856, pct: 40.10, color: C.amber },
    { name: 'Gruhajyothi',           dept: 'Energy',  count: 1366, pct: 11.28, color: '#c47d2e' },
    { name: 'PM Kisan',              dept: 'Agriculture',      count: 1322, pct: 10.92, color: C.teal },
    { name: 'MGNREGA',               dept: 'PR&RD',   count: 1045, pct: 8.63,  color: '#5a7ec4' },
    { name: 'Crop Loan Waiver < ₹2L',dept: 'Agriculture',      count: 918,  pct: 7.58,  color: C.tealLight },
    { name: 'NFBS',                  dept: 'PR&RD',   count: 576,  pct: 4.76,  color: '#7794c8' },
    { name: 'Land Issues',           dept: 'Revenue', count: 520,  pct: 4.29,  color: '#8b6bb1' },
    { name: 'Pensions',              dept: 'PR&RD',   count: 492,  pct: 4.06,  color: '#9aafd6' },
    { name: 'IFR',                   dept: 'Tribal',  count: 342,  pct: 2.82,  color: '#4a9a60' },
    { name: 'Ration Card',           dept: 'F&CS',    count: 255,  pct: 2.11,  color: C.amberLight },
    { name: 'Indiramma Indlu',       dept: 'Housing', count: 148,  pct: 1.22,  color: C.red },
    { name: 'Service Issue (Energy)',dept: 'Energy',  count: 63,   pct: 0.52,  color: '#d4a06a' },
    { name: 'Other Land/Drinking/Survey/Misc', dept: 'Other', count: 207, pct: 1.71, color: C.textLight },
  ];

  // Resolution categories (5,000 reviewed)
  const resolutionFull = [
    { name: 'Positively Disposed',     count: 2086, pct: 41.72, color: C.teal,     desc: 'Citizen receiving entitlement, ineligible, civil dispute, or citizen info awaited' },
    { name: 'Sent to Next Level',      count: 236,  pct: 4.72,  color: '#5a7ec4',  desc: 'Sent to district (195) or state (41) level for further action' },
    { name: 'Collector Appeal',        count: 1006, pct: 20.12, color: C.amber,    desc: 'Marked for appeal — no ATR (520) or non-compliant ATR (486)' },
    { name: 'Policy Decision Awaited', count: 1238, pct: 24.76, color: '#c45a3a',  desc: 'State-level policy decision required — mostly Gas Subsidy, Crop Loan Waiver' },
    { name: 'Others',                  count: 434,  pct: 8.68,  color: C.textLight,desc: 'Burden shifted, pending at mandal, wrong category' },
  ];

  // Excluding Gas Subsidy + Crop Loan Waiver
  const resolutionExcl = [
    { name: 'Positively Disposed',     count: 1814, pct: 50.05, color: C.teal },
    { name: 'Sent to Next Level',      count: 187,  pct: 5.16,  color: '#5a7ec4' },
    { name: 'Collector Appeal',        count: 821,  pct: 22.65, color: C.amber },
    { name: 'Policy Decision Awaited', count: 373,  pct: 10.29, color: '#c45a3a' },
    { name: 'Others',                  count: 429,  pct: 11.83, color: C.textLight },
  ];

  const positivelyDealtWithFull = 66.56;
  const positivelyDealtWithExcl = 77.86;

  return (
    <section id="dashboard" data-screen-label="10 Dashboard" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Pilot Findings', 'పైలట్ ఫలితాలు')}</div>
        <h2 style={SS.sectionTitle}>{t('Grievance dashboard', 'ఫిర్యాదు డాష్‌బోర్డ్')}</h2>
        <p style={{ ...SS.sectionLead, marginBottom: 12 }}>
          {t('Data from the Pilot\'s master review dataset. Total:', 'పైలట్ మాస్టర్ సమీక్షా డేటాసెట్ నుండి డేటా. మొత్తం:')} <strong>12,110 {t('grievances', 'ఫిర్యాదులు')}</strong> {t('registered Jan 2025 – Jan 2026. Analytical dataset:', 'జనవరి 2025 – జనవరి 2026లో నమోదు చేయబడింది. విశ్లేషణాత్మక డేటాసెట్:')} <strong>5,000 {t('grievances', 'ఫిర్యాదులు')}</strong> {t('followed up by the field team led by SSAAT resource persons, Kisan Mitra, and civil society volunteers, and reviewed by a desk review team according to the 11-status framework.', 'SSAAT వనరుల వ్యక్తులు, కిసాన్ మిత్ర, మరియు పౌర సమాజ వాలంటీర్లు నేతృత్వం వహించిన క్షేత్ర బృందం చేత ఫాలో-అప్ చేయబడి, 11-స్థితి ఫ్రేమ్‌వర్క్ ప్రకారం డెస్క్ సమీక్షా బృందం సమీక్షించింది.')}
        </p>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight, marginBottom: 32 }}>
          Cut-off: 31 January 2026. Live data at prajavani.cgg.gov.in (Adilabad Pilot tab).
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: `2px solid ${C.border}`, marginBottom: 32, overflowX: 'auto' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: '10px 22px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 14,
              fontWeight: tab===t.id?700:500, color: tab===t.id?C.navy:C.textLight,
              background: 'none', border: 'none', borderBottom: `2px solid ${tab===t.id?C.amber:'transparent'}`,
              marginBottom: -2, cursor: 'pointer', whiteSpace: 'nowrap',
            }}>{t.label}</button>
          ))}
        </div>

        {/* Overview */}
        <TabPanel id="overview" label={t('Overview', 'అవలోకనం')} active={tab === 'overview'} printMode={printMode}>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
              {[
                { label: 'Total grievances filed', value: '12,110', note: 'Jan 2025 – Jan 2026' },
                { label: 'Followed up by SSAAT + CS', value: '5,900', note: 'as of 18 April 2026' },
                { label: 'Reviewed (analytical sample)', value: '5,000', note: 'Followed up + lifecycle review' },
              ].map((s, i) => (
                <div key={i} style={{ ...SS.card, background: C.white }}>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 30, fontWeight: 700, color: C.navy }}>{s.value}</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, marginTop: 4 }}>{s.label}</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textLight, marginTop: 2 }}>{s.note}</div>
                </div>
              ))}
            </div>

            <div style={{ background: C.white, borderRadius: 4, padding: '24px 28px', border: `1px solid ${C.border}`, marginBottom: 24 }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 14 }}>The headline finding</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.textLight, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>System-reported</div>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 40, fontWeight: 700, color: '#5a7ec4' }}>74%</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid }}>CM Prajavani disposal rate (Dec 2023 – Dec 2025)</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textLight, marginTop: 4 }}>Self-reported by the state portal</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.textLight, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Independently verified</div>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 40, fontWeight: 700, color: C.teal }}>66.56%</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid }}>Adilabad Pilot — "Positively Dealt With"</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textLight, marginTop: 4 }}>Positively Disposed + Sent to Next Level + Appeal — of 5,000 reviewed</div>
                </div>
              </div>
            </div>

            <div style={{ background: `${C.amber}10`, border: `1px solid ${C.amber}40`, borderRadius: 4, padding: '18px 24px' }}>
              <span style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: C.amber }}>Why the comparison is unfair to the Pilot: </span>
              <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid }}>
                The 66.56% number is what survives independent field verification. The 74% comparison number is not field-verified. If the same review framework were applied to CM Prajavani, the gap would likely be much wider.
              </span>
            </div>
          </div>
        </TabPanel>

        {/* Categories */}
        <TabPanel id="categories" label={t('Categories', 'వర్గాలు')} active={tab === 'categories'} printMode={printMode}>
          <div>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7, marginBottom: 24, maxWidth: 760 }}>
              The Pilot covered <strong>20 categories across 7 departments</strong>. Gas Subsidy and Gruhajyothi alone — the new government's flagship welfare schemes — account for <strong>over 50% of all grievances</strong>. This dominance can be attributed to near-universal applicability, government advertising, and recent introduction.
            </p>

            <div style={{ marginBottom: 12, fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, color: C.navy, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Top categories by volume (of 12,110 grievances)</div>
            {topCategories.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <div style={{ width: 200, flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 600, color: C.text }}>{c.name}</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, color: C.textLight }}>{c.dept}</div>
                </div>
                <div style={{ flexGrow: 1, background: C.bgAlt, borderRadius: 4, height: 14, overflow: 'hidden' }}>
                  <div style={{ width: `${(c.count/4856)*100}%`, height: '100%', background: c.color, borderRadius: 4 }} />
                </div>
                <div style={{ width: 90, textAlign: 'right', fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, flexShrink: 0 }}>
                  <span style={{ fontWeight: 700 }}>{c.count.toLocaleString()}</span>
                  <span style={{ fontSize: 10, color: C.textLight, marginLeft: 6 }}>{c.pct.toFixed(1)}%</span>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 32, padding: '20px 28px', background: C.white, border: `1px solid ${C.border}`, borderRadius: 4 }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Observation: concentration of grievances as a barometer</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.65 }}>
                The dominance of Mahalaxmi Gas Subsidy was unexpected. Initially it was felt that the Pilot need not cover Mahalaxmi Gas Subsidy as it was believed that the scheme was working well since its 2024 launch. The 1,000+ Mahalaxmi grievances in the first weeks told a different story: a complex backend involving multiple departments, where digitisation errors prevented eligible beneficiaries from receiving subsidies despite the state spending hundreds of crores on implementation.
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Departments */}
        <TabPanel id="departments" label={t('Departments', 'శాఖలు')} active={tab === 'departments'} printMode={printMode}>
          <div>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7, marginBottom: 24, maxWidth: 760 }}>
              Grievances are heavily concentrated within a few departments. Consumer Affairs (driven by Gas Subsidy) leads at 42% — followed by Agriculture (PM Kisan, Crop Loan Waiver) and Panchayat Raj & RD (MGNREGA, NFBS, Pensions).
            </p>
            {departments.map((d, i) => (
              <div key={i} style={{ marginBottom: 14, background: C.white, borderRadius: 4, padding: '18px 24px', border: `1px solid ${C.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 15, fontWeight: 700, color: C.navy }}>{d.name}</div>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight, marginTop: 2 }}>Top: {d.top}</div>
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, textAlign: 'right' }}>
                    <span style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 700, color: d.color }}>{d.count.toLocaleString()}</span>
                    <span style={{ marginLeft: 6, color: C.textLight }}>{d.pct.toFixed(1)}%</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Bar value={d.count} max={5111} color={d.color} height={10} />
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* Resolution Quality */}
        <TabPanel id="resolution" label={t('Resolution Quality', 'పరిష్కార నాణ్యత')} active={tab === 'resolution'} printMode={printMode}>
          <div>
            <div style={{ background: C.navy, borderRadius: 4, padding: '22px 28px', marginBottom: 24 }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 16, color: C.white, marginBottom: 8 }}>The 5-category review framework</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                The Pilot intentionally moved away from the binary "Disposed / Pending" framework used in official dashboards. Operating from the view that <strong style={{ color: C.amberLight }}>administrative disposal is not the same as resolution</strong>, review statuses break down the entire spectrum of stages between filing and substantive outcome. The 11 desk-review statuses (see the table in the Follow-up section) are condensed into 5 categories for ease of presentation. Of 5,000 grievances reviewed:
              </div>
            </div>

            {/* Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid }}>Show:</div>
              <button onClick={() => setExcludeGasCrop(false)} style={{
                padding: '6px 14px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 600,
                color: !excludeGasCrop ? C.white : C.textMid, background: !excludeGasCrop ? C.navy : C.white,
                border: `1px solid ${!excludeGasCrop ? C.navy : C.border}`, borderRadius: 3, cursor: 'pointer'
              }}>All 5,000 reviewed</button>
              <button onClick={() => setExcludeGasCrop(true)} style={{
                padding: '6px 14px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 600,
                color: excludeGasCrop ? C.white : C.textMid, background: excludeGasCrop ? C.navy : C.white,
                border: `1px solid ${excludeGasCrop ? C.navy : C.border}`, borderRadius: 3, cursor: 'pointer'
              }}>Excluding Gas Subsidy + Crop Loan Waiver</button>
            </div>

            <div style={{ background: C.white, borderRadius: 4, padding: '24px 28px', border: `1px solid ${C.border}`, marginBottom: 28 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 48, fontWeight: 700, color: C.teal, lineHeight: 1 }}>{excludeGasCrop ? positivelyDealtWithExcl.toFixed(2) : positivelyDealtWithFull.toFixed(2)}%</div>
                <div>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 17, fontWeight: 700, color: C.navy }}>Positively Dealt With</div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, marginTop: 2 }}>Positively Disposed + Sent to Next Level + Collector Appeal — of {excludeGasCrop ? '3,624' : '5,000'} reviewed</div>
                </div>
              </div>

              {(excludeGasCrop ? resolutionExcl : resolutionFull).map((r, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, fontWeight: 600, color: C.text }}>{r.name}</div>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid }}>
                      <span style={{ fontWeight: 700, color: r.color }}>{r.count.toLocaleString()}</span>
                      <span style={{ marginLeft: 8 }}>{r.pct.toFixed(2)}%</span>
                    </div>
                  </div>
                  <Bar value={r.pct} max={50} color={r.color} height={10} />
                  {!excludeGasCrop && r.desc && (
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight, marginTop: 4 }}>{r.desc}</div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: `${C.amber}10`, border: `1px solid ${C.amber}40`, borderRadius: 4, padding: '20px 26px' }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: C.amber, marginBottom: 8 }}>What the Excluding Gas Subsidy + Crop Loan Waiver toggle reveals</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7 }}>
                For every one Gas Subsidy grievance resolved, <strong>nine remain "Awaiting Policy Decision"</strong>. For Crop Loan Waivers, the ratio is <strong>1:24</strong>. Excluding these two — which represent the largest unresolved state-policy blockers — pushes the "Positively Dealt With" rate from 66.56% to <strong>77.86%</strong>. Policy Decision Awaited drops from 24.76% to just 10.29%.
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Timelines */}
        <TabPanel id="timeliness" label={t('Timelines', 'సమయపాలన')} active={tab === 'timeliness'} printMode={printMode}>
          <div>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7, marginBottom: 18, maxWidth: 760 }}>
              ATRs were mandated within 30 days. The data shows significant variations in the average time taken to file ATRs. Specifically, the average time taken ranges from shorter durations of <strong>16 days for Shaadi Mubaarak</strong> and <strong>24 days for Gruhajyothi</strong>, to significantly extended timelines of <strong>82 days for Survey Issues</strong>, <strong>108 days for Unnatural Deaths</strong>, and a peak of <strong>175 days for Drinking Water Issues</strong>.
            </p>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7, marginBottom: 24, maxWidth: 760 }}>
              These variations stem from a combination of platform design constraints, procedural gaps where Standard Operating Procedures (SoPs) were lacking for certain categories, administrative challenges and ambiguities at the policy level, and the schedule of public hearings. In addition, the gaps in conducting a District and State-level review of disposal of grievances further exacerbated the delays.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 24 }}>
              {[
                { label: 'Shaadi Mubaarak',        days: 16,  color: C.teal },
                { label: 'Gruhajyothi',            days: 24,  color: C.teal },
                { label: 'Survey Issues',          days: 82,  color: C.amber },
                { label: 'Unnatural Deaths',       days: 108, color: C.red },
                { label: 'Drinking Water Issues',  days: 175, color: C.red },
              ].map((s, i) => (
                <div key={i} style={{ ...SS.card, background: C.white }}>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight, marginBottom: 4 }}>Average ATR time</div>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 28, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.days} <span style={{ fontSize: 14, color: C.textLight, fontWeight: 400 }}>days</span></div>
                  <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, marginTop: 8 }}>{s.label}</div>
                  <div style={{ marginTop: 10, background: C.bgAlt, borderRadius: 4, height: 6, overflow: 'hidden' }}>
                    <div style={{ width: `${Math.min(100, (s.days / 175) * 100)}%`, height: '100%', background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: `${C.red}10`, border: `1px solid ${C.red}40`, borderRadius: 4, padding: '20px 26px' }}>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: C.red, marginBottom: 6 }}>Auto-escalation gap</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7 }}>
                The Pilot's IT system does not auto-escalate when ATRs aren't filed within 30 days. As a result, the responsibility for chasing pending cases fell to the District Collector's office and civil society volunteers — manually, repeatedly. This is the single largest software gap remaining.
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SECTION 8: POLICY ISSUES — what the Pilot revealed about scheme design
// ════════════════════════════════════════════════════════════════════════════

function PolicyIssues() {
  useLang();
  const printMode = usePrintMode();
  const [active, setActive] = React.useState(0);

  const issues = [
    {
      title: 'Mahalaxmi Gas Subsidy backend',
      severity: 'Critical',
      summary: 'Over 1,000 grievances within first weeks of the Pilot — a flagship scheme failing on backend coordination.',
      details: [
        'Mahalaxmi requires coordination across three departments: Planning (Prajapalana applications), Revenue (ration card verification), Food & Civil Supplies (subsidy administration)',
        'eKYC formalities must be completed by the beneficiary\'s gas distribution agency — and there are at least three gas agencies operating in Telangana',
        'Application required in the woman\'s name; gas connections often in men\'s names; ration cards not updated to reflect all household members',
        'Result: data mismatches across Aadhaar, ration cards, and LPG records became a major cause of exclusion',
        'September 2025: Collector directed panchayat-level camps across the district to verify Prajapalana applications and correct discrepancies',
      ]
    },
    {
      title: 'Pensions stopped at state bifurcation',
      severity: 'High',
      summary: 'Citizens receiving pensions under united Andhra Pradesh had their pensions stopped on Telangana state creation — records never migrated.',
      details: [
        'Old pensioners were left out of Telangana\'s pensioner list — records not migrated to new state databases',
        'Despite repeated follow-up, these pensions were NOT restored as withheld pensions — complainants were instead told to apply for "new" pensions when application windows opened',
        'No statutory mechanism exists for citizens whose entitlements predated state bifurcation',
      ]
    },
    {
      title: 'Old ration cards invalidated',
      severity: 'High',
      summary: 'Ration cards from the united-Andhra period are treated as invalid, cutting off access to PDS rations and all schemes linked to ration cards (including Prajapalana).',
      details: [
        'Telangana does not maintain a continuous process for new ration card applications, despite statutory requirements',
        'Applications accepted only during government-designated windows — creating periodic exclusion',
        'Line departments must now store both old and new ration card numbers in their MIS to match beneficiary data across databases — increasing digitisation errors',
        'Many citizens who lost ration card access also lost access to Mahalaxmi, Gruhajyothi, and other linked schemes',
      ]
    },
    {
      title: 'MGNREGA new job cards held up',
      severity: 'Critical',
      summary: '221 grievances marked for Collector Appeal — GROs cited instructions from "Commissioner RD TS" to hold new job card issuance.',
      details: [
        'Section 5 of MGNREGA Act, read with Schedule II Paragraph 2, requires job cards to be issued within 15 days',
        'GRO ATR remarks repeatedly read: "Presently issue of new job card was holdup as per instructions of Commissioner RD TS"',
        'This violates the statutory deadline',
        'Even worse: the instruction was incorrectly applied to grievances seeking to add names to existing job cards — not new card issuance',
        '128 of 221 appeal cases relate specifically to the "adding name to Jobcard" sub-category',
      ]
    },
    {
      title: 'Crop Loan Waiver — Bank of Maharashtra error',
      severity: 'Critical',
      summary: 'Eligible farmers excluded due to bank data submission errors — disbursement window now closed.',
      details: [
        'The ₹2 lakh cap applies to the household as a whole (not the individual borrower) and includes accrued interest — citizens were often unaware',
        'Eligible farmers with Bank of Maharashtra loans were excluded due to errors in the bank\'s data submission to the government',
        'Pattern emerged across the State, not just Adilabad',
        'Repeatedly raised by Kisan Mitra and Rythu Swarajya Vedika at state level',
        'Benefit disbursement window has now closed — cases await appropriate policy redressal',
        'For every one Crop Loan Waiver case resolved, 24 remain awaiting policy decision',
      ]
    },
    {
      title: 'Spouse Pension GO not uniformly implemented',
      severity: 'Medium',
      summary: 'A 2023 GO providing automatic spouse-pension entitlement is not consistently implemented across districts.',
      details: [
        'Government Order in 2023 provided that a surviving spouse would automatically become eligible for a deceased pensioner\'s old-age pension',
        'Implementation depends largely on local officer awareness and initiative',
        'In Adilabad, intervention was possible because the SNO Prajavani also headed SERP (responsible for social security pensions)',
        'Several pensions restored — but many similar cases across other districts go unaddressed',
        'Many such families are also eligible for NFBS (₹20,000 one-time grant) — citizens encouraged to file additional grievances',
      ]
    },
    {
      title: 'IFR / forest rights centralisation',
      severity: 'High',
      summary: 'Top-down digital systems prevent local correction of forest rights land records — even where errors are acknowledged.',
      details: [
        'In Utnoor mandal, entire villages were incorrectly recorded as "not in possession" of lands they were actively cultivating',
        'District officials acknowledged the errors and found complainants eligible for forest rights titles',
        'But the MIS permits edits only at the state level — district officials could not correct records they had identified as wrong',
        'Even where ROFR lands had been granted, Mandal Revenue Officers cannot correct name / photo / Aadhaar mistakes',
        'Those functions are restricted to higher-level authorities such as PO-ITDA',
        'A clear case of how rigid, top-down digital systems centralise power in ways that undermine decentralised administration',
      ]
    },
  ];

  const severityColor = { Critical: C.red, High: C.amber, Medium: C.teal };
  const c = issues[active];

  return (
    <section id="policy" data-screen-label="11 Policy" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Beyond Individual Cases', 'వ్యక్తిగత కేసులకు మించి')}</div>
        <h2 style={SS.sectionTitle}>{t('Policy-level issues revealed by the Pilot', 'పైలట్ బయటపెట్టిన విధాన-స్థాయి సమస్యలు')}</h2>
        <p style={SS.sectionLead}>
          {t('A well-functioning grievance system is more than a complaint-handler — it\'s a diagnostic mirror of the administration\'s day-to-day functioning. The Pilot revealed systemic flaws in scheme design, data architecture, and inter-departmental coordination that no single GRO could resolve.', 'మంచిగా పనిచేసే ఫిర్యాదు వ్యవస్థ కేవలం ఫిర్యాదులను హ్యాండిల్ చేయడమే కాదు — అది పరిపాలన పనితీరును చూపే ఒక అద్దం. ఏ ఒక్క GRO పరిష్కరించలేని పథక రూపకల్పన, డేటా ఆర్కిటెక్చర్, మరియు అంతర-శాఖా సమన్వయంలోని వ్యవస్థాత్మక లోపాలను పైలట్ బయటపెట్టింది.')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)', gap: 28 }} className={printMode ? 'print-hide' : ''}>
          <div>
            {issues.map((iss, i) => (
              <div key={i}
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? C.navy : C.bg,
                  border: `1px solid ${active === i ? C.navy : C.border}`,
                  borderLeft: `4px solid ${severityColor[iss.severity]}`,
                  borderRadius: 3,
                  padding: '12px 16px',
                  marginBottom: 8,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: active === i ? C.white : C.navy, lineHeight: 1.3 }}>{iss.title}</div>
              </div>
            ))}
          </div>

          <div style={{ ...SS.card, padding: '28px 32px' }}>
            <div style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, fontWeight: 700, color: C.navy, lineHeight: 1.2 }}>{c.title}</h3>
            </div>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 15, color: C.textMid, lineHeight: 1.7, marginBottom: 18, fontStyle: 'italic', borderLeft: `3px solid ${C.amber}`, paddingLeft: 14 }}>{c.summary}</p>
            <ul style={{ paddingLeft: 18 }}>
              {c.details.map((d, i) => (
                <li key={i} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7, marginBottom: 8 }}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Print-only stack: all 8 issues fully unpacked */}
        {printMode && (
          <div className="print-stack">
            {issues.map((iss, i) => (
              <div key={i} className="print-policy-item" style={{ background: C.white, border: `1px solid ${C.border}`, borderLeft: `4px solid ${severityColor[iss.severity]}`, borderRadius: 4, padding: '22px 26px', marginBottom: 18 }}>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: C.navy, lineHeight: 1.3 }}>{iss.title}</div>
                </div>
                <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.6, marginBottom: 12, fontStyle: 'italic', borderLeft: `2px solid ${C.amber}`, paddingLeft: 12 }}>{iss.summary}</p>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {iss.details.map((d, j) => (
                    <li key={j} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7, marginBottom: 5 }}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { Dashboard, PolicyIssues });
