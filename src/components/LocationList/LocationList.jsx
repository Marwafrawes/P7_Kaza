import './LocationList.scss';
import { LocationCard } from '../LocationCard/LocationCard'
import {data} from '../../data/datas';
export const LocationList = () => {
    return(
        <div className="locationsContainer">
            {
                data.map(location => <LocationCard location={location} key={location.id} />)
            }
        </div>
    );
}
