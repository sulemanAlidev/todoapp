import React, { Component } from 'react';
import DisplayTodo from './DisplayTodo';
import {connect } from 'react-redux';

import {addTodo} from "./redux/actions/todoActions";


 class Addtodo extends Component {
     constructor(props){
         super(props);
         this.state={
             check:false,
             title:'',
             date: '',
             todolist:[]

         }
     }
     handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});

     }
     handleClick=(e)=>{
        const newTodo={
            title:this.state.title,
            date:this.state.date
        }
        this.props.addTodo(newTodo);
        this.setState({title:'',date:''})
    }
    
    render() {
        const {check,date,todolist,title} = this.props.todo;
        
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
                        disabled={false}
                        >Add Todo
                </button>

                <ul>
                  <DisplayTodo/>
                            
                </ul>
           </div>
        )
    }
};

const mapStateToProps=(state)=>({
    todo:state.todo
})
export default connect(mapStateToProps,{addTodo})(Addtodo);