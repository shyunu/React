export const myReducer = (state, action) => { //state값, 상태를 나타낼 수 있는 액션값
  console.log(state);
  console.log(action);

  //action에 따라서 state를 변경하는 작업을 수행한다
  if(action === "increase") {
    state = {value : state.value + 1};  //1증가. value에 현재value값+1을 저장한다
  
  } else if(action === "decrease") {
    state = {value : state.value -1}; //1감소
  
  } else if(action === "reset") {
    state = {value : 0}; //초기화처리
  } 

  return state; //여기서 반환되는 state는 reducer의 상태값으로 다시 반환된다.
}