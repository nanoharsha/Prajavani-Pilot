// ════════════════════════════════════════════════════════════════════════════
// SECTION 11: DOCUMENTARY
// ════════════════════════════════════════════════════════════════════════════

function Documentary() {
  useLang();
  return (
    <section id="documentary" data-screen-label="14 Documentary" style={SS.section(C.navy)}>
      <div style={SS.container}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:48, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:C.amberLight, marginBottom:12 }}>Forthcoming</div>
            <h2 style={{ fontFamily:"'Libre Baskerville',serif", fontSize:32, fontWeight:700, color:C.white, lineHeight:1.2, marginBottom:16 }}>Documentary Film</h2>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:17, color:'rgba(255,255,255,0.65)', lineHeight:1.7, marginBottom:24 }}>
              A documentary on the Adilabad Prajavani pilot — the citizens behind the grievances, the officers who responded, and what happens when accountability becomes a public act.
            </p>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>Produced by</div>
            <a href="https://vimeo.com/dilmayafilms" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Libre Baskerville',serif", fontSize:18, fontWeight:700, color:C.amberLight, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              Dilmaya Films
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:'rgba(255,255,255,0.3)', marginTop:6 }}>vimeo.com/dilmayafilms</div>
          </div>

          <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, aspectRatio:'16/9', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:14 }}>
            <div style={{ width:64, height:64, background:'rgba(196,125,46,0.15)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', transition:'all 0.2s' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#f0a84a"><polygon points="6 4 20 12 6 20"/></svg>
            </div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:'rgba(255,255,255,0.55)', textAlign:'center' }}>Documentary in production</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:'rgba(255,255,255,0.25)', textAlign:'center' }}>Produced by Dilmaya Films</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SECTION: ACKNOWLEDGEMENTS  (placed at the top of the page, after Hero)
// ════════════════════════════════════════════════════════════════════════════

