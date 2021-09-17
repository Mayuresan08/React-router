import{Route} from "react-router-dom"
import Home from "./home"
function PrivateRoute({path,component,value})
{  
    
     console.log(typeof component)
    return(
        <Route 
        path={path}
        render={()=>{
            return value?<>{component}</>:<Home/>
        }}></Route>
    )
}

export default PrivateRoute