import electronDebug from 'electron-debug'
import * as electronDevtoolsInstaller from 'electron-devtools-installer'

// 开启调试控制台
// Enable the debug console
electronDebug({
  showDevTools: true,
  devToolsMode: 'right'
})

// Install `vue-devtools`
import * as electron from 'electron'
electron.app.on('ready', () => {
  electronDevtoolsInstaller.default(electronDevtoolsInstaller.VUEJS_DEVTOOLS)
    .then(() => {
      console.log('Success to install the vue-devtools')
    })
    .catch((err: any) => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })
})

// 导入主进程启动应用
// Require `main` process to boot app
import './index'