function Acknowledgements() {
  useLang();

  // Organisations — verbatim from the report, in the report's order
  const organisations = [
    'ASEEM',
    'Bhumika Women\u2019s Collective',
    'Centre for Community Development (CCD)',
    'Centre for Good Governance (CGG)',
    'Centre for People\u2019s Forestry (CPF)',
    'Dalit Bahujan Front (DBF)',
    'Dhaatri Trust',
    'Digital Empowerment Foundation (DEF)',
    'Deccan Development Society (DDS)',
    'Graamya',
    'Gruhakarmikula Union Telangana State (GUTS)',
    'Human Rights Forum (HRF)',
    'Jan Sahas',
    'LibTech',
    'Mazdoor Kisan Shakti Sangathan (MKSS)',
    'National Alliance of Peoples Movements (NAPM)',
    'National Workers Welfare Trust (NWWT)',
    'Montfort Social Institute (MSI)',
    'MV Foundation',
    'SSAAT, Telangana',
    'PESA Mobilizers of Adilabad District',
    'Pilupu',
    'Rythu Swarajya Vedika',
    'SAFA Society, Hyderabad',
    'Telangana Gig and Platform Workers Union (TGPWU)',
    'Soochna Evum Rozgar Abhiyan (SR Abhiyan)',
  ];

  const reportWriting = ['Abhishek Punetha', 'Akhil Surya', 'Anindita Adhikari', 'Carina Singh', 'Sree Harsha Thanneru'];
  const dataAnalysis  = ['Abhishek Punetha', 'Akhil Surya', 'Purvi Khandelwal', 'Tiara Sharma', 'Vikas Kumar'];

  // Field follow-up team — names + affiliations
  const fieldFollowup = [
    { name: 'Akhil Surya',        org: 'SAFAR' },
    { name: 'Athram Rampalku',    org: 'SSAAT' },
    { name: 'Avula Rakesh',       org: 'Kisan Mitra, RDSS' },
    { name: 'Ch Ramsingh',        org: 'SSAAT' },
    { name: 'D Manikanta',        org: 'SSAAT' },
    { name: 'Gedam Ganeshwar',    org: 'SSAAT' },
    { name: 'Jadi Arjun',         org: 'SSAAT' },
    { name: 'Jadi Chandrashekhar',org: 'SSAAT' },
    { name: 'Jeevan Gone',        org: 'SSAAT' },
    { name: 'Kanaka Anand Kumar', org: 'Kisan Mitra, RDSS' },
    { name: 'Kumra Vinayak',      org: 'Kisan Mitra, RDSS' },
    { name: 'Md. Naveed',         org: 'SSAAT' },
    { name: 'N. Ankitha',         org: 'SSAAT' },
    { name: 'Nikhitha Putta',     org: 'SSAAT' },
    { name: 'P Govind',           org: 'SSAAT' },
    { name: 'Pawar Srinivas',     org: 'SSAAT' },
    { name: 'Pendor Vinod Kumar', org: 'Kisan Mitra, RDSS' },
    { name: 'Pooja',              org: 'SSAAT' },
    { name: 'Ramakanth Mekala',   org: 'Kisan Mitra, RDSS' },
    { name: 'Shaik Jafar',        org: 'SSAAT' },
    { name: 'Shaik Sharukh',      org: 'Kisan Mitra, RDSS' },
    { name: 'Sidam Ramesh',       org: 'Kisan Mitra, RDSS' },
    { name: 'Sidam Laxman',       org: 'SSAAT' },
    { name: 'Srd Anusha',         org: 'Kisan Mitra, RDSS' },
    { name: 'V Bhargavi',         org: 'Kisan Mitra, RDSS' },
    { name: 'Yadaiah',            org: 'Kisan Mitra, RDSS' },
  ];

  const orgCell = {
    fontFamily: "'Source Sans 3',sans-serif",
    fontSize: 14, color: C.text, lineHeight: 1.55,
    padding: '10px 0', borderBottom: `1px solid ${C.border}`
  };

  const sectionHead = {
    fontFamily: "'Source Sans 3',sans-serif",
    fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: C.amber,
    marginBottom: 16, paddingBottom: 10,
    borderBottom: `2px solid ${C.navy}`,
  };

  const nameList = {
    fontFamily: "'Source Sans 3',sans-serif",
    fontSize: 14, color: C.text, lineHeight: 1.85,
  };

  return (
    <section id="acknowledgements" data-screen-label="17 Acknowledgements" style={SS.section(C.bg)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Acknowledgements', 'కృతజ్ఞతలు')}</div>
        <h2 style={SS.sectionTitle}>{t('Acknowledgements', 'కృతజ్ఞతలు')}</h2>
        <p style={SS.sectionLead}>
          {t(
            'This report is the outcome of a collaborative effort involving numerous contributors within and beyond Telangana across government and civil society. The ideas and initiatives reflected here are rooted in the collective experiences of many individuals, campaigns, and organisations committed to strengthening democratic processes and improving grievance redress systems and public access to information.',
            'ఈ నివేదిక తెలంగాణలోనూ, బయటా ప్రభుత్వ మరియు పౌర సమాజంలో ఉన్న అనేక సహకారుల ఉమ్మడి కృషి ఫలితం. ఇందులో ప్రతిబింబించిన ఆలోచనలు మరియు చర్యలు ప్రజాస్వామ్య ప్రక్రియలను బలోపేతం చేయడం, ఫిర్యాదు పరిష్కార వ్యవస్థలను మరియు సమాచార హక్కును మెరుగుపరచడం పట్ల నిబద్ధులైన అనేక వ్యక్తులు, ప్రచారాలు, మరియు సంస్థల ఉమ్మడి అనుభవాల్లో పాతుకుపోయి ఉన్నాయి.'
          )}
        </p>
        <p style={{ ...SS.sectionLead, marginTop: -20, marginBottom: 56, fontStyle: 'italic', color: C.textMid }}>
          {t(
            'While the report writing team accepts responsibility for any limitations in articulation, the concepts and insights presented here are the outcome of shared learning and perseverance across the initiative. We gratefully acknowledge the continued support and contributions of all the organisations and individuals mentioned here. We also thank the District Administration, Adilabad and the Prajavani state team for their commitment and support through this process.',
            'వ్యక్తీకరణలో ఏ పరిమితులకైనా రిపోర్ట్ రైటింగ్ బృందం బాధ్యత వహిస్తుండగా, ఇక్కడ ప్రదర్శితమైన భావనలు మరియు అంతర్దృష్టులు ఈ ఉద్యమంలో సాగిన ఉమ్మడి అభ్యాసం మరియు పట్టుదల ఫలితం. ఇక్కడ పేర్కొన్న అన్ని సంస్థలు మరియు వ్యక్తుల నిరంతర మద్దతుకు మరియు సహకారాలకు మేము కృతజ్ఞతలతో అంగీకరిస్తున్నాము. ఈ ప్రక్రియ ద్వారా జిల్లా పరిపాలన, ఆదిలాబాద్ మరియు ప్రజావాణి రాష్ట్ర బృందం ఇచ్చిన నిబద్ధత మరియు మద్దతుకు మేము ధన్యవాదాలు తెలుపుతున్నాము.'
          )}
        </p>

        {/* Organisations — two-column list */}
        <div style={sectionHead}>{t('Organisations', 'సంస్థలు')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 40, marginBottom: 24 }}>
          {organisations.map((o, i) => (
            <div key={i} style={orgCell}>{o}</div>
          ))}
        </div>

        {/* Coordination note */}
        <div style={{
          background: C.navy, color: C.white, borderRadius: 4,
          padding: '22px 28px', marginBottom: 64,
          fontFamily: "'Libre Baskerville',serif", fontSize: 15, lineHeight: 1.7, fontStyle: 'italic',
        }}>
          {t(
            'The overall coordination of the civil society effort was anchored by Kisan Mitra Helpline–Rural Development Service Society (RDSS) and Social Accountability Forum for Action and Research (SAFAR) throughout the pilot.',
            'పౌర సమాజ కృషి యొక్క మొత్తం సమన్వయాన్ని పైలట్ అంతటా కిసాన్ మిత్ర హెల్ప్‌లైన్–రూరల్ డెవలప్‌మెంట్ సర్వీస్ సొసైటీ (RDSS) మరియు సోషల్ అకౌంటబిలిటీ ఫోరం ఫర్ యాక్షన్ అండ్ రీసర్చ్ (SAFAR) నిర్వహించాయి.'
          )}
        </div>

        {/* Teams — three columns of role lists */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={sectionHead}>{t('Report Writing Team', 'రిపోర్ట్ రైటింగ్ టీం')}</div>
            <div style={nameList}>{reportWriting.map((n, i) => <div key={i}>{n}</div>)}</div>
          </div>
          <div>
            <div style={sectionHead}>{t('Data Analysis', 'డేటా విశ్లేషణ')}</div>
            <div style={nameList}>{dataAnalysis.map((n, i) => <div key={i}>{n}</div>)}</div>
          </div>
          <div>
            <div style={sectionHead}>{t('Design, Layout & Photography', 'రూపకల్పన, లేఔట్ & ఫోటోగ్రఫీ')}</div>
            <div style={nameList}>
              <div><strong>{t('Design and Layout: ', 'రూపకల్పన & లేఔట్: ')}</strong>Shefali Jain</div>
              <div><strong>{t('Cover photo: ', 'కవర్ ఫోటో: ')}</strong>Sardar Harpal Singh</div>
              <div><strong>{t('All other photographs: ', 'అన్ని ఇతర ఫోటోలు: ')}</strong>Sree Harsha</div>
            </div>
          </div>
        </div>

        {/* Field follow-up team */}
        <div style={sectionHead}>{t('Field Follow-up Team', 'క్షేత్ర ఫాలో-అప్ బృందం')}</div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          columnGap: 32, rowGap: 4, marginBottom: 56,
        }}>
          {fieldFollowup.map((p, i) => (
            <div key={i} style={{
              fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.text, lineHeight: 1.7,
              padding: '6px 0', borderBottom: `1px solid ${C.border}`,
            }}>
              <span>{p.name}</span>
              <span style={{ color: C.textLight, fontSize: 11, marginLeft: 8, letterSpacing: '0.04em' }}>{p.org}</span>
            </div>
          ))}
        </div>

        {/* Publication line */}
        <div style={{
          borderTop: `1px solid ${C.border}`, paddingTop: 28,
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24,
        }}>
          <div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: C.textLight, textTransform: 'uppercase', marginBottom: 6 }}>
              {t('Date of publication', 'ప్రచురణ తేదీ')}
            </div>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: C.navy }}>
              19 May 2026
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: C.textLight, textTransform: 'uppercase', marginBottom: 6 }}>
              {t('For more details, contact', 'మరిన్ని వివరాలకు సంప్రదించండి')}
            </div>
            <a href="mailto:safar.india@gmail.com" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.teal, fontWeight: 600, textDecoration: 'none' }}>safar.india@gmail.com</a>
          </div>
          <div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: C.textLight, textTransform: 'uppercase', marginBottom: 6 }}>
              {t('Digital report & additional resources', 'డిజిటల్ నివేదిక & అదనపు వనరులు')}
            </div>
            <a href="https://safarindia.org/adilabad-prajavani" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.teal, fontWeight: 600, textDecoration: 'none' }}>safarindia.org/adilabad-prajavani</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SECTION 13: RESOURCES
