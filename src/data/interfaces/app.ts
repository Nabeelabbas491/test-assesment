
type gender = 'Male' | 'Female'

export interface Patient {
    id: number,
    img: string,
    name: string,
    gender: gender,
    age: number,
    dob: Date,
    contact: string,
    emergencyContact: string,
    insuranceProvider: string,
    history: History,
    labResults: string[],
    diagnosticList: DiagnosticList[]
}

export interface History {
    systolic: number[],
    dystolic: number[],
    temperture: HistoryData,
    heartBeat: HistoryData,
    respiratory: HistoryData
}

export interface HistoryData {
    value: number,
    status: string,
}

export interface DiagnosticList {
    problem: string,
    desc: string,
    status: string
}

export interface SideBarProps {
    updatePatient: (event: Patient) => void,
}

export interface PatientProps {
    selectedPatient: Patient | null
}