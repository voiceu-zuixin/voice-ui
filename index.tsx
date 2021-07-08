import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import IconDemo from './lib/icon/icon.demo'
import ButtonDemo from './lib/button/button-example/button.demo'
import FormDemo from './lib/form/demo/form.demo'
import InputDemo from './lib/input/input-example/input.demo'
import SwitchDemo from './lib/switch/switch-example/switch.demo'
import ModalDemo from './lib/modal/modal-example/modal.demo'
import LayoutDemo from './lib/layout/layout-example/layout.demo'
import { Layout, Aside, Header, Content, Footer } from './lib/layout/layout'
import './index.scss'
import Introduction from './webIntroduce/introduction'

const logo = require('./logo.png')

ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src={logo.default} width="48" height="48" alt="" />
                    <span>Voice UI</span>
                </div>
            </Header>

            <Layout>
                <Aside className="site-aside">
                    <h2 className="site-aside-title">介绍</h2>
                    <ul>
                        <li>
                            <NavLink to="/introduction">Voice UI</NavLink>
                        </li>
                    </ul>


                    <h2 className="site-aside-title">组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/button">按钮 Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/icon">图标 Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/modal">对话框 Modal</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">布局 Layout</NavLink>
                        </li>
                        <li>
                            <NavLink to="/switch">开关 Switch</NavLink>
                        </li>
                        <li>
                            <NavLink to="/input">输入框 Input</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">表单 Form</NavLink>
                        </li>
                    </ul>
                </Aside>

                <Content className="site-main">
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/button" component={ButtonDemo}></Route>
                    <Route path="/modal" component={ModalDemo}></Route>
                    <Route path="/layout" component={LayoutDemo}></Route>
                    <Route path="/switch" component={SwitchDemo}></Route>
                    <Route path="/input" component={InputDemo}></Route>
                    <Route path="/form" component={FormDemo}></Route>
                    <Route path="/introduction" component={Introduction}></Route>
                </Content>
            </Layout>
        </Layout>
        <Footer className="site-footer">
            footer
        </Footer>

    </Router>
    , document.querySelector('#root'));