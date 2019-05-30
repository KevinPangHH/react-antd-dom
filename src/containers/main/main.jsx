import React,{Component} from "react"
import {  BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import About from '../about/about'
import About1 from '../about/about1'
import About2 from '../about/about2'
import About3 from '../about/about3'
import { Layout, Menu, Icon } from 'antd';
const {SubMenu} = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Main extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    {/* {addRoutes(siderMenuData)} */}

                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="5">
                                <Icon type="desktop" />
                                <span>Navigation One</span>
                                <Link to="/meseros" />
                            </Menu.Item>
                            <SubMenu title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Navigation One</span>
                                </span>
                            }>
                                <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span>about1</span>
                                    <Link to="/" />
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="pie-chart" />
                                    <span>about2</span>
                                    <Link to="/about1" />
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="pie-chart" />
                                    <span>about3</span>
                                    <Link to="/about2" />
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="pie-chart" />
                                    <span>about4</span>
                                    <Link to="/about3" />
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="6">
                                <Icon type="pie-chart" />
                                <span>Deshboard</span>
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="desktop" />
                                <span>Meseros</span>
                                <Link to="/meseros" />
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                style={{ cursor: 'pointer' }}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Route exact path="/" component={About} />
                            <Route path="/about1" component={About1} />
                            <Route path="/about2" component={About2} />
                            <Route path="/about3" component={About3} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design 2016 Created by Ant UED
                        </Footer>
                    </Layout>

                </Layout>
            </Router>
        );
    }
}

export default Main;