import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../btn测试用例'

describe('button tests', () => {
    it('是个div', () => {
        
        const json = renderer.create(<Button message="messdiv"/>)
            .toJSON()
        expect(json).toMatchSnapshot()
    })
})