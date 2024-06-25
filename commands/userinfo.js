const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Get a brief info about a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("Select a user").setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let user = interaction.options.getUser("user");

    const userinfoEmbed = new discord.EmbedBuilder()
      .setColor("#e7ad19")
      .setThumbnail(user.displayAvatarURL())
      .setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
      })
      .addFields(
        {
          name: "Account Created At",
          value: `${user.createdAt.toLocaleString()}`,
          inline: true,
        },
        {
          name: "Joined Server At",
          value: `${interaction.guild.joinedAt.toLocaleString()}`,
          inline: true,
        }
      )

    await interaction.reply({
      embeds: [userinfoEmbed],
    });
  },
};
