const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const port = 3000;
app.use(cors());
const user = [];
app.post("/signup", (req, res) => {
  var id = req.body.id;
  var name = req.body.name;
  var pass = req.body.pass;
  var Address = req.body.Address;
  var Phoneno = req.body.Phoneno;
  var city = req.body.city;
  var users = {
    id,
    name,
    pass,
    Address,
    Phoneno,
    city,
    purchased: [],
  };
  user.push(users);
  // console.log(user);
  res.json({ user });
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
        return;
        // console.log("Login successful")
      } else {
        res.json("Login faild");
      }
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
const seller = [];
app.post("/sellersignup", (req, res) => {
  var id = req.body.id;
  var name = req.body.name;
  var pass = req.body.pass;
  var Address = req.body.Address;
  var Phoneno = req.body.Phoneno;
  var city = req.body.city;
  var sellers = {
    id,
    name,
    pass,
    Address,
    Phoneno,
    city,
  };
  seller.push(sellers);
  // console.log(user);
  res.json({
    id,
    name,
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
        return;
      } else {
        res.json("Login faild");
      }
    }
  }
  res.json({ massage: "seller not found" });
});
const products = [];
app.post("/add", (req, res) => {
  const { image, id, name, rate, price, description } = req.body;
  const newProduct = {
    image,
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

app.post("/purchsed", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const itemid = req.body.itemid;
  console.log({ id, password, itemid });
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      if (user[i].pass == password) {
        for (let g = 0; g < products.length; g++) {
          console.log(products);
          if (products[g].id == itemid) {
            user[i].purchased.push(products[g]);
            res.json(user[i]);
            return;
          }
        }
      }
    }
  }
  res.json({ massage: "user not found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
