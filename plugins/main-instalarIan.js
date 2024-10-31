
var handler  = async (m, { conn }) => {

let texto = ` *Instalación de Ninym🌸*

⬡ Dudas: ${creador}
⬡ Tutoríal: *¡Pronto!*

*Comandos de instalación via Termux ✏️*

termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn

git clone https://github.com/Aqua200/Ninym.git && cd Ninmy && yarn install && npm install 

ls

npm start
