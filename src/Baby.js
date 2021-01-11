import React, {
    Component
} from 'react';
class Baby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRightDad: true,
        }
    }


    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        if (props.dad !== "Chang") {
            return {
                isRightDad: false,
            }
        }
    }


    componentDidMount(){
        console.log("componetDidMount");
        setTimeout(()=>{
            if(this.state.isRightDad===true){
                document.getElementById("msg").innerHTML="他的媽媽是小美"
            }
            else{
                document.getElementById("msg").innerHTML="他的媽媽是誰?美芽?不知道"
            };
        },3000);
        document.getElementById("talk").append("Dad!");
    }
    componentWillUnmount(){
        document.getElementById("talk").innerHTML="";
    }

    render(){
        console.log("render");
        return(
            <div id="msg">
                資料讀取中...
            </div>
        )
    }

}
export default Baby;