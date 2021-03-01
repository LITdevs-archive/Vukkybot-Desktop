const { ipcRenderer } = require('electron')

function startButton() {
    //ipcRenderer.invoke('h', "h");
    if (document.getElementById("mainButton").src == document.getElementById("pathButton").src) {
        document.getElementById("mainButton").src = "resources/stop.png"
    } else {
        document.getElementById("mainButton").src = "resources/start.png" 
        
    }
}

function showTab(tab) {
    document.getElementById("home").style.display = "none";
    document.getElementById("config").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("logs").style.display = "none";

    document.getElementById(tab).style.display = "block";
}