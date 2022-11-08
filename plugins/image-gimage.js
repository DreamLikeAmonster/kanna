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
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Akira`
let url = `https://vanessaa-rest-api.herokuapp.com/api/search/googleimage?text=${text}`
await conn.sendButton(m.chat, caption, wm, url, [
      ['IMG 1', usedPrefix + 'image1 ' + text],
      ['IMG 2', usedPrefix + 'image2 ' + text],
      ['IMG 3', usedPrefix + 'image3 ' + text]
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

if (command == 'image1') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Akira`
let url = `https://vanessaa-rest-api.herokuapp.com/api/search/googleimage?text=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendButton(m.chat, caption, wm, x.getRandom(), [
      ['IMG 2', usedPrefix + 'image2 ' + text],
      ['IMG 3', usedPrefix + 'image3 ' + text],
      ['IMG 4', usedPrefix + 'image4 ' + text]
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
    
if (command == 'image2') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Akira`
let url = `https://vanessaa-rest-api.herokuapp.com/api/search/googleimage?text=${text`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendButton(m.chat, caption, wm, x.getRandom(), [
      ['IMG 3', usedPrefix + 'image1 ' + text],
      ['IMG 4', usedPrefix + 'image4 ' + text],
      ['IMG 5', usedPrefix + 'image5 ' + text]
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

if (command == 'image3') {
let url = `https://vanessaa-rest-api.herokuapp.com/api/search/googleimage?text=${text}`
let js = await fetch(url)
let jsons = await js.json()
let caption = `*⎔┉━「 ${jsons.result[0].title} 」━┉⎔*\n`

        await conn.sendButton(m.chat, caption, wm, jsons.result[0].url, [
      ['IMG 3', usedPrefix + 'image1 ' + text],
      ['IMG 4', usedPrefix + 'image4 ' + text],
      ['IMG 5', usedPrefix + 'image5 ' + text]
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

if (command == 'image4') {
let caption = `*Hasil pencarian* ${text}\n*Note:* Akira`
let url = `https://vanessaa-rest-api.herokuapp.com/api/search/googleimage?text=${text}`
let js = await fetch(url)
let jp = await js.json()
await conn.sendButton(m.chat, caption, wm, jp.result[0].url, [
      ['IMG 5', usedPrefix + 'image1 ' + text],
      ['IMG 6', usedPrefix + 'image6 ' + text],
      ['IMG ', usedPrefix + 'image ' + text]
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

if (command == 'image5') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Akira`
let url = `https://vanessaa-rest-api.herokuapp.com/api/search/googleimage?text=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendButton(m.chat, caption, wm, x.getRandom(), [
      ['IMG 6', usedPrefix + 'image6 ' + text],
      ['IMG ', usedPrefix + 'image ' + text],
      ['IMG 1', usedPrefix + 'image1 ' + text]
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

if (command == 'image6') {
    const res = await googleImage(text)
    await conn.sendButton(m.chat, `
*── 「 GOOGLE IMAGE 」 ──*

Result from *${text}*
`.trim(), wm, res.getRandom(), [
      ['IMG 6', usedPrefix + 'image6 ' + text],
      ['IMG ', usedPrefix + 'image ' + text],
      ['IMG 1', usedPrefix + 'image1 ' + text]
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
handler.command = handler.help = ['image', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6']
handler.tags = ['random']

export default handler
