import React, {useDebugValue, useEffect, useState} from "react";
import PlantsElement from "./PlantsElement";
import search from '../image/search.png';
 const LefsSide = function ({idGetNextFinal}){
    const [listPlants, setListPlants] = useState([
        {posts:"Hello", title:"World", id:"1"},
        {posts:"MyVoice", title:"World", id:"2"},
        {posts:"Choise", title:"World", id:"3"},
        {posts:"Keks", title:"World", id:"4"},
        {posts:"Small", title:"World", id:"5"},
        {posts:"Bad", title:"World", id:"6"},
        {posts:"Clerks", title:"World", id:"7"}
    ])
    const [idGet, setIdGet] = useState('')
    const idGetFunction = (idGet) =>{
        setIdGet(idGet)
        idGetNextFinal(idGet)
    }

    const [value, setValue] = useState('')

    const filteredPlants = listPlants.filter( plant => {
        return plant.posts.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <div className="left_side">
            <div className="navigation_main">
                <div className="navigation">
                    <input type="text" className="navigation__text" onChange={(event) => setValue(event.target.value)} placeholder="Тип растения"/>
                    <img src={search} className="navigation__sticker"/>
                </div>
            </div>
            <div className="list_of_plants">
                {
                    filteredPlants.map((listPlants) => {
                        return(
                            <PlantsElement posts={listPlants.posts} title={listPlants.title} id={listPlants.id} idGet={idGetFunction}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default LefsSide;