import './collapse.scss';
import { useEffect, useState } from 'react';
import Arrow from '../../assets/Arrow.png'
export const Collapse = ({collapseObject}) => {

    const [toggle, setToggle] = useState(false);
    const [arrowClass, setArrowClass] =useState("arrow arrow_down");
    const [collapseClass, setCollapseClass] = useState("collapse_content_hidden");
    useEffect(() => {
        if (toggle === false) {
            setArrowClass("arrow arrow_down");
            setCollapseClass("collapse_content_hidden");
        } else {
            setArrowClass("arrow arrow_up");
            setCollapseClass("collapse_content");
        }
    }, [toggle])
    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {collapseObject.title}
                    <img 
                        className={ arrowClass } 
                        src={Arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={ collapseClass }>
                    {Array.isArray(collapseObject.texte) ? collapseObject.texte.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : collapseObject.texte
                    }
                </div> 
            </div>
        </>
    )
}