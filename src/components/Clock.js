import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             timer:'00:00:00'
        }
    }
    timenow=setInterval(() => this.setState({
        timer:this.timenw()
    }), 1000);

    // helo=(att)=>{return att <10  ? '0'+att:att};
    


    timenw=()=>{
        let t=new Date();
        console.log(t.getTime())
    
        let sec=t.getSeconds();
        let min=t.getMinutes();
        let hr=t.getHours(); 
        sec = sec<10 ? "0"+sec :sec
        min = min<10 ? "0"+min :min
        hr = hr<10 ? "0"+hr :hr
        
    
        return `${hr}:${min}:${sec}`
    }
    render() {
        return (
            <div>
                The time is {this.state.timer}
            </div>
        )
    }
}

export default Clock
