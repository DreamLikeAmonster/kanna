import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from "fs"
import { googleImage } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!text) return m.reply(`Example : ${usedPrefix + command} query`)
try {
if (command == 'image') {
    const res = await googleImage(text)
    await conn.sendButton(m.chat, `
*── 「 GOOGLE IMAGE 」 ──*

Result from *${text}*
`.trim(), wm, res.getRandom(), [
    ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
} catch {
throw eror
}

}
handler.command = handler.help = ['image']
handler.tags = ['random']

export default handler
