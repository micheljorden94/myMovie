import React, {Component} from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';

class Movie extends Component{


  render() {
    const { Content, Sider } = Layout;
    console.log(this.props)
    return (
      <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[this.props.location.pathname.split('/')[2]]}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="in_theaters">
            <Link to='/movie/in_theaters/1'>正在热映</Link>
          </Menu.Item>
          <Menu.Item key="coming_soon">
            <Link to='/movie/coming_soon/1'>即将上映</Link>
          </Menu.Item>
          <Menu.Item key="top250">
            <Link to='/movie/top250/1'>Top250</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ paddingLeft: '1px' }}>
        <Content
          style={{
            background: '#fff',
            padding: 10,
            margin: 0,
            minHeight: 280,
          }}
        >
        <Switch>
          <Route path='/movie/detail/:id' exact component={MovieDetail}></Route>
          <Route path='/movie/:type/:page' exact component={MovieList}></Route>
        </Switch>
        </Content>
      </Layout>
    </Layout>
    )
  }
}

export default Movie;