//paizaラーニング　D199:お持ちの個数
process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  //console.log(lines[0])
  //console.log(lines[1])
  var sum = Number(lines[0]) * Number(lines[1]);
  console.log(sum);
});
