import { Patient } from "../interfaces/app";

const DUMMY_IMAGES = [
    'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=',
    'https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=',
    'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
    'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg',
    'https://image.shutterstock.com/image-photo/handsome-hispanic-millennial-man-sit-260nw-2174725871.jpg'
]

const DUMMY_LAB_RESULTS = ['Blood Tests', 'City Scans', 'Radiolgy Reports', 'x-ray', 'Urine Test', 'Heart Test', 'MIR', 'Cholestrol Test']

const DUMMY_DIAGNOSTIC_LIST = [
    { problem: 'Hyper Tension', desc: 'chronic high blood pressure', status: 'Under Observation' },
    { problem: 'Type 2 Diabetes', desc: 'Insulin resistence and elevated blood sugar', status: 'Inactive' },
    { problem: 'Asthma', desc: 'Recurrent position of  bronchial constriction', status: 'active' },
    { problem: 'Heart Disease', desc: 'Insulin resistence and elevated blood sugar', status: 'Cured' },
    { problem: 'Kidney Problems', desc: 'Recurrent position of  bronchial constriction', status: 'Testing' },
    { problem: 'Heart issues', desc: 'chronic high blood pressure', status: 'Cured' },
    { problem: 'Liver', desc: 'Insulin resistence and elevated blood suga', status: 'Non Cured' }
]

const DUMMY_CONTACTS = ['(415) 555-1234', '(415) 666-5678', '(415) 333-0293', '(415) 837-0934', '(415) 745-1344']

const DUMMY_NAMES = ['Emily Williams', 'Ryan Gosling', 'Tyler Davis', 'Kevin Anderson', 'Dylan Thompson']

const getRandomInteger = (min: number, max: number) => {
    // Ensure min is less than max
    if (min > max) {
        [min, max] = [max, min]; // Swap the values if min is greater than max
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getPatients = () => {
    const patients: Patient[] = []
    for (let i = 0; i < 20; i++) {
        patients.push({
            id: i + 1,
            img: DUMMY_IMAGES[getRandomInteger(0, 4)],
            name: DUMMY_NAMES[getRandomInteger(0, 4)],
            gender: i % 2 == 0 ? 'Female' : 'Male',
            age: getRandomInteger(16, 80),
            dob: new Date('2023-01-01'),
            contact: DUMMY_CONTACTS[getRandomInteger(0, 4)],
            emergencyContact: DUMMY_CONTACTS[getRandomInteger(0, 4)],
            insuranceProvider: 'Sunrise Health Assurance',
            history: {
                systolic: Array(6).fill(0).map((x) => { return getRandomInteger(40, 175) }),
                dystolic: Array(6).fill(0).map((x) => { return getRandomInteger(0, 140) }),
                temperture: {
                    value: getRandomInteger(40, 105),
                    status: 'Normal',
                },
                heartBeat: {
                    value: getRandomInteger(40, 100),
                    status: 'Lower than normal',
                },
                respiratory: {
                    value: getRandomInteger(40, 100),
                    status: 'Normal',
                }
            },
            labResults: Array(10).fill(0).map((x) => { return DUMMY_LAB_RESULTS[getRandomInteger(0, 7)] }),
            diagnosticList: Array(10).fill(0).map((x) => { return DUMMY_DIAGNOSTIC_LIST[getRandomInteger(0, 6)] })
        })
    }
    return patients;
}



