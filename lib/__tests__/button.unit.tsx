import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../tsx函数式的使用例子'

describe('button tests', () => {
    it('是个div', () => {
        // const tree = renderer
        //     .create(<Button icon="alipay"><span>Click Me</span></Button>)
        //     .toJSON()
        // expect(tree).toMatchSnapshot()
        const json = renderer.create(<Button message="messdiv"/>)
            .toJSON()

        expect(json).toMatchSnapshot()
    })
})