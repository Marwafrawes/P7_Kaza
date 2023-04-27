//es "props" sont les propriétés qui sont passées au composant en tant 
//qu'arguments et sont utilisées pour personnaliser son rendu.
export const Host =  (props) => {
	return (
	
		<div className="hostComp">

			<div className="hostComp__hostName">{props.host.name}</div>
			<div className="hostComp__hostPicture">
				<img src={props.host.picture} alt={props.id} />
			</div>
		</div>
	
	);

}
