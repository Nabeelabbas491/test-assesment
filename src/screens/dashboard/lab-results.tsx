import download from "../../assets/images/svg/lab-results/download.svg"
import { PatientProps } from "../../data/interfaces/app";

function LabResults(props: PatientProps) {
    return (
        <div className="bg-white rounded-2xl h-[270px]">
            <div className="font-extrabold text-xl text-[#072635] leading-0 pt-3 px-5">Lab Results</div>
            <div className="h-[200px] thin-overflow">
                {props.selectedPatient?.labResults.map((item, i) => {
                    return <div className="flex justify-between items-center py-2 px-5" key={`${item}-${i}`}>
                        <span className="font-normal text-[13px] leading-18 text-[#072635]">{item}</span>
                        <img src={download} alt="lab result downlaod icon" />
                    </div>
                })}
            </div>
        </div>
    );
}

export default LabResults