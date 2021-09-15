import {useHistory, useLocation,useRouteMatch} from "react-router-dom"
function Home(props)
{

    const history=useHistory()

    const location=useLocation()
    const Qvalue =new URLSearchParams(location.search).get("name") 

    
return(
    <>
    <h2>Home page</h2>
    {console.log(props)}
    {console.log(props.location.search)}

    {/*history using props */}
    {/* <button onClick={props.history.goBack}>go Back</button>
    <button onClick={props.history.goForward}>go Forward</button>
    <button onClick={()=>props.history.push("/about")}>Push about</button>
    <button onClick={()=>props.history.replace("/about")}>Replace about</button> */}


    {/* history through hooks */}
    <button onClick={history.goBack}>go Back</button>
    <button onClick={history.goForward}>go Forward</button>
    <button onClick={()=>history.push("/about")}>Push about</button>
    <button onClick={()=>history.replace("/about")}>Replace about</button>


    {/* useLocation */}
    <p>search parameter :{location.search}</p>
    <p>value:{Qvalue}</p>
    </>
)
}

export default Home