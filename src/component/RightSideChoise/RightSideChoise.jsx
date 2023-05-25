import React, {useState} from "react";
import imgBigPlants from '../image/58998_rosendahl_grand_cru_doniczka 3.png'
import fire from '../image/fire.png';
import dawn from '../image/dawn.png';
import rain from '../image/rain.png';

 const RightSideChoise = function ({size, himidity, light, temperature, namePlants, description}){

    return(
        <div  className="right_side">
            <div className="informations_plant">
                <div className="informations_plant__block">
                    <p className="informations_plant__filling_hight">Size</p>
                    <p className="informations_plant__filling_small">{size}</p>
                </div>
                <div className="informations_plant__block">
                    <p className="informations_plant__filling_hight">Humidity</p>
                    <p className="informations_plant__filling_small">{himidity}</p>
                </div>
                <div className="informations_plant__block">
                    <p className="informations_plant__filling_hight">Light</p>
                    <p className="informations_plant__filling_small">{light}</p>
                </div>
                <div className="informations_plant__block">
                    <p className="informations_plant__filling_hight">Temperature</p>
                    <p className="informations_plant__filling_small">{temperature}</p>
                </div>
            </div>
            <img src={imgBigPlants} className="right_side__image_plants"/>
            <div className="right_side__figure_left_top"></div>
            <div className="information">
                <span className="information__hieght_text">{namePlants}</span>
                <div className="information__discription">
                    <span className="information__small_text">{description}</span>
                </div>
                <div className="information__stickers">
                    <img src={fire} className="information__sticker"/>
                    <img src={dawn} className="information__sticker"/>
                    <img src={rain} className="information__sticker"/>
                </div>
                <input tupe="button" value="Подтвердить выбор" className="information__button"/> 
            </div>
        </div>
    )
}
export default RightSideChoise;
