import React from 'react';
import { useDispatch ,useSelector} from '../react-redux';

function Counter(props) {
    const dispatch = useDispatch();
    const number = useSelector(({reducer1}) => reducer1.number);
    const handeleClick = () => {
      dispatch({
        type: 'ADD'
      })
    }
  
    return (
      <div>
        结果{number}
        <button onClick={handeleClick}>+</button>
      </div>
    )
  
  }

export default Counter;