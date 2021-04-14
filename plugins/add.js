let handler = async (m, { conn, text }) => {
  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  await conn.groupAdd(m.chat, users)
}
handler.help = ['add', '+'].map(v => v + ' nomor,nomor')
handler.tags = ['admin']
handler.command = /^(add|\+)$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

