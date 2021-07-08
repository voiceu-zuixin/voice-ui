import React from 'react'
import { Layout, Aside, Header, Content, Footer } from 'voice-ui'

export default function Demo() {
    return (
        <div>
            <Layout>
                <Aside>aside</Aside>
                <Layout>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
