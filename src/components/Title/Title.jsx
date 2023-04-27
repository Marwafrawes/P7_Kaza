export const Title =  (props) => {
    console.log(props)
    return(<div>
        <h2>{props.title}</h2>
        <label>{props.location}</label>
    </div>
    
    )
 
}