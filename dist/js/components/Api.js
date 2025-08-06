class Api {
    constructor(api) {
        this.api = api;
    }

    async read(uid) {
        let api = this.api;
        if (!api || !uid) {
            return { code: 400, data: [] };
        }

        let result = await fetch(`${api}?uid=${uid}`);
        let data = await result.json();
        return data;
    }

    async write(uid, todo = []) {
        let api = this.api;
        if (!api || !uid) {
            return { code: 400, data: [] };
        }

        let params = {
            uid: uid,
            data: todo,
        };

        let options = {
            method: "POST",
            body: JSON.stringify(params), // Object 轉 JSON 裝進 body(包裹)
        };

        let result = await fetch(api, options);
        let data = await result.json();
        return data;
    }
}

export { Api };
