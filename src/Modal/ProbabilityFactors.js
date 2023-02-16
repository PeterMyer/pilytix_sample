import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion,AccordionDetails,AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProbabilityFactors({opportunity}){
    const positiveFactors = opportunity.pilytixFactorsIncreasingWin? opportunity.pilytixFactorsIncreasingWin: []
    const negativeFactors = opportunity.pilytixFactorsDecreasingWin? opportunity.pilytixFactorsDecreasingWin: []

    return(
        <div>
            <Typography variant = "h6">
                Factors Increasing Score
            </Typography>
            <ul id="factors-list">
                { positiveFactors.map(( factor ) => {
                    return(
                        <li className = "factors-list-item">
                            <ArrowUpwardIcon sx = {{color:"green"}}/>
                            <Accordion 
                                disableGutters={"true"}
                                margin="0"
                                sx={{borders:"none", boxShadow:"none"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                margin="0!"
                                sx={{padding:"none"}}
                            >
                                <div className = "factors-list-item-text">
                                    <Typography 
                                        variant = "subtitle2" 
                                        sx = {{paddingRight:"5px"}}
                                    >
                                        {factor.name}:
                                    </Typography>
                                    <Typography variant = "body2">
                                        {factor.message}
                                    </Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails sx={{ margin:"none", padding:"none"}}>
                                <Typography variant = "caption">
                                {factor.weight.description}
                                </Typography>
                            </AccordionDetails>
                            </Accordion>
                        </li>
                    )
                })}
            </ul>
            <Typography variant = "h6">
                Factors Decreasing Score
            </Typography>
            <ul id="factors-list">
                {negativeFactors.map((factor) => {
                    return(
                    <li className = "factors-list-item">
                        <ArrowDownwardIcon sx = {{color:"darkred"}}/>
                        <Accordion 
                                disableGutters={"true"}
                                margin="0"
                                sx={{borders:"none", boxShadow:"none"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                margin="0!"
                                sx={{padding:"none"}}
                            >
                                <div className = "factors-list-item-text">
                                    <Typography 
                                        variant = "subtitle2" 
                                        sx = {{paddingRight:"5px"}}
                                    >
                                        {factor.name}:
                                    </Typography>
                                    <Typography variant = "body2">
                                        {factor.message}
                                    </Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails sx={{ margin:"none", padding:"none"}}>
                                <Typography variant = "caption">
                                {factor.weight.description}
                                </Typography>
                            </AccordionDetails>
                            </Accordion>
                    </li>)
                })}
            </ul>
        </div>
    )
}