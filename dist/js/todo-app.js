const { createApp } = Vue;

const options = {
    data() {
        return {
            processText: "",
            processList: [],
            processDoneList: [],
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
        toDone(index) {
            // 將資料拿出
            let item = this.processList[index];

            // 推到完成列表
            this.processDoneList.push(item);

            // 刪除原本的資料
            this.processList.splice(index, 1);
        },
        toProcess(index) {
            // 將資料拿出
            let item = this.processDoneList[index];

            // 推到進行中列表
            this.processList.push(item);

            // 刪除原本的資料
            this.processDoneList.splice(index, 1);
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

        // mock data
        this.processDoneList.push({
            text: "1111done",
        });
        this.processDoneList.push({
            text: "2222done",
        });

        console.log(this.processDoneList);
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

import { Storage } from "./components/Storage.js";

const todoStorage = new Storage("todo");

const { createApp } = Vue;

const options = {
    data() {
        return {
            processText: "",
            processList: [],
            processDoneList: [],
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

            // 儲存資料
            todoStorage.write(this.processList);
        },
        toDone(index) {
            // 將資料拿出
            let item = this.processList[index];

            // 推到完成列表
            this.processDoneList.push(item);

            // 刪除原本的資料
            this.processList.splice(index, 1);
        },
        toProcess(index) {
            // 將資料拿出
            let item = this.processDoneList[index];

            // 推到進行中列表
            this.processList.push(item);

            // 刪除原本的資料
            this.processDoneList.splice(index, 1);
        },
    },
    mounted() {
        console.log("mounted");
        this.processList = todoStorage.read([]);
        console.log(this.processList, typeof this.processList);
    },
};

createApp(options).mount("#app");
