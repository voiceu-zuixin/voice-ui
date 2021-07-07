import React from 'react'
import Button from '../button'
import './button.example.scss'

const ButtonExample2: React.FunctionComponent = () => {
	return (
		// 这个的高度有点问题，来个内联卡住
		<div style={{ height: '32px' }}>
			<span style={{ marginRight: '10px' }}>
				<Button icon="alipay">没钱了</Button>
			</span>
			<span style={{ marginRight: '10px' }}>
				<Button icon="wechat">余额为 0</Button>
			</span>
			<span style={{ marginRight: '10px' }}>
				<a href="https://blog.csdn.net/Voiceu?spm=1000.2115.3001.5343&type=blog" target="_blank"  >
					<Button icon="csdn">康康我的博客，夹带私货</Button>
				</a>
			</span>
		</div>
	)
}

export default ButtonExample2

