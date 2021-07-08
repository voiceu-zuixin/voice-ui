import React from 'react'
import { Layout, Aside, Header, Content, Footer } from 'voice-ui'

export default function Demo() {
    return (
        <div>
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Aside>aside</Aside>
                    <Content>content</Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </div>
    )
}
