import { useState } from "react";


function EventComponent2() {

  let [form, setForm] = useState({name: '', topic: ''}) //초기값이 객체

  let handleForm = (e) => {
    //어떤 태그가 어떤 값을 가지는지 알아야한다.
    // console.log(e.target.name); //태그명
    // console.log(e.target.value); //사용자가 입력한 값
    
    //기존값을 복사하고 특정 키(e.target.name -> e.target.value)만 변경한다
    let copy = {...form, [e.target.name] : e.target.value} //spread operater : form이 갖고 있는 값을 나열한다
    setForm(copy);    
  }

  let handleClick = (e) => {
    alert(`${form.name}님의 할 일 ${form.topic}`);
    setForm({name: '', topic: ''});
  }

  return(
    <div>
      input태그 객체로 핸들링하기
      <br/>

      <input type="text" name="name" value={form.name} onChange={handleForm}/>
      <br/>
      결과 state값: {form.name}

      <br/>
      <input type="text" name="topic" value={form.topic} onChange={handleForm}/>
      <br/>
      결과 state값: {form.topic}
      
      <br/>
      <button type="button" onClick={handleClick}>클릭이벤트</button>
    </div>
  )
}
export default EventComponent2; 