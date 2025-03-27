import React, { useState } from 'react';
import PresentingComplaintCard from "../components/PresentingComplaintCard";

function PresentingComplaints() {
  const complaints = [
    
    {
      title: "Chest Pain",
      approach: "Take a detailed history of pain, associated symptoms, and rule out cardiac causes.",
      scenarios: ["MI", "Angina", "GERD", "Costochondritis"]
    },
    {
      title: "Shortness of Breath",
      approach: "Check for duration, triggers, associated wheeze or cough, smoking history.",
      scenarios: ["Asthma", "COPD", "Heart Failure", "PE"]
    },
    {
      title: "Headache",
      approach: "Ask about severity, frequency, aura, photophobia, and neck stiffness.",
      scenarios: ["Migraine", "Tension headache", "Cluster headache", "Meningitis"]
    },
    {
      title: "Anasarca (Body Swelling)",
      approach: "Assess for systemic causes such as heart failure, renal disease, liver disease, or severe malnutrition.",
      scenarios: [
        "Congestive Heart Failure",
        "Nephrotic Syndrome",
        "Liver Cirrhosis",
        "Severe Malnutrition",
        "Hypothyroidism"
      ]
    },
    {
      title: "Amenorrhea",
      approach: "Differentiate between primary and secondary amenorrhea. Assess pregnancy status, hormonal imbalances, stress, weight changes, or chronic illness.",
      scenarios: [
        "Pregnancy",
        "Polycystic Ovarian Syndrome (PCOS)",
        "Hypothalamic Amenorrhea",
        "Hyperprolactinemia",
        "Premature Ovarian Failure",
        "Thyroid Disorders",
        "Asherman's Syndrome"
      ]
    },
    
    {
      title: "Anxiety",
      approach: "Identify triggers, duration, severity, and impact on daily life. Rule out physical causes and screen for panic disorder or generalized anxiety.",
      scenarios: [
        "Generalized Anxiety Disorder",
        "Panic Attacks",
        "Health Anxiety",
        "Social Anxiety",
        "Anxiety with Depression",
        "Substance-Induced Anxiety",
        "Hyperthyroidism"
      ]
    },
    {
      title: "Animal Bite",
      approach: "Determine type of animal, vaccination status, site and depth of bite, and time since incident. Consider risk of rabies or tetanus.",
      scenarios: [
        "Dog Bite",
        "Cat Bite",
        "Monkey Bite",
        "Rabies Exposure",
        "Tetanus Risk"
      ]
    },
    {
      title: "Abdominal Swelling",
      approach: "Ask about duration, associated pain, bowel habits, weight changes, and systemic symptoms. Consider ascites or mass.",
      scenarios: [
        "Ascites",
        "Ovarian Cyst",
        "Pregnancy",
        "Fibroids",
        "Hepatosplenomegaly"
      ]
    },
    {
      title: "Abdominal Pain",
      approach: "Explore onset, character, location, radiation, associated GI/genitourinary symptoms, and systemic signs.",
      scenarios: [
        {
          region: "Right Upper Quadrant",
          cases: [
            { name: "Biliary colic", link: "https://docs.google.com/document/d/1Sb53PgBwj0lKEYqzQR30uG6-TVvfrLP6_0VwgJ5Lxvo/edit?usp=drive_link" },
            { name: "Acute cholecystitis", link: "https://docs.google.com/document/d/1Ag3DLnzfeqxbNyFLE7F9ICv1uxrrZmE7CaJCw4GV9hc/edit?tab=t.0" },
            { name: "Acute cholangitis", link: "https://docs.google.com/document/d/1Fo-hyGdVxwXImRt5MoVmIEqHel9kap8ba1fP3wRajBI/edit?tab=t.0" },
          ]
        },
        {
          region: "Epigastric Region",
          cases: ["Acute pancreatitis"]
        },
        {
          region: "Umbilical Region",
          cases: ["Intestinal obstruction"]
        },
        {
          region: "Right Lower Quadrant",
          cases: ["Appendicitis", "Ectopic pregnancy"]
        },
        {
          region: "Lower Abdomen",
          cases: ["Pelvic Inflammatory Disease (PID)", "Primary dysmenorrhea", "Endometriosis"]
        },
        {
          region: "Left Lower Quadrant",
          cases: ["Diverticulitis"]
        },
        {
          region: "Generalized",
          cases: ["Peritonitis"]
        }
      ]
      
      
    },
    {
      title: "Ankle Pain",
      approach: "Assess trauma, onset, swelling, weight-bearing ability, and range of motion. Rule out fracture or arthritis.",
      scenarios: [
        "Sprain",
        "Fracture",
        "Gout",
        "Septic Arthritis",
        "Achilles Tendonitis"
      ]
    },
    {
      title: "Bone Pain",
      approach: "Ask about location, history of trauma, systemic signs, weight loss, or malignancy symptoms.",
      scenarios: [
        "Osteomyelitis",
        "Fracture",
        "Bone Tumor",
        "Metastasis",
        "Leukemia"
      ]
    },
    {
      title: "Bloating",
      approach: "Check dietary habits, bowel movements, associated pain, and changes in weight. Rule out IBS or obstruction.",
      scenarios: [
        "Irritable Bowel Syndrome (IBS)",
        "Constipation",
        "Ovarian Mass",
        "Lactose Intolerance",
        "Partial Obstruction"
      ]
    },
    {
      title: "Back Pain",
      approach: "Determine location, radiation, red flag symptoms, neurological signs, and relation to movement or posture.",
      scenarios: [
        "Muscular Strain",
        "Herniated Disc",
        "Vertebral Fracture",
        "Spinal Cord Compression",
        "Renal Colic"
      ]
    },
    {
      title: "Behavior Change",
      approach: "Ask about onset, social or environmental changes, drug use, head trauma, or psychiatric symptoms.",
      scenarios: [
        "Dementia",
        "Delirium",
        "Psychosis",
        "Depression",
        "Substance Abuse"
      ]
    },
    {
      title: "Breast Pain",
      approach: "Ask about menstrual relation, lump, nipple discharge, trauma, or history of infection or cancer.",
      scenarios: [
        "Mastitis",
        "Fibrocystic Breast Disease",
        "Hormonal Pain",
        "Trauma",
        "Infection"
      ]
    },
    {
      title: "Breast Swelling",
      approach: "Evaluate for tenderness, redness, fever, nipple discharge, or palpable mass.",
      scenarios: [
        "Mastitis",
        "Breast Abscess",
        "Fibroadenoma",
        "Cyst",
        "Breast Cancer"
      ]
    },
    {
      title: "Breast Lump",
      approach: "Ask about duration, changes in size, pain, nipple involvement, or skin changes.",
      scenarios: [
        "Breast Cancer",
        "Fibroadenoma",
        "Breast Cyst",
        "Lipoma",
        "Intraductal Papilloma"
      ]
    },
    {
      title: "Chest Tightness",
      approach: "Clarify onset, triggers, associated symptoms like dyspnea or palpitations, and any cardiac risk factors.",
      scenarios: [
        "Angina",
        "Anxiety",
        "Asthma",
        "Myocardial Infarction",
        "Pericarditis"
      ]
    },
    {
      title: "Confusion",
      approach: "Ask about baseline mental status, onset, medication history, metabolic conditions, or infections.",
      scenarios: [
        "Delirium",
        "Dementia",
        "Hypoglycemia",
        "Electrolyte Imbalance",
        "UTI"
      ]
    },
    {
      title: "Cough",
      approach: "Evaluate duration, sputum, blood, fever, weight loss, smoking history, and night sweats.",
      scenarios: [
        "Pneumonia",
        "Bronchitis",
        "Tuberculosis",
        "Lung Cancer",
        "COPD"
      ]
    },
    {
      title: "Diarrhea",
      approach: "Check duration, frequency, blood/mucus in stool, travel history, diet, and associated symptoms.",
      scenarios: [
        "Gastroenteritis",
        "IBS",
        "Inflammatory Bowel Disease (IBD)",
        "Food Poisoning",
        "C. difficile Infection"
      ]
    },
    {
      title: "Discolored Tongue",
      approach: "Ask about oral hygiene, medication use, smoking, and systemic symptoms.",
      scenarios: [
        "Oral Thrush",
        "Black Hairy Tongue",
        "Vitamin B12 Deficiency",
        "Lichen Planus",
        "Poor Oral Hygiene"
      ]
    },
    {
      title: "Delayed Speaking",
      approach: "Explore developmental history, hearing, family history, and neurological signs.",
      scenarios: [
        "Autism Spectrum Disorder",
        "Hearing Loss",
        "Global Developmental Delay",
        "Neglect",
        "Cerebral Palsy"
      ]
    },
    {
      title: "Dizziness",
      approach: "Distinguish vertigo from light-headedness, assess duration, triggers, and associated nausea or hearing changes.",
      scenarios: [
        "Benign Paroxysmal Positional Vertigo (BPPV)",
        "Meniere's Disease",
        "Vestibular Neuritis",
        "Anemia",
        "Postural Hypotension"
      ]
    },
    {
      title: "Difficulty Swallowing",
      approach: "Differentiate between solids/liquids, pain on swallowing, associated weight loss or regurgitation.",
      scenarios: [
        "Esophageal Stricture",
        "Achalasia",
        "Oesophageal Cancer",
        "Pharyngitis",
        "GERD"
      ]
    },
    {
      title: "Enuresis",
      approach: "Determine if primary or secondary, nighttime/daytime pattern, psychosocial stressors, and fluid intake.",
      scenarios: [
        "Primary Nocturnal Enuresis",
        "UTI",
        "Diabetes Mellitus",
        "Constipation",
        "Emotional Stress"
      ]
    },
    {
      title: "Excessive Sweating",
      approach: "Ask about triggers, timing, associated weight loss, palpitations, or fevers.",
      scenarios: [
        "Hyperthyroidism",
        "Tuberculosis",
        "Menopause",
        "Anxiety",
        "Lymphoma"
      ]
    },
    {
      title: "Eye Pain",
      approach: "Determine onset, trauma history, vision changes, discharge, or photophobia.",
      scenarios: [
        "Conjunctivitis",
        "Foreign Body",
        "Uveitis",
        "Acute Glaucoma",
        "Keratitis"
      ]
    },
    {
      title: "Eye Itchiness",
      approach: "Check for allergy triggers, discharge, seasonal pattern, or contact lens use.",
      scenarios: [
        "Allergic Conjunctivitis",
        "Dry Eye Syndrome",
        "Contact Lens Irritation",
        "Blepharitis",
        "Dust Allergy"
      ]
    },
    {
      title: "Ear Pain",
      approach: "Ask about fever, discharge, recent URTI, trauma, and hearing loss.",
      scenarios: [
        "Otitis Media",
        "Otitis Externa",
        "Foreign Body",
        "Tonsillitis Referred Pain",
        "Barotrauma"
      ]
    },
    {
      title: "Ear Discharge",
      approach: "Assess onset, color, odor, hearing change, and recent infections or trauma.",
      scenarios: [
        "Chronic Suppurative Otitis Media (CSOM)",
        "Otitis Externa",
        "Foreign Body",
        "Tympanic Membrane Perforation",
        "Trauma"
      ]
    },
    {
      title: "Erectile Dysfunction",
      approach: "Ask about libido, morning erections, relationship stress, systemic illness, or drug use.",
      scenarios: [
        "Psychogenic ED",
        "Diabetes Mellitus",
        "Vascular Disease",
        "Medication Side Effect",
        "Hypogonadism"
      ]
    },
    {
      title: "Elbow Pain",
      approach: "Determine if related to trauma, overuse, swelling, redness, or restricted movement.",
      scenarios: [
        "Tennis Elbow (Lateral Epicondylitis)",
        "Golfer’s Elbow (Medial Epicondylitis)",
        "Olecranon Bursitis",
        "Fracture",
        "Gout"
      ]
    },
    {
      title: "Facial pain/Jaw pain",
      approach: "Ask about trauma, dental issues, TMJ symptoms, and radiation of pain.",
      scenarios: ["TMJ dysfunction", "Dental abscess", "Sinusitis"]
    },
    {
      title: "Forgetfulness",
      approach: "Explore memory issues, progression, daily functioning, and family concerns.",
      scenarios: ["Dementia", "Mild Cognitive Impairment", "Depression"]
    },
    {
      title: "Facial drooping",
      approach: "Ask about onset, associated weakness, speech changes, and past episodes.",
      scenarios: ["Bell's palsy", "Stroke", "TIA"]
    },
    {
      title: "Fall",
      approach: "Explore mechanism, loss of consciousness, injuries, and underlying causes.",
      scenarios: ["Syncope", "Mechanical fall", "Seizure"]
    },
    {
      title: "Fits/convulsion",
      approach: "Ask about aura, duration, movements, recovery, and triggers.",
      scenarios: ["Epilepsy", "Febrile convulsion", "Syncope"]
    },
    {
      title: "Fever",
      approach: "Ask about duration, pattern, associated symptoms, recent travel, and exposures.",
      scenarios: ["URTI", "UTI", "Malaria"]
    },
    {
      title: "Foot pain",
      approach: "Ask about trauma, walking pattern, swelling, and underlying diseases.",
      scenarios: ["Plantar fasciitis", "Fracture", "Gout"]
    },
    {
      title: "Flue-like symptoms",
      approach: "Ask about fever, cough, sore throat, fatigue, and exposures.",
      scenarios: ["Viral URTI", "Influenza", "COVID-19"]
    },
    {
      title: "Finger pain",
      approach: "Explore history of trauma, joint stiffness, swelling, and skin changes.",
      scenarios: ["Osteoarthritis", "Rheumatoid arthritis", "Gout"]
    },
    {
      title: "Groin swelling",
      approach: "Ask about duration, pain, reducibility, and changes with activity.",
      scenarios: ["Inguinal hernia", "Lymphadenopathy", "Femoral hernia"]
    },
    {
      title: "Heart burn",
      approach: "Explore relation to food, position, timing, and associated symptoms.",
      scenarios: ["GERD", "Peptic ulcer disease", "Hiatal hernia"]
    },
    {
      title: "Headache",
      approach: "Ask about onset, severity, aura, location, and associated symptoms.",
      scenarios: ["Migraine", "Tension headache", "Cluster headache"]
    },
    {
      title: "Hoarseness of voice",
      approach: "Ask about onset, duration, use of voice, and associated symptoms.",
      scenarios: ["Laryngitis", "Vocal cord polyp", "Thyroid mass"]
    },
    {
      title: "Hair loss",
      approach: "Explore timing, pattern, associated itching or skin changes, stress.",
      scenarios: ["Alopecia areata", "Tinea capitis", "Telogen effluvium"]
    },
    {
      title: "Head itchiness",
      approach: "Ask about duration, associated hair loss or scaling, and contacts.",
      scenarios: ["Scalp psoriasis", "Head lice", "Seborrheic dermatitis"]
    },
    {
      title: "Hip pain",
      approach: "Ask about walking difficulty, trauma, radiation, and stiffness.",
      scenarios: ["Osteoarthritis", "Hip fracture", "Trochanteric bursitis"]
    },
    {
      title: "Hand pain",
      approach: "Ask about grip strength, stiffness, swelling, and trauma.",
      scenarios: ["Carpal tunnel", "Rheumatoid arthritis", "Osteoarthritis"]
    },
    {
      title: "Haematuria",
      approach: "Ask about timing in stream, associated pain, fever, and clots.",
      scenarios: ["UTI", "Bladder cancer", "Kidney stones"]
    },
    {
      title: "Hearing loss",
      approach: "Explore laterality, duration, noise exposure, discharge, and tinnitus.",
      scenarios: ["Wax impaction", "Otitis media", "Presbycusis"]
    },
    {
      title: "Hand swelling",
      approach: "Ask about duration, pain, redness, trauma, and systemic symptoms.",
      scenarios: ["Cellulitis", "Arthritis", "Lymphedema"]
    },
    {
      title: "Insomnia",
      approach: "Ask about difficulty falling or staying asleep, stress, caffeine, or pain.",
      scenarios: ["Anxiety", "Depression", "Primary insomnia"]
    },
    {
      title: "Increased frequency urination",
      approach: "Ask about volume, pain, thirst, nocturia, and incontinence.",
      scenarios: ["UTI", "Diabetes mellitus", "Overactive bladder"]
    },
    {
      title: "Inconsolable crying",
      approach: "Explore onset, feeding, nappy output, temperature, and any trauma.",
      scenarios: ["Colic", "Intussusception", "UTI"]
    },
    {
      title: "Jaundice/yellowness of eyes",
      approach: "Ask about dark urine, pale stool, pruritus, and alcohol history.",
      scenarios: ["Hepatitis", "Gallstones", "Pancreatic cancer"]
    },
    {
      title: "Knee pain",
      approach: "Ask about trauma, swelling, mechanical symptoms, and stiffness.",
      scenarios: ["Osteoarthritis", "Ligament injury", "Gout"]
    },
    {
      title: "Leg Pain",
      approach: "Assess location, trauma history, and signs of DVT or infection.",
      scenarios: ["DVT", "Cellulitis", "Muscle strain"]
    },
    {
      title: "Loin Pain",
      approach: "Rule out renal pathology and musculoskeletal causes.",
      scenarios: ["Renal colic", "Pyelonephritis", "Muscle strain"]
    },
    {
      title: "Leg Swelling",
      approach: "Check for DVT, chronic venous insufficiency, or heart failure.",
      scenarios: ["DVT", "Heart Failure", "Lymphedema"]
    },
    {
      title: "Leg Ulcer",
      approach: "Identify type of ulcer (venous, arterial, diabetic) and check for infection.",
      scenarios: ["Venous ulcer", "Arterial ulcer", "Diabetic ulcer"]
    },
    {
      title: "Low Mood",
      approach: "Explore duration, severity, and impact on daily life.",
      scenarios: ["Depression", "Grief", "Bipolar disorder"]
    },
    {
      title: "Movement Issue",
      approach: "Evaluate coordination, strength, and neurologic deficits.",
      scenarios: ["Parkinson’s", "Stroke", "Cerebral palsy"]
    },
    {
      title: "Mood Swings",
      approach: "Assess frequency, triggers, and association with other symptoms.",
      scenarios: ["Bipolar disorder", "Cyclothymia", "PMDD"]
    },
    {
      title: "Neck Pain",
      approach: "Look for trauma, radiation of pain, and associated neuro symptoms.",
      scenarios: ["Cervical spondylosis", "Muscle strain", "Meningitis"]
    },
    {
      title: "Neck Lump",
      approach: "Check for consistency, mobility, duration, and signs of malignancy.",
      scenarios: ["Lymphadenopathy", "Thyroid nodule", "Branchial cyst"]
    },
    {
      title: "Nasal Blockage",
      approach: "Determine if bilateral or unilateral and check for infective signs.",
      scenarios: ["Allergic rhinitis", "Nasal polyps", "Deviated septum"]
    },
    {
      title: "Nipple Discharge",
      approach: "Note colour, laterality, and association with mass or pain.",
      scenarios: ["Galactorrhea", "Duct papilloma", "Breast cancer"]
    },
    {
      title: "Nose Bleeding",
      approach: "Assess frequency, triggers, and clotting history.",
      scenarios: ["Epistaxis", "Hypertension", "Coagulopathy"]
    },
    {
      title: "Palpitations",
      approach: "Evaluate onset, duration, frequency, and triggers.",
      scenarios: ["Atrial fibrillation", "Panic attack", "Hyperthyroidism"]
    },
    {
      title: "Painful Urination",
      approach: "Inquire about frequency, urgency, and discharge.",
      scenarios: ["UTI", "Prostatitis", "Urethritis"]
    },
    {
      title: "Per Rectal Bleeding",
      approach: "Identify colour, quantity, and associated bowel habit changes.",
      scenarios: ["Hemorrhoids", "Anal fissure", "Colorectal cancer"]
    },
    {
      title: "Poor Concentration",
      approach: "Check for mental health issues, sleep patterns, and substance use.",
      scenarios: ["ADHD", "Depression", "Anxiety"]
    },
    {
      title: "Penile Discharge",
      approach: "Ask about colour, consistency, and associated pain or ulcers.",
      scenarios: ["Gonorrhea", "Chlamydia", "Non-specific urethritis"]
    },
    {
      title: "Penile Ulcer",
      approach: "Assess number, pain, and duration of ulcers.",
      scenarios: ["Syphilis", "Herpes", "Chancroid"]
    },
    {
      title: "Perineal Pain",
      approach: "Determine relation to urination, defecation, or sitting.",
      scenarios: ["Prostatitis", "Pilonidal sinus", "Perineal abscess"]
    },
    {
      title: "Runny Nose",
      approach: "Assess for allergies or infection; note duration and associated symptoms.",
      scenarios: ["Common cold", "Allergic rhinitis", "Sinusitis"]
    },
    {
      title: "Red Eyes",
      approach: "Evaluate pain, discharge, and visual changes.",
      scenarios: ["Conjunctivitis", "Uveitis", "Glaucoma"]
    },
    {
      title: "Sneezing",
      approach: "Inquire about allergens, timing, and associated symptoms.",
      scenarios: ["Allergic rhinitis", "Common cold", "Irritant exposure"]
    },
    {
      title: "Shortness of Breath",
      approach: "Determine triggers, severity, and associated symptoms.",
      scenarios: ["Asthma", "COPD", "Heart Failure"]
    },
    {
      title: "Skin Lesion",
      approach: "Describe appearance, duration, and changes over time.",
      scenarios: ["Melanoma", "Psoriasis", "Basal cell carcinoma"]
    },
    {
      title: "Skin Rash",
      approach: "Ask about onset, distribution, itchiness, and triggers.",
      scenarios: ["Eczema", "Urticaria", "Drug reaction"]
    },
    {
      title: "Skin Itchiness",
      approach: "Check for systemic symptoms and dermatological conditions.",
      scenarios: ["Scabies", "Cholestasis", "Eczema"]
    },
    {
      title: "Sore Mouth",
      approach: "Note ulcers, pain, and recent medications.",
      scenarios: ["Aphthous ulcers", "Oral candidiasis", "Lichen planus"]
    },
    {
      title: "Sore Throat",
      approach: "Check for fever, swallowing difficulty, and lymph nodes.",
      scenarios: ["Pharyngitis", "Tonsillitis", "Glandular fever"]
    },
    {
      title: "Shoulder Pain",
      approach: "Identify aggravating movements and associated trauma.",
      scenarios: ["Frozen shoulder", "Rotator cuff tear", "Dislocation"]
    },
    {
      title: "Suicide Attempt",
      approach: "Assess mental health history and immediate safety.",
      scenarios: ["Depression", "Borderline personality disorder", "Schizophrenia"]
    },
    {
      title: "Stress",
      approach: "Explore personal, work, and family sources of stress.",
      scenarios: ["Adjustment disorder", "Burnout", "Anxiety disorder"]
    },
    {
      title: "Toe Pain",
      approach: "Evaluate trauma, infection, or arthritis.",
      scenarios: ["Gout", "Cellulitis", "Fracture"]
    },
    {
      title: "Tiredness/Fatigue",
      approach: "Assess duration, sleep patterns, mental health, and screen for anaemia or hypothyroidism.",
      scenarios: ["Anaemia", "Depression", "Hypothyroidism"]
    },
    {
      title: "Testicular Lump",
      approach: "Assess for pain, consistency, and transillumination.",
      scenarios: ["Testicular Cancer", "Epididymal Cyst", "Hydrocele"]
    },
    {
      title: "Testicular Pain",
      approach: "Assess onset, trauma, and rule out torsion.",
      scenarios: ["Testicular Torsion", "Epididymo-orchitis"]
    },
    {
      title: "Tinnitus",
      approach: "Check for hearing loss, exposure to loud noise, medications.",
      scenarios: ["Meniere's Disease", "Acoustic Neuroma"]
    },
    {
      title: "Urine Leakage",
      approach: "Differentiate between stress, urge, or overflow incontinence.",
      scenarios: ["Urge Incontinence", "Stress Incontinence"]
    },
    {
      title: "Urine Retention",
      approach: "Assess for obstruction or neurological causes.",
      scenarios: ["BPH", "Urethral Stricture", "Cauda Equina Syndrome"]
    },
    {
      title: "Vomiting Blood",
      approach: "Assess volume, frequency, and associated symptoms.",
      scenarios: ["Peptic Ulcer", "Mallory-Weiss Tear", "Oesophageal Varices"]
    },
    {
      title: "Vaginal Discharge",
      approach: "Evaluate colour, odour, consistency, and associated symptoms.",
      scenarios: ["Bacterial Vaginosis", "Candidiasis", "Trichomoniasis"]
    },
    {
      title: "Vaginal Itching",
      approach: "Assess hygiene, discharge, and STIs.",
      scenarios: ["Candidiasis", "Allergy", "Lichen Sclerosus"]
    },
    {
      title: "Vaginal Bleeding",
      approach: "Assess menstrual pattern, postmenopausal bleeding, pregnancy status.",
      scenarios: ["Menorrhagia", "Fibroids", "Endometrial Cancer"]
    },
    {
      title: "Vaginal Lump/Bulge Sensation",
      approach: "Assess for prolapse, mass, or cysts.",
      scenarios: ["Uterine Prolapse", "Cystocele", "Bartholin Cyst"]
    },
    {
      title: "Vomiting",
      approach: "Check for triggers, frequency, associated symptoms.",
      scenarios: ["Gastroenteritis", "Pregnancy", "Raised ICP"]
    },
    {
      title: "Vulval Lump",
      approach: "Check for pain, duration, and sexual history.",
      scenarios: ["Bartholin Cyst", "Genital Warts"]
    },
    {
      title: "Visual Disturbance",
      approach: "Assess onset, pain, flashes, floaters.",
      scenarios: ["Retinal Detachment", "Migraine Aura", "Optic Neuritis"]
    },
    {
      title: "Weakness",
      approach: "Determine if general or focal, duration, and associated symptoms.",
      scenarios: ["Stroke", "Guillain-Barré Syndrome", "MS"]
    },
    {
      title: "Weight Gain",
      approach: "Assess diet, activity, and endocrine causes.",
      scenarios: ["Hypothyroidism", "Cushing's Syndrome"]
    },
    {
      title: "Weight Loss",
      approach: "Check for appetite, GI symptoms, and malignancy signs.",
      scenarios: ["Cancer", "Hyperthyroidism", "Diabetes"]
    },
    {
      title: "Wrist Pain",
      approach: "Assess history of trauma, overuse, and inflammation.",
      scenarios: ["Carpal Tunnel", "Fracture", "Arthritis"]
    },
    {
      title: "White Ring in Eyes",
      approach: "Check for age, lipid profile, and systemic signs.",
      scenarios: ["Arcus Senilis", "Hyperlipidaemia"]
    }
  
    // Add more complaints here as needed...
  ];
  const sortedComplaints = [...complaints].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  
  const [search, setSearch] = useState("");

  const filteredComplaints = sortedComplaints.filter((complaint) =>

    complaint.title.toLowerCase().includes(search.toLowerCase())
  );
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <h2>Presenting Complaints</h2>
      <p>Cases focused on initial patient symptoms and history-taking.</p>
  
      <input
        type="text"
        placeholder="Search complaints..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />
  
      <div className="complaint-grid">
      {filteredComplaints.map((item, index) => (
  <PresentingComplaintCard
    key={index}
    title={item.title}
    approach={item.approach}
    scenarios={item.scenarios}
    isOpen={openIndex === index}
    onClick={() => setOpenIndex(openIndex === index ? null : index)}
  />
))}

      </div>
    </div>
  );
  
  
}

export default PresentingComplaints;




