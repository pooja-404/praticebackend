const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const port = 3000;
app.use(cors());
// user = [];
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/about", (req, res) => {
//   res.send("this is mine");
// });
// app.get("/demo", (req, res) => {
//   var name = req.query.name;
//   res.send(`hello ${name} mam`);
// });

// app.get("/test", (req, res) => {
//   var age = req.headers.age;
//   res.send(`i am ${age} years old`);
// });
const user = [];
app.post("/signup", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  var Address = req.body.Address;
  var Phoneno = req.body.Phoneno;
  var city = req.body.city;
  var users = {
    id,
    pass,
    Address,
    Phoneno,
    city,
    purchased: [],
  };
  user.push(users);
  // console.log(user);
  res.json({
    id,
    pass,
    Address,
    Phoneno,
    city,
  });
});

app.post("/login", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  for (let i = 0; i < user.length; i++) {
    if (user[i].id === id) {
      if (user[i].pass === pass) {
        res.json({
          Address: user[i].Address,
          Phoneno: user[i].Phoneno,
          city: user[i].city,
        });
        // console.log("Login successful")
      }
    } else {
      res.json("Login faild");
    }
  }
  res.json({ massage: "user not found" });
});
app.post("/changepass", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const newpass = req.body.newpass;
  for (let i = 0; i < user.length; i++) {
    if (user[i].id === id) {
      if (user[i].pass === pass) {
        user[i].pass = newpass;
        res.json("password changed successful");
      } else {
        res.json({ massage: "password not changed" });
      }
    }
  }
});
// const product = [];
// app.post("/add", (req, res) => {
//   const { Name, Price, Rating, Discription } = req.body;

//   const newProduct = {
//     Name,
//     Price,
//     Rating,
//     Discription,
//   };

//   for (let i = 0; i < product.length; i++) {
//     if (product[i].Name === Name && product[i].Price === Price) {
//       return res.j(400).json({ error: "Product already exists" });
//     }
//   }

//   product.push(newProduct);
//   res.json(newProduct);
// });
// app.post("/task", (req, res) => {
//   var id = req.body.id;d
//   var name = req.body.name;
//   var users = {
//     id,
//     name,
//   };
//   user.push(users);
//   res.json({ massage: `my id ${id} and pswd ${name}`, user });
// });

const seller = [];
app.post("/sellersignup", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  var Address = req.body.Address;
  var Phoneno = req.body.Phoneno;
  var city = req.body.city;
  var sellers = {
    id,
    pass,
    Address,
    Phoneno,
    city,
  };
  seller.push(sellers);
  // console.log(user);
  res.json({
    id,
    pass,
    Address,
    Phoneno,
    city,
  });
});

app.post("/sellerlogin", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  for (let i = 0; i < seller.length; i++) {
    if (seller[i].id === id) {
      if (seller[i].pass === pass) {
        res.json({
          Address: seller[i].Address,
          Phoneno: seller[i].Phoneno,
          city: seller[i].city,
        });
        // console.log("Login successful")
      }
    } else {
      res.json("Login faild");
    }
  }
  res.json({ massage: "seller not found" });
});
const products = [];
app.post("/add", (req, res) => {
  const { id, name, rate, price, description } = req.body;
  const newProduct = {
    id,
    name,
    rate,
    price,
    description,
  };

  products.push(newProduct);
  console.log(products);
  res.json(newProduct);
});

app.get("/getProduct", (req, res) => {
  res.json(products);
});

// app.post("/purchased", (req, res) => {
//   const id = req.body.id;
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id == id) {
//       purchased.push(products[i]);
//       res.json(purchased);
//       console.log("Login successful");
//       return;
//     }
//   }
//   res.json("user not found");
// });

app.post("/purchsed", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const itemid = req.body.itemid;
  for (let i = 0; i < products.length; i++) {
    if (user[i].id === id) {
      if (user[i].pass === pass)
        for (let g = 0; g < products.length; g++) {
          if (products[g].id === itemid) {
            user[g].purchased.push(products[g]);
            res.json(user[g])
          }
        }
    } else {
      res.json("user not found");
    }
  }
  // res.json({ massage: "user not found" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
