import {useContext} from 'react';
import UserContext from '../context/ContextAPI2';

function D() {
  
  const {state, action} = useContext(UserContext);

  return (
    <>
      <h3>D컴포넌트</h3>

      {state.id}<br/>
      {state.name}<br/>
    </>
  )
}
export default D;