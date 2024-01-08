const {
    app,
    BrowserWindow,
    ipcMain,
    nativeTheme
} = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

// lock one instance
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', (event, commandLine, workingDirectory, additionalData) => {
        // Print out data received from the second instance.
        console.log(additionalData)

        // Someone tried to run a second instance, we should focus our window.
        if (myWindow) {
            if (myWindow.isMinimized()) myWindow.restore()
            myWindow.focus()
        }
    });

    // Create myWindow, load the rest of the app, etc...
    const createWindow = () => {
        // Create the browser window.
        const mainWindow = new BrowserWindow({
            width: 1000,
            height: 800,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                devTools: false
            },
            icon: 'img/icon.ico',
        });
        // mainWindow.openDevTools();
        nativeTheme.themeSource = 'dark';
        mainWindow.setMenuBarVisibility(false);
        // and load the index.html of the app.
        mainWindow.loadFile(path.join(__dirname, 'html/index.html'));

    };

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.

    app.whenReady().then(() => {
        myWindow = createWindow()
    })

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    // In this file you can include the rest of your app's specific main process
    // code. You can also put them in separate files and import them here.

}