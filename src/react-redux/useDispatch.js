import { useContext } from 'react';
import context from './context';

function useDispatch() {
    const Reduxcontext = useContext(context);


    return Reduxcontext.dispatch;


}

export default useDispatch