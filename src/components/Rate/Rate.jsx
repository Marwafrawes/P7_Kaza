import starFull from '../../assets/starFull.png';
import starEmpty from '../../assets/starEmpty.png';
import "./Rate.scss";
// creation d'une parametre score qui représente les étoiles pleines à afficher 
export const Rate = (score) => {
    const stars = [1, 2, 3, 4, 5];
    return(
    // la méthode "map" pour créer un tableau d'éléments d'image 
    //à partir des valeurs de l'ensemble d'étoiles [1,2,3,4,5]
        <div className="rateComp">
        {stars.map((level) =>
            score.rate >= level ? (
                <img
                //toString est une méthode qui convertit un élément React en une chaîne de caractères.
                    key={level.toString()}
                    className="rateComp__star"
                    src={starFull}
                    alt="rating star"
                />
            ) : (
                <img
                    key={level.toString()}
                    className="rateComp__star"
                    src={starEmpty}
                    alt="rating star"
                />
            )
        )}
    </div>
);
    
    
}
