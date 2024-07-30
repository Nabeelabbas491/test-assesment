import logo from '../../assets/images/svg/topbar/app-logo.svg'
import home from '../../assets/images/svg/topbar/home.svg'
import patients from '../../assets/images/svg/topbar/contacts.svg'
import schedule from '../../assets/images/svg/topbar/calender.svg'
import chat from '../../assets/images/svg/topbar/chat.svg'
import transactions from '../../assets/images/svg/topbar/transactions.svg'
import move from '../../assets/images/svg/topbar/move.svg'
import settings from '../../assets/images/svg/topbar/settings.svg'
import { useState } from 'react'

function Header() {

    const [selectedOption, setSelectedOption] = useState<string>('Overview')

    const items = [
        { id: 1, icon: home, label: 'Overview' },
        { id: 2, icon: patients, label: 'Patients' },
        { id: 3, icon: schedule, label: 'Schedule' },
        { id: 4, icon: chat, label: 'Message' },
        { id: 5, icon: transactions, label: 'Transactions' },
    ]

    return (
        <header className="grid grid-cols-12 gap-4 bg-white py-3 px-7 rounded-full">
            <img className='col-span-12 md:col-span-3' src={logo} alt='Teach care logo' />
            <div className='flex justify-center col-span-12 md:col-span-6'>
                {items.map((item) => {
                    return <div className={`flex items-center px-6 ${selectedOption == item.label ? 'bg-[#01F0D0] rounded-[41px]' : ''}`} key={item.id}
                        onClick={() => setSelectedOption(item.label)}>
                        <img src={item.icon} width={20} />
                        <span className='pl-2 font-bold text-md leading-[19px] cursor-pointer'>{item.label}</span>
                    </div>
                })}
            </div>
            <div className='flex justify-end col-span-12 md:col-span-3'>
                <img className="rounded-[50%] object-cover" width={48} height={48} src={'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg'} />
                <div className='pl-4 pr-8'>
                    <div className='font-bold text-md text-[#072635] leading-5'>Dr. John Smith</div>
                    <div className='font-bold text-md text-[#707070] leading-5'>General Practictioner</div>
                </div>
                <img className='mr-3 cursor-pointer' src={settings} width={20} />
                <img className='cursor-pointer' src={move} width={5} />
            </div>
        </header>
    );
}

export default Header;
