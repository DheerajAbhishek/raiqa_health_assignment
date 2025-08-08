import "../styles/ListView.css";

export default function Display({ receiveData, reset, sort, deleteItem, order }) {
    const hasData = receiveData.length > 0;
    const highest = hasData ? Math.max(...receiveData) : null;
    const lowest = hasData ? Math.min(...receiveData) : null;

    return (
        <div className='display'>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "20px" }}>
                <h3 className='sheadings'>Numbers List</h3>
                <div className="sorter">
                    <button className="reset" onClick={reset}>Reset</button>
                    <button className="sort" onClick={sort}>Sort {order}</button>
                </div>
            </div>
            {hasData ? (
                <>
                    <div style={{ color: "black" }}>
                        {receiveData.map((item, index) => (
                            <div className="nums" key={index}>
                                <p style={{ marginLeft: "22px" }}>{item}</p>
                                <button style={{ marginRight: "22px" }}
                                    onClick={() => deleteItem(index)}
                                    className="del"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="nums">
                        <p style={{ color: "#2b7efe", marginLeft: "20px" }}>Total numbers :{receiveData.length}</p>
                    </div>

                    {/* Highest & Lowest Display */}
                    <div className="highLow" >
                        <p>Highest: {highest}</p>
                        <p>Lowest: {lowest}</p>
                    </div>
                </>
            ) : (
                <p style={{ marginTop: "30px", color: "black" }}>No numbers added yet. Use the counter above to add some!</p>
            )}
        </div>
    );
}
