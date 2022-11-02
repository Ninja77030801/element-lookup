const { app, BrowserWindow } = require("electron")

function createWindow() {
  var window = new BrowserWindow({
    width: 800,
    height: 600,
  })
  window.loadFile('dist/index.html')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
