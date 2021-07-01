// 意思是，声明 所有的svg格式，类型都是any，因为ts就只认识那几种格式的文件
// 给svg文件加了一个默认导出，不然不能用import xx from './xxx.svg'
// 只能import './xxx.svg' ，有当做一个模块xx来使用的目的的时候，就需要有导出，但是svg文件没有，所以需要外部加上
declare module '*.svg' {
    const content: any
    export default content
}