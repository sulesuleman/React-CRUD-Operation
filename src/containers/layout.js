import { Layout, Menu, } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
 render(){
     return(
 <Layout className="layout">
    <Header>
      <div className="logo"/>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
        <Menu.Item key="2"><Link to ="/addstudent">Add Students</Link></Menu.Item>
        <Menu.Item key="3"><Link to ="/updatestudent">Update Students</Link></Menu.Item>
        
      </Menu>
    </Header>
    <Content >
      <div className="site-layout-content" style={{padding:"5%"}}>
          {this.props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>@CRUD OPERATIONS BY MUHAMMAD SULEMAN</Footer>
  </Layout>

);
}
}
export default CustomLayout;