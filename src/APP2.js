import React,{Component} from 'react';
class APP2 extends Component{
    constructor(props){
        super(props);
        this.state={
            myname:'',
            inc_val:3
        }
        //把宣告的函式指定給props重新複覆寫(第6行)
        this.changeMyName = this.changeMyName.bind(this);
        this.incValue = this.incValue.bind(this);
    }
    //寫更改名稱函式
    changeMyName(){
        this.setState({myname:"Yeah~Touch Me More"});
    }
    incValue(){
        var song="還沒到的櫻花季,還沒用的照相機\
        \
        還沒光臨的餐廳,還在期待,有著你的旅行\
        \
        等待日落的巴黎,鐵塔之下牽著你\
        \
        等待說著我願意,等待未來,每天身邊有你\
        \
        一點一滴每一天珍惜\
        怕突然來不及,好好的愛你\
        時針一直倒數著,我們剩下的快樂\
        此刻相擁的狂熱,卻永遠都深刻\
        心跳一直倒數著,生命剩下的溫熱\
        至少用力地愛著,還烏黑的頭髮 有你就不怕白了\
        漆黑過後是旭日,淚流以後是堅持\
        真的愛是日復日,從不放棄 重複說你願意\
        還沒退化的眼睛,抓緊時間看看你\
        愛是從來不止息,一個風景,每天新的生命\
        一點一滴每一天珍惜\
        用盡每一口氣,好好的愛你\
        時針一直倒數著,我們剩下的快樂\
        此刻相擁的狂熱,卻永遠都深刻\
        心跳一直倒數著,生命剩下的溫熱\
        至少用力地愛著,還烏黑的頭髮 有你就不怕白了\
        咖啡再不喝就酸了,晚餐再不吃就冷了\
        愛著為什麼不說呢,難道錯過了才來後悔著\
        誰夢未實現就醒了,誰心沒開過就灰了\
        追逐愛的旅途曲折,就算再曲折為你都值得\
        一點一滴每一天珍惜\
        用盡每一口氣,好好的愛你\
        時針一直倒數著,我們剩下的快樂\
        此刻相擁的狂熱,卻永遠都深刻\
        心跳一直倒數著,生命剩下的溫熱\
        至少痛並快樂著,愛過才算活著 有你別無所求了\
        有你別無所求了,有你別無所求了\
        有你別無所求了,有你別無所求了\
        有你別無所求了";
        if(this.state.inc_val>0)
            this.setState({inc_val: this.state.inc_val-1},()=>{
                if(this.state.inc_val==0){
                    this.setState({myname:song});
                }
            })
        
        else
            this.setState({myname:"煩死了!"});
        
    }
     
    render(){
        return(
            <>
            <button onClick={this.props.handleClick}>{this.props.children}</button><br/>
            <h1 id="show-area">lalalalala</h1>
            <button onClick={this.props.changeName} value="Hi">Who am I?</button><br/>

            <button onClick={this.changeMyName}>Change Me</button><br/>
            {/*{this.state.myname}裡面是被覆寫的內容(第13行)，原本是空的(第6行)*/}
            <h1>{this.state.myname}</h1><br/>
            <button onClick={this.incValue}>鄧紫棋倒數:{this.state.inc_val}</button>
            </>
        )
    }
}

export default APP2;