const functions = {
    saveCookies: function(name, token) {
        document.cookie = `${name}=${token}`;
        console.log(document.cookie);
    },
    readCookies: function(name) {
        const cookies = document.cookie.replace(`${name}=`, '')
        return cookies;
    },
    deleteCookies: function() {
        document.cookie = 'jwt=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
}

export { functions };