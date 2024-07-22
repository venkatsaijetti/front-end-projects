window.addEventListener("load", checkInternetConnection);

function checkInternetConnection(){

    let statusText = document.getElementById("statusText");
    let ipAddress = document.getElementById("ipaddress");
    let networkStrength = document.getElementById("networkstrength");

    statusText.textContent = "Checking...";

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{

            ipAddress.textContent = data.ip;
            statusText.textContent = "Connected";

            let connection = navigator.connection;

            let networkStrengthValue = connection ? connection.downlink +' Mbps' : 'Unknown';
            networkStrength.textContent = networkStrengthValue;
        })
        .catch((error) => {
            statusText.textContent = "Error...";
            ipAddress.textContent = "-";
            networkStrength.textContent = "Unknown";
            console.error('Error fetching IP address: ', error);
        });
    }
    else{
        statusText.textContent = "Disconnected";
        ipAddress.textContent = "-";
        networkStrength.textContent = "-";
    }
}