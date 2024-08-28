import { useState } from "react";

const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    const newSelect = select.map( (item, index) => {
        return <option key={index}>{item}</option>
      } );

    const [list, setList] = useState(data);

    const newData = data.map (item => <li key={item.id}>
                                        {item.type}-{item.teacher}
                                        </li> );
    //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
    let handleChange = (e) => {
        //data에서 필터링
        let newList = data.filter( item => item.type == e.target.value )
        setList(newList);
    }

	//4- input값은 state로 관리합니다.
	const [input, setInput] = useState('');
    const searchChange = (e) => {
        setInput(e.target.value);
    }
	//5 - 검색기능 - 원본 data에서 필터링으로 검색값을 찾아 state를 업데이트 합니다.

    const handleClick = () => { 
        
        
        let newList = data.filter(item => {
            let str = item.type.concat(item.teacher).toLowerCase();
            return str.includes(input);
            })
        setList(newList);
        
      } 

    return (
        <div>
			<hr/>
            <h3>실습</h3>
            Search: <input type="text" onChange={searchChange} value={input}/>
            <button onClick={handleClick}>검색</button>

            <br/>
            
			과목찾기:
            <select onChange={handleChange}>
                {newSelect}
            </select>
            <ul>
                {newData}
            </ul>
        </div>
    )
}

export default IterationComponentQ2;