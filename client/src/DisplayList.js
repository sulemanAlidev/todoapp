import React, { Component } from 'react'

class DisplayList extends Component {
    render() {
        const lists = this.props.lists;
        return (<>
            <table class="table table-hover table-sm">
            <thead class="thead-light">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            {lists.map(item => (
            <tbody>
                <tr>
                <td>{item}</td>
                <td><a href="#" ><i class="fa fa-pencil"></i></a></td>
                <td> <a href="#" ><i class="fa fa-times"></i></a></td>
                </tr>
                
            </tbody>
                            ))}
           
</table>
</>
        )
    }
}

export default DisplayList;