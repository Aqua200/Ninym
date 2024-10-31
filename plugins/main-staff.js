let handler = async (m, { conn, command, usedPrefix }) => {
    let staff = `EQUIPO DE AYUDANTES DEL BOT
    🌸 *Bot:* ${botname}
    🌸 *Versión:* ${vs}
    🌸 *Libreria:* ${libreria + baileys}
    
    👑 *Pɾσριҽƚαɾισ:*
    
    • 
    ☁ *Rol:* 𝐍𝐞𝐲𝐤𝐨𝐨𝐫🤍
    ☁ *Número:* ${creador}
    ☁ *GitHub:* https://github.com/Aqua200
    

    await conn.sendFile(m.chat, icons, 'nino.jpg', staff.trim(), fkontak, true, {
    contextInfo: {
    'forwardingScore': 200,
    'isForwarded': false,
    externalAdReply: {
    showAdAttribution: true,
    renderLargerThumbnail: false,
    title: `👑 Developers 👑`,
    body: `🌙 STAFF DEL BOT`,
    mediaType: 1,
    sourceUrl: redes,
    thumbnailUrl: icono
    }}
    }, { mentions: m.sender })
    await m.react(emoji)
    
    }
    handler.help = ['staff']
    handler.command = ['colaboradores', 'staff']
    handler.register = true
    handler.tags = ['main']
    
    export default handler
