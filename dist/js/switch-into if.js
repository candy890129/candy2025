let numberDOM = document.querySelector("#number");
let runDOM = document.querySelector("#run");
let resultDOM = document.querySelector("#result");

console.log(numberDOM, runDOM, resultDOM);

const initResultDOM = () => {
    resultDOM.classList.remove("show");
    resultDOM.classList.remove("success");
    resultDOM.innerHTML = "";
};

runDOM.addEventListener("click", () => {
    initResultDOM();
    console.log("run!");

    let number = numberDOM.value;
});

let day = "星期六";
switch (day) {
    case "星期一":
        console.log("開始新的一週！");
        break;
    // break 是必要的，否則會繼續執行下一個 case
    case "星期五":
    case "星期四":
        console.log("週末快到了！");
        break;

    default: // 如果沒有匹配的 case，則執行 default
        console.log("平常的一天。");
}

console.log("--------------------------------");

if (day == "星期一") {
    console.log("開始新的一週！");
} else if (day == "星期四" || day == "星期五") {
    console.log("週末快到了！");
} else {
    console.log("平常的一天。");
}

console.log("--------------------------------");

let message = "平常的一天。";

if (day == "星期一") {
    message = "開始新的一週！";
}

if (day == "星期四" || day == "星期五") {
    message = "週末快到了！";
}

console.log(message);
