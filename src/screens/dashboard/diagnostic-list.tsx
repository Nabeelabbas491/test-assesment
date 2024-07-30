import { PatientProps } from "../../data/interfaces/app";

function DiagnosticList(props: PatientProps) {
    return (
        <div className="bg-white rounded-2xl p-5">
            <div className="font-extrabold text-xl text-[#072635] leading-0">Diagnostic List</div>
            <div className="w-full rounded-3xl flex bg-[#F6F7F8] px-3 py-4 mt-4">
                <div className="w-1/4 font-bold text-md leading-19 text-[#072635] text-center">Problem/diagnostic</div>
                <div className="w-1/2 font-bold text-md leading-19 text-[#072635] text-center">Description</div>
                <div className="w-1/4 font-bold text-md leading-19 text-[#072635] text-center">Status</div>
            </div>
            <div className="h-[200px] thin-overflow">
                {props.selectedPatient?.diagnosticList.map((item, i) => {
                    return <div className="w-full flex p-3 mt-4" key={`${item}-${i}`}>
                        <div className="w-1/4 font-normal text-md leading-19 text-[#072635] text-center">{item.problem}</div>
                        <div className="w-1/2 font-normal text-md leading-19 text-[#072635] text-center">{item.desc}</div>
                        <div className="w-1/4 font-normal text-md leading-19 text-[#072635] text-center">{item.status}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default DiagnosticList