// 5번 문제.

let user = {
  name: "윤정",
  age: 20,
};

let json = JSON.stringify(user);
console.log(json);

let user2 = JSON.parse(json)
console.log(user2);