// ════════════════════════════════════════════════════════════════════════════
// EXTRAS — interactive components:
//   1. GrievanceForm — category-aware form with dynamic fields (per category)
//   2. FollowupFlow — visual flow diagram of follow-up mechanism
//   3. ReceiptCompare — public hearing receipts before/after templates
// ════════════════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────────────
// 1. GrievanceForm — citizen-side filing form, demonstrates the Pilot's
//    "dynamic category-specific input fields" feature
// ───────────────────────────────────────────────────────────────────────────

function GrievanceForm() {
  useLang();
  const [step, setStep] = React.useState(1);
  const [category, setCategory] = React.useState('');
  const [fields, setFields] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [grievanceId, setGrievanceId] = React.useState('');

  // Category schema — drawn from the Pilot's dynamic-fields catalogue.
  // Each category triggers a different set of mandatory fields when selected.
  const CATEGORIES = {
    'gas-subsidy': {
      en: 'Gas Subsidy (Mahalaxmi)', te: 'గ్యాస్ సబ్సిడీ (మహాలక్ష్మి)',
      dept: { en: 'Consumer Affairs, F&CS', te: 'వినియోగదారుల వ్యవహారాలు' },
      sop: { en: 'SOP-12 · 30 days', te: 'ఎస్ఓపీ-12 · 30 రోజులు' },
      fields: [
        { key: 'lpg', en: 'LPG Consumer Number', te: 'LPG వినియోగదారుల నంబర్', placeholder: '17-digit Consumer ID', required: true },
        { key: 'agency', en: 'Gas Distributor / Agency', te: 'గ్యాస్ ఏజెన్సీ', placeholder: 'e.g. Bharat Gas — Adilabad' },
        { key: 'ration', en: 'Ration Card Number', te: 'రేషన్ కార్డ్ నంబర్', placeholder: '12-digit Ration Card', required: true },
        { key: 'beneficiary', en: 'Beneficiary name on Ration Card', te: 'ఫలాన్త పేరు', required: true },
      ]
    },
    'gruhajyothi': {
      en: 'Gruhajyothi (200 free units)', te: 'గృహజ్యోతి (200 ఉచిత యూనిట్లు)',
      dept: { en: 'Energy Department', te: 'ఇంధన శాఖ' },
      sop: { en: 'SOP-08 · 30 days', te: 'ఎస్ఓపీ-08 · 30 రోజులు' },
      fields: [
        { key: 'usc', en: 'USC Number (Service Connection)', te: 'USC నంబర్', placeholder: '13-digit USC', required: true },
        { key: 'aadhaar_last4', en: 'Last 4 digits of Aadhaar', te: 'ఆధార్ చివరి 4 అంకెలు', placeholder: 'XXXX', required: true },
        { key: 'reading_avg', en: 'Avg. monthly usage (units)', te: 'నెలవారీ సగటు యూనిట్లు', placeholder: '< 200' },
      ]
    },
    'mgnrega': {
      en: 'MGNREGA — Job Card', te: 'మహాత్మాగాంధీ NREGA - జాబ్ కార్డ్',
      dept: { en: 'Panchayat Raj & RD', te: 'పంచాయితీ రాజ్ & RD' },
      sop: { en: 'SOP-04 · 15 days (statutory)', te: 'ఎస్ఓపీ-04 · 15 రోజులు (చట్టబద్ధం)' },
      fields: [
        { key: 'jobcard', en: 'Job Card Number', te: 'జాబ్ కార్డ్ నంబర్', placeholder: 'TS-..-..-..-..', required: true },
        { key: 'panchayat', en: 'Gram Panchayat', te: 'గ్రామ పంచాయితీ', required: true },
        { key: 'request', en: 'Request type', te: 'అభ్యర్థన రకం', type: 'select',
          options: [
            { v: 'new', en: 'New job card', te: 'కొత్త జాబ్ కార్డ్' },
            { v: 'add', en: 'Add name to existing card', te: 'ఉన్న కార్డ్‌కు పేరు జోడింపు' },
            { v: 'wage', en: 'Wage payment pending', te: 'వేతన చెల్లింపు బకాయి' },
            { v: 'work', en: 'Work demanded, not given', te: 'పని డిమాండ్, ఇవ్వలేదు' },
          ], required: true },
      ]
    },
    'pm-kisan': {
      en: 'PM Kisan / Rythu Bharosa', te: 'పీఎం కిసాన్ / రైతు భరోసా',
      dept: { en: 'Agriculture', te: 'వ్యవసాయం' },
      sop: { en: 'SOP-15 · 30 days', te: 'ఎస్ఓపీ-15 · 30 రోజులు' },
      fields: [
        { key: 'ppb', en: 'PPB Number (Pattadar Passbook)', te: 'పీపీబీ నంబర్', placeholder: 'Pattadar Passbook ID', required: true },
        { key: 'survey', en: 'Survey Number(s)', te: 'సర్వే నంబర్(లు)', placeholder: 'e.g. 124/A, 125' },
        { key: 'extent', en: 'Extent (acres)', te: 'విస్తీర్ణం (ఎకరాలు)', type: 'number' },
        { key: 'installment', en: 'Missing instalment', te: 'తప్పిన వాయిదా', type: 'select',
          options: [
            { v: 'never', en: 'Never received any', te: 'ఎన్నడూ పొందలేదు' },
            { v: 'recent', en: 'Recent instalment missing', te: 'ఇటీవలి వాయిదా తప్పింది' },
            { v: 'multiple', en: 'Multiple missing', te: 'అనేక తప్పినవి' },
          ] },
      ]
    },
    'pension': {
      en: 'Pension (Old age / Widow / Disability)', te: 'పెన్షన్ (వృద్ధాప్య / వితంతు / వైకల్యం)',
      dept: { en: 'Panchayat Raj & RD', te: 'పంచాయితీ రాజ్ & RD' },
      sop: { en: 'SOP-02 · 30 days', te: 'ఎస్ఓపీ-02 · 30 రోజులు' },
      fields: [
        { key: 'pension_id', en: 'Pension ID (if assigned)', te: 'పెన్షన్ ఐడీ (ఉంటే)', placeholder: 'leave blank if not assigned' },
        { key: 'type', en: 'Pension type', te: 'పెన్షన్ రకం', type: 'select',
          options: [
            { v: 'oldage', en: 'Old age', te: 'వృద్ధాప్యం' },
            { v: 'widow', en: 'Widow', te: 'వితంతు' },
            { v: 'disability', en: 'Disability', te: 'వైకల్యం' },
            { v: 'singlewoman', en: 'Single woman', te: 'ఒంటరి మహిళ' },
            { v: 'beedi', en: 'Beedi worker', te: 'బీడీ కార్మికుడు' },
          ], required: true },
        { key: 'first_applied', en: 'First applied (year)', te: 'మొదట దరఖాస్తు (సం.)', placeholder: 'e.g. 2019' },
        { key: 'cert', en: 'Disability/Widowhood certificate?', te: 'వైకల్యం/వితంతు ధ్రువపత్రం?', type: 'select',
          options: [
            { v: 'yes', en: 'Yes — valid', te: 'అవును - చెల్లుబాటయ్యేది' },
            { v: 'expired', en: 'Expired', te: 'గడువు ముగిసింది' },
            { v: 'no', en: 'Not available', te: 'అందుబాటులో లేదు' },
          ] },
      ]
    },
    'land': {
      en: 'Revenue / Land Issue', te: 'రెవెన్యూ / భూ సమస్య',
      dept: { en: 'Revenue', te: 'రెవెన్యూ' },
      sop: { en: 'SOP-09 · 45 days', te: 'ఎస్ఓపీ-09 · 45 రోజులు' },
      fields: [
        { key: 'ppb', en: 'Pattadar Passbook Number', te: 'పీపీబీ నంబర్' },
        { key: 'survey', en: 'Survey Number', te: 'సర్వే నంబర్', required: true },
        { key: 'village', en: 'Village & Mandal', te: 'గ్రామం & మండలం', required: true },
        { key: 'issue', en: 'Nature of issue', te: 'సమస్య స్వభావం', type: 'select',
          options: [
            { v: 'mutation', en: 'Mutation pending', te: 'మ్యూటేషన్ పెండింగ్' },
            { v: 'succession', en: 'Succession / inheritance', te: 'వారసత్వం' },
            { v: 'pob', en: 'Wrongly in POB / surplus list', te: 'పీఓబీ / మిగులు జాబితాలో తప్పుగా' },
            { v: 'record', en: 'Record correction (name/extent)', te: 'రికార్డు దిద్దుబాటు' },
            { v: 'other', en: 'Other', te: 'ఇతరం' },
          ], required: true },
      ]
    },
    'ifr': {
      en: 'Forest Rights (IFR / RoFR)', te: 'అటవీ హక్కులు (IFR / RoFR)',
      dept: { en: 'Tribal Welfare', te: 'గిరిజన సంక్షేమం' },
      sop: { en: 'SOP-11 · 60 days', te: 'ఎస్ఓపీ-11 · 60 రోజులు' },
      fields: [
        { key: 'claim', en: 'Claim Number (if filed)', te: 'క్లెయిం నంబర్' },
        { key: 'village', en: 'Village & Habitation', te: 'గ్రామం & ఆవాసం', required: true },
        { key: 'extent', en: 'Approx. extent cultivated (acres)', te: 'సాగు విస్తీర్ణం (ఎకరాలు)' },
        { key: 'issue', en: 'Issue type', te: 'సమస్య రకం', type: 'select',
          options: [
            { v: 'new', en: 'Title not granted', te: 'టైటిల్ మంజూరు కాలేదు' },
            { v: 'survey', en: 'Survey not conducted', te: 'సర్వే నిర్వహించలేదు' },
            { v: 'correction', en: 'Name / extent correction', te: 'పేరు / విస్తీర్ణం దిద్దుబాటు' },
            { v: 'rejected', en: 'Claim rejected — reason unclear', te: 'క్లెయిం తిరస్కరించబడింది' },
          ], required: true },
      ]
    },
    'ration': {
      en: 'Ration Card', te: 'రేషన్ కార్డ్',
      dept: { en: 'F&CS', te: 'వినియోగదారుల వ్యవహారాలు' },
      sop: { en: 'SOP-07 · 30 days', te: 'ఎస్ఓపీ-07 · 30 రోజులు' },
      fields: [
        { key: 'ration_no', en: 'Existing Ration Card Number (if any)', te: 'రేషన్ కార్డ్ నంబర్' },
        { key: 'request', en: 'Request type', te: 'అభ్యర్థన రకం', type: 'select',
          options: [
            { v: 'new', en: 'New card', te: 'కొత్త కార్డ్' },
            { v: 'add', en: 'Add family member', te: 'కుటుంబ సభ్యుని జోడింపు' },
            { v: 'remove', en: 'Remove member', te: 'సభ్యుని తొలగింపు' },
            { v: 'reactivate', en: 'Reactivate old card', te: 'పాత కార్డ్ పునరుద్ధరణ' },
          ], required: true },
        { key: 'family_size', en: 'Family size', te: 'కుటుంబ సభ్యుల సంఖ్య', type: 'number' },
      ]
    },
    'other': {
      en: 'Other / Information request', te: 'ఇతర / సమాచార అభ్యర్థన',
      dept: { en: 'Routed by Presiding Officer', te: 'అధ్యక్ష అధికారి ద్వారా' },
      sop: { en: '30 days (default)', te: '30 రోజులు (డిఫాల్ట్)' },
      fields: [
        { key: 'department', en: 'Concerned department (if known)', te: 'సంబంధిత శాఖ' },
      ]
    },
  };

  const cat = CATEGORIES[category];

  const updateField = (k, v) => setFields(prev => ({ ...prev, [k]: v }));

  const validate = () => {
    if (!cat) return false;
    return cat.fields.every(f => !f.required || (fields[f.key] && String(fields[f.key]).trim()));
  };

  const submit = () => {
    if (!validate()) return;
    const id = 'ADB' + new Date().getFullYear() + (category || 'OTH').slice(0, 3).toUpperCase() +
               String(Math.floor(Math.random() * 90000) + 10000);
    setGrievanceId(id);
    setSubmitted(true);
  };

  const reset = () => {
    setStep(1); setCategory(''); setFields({}); setSubmitted(false); setGrievanceId('');
  };

  // Styles
  const fieldStyle = {
    width: '100%', padding: '10px 14px', border: `1px solid ${C.border}`,
    borderRadius: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.text,
    background: C.white, outline: 'none',
  };
  const labelStyle = {
    fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 600,
    color: C.navy, marginBottom: 6, display: 'block',
  };

  if (submitted) {
    return (
      <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 4, padding: 'clamp(20px, 4vw, 32px)' }}>
        <div style={{ background: C.teal, borderRadius: 3, padding: '14px 20px', display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, fontWeight: 700, color: C.white }}>{t('Grievance registered', 'ఫిర్యాదు నమోదు అయింది')}</span>
        </div>
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
          {t('Your Grievance ID', 'మీ ఫిర్యాదు ఐడీ')}
        </div>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 28, fontWeight: 700, color: C.amber, letterSpacing: '0.04em', marginBottom: 18, fontVariantNumeric: 'tabular-nums' }}>
          {grievanceId}
        </div>
        <div style={{ background: C.bg, padding: '16px 20px', borderRadius: 3, marginBottom: 14 }}>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, color: C.textLight, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
            {t('Next steps', 'తదుపరి దశలు')}
          </div>
          <ol style={{ paddingLeft: 18, margin: 0 }}>
            <li style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7, marginBottom: 4 }}>
              {t('Dated receipt sent to your registered mobile via SMS.', 'మీ నమోదిత మొబైల్‌కు తేదీతో రసీదు SMS ద్వారా పంపబడింది.')}
            </li>
            <li style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7, marginBottom: 4 }}>
              {t('Auto-assigned to ', 'స్వయంచాలకంగా కేటాయించబడింది: ')} <strong>{cat ? t(cat.dept.en, cat.dept.te) : ''}</strong>{' — GRO'}
            </li>
            <li style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7, marginBottom: 4 }}>
              {t('Action Taken Report due in 30 days. Auto-escalation if not filed.', '30 రోజుల్లో ATR రావాలి. లేకపోతే స్వయంచాలకంగా పైకి మారుతుంది.')}
            </li>
            <li style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7 }}>
              {t('Track at ', 'ఇక్కడ ట్రాక్ చేయండి: ')}<code style={{ background: C.bgAlt, padding: '1px 6px', borderRadius: 2 }}>prajavani.cgg.gov.in</code>
            </li>
          </ol>
        </div>
        <button onClick={reset} style={{ padding: '10px 22px', background: C.navy, color: C.white, border: 'none', borderRadius: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          {t('File another', 'మరొకటి దాఖలు చేయండి')}
        </button>
        <div style={{ marginTop: 14, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textLight, fontStyle: 'italic' }}>
          {t('Demo only — this is a mock filing experience that mirrors the Pilot portal\'s dynamic-field logic.', 'డెమో మాత్రమే - ఇది పైలట్ పోర్టల్ యొక్క డైనమిక్ ఫీల్డ్ లాజిక్‌ను ప్రతిబింబించే నమూనా.')}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 4, padding: 'clamp(18px, 4vw, 32px)' }}>

      {/* Progress strip */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
        {[1, 2, 3].map(n => (
          <div key={n} style={{ flex: 1, height: 4, background: n <= step ? C.amber : C.bgAlt, borderRadius: 2 }} />
        ))}
      </div>

      {/* Step 1: Category */}
      {step === 1 && (
        <div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.amber, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
            {t('Step 1 of 3', '3లో 1వ దశ')}
          </div>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(18px, 3.5vw, 22px)', fontWeight: 700, color: C.navy, marginBottom: 6 }}>
            {t('What is your grievance about?', 'మీ ఫిర్యాదు ఏ గురించి?')}
          </div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, marginBottom: 22, lineHeight: 1.6 }}>
            {t('Pick a category. Form fields will change to match — the same logic the Pilot portal uses.', 'వర్గాన్ని ఎంచుకోండి. తదనుగుణంగా ఫారం మారుతుంది - పైలట్ పోర్టల్ ఉపయోగించే అదే లాజిక్.')}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
            {Object.entries(CATEGORIES).map(([key, c]) => (
              <button key={key} onClick={() => { setCategory(key); setFields({}); setStep(2); }}
                style={{
                  padding: '14px 16px', textAlign: 'left',
                  background: category === key ? C.navy : C.bg,
                  border: `1px solid ${category === key ? C.navy : C.border}`,
                  borderRadius: 3, cursor: 'pointer',
                  fontFamily: "'Source Sans 3',sans-serif",
                  display: 'flex', flexDirection: 'column', gap: 4,
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (category !== key) { e.currentTarget.style.borderColor = C.teal; }}}
                onMouseLeave={e => { if (category !== key) { e.currentTarget.style.borderColor = C.border; }}}>
                <span style={{ fontSize: 13, fontWeight: 700, color: category === key ? C.white : C.navy }}>
                  {t(c.en, c.te)}
                </span>
                <span style={{ fontSize: 11, color: category === key ? 'rgba(255,255,255,0.6)' : C.textLight }}>
                  {t(c.dept.en, c.dept.te)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: dynamic fields */}
      {step === 2 && cat && (
        <div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.amber, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
            {t('Step 2 of 3 · Category-specific fields', '3లో 2వ దశ · వర్గం-నిర్దిష్ట ఫీల్డ్‌లు')}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
            <div>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(18px, 3.5vw, 22px)', fontWeight: 700, color: C.navy }}>
                {t(cat.en, cat.te)}
              </div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textLight, marginTop: 2 }}>
                {t(cat.dept.en, cat.dept.te)} · {t(cat.sop.en, cat.sop.te)}
              </div>
            </div>
            <button onClick={() => setStep(1)} style={{ padding: '6px 12px', background: 'none', border: `1px solid ${C.border}`, borderRadius: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textMid, cursor: 'pointer' }}>
              ← {t('Change category', 'వర్గం మార్చండి')}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {cat.fields.map(f => (
              <div key={f.key}>
                <label style={labelStyle}>
                  {t(f.en, f.te)}
                  {f.required && <span style={{ color: C.red, marginLeft: 4 }}>*</span>}
                </label>
                {f.type === 'select' ? (
                  <select value={fields[f.key] || ''} onChange={e => updateField(f.key, e.target.value)} style={fieldStyle}>
                    <option value="">{t('— Select —', '— ఎంచుకోండి —')}</option>
                    {f.options.map(o => <option key={o.v} value={o.v}>{t(o.en, o.te)}</option>)}
                  </select>
                ) : (
                  <input type={f.type || 'text'} value={fields[f.key] || ''} placeholder={f.placeholder || ''}
                    onChange={e => updateField(f.key, e.target.value)} style={fieldStyle} />
                )}
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginTop: 14 }}>
            <label style={labelStyle}>{t('Describe the issue', 'సమస్యను వివరించండి')} <span style={{ color: C.red, marginLeft: 4 }}>*</span></label>
            <textarea value={fields.description || ''} onChange={e => updateField('description', e.target.value)}
              placeholder={t('What happened? What action are you seeking?', 'ఏం జరిగింది? మీరు ఏ చర్య కోరుతున్నారు?')}
              style={{ ...fieldStyle, minHeight: 80, resize: 'vertical', fontFamily: "'Source Sans 3',sans-serif" }} />
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
            <button onClick={() => setStep(3)} disabled={!validate() || !fields.description}
              style={{ padding: '11px 22px', background: validate() && fields.description ? C.amber : C.bgAlt, color: validate() && fields.description ? C.white : C.textLight, border: 'none', borderRadius: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 700, cursor: validate() && fields.description ? 'pointer' : 'not-allowed' }}>
              {t('Continue →', 'కొనసాగించండి →')}
            </button>
          </div>
        </div>
      )}

      {/* Step 3: contact */}
      {step === 3 && cat && (
        <div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, color: C.amber, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
            {t('Step 3 of 3 · Your details', '3లో 3వ దశ · మీ వివరాలు')}
          </div>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(18px, 3.5vw, 22px)', fontWeight: 700, color: C.navy, marginBottom: 18 }}>
            {t('Where should we update you?', 'మిమ్మల్ని ఎక్కడ సంప్రదించాలి?')}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            <div>
              <label style={labelStyle}>{t('Full name', 'పూర్తి పేరు')} <span style={{ color: C.red, marginLeft: 4 }}>*</span></label>
              <input value={fields.name || ''} onChange={e => updateField('name', e.target.value)} style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle}>{t('Mobile number', 'మొబైల్ నంబర్')} <span style={{ color: C.red, marginLeft: 4 }}>*</span></label>
              <input type="tel" value={fields.mobile || ''} onChange={e => updateField('mobile', e.target.value)} placeholder="10-digit · OTP verified" style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle}>{t('Village / Habitation', 'గ్రామం / ఆవాసం')} <span style={{ color: C.red, marginLeft: 4 }}>*</span></label>
              <input value={fields.village || ''} onChange={e => updateField('village', e.target.value)} style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle}>{t('Mandal', 'మండలం')} <span style={{ color: C.red, marginLeft: 4 }}>*</span></label>
              <select value={fields.mandal || ''} onChange={e => updateField('mandal', e.target.value)} style={fieldStyle}>
                <option value="">{t('— Select —', '— ఎంచుకోండి —')}</option>
                {['Adilabad (Rural)', 'Adilabad (Urban)', 'Bela', 'Gudihathnur', 'Ichoda', 'Inderavelly', 'Jainath', 'Mavala', 'Narnoor', 'Neradigonda', 'Sirikonda', 'Talamadugu', 'Tamsi', 'Utnoor', 'Bazarhathnoor', 'Boath'].map(m =>
                  <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginTop: 14, padding: '14px 18px', background: `${C.amber}10`, border: `1px solid ${C.amber}40`, borderRadius: 3 }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textMid, lineHeight: 1.5, cursor: 'pointer' }}>
              <input type="checkbox" checked={fields.consent || false} onChange={e => updateField('consent', e.target.checked)} style={{ marginTop: 3 }} />
              <span>{t('I consent to my grievance being filed on the Prajavani portal and tracked by SSAAT / civil society for follow-up verification.', 'నా ఫిర్యాదు ప్రజావాణి పోర్టల్‌లో దాఖలు చేయబడడానికి మరియు SSAAT / పౌర సంస్థల ద్వారా ఫాలో-అప్ చేయబడడానికి నేను అంగీకరిస్తున్నాను.')}</span>
            </label>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
            <button onClick={() => setStep(2)} style={{ padding: '11px 18px', background: 'none', color: C.textMid, border: `1px solid ${C.border}`, borderRadius: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              ← {t('Back', 'వెనుకకు')}
            </button>
            <button onClick={submit} disabled={!fields.name || !fields.mobile || !fields.village || !fields.mandal || !fields.consent}
              style={{ padding: '11px 22px', background: fields.name && fields.mobile && fields.village && fields.mandal && fields.consent ? C.teal : C.bgAlt, color: fields.name && fields.mobile && fields.village && fields.mandal && fields.consent ? C.white : C.textLight, border: 'none', borderRadius: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, fontWeight: 700, cursor: fields.name && fields.mobile && fields.village && fields.mandal && fields.consent ? 'pointer' : 'not-allowed' }}>
              {t('Submit grievance →', 'ఫిర్యాదు సమర్పించండి →')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


// ───────────────────────────────────────────────────────────────────────────
// 2. FollowupFlow — visual flow showing the 6-step follow-up process
//    with each step animatable and clickable
// ───────────────────────────────────────────────────────────────────────────

function FollowupFlow() {
  useLang();
  const printMode = usePrintMode();
  const [active, setActive] = React.useState(0);

  const steps = [
    { code: '01', en: 'Grievance filed', te: 'ఫిర్యాదు దాఖలు',
      who: { en: 'IFC operator / SSAAT / Kisan Mitra', te: 'IFC ఆపరేటర్ / SSAAT / కిసాన్ మిత్ర' },
      detail: { en: 'Filed at IFC, village outreach, or directly on the portal. Dated acknowledgement receipt generated with unique reference ID.', te: 'IFC, గ్రామ ప్రచారం, లేదా పోర్టల్‌లో దాఖలు చేయబడుతుంది. తేదీతో రసీదు, ప్రత్యేక రెఫరెన్స్ ఐడీతో జారీ అవుతుంది.' },
      icon: 'M9 11h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      color: C.teal },
    { code: '02', en: 'GRO inquiry & ATR', te: 'GRO విచారణ & ATR',
      who: { en: 'GRO (mandal-level officer)', te: 'GRO (మండల అధికారి)' },
      detail: { en: 'GRO investigates per SOP and files ATR within 30 days. Public Hearing remarks recorded on receipt in writing during the session.', te: 'GRO SOP ప్రకారం విచారణ నిర్వహించి, 30 రోజుల్లో ATR దాఖలు చేస్తారు. బహిరంగ విచారణ వేళలో రసీదుపై వ్రాతపూర్వకంగా వ్యాఖ్యలు నమోదు చేయబడతాయి.' },
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: C.amber },
    { code: '03', en: 'Field verification', te: 'క్షేత్ర సత్యాపన',
      who: { en: 'SSAAT + Kisan Mitra resource persons', te: 'SSAAT + కిసాన్ మిత్ర వనరుల వ్యక్తులు' },
      detail: { en: 'Resource persons visit the complainant in their village. Verify whether the ATR is accurate and implemented. Identify gaps in scheme design.', te: 'వనరుల వ్యక్తులు ఫిర్యాదుదారుని గ్రామంలో సందర్శిస్తారు. ATR ఖచ్చితంగా ఉందా, అమలు చేయబడిందా అని తనిఖీ చేస్తారు. పథకం రూపకల్పనలోని లోపాలను గుర్తిస్తారు.' },
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      color: '#5a7ec4' },
    { code: '04', en: 'IT system entry', te: 'IT వ్యవస్థలో నమోదు',
      who: { en: 'Civil society review team', te: 'పౌర సమాజ సమీక్ష బృందం' },
      detail: { en: 'Findings entered into a separate civil-society-built IT system (built by July 2025). Records next steps, current pending level, follow-up medium used.', te: 'ఫలితాలు ప్రత్యేక పౌర-సమాజ-నిర్మిత IT వ్యవస్థలో నమోదు చేయబడతాయి (జూలై 2025 నాటికి). తదుపరి దశలు, ప్రస్తుత పెండింగ్ స్థాయి, ఫాలో-అప్ మాధ్యమం రికార్డ్ చేయబడతాయి.' },
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
      color: '#8b6bb1' },
    { code: '05', en: 'Lifecycle review', te: 'జీవితచక్ర సమీక్ష',
      who: { en: 'Civil society + student volunteers', te: 'పౌర సమాజం + విద్యార్థి వాలంటీర్లు' },
      detail: { en: 'A 5–7 member desk team reads the entire lifecycle: grievance → GRO enquiry → Mandal Prajavani remarks → ATR → field verification. Assigns one of 11 status categories.', te: '5–7 మంది డెస్క్ బృందం మొత్తం జీవితచక్రాన్ని చదువుతారు: ఫిర్యాదు → GRO విచారణ → మండల ప్రజావాణి వ్యాఖ్యలు → ATR → క్షేత్ర సత్యాపన. 11 స్థితి వర్గాలలో ఒకటిని కేటాయిస్తారు.' },
      icon: 'M3 3v18h18 M7 12l4-4 4 4 6-6',
      color: C.tealLight },
    { code: '06', en: 'Outcome & feedback', te: 'ఫలితం & అభిప్రాయం',
      who: { en: 'Status assigned · feedback to GO Clause 4', te: 'స్థితి కేటాయించబడింది · GO క్లాజ్ 4కు అభిప్రాయం' },
      detail: { en: 'Status assigned: Resolved · Sent to Next Level · Marked for Collector Appeal · Policy Decision Awaited · Other. Feeds the report\'s analytical framework and the Government\'s Clause-4 guidelines.', te: 'స్థితి కేటాయించబడుతుంది: పరిష్కరించబడింది · తదుపరి స్థాయికి పంపబడింది · కలెక్టర్ అప్పీలు · విధాన నిర్ణయ నిరీక్షణ · ఇతరం. ఇది నివేదిక విశ్లేషణ మరియు GO క్లాజ్ 4 మార్గదర్శకాలను ముందుకు తీసుకువెళ్తుంది.' },
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      color: C.amberLight },
  ];

  return (
    <div>
      {/* The visual flow strip */}
      <div className="flow-strip" style={{ background: C.navy, borderRadius: 6, padding: 'clamp(18px, 3vw, 28px)', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: 4 }}>
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <button onClick={() => setActive(i)}
                style={{
                  flex: '0 0 auto', minWidth: 140,
                  background: active === i ? s.color : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${active === i ? s.color : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 4, padding: '14px 16px',
                  cursor: 'pointer', textAlign: 'left',
                  display: 'flex', flexDirection: 'column', gap: 6,
                  transition: 'all 0.2s', fontFamily: "'Source Sans 3',sans-serif',",
                }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: active === i ? C.white : 'rgba(255,255,255,0.4)' }}>{s.code}</div>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: active === i ? C.white : 'rgba(255,255,255,0.85)', lineHeight: 1.25 }}>{t(s.en, s.te)}</div>
                <div style={{ fontSize: 10, color: active === i ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.45)' }}>{t(s.who.en, s.who.te)}</div>
              </button>
              {i < steps.length - 1 && (
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 6px', flex: '0 0 auto' }}>
                  <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                    <path d="M0 7H20M20 7L14 1M20 7L14 13" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Active step detail — or all steps in print mode */}
      {(printMode ? steps : [steps[active]]).map((stepData, stepIdx) => (
      <div key={stepIdx} style={{ background: C.white, border: `1px solid ${C.border}`, borderLeft: `4px solid ${stepData.color}`, borderRadius: 4, padding: 'clamp(18px, 3vw, 24px) clamp(20px, 4vw, 30px)', marginBottom: printMode ? 12 : 0 }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 auto', width: 52, height: 52, borderRadius: '50%', background: `${stepData.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stepData.color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d={stepData.icon} />
            </svg>
          </div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: stepData.color, letterSpacing: '0.12em' }}>
              {stepData.code} · {t(stepData.who.en, stepData.who.te)}
            </div>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 700, color: C.navy, marginTop: 4, marginBottom: 8, lineHeight: 1.25 }}>
              {t(stepData.en, stepData.te)}
            </div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7 }}>
              {t(stepData.detail.en, stepData.detail.te)}
            </div>
          </div>
        </div>
      </div>
      ))}

      <div style={{ marginTop: 14, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textLight, fontStyle: 'italic' }}>
        {t('Tap a step to inspect it.', 'తనిఖీ చేయడానికి ఏదైనా దశను నొక్కండి.')}
      </div>
    </div>
  );
}


