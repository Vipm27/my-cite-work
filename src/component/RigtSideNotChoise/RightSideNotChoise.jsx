import React from "react";
import addSqrPng from '../image/add-square.png';
import closeElipse from '../image/close-ellipse.png';
import help from '../image/help.png';

 const RightSideNotChoise = function (){
    return(
        <div className="right_side">
            <div className="right_side__figure_left_top"></div>
            <div className="information">
                <span className="information__hieght_text">Выберите растение</span>
                <div className="information__discription">
                    <span className="information__small_text">Описание растения...</span>
                </div>
                <div className="information__stickers">
                    <img src={addSqrPng} className="information__sticker"/>
                    <img src={closeElipse} className="information__sticker"/>
                    <img src={help} className="information__sticker"/>
                </div>
                <input tupe="button" value="Необходимо выбрать растение" className="information__button"/> 
            </div>
        </div>
    )
}
export default RightSideNotChoise;
