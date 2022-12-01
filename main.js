// const path = require('path')
// const {app, BrowserWindow, Menu} = require('electron')

// const menu = [
//     {
//         label:'Меню',
//         submenu: [
//             {
//                 label: 'Выйти',
//                 click: () => app.quit(),
//                 accelerator : 'Ctrl+k'
//             }
//         ]
//     }
// ]

// const isDev = process.env.NODE_ENV !== 'development'

// function createMainWindow(){
//     const mainWindow = new BrowserWindow({
//         title: 'VESOVAYA',
//         width: isDev ? 700 : 800,
//         heigth: 600
//     });

//     if(isDev) {
//         mainWindow.webContents.openDevTools()
//     }

//     //mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
//     mainWindow.loadURL("http://localhost:3000/")
// }


const {app, BrowserWindow, Menu} = require('electron')

const menu = [
    {
        label:'Меню',
        submenu: [
            {
                label: 'Выйти',
                click: () => app.quit(),
                accelerator : 'Ctrl+k'
            }
        ]
    }
]


function createMainWindow () {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      webPreferences: {
        //enableRemoteMode: true,
        nodeIntegration: true,
        devTools: false,
      },
    });
   
    //win.loadFile('src/build/index.html');
    win.loadURL("http://localhost:3000/")
    //await win.loadFile(path.join(__dirname, './src/build/index.html'));
    

  //   win.webContents.openDevTools()
  
  // //set up the express server into the same main.js file //
  // const expApp = require("express");
  // const path = require("path");
  
  // expApp.use(express.static(path.join(__dirname, "./src/build")));
  // expApp.get("/", function (req, res) {
  //   res.send(path.join(__dirname, "./src/build", "index.html"));
  // });
  
  // expApp.listen(3000, () => {
  //   console.log("Server runing at Port: 3001");
  // })

}

  app.whenReady().then( () => {

    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)

    
    createMainWindow()
})