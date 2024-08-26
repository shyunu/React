import { useState } from "react";


function StateComponent() {

  //useState는 함수형 컴포넌트에서만 사용할 수 있는 hook
  //반환이 배열이고 [0]번째에 현재 데이터, [1]값을 변경하는 setter함수

  // let result = useState('초기값'); //구조분해할당 전
  // let data = result[0]; //data
  // let setData = result[1]; //function
  let [data, setData] = useState('초기값');   //구조분해할당 후
  let [msg, setMsg] = useState('black');

  let enter = () => {
    // data = "이렇게 값을 바꾸면?"; //값을 직접 바꾸는 것을 허용하지 않음
    setData("이렇게 값을 바꾸는 것이다!"); //값을 변경하는 setter함수 -> 비동기적으로 데이터를 change, 리렌더링 수행
  }

  return (
    <div>
      현재 데이터 {data}
      <br/>
      값 변경하기 <button onClick={enter}>입장</button>
      <br/>
      값 변경하기 <button onClick={() => setData("퇴장했습니다!")}>퇴장</button>
      <br/><hr/>

      <h3 style={{color: msg}}>{msg}</h3>
      <button onClick={ () => setMsg('red') }>빨간색</button>
      <button onClick={ () => setMsg('green') }>초록색</button>
      <button onClick={ () => setMsg('yellow') }>노란색</button>


    </div>
  )
}

export default StateComponent;