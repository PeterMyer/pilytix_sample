import {useEffect, useState} from 'react'
import moment from 'moment'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line }            from 'react-chartjs-2'
import Typography from '@mui/material/Typography';

export default function ProbabilityHistoryChart({probabilityHistory}){
    if(probabilityHistory === null){
        return <div><Typography variant="h6">No Historical Data Availabile</Typography></div>
    }

    const [chartData, setChartData] = useState({
        labels: probabilityHistory.map((probObject) => {
            return moment().subtract(probObject.daysAgo, 'days').calendar()
        }),
        datasets: [{
            id:1,
            label: "Pilytix Prob",
            data: probabilityHistory.map((probObject) => {
                return probObject.pilytixProb
            })
            },  
            {
            id:2,
            label: "Rep Prob",
            data: probabilityHistory.map((probObject)=>{
                return probObject.repProb
            }),
            }
        ]
    })
    useEffect(() => {
        setChartData({
            labels: probabilityHistory.map((probObject) => {
                return moment().subtract(probObject.daysAgo, 'days').calendar()
            }),
            datasets: [{
                id:1,
                label: "Pilytix Prob",
                data: probabilityHistory.map((probObject)=>{
                    return probObject.pilytixProb
                })
                },  
                {
                id:2,
                label: "Rep Prob",
                data: probabilityHistory.map((probObject)=>{
                    return probObject.repProb
                }),
                }
            ]
        })
    },[probabilityHistory])
    
    return(
        <div id = "probability-chart-container">
            {chartData ?
                <Line 
                    datasetIdKey='id' 
                    data={chartData}
                    width="100%"
                    options={{ maintainAspectRatio: false }}
                />
                :
                <></>
            }
        </div>
    )
}