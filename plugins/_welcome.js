import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let img = imagen1
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = ` 《🌸》 𝙽𝚒𝚗𝚢𝚖🌸 \n—🍃̶᪶⃕⊹ ‧₊ 《•𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘/𝚊•》🍃\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n—🍃̶᪶⃕⊹ ‧₊ 《•𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘/𝚊•》🍃\n「 ${groupMetadata.subject} 」\n\n  𝐍𝐞𝐲𝐤𝐨𝐨𝐫🤍
await conn.sendLuffy(m.chat, packname, textbot, welcome, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = ` 《🌸》 𝙽𝚒𝚗𝚢𝚖🌸 \n「 Aԃισʂ 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Sҽ ϝυҽ 」\n「 Nυɳƈα ƚҽ ϙυιʂιɱσʂ αϙυι 」\n\n  ιαɳαʅҽʝαɳԃɾσσƙ15x`
await conn.sendLuffy(m.chat, packname, textbot, bye, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` 《🌸》 𝙽𝚒𝚗𝚢𝚖🌸 \n「 Aԃισʂ 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Sҽ ϝυҽ 」\n「 Nυɳƈα ƚҽ ϙυιʂιɱσʂ αϙυι 」\n\n  ιαɳαʅҽʝαɳԃɾσσƙ15x`
await conn.sendLuffy(m.chat, packname, textbot, kick, img, img, redes, fkontak)
}}
