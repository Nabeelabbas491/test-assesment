
import dob from '../../assets/images/svg/patient-profile/dob.svg'
import gender from '../../assets/images/svg/patient-profile/gender.svg'
import phone from '../../assets/images/svg/patient-profile/phone.svg'
import insurance from '../../assets/images/svg/patient-profile/insurance.svg'
import { PatientProps } from '../../data/interfaces/app';

function PatientProfile(props: PatientProps) {
    return (
        <div className="bg-white rounded-2xl p-5">
            <div className="flex justify-center">
                <img className="rounded-full object-cover h-[200px] w-[200px]" src={props.selectedPatient?.img} />
            </div>
            <div className="font-extrabold text-xl text-[#072635] leading-0 text-center mt-4">{props.selectedPatient?.name}</div>
            <div className="flex items-center mt-4">
                <img src={dob} />
                <div className='pl-3'>
                    <span className="font-normal text-md text-[#072635] leading-0">Date of birth</span><br />
                    <span className="font-bold text-md text-[#072635] leading-0">August 23, 1993</span>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <img src={gender} />
                <div className='pl-3'>
                    <span className="font-normal text-md text-[#072635] leading-0">Gender</span><br />
                    <span className="font-bold text-md text-[#072635] leading-0">{props.selectedPatient?.gender}</span>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <img src={phone} />
                <div className='pl-3'>
                    <span className="font-normal text-md text-[#072635] leading-0">Contact Info</span><br />
                    <span className="font-bold text-md text-[#072635] leading-0">{props.selectedPatient?.contact}</span>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <img src={phone} />
                <div className='pl-3'>
                    <span className="font-normal text-md text-[#072635] leading-0">Emergency Contact</span><br />
                    <span className="font-bold text-md text-[#072635] leading-0">{props.selectedPatient?.emergencyContact}</span>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <img src={insurance} />
                <div className='pl-3'>
                    <span className="font-normal text-md text-[#072635] leading-0">Insurance Provider</span><br />
                    <span className="font-bold text-md text-[#072635] leading-0">{props.selectedPatient?.insuranceProvider}</span>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <button className='bg-[#01F0D0] rounded-[41px] py-3 px-8 font-bold text-md leading-5'>
                    Show All Information
                </button>
            </div>
        </div>
    );
}

export default PatientProfile