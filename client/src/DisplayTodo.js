import React, { Component } from 'react'
import {connect } from 'react-redux';


class DisplayTodo extends Component {
    render() {
        const {todolist} = this.props.todo;
        return (<>
            <table className="table table-hover table-sm">
            <thead className="thead-light">
                <tr>
                <th scope="col">status</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
             {todolist.map((item,index)=>(
                <tbody key={index} >
                    <tr>
                    <td><a href="#" ><i className="fa fa-times"></i></a></td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td><a href="#" ><i className="fa fa-pencil"></i></a></td>
                    <td> <a href="#" ><i className="fa fa-times"></i></a></td>
                    </tr>
                </tbody>
               ))}
           
</table>
</>
        )
    }
}
const mapStateToProps=(state)=>({
    todo:state.todo
})

export default connect(mapStateToProps)(DisplayTodo);