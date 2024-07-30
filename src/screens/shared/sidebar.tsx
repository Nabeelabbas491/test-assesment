import search from "../../assets/images/svg/sidebar/search.svg"
import more from "../../assets/images/svg/sidebar/more-horizontal.svg"
import { useEffect, useState } from "react";
import { Patient, SideBarProps } from "../../data/interfaces/app";
import { getPatients } from "../../data/utils/app";

function SideBar(props: SideBarProps) {

    const [data, setData] = useState<Patient[]>([])
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

    useEffect(() => {
        setData(getPatients())
    }, [])

    useEffect(() => {
        updatePatient(selectedPatient?.id || data[0]?.id)
    }, [data])

    const updatePatient = (id: number) => {
        const patient = data.find(x => x.id == id)
        if (patient) {
            setSelectedPatient(patient)
            props.updatePatient(patient)
        }
    }

    return (
        <div className='bg-white rounded-2xl'>
            <div className="flex justify-between pt-5 px-5">
                <span className="font-extrabold text-xl text-[#072635] leading-[33px]">Patients</span>
                <img className="cursor-pointer" src={search} alt="patients search icon" />
            </div>
            <div className="py-4">
                <div className="h-[750px] thin-overflow">
                    {data.map((item: Patient) => {
                        return <div className={`flex items-center justify-between py-3 px-5 cursor-pointer ${selectedPatient?.id == item.id ? 'bg-[#D8FCF7]' : ''}`}
                            key={item.id} onClick={() => updatePatient(item.id)}>
                            <div className="flex">
                                <img className="rounded-full object-cover" src={item.img} width={48} height={48} />
                                <div className="pl-3">
                                    <span className="font-bold text-md text-[#072635] leading-[19px]">{item.name}</span> <br />
                                    <span className="font-normal text-md text-[#707070] leading-[19px]">{item.gender}, {item.age}</span>
                                </div>
                            </div>
                            <img className="cursor-pointer" src={more} alt="more details about patients logo" />
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
