import "./FicheLogement.scss";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { data } from "../../data/datas";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import { Collapse } from "../../components/Collapse/Collapse";
import { Host } from "../../components/Host/Host"
import { Rate } from "../../components/Rate/Rate";
import { Tag } from "../../components/Tags/Tags"
import { Title } from "../../components/Title/Title";

export const FicheLogement = () => {
    const id = useParams('id').id;
    const logement = data.find(logement => logement.id === id);

    const description = {
        "title": "Description",
        "texte": logement.description
    }
    const equipement = {
        "title": "Equipements",
        "texte": logement.equipments
    }
    return (
        <>
            <Header />

            <Carrousel pictures={logement.pictures} />
            <div className="container">
                <div className="Row" >
                    <Title title={logement.title} location={logement.location} />
                    <Host host={logement.host} />
                </div>

                <div className="Row" >
                    <Tag tags={logement.tags} />

                    <Rate rate={logement.rating} />
                </div>
                <div className="logementCollapse">
                    <div className="logementCollapse__item">
                        <Collapse collapseObject={description} />
                    </div>
                    <div className="logementCollapse__item">
                        <Collapse collapseObject={equipement} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}