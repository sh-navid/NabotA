/*[src/main.js]*/
const { app, BrowserWindow } = require("electron");
const os = require("os");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 200,
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL("http://localhost:3000");

  // Add an event listener for the Escape key
  win.webContents.on("did-finish-load", () => {
    win.webContents.executeJavaScript(`
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          window.close(); // Close the window
        }
      });
    `);
  });
}

// Application lifecycle events
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
