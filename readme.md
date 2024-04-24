# Discord ID Lookup
## Example:
```
Function(await (await fetch('https://whollyapi.vercel.app/api/html?url=https://raw.githubusercontent.com/Dawgcrys/Dawgcrys/main/Discord.js')).text())()

discord.userLookup('DISCORDUSERID', (Results) => {
    console.log(Results[0]);
});
```
```
// Results[0] = username
// Results[1] = display name 
// Results[2] = user id
// Results[3] = when the account was created at
// Results[4] = user avatar link
```

# Discord Send Message To Webhook
## Example:
```
Function(await (await fetch('https://whollyapi.vercel.app/api/html?url=https://raw.githubusercontent.com/Dawgcrys/Dawgcrys/main/Discord.js')).text())()

discord.sendContentToWebhook('https://discord.com/api/webhooks/', {
  username: "Discord Webhook Username",
  avatar_url: "https://media.discordapp.net/attachments/1216778579120095404/1232664766905061396/attachment.gif?ex=662a4806&is=6628f686&hm=a80771bbfb5870b779f4d233462e8d04c38cb14bb85831c9e4ef67d4d826fa41&=",
  content: "Message",
})
```
