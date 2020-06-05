import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios'
import Password from 'antd/lib/input/Password';

class UpdateStudent extends React.Component {
    state = { 
      Username:"",
      Password:""
     }
     
  handleChange = ()=> {
    const id=this.props.match.params.id;
    const Username= this.state.Name;
    const Rollno= this.state.Rollno;
    console.log("studentname: ",Username+" "+"rollnumber: ",Rollno)
    
    axios.put(`http://localhost:3000/admin/updatestudent/${id}/${Username}/${Rollno}`)
        .then(res => 
        console.log(res),
        alert('Data Successfully Updated!'))
       .catch(error=> console.error(error));
         
    }     
 
     render() { 
   
        return (
            <div style={{padding:"5%"}}>
            <h1>
                Register Students
            </h1>
            
            <Form onFinish={(event) => this.handleChange(event)}>
                  <Form.Item
                    label="Student Name"
                    name="Student Name"
                    rules={[
                      {
                        
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input onChange={(event)=>this.setState({Name:event.target.value})} />
                  </Form.Item>
            
                  <Form.Item
                    label="RollNumber"
                    name="RollNUmber"
                    rules={[
                      {
                        
                        message: 'Please input your Rollnumber!',
                      },
                    ]}
                  >
                    <Input  onChange={(event)=>this.setState({Rollno:event.target.value})}/>
                  </Form.Item>

                  <center><Form.Item >
                    <Button type="primary" htmlType="submit" >
                      Update Student
                    </Button>
                  </Form.Item></center>
                </Form>      
                </div>
          );
}
}
export default UpdateStudent;
