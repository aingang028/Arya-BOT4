let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Ang
Script: @Nurotomo


*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @aingang028
➥ YouTube:
youtube.com/Aing-Ang

*Thanks To :*
Tuhan yang Maha Esa terutama
Nurotomo khususnya
dan semua creator creator bot lainya
(✿ ♡‿♡)

╔═══〘 DONASI 〙 ═
╠➥ SmartFren: 088235435804
╠➥ Tsel: 081357302007
╠➥ Indosat: 081515860089
╠➥ Three : 089508963104
╚═══〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

