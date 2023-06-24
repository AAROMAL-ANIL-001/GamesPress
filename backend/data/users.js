import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Raz",
    email: "raz@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "Mina",
    email: "mina@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default users;
