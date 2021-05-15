import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Main",
    äge: 34,
  },
  {
    firstName: "Isaac",
    lastName: "Kimura",
    äge: 87,
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(
    ` User with the  name ${user.firstName} was successfully added to the Database!`
  );
});

export default router;
