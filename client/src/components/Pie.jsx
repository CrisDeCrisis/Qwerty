import '../CSS/Pie.css'
import {
    Chart as Chartjs,
    ArcElement,
    Tooltip,
    Legend,
    defaults
} from 'chart.js'
import { Pie } from "react-chartjs-2"
import pieData from '../data/pieData.json'

Chartjs.register(ArcElement, Tooltip, Legend)

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.font.size = 14;

// Componente PieGraph
export const PieGraph = () => {
    return (
            <Pie
                style={{ width: '100%', height: '100%' }}
                data={{
                    labels: pieData.map(data => data.label), // Recorremos el array de objetos y obtenemos el valor del eje X
                    datasets: [ // Creamos un array de objetos con los datos de la gráfica
                        {
                            label: 'Porcentaje de tipos de sangre', // Rótulo de las fracciones
                            data: pieData.map(data => data.value), // Recorremos el array de objetos y obtenemos el valor del eje Y
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                            ], 
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                            ],
                        }
                    ]
                }}
                options={{
                    plugins: {
                        legend: {
                            position: 'left',
                        }
                    }
                }}
            />
    )
}
