const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();

const token = 'Preencha com o token do seu servidor';

bot.login(token)

bot.on('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.content.includes('programação')) {
        let schedule = JSON.parse(fs.readFileSync('schedule.json'));

        schedule.forEach(sch => {
          var data = new Date();
          var dia = String(data.getDate()).padStart(2, '0');
          var mes = String(data.getMonth() + 1).padStart(2, '0');
          var ano = data.getFullYear();
          dataAtual = dia + '/' + mes + '/' + ano;

          if(sch.date === dataAtual){
              msg.reply(JSON.stringify(sch.events))
          }
        });
    }
})