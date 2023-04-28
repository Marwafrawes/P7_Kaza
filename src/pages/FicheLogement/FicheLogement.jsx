import "./FicheLogement.scss";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { data } from "../../data/datas";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import { Collapse } from "../../components/Collapse/Collapse";
import {Host} from "../../components/Host/Host"
import { Rate } from "../../components/Rate/Rate";
import {Tag} from "../../components/Tags/Tags"
import { Title } from "../../components/Title/Title";

export const FicheLogement = () => {
    const id = useParams('id').id;
    const logement = data.find(logement => logement.id === id);
    const ficheLogementDatas = 	[
		{
			"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.", 
			"equipments": [
                "Équipements de base",
                "Micro-Ondes",
                "Douche italienne",
                "Frigo",
                "WIFI"
            ],
        }
	]
    return(
        <>
            <Header />
            <Carrousel pictures={logement.pictures} />

            <div className="Row" >
             <Title title={logement.title} location={logement.location} />
              <Host host={logement.host} />   
            </div>

            <div className="Row" >
                <Tag tags={logement.tags} />
                
                <Rate rate={logement.rating}/>
            </div>
        <div>
		
			<div className="ficheLogementBannerContainer" />
			<main className='FicheLogementMain'>
				{ficheLogementDatas.map(data => {
					return (
                       <div key={data.description}  className="FicheLogementMain__collapse">
							<Collapse style={{margin:'30px 0'}}  collapseObject={data} />
						</div>
                     
                    )}
		
				)}
			</main>
        </div>
			
		
            <Footer />
        </>
    );
}