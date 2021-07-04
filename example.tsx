import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/icon/button.example'
import ModalExample from './lib/modal/modal.example'

ReactDOM.render(
    <Router>

        <div>
            <header>
                <div className="logo">
                    Fun-ui
                </div>
            </header>

            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/modal">Modal</Link>
                        </li>
                    </ul>
                </aside>
            </div>


            <main>
                <Route path="/icon" component={IconExample}></Route>
                <Route path="/button" component={ButtonExample}></Route>
                <Route path="/modal" component={ModalExample}></Route>
            </main>
        </div>
    </Router>

    , document.querySelector('#root'));