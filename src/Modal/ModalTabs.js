import {useEffect} from 'react'
import ProbabilityHistoryChart from '../Charts/ProbabilityHistoryChart';
import ProbabilityFactors from './ProbabilityFactors';
import Typography from '@mui/material/Typography';

export default function ModalTabs({ probabilityHistory, opportunity }){
    const openTab = (event, tabName) => {
        let tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
  
        let tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            tablinks[i].style.background = "white"
        }
  
        let thisDocument = document.getElementById(tabName)
        let thisbutton = document.getElementById(`${tabName}-button`)
        thisbutton.style.background = '#ccc'
        thisDocument.style.display = "block";
        event.currentTarget.className += " active";
    }

    useEffect(() => {
        document.getElementById("ProbabilityHistory-button").click()
    },[])

    return(
        <div className = 'tab-modal-content-container'>
            <div class = "tab">
                <button 
                    class = "tablinks" 
                    id = "ProbabilityHistory-button" 
                    onClick = {() => openTab(event, "ProbabilityHistory")}> 
                    <Typography variant = "button" >
                        Probability History
                    </Typography>
                </button>
                <button 
                    class = "tablinks"
                    id = "ProbabilityFactors-button"
                    onClick = {() => openTab(event, "ProbabilityFactors")}>
                    <Typography variant="button" >
                        Probability Factors
                    </Typography>
                </button>
            </div>
            <div>
                <div 
                    id="ProbabilityHistory" 
                    class="tabcontent">
                    <ProbabilityHistoryChart
                        probabilityHistory = {probabilityHistory}
                    />
                </div>
                <div 
                    id="ProbabilityFactors" 
                    class="tabcontent">
                    <ProbabilityFactors 
                        opportunity={opportunity}
                    />
                </div>
            </div>
        </div>
    )
}