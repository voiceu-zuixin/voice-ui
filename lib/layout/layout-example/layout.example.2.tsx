import React from 'react'
import Layout from '../layout'
import Header from '../../header/header'
import Content from '../../content/content'
import Footer from '../../footer/footer'
import Aside from '../../aside/aside'
import './layout.example.scss'

export default function LayoutExample2() {
    return (
        <div>
            <Layout style={{ height: 200 }}  >
                <Header className='x'>header</Header>
                <Layout>
                    <Aside className='z'>aside</Aside>
                    <Content className='y'>content</Content>
                </Layout>
                <Footer className='x'>footer</Footer>
            </Layout>
        </div>
    )
}
