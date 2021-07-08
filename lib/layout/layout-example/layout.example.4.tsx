import React from 'react'
import Layout from '../layout'
import Header from '../../header/header'
import Content from '../../content/content'
import Footer from '../../footer/footer'
import Aside from '../../aside/aside'
import './layout.example.scss'

export default function LayoutExample4() {
    return (
        <div>
            <Layout style={{ height: 200 }}  >
                <Aside className='z'>aside</Aside>
                <Layout>
                    <Header className='x'>header</Header>
                    <Content className='y'>content</Content>
                    <Footer className='x'>footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
