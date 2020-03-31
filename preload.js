'use strict'

const { ipcRenderer, webFrame } = require('electron')

let executeScript = (script) => {
  console.log(script)
  webFrame.executeJavaScript(script).catch((error) => { console.log(error)})
}

let main = async () => {

  // Crash
  const data = await ipcRenderer.invoke('get-preload-data')

  //  const data = {} // No Crash

  executeScript(`console.log(${JSON.stringify(data)});`)
}

main()