const { contextBridge, ipcMain, app, BrowserWindow, dialog } = require('electron')

function createWindow () {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		minHeight:350,
		minWidth:400,
		icon:'icon.png',
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	})
	win.removeMenu();
	win.loadFile('index.html');
	win.on('close', async function(e){
		e.preventDefault();
		var choice = await dialog.showMessageBox(this, // nice
			{
			  type: 'question',
			  buttons: ['Quit', 'Stay'],
			  title: 'Wait!!',
			  message: 'Are you sure you want to quit? If VukkyBot is running, it will get stopped.',
			  icon: "resources/vukkycry.png"
		   });
		   if(choice.response == 0){
				var choice = await dialog.showMessageBox(this, // nice
					{
					type: 'question',
					buttons: ['Yes, I\'m sure.', 'No, I\'m not!'],
					title: 'Wait!!',
					message: 'If your bot is running, it WILL go offline. Are you sure?',
					icon: "resources/vukkydead.png"
				});
			 if(choice.response == 0) win.destroy();
		   }
	});
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})


ipcMain.handle('h', (event, h) => {
	console.log(h)
})