import { useEffect, useState } from "react";


function HookEffect() {

  //useState훅
  const [data, setData] = useState('');
  const [age, setAge] = useState('');

  //useEffect훅 : 컴포넌트 라이프사이클 관리
  // 1번
  // useEffect( () => {
  //   console.log('마운트 이후에 동작됨(렌더링 이후에 동작)');
    
  // });

  //2번
  // useEffect( () => {
  //   console.log('마운트 이후에 딱 한번만 실행됨(네트워크상으로 데이터를 가지고 올 때 사용함');
    
  // }, []);

  
  //3번
  // useEffect( () => {
  //   console.log('특정 state값의 변경으로 렌더링 될 때 동작함(변경될때만 실행)');
    
  // }, [data,age]);

  //4번
  // useEffect( () => {
  //   console.log('effect실행됨~');
  //   return () => {
  //     console.log('기존꺼가 unmount(소멸)되기 전에 실행됨');
      
  //   }
  // }, [data]); //data가 변경될때만

  //useEffect는 여러개일수도 있다.
  // useEffect (() => {
  //   console.log('effect실행됨 22');
    
  // })

  // 무한 루프에 빠질 수 있는 코드
  // const [ex, setEx] = useState({name : '홍길동'});
  // useEffect( () => {
  //   let copy = {...ex};
  //   setEx(copy);
  // }, [ex]);



  // console.log('코드 실행됨...');

  return (
    <>
      <input type="text" value={data} onChange={ (e) => setData(e.target.value) }/>
      <input type="text" value={age} onChange={ (e) => setAge(e.target.value) } />
      {data}
      {age}
    </>
  )
}
export default HookEffect;