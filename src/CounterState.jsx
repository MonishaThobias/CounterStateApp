import React,{Component} from "react";
import './counterstate.css'

class CounterState extends Component{
    constructor(){
        super();
this.state = {
    count:0,
    initials:'JS',
    title:'Counter State App'};
    this.handleOnClick=this.handleOnClick.bind(this);
    }
handleOnClick(){
this.setState(
    {count:this.state.count+1},

function(){
    return console.log('Job done!')
}

)
}
    render(){
        const {count,initials,title} = this.state;
        return(
            <>
            <div className="app-container">
                <div className="app-head">
                    <h1>
                        <span className="initials me-4">{initials}</span>
                       <span className="head-title">{title}</span>
                    </h1>
                </div>
                <div className="app-body">
                    <p>It shows <span>{count}</span></p>
                    <button onClick={this.handleOnClick}>
                        Add</button>
                </div>
            </div>
            </>
        )
    }
}

export default CounterState;