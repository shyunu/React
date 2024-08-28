import { useState } from "react";

function EventComponentQ() {

  let [form, setForm] = useState({data: '', result: ''}) //초기값이 객체

  let handleChange = (e) => {
    setForm({data: e.target.value, result : form.result}); 
  }

  let handleClick = (e) => {
    setForm({data: '', result: form.data});
  }

  let handleKeyUp = (e) => {
    if(e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div>
      인풋데이터 핸들링(실습)
      <br/>

      <input type="text" value={form.data} onKeyUp={handleKeyUp} onChange={handleChange}/>
      <button type="button" onClick={handleClick}>추가하기</button>
      
      <br/>
      <h3>결과</h3>
      <p>{form.result}</p>
    </div>
  )
}
export default EventComponentQ;