import { SALT_ROUND } from '../constant.js';
import { USER } from '../models/user.model.js';
import bcrypt from 'bcrypt';
const updatepasscontroller = async (req, res) => {
  const { user, oldp, newp } = req.body;
  try {
    const userexist = await USER.findOne({ username: user });
    if (!userexist) {
      return res.status(400).json({ message: 'user not exist' });
    }
    const ispasssame = await bcrypt.compare(oldp, userexist.password);
    if (ispasssame) {
      const newpassword = await bcrypt.hash(newp, SALT_ROUND);
      const updateres = await USER.findOneAndUpdate(
        { username: user },
        { $set: { password: newpassword } },
        { new: true },
      );
      return res.status(200).json({ message: 'update successfull' });
    } else {
      return res.status(400).json({ message: 'wrong password' });
    }
  } catch (err) {
    res.status(500).json({ message: 'server error' });
  }
};

export { updatepasscontroller };
