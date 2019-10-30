import React, { Component, Fragment } from 'react';
import { Layout, Menu } from 'antd';
import Home from './components/home/Home'; 
import Movie from './components/movie/Movie'; 
import About from './components/about/About'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


class App extends Component{

  render() {
    const { Header, Content } = Layout;
    return (
      <Router>
        <Fragment>
        <Layout className="layout" style={{height: '100%'}}>
            <Header>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[window.location.pathname.split('/')[1]]}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="home">
                  <Link to='/home'>首页</Link>
                </Menu.Item>
                <Menu.Item key="movie">
                  <Link to='/movie/in_theaters/1'>电影</Link>
                </Menu.Item>
                <Menu.Item key="about">
                  <Link to='/about'>关于</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{backgroundColor: '#fff', flex: 1 }}>
              <Route path='/home' component={Home}></Route>
              <Route path='/movie' component={Movie}></Route>
              <Route path='/about' component={About}></Route>
            </Content>
          </Layout>
        </Fragment>
      </Router>
    );
  }
}

export default App;
