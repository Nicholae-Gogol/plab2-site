import React from "react";
import { Container, Table } from "react-bootstrap";
import "./NeurologyScenarios.css";

// Data: 9 topics and 20 scenarios total
const neurologyData = [
    {
        topicName: "Head Injury",
        scenarios: [
          {
            image: "/images/head-injury.jpg",
            scenarioName: "Head Injury in Adult",
            googleDriveLink: "https://docs.google.com/document/d/1GG7zAFuhKlZAhweRLbQOl743SkhV6r6E5vtoKnCM3uo/edit?tab=t.0/drive-link-head-injury",
            caseDescription: `You are an F2 doctor in the A&E department. A 40-year-old man is brought in by ambulance after a fall.
      He was at a restaurant with his wife and had one pint of beer.
      Upon leaving, he tripped over something and fell.
      He lost consciousness immediately and only woke up in the ambulance.
      He has vomited several times in the ambulance.
      He has some amnesia, not remembering what happened.`,
            dataGathering: "Ask about LOC, dizziness, vomiting, seizures.",
            management: "Perform CT scan, monitor GCS, consider neurosurgery consult.",
            interpersonal: "Reassure and explain steps clearly."
          }
        ]
      },
  {
    topicName: "Primary Headache",
    scenarios: [
      {
        image: "/images/primary-headache1.jpg",
        scenarioName: "Migraine Headache",
        googleDriveLink: "https://drive.google.com/drive-link-migraine",
        caseDescription: "A 25-year-old woman with recurring migraines.",
        dataGathering: "Ask about frequency, triggers, aura, medication use.",
        management: "Abortive therapy and prophylactic meds if frequent.",
        interpersonal: "Acknowledge impact and provide a clear plan."
      },
      {
        image: "/images/primary-headache2.jpg",
        scenarioName: "Tension Headache",
        googleDriveLink: "https://drive.google.com/drive-link-tension",
        caseDescription: "A 35-year-old teacher with chronic stress and band-like headaches.",
        dataGathering: "Explore stressors, posture, and medication history.",
        management: "Stress management, NSAIDs, and muscle relaxants.",
        interpersonal: "Encourage relaxation and provide reassurance."
      }
    ]
  },
  {
    topicName: "Space Occupying Lesion",
    scenarios: [
      {
        image: "/images/space-occupying.jpg",
        scenarioName: "Raised Intracranial Pressure",
        googleDriveLink: "https://drive.google.com/drive-link-space",
        caseDescription: "A patient with signs of raised intracranial pressure.",
        dataGathering: "Ask about morning headaches, vomiting, vision changes.",
        management: "MRI/CT imaging and neurosurgical referral.",
        interpersonal: "Clarify the seriousness and offer support."
      }
    ]
  },
  {
    topicName: "Seizure",
    scenarios: [
      {
        image: "/images/seizure.jpg",
        scenarioName: "First Seizure in Adult",
        googleDriveLink: "https://drive.google.com/drive-link-seizure",
        caseDescription: "A patient experiencing a first seizure episode.",
        dataGathering: "Obtain witness account, assess postictal state, and history.",
        management: "Perform EEG, imaging, and provide safety counseling.",
        interpersonal: "Reassure and educate about seizure precautions."
      }
    ]
  },
  {
    topicName: "Transient Ischemic Attack (TIA)",
    scenarios: [
      {
        image: "/images/tia1.jpg",
        scenarioName: "TIA in General Practice",
        googleDriveLink: "https://drive.google.com/drive-link-tia-gp",
        caseDescription: "A patient with transient focal deficits in a GP setting.",
        dataGathering: "Ask about onset, risk factors, and deficits.",
        management: "Start aspirin and refer urgently to a stroke clinic.",
        interpersonal: "Explain differences between TIA and stroke."
      },
      {
        image: "/images/tia2.jpg",
        scenarioName: "TIA in A&E",
        googleDriveLink: "https://drive.google.com/drive-link-tia-ae",
        caseDescription: "A patient presenting to A&E with TIA symptoms.",
        dataGathering: "Rapid assessment of onset and neurological deficits.",
        management: "Urgent imaging and possible dual antiplatelet therapy.",
        interpersonal: "Reassure and discuss management options."
      },
      {
        image: "/images/tia3.jpg",
        scenarioName: "TIA - Talk to Husband",
        googleDriveLink: "https://drive.google.com/drive-link-tia-husband",
        caseDescription: "A patient with TIA and family involvement.",
        dataGathering: "Assess understanding from both patient and family.",
        management: "Ensure follow-up and provide clear medication instructions.",
        interpersonal: "Offer a clear explanation and reassurance."
      }
    ]
  },
  {
    topicName: "Bleeding Strokes",
    scenarios: [
      {
        image: "/images/bleeding1.jpg",
        scenarioName: "Stroke at Home",
        googleDriveLink: "https://drive.google.com/drive-link-stroke-home",
        caseDescription: "A patient experiencing a hemorrhagic stroke at home.",
        dataGathering: "Identify hemorrhagic signs and establish a timeline.",
        management: "Immediate neuroimaging and consult neurosurgery.",
        interpersonal: "Explain urgency and support family involvement."
      },
      {
        image: "/images/bleeding2.jpg",
        scenarioName: "Chronic Subdural Hematoma",
        googleDriveLink: "https://drive.google.com/drive-link-subdural",
        caseDescription: "An elderly patient with a chronic subdural hematoma.",
        dataGathering: "History of mild trauma and gradual neurological decline.",
        management: "CT scan and neurosurgical drainage if indicated.",
        interpersonal: "Discuss progression and provide reassurance."
      },
      {
        image: "/images/bleeding3.jpg",
        scenarioName: "Subarachnoid Hemorrhage",
        googleDriveLink: "https://drive.google.com/drive-link-sah",
        caseDescription: "A patient with a sudden, severe headache suggestive of SAH.",
        dataGathering: "Ask about sudden onset, neck stiffness, and photophobia.",
        management: "Perform CTA/MRA and arrange for neurosurgical intervention.",
        interpersonal: "Convey the urgency and offer emotional support."
      }
    ]
  },
  {
    topicName: "Movement Disorders",
    scenarios: [
      {
        image: "/images/movement1.jpg",
        scenarioName: "Parkinson's Disease",
        googleDriveLink: "https://drive.google.com/drive-link-parkinsons",
        caseDescription: "A patient with classic signs of Parkinson's disease.",
        dataGathering: "Ask about tremor, rigidity, bradykinesia, and balance.",
        management: "Start Levodopa therapy and refer for physiotherapy.",
        interpersonal: "Discuss long-term management and support services."
      },
      {
        image: "/images/movement2.jpg",
        scenarioName: "Cerebellar Ataxia",
        googleDriveLink: "https://drive.google.com/drive-link-ataxia",
        caseDescription: "A patient presenting with gait disturbance and incoordination.",
        dataGathering: "Evaluate coordination, speech, and family history.",
        management: "Investigate underlying causes and refer to rehabilitation.",
        interpersonal: "Set realistic expectations and encourage family support."
      },
      {
        image: "/images/movement3.jpg",
        scenarioName: "Essential Tremors",
        googleDriveLink: "https://drive.google.com/drive-link-tremors",
        caseDescription: "A patient with an action tremor exacerbated by stress.",
        dataGathering: "Check family history, stress levels, and medication use.",
        management: "Trial beta blockers and consider primidone if severe.",
        interpersonal: "Reassure about the benign nature and discuss coping strategies."
      }
    ]
  },
  {
    topicName: "Nerve Disorders",
    scenarios: [
      {
        image: "/images/nerve1.jpg",
        scenarioName: "Bell's Palsy",
        googleDriveLink: "https://drive.google.com/drive-link-bells",
        caseDescription: "A patient presenting with acute unilateral facial paralysis.",
        dataGathering: "Ask about facial droop, eye closure, and recent infections.",
        management: "Administer steroids and advise on eye protection.",
        interpersonal: "Reassure about a generally good prognosis."
      },
      {
        image: "/images/nerve2.jpg",
        scenarioName: "Trigeminal Neuralgia",
        googleDriveLink: "https://drive.google.com/drive-link-trigeminal",
        caseDescription: "A patient with severe, intermittent facial pain.",
        dataGathering: "Identify pain triggers and precise distribution.",
        management: "Start carbamazepine and consider surgical options if needed.",
        interpersonal: "Address pain impact and set realistic treatment expectations."
      },
      {
        image: "/images/nerve3.jpg",
        scenarioName: "Guillain-Barré Syndrome",
        googleDriveLink: "https://drive.google.com/drive-link-gbs",
        caseDescription: "A patient with ascending weakness following an infection.",
        dataGathering: "Assess progression, reflexes, and recent illness.",
        management: "Initiate IVIG or plasmapheresis and monitor respiratory status.",
        interpersonal: "Explain the acute course and provide family support."
      },
      {
        image: "/images/nerve4.jpg",
        scenarioName: "Peripheral Neuropathy",
        googleDriveLink: "https://drive.google.com/drive-link-peripheral",
        caseDescription: "A diabetic patient with numbness and tingling in the extremities.",
        dataGathering: "Evaluate diabetic history and sensory examination.",
        management: "Optimize glycemic control and consider neuropathic pain medications.",
        interpersonal: "Provide education on management and supportive care."
      }
    ]
  },
  {
    topicName: "Brain Infections",
    scenarios: [
      {
        image: "/images/brain-infections1.jpg",
        scenarioName: "Bacterial Meningitis",
        googleDriveLink: "https://drive.google.com/drive-link-bacterial",
        caseDescription: "A patient with fever, neck stiffness, and altered mental status.",
        dataGathering: "Assess for fever, neck stiffness, photophobia, and rash.",
        management: "Initiate IV antibiotics and provide supportive care.",
        interpersonal: "Emphasize urgency and involve family in decision-making."
      },
      {
        image: "/images/brain-infections2.jpg",
        scenarioName: "Viral Encephalitis",
        googleDriveLink: "https://drive.google.com/drive-link-viral",
        caseDescription: "A patient with headache, confusion, and focal neurological deficits.",
        dataGathering: "Gather history of viral exposure and immune status.",
        management: "Start acyclovir and provide intensive supportive care.",
        interpersonal: "Discuss potential complications and monitor closely."
      }
    ]
  }
];

