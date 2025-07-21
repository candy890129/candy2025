let num1 = 100;
console.log(num1);

let num2 = "200";

console.log(num2);

let num3 = num1 + num2;

console.log(num3);

function add(a, b) {
    // 將字串轉換為數字，在某個版本預設是 8 進位，所以需要指定 10 進位
    // a = parseInt(a, 10);
    // b = parseInt(b, 10);

    console.log(a, b);
    // 使用 + 號將字串轉換為數字，建議使用 + 號，因為 + 號比 parseInt 快
    return +a + +b;
}

let r1 = add(num1, num2);
console.log(r1);
