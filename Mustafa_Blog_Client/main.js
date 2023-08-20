//import libraries
const electron = require("electron");
const url = require("url");
const path = require("path");
const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

//start application
app.on('ready', () => {
    //create window and set attributes
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        title: "Mustafa Blog Client",
        icon: path.join(__dirname, "assets","icons","mustafa_blog_icon.jpg"), 
        webPreferences: {
          nodeIntegration: false, // To disable Node.js integration in the renderer process
          contextIsolation: true, // To protect against cross-site scripting (XSS)
        },
      });
      
      //render Mustafa Blog Website
      mainWindow.loadURL('https://mustafablog.net/');
      
      Menu.setApplicationMenu(null);
      
      //Set closing attributes
      mainWindow.on('closed', () => {
        mainWindow = null;
      });
});


//close all windows when parent window closed
app.on('window-all-closed', () => {
  //set specific attribute for macOS
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

//start created window (application exactly starts)
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
