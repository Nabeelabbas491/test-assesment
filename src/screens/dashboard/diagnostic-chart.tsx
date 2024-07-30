import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Patient, PatientProps } from '../../data/interfaces/app';
import { useEffect, useState } from 'react';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const HistoryChart = (props: PatientProps) => {

    const [systolic, setSystolic] = useState<number[]>([])
    const [dystolic, setDystolic] = useState<number[]>([])

    const data = {
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [
            {
                label: 'Systolic',
                data: systolic,
                borderColor: '#E66FD2',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                pointBackgroundColor: '#E66FD2',
                pointBorderColor: '#fff',
                pointHoverBorderColor: '#E66FD2',
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 6,
            },
            {
                label: 'Diastolic',
                data: dystolic,
                borderColor: '#8C6FE6',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBackgroundColor: '#8C6FE6',
                pointBorderColor: '#fff',
                pointHoverBorderColor: '#8C6FE6',
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 6,
            }
        ],
    };

    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                max: 180,
                min: 0,
            },
        },
    };

    useEffect(() => {
        if (props.selectedPatient) {
            setSystolic(props.selectedPatient.history.systolic)
            setDystolic(props.selectedPatient.history.dystolic)
        }
    }, [props])

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default HistoryChart;
