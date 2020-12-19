import React, { Component } from 'react';
import DisplayTodo from './DisplayTodo' 

 class Addtodo extends Component {
     constructor(){
         super();
         this.state={
             check:false,
             title:'',
             date: Date,
             todolist:[]

         }
     }
     handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});

     }
     handleClick=(e)=>{
        this.setState({todolist: [...this.state.todolist,{title:this.state.title, date:this.state.date}],
        title:'',date:''})
    }
    
    render() {
        const {todolist} = this.state;
        return (
           <div className="col-md-7 ">
                <input 
                        type="text" 
                        placeholder='Enter Title'
                        name='title'
                        onChange={this.handleChange} 
                        value={this.state.title}
                        /> 
                <input 
                        className="ml-5 "
                        type="date" 
                        name='date'
                        onChange={this.handleChange}   
                        value={this.state.date}
                        />
                <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={this.handleClick}
                        disabled={!todolist}
                        >Add Todo
                </button>

                <ul>
                            <DisplayTodo todolist={todolist}/>
                </ul>
           </div>
        )
    }
}
export default Addtodo;