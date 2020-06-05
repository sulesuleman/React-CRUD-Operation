import React from 'react';
// import Modal from 'react-bootstrap';
import { Card} from 'antd';
// import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from 'axios';
class DetailModal extends React.Component {
    state = {
        student:{}
      }
    componentDidMount() {
        console.log(this.props)
        const id=this.props.match.params.articleID;
        axios.get(`http://localhost:3000/admin/students/${id}`)
        .then(res =>{
            this.setState({
                student:res.data
            });
            console.log('data: ',this.state.student )
        })
    }
    render() {
         
        return ( 
            <div style={{padding:"5%"}}>
            <div className="site-card-border-less-wrapper">
           <center> <Card title="COMSATS University" bordered={false} style={{ width: "40%" }}>
                
                            <p>{this.state.student.name}</p>        
                            <p>{this.state.student.rollno}</p>
            
             </Card></center>
          </div>
          </div>

            )
    }
}
 
export default DetailModal;