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
};

console.log(students);
console.log(dom);

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
const renderFailTable = () => {};

console.log("-----fails-----");
console.table(fails);
console.log("-----passes-----");
console.table(passes);
console.log("-----students-----");
console.table(students);

// renderAllTable();
// renderPassTable();
