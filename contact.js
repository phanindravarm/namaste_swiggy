import React from "react"
import { useParams } from "react-router-dom"
function Contact({name,location}){
    const {id} = useParams()

return <h1>Contact  {id} 
{name} {location}</h1>
}


// class Contact extends React.Component {
    
// render(){
    
//    return <h1>Contact {this.props.name} {this.props.location}</h1>
// }
// }

export default Contact