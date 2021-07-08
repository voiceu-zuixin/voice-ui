import React from 'react';
import ReactDOM from 'react-dom';
import './example.scss'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
// import IconExample from './lib/icon/icon.example'
import IconDemo from './lib/icon/icon.demo'
// import ButtonExample from './lib/icon/button.example'
import ButtonDemo from './lib/button/button-example/button.demo'
import FormDemo from './lib/form/demo/form.demo'
import InputDemo from './lib/input/input-example/input.demo'
// import SwitchExample from './lib/switch/switch.example'
import SwitchDemo from './lib/switch/switch-example/switch.demo'

// import ModalExample from './lib/modal/modal-example/modal.example.1'
import ModalDemo from './lib/modal/modal-example/modal.demo'
import LayoutDemo from './lib/layout/layout-example/layout.demo'
import { Layout, Aside, Header, Content, Footer } from './lib/layout/layout'
const logo = require('./logo.png')

ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src={logo.default} width="48" height="48" alt="" />

                    <span>Voice ui</span>
                </div>
            </Header>

            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/button">按钮 Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/icon">图标 Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/modal">模态框 Modal</NavLink>
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
                </Content>
            </Layout>
        </Layout>
        <Footer className="site-footer">
            footer
        </Footer>

    </Router>
    , document.querySelector('#root'));