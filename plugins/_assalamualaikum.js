import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` đ *Wa'alaikumsalam*`
await conn.send2ButtonDoc(m.chat, `${htki} á´ s á´ Ę s ${htka}`, info, 'âšī¸ Sapa', '.tts id Waalaikumsalam', 'âšī¸ Menu', '.menu', fakes, adReply)
await conn.sendMessage(m.chat, {
          react: {
            text: 'đ',
            key: m.key,
          }})
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler