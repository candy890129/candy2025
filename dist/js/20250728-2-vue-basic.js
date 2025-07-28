let { createApp } = Vue;

let options = {
    data() {
        return {
            account: "",
            password: "",
        };
    },
    methods: {},
    mounted() {
        console.log("mounted");
    },
};

createApp(options).mount("#app");

// let account = document.querySelector("#account");

// account.value = "kindping@gmail.com";

// account.addEventListenr("change", function () {
//     let showAccount = document.querySelector("#show-account");
//     showAccount.innerHTML = account.value;
// });
