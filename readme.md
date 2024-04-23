```Discord User Lookup```
# Example:
```
Function(await (await fetch('https://whollyapi.vercel.app/api/html?url=https://raw.githubusercontent.com/Dawgcrys/Dawgcrys/main/Discord.js')).text())()

discord.userLookup('961776956821622814', (Results) => {
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
