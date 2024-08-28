import { useState } from "react";


function StateComponentQ() {

  let [cnt, setCnt] = useState('0');
  // let increase = () => {
  //   setCnt ( prev => prev + 1);
  // }


  return (
    <div>
      실습 <br/><br/>
      카운트: {cnt} <br/><br/>
      <button onClick={ () => {setCnt(++cnt)} }>증가</button>
      <button onClick={ () => {setCnt(--cnt)} }>감소</button> 
      <button onClick={ () => {setCnt(0)} }>초기화</button> 
    </div>
  )

}

export default StateComponentQ;