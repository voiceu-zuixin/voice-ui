import React from 'react'
import { Layout, Aside, Header, Content, Footer } from 'voice-ui'

export default function Demo() {
    return (
        <div>
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Content>content</Content>
                    <Aside>aside</Aside>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </div>
    )
}
