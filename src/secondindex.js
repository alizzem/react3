import React from "react";
import { ReactDOM } from "react";

class Application extends React.Component{
    state = {
        send: 0,
        recieve: 0,
        amount: 0
    }

    getData = () => {
        fetch('https://acb-api.algoritmika.org/api/transaction')
            .then(res => res.json())
            .then(data => {
                this.setState({ send: data[0].from, recieve: data[0].to, amount: data[0].amount})
            })
    }

    clicker = () => {
        this.getData()
    }


    render(){
        return(
            <div>
                <button onClick={this.clicker}>Click</button>
                <h1>{this.state.send}</h1>
                <h1>{this.state.recieve}</h1>
                <h1>{this.state.amount}</h1>
            </div>
        )
    }
}

export default Application