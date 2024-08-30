import React from 'react';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, PointElement, LinearScale, Title, Tooltip, Legend ,CategoryScale,} from 'chart.js';

ChartJS.register(ArcElement, LineElement, PointElement, LinearScale, Title, Tooltip, Legend,CategoryScale,);

function LineChart(){
    const lineData = {
        labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
        datasets: [
            {
                label: 'Orders',
                data: [4, 2, 2],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                tension: 0.4,
                yAxisID: 'y',
            },
            {
                label: 'Sales',
                data: [1404, 1200, 800],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                yAxisID: 'y1',
            },
        ],
    };
    const lineOptions = {
       responsive: true,
       plugins: {
           legend: {
               position: 'top',
           },
           title: {
               display: true,
               text: 'Sales vs Orders',
           },
           tooltip: {
               callbacks: {
                   label: function (context) {
                       let label = context.dataset.label || '';
                       if (label) {
                           label += ': ';
                       }
                       label += context.raw;
                       if (context.dataset.label === 'Sales') {
                           label += ' ($)';
                       }
                       return label;
                   },
               },
           },
       },
       scales: {
        y: {
            type: 'linear',
            position: 'left',
            title: {
                display: true,
                text: 'Orders',
            },
        },
        y1: {
            type: 'linear',
            position: 'right',
            title: {
                display: true,
                text: 'Sales ($)',
            },
            grid: {
                drawOnChartArea: false, 
            },
        },
    },
 };
    return(
        <div style={{ width: '600px', margin: '20px auto' }}>
            <Line data={lineData} options={lineOptions} />
        </div>


    )
}
export default LineChart;