let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin','Coba tanyakan pada bapakmu','Hmmm ssngat sulit untuk di jawab',', Tanya bapakau lah','coba tanya sama bapaku','PASTI','gtw males pengen beli treuk','Tanya ke Tuhan Yesus ya nak, saya lagi pusing','Tidak Mungkin (jangan percaya gw, musrik lu)'])}
`.trim(), m)
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = true
handler.private = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

