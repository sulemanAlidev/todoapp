import React, { Component } from 'react'

class DisplayTodo extends Component {
    render() {
        const {todolist} = this.props;
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
             {todolist.map(item=>(
                <tbody >
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

export default DisplayTodo;