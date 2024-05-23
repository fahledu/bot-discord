module.exports = {
    name: 'interactionCreate',
    once: true,
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            // const { commandName } = interaction;
            // const { command } = commands.get(commandName);
            const command = commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client)
            } catch (error) {
                console.error(error)
                await interaction.reply({
                    content: `Someting went wrong while executin this command...`,
                    ephemeral: true
                })
            }
        }

    }
}