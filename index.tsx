import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import IconDemo from './lib/icon/icon.demo'
import ButtonDemo from './lib/button/button-example/button.demo'
import FormDemo from './lib/form/demo/form.demo'
import InputDemo from './lib/input/input-example/input.demo'
import SwitchDemo from './lib/switch/switch-example/switch.demo'
import ModalDemo from './lib/modal/modal-example/modal.demo'
import LayoutDemo from './lib/layout/layout-example/layout.demo'
import { Layout, Aside, Header, Content, Footer, Icon } from './lib/index'
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
                <a href="https://github.com/voiceu-zuixin/voice-ui" target='_blank' className="site-header-left">
                    <div className="site-header-left-icon">
                        <Icon name='github' />
                    </div>
                    <div className="site-header-left-text">
                        github
                    </div>
                    <div className="site-header-left-text">
                        v&nbsp;0.1.1
                    </div>
                </a>
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


                    <h2 className="site-aside-title" style={{ color: 'black' }}>其他个人项目</h2>
                    <ul>
                        <li>
                            {/* <NavLink to="/Acoustica-mixer">Acoustica mixer</NavLink> */}
                            <a href="https://voiceu-zuixin.github.io/Acoustica-mixer/" target='_blank'>
                                Acoustica mixer
                            </a>
                        </li>
                        <li>
                            <NavLink to="/management-system">电商后台管理系统</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume">resume(算简历，还不算项目)</NavLink>
                        </li>
                        <li>
                            <a href="https://blog.csdn.net/Voiceu?spm=1000.2115.3001.5343&type=lately" target='_blank'>
                                技术博客
                            </a>
                        </li>
                    </ul>
                </Aside>

                <Content className="site-main">
                    <Switch>
                        <Route path="/icon" component={IconDemo}></Route>
                        <Route path="/button" component={ButtonDemo}></Route>
                        <Route path="/modal" component={ModalDemo}></Route>
                        <Route path="/layout" component={LayoutDemo}></Route>
                        <Route path="/switch" component={SwitchDemo}></Route>
                        <Route path="/input" component={InputDemo}></Route>
                        <Route path="/form" component={FormDemo}></Route>
                        <Route path="/introduction" component={Introduction}></Route>
                        <Route path="/" component={Introduction}></Route>
                        <Redirect to='/introduction' />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
        <Footer className="site-footer">
            footer
        </Footer>

    </Router>
    , document.querySelector('#root'));