const User = require("../models/User");

exports.createUser = async (req, res) => {
  let { email, password } = req.body;
  console.log(email + password);
  try {
    let newUser = new User({
      email: email,
      password: password,
    });
    await newUser.save();
    res.status(200).send({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "There is a problem try again after few minutes",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({
      email: req.params.email,
      password: req.params.password,
    });
    if (user.length === 0) {
      res.status(404).send({
        success: false,
        message: "User no found",
      });
    } else {
      res.status(200).send({
        success: true,
        data: user[0],
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "There is a problem try again after few minutes",
    });
  }
};
exports.updateUser = async (req, res) => {
  let {
    name,
    photo,
    gender,
    birthdate,
    chosengender,
    showgender,
    description,
  } = req.body;
  console.log(req.params.userid);
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userid,
      {
        name: name,
        photo: photo,
        gender: gender,
        chosengender: chosengender,
        birthdate: birthdate,
        showgender: showgender,
        description: description,
      },
      {
        returnDocument: "after",
      }
    );
    res.status(200).send({
      succes: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "There is a problem try again after few minutes",
    });
  }
};

exports.getUsersPreferred = async (req, res) => {
  const user = await User.find({ id: req.params.id });
  const status = user.chosengender;
  const allUsers = await User.find();
  if (status === "man" || status === "woman") {
    res.status(200).send({
      success: true,
      data: allUsers.filter((f) => f.gender === status),
    });
  } else {
    res.status(200).send({
      success: true,
      data: allUsers,
    });
  }
};
