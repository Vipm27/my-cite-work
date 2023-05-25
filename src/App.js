import React, {useState} from 'react';
import './style/index.css';
import RightSideNotChoise from './component/RigtSideNotChoise/RightSideNotChoise';
import LeftSide from './component/LeftSide/LeftSide';
import RightSideChoise from './component/RightSideChoise/RightSideChoise';
function App() {
  const massiveData=[
    {id:1, Size:"Small", Humidity:"65%", Light:"Diffuasse", Temperature:"163-25", NamePlants:"Ploha", Description:"Описание информация о растении, что оно, его особенности особенно мне хотелось бы указать на такие вещи, как вокзал на море или пений на множество случаев, такие как морская болезнь или иные причины расстроиться больше об этом растении вы можете узнать, если нажмете на эту кнопку подробнее она расширить мои возможности и предоставит вам полную желаемую информацию"},
    {id:2, Size:"Hieght", Humidity:"65%", Light:"Diffsduse", Temperature:"16-25", NamePlants:"Good", Description:"Описание информация о растении, что оно, его особенности особенно мне хотелось бы указать на такие вещи, как вокзал на море или пений на множество случаев, такие как морская болезнь или иные причины расстроиться больше об этом растении вы можете узнать, если нажмете на эту кнопку подробнее она расширить мои возможности и предоставит вам полную желаемую информацию"},
    {id:3, Size:"Medium", Humidity:"65%", Light:"Diffusdse", Temperature:"12-25", NamePlants:"Thanks", Description:"Описание информация о растении, что оно, его особенности особенно мне хотелось бы указать на такие вещи, как вокзал на море или пений на множество случаев, такие как морская болезнь или иные причины расстроиться больше об этом растении вы можете узнать, если нажмете на эту кнопку подробнее она расширить мои возможности и предоставит вам полную желаемую информацию"},
    {id:4, Size:"VerySmall", Humidity:"65%", Light:"Diffuasse", Temperature:"113-25", NamePlants:"Poka", Description:"Описание информация о растении, что оно, его особенности особенно мне хотелось бы указать на такие вещи, как вокзал на море или пений на множество случаев, такие как морская болезнь или иные причины расстроиться больше об этом растении вы можете узнать, если нажмете на эту кнопку подробнее она расширить мои возможности и предоставит вам полную желаемую информацию"},
    {id:5, Size:"VeryHeight", Humidity:"65%", Light:"Diffasduse", Temperature:"1123123-25", NamePlants:"Spasibo", Description:"Описание информация о растении, что оно, его особенности особенно мне хотелось бы указать на такие вещи, как вокзал на море или пений на множество случаев, такие как морская болезнь или иные причины расстроиться больше об этом растении вы можете узнать, если нажмете на эту кнопку подробнее она расширить мои возможности и предоставит вам полную желаемую информацию"},
    {id:6, Size:"VeryMedium", Humidity:"65%", Light:"Diffusawde", Temperature:"1123123-25", NamePlants:"Drakena", Description:"Описание информация о растении, что оно, его особенности особенно мне хотелось бы указать на такие вещи, как вокзал на море или пений на множество случаев, такие как морская болезнь или иные причины расстроиться больше об этом растении вы можете узнать, если нажмете на эту кнопку подробнее она расширить мои возможности и предоставит вам полную желаемую информацию"},
    {id:7, Size:"Small", Humidity:"65%", Light:"Diffuasdse", Temperature:"161231-25", NamePlants:"Nikita", Description:"Описание информация о растении, что оно, его особенности особенно мне хотелось бы указать на такие вещи, как вокзал на море или пений на множество случаев, такие как морская болезнь или иные причины расстроиться больше об этом растении вы можете узнать, если нажмете на эту кнопку подробнее она расширить мои возможности и предоставит вам полную желаемую информацию"},
    {id:8, Size:"Small", Humidity:"65%", Light:"Diffuasdse", Temperature:"16132-25", NamePlants:"Poland", Description:"Описание информация о растении, что оно, его особенности особенно мне хотелось бы указать на такие вещи, как вокзал на море или пений на множество случаев, такие как морская болезнь или иные причины расстроиться больше об этом растении вы можете узнать, если нажмете на эту кнопку подробнее она расширить мои возможности и предоставит вам полную желаемую информацию"},
  ]
  const [idGet, setIdGet] = useState('0')
  const idGetFunction = (idGet) =>{
      setIdGet(idGet)
  }
  return (
    <div className="main">
        <LeftSide idGetNextFinal={idGetFunction} />
        <RightSideChoise size={massiveData[idGet].Size} himidity={massiveData[idGet].Humidity} light={massiveData[idGet].Light} temperature={massiveData[idGet].Temperature} namePlants={massiveData[idGet].NamePlants} description={massiveData[idGet].Description} />
    </div>
  );
}

export default App;
