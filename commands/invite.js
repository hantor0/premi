const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite Me to your server"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const inviteRow = new discord.ActionRowBuilder().addComponents(
      new discord.ButtonBuilder()
        .setLabel("Premium")
        .setStyle(discord.ButtonStyle.Link)
        .setURL(
          "https://discord.gg/ks8sybC8vV"
        )
    );

    await interaction.reply({
      content: "Click to subscribe to the paid version",
      components: [inviteRow],
    });
  },
};
