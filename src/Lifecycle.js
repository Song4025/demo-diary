import React, { useState, useEffect } from "react";

const UnmountTest = () => {
    useEffect(() => {
        console.log("Mount!!");
        return () => {
            // Unmount를 시키려면 callback함수를 넣으면 됌
            console.log("Unmount!!");
        };
    }, []);
    return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);
    return (
        <div>
            <button onClick={toggle}>ON/OFF</button>
            {/* 단락회로평가를 이용해서 isVisible이 true한 값이면 <UnmountTest> 컴포넌트를 랜더함 */}
            {isVisible && <UnmountTest />}
        </div>
    );
};

export default Lifecycle;
