import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { data } from "../../data/datas";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import {Host} from "../../components/Host/Host"
import { Rate } from "../../components/Rate/Rate";
import { Tag } from "../../components/Rate/Tags/Tags";

export const FicheLogement = () => {
    const id = useParams('id').id;
    const logement = data.find(logement => logement.id === id);
    
    return(
        <>
            <Header />
            <Carrousel pictures={logement.pictures} />
            <Host />
            <Tag />
            <Rate />
            <Footer />
        </>
    );
}