import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, PointElement, LinearScale, Title, Tooltip, Legend ,CategoryScale,} from 'chart.js';

ChartJS.register(ArcElement, LineElement, PointElement, LinearScale, Title, Tooltip, Legend,CategoryScale,);
function PieChart(){
    const pieData = {
        labels: ['55.8%', '44.2%'],
        datasets: [
            {
                data: [55.8, 44.2],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
            },
        ],
    };
    return(
        <div style={{ width: '400px', margin: '20px auto' }}>
         <p>Portion of Sales !</p>
            <Pie data={pieData} />
            <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold', fontSize: '1.2em' }}>
                Total: 2659
            </div>
        </div>

    )
}
export default PieChart;