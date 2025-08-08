import { useState } from "react";
import "../styles/Container.css";
import Display from './ListView.jsx';
import Counter from "./Counter.jsx";

export default function Container() {
    const [Data, setData] = useState([]);
    const [isAsc, setIsAsc] = useState(true);

    function handleData(newdata) {
        setData(prevData => [...prevData, newdata]);
    }

    function handleReset() {
        setData([]);
    }

    function handleSort() {
        if (Data.length > 0) {
            const sortedData = [...Data].sort((a, b) =>
                isAsc ? a - b : b - a
            );
            setData(sortedData);
            setIsAsc(!isAsc);
        }
    }

    function handleDelete(index) {
        setData(prevData => prevData.filter((_, i) => i !== index));
    }

    return (
        <div className='container'>
            <Counter sendData={handleData} />
            <Display
                receiveData={Data}
                reset={handleReset}
                sort={handleSort}
                deleteItem={handleDelete}
                order={isAsc ? "Ascending" : "Descending"}
            />
        </div>
    );
}
