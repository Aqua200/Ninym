
var handler  = async (m, { conn }) => {

let texto = `🚩 *Instalación de IanBot*

⬡ Dudas: ${creador}
⬡ Tutoríal: *¡Pronto!*

*Comandos de instalación via Termux ✏️*

termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn

git clone https://github.com/ianalejandrook15x/ianxdd && cd ianxdd && yarn install && npm install 

ls

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 🚩_

_Utilice "infinity" para enviarle la instalación por el host *Infinity* 🚩_`

conn.reply(m.chat, texto, m, rcanal )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt-get update -y && apt-get upgrade -y')
await delay(1000 * 1)
m.reply('pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn')
await delay(1000 * 1)
m.reply('git clone https://github.com/ianalejandrook15x/ianxdd && cd ianxdd && yarn install && npm install ')
await delay(1000 * 1)
m.reply('ls')
await delay(1000 * 1)
m.reply('npm start')
}

if (/^cafirexos$/i.test(m.text) ) {
conn.reply(m.chat, '✏️ *Instalación por Cafirexos*\n(nosotros no tenemos tutorial pero eso les puede ayudar)\n\n• Estados de nuestro Servicios:\nhttps://status.infinitywa-host.com/\n\n• Panel:\nhttps://panel.infinitywa-host.com', m, rcanal)
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://rare-gallery.com/mocahbig/62122-Nino-NakanoNino-Nakano.png'}, caption: ''}, {quoted: fkontak})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://wallpapers.com/images/hd/happy-anime-girl-nino-nakano-gbjjgmd929mudx0b.jpg'}, caption: ''}, {quoted: fkontak})
}
}

}
handler.help = ['instalarian']
handler.tags = ['main']
handler.command = /^(instalarian|instalarbot)/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
