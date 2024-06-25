const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageActionRow,MessageEmbed, MessageAttachment, MessageSelectMenu, MessageButton, WebhookClient, Client, Collection, Discord, Util } = require('discord.js');
const db = require('pro.db');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("tax")
    .setDescription("Show Tax calculation")
    .addStringOption(option => option.setName('number').setDescription(`The number to show it's tax`)),

    async execute(client, interaction){
const args = interaction.options.getString('number')
let args2 = args.replace("k","000").replace("m","000000").replace('M',"000000").replace('K',"000").replace('b',"000000000000").replace('B',"000000000000")
let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (20) )  
      if (isNaN(args2)) return interaction.reply({content:`> ** The Value Must Be Number**`})
      interaction.reply({content:` **- <:discotoolsxyzicon20240625T031226:1254982601941323836> The value without tax : ${args}
- <:discotoolsxyzicon20240625T025054:1254977163946627082> The tax : ${tax3}
- <:discotoolsxyzicon20240625T031238:1254982599282135131> The number with tax : ${tax} **`})

    }
}
