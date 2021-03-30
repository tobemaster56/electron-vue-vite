import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue'
// vite 会编译 import 的形式；所以 electron 及 node.js 内置模块用 require 形式
const { ipcRenderer } = require('electron')
import './index.css'

console.log('ipcRenderer:', ipcRenderer)

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app').$nextTick(window.ClosePreloadLoading)
