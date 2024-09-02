import axios from "axios";
import { useEffect, useState, useRef } from "react"; //named-export방식
import SockJs from 'sockjs-client'; //socket-default방식

function App() {

  //http로 서버통신하기
  // useEffect(() => {

  //   (async () => {
  //     const result = await axios.post("http://localhost:8181/getEntity", {name: "이순신"})
  //     console.log(result);
  //   })();


  // }, [])



  //http => 커넥션 리스 프로토콜 (실시간 채팅 x)
  //websocket => 서버는 대기하고 있다가, 클라이언트 요청이 들어가면 연결을 수립하고,
  //             지속적인 통신채널을 만들게 됩니다.


  // useEffect( () => {
  //   //socket라이브러리 npm install sockjs-client
  //   const socket = new SockJs("http://localhost:8181/api/chat");

  //   //연결성립 호출됨
  //   socket.onopen = () => {
  //     console.log("연결수립");
  //   }

  //   socket.onclose = () => {
  //     console.log("연결 해제");
  //   }

  //   socket.onmessage = (e) => {
  //     console.log("수신데이터:" + e);
  //   }

  //   // 만약 연결이 해제된다면 socket.close(); 를 사용해서 반드시 닫아야함
  // }, [])

  const [sock, setSock] = useState(null);
  const inputRef = useRef(null); //userId 인풋
  const [msg, setMsg] = useState(''); //메세지 인풋
  const [message, setMessage] = useState([]); //수신메시지(빈배열)을 state로 관리

  const enterSocket = () => {

    const userId = inputRef.current.value; //--- userId의 value값

    if(userId === '') {
      alert("이름 좀 적어라 ! ")
      return;
    }

    if(sock == null) {
      const socket = new SockJs(`http://localhost:3000/api/chat?userId=${userId}&room=1`);

        //연결성립 호출됨
        socket.onopen = () => {
          console.log("연결수립");
        }

        socket.onclose = () => {
          console.log("연결 해제");
        }

        socket.onmessage = (e) => {
          // console.log("수신데이터:" + e);
          const newMessage = e.data;

          setMessage( (prev) => { //setter메서드의 매개변수에 함수를 넣으면 기존값을 얻을 수 있다.
            if(prev.length >= 30) {
              prev.shift(); //앞에서 하나 제거
            }

            return [...prev, newMessage]; //배열합치기
            
          }); 
        }

        setSock(socket); //state에 socket객체 저장
    }
  }

  const exitSocket = () => {
    if(sock != null) {

      sock.close(); // -- 소켓을 닫아주고
      setSock(null);
      alert("서버와 연결이 종료되었습니다!");

    }
  }

  //메세지전송
  const sendMsg = (e) => {
    //enter를 칠 때 & 값이 비어있지 않을 때 & sock이 비어있지 않을 때
    if(sock && msg && e.key==='Enter') {
      sock.send(msg); //state로 관리되는 msg
      setMsg(''); //state초기화
    }

  }

  return <>

    <h3>리액트로 채팅구현하기</h3>

    아이디: <input type="text" ref={inputRef}/>
    <button type="button" onClick={enterSocket}>입장</button>
    <button type="button" onClick={exitSocket}>퇴장</button>

    <br/>
    메시지: <input type="text" value={msg} onChange={e => setMsg(e.target.value)} onKeyUp={sendMsg}/>
    <div style={{border: "1px solid #777", width: '100%', height: "200px", overflow: "auto"}}>
      {
        message.map( (item, index) => <div key={index}>{item}</div> )
      }
    </div>
  
  </>
}

export default App;