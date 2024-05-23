module.exports = (client) => {
    client.sendHourlyMessage = () => {
        const channelId = '1242935516819755102'; // Replace with your channel ID => change to external to avoid duplicated data
        const messageContent = 'This is an hourly message!';

        const sendMessage = () => {
            const channel = client.channels.cache.get(channelId);
            if (channel) {
                channel.send(messageContent).catch(console.error);
            } else {
                console.error(`Channel with ID ${channelId} not found`);
            }
        };

        sendMessage(); 
        setInterval(sendMessage, 3600000); 
    };
};
