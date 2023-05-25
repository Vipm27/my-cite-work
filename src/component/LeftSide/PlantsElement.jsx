import React, { useState } from "react";
import rosendahl from '../image/58998_rosendahl_grand_cru_doniczka 2.png';
import fire from '../image/fire.png';
import dawn from '../image/dawn.png';
import rain from '../image/rain.png';

 const PlantsElement = function ({posts, title, id, idGet}){
    const [count, setCount] = useState(0)
    const handleId = (e) =>{
        idGet(e.currentTarget.id)
    }
    return(
            <div id={id} className="list_of_plants__element_plants" onClick={handleId}>
                <img src={rosendahl} className="list_of_plants__sticker_plants"/>
                <div className="list_of_plants__left_top_figure"></div>
                <div className="list_of_plants_text">
                    <span className="list_of_plants__hieght_text">{posts}</span>
                    <span className="list_of_plants__small_text">{title}</span>
                </div>
                <div class="list_of_plants__stickers">
                    <img src={fire} className="list_of_plants__sticker"/>
                    <img src={dawn} className="list_of_plants__sticker"/>
                    <img src={rain} className="list_of_plants__sticker"/>
                </div>
            </div>
    )
}
export default PlantsElement;