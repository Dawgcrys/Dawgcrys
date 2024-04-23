// Discord id lookup

class Discord {
    constructor(Args) {}

    async userLookup(Userid, Callback) {
        fetch(`https://discordlookup.mesavirep.xyz/v1/user/${Userid}`).then(Resp => Resp.json()).then(Fetched => {
            Callback([Fetched.username, Fetched.global_name, Fetched.id, Fetched.created_at, Fetched.avatar.link]);
        });
    }
}

const discord = new Discord();
