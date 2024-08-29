import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Info from './component/Info';
import User from './component/User';
import BoardContent from './component/BoardContent';
import Board from './component/Board'; 
import Header from './layout/Header';
import MyPage from './component/MyPage';

function App() {
  return (
    
    /* 중첩라우터 */
    <Routes>
      <Route element={<Header/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/info/:num' element={<Info/>} />
        <Route path='/user' element={<User/>} />
      </Route>

      {/*  <Route path='/board' element={<Board/>} />
      <Route path='/board/:num' element={<BoardContent/>} /> */}

      {/* 중첩라우터 */}
      <Route path='/board' element={<Board/>}>
        <Route path=":num" element={<BoardContent/>}/>
      </Route>

      {/* navigate 컴포넌트 */}
      <Route path="/myPage" element={<MyPage/>}/>



    </Routes>
  );
}

export default App;
