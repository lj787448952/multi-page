import React,{Component} from 'react';
import Baby from './Baby';

class Baby_new extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rate:'',
            isBorn:true,
            count: 0
        }
        this.handleClick=this.handleClick.bind(this);
        this.spawnBaby=this.spawnBaby.bind(this);
        this.handleClick2=this.handleClick2.bind(this);
    }
    handleClick(){
        this.setState({isBorn:!this.state.isBorn});
    }
    spawnBaby(){
        if(this.state.isBorn) return <Baby/>
    }
    handleClick2(){
        this.setState({count:this.state.count+1})
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate is called')
        return true;
    }
    componentDidUpdate(preProps,prevState,snapshot){
        console.log('*** componentDidUpdate');
        if(this.state.count<5){
            this.setState({count: this.state.count+1})
        }
        document.getElementById("me").append("ME!")
        
    }
    render(){
        console.log("render Baby_news")
        return(
            <div>
                <button onClick={this.handleClick}>
                    {(this.state.isBorn===true)?"讓他回去肚子裡":"讓他生"}
                </button><br/> {this.spawnBaby()}<br/>
                <button onClick={this.handleClick2}>Click Me</button><br/>
                {this.state.count}<br/>
                <div id="me"></div>
            </div>
        );
    }
}

export default Baby_new;