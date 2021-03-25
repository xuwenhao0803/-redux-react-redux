import { useContext, useEffect, useState } from 'react';
import context from './context';

function useSelector(func) {
    const Reduxcontext = useContext(context);

    const [state, setState] = useState(func(Reduxcontext.getState()));
    useEffect(() => {
        const unSubscribe = Reduxcontext.subscribe(() => {

            const result = func(Reduxcontext.getState())
            setState(result)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    return state;

}

export default useSelector