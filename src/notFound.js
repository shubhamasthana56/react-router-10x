import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const NotFound = ()=> {
    const [testState, setTestState] = useState(100);
    const buttonRef = useRef(null);

    const updateState = ()=> {
        console.log("UpdateState Called");
        return [1,2]
    }
    useEffect(()=> {debugger;buttonRef.current.innerHtml ="Testing done" },[])
    const memorizedUpdate = useCallback(updateState,[testState])
    const memorizedUpdateValue = useMemo(updateState,[testState])
    memorizedUpdate();
    console.log(memorizedUpdateValue, "From useMemo function");
    return (

        <>Page Not Found
            <button ref={buttonRef} onClick={()=> {setTestState(testState + 1)}}>Change NotFound State</button>
        </>
    )
    
}
export default NotFound;