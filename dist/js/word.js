// 單引號(字元)跟雙引號(字串-由多個字元組成)都代表字串
let name = "David'Lin"; // 使用單引號
name = 'David"Lin'; // 使用跳脫符號
let firstName = "Mr' Lin";

console.log(name);
console.log(firstName);

let email = "kindpingwork@gmail.com";

let message = "敬愛的 " + name + ": 您輸入的信箱為: " + email + " 請查收";

console.log(message);

// ${variable}
let templateMessage = `敬愛的 ${name}: 您輸入的信箱為: ${email} 請查收`;

console.log(templateMessage);
