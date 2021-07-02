import classes from '../classes'

// 描述 name ，it是一个什么 ,expect得到一个什么结果
describe('classes', () => {
    it('接受1 个className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受2 个className', () => {
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })
    it('接受undefined，结果不会出现undefinded', () => {
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('接受各种奇怪的值', () => {
        const result = classes(
            'a', undefined, '中文', false, null
        )
        expect(result).toEqual('a 中文')
    })
    it('接受0 个参数', () => {
        const result = classes()
        expect(result).toEqual('')
    })
})