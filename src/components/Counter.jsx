import { useState } from "react";
import "../styles/Counter.css"
export default function Counter({ sendData }) {

    var [count, setcount] = useState(0);
    function increment() {
        count++;
        setcount(count)
    }
    function decrement() {

        if (count >= 1) {
            count--;
            setcount(count)
        }

    }
    function add() {
        if (count !== 0) {
            sendData(count)
            setcount(0)
        }

    }
    return (
        <div className='counter'>
            <h3 className='sheadings'>counter</h3>
            <div className="count">
                <button className="op" onClick={decrement}>-</button>
                <h2>{count}</h2>
                <button className="op" onClick={increment}>+</button>
            </div>

            <button className='atl' onClick={add}>Add to list</button>
        </div>
    )
}