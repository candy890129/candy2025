const { createApp } = Vue;

const options = {
    data() {
        return {
            processText: "",
            processList: [],
        };
    },
    methods: {
        addProcess() {
            // 當沒有輸入時，不新增
            if (!this.processText) {
                return;
            }

            // 新增代辦事項
            this.processList.push({
                text: this.processText,
            });

            // 清空輸入框
            this.processText = "";
        },
    },
    mounted() {
        console.log("mounted");
        this.processList.push({
            text: "1111aaaaa",
        });
        this.processList.push({
            text: "2222bbbbb",
        });
        console.log(this.processList);
    },
};

createApp(options).mount("#app");
