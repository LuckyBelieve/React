import { useDispatch,useSelector } from "react-redux";
import {increment,decrement,incrementByAmount} from './redux/userSlice'
const CounterApp = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.count)
    return (
        <div className="counter">
            <h1>the value of the count:{count}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(4))}>increment by 4</button>
        </div>
    );
}
 
export default CounterApp;