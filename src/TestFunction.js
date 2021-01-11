const TestFunction = (props) =>{
    const showAns = true;
    const test = "test";
    const output = [];
    const styleH1 = {color:'red'};

    const getValue=(event)=>{
      let val = event.target.value
      if(val == 1){
        alert("One and 1")
        console.log("One and 1")
      }
      else if(val == 2){
        alert("TWO and 2")
        console.log("TWO and 2")
      }
      else if(val == 3){
        alert("Three and 3")
        console.log("Three and 3")
      }
      else if(val == 4){
        alert("four and 4")
        console.log("four and 4")
      }
      else{
        alert("five and 5")
        console.log("five and 5")
      }
    }

          for(let i=0;i<5;i++){
              output.push(<><button value={i} onClick={getValue}>我是第{i}個按鈕</button><br/></>)
          }
          return(
          <>
            {output}
            <h1 className="header" style={styleH1}>{props.name}</h1>
            <button value ={1234} onClick={props.handleClick}>{props.children}</button>
            <h2 style ={{color:'darkblue'}}>{(showAns==true) ? "true":"false"}</h2>
            <h3 id="show-area">{test}</h3>
          </>
          );
  }

  export default TestFunction;