// const users = [
//   "jhon doe",
//   "slack",
//   "david",
//   "michal",
//   "jane",
//   "jack",
//   "harry",
//   "taver",
// ];
// console.log(users);
// for (let i = 0; i <= users.length; i++) {
//   if (users[i] === "jane") {
//     console.log("girl:jane");
//   } else {
//     console.log(users[i]);
//   }
// }

// const users = [
//   { name: "jhon", age: 25 },
//   { name: "jane", age: 22 },
//   { name: "doe", age: 30 },
//   { name: "smith", age: 35 },
//   { name: "alex", age: 26 },
// ];
// console.log(users);
// for (let i = 0; i <= users.length; i++) {
//   if (users[i].name === "jane") {
//     console.log(users[i].age);
//   } else {
//     console.log(users[i].name);
//   }
// }

// const users = [
//   { id: 104, password: 9451 },
//   { id: 250, password: 9452 },
//   { id: 210, password: 9873 },
//   { id: 210, password: 9874 },
//   { id: 200, password: 9875 },
// ];
// console.log(users);
// for (let i = 0; i < users.length; i++) {
//   if (users[i].id === 250)
//     if (users[i].password === 9452) {
//       console.log("loggind sucessfull");
//     }
// }

// const users = [
//   { id: 104, password: 9451 },
//   { id: 250, password: 9452 },
//   { id: 210, password: 9873 },
//   { id: 210, password: 9874 },
//   { id: 200, password: 9875 },
// ];
// console.log(users);
// let loginSuccessful = false;

// for (let i = 0; i < users.length; i++) {
//   if (users[i].id === 210 && users[i].password === 9873) {
//     loginSuccessful = true;
//   }
// }

// if (loginSuccessful) {
//   console.log("login successful");
// } else {
//   console.log("login failed");
// }

const users = [
  { id: 104, password: 9451 },
  { id: 250, password: 9452 },
  { id: 210, password: 9873 },
  { id: 210, password: 9874 },
  { id: 200, password: 9875 },
];

console.log(users);

for (let i = 0; i < users.length; i++) {
  if (users[i].id === 250 && users[i].password === 9452) {
    console.log("Login successful");
  }
}