// ───────────────────────────────────────────────────────────────────────────
// 3. ReceiptCompare — Public Hearing receipt: before-template vs after-template
// ───────────────────────────────────────────────────────────────────────────

function ReceiptCompare() {
  useLang();
  const printMode = usePrintMode();
  const [view, setView] = React.useState('after');
  const effectiveView = printMode ? 'both' : view;

  const Stamp = ({ color = C.red, text }) => (
    <div style={{ position: 'absolute', top: 18, right: 18, padding: '4px 10px', background: 'rgba(255,255,255,0.95)', border: `1.5px solid ${color}`, color, borderRadius: 3, fontFamily: "'Source Sans 3',sans-serif", fontSize: 9, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', transform: 'rotate(-3deg)' }}>
      {text}
    </div>
  );

  // Receipt — BEFORE templates (handwritten / free text remarks)
  const Before = () => (
    <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 4, padding: 24, position: 'relative', fontFamily: "Georgia, 'Libre Baskerville', serif", color: C.text, minHeight: 460 }}>
      <Stamp color={C.red} text={t('Before standardisation', 'ప్రామాణీకరణకు ముందు')} />

      <div style={{ borderBottom: `2px solid ${C.navy}`, paddingBottom: 8, marginBottom: 12 }}>
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 12, fontWeight: 700, color: C.navy, textAlign: 'center', letterSpacing: '0.05em' }}>
          {t('PUBLIC HEARING — GRIEVANCE RECEIPT', 'బహిరంగ విచారణ - ఫిర్యాదు రసీదు')}
        </div>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, color: C.textLight, textAlign: 'center', marginTop: 2 }}>
          {t('Adilabad District · February 2025 (early hearings)', 'ఆదిలాబాద్ జిల్లా · ఫిబ్రవరి 2025 (ప్రారంభ విచారణలు)')}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: 11, marginBottom: 14 }}>
        <div><strong>{t('Grievance ID:', 'ఫిర్యాదు ఐడీ:')}</strong> ADB2025JNTH____</div>
        <div><strong>{t('Date:', 'తేదీ:')}</strong> 06-Feb-2025</div>
        <div><strong>{t('Mandal:', 'మండలం:')}</strong> Jainath</div>
        <div><strong>{t('Category:', 'వర్గం:')}</strong> Pension</div>
        <div style={{ gridColumn: '1 / -1' }}><strong>{t('Complainant:', 'ఫిర్యాదుదారు:')}</strong> _____________</div>
      </div>

      <div style={{ background: '#fefcf7', border: `1px dashed ${C.border}`, padding: 12, marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.textLight, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
          {t('GRO remark (handwritten, free text)', 'GRO వ్యాఖ్య (వ్రాతపూర్వకం, స్వేచ్ఛా వచనం)')}
        </div>
        <div style={{ fontFamily: "'Caveat', 'Brush Script MT', cursive", fontSize: 16, color: '#2a3a5a', lineHeight: 1.4, letterSpacing: '0.01em' }}>
          "Will look into it. Pension may be considered. Please come back next month if not resolved."
        </div>
      </div>

      <div style={{ background: `${C.red}10`, border: `1px solid ${C.red}40`, padding: '10px 12px', borderRadius: 3, marginBottom: 10 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.red, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
          {t('Problems', 'సమస్యలు')}
        </div>
        <ul style={{ paddingLeft: 16, margin: 0, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textMid, lineHeight: 1.55 }}>
          <li>{t('Vague — no commitment, no timeline', 'అస్పష్టం - హామీ లేదు, టైమ్‌లైన్ లేదు')}</li>
          <li>{t('Handwriting not always legible; uploads delayed or skipped', 'చేతిరాత ఎల్లప్పుడూ చదవగలగదు; అప్‌లోడ్ ఆలస్యం')}</li>
          <li>{t('No category-specific data captured (Pension ID, type)', 'వర్గం-నిర్దిష్ట డేటా లేదు (పెన్షన్ ఐడీ, రకం)')}</li>
          <li>{t('Citizen leaves without anything actionable', 'పౌరుడు చేతిలో ఏదీ లేకుండా వెళతారు')}</li>
        </ul>
      </div>

      <div style={{ borderTop: `1px dashed ${C.border}`, paddingTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 10, color: C.textLight }}>
        <div>{t('Officer signature: _____________', 'అధికారి సంతకం: _____________')}</div>
        <div>{t('Page 1 of 1', '1లో 1వ పేజీ')}</div>
      </div>
    </div>
  );

  // Receipt — AFTER templates (structured + Telugu + digital reference)
  const After = () => (
    <div style={{ background: C.white, border: `2px solid ${C.navy}`, borderRadius: 4, padding: 24, position: 'relative', fontFamily: "'Libre Baskerville', Georgia, serif", color: C.text, minHeight: 460 }}>
      <Stamp color={C.teal} text={t('Pilot — Standardised', 'పైలట్ - ప్రామాణీకృత')} />

      <div style={{ borderBottom: `2px solid ${C.navy}`, paddingBottom: 8, marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 11, fontWeight: 700, color: C.navy, letterSpacing: '0.04em' }}>
            {t('PRAJAVANI · MANDAL PUBLIC HEARING', 'ప్రజావాణి · మండల బహిరంగ విచారణ')}
          </div>
          <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 9, color: C.amber, fontWeight: 700, letterSpacing: '0.1em' }}>
            prajavani.cgg.gov.in
          </div>
        </div>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, color: C.textLight, marginTop: 2 }}>
          Adilabad Pilot · Mandal Prajavani — Every Monday
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 11, fontFamily: "'Source Sans 3',sans-serif", marginBottom: 12, background: C.bg, padding: '10px 12px', borderRadius: 3 }}>
        <div><strong style={{ color: C.navy }}>{t('Grievance ID:', 'ఫిర్యాదు ఐడీ:')}</strong> <span style={{ fontFamily: 'monospace', color: C.amber, fontWeight: 700 }}>ADB2025JNTH00198</span></div>
        <div><strong style={{ color: C.navy }}>{t('Filed on:', 'దాఖలు తేదీ:')}</strong> 06-Feb-2025</div>
        <div><strong style={{ color: C.navy }}>{t('Mandal:', 'మండలం:')}</strong> Jainath</div>
        <div><strong style={{ color: C.navy }}>{t('SOP:', 'ఎస్ఓపీ:')}</strong> SOP-02 (30 days)</div>
        <div><strong style={{ color: C.navy }}>{t('Category:', 'వర్గం:')}</strong> Old-age Pension</div>
        <div><strong style={{ color: C.navy }}>{t('Department:', 'శాఖ:')}</strong> PR&RD</div>
        <div style={{ gridColumn: '1 / -1' }}><strong style={{ color: C.navy }}>{t('Pension ID:', 'పెన్షన్ ఐడీ:')}</strong> 28-XXXXX-XXXX <strong style={{ color: C.navy, marginLeft: 14 }}>{t('First applied:', 'మొదట దరఖాస్తు:')}</strong> 2019</div>
      </div>

      <div style={{ background: `${C.teal}08`, border: `1px solid ${C.teal}40`, padding: 12, borderRadius: 3, marginBottom: 10 }}>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 10, fontWeight: 700, color: C.teal, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
          {t('GRO remark — template selection (3–4 options + Other)', 'GRO వ్యాఖ్య - టెంప్లేట్ ఎంపిక')}
        </div>
        <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0, fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: C.textMid, lineHeight: 1.7 }}>
          <li>☐ {t('Pension active — no further action', 'పెన్షన్ చురుకుగా ఉంది - తదుపరి చర్య అవసరం లేదు')}</li>
          <li>☑ <strong>{t('Eligible — state-level approval awaited', 'అర్హులు - రాష్ట్ర-స్థాయి ఆమోదం కోసం వేచిచూస్తున్నాం')}</strong></li>
          <li>☐ {t('Not eligible — reason: ___', 'అర్హత లేదు - కారణం: ___')}</li>
          <li>☐ {t('Documents pending: certificate / Aadhaar / bank', 'డాక్యుమెంట్లు పెండింగ్: సర్టిఫికేట్ / ఆధార్ / బ్యాంక్')}</li>
        </ul>
        <div style={{ marginTop: 8, fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, color: C.textMid, lineHeight: 1.6, paddingLeft: 8, borderLeft: `2px solid ${C.amber}` }}>
          <strong>{t('Officer note:', 'అధికారి గమనిక:')}</strong> {t('Disability certificate verified. Pension ID exists from 2019; status incorrectly marked ineligible. Escalating to SERP at state level.', 'వైకల్యం ధ్రువపత్రం పరిశీలించబడింది. 2019 నుండి పెన్షన్ ఐడీ ఉంది; స్థితి తప్పుగా అనర్హతగా నమోదైంది. రాష్ట్ర స్థాయిలో SERPకు మారుస్తున్నాం.')}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 11, fontFamily: "'Source Sans 3',sans-serif", marginBottom: 10 }}>
        <div style={{ background: `${C.amber}10`, padding: '6px 10px', borderRadius: 2 }}><strong>{t('ATR due:', 'ATR గడువు:')}</strong> 08-Mar-2025</div>
        <div style={{ background: `${C.amber}10`, padding: '6px 10px', borderRadius: 2 }}><strong>{t('Next hearing:', 'తదుపరి విచారణ:')}</strong> 10-Feb-2025 (Mon)</div>
      </div>

      <div style={{ borderTop: `1px dashed ${C.border}`, paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, fontFamily: "'Source Sans 3',sans-serif", color: C.textLight }}>
        <div>
          <div>{t('GRO signature:', 'GRO సంతకం:')} <em>K. Ramana, MPDO</em></div>
          <div style={{ marginTop: 2 }}>{t('Presiding Officer:', 'అధ్యక్ష అధికారి:')} <em>R. Suresh, RDO</em></div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'monospace' }}>QR · prajavani.cgg.gov.in</div>
          <div style={{ marginTop: 2 }}>{t('SMS sent · Track online', 'SMS పంపబడింది · ఆన్‌లైన్‌లో ట్రాక్ చేయండి')}</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 8, right: 8, width: 36, height: 36, background: `repeating-linear-gradient(45deg, ${C.text} 0, ${C.text} 2px, ${C.white} 2px, ${C.white} 4px)`, opacity: 0.85, borderRadius: 2 }} />
    </div>
  );

  return (
    <div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }} className={printMode ? 'print-hide' : ''}>
        <button onClick={() => setView('both')} style={{ padding: '7px 14px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 600, background: view === 'both' ? C.navy : C.white, color: view === 'both' ? C.white : C.textMid, border: `1px solid ${view === 'both' ? C.navy : C.border}`, borderRadius: 3, cursor: 'pointer' }}>
          {t('Side by side', 'పక్కపక్కన')}
        </button>
        <button onClick={() => setView('before')} style={{ padding: '7px 14px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 600, background: view === 'before' ? C.navy : C.white, color: view === 'before' ? C.white : C.textMid, border: `1px solid ${view === 'before' ? C.navy : C.border}`, borderRadius: 3, cursor: 'pointer' }}>
          {t('Before — free-text', 'ముందు - స్వేచ్ఛా వచనం')}
        </button>
        <button onClick={() => setView('after')} style={{ padding: '7px 14px', fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 600, background: view === 'after' ? C.navy : C.white, color: view === 'after' ? C.white : C.textMid, border: `1px solid ${view === 'after' ? C.navy : C.border}`, borderRadius: 3, cursor: 'pointer' }}>
          {t('After — Pilot template', 'తర్వాత - పైలట్ టెంప్లేట్')}
        </button>
      </div>

      <div className="receipt-grid" style={{ display: 'grid', gridTemplateColumns: effectiveView === 'both' ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr', gap: 16 }}>
        {(effectiveView === 'both' || effectiveView === 'before') && <Before />}
        {(effectiveView === 'both' || effectiveView === 'after') && <After />}
      </div>

      <div style={{ marginTop: 18, padding: '16px 20px', background: `${C.amber}10`, border: `1px solid ${C.amber}40`, borderRadius: 3 }}>
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: C.amber, marginBottom: 6 }}>
          {t('What the standardised receipt unlocked', 'ప్రామాణీకృత రసీదు ఏం సాధించింది')}
        </div>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.7 }}>
          {t('After category-specific templates were added in mid-2025, citizens left hearings with a concrete written commitment — Pension ID acknowledged, escalation path written down, ATR due date stamped. GRO remarks became comparable across mandals, uploadable in real time, and could be carried by SSAAT to higher-level offices as portable proof of administrative authentication.', '2025 మధ్యలో వర్గం-నిర్దిష్ట టెంప్లేట్‌లు చేర్చిన తర్వాత, పౌరులు బహిరంగ విచారణల నుండి స్పష్టమైన వ్రాతపూర్వక హామీతో వెళ్లారు — పెన్షన్ ఐడీ గుర్తింపు, ఎస్కలేషన్ మార్గం వ్రాత, ATR గడువు. GRO వ్యాఖ్యలు మండలాల మధ్య పోల్చదగినవి అయ్యాయి, నిజ సమయంలో అప్‌లోడ్ చేయదగినవి, మరియు SSAAT ద్వారా ఉన్నత-స్థాయి కార్యాలయాలకు తీసుకువెళ్లదగిన పోర్టబుల్ ధ్రువపత్రంగా ఉపయోగపడ్డాయి.')}
        </div>
      </div>
    </div>
  );
}


Object.assign(window, { GrievanceForm, FollowupFlow, ReceiptCompare });
