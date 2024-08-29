import { useEffect, useState } from "react";


function App() {

  //ajax => 
  //https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json

  const [data, setData] = useState();

  const getData = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => response.json() )
    .then( data => {
      //state로 관리함
      setData(data);
    })
  }

  //화면 로드시에 데이터를 가지고 올때에는 useEffect hook
  const [raw, setRaw] = useState();

  useEffect( () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => response.json() )
    .then( data => {
      setRaw(data);
    })
  }, []); //화면이 생성될 때 한번만 실행된다.


  
  return (
    <>
      <h3>ajax로 데이터 처리하기</h3>
      <button onClick={getData}>클릭할 때 네트워크 통신</button>
 
      {/* 삼항연산자로 해주지 않으면 data값이 undefined라고 에러가 발생한다
          undefined의 데이터값을 가져오려고 하니 에러가 발생하는 것이므로 이렇게 만들어주면 된다.! */}
      {
        data !== undefined ? 
        <div>
        {data.userId}<br/>
        {data.userPw}<br/>
        {data.userName}<br/>
        </div>
        :
        null
      }

      <h3>로드 시에 데이터 가져오기</h3>
      {
        raw && <div>
          {raw.userId}<br/>
          {raw.userPw}<br/>
          {raw.userName}<br/>
        </div>
      }
      
    </>
  )
}
export default App;