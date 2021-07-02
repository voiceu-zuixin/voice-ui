import classes from '../classes'

// 描述 name ，it是一个什么 ,expect得到一个什么结果
describe('classes', () => {
    it('接受一个className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
})