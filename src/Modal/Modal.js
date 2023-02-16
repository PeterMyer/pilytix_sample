
import ModalTabs from './ModalTabs'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { formatter } from '../Utils/currencyFormatter';
import { Alert } from '@mui/material';

export default function Modal(props){
    const opportunities = props.opportunities
    const oppIndex = props.oppIndex
    const rowId = props.rowId
    const setRowId = props.setRowId
    const opportunity = props.opportunity
    const setOpportunity = props.setOpportunity

    if(!props.show){
        return null
    }

    const handleClose = () => {
        window.removeEventListener('keydown', handleKeyDown)
        props.onClose()
    }

    const handleKeyDown = (event) => {
        if( event.key === "ArrowLeft" ){
            let button = document.getElementById("backArrowButton")
            button ? button.click(): alert('No Back button. This is the first item in the list.')
        }
        if( event.key === "ArrowRight" ){
            let button = document.getElementById("fowardArrowButton")
            button? button.click(): alert('No Next button. This is the last item in the list.')
        }
        if( event.key === "Escape" ){
            let button = document.getElementById("closeModal")
            button.click()
        }
    }

    useEffect(() => {
        if( props.show ){
            window.addEventListener('keydown', handleKeyDown)
        }
        else{
            window.removeEventListener("keydown", handleKeyDown)
        }
        return() => window.removeEventListener('keydown', handleKeyDown)}
        ,[ props.show, handleKeyDown ]
    );

    const handleNext = (rowId) => {
        setOpportunity(opportunities[oppIndex[rowId+1]-1])
        setRowId(rowId+1)
    }

    const handlePrevious = (rowId) => {
        setOpportunity(opportunities[oppIndex[rowId-1]-1])
        setRowId(rowId-1)
    }

    const RenderButtons = () => {
        return(
            <div>
                {rowId === 0 ? null : 
                    <button 
                        id = "backArrowButton"
                        onClick = {() => {handlePrevious(rowId)}}>
                        <ArrowBackIcon/>
                    </button>
                }
                {
                rowId === opportunities.length-1 ? null :
                    <button 
                        id = "fowardArrowButton" 
                        onClick = {() => {handleNext(rowId)}}>
                        <ArrowForwardIcon/>
                    </button>
                }
                <button 
                    id = "closeModal" 
                    onClick = {() => {handleClose()}}>
                    <CloseIcon/>
                </button>
            </div>
        )
    }

    return(
        <div 
            className='modal' 
            onClick={handleClose}>
            <div 
                className = "modal-content" 
                onClick={e => e.stopPropagation()}>
                <header className = 'modal-header'>
                    <div className = 'navigation-button-container'>
                        <RenderButtons/>
                    </div>
                    <span id="company-name-container">
                        <Typography variant="h4">
                            {opportunity.name}
                        </Typography>
                    </span>
                </header>
                <body className = "modal-body">
                    <div className = "current-lead-info">
                        <div 
                            id="modal-body-header" 
                            className = 'modal-body-section'>
                            <div className = 'modal-body-subsection'>
                                <div className="modal-body-subsection-item-container">
                                    <Typography variant="subtitle2">
                                        <div className = 'modal-body-subsection-item'>
                                            Type
                                        </div>
                                    </Typography>
                                    <Typography variant="body2">
                                        <div className = 'modal-body-subsection-item'>
                                            {opportunity.oppName.slice(0,3)}
                                        </div>
                                    </Typography>
                                </div>
                                <div className="modal-body-subsection-item-container">
                                    <Typography variant="subtitle2">
                                        <div className = 'modal-body-subsection-item'>
                                            Rep
                                        </div>
                                    </Typography>
                                    <Typography variant="body2">
                                        <div className = 'modal-body-subsection-item'>
                                            {opportunity.salesRepName}
                                        </div>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body-section">
                        <div className="modal-body-subsection-container">

                            <div className="modal-body-subsection">
                                <div className="modal-body-subsection-item-container">
                                    <Typography variant="subtitle2">
                                        <div className = 'modal-body-subsection-item'>
                                            Score
                                        </div>
                                    </Typography>
                                    <Typography variant="body2">
                                        <div className = 'modal-body-subsection-item'>
                                            {opportunity.pilytixTier.slice(0,2)}
                                        </div>
                                    </Typography>
                                </div>
                                <div className="modal-body-subsection-item-container">
                                    <Typography variant="subtitle2">
                                        <div className = 'modal-body-subsection-item'>
                                            Rep Probability:
                                        </div>
                                    </Typography>
                                    <Typography variant="body2">
                                        <div className = 'modal-body-subsection-item'>
                                            { Math.floor(opportunity.repProbability * 100) }%
                                        </div>
                                    </Typography>
                                </div>
                                <div className="modal-body-subsection-item-container">
                                    <Typography variant="subtitle2">
                                        <div className = 'modal-body-subsection-item'>
                                            Pilytix Probability:
                                        </div>
                                    </Typography>
                                    <Typography variant="body2">
                                        <div className = 'modal-body-subsection-item'>
                                            { Math.floor(opportunity.pilytixProbability * 100) }%
                                        </div>
                                    </Typography>
                                </div>
                            </div>
                                <div className="modal-body-subsection">
                                    <div className="modal-body-subsection-item-container">
                                        <Typography variant="subtitle2">
                                            <div className = 'modal-body-subsection-item'>
                                                Product:
                                            </div>
                                        </Typography>
                                        <Typography variant="body2">
                                            <div className = 'modal-body-subsection-item'>
                                                {opportunity.product}
                                            </div>
                                        </Typography>
                                    </div>
                                    <div className="modal-body-subsection-item-container">
                                        <Typography variant="subtitle2">
                                            <div className = 'modal-body-subsection-item'>
                                                Current Stage:
                                            </div>
                                        </Typography>
                                        <Typography variant="body2">
                                            <div className = 'modal-body-subsection-item'>
                                                {opportunity.stage.slice(3)}
                                            </div>
                                        </Typography>
                                    </div>
                                    <div className="modal-body-subsection-item-container">
                                        <Typography variant="subtitle2">
                                            <div className = 'modal-body-subsection-item'>
                                                Estimated Revenue:
                                            </div>
                                        </Typography>
                                        <Typography variant="body2">
                                            <div className = 'modal-body-subsection-item'>
                                                {formatter.format(opportunity.amount)}
                                            </div>
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalTabs
                    probabilityHistory = {opportunity.probabilityHistory}
                    opportunity = {opportunity}
                    />
                </body>
            </div>
        </div>
    )
}

