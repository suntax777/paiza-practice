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

//paizaラーニング　D198:お持ちの個数
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
  console.log(lines[0] + "/" + lines[1]);
});

//D174:栄養の摂取
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    var perKiroProtein = 1500
  console.log(lines[0] * perKiroProtein);

//D162:【推しプロコラボ問題】お米の重さ
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const go = 150
  console.log(lines[0] * go);
});

//paizaラーニング　C099:折り紙の貼り合わせ
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var value = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
    var value = []
  //console.log(lines);
  //lines.split(' ');
  value = lines[0].split(' ');
  //console.log(value);
  //console.log(lines);
  count = Number(value[0]);
  width = Number(value[1]);

  length = width + width / 2 + width - width / 2 / 2
  //console.log(length)
  area = width * length;
  console.log(area);
});