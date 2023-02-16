import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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
                            <div className = "factors-list-item-text">
                            <Typography 
                                variant = "subtitle2" 
                                sx = {{paddingRight:"5px"}}>
                                    {factor.name}:
                            </Typography>
                            <Typography variant = "body2">
                                {factor.message}
                            </Typography>
                            </div>
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
                        <div className = "factors-list-item-text">
                        <Typography variant = "subtitle2" sx = {{paddingRight:"5px"}}>
                            {factor.name}:
                        </Typography>
                        <Typography variant="body2">
                            {factor.message}
                        </Typography>
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    )
}