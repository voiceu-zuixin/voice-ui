# Voice UI

## 一套简洁的 PC 端 React UI库
<!-- [![CircleCI](https://circleci.com/gh/voiceu-zuixin/fun-ui-test/tree/main.svg?style=svg)](https://circleci.com/gh/voiceu-zuixin/fun-ui-test/tree/main) -->
![npm](https://img.shields.io/npm/v/voice-ui)
![NPM](https://img.shields.io/npm/l/voice-ui)

> 本组件库仅供学习交流，请勿在生产环境中使用

## 安装

```
$ npm install voice-ui
$ yarn add voice-ui
```

## 使用

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'voice-ui'

ReactDOM.render(
  <div>
    <Button>我是一个按钮</Button>
  </div>,
  mountNode
)
```


## 特别提醒

使用 Voice UI 时，需要使用 border-box 盒模型，否则会影响样式。代码示例：

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
