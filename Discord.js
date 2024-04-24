// Discord id lookup || send stuff to webhooks

class Discord {
    constructor(Args) {}

    async userLookup(Userid, Callback) {
        fetch(`https://discordlookup.mesavirep.xyz/v1/user/${Userid}`).then(Resp => Resp.json()).then(Fetched => {
            Callback([Fetched.username, Fetched.global_name, Fetched.id, Fetched.created_at, Fetched.avatar.link]);
        });
    }
    async sendContentToWebhook(WebhookURL, Content) {
        const Request = new XMLHttpRequest();

        Request.open('POST', WebhookURL);
        Request.setRequestHeader('Content-type', 'application/json');
        Request.send(JSON.stringify(Content))
    }
}

const discord = new Discord();
