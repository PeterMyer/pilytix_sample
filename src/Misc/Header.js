import { AppBar, Toolbar } from "@mui/material"

export default function Header(){
    return(
        <>
            <AppBar 
                position = "fixed" 
                sx = {{ 
                    backgroundColor:"white", 
                    width:"100%"
                }}>
                <img 
                    className="navbar-brand"
                    id = "header-icon"
                    alt = "logo"
                    src = { process.env.PUBLIC_URL + "/logo.webp" }
                    width = "200"/>
            </AppBar>
            {/* Below <Toolbar/> prevents header from covering main content. Recommended by Material-ui docs */}
            <Toolbar/>
        </>
    )
}