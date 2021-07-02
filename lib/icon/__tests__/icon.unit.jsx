import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../icon'

describe('icon', () => {
    it('render successfully', () => {
        const json = renderer.create(<Icon name='alipay' />).toJSON()
        // 期望json符合快照
        expect(json).toMatchSnapshot()
    })
})