const NeurologyScenarios = () => {
  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="m-0">Neurology Scenarios</h1>
        <a
          href="https://your-neurology-questions-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Approach to Neurology
        </a>
      </div>
      <Table striped bordered hover responsive>
        <tbody>
          {neurologyData.map((topic, tIndex) => (
            <React.Fragment key={tIndex}>
              {/* Colored Topic Row with column labels */}
              <tr className="topic-row">
                <td>{topic.topicName}</td>
                <td>Scenario</td>
                <td>Data Gathering</td>
                <td>Management</td>
                <td>Interpersonal skills</td>
              </tr>
              {/* Scenario rows for each topic */}
              {topic.scenarios.map((scenario, sIndex) => (
                <tr key={sIndex}>
                  <td className="scenario-image-cell">
                    <img
                      src={scenario.image}
                      alt={scenario.scenarioName}
                      className="scenario-image"
                    />
                  </td>
                  <td>
                    <strong>{scenario.scenarioName}</strong>
                    <br />
                    <em className="case-description">{scenario.caseDescription}</em>
                    <br />
                    <a
                      href={scenario.googleDriveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="google-drive-link"
                    >
                      View Notes
                    </a>
                  </td>
                  <td>{scenario.dataGathering}</td>
                  <td>{scenario.management}</td>
                  <td>{scenario.interpersonal}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default NeurologyScenarios;


