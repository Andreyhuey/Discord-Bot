import { SlashCommandBuilder } from "@discordjs/builders";

import { MessageEmbed } from "discord.js";

import { Command } from "../interfaces/Command"

import { getCamperData } from "../modules/getCamperData";

export const view: Command = {
    data: new SlashCommandBuilder()
    .setName("view")
    .setDescription("Shows your latest 100 Days of Code check in."),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    const targetCamper = await getCamperData(user.id);

    if (!targetCamper.day) {
      await interaction.editReply({
        content:
          "It looks like you have not started the 100 Days of Code challenge yet. Use `/100` and add your message to report your first day!",
      });
      return;
    }

    const camperEmbed = new MessageEmbed();
    camperEmbed.setTitle("My 100DoC Progress");
    camperEmbed.setDescription(
      `Here is my 100 Days of Code progress. I last reported an update on ${new Date(
        targetCamper.timestamp
      ).toLocaleDateString()}.`
    );
    camperEmbed.addField("Round", targetCamper.round.toString(), true);
    camperEmbed.addField("Day", targetCamper.day.toString(), true);
    camperEmbed.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });

    await interaction.editReply({ embeds: [camperEmbed] });
  },
}