import React from "react";

function FuncComponent() {
    const [count, setCount] = React.useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const decrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };
    
    return (
        <div style={{ margin:'0px',textAlign: 'center', border: '1px solid gray', padding: '30px', backgroundColor: 'beige', borderRadius: '10px' }}>
        <h1 style={{paddingBottom:'5px'}}>Functional Component</h1>
        <hr style={{ border:'1px solid black' }} />
        <h1>Counter: {count}</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
        <button className='button1' onClick={increment}>Increment by 1</button>
        <button className='button1' onClick={decrement}>Decrement by 1</button>
        </div>
        </div>
    );


}
export default FuncComponent;