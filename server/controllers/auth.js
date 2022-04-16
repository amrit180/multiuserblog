const User = require("../models/user");

module.exports.createOrUpdateUser = async (req, res) => {
  try {
    const { email, name, picture } = req.user;
    console.log(req.user);
    const username = email.split("@")[0] + Math.floor(Math.random() * 1000);
    const user = await User.findOne({ email: email }).exec();
    if (user) {
      const updateduser = await User.findOneAndUpdate(
        { email: email },
        { name: name },
        { new: true }
      ).exec();
      res.json(updateduser);
    } else {
      const newUser = await new User({
        email: email,
        name: name,
        image: picture,
        username: username,
      }).save();
      res.json(newUser);
    }
  } catch (err) {
    console.log(err);
  }
};
