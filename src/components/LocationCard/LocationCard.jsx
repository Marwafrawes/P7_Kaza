import "./LocationCard.scss";
import { Link } from "react-router-dom";
// Location est une props qui contient les données de la localisation en question.

export const LocationCard = ({location}) => {
    return(
        <Link to={"/fiche/" + location.id} className="location-card">
            <img src={location.cover}  alt={location.title}/>
            <h3>{location.title}</h3>
        </Link>
    )
}
