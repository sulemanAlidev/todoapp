import React, { Component } from 'react';
import './list.css';
import Addtodo from './Addtodo';
import {connect } from 'react-redux';
import {addList,showtodo} from "./redux/actions/listActions";
import { uuid } from 'uuidv4';

class List extends Component {
    constructor(){
        super();
        this.state={
            value: '',
        }
    }
   handleChange=(e)=>{

    this.setState({value:e.target.value});
   }
   handleClick=(e)=>{
    const newList=this.state.value
    this.props.addList(newList);
    this.setState({value:''})
    // this.setState({ lists: [...this.state.lists, this.state.value],value:''})   
   }
   changeshowtodo=(e)=>{

    this.props.showtodo();

    // this.setState({showtodo:!this.state.showtodo})
   }
   
    render() {
    //    const {lists,showtodo,value} = this.state;
    const {lists,showtodo,value} = this.props.list;

        // console.log(lists)
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
                        {lists.map((item,index) => (
                        <tbody key={index} onClick={this.changeshowtodo}>
                            <tr>
                            <td >{item}</td>
                            <td><a href="#" ><i className="fa fa-pencil"></i></a></td>
                            <td> <a href="#" ><i className="fa fa-times"></i></a></td>
                            </tr>
                            
                        </tbody>
                            ))}
           
</table>
                        </ul>
                    </div>
                    {showtodo == true ? <Addtodo />:'' }
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps= state=>({
    list:state.list
})
export default connect(mapStateToProps,{addList,showtodo})(List);