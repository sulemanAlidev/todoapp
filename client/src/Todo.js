import React, { Component } from 'react';
import './Todo.css';
import DisplayList from './DisplayList';
import Addtodo from './Addtodo';

class Todo extends Component {
    constructor(){
        super();
        this.state={
            value: '',
            lists:[]
        }
    }
   handleChange=(e)=>{
    this.setState({value:e.target.value});
   }
   handleClick=(e)=>{
    this.setState({ lists: [...this.state.lists, this.state.value],value:'' })
   }
    render() {
       const {lists} = this.state;

        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 section">
                        <input 
                            type="text" 
                            placeholder='Enter Name of list' 
                            onChange={this.handleChange}
                            value={this.state.value}
                        /> 
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            disabled={!this.state.value} 
                            onClick={this.handleClick}
                            >Add</button>
                        <ul>
                            <DisplayList lists={lists}/>
                        </ul>
                    </div>
                    <Addtodo/>
                </div>
            </div>
        )
    }
}
export default Todo;