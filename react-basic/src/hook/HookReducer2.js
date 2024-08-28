import { useReducer } from "react";

const nameReducer = (state, action) => {
  // console.log(action); --input태그
  
  //state는 유지하면서 전달되는 name에 따라서 key를 바꾼다.
  state = {...state, [action.name] : action.value}
  return state;
}

function HookReducer2() {
  //name과 age를 동시에 처리할 수 있는 nameReducer함수를 생성한다
  //초기값은 {name : '', age : 0}으로 한다
  //reducer함수 안에서는 객체 값을 state = {...state, [키]: value}; --- 기존값 복사
  //action함수는 매개변수를 값을 주면 된다.

  const [state, actionFunc] = useReducer(nameReducer, {name: '', age: 0});

  return(
    <>
      <input type="text" name="name" value={state.name} onChange={ (e) => actionFunc(e.target)}/>
      <input type="number" name="age" value={state.age} onChange={ (e) => actionFunc(e.target)}/>

      reducer를 통해서 변경된 값: {state.name}, {state.age}
    </>
  )
}
export default HookReducer2;