import {useRouteMatch,useParams} from "react-router-dom"

function Post(props)
{
    const match=useRouteMatch()
    const param=useParams()
    return(
        <>
        {/* {console.log(props.match)}
        {console.log(props.match.params.id)} */}
        {console.log(match.params,param)}
        <h1>Post Page</h1>
        </>
    )
}
export default Post