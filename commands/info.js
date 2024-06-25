const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("info")
    .setDescription("Get some basic information about me"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const infoEmbed = new discord.EmbedBuilder()
      .setColor("#e7ad19")
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle("ProteUs Premium")
      .setDescription("Here's some basic information about myself")
      .addFields(
        {
          name: "My Prefix",
          value: "/ (Slash Commands)",
          inline: false,
        },
        {
          name: "My Developers",
          value: "<@733750321997807757>\n<@767484682769399878>",
          inline: false,
        }
      )
      .setFooter({
        text: "Invite me to your server by using the /invite command",
      });

    const inviteButton = new discord.ButtonBuilder()
      .setLabel("Premium")
      .setStyle(discord.ButtonStyle.Link)
      .setURL(
        "https://discord.gg/ks8sybC8vV"
      );

    const voteButton = new discord.ButtonBuilder()
      .setLabel("Vote top.gg")
      .setStyle(discord.ButtonStyle.Link)
      .setURL("https://top.gg/bot/986575112356630548/vote");

    const supportButton = new discord.ButtonBuilder()
      .setLabel("Support Server")
      .setStyle(discord.ButtonStyle.Link)
      .setURL("https://discord.gg/ks8sybC8vV");

    const buttonRow = new discord.ActionRowBuilder().addComponents(
      inviteButton,
      voteButton,
      supportButton
    );

    await interaction.reply({
      embeds: [infoEmbed],
      components: [buttonRow],
    });
  },
};
