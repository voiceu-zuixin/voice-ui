// const enzyme = require('enzyme')
// const Adapter = require('enzyme-adapter-react-16')

// enzyme.configure({adapter: new Adapter()})

// react17的配置
// 这个包也行，不过留一个用的多的就行了
// const Adapter = require('enzyme-adapter-react-17-updated')
const enzyme = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

enzyme.configure({ adapter: new Adapter() });