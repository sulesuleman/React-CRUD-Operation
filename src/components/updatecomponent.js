import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios'
import { Select } from 'antd';
const { Option } = Select;

class UpdateComponent extends React.Component {
    state = { 
        students:[],
        Username:"",
        Password:"",
        Select: ""
    }

     
     componentDidMount() {
        axios.get('http://localhost:3000/admin/students')
        .then(res => {
            this.setState({
                students:res.data
            });
            console.log("students: ",this.state.students);
            
        })  
     }

  handleChange = ()=> {

      const Username= this.state.Name;
      const Rollno= this.state.Rollno;
      console.log("studentname: ",Username+" "+"rollnumber: ",Rollno)
      axios.put(`http://localhost:3000/admin/updatestudent/${this.state.Select}/${Username}/${Rollno}`)
        .then(res => 
        console.log(res),
        alert('Data Successfully Updated!'))
       .catch(error=> console.error(error));
         
    }     
    
     render() { 
       const handleChange=(value)=> {
            console.log(`selected: ${value}`);
            this.setState({
                Select: value
            })
          }
        return (
            <div>
            <h1>
                Register Students
            </h1>
            
            <Form onFinish={(event) => this.handleChange(event)}>
                
                <Select defaultValue="Select Students" style={{ width: 120, marginLeft:"12%",marginBottom:"2%" }} onChange={handleChange}>
                    {
                        this.state.students.map((item)=>{
                            return(
                            <Option value={item._id}>{item.name}</Option>                        
                            )
                        })
                    }
                </Select>


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
                  
                  <Form.Item >
                    <Button type="primary" htmlType="submit" >
                      Update
                    </Button>
                  </Form.Item>
                </Form>      
                </div>
          );
}
}
export default UpdateComponent;
