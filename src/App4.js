import React,{Component} from 'react';
class App4 extends Component{
    constructor(props){
        super(props);
        this.state = {
            repoName: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleJson = this.handleJson.bind(this);
    }
    handleClick(){
        //fetch('https://apiservice.mol.gov.tw/OdService/download/A17030000J-000049-UIv',{method:"GET"})

        fetch('http://localhost/get_data.php',{method:"GET"})
        .then(res=>res.json())
        .then(data=>{

            console.log(data)
            var str = '';
            str = data["key"]+","+data["val"];
            this.setState({repoName: str});

            /*for(var i=0;i<data.length;i++){
                str+="   月份: "+data[i]['月別']+" , "+"   新台幣:"+data[i]['新台幣']+' , '+"   日幣: "+data[i]['日圓']+"\n";
            }*/
            this.setState({repoName: str});

        })
        .catch(e=>{
            console.log(e);
        })
    }


    handlePost(){
        const parm = {A:123, B:234};
        const formData = Object.keys(parm).map(
            function(keyName){
                return encodeURIComponent(keyName)+'='+encodeURIComponent(parm[keyName])
            }
        ).join('&');
        fetch("http://localhost/get_data.php?f=1",{
            method:"POST",
            body: formData,
            headers: new Headers({
                "Content-type":"application/x-www-form-urlencoded"
            })
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            var str='';
            str= data['total'];
            this.setState({repoName: str});
        })
        .catch(e=>{
            console.log(e)
        })
    }
    handleJson(){
        const parm = {A:123, B:234};
        const formData = Object.keys(parm).map(
            function(keyName){
                return encodeURIComponent(keyName)+'='+encodeURIComponent(parm[keyName])
            }
        ).join('&');
        fetch("http://localhost/get_data.php?f=2",{
            method:"POST",
            body: JSON.stringify(parm),
            headers: new Headers()
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            var str='';
            str= data['total'];
            this.setState({repoName: str});
        })
        .catch(e=>{
            console.log(e)
        })
    }
    render(){
        return(
            <div>
                <pre>

                    {(this.state.repoName==null)?"No Date":"資料是 \n"+this.state.repoName}<br/>

                </pre><br/>
                <button onClick={this.handleClick}>取得資料</button>
                <button onClick={this.handlePost}>取得Post資料</button>
                <button onClick={this.handleJson}>用JSON參數取得資料</button>
                
            </div>
        )
    }
}
export default App4;