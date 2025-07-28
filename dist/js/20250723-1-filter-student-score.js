let students = [
    {
        name: "David",
        score: 100,
    },
    {
        name: "John",
        score: 90,
    },
    {
        name: "Mary",
        score: 80,
    },
    {
        name: "Peter",
        score: 70,
    },
    {
        name: "Jane",
        score: 60,
    },
    {
        name: "Jim",
        score: 50,
    },
    {
        name: "Jill",
        score: 40,
    },
    {
        name: "Jack",
        score: 30,
    },
    {
        name: "Joe",
        score: 20,
    },
    {
        name: "Helen",
        score: 10,
    },
];

let dom = {
    allTable: document.querySelector("#all-table"),
    fn: document.querySelector("#fn"),
    fnBtns: document.querySelectorAll("#fn .btn"),
};

console.log(students);
console.log(dom);

// 監聽 body 的 click 事件，確定事件冒泡有執行
document.body.addEventListener("click", (e) => {
    console.log("body click event");
    console.log(e.target);
});

dom.fn.addEventListener("click", (e) => {
    // 阻止事件冒泡
    e.stopPropagation();
    let target = e.target;
    if (target.classList.contains("btn")) {
        // 移除所有按鈕的 active 類別
        dom.fnBtns.forEach((btn) => {
            btn.classList.remove("active");
        });

        if (target.classList.contains("all")) {
            console.log("is all btn");
            target.classList.add("active");
            // someting
        }

        if (target.classList.contains("pass")) {
            console.log("is pass btn");
            target.classList.add("active");
            // someting
        }

        if (target.classList.contains("fail")) {
            console.log("is fail btn");
            target.classList.add("active");
            // someting
        }

        if (target.classList.contains("both")) {
            console.log("is both btn");
            target.classList.add("active");
            // someting
        }
    }
});

/**
 * 渲染所有學生資料
 * @returns {void}
 */
const renderAllTable = () => {
    let tbody = "";
    students.forEach((student) => {
        tbody += `<tr>
    <td>${student.name}</td>
        <td>${student.score}</td>
        </tr>`;
    });

    dom.allTable.querySelector("tbody").innerHTML = tbody;
};

/**
 * 篩選學生成績
 * @param {boolean} isPass 是否及格
 * @returns {Array} 篩選後的學生資料
 */
const filterStudent = (isPass) => {
    let filteredStudents = [];
    if (isPass) {
        filteredStudents = students.filter((student) => student.score >= 60);
    } else {
        filteredStudents = students.filter((student) => student.score < 60);
    }

    return filteredStudents;
};

let fails = filterStudent();
let passes = filterStudent(true);

/**
 * 渲染及格學生資料
 * @returns {void}
 */
const renderPassTable = () => {
    let tbody = "";
    let passes = filterStudent(true);
    passes.forEach((student) => {
        tbody += `<tr>
    <td>${student.name}</td>
        <td>${student.score}</td>
        </tr>`;
    });

    dom.allTable.querySelector("tbody").innerHTML = tbody;
};

/**
 * 渲染不及格學生資料
 * @returns {void}
 */
const renderFailTable = () => {
    let tbody = "";
    let passes = filterStudent(false);
    passes.forEach((student) => {
        tbody += `<tr>
    <td>${student.name}</td>
        <td>${student.score}</td>
        </tr>`;
    });

    dom.allTable.querySelector("tbody").innerHTML = tbody;
};

// renderAllTable();
// renderPassTable();
// renderFailTable();
