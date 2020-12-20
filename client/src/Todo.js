import React, { Component } from 'react';
import './Todo.css';
import Addtodo from './Addtodo';

class Todo extends Component {
    constructor(){
        super();
        this.state={
            value: '',
            lists:[],
            showtodo:false
        }
    }
   handleChange=(e)=>{
    this.setState({value:e.target.value});
   }
   handleClick=(e)=>{
    this.setState({ lists: [...this.state.lists, this.state.value],value:''})
   }
   changeshowtodo=(e)=>{
    this.setState({load:!this.state.load})
   }
   
    render() {
       const {lists,load} = this.state;

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
                        <table className="table table-hover table-sm">
                        <thead className="thead-light">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        {lists.map(item => (
                        <tbody onClick={this.changeshowtodo}>
                            <tr>
                            <td>{item}</td>
                            <td><a href="#" ><i className="fa fa-pencil"></i></a></td>
                            <td> <a href="#" ><i className="fa fa-times"></i></a></td>
                            </tr>
                            
                        </tbody>
                            ))}
           
</table>
                        </ul>
                    </div>
                    {load == true ? <Addtodo />:'' }
                    
                </div>
            </div>
        )
    }
}
export default Todo;