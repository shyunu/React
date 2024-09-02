import { useState } from "react";
import ColorComponent from "./component2/ColorComponent";
import ColorContext from "./context/ContextAPI";


function App() {

  //contextAPI의 변화를 알릴 때에는 Context의 Provider를 사용한다
  //Provider는 value props를 필수로 전달해야한다.


  //ex
  //select값이 변경되면 state를 변경해서 Provider로 전달되는 색상을 바꿔보세요
  const [color, setColor] = useState('red');

  return (
    <>
      <h3>컨텍스트 API</h3>

      <ColorContext.Provider value={{color: color}}>
        <ColorComponent/>
      </ColorContext.Provider>

      <select onChange={e => setColor(e.target.value)}>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
      </select>
    </>
  )
}
export default App;