import '../NotFound/Notfound.js'; 
import {Header} from "../../pages/home";
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div className='notFound'>
			<Header />
			<div className="notFound_infos">
				<h1 className='notFound_infos--title'>404</h1>
				<label className='notFound_infos--content'>Oups! La page que vous demandez n'existe pas.</label>
			</div>
				<Link className='notFound_infos--return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}