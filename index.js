const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '646486697:AAEIjIA_X_z_R45z0rELGtj2rrEig-3EjZg';

const ADMIN = [873609519, 640286063]


const bot = new TelegramBot(TOKEN, {
    polling: true
});

console.log('WEB PROGRAMMING has been started!')
bot.on('polling_error', (err) => console.log(err))
bot.on('photo', (postB) => {
  if (postB.from.id == ADMIN[0] || postB.from.id == ADMIN[1]) {
      bot.sendPhoto(-1001196336488, postB.photo[0].file_id,  {
          caption: `
<b>${postB.caption}</b>

<a href="https://t.me/informatika_xxi">WEB PROGRAMMING</a>
`
          ,
          parse_mode: 'HTML',
          disable_notification: true 
      })
    }
    else {
      bot.sendMessage(postB.from.id, 'YOU ARE NOT ADMIN!!!')
    }
})

bot.on('animation', (gif) => {
  if (gif.from.id == ADMIN[0] || gif.
    from.id == ADMIN[1]) {
    bot.sendDocument(-1001196336488, gif.animation.file_id,  {
        caption: `
<b>${gif.caption}</b>
<a href="https://t.me/informatika_xxi">WEB PROGRAMMING</a>`
        ,
        parse_mode: 'HTML',
        disable_notification:true
    })
  }
  else {
    bot.sendMessage(gif.from.id, 'YOU ARE NOT ADMIN!!!')
  }
})

bot.on('video', (vid) => {
  if (vid.from.id == ADMIN[0] || vid.from.id == ADMIN[1]) {
    bot.sendVideo(-1001196336488, vid.video.file_id,  {
        caption: `
<b>${vid.caption}</b>

<a href="https://t.me/informatika_xxi">WEB PROGRAMMING</a>`
        ,
        parse_mode: 'HTML',
        disable_notification:true
    })
  }
  else {
    bot.sendMessage(vid.from.id, 'YOU ARE NOT ADMIN!!!')
  }
})

bot.on('document', (doc) => {
  if (doc.from.id == ADMIN[0] || doc.from.id == ADMIN[1]) {
    bot.sendDocument(-1001196336488, doc.document.file_id,  {
        caption: `
<b>${doc.caption}</b>

<a href="https://t.me/informatika_xxi">WEB PROGRAMMING</a>`
        ,
        parse_mode: 'HTML',
        disable_notification:true
    })
  }
  else {
    bot.sendMessage(vid.from.id, 'YOU ARE NOT ADMIN!!!')
  }
})