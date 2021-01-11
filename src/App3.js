import React,{useState} from 'react';
const App3=()=>{
    const [myname,setMyName]=useState('');
    const [inc_val,setValue]=useState(10);
    return(
        <>
            <button onClick={()=>{ setMyName("Hello World")}}>change My Name</button>
            {(inc_val==0)?"Happy New Year!":myname}<br/>
            <button onClick={()=>{
                if(inc_val > 0){
                    setValue(inc_val-1);
                    if(inc_val == 0){
                        setMyName("Happy New Year!!");
                    }
                }
            }}>倒數:{inc_val}</button>
        </>
    )
}
export default App3;