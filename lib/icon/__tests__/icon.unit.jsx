import 'jsdom-global/register'
import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../icon'
import {mount} from 'enzyme'


describe('icon', () => {
    it('render successfully', () => {
        const json = renderer.create(<Icon name='alipay' />).toJSON()
        // 期望json符合快照
        expect(json).toMatchSnapshot()
    })
    it('onClick',()=>{
        const fn = jest.fn()
        // let n = 1
        // const fn = ()=>{
        //     n=2
        // }
        const component = mount(<Icon name='alipay' onClick={fn}/>)
        component.find('svg').simulate('click')
        // expect(n).toEqual(2)
        expect(fn).toBeCalled()
    })
})