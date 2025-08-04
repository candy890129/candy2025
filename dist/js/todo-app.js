const { createApp } = Vue;

const options = {
    data() {
        return {};
    },
    methods: {},
    mounted() {
        console.log("mounted");
    },
};

createApp(options).mount("#app");
