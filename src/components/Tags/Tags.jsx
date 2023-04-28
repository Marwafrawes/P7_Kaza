import "./Tags.scss";
export const Tag =  (props) =>{
	return (
		<div className="tagContainer">
            {props.tags.map((tag) =>
                <span  key={tag} className="tagContainer__tagButton">{tag}</span>
            )}
        </div>
	);
}