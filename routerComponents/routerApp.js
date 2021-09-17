
import { BrowserRouter,Route,Switch,Redirect,Link,NavLink} from 'react-router-dom';
import { useState } from 'react';
import "./routerApp.css";
import PrivateRoute  from './privateRoute';

//Hooks
import { useHistory } from 'react-router';



//Route-comp
import About from "./about"
// import Home from "./home"
import Post from "./post"
import NotFound from './notFound';
import Welcome from './welcome';
let log=false;

function RouterApp()
{ 
    const[logged,setLogged]=useState("Log In")
    const handleLog=()=>{
        log = !log
        log?setLogged("Log Out"):setLogged("Log In") 
    }


    
return(
    <>
    <button onClick={handleLog} >{logged}</button>
    <BrowserRouter>
    <ul>
        <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
        <li><NavLink to="/post/1" activeClassName="selected">Post</NavLink></li>
    </ul>
    <Switch >
    {/* <Route path="/" component={Home} exact>
    {log?<Redirect to="/welcome" /> :null}
    </Route>
    <Route path="/"  exact  render={()=><Home />}/> */}
   <PrivateRoute path="/"  value={log} component={<Welcome/>}/>
    <Route path="/about" component={About}></Route>
    <Route path="/post/:id" component={Post}></Route>
    <Route path="/welcome" component={Welcome}></Route>
    <Route path="*" component={NotFound}></Route>
    </Switch>
    </BrowserRouter>
    </>
)
}
export default RouterApp
