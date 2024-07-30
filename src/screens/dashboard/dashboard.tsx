import { useState } from "react";
import { Patient } from "../../data/interfaces/app";
import Header from "../shared/header";
import SideBar from "../shared/sidebar";
import DiagnosticHistory from "./diagnostic-history";
import DiagnosticList from "./diagnostic-list";
import LabResults from "./lab-results";
import PatientProfile from "./patient-profile";

function Dashboard() {

    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

    const updatePatientDetails = (data: Patient) => {
        data && setSelectedPatient(data)
    }

    return (
        <div className='h-full'>
            <div className="p-4">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Header />
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <SideBar updatePatient={(data: Patient) => updatePatientDetails(data)} />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div>
                            <DiagnosticHistory selectedPatient={selectedPatient} />
                        </div>
                        <div className="mt-4">
                            <DiagnosticList selectedPatient={selectedPatient} />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <div>
                            <PatientProfile selectedPatient={selectedPatient} />
                        </div>
                        <div className="mt-4">
                            <LabResults selectedPatient={selectedPatient} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
