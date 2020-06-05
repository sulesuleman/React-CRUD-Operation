import React from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
import './dashboard.css';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import {Link } from 'react-router-dom';


class Dashboard extends React.Component {
    constructor(){
    super();
        this.state = { 
            record:[]
        }
        this.ondelete = this.ondelete.bind(this);
    }
    ondelete(id)  {
        axios.delete(`http://localhost:3000/admin/delstudent/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.forceUpdate()
            
          })
    }   
    componentDidMount() {
        axios.get('http://localhost:3000/admin/students')
            .then(res => {
                this.setState({
                    record:res.data
                });
                console.log("students: ",this.state.record);
                
            })
     }
     
        
     render() {
       
        

        return (
            <div>
        <section id="banner">
          <div class="inner">
            <h1>Welcome</h1>
            <p>Checkout all Record at one click.</p>
          </div>
        </section>
        <div style={{padding:"5%"}}>
            <h1>
                List of All Registered Students
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    {
                   this.state.record.map((item) => {
                    return( 
                        <tr>
                            <td><Link to={`/student/${item._id}`}>{item.name}</Link></td>
                            <td>{item.rollno}</td>
                            <td><Link onClick={() => this.ondelete(item._id)}>Delete</Link></td>  
                            <td><Link to={`/updatestudent/${item._id}`}>Update</Link></td>
                        </tr>    
                    )
                    })
                    }
                    

            </table>
</div>
  </div>
          );
}
}
export default Dashboard;