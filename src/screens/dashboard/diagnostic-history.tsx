import respiratoryRate from "../../assets/images/svg/diagnostic-history/respiratory-rate.svg"
import temperature from "../../assets/images/svg/diagnostic-history/temperature.svg"
import heartBeat from "../../assets/images/svg/diagnostic-history/heartbeat.svg"
import arrowUp from "../../assets/images/svg/diagnostic-history/arrow-up.svg"
import arrowDown from "../../assets/images/svg/diagnostic-history/arrow-down.svg"
import HistoryChart from "./diagnostic-chart";
import { Patient, PatientProps } from "../../data/interfaces/app";

function DiagnosticHistory(props: PatientProps) {
    return (
        <div className="bg-white rounded-2xl p-5">
            <div className="font-extrabold text-xl text-[#072635] leading-0">Diagnostic History</div>
            <div className="grid grid-cols-12 gap-4 mt-4 bg-[#F4F0FE] rounded-xl p-5">
                <div className="col-span-12  md:col-span-9">
                    <HistoryChart selectedPatient={props.selectedPatient} />
                </div>
                <div className="col-span-12 md:col-span-3">
                    <div>
                        <div className="flex items-center">
                            <div className="w-[14px] h-[14px] rounded-full bg-[#E66FD2] border-4"></div>
                            <div className="font-bold text-md text-[#072635] leading-5 pl-1">Systolic</div>
                        </div>
                        <div className="font-bold text-xxl text-[#072635] leading-[30px] mt-3">160</div>
                        <div className="flex items-center mt-3">
                            <img src={arrowUp} />
                            <div className="font-normal text-md text-[#072635] leading-5 pl-2">Higher Than avergae</div>
                        </div>
                    </div>
                    <hr className="border-[#bfbfbf] my-4" />
                    <div>
                        <div className="flex items-center">
                            <div className="w-[14px] h-[14px] rounded-full bg-[#8C6FE6] border-4"></div>
                            <div className="font-bold text-md text-[#072635] leading-5 pl-1">Dystolic</div>
                        </div>
                        <div className="font-bold text-xxl text-[#072635] leading-[30px] mt-3">78</div>
                        <div className="flex items-center mt-3">
                            <img src={arrowDown} />
                            <div className="font-normal text-md text-[#072635] leading-5 pl-2">Lower Than avergae</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-[#E0F3FA] rounded-xl p-4">
                    <img src={respiratoryRate} />
                    <div className="mt-4">
                        <div className="font-medium text-base text-[#072635]">Respirtory Rate</div>
                        <div className="font-extrabold text-xxl text-[#072635] leading-10">{props?.selectedPatient?.history.respiratory.value} bpm</div>
                    </div>
                    <div className="font-normal leading-5 text-md text-[#072635] mt-6">{props?.selectedPatient?.history.respiratory.status}</div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-[#FFE6E9] rounded-xl p-4">
                    <img src={temperature} />
                    <div className="mt-4">
                        <div className="font-medium text-base text-[#072635]">Temperature</div>
                        <div className="font-extrabold text-xxl text-[#072635] leading-10">{props?.selectedPatient?.history.temperture.value} °F</div>
                    </div>
                    <div className="font-normal leading-5 text-md text-[#072635] mt-6">{props?.selectedPatient?.history.temperture.status}</div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-[#FFE6F1] rounded-xl p-4">
                    <img src={heartBeat} />
                    <div className="mt-4">
                        <div className="font-medium text-base text-[#072635]">HeartBeat</div>
                        <div className="font-extrabold text-xxl text-[#072635] leading-10">{props?.selectedPatient?.history.heartBeat.value} bpm</div>
                    </div>
                    <div className="font-normal leading-5 text-md text-[#072635] mt-6">{props?.selectedPatient?.history.heartBeat.status}</div>
                </div>
            </div>

        </div>
    );
}

export default DiagnosticHistory