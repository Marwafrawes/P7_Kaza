import "./Title.scss";
export const Title =  (props) => {
    console.log(props)
    return(<div>
        <h2 className="titleStyle">{props.title}</h2>
        <label className="locationStyle">{props.location}</label>
    </div>
    
    )
 
}