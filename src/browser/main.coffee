app = require('app')
BrowserWindow = require('browser-window')

require('crash-reporter').start()

mainWindow = null

app.on 'window-all-closed', ->
  if (process.platform != 'darwin')
    app.quit()

app.on 'ready', ->
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false
  })

  mainWindow.loadUrl('file://' + __dirname + '/../../static/index.html')

  mainWindow.on 'closed', ->
    mainWindow = null
