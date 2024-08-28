import { useReducer } from "react";
import { myReducer } from "../util/MyReducer";

//reducer함수 : 컴포넌트 외부에서 상태값을 받아서 state를 체인지한다
// const myReducer = (state, action) => { //state값, 상태를 나타낼 수 있는 액션값
//   console.log(state);
//   console.log(action);

//   //action에 따라서 state를 변경하는 작업을 수행한다
//   if(action === "increase") {
//     state = {value : state.value + 1};  //1증가. value에 현재value값+1을 저장한다
  
//   } else if(action === "decrease") {
//     state = {value : state.value -1}; //1감소
  
//   } else if(action === "reset") {
//     state = {value : 0}; //초기화처리
//   } 

//   return state; //여기서 반환되는 state는 reducer의 상태값으로 다시 반환된다.
// }

//컴포넌트
function HookReducer() {

  //reduce hook
  //반환 [state값, reducer함수의 상태를 바꿀 수 있는 action함수]
  const [state, actionFunc] = useReducer(myReducer, {value:0}); //reducer함수, 초기값
  
  const handleIncrease = () => {
    actionFunc("increase"); //myReducer함수에 action으로 전달됨
  }

  return (
    <>
      <h3>useReducer</h3>
      리듀서로 관리되는 state값: {state.value}

      <button type="button" onClick={handleIncrease}>증가</button>
      <button type="button" onClick={ () => actionFunc("decrease")}>감소</button>
      <button type="button" onClick={ () => actionFunc("reset")}>리셋</button>
    </>
  )
}
export default HookReducer;