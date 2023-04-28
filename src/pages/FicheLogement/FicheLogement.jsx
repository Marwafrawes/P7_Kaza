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
    const ficheLogementDatas = {
		
		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		
		"equipments": [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		
		"description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
		
		"equipments": [
			"Parking",
			"Sèche Cheveux",
			"Machine à laver",
			"Wi-fi",
			"Cuisine équipée",
			"Télévision"
		],
		
		"description": "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
		
		"equipments": [
			"Wi-fi",
			"Cuisine équipée",
			"Télévision",
			"Sèche Cheveux"
		],

		"description": "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
	
		"equipments": [
			"Micro-Ondes",
			"Wi-fi",
			"Chambre Séparée",
			"Climatisation",
			"Télévision"
		],
	
		"description": "Ce loft entièrement rénové, et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement, vous déplacer dans Paris sera un véritable jeu d'enfant.",
	
		"equipments": [
			"Frigo Américain",
			"Sèche Cheveux",
			"Wi-fi",
			"Chambre Séparée",
			"Parking"
		],

		"description": "Venez vous imprégner de la culture parisienne dans cet ancien studio d'artiste décoré avec goût, au coeur de Montmartre.",
		"equipments": [
			"Chambre Séparée",
			"Parking"
		],
	"description": "Ce Studio entièrement fonctionnel sera votre parfait pied à terre pour toutes vos excursions parisiennes. Idéalement situé près des lignes 2 et 4, vous accéderez très rapidement à tous les points touristiques de Paris.",
		"equipments": [
			"Salle de bains",
			"Frigo",
			"Wi-fi",
			"Sèche Cheveux",
			"Bureau",
			"Parking"
		],

	
	"description": "Ce superbe appartement vous surprendra par son charme. Entièrement refait à neuf, il est équipé avec goût. La taille des pièces vous fera douter que vous êtes à Paris. Mais il vous suffit de sortir pour voir que vous êtes au coeur des plus belles attractions de Paris : le Louvre, la Tour Eiffel, le Grand Palais sont à deux pas. À vous de venir découvrir Paris !",
	
		"equipments": [
			"Wi-fi",
			"Sèche Cheveux",
			"Machine à laver",
			"Parking",
			"Lit King Size",
			"Ascenseur"
		],

	

		"description": "Paris vous tend les bras ! En famille ou entre amis, venez découvrir la ville de l'amour dans un appartement de goût. Vous pourrez profiter de tous les commerces seulement à quelques minutes de l'appartement. Sa proximité avec la gare Montparnasse en fait également un choix idéal pour celles et ceux qui doivent prendre un train.",

		"equipments": [
			"Climatisation",
			"Machine à laver",
			"Sèche Cheveux",
			"Wi-fi",
			"Parking"
		],
		
	

		"description": "Respirer en plein coeur de Paris ? C'est possible ! Avec vue sur un parc résidentiel, vous pourrez ouvrir les fenêtres sans avoir à souffrir du bruit des voitures et de la pollution. Au contraire, vous pourrez écouter les oiseaux. Notre appartement est également idéalement situé au coeur du 11ème arrondissement. Proche des lignes 3 et 2, vous pourrez découvrir Paris sans effort !",
		"equipments": [
			"Vue Parc",
			"Chauffage",
			"Sèche linge",
			"Sèche Cheveux",
			"Wi-fi",
			"Ascenseur"
		],
	
		"description": "Situé en plein coeur du Marais, notre studio est idéal pour les touristes en quête de découverte. Sa cuisine toute équipée est particulièrement pratique.",
		"equipments": [
			"Clic-clac",
			"Four",
			"Sèche Cheveux",
			"Wi-fi"
		],
	
		"description": "Idéalement situé à 2 pas de la place de la République, ce studio particulièrement fonctionnel est parfait pour découvrir Paris. Proche de tous les points d'intérêts grâce aux 5 lignes de métro qui sont à 5 minutes, vous pourrez rentabiliser votre temps passé à la capitale.",
		"host": {
			"name": "Sarah Devit",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg"
		},

		"equipments": [
			"Rangements",
			"Lit",
			"Sèche Cheveux",
			"Wi-fi",
			"TV",
			"Bouilloire"
		],


		"description": "Quittez Paris pour vous mettre au vert. À seulement 30 minutes de la Gare du Nord, venez découvrir la forêt d'Ecouen directement depuis la fenêtre de votre bungalow. Entièrement équipé, ce logement saura vous accueillir dans le confort, tout en vous permettant de vous concentrer sur l'essentiel. Le matin, ouvrez les fenêtres, et profitez du chant des oiseaux.",
		"equipments": [
			"SDB",
			"Cuisine équipée",
			"Toilettes sèches",
			"Frigo",
			"Bouilloire"
		],

	
		"description": "Vous chercher un endroit pour fêter un anniversaire entre amis tout en restant proche de Paris ? Ne cherchez plus ! Entièrement équipée, cette maison est l'endroit idéal pour se regrouper.",

		"equipments": [
			"SDB",
			"Cuisine équipée",
			"Frigo",
			"Bouilloire",
			"WIFI",
			"Télévision",
			"Cintres",
			"Équipements de base"
		],

	
	
		"description": "Maison T5. Idéale pour grands groupes. 45 minutes de Paris Saint-Lazare.",

		"equipments": [
			"Bouilloire",
			"SDB",
			"Cuisine équipée",
			"Frigo",
			"WIFI",
			"TV",
			"Cintres",
			"Four",
			"Micro-Ondes",
			"Parking"
		],

	
		"description": "Si vous êtes à la recherche de l'endroit idéal pour poser vos valises entre deux rdvs d'affaire, ne cherchez plus. Notre loft est l'endroit idéal. En plein coeur de la Défense, il dispose également de tous les équipements pour que vous soyez comme chez vous.",

		"equipments": [
			"Baie vitrée",
			"Télévision",
			"Four",
			"Frigo",
			"Wi-fi",
			"Micro-Ondes",
			"Parking"
		],

	
		"description": "Ce charmant appartement offre des prestations de luxe, aux portes de Paris. À deux pas de la ligne 3, vous pourrez accéder à toutes les attractions touristiques dont vous avez toujours rêvées.",
	
	
		"equipments": [
			"Télévision",
			"Four",
			"Frigo",
			"Hotte",
			"Wi-fi",
			"Micro-Ondes"
		],
	
	
	
		"description": "Cette chambre dispose de toutes les facilités nécessaires. Proche métro et commerces.",
	
		"equipments": [
			"Bouilloire",
			"Wi-fi",
			"Micro-Ondes"
		],
	
	
		"description": "Ce studio décoré avec goût sera votre nid douillet après une longue journée passée à découvrir Paris.",
	
	
		"equipments": [
			"Équipements de base",
			"Four",
			"Frigo",
			"Wi-fi",
			"Micro-Ondes"
		],
		
		"description": "Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.",
		
		
		"equipments": [
			"Wi-fi",
			"Équipements de base",
			"Micro-Ondes",
			"Frigo",
			"Baignoire"
		],
		
	}

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
                       <div key={data.description} className="FicheLogementMain__collapse">
							<Collapse style={{margin:'30px 0'}}  collapseObject={data} />
						</div>
                        <div key={data.equipments} className="FicheLogementMain__collapse">
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