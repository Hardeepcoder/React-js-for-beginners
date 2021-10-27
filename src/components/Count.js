import react, {useState} from "react";

export default function Count(){
    const [count, setCount]= useState(0);
    return(
        <div>

            <p>{count}</p>
            <button onClick={() => setCount(count +1)}>Click</button>
        </div>
    )
}