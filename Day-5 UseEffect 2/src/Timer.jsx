import { useEffect, useState } from "react";

export function Timer({start, end}) {
    const [time, setTime] = useState(start);
    useEffect(()=>{
        const id = setInterval(()=>{
            setTime((prev)=>{
                if(prev == end){
                    clearInterval(id);
                    return end;
                }
                return prev-1;
            })
        } , 1000)
    }, [])
    return <>
        <h1>Timer</h1>
        <h2>Time : {time}</h2>
    </>

}