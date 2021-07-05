import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
// import IconExample from './lib/icon/icon.example'
import IconDemo from './lib/icon/icon.demo'
import ButtonExample from './lib/icon/button.example'
import ModalExample from './lib/modal/modal.example'
import LayoutExample from './lib/layout/layout.example'
import { Layout, Aside, Header, Content, Footer } from './lib/layout/layout'
import './example.scss'
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
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/modal">Modal</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout</NavLink>
                        </li>
                    </ul>
                </Aside>

                <Content className="site-main">
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/modal" component={ModalExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </Content>
            </Layout>
        </Layout>
        <Footer className="site-footer">
            footer
        </Footer>

    </Router>
    , document.querySelector('#root'));