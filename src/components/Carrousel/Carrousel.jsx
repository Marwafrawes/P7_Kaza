import { useState } from "react";
import ArrowRight from "../../assets/Arrow_right.png";
import ArrowLeft from "../../assets/Arrow_left.png";
import "./Carrousel.scss";

export const Carrousel = ({pictures}) => {
    const [pictureIndex, setPictureIndex] = useState(0);
    const movePicture = (dir) => {
        if (dir === 1) {
            setPictureIndex(pictureIndex + 1);
            if (pictureIndex === pictures.length - 1) {
                setPictureIndex(0);
            }
        } else if (dir === -1) {
            setPictureIndex(pictureIndex - 1);
            if (pictureIndex === 0) {
                setPictureIndex(pictures.length - 1);
            }
        }
    }
    return(
        <section style={{backgroundImage : `url(${pictures[pictureIndex]})`}} className='carrousel'>
        {pictures.length > 1 && 
            <>
                <img 
                    className='carrousel_arrow carrousel_arrow_right' 
                    src={ArrowRight} 
                    alt="show next slider" 
                    onClick={() =>movePicture(1)}
                />
                <img 
                    className='carrousel_arrow carrousel_arrow_left' 
                    src={ArrowLeft} 
                    alt="show previous slider" 
                    onClick={() => movePicture(-1)}
                />
                <p className='slideCount'>{pictureIndex + 1} / {pictures.length}</p>
            </>
        } 
    </section>
    );
}