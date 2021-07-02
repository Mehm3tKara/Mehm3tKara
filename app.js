var rpc = require("discord-rpc")
const client = new rpc.Client({
    transport: 'ipc'
})
client.on('ready', () => {
    console.log('İşlem Hazır')
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Patrons are waiting for you!",
            assets: {
                large_image: "large",
                large_text: "Seni Bekliyoruz"
            },
            buttons: [{
                label: "Discord!",
                url: "https://discord.gg/8mtxuBtcV7"
            }]
        }
    })
})
client.login({
    clientId: "860264359514603551"
}).catch(console.error);