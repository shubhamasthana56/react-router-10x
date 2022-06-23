import { useEffect, useState, memo } from "react";

const Home = (props)=> {
    const [counter, setCounter] = useState(0);
    console.log("Testing Performance");
    const timeConsumingFunction = ()=> {
        console.log("Time consuming")
    }
    
    timeConsumingFunction();
    useEffect(()=> {
        console.log("Inside useEffect", props)
        props.updateTodoList("Test");
    },[])
    return (
        <>
            Home Works
            <button onClick={()=> {setCounter(counter + 1)}}>Update</button>
        </>
    )
}
export default memo(Home);