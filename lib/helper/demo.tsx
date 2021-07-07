import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import { CopyToClipboard } from 'react-copy-to-clipboard'

import './demo.scss'
interface Props {
  code: string;
  buttonVisible?: boolean;
  title?:string
}
import theme from 'prism-react-renderer/themes/github'


/**
 * @description 代码高亮 demo
 */
const Demo: React.FunctionComponent<Props> = props => {

  const codetxt = props.code

  const [isCodeCopy, setCodeCopy] = useState(false)

  const codeCopy = () => {
    setCodeCopy(!isCodeCopy)

    setTimeout(() => {
      setCodeCopy(false)
    }, 1000);
  }
  const { buttonVisible = true } = props;
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight {...defaultProps} code={props.code} language="tsx" theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
        // style={style}
        >
          {tokens.map((line, i) => (
            // tslint:disable-next-line: tsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // tslint:disable-next-line: tsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
  return (
    <div>
      <div className="content-style">
        <h3 className="content-title">{props.title}</h3>
        <div className="children">
          {props.children}
        </div>

        <div className='content-button'>

          <CopyToClipboard text={codetxt} onCopy={codeCopy}>

            {/* 选中就变成√，一秒后再变回去 */}
            <span onClick={codeCopy}>
              {
                isCodeCopy ? (
                  <i className='demo-icon demo-icon-copied' >
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M427.2128 661.1456l364.2368-380.5184a38.4 38.4 0 0 1 55.5008 53.1456l-392.0896 409.6a38.4 38.4 0 0 1-55.6032-0.1536l-222.3104-233.984a38.4 38.4 0 1 1 55.7056-52.9408l194.56 204.8512z" p-id="2387" fill="#187235">
                      </path></svg>
                  </i>
                ) : (
                  <i className='demo-icon demo-icon-copy' >
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="snippets" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z">
                      </path></svg>
                  </i>
                )
              }
            </span>
          </CopyToClipboard>

          <span onClick={() => setCodeVisible(!codeVisible)}>
            <i className='demo-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 368L32 256l128-112"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 368l128-112l-128-112"></path></svg>
            </i>
          </span>
        </div>
      </div>
      {buttonVisible && (
        <div className="code-style">
          {codeVisible && code}
        </div>
      )}
    </div>
  );
};


Demo.defaultProps={
  title:'基础用法'
}

export default Demo;