// ════════════════════════════════════════════════════════════════════════════

function Resources() {
  useLang();
  const docs = [
    { title:'Full Pilot Report', desc:"Complete 88-page report — 'The Right to be Heard: Building a Decentralised Grievance Redress System in Telangana'. Published 19 May 2026.", type:'PDF', primary:true, link:'Reports/Prajavani-Pilot-Report-19May2026.pdf' },
    { title:'G.O. Ms. No. 3 — Prajavani Programme', desc:'Institutionalization, Decentralization and Integration of Public Grievance Redressal Mechanism. Planning (V) Department, dated 30 April 2026.', type:'PDF', link:'Reports/GO-Ms-No-3-Prajavani-30Apr2026.pdf' },
    { title:'Ready Reckoner', desc:'Operational reckoner for the Adilabad Pilot — categories, SOPs, GROs.', type:'PDF', link:'https://docs.google.com/document/d/12fPodApQZtaWVfxT3zhLDoP5qp38N2dlpwHos1YY-1M/edit?usp=sharing' },
    { title:'Submission to PO, ITDA on IFR Grievances', desc:'Detailed analysis of Individual Forest Rights cases in the Pilot.', type:'DOC', link:'https://docs.google.com/document/d/1hyquCMv6iU4YR1MKlqXSA9ISSASFTpAiMm0KbrFbUEo/edit?usp=sharing' },
    { title:'Success Stories', desc:'In addition to the stories presented in the Full Pilot Report, documented success stories from the Pilot.', type:'DOC', link:'https://docs.google.com/document/d/1ErH37qsPm3avzarYbzROBFkO6ag3OyYHOAL8xQJk9Kc/edit?usp=sharing' },
    { title:'Policy Issues & Success Note', desc:'Policy issues and success note submitted to different government departments.', type:'DOC', link:'https://docs.google.com/document/d/1e4wfxdRAqFHF9LN88g6fH39CnYo_cYWMlSLSiEnxqJI/edit' },
    { title:'Collector Appeal & Positive Stories', desc:'Collector Appeal, Decentralized CM Prajavani Pilot in Adilabad District (Jan 2025 – ongoing) and Positive Stories from the Collector Appeal (12 September 2025).', type:'DOC', link:'https://docs.google.com/document/d/1CcvvY1eptMgWVNfDHIMjt_rQ8YeYjuTlchlpNTkutyI/edit?usp=sharing' },
    { title:'District Pilot of Prajavani & Opportunities for Scaling-up', desc:'Adilabad, January–February 2025 Report, prepared in April 2025.', type:'DOC', link:'https://drive.google.com/drive/u/0/folders/1yCsPMwLG3_GpWDZ4FDYu6g1ksBuFik15' },
    { title:'Letter from SNO Prajavani to Director, CGG', desc:'On development of the web portal for the Prajavani Pilot (encl. letter from District Collector, Adilabad to SNO Prajavani).', type:'PDF', link:'https://drive.google.com/file/d/14raP-0uX0BUOhcpIfCTWu14b8qrRA0C9/view?usp=sharing' },
    { title:'Standard Operating Procedures (SOPs)', desc:'Compiled SOPs developed during the Adilabad Pilot across grievance categories and Line Departments.', type:'PDF', link:'Reports/Prajavani-SOPs.pdf' },
  ];

  return (
    <section id="resources" data-screen-label="16 Resources" style={SS.section(C.white)}>
      <div style={SS.container}>
        <div style={SS.eyebrow}>{t('Reports & Resources', 'నివేదికలు & వనరులు')}</div>
        <h2 style={SS.sectionTitle}>{t('Download and access', 'డౌన్‌లోడ్ మరియు ప్రాప్తి')}</h2>
        <p style={SS.sectionLead}>{t('All published materials from the Adilabad Pilot. For data requests, partnership enquiries, or replication, contact SAFAR India.', 'ఆదిలాబాద్ పైలట్ నుండి ప్రచురించబడిన అన్ని మెటీరియల్స్. డేటా అభ్యర్థనలు, భాగస్వామ్య విచారణలు, లేదా నకలీ కోసం SAFAR Indiaను సంప్రదించండి.')}</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:14, marginBottom:48 }}>
          {docs.map((d,i)=>(
            <div key={i} style={{ background:d.primary?C.navy:C.bg, border:`1px solid ${d.primary?C.navy:C.border}`, borderRadius:4, padding:'20px 24px', display:'flex', flexDirection:'column', gap:8 }}>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'0.1em', color:d.primary?C.amberLight:C.textLight }}>{d.type}</div>
              <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:d.primary?C.white:C.navy }}>{d.title}</div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:d.primary?'rgba(255,255,255,0.6)':C.textMid, lineHeight:1.5, flexGrow:1 }}>{d.desc}</div>
              {d.link ? (
                <a href={d.link} target="_blank" rel="noopener noreferrer" {...(d.primary ? { download: '' } : {})} style={{ marginTop:4, padding:'9px 14px', fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:700, color:d.primary?C.navy:C.white, background:d.primary?C.amberLight:C.navy, border:'none', borderRadius:3, textDecoration:'none', textAlign:d.primary?'left':'center' }}>{d.primary?'Download Report →':'Open document →'}</a>
              ) : (
                <button style={{ marginTop:4, padding:'9px 14px', fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:700, color:d.primary?C.navy:C.white, background:d.primary?C.amberLight:C.navy, border:'none', borderRadius:3, cursor:'pointer', textAlign:'left' }}>
                  {d.primary?'Download Report →':'Download →'}
                </button>
              )}
            </div>
          ))}
        </div>

        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:36, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:28 }}>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>Digital portal</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.6, marginBottom:6 }}>File grievances, track status, and download ATRs.</div>
            <a href="https://prajavani.cgg.gov.in" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.teal, fontWeight:600, textDecoration:'none' }}>prajavani.cgg.gov.in</a>
          </div>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>For inquiries</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.6, marginBottom:6 }}>Social Accountability Forum for Action and Research facilitates the pilot.</div>
            <a href="https://safar-india.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.teal, fontWeight:600, textDecoration:'none' }}>safar-india.org</a>
          </div>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>Documentary film</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.6, marginBottom:6 }}>Forthcoming, produced by Dilmaya Films.</div>
            <a href="https://vimeo.com/dilmayafilms" target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:C.teal, fontWeight:600, textDecoration:'none' }}>vimeo.com/dilmayafilms</a>
          </div>
          <div>
            <div style={{ fontFamily:"'Libre Baskerville',serif", fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>Government Order</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textMid, lineHeight:1.6, marginBottom:6 }}>The 30 April 2026 GO is published by the Government of Telangana.</div>
            <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:C.textLight }}>Available via prajavani.cgg.gov.in</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Documentary, Acknowledgements, Resources });
