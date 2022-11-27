const path = require('path')
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

const isDev = process.env.NODE_ENV !== 'development'

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'VESOVAYA',
        width: isDev ? 1500 : 800,
        heigth: 600
    });

    if(isDev) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}



app.whenReady().then( () => {

    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)


    createMainWindow()
})