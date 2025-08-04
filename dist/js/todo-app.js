import { Storage } from "./components/Storage.js";

const todoStorage = new Storage("todo");

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
                id: Date.now(),
                text: this.processText,
                status: "process",
            });

            // 清空輸入框
            this.processText = "";

            // 儲存資料
            todoStorage.write(this.processList);
        },
        toDone(id) {
            // 將資料拿出，call by reference
            let items = this.processList.filter((item) => {
                return item.id === id;
            });

            if (items.length > 0) {
                items[0].status = "done";
                todoStorage.write(this.processList);
            }

            // // 推到完成列表
            // this.processDoneList.push(item);

            // // 刪除原本的資料
            // this.processList.splice(index, 1);
        },
        toProcess(id) {
            // 將資料拿出，call by reference
            let items = this.processList.filter((item) => {
                return item.id === id;
            });

            if (items.length > 0) {
                items[0].status = "process";
                todoStorage.write(this.processList);
            }

            // // 推到進行中列表
            // this.processList.push(item);

            // // 刪除原本的資料
            // this.processDoneList.splice(index, 1);
        },
        processItems() {
            return this.processList.filter((item) => {
                return item.status === "process";
            });
        },
        doneItems() {
            return this.processList.filter((item) => {
                return item.status === "done";
            });
        },
    },
    mounted() {
        console.log("mounted");
        this.processList = todoStorage.read([]);
        console.log(this.processList, typeof this.processList);
    },
};

createApp(options).mount("#app");

// 儲存
// const student = {
//     name: "David",
//     score: 80,
// };

// const studentJson = JSON.stringify(student);
// localStorage.setItem("student", studentJson);

// 取出
const studentJson = localStorage.getItem("student");
const student = JSON.parse(studentJson);
console.log(student, student.name);
