let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 5000
    m.reply('+5000 XP Masih kurang? Beli premium ngab!')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Kan udah di claim, Kamu lupa yah?(✿^‿^)')
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

