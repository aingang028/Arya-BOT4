let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
QUR'AN BOT:
Via Copas {SEBARKAN}

┏━━⊱ 🧚🏿‍♂️❰ QUR'AN BOT* ❱ 🧚🏿‍♂️⊰━━☬
┣𖥻ꦼꦽ➳Juz 1 ⇨ http://j.mp/2b8SiNO
┣𖥻ꦼꦽ➳Juz 2 ⇨ http://j.mp/2b8RJmQ
┣𖥻ꦼꦽ➳Juz 3 ⇨ http://j.mp/2bFSrtF
┣𖥻ꦼꦽ➳Juz 4 ⇨ http://j.mp/2b8SXi3
┣𖥻ꦼꦽ➳Juz 5 ⇨ http://j.mp/2b8RZm3
┣𖥻ꦼꦽ➳Juz 6 ⇨ http://j.mp/28MBohs
┣𖥻ꦼꦽ➳Juz 7 ⇨ http://j.mp/2bFRIZC
┣𖥻ꦼꦽ➳Juz 8 ⇨ http://j.mp/2bufF7o
┣𖥻ꦼꦽ➳Juz 9 ⇨ http://j.mp/2byr1bu
┣𖥻ꦼꦽ➳Juz 10 ⇨ http://j.mp/2bHfyUH
┣𖥻ꦼꦽ➳Juz 11 ⇨ http://j.mp/2bHf80y
┣𖥻ꦼꦽ➳Juz 12 ⇨ http://j.mp/2bWnTby
┣𖥻ꦼꦽ➳Juz 13 ⇨ http://j.mp/2bFTiKQ
┣𖥻ꦼꦽ➳Juz 14 ⇨ http://j.mp/2b8SUTA
┣𖥻ꦼꦽ➳Juz 15 ⇨ http://j.mp/2bFRQIM
┣𖥻ꦼꦽ➳Juz 16 ⇨ http://j.mp/2b8SegG
┣𖥻ꦼꦽ➳Juz 17 ⇨ http://j.mp/2brHsFz
┣𖥻ꦼꦽ➳Juz 18 ⇨ http://j.mp/2b8SCfc
┣𖥻ꦼꦽ➳Juz 19 ⇨ http://j.mp/2bFSq95
┣𖥻ꦼꦽ➳Juz 20 ⇨ http://j.mp/2brI1zc
┣𖥻ꦼꦽ➳Juz 21 ⇨ http://j.mp/2b8VcBO
┣𖥻ꦼꦽ➳Juz 22 ⇨ http://j.mp/2bFRxNP
┣𖥻ꦼꦽ➳Juz 23 ⇨ http://j.mp/2brItxm
┣𖥻ꦼꦽ➳Juz 24 ⇨ http://j.mp/2brHKw5
┣𖥻ꦼꦽ➳Juz 25 ⇨ http://j.mp/2brImlf
┣𖥻ꦼꦽ➳Juz 26 ⇨ http://j.mp/2bFRHF2
┣𖥻ꦼꦽ➳Juz 27 ⇨ http://j.mp/2bFRXno
┣𖥻ꦼꦽ➳Juz 28 ⇨ http://j.mp/2brI3ai
┣𖥻ꦼꦽ➳Juz 29 ⇨ http://j.mp/2bFRyBF
┣𖥻ꦼꦽ➳Juz 30 ⇨ http://j.mp/2bFREcc
┗━━━━━━━━━━━━━━☬
`.trim(), m)
}
handler.help = ['murothal']
handler.tags = ['quotes']
handler.command = /^(murothal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

