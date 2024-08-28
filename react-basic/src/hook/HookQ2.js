import { useRef, useState } from "react";


const HookQ2 = () => {
    /*
    실습(할일목록 만들기 )
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.

    */
   
    let [data, setData] = useState({todo: '', list: []}); 
    let input = useRef(null);
    
    //input데이터 핸들링
    const handleTodo = (e) => {
        setData({...data, ["todo"] : e.target.value });
    }
    
    let handleClick = (e) => { 
        let newList = data.list;
        newList.push(data.todo);
        setData({todo: '', list: newList});
        input.current.focus();  
    }

    
    return (
        <div>
            <h3>실습</h3>
            <input type="text" placeholder="할일 목록을 작성하세요" value={data.todo} ref={input} onChange={handleTodo}/>
            <button type="button" onClick={handleClick}>등록</button>
            <ul>
                {
				data.list.map( (item, index) => <li key={index}>{index + 1}.{item}</li>)
                }
            </ul>
        </div>
    )
}

export default HookQ2;