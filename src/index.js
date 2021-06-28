import React from 'react';
import ReactDOM from 'react-dom';


/*

// 需要导入 antd 的一套东西 

import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';

ReactDOM.render(<ConfigProvider locale={zhCN}> ... </ConfigProvider>,container)
*/



// 导入组件
import Test from './pages/Test'

// 导入公共样式
import './assets/reset.min.css';
import './assets/common.less'

ReactDOM.render(<Test>
  hello
</Test>, document.getElementById('root'))