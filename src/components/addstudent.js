import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios'

class AddStudent extends React.Component {
    state = { 
      Username:"",
      Password:"",
      
     }
     
  handleChange = ()=> {
      const Username= this.state.Username;
      const Rollno= this.state.Password;
      console.log("studentname: ",Username+" ","rollnumber: ",Rollno)
      axios.post('http://localhost:3000/admin/addstudent',{
        name: Username,
        rollno: Rollno
       })
       .then(res => 
        console.log(res),
        alert('Data Successfully added!'))
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
                    <Input onChange={(event)=>this.setState({Username:event.target.value})} />
                  </Form.Item>
            
                  <Form.Item
                    label="Registeration No"
                    name="Registeration No"
                    rules={[
                      {
                        
                        message: 'Please input your Rollnumber!',
                      },
                    ]}
                  >
                    <Input width="50%" onChange={(event)=>this.setState({Password:event.target.value})}/>
                  </Form.Item>
                  
                  
                  <Form.Item >
                      <Button type="primary" htmlType="submit" >Submit </Button>
                  </Form.Item>
                </Form>      
                </div>
          );
}
}
export default AddStudent;