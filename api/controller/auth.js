const Auth = require('../model/Auth');
const bcrypt = require('bcrypt');
const registerAuth_control = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(16);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newAuthUser = new Auth({
            name: req.body.name,
            email: req.body.email,
            photo: req.body.photo,
            password: hashedPass,
            role: req.body.role
        })
        const authuser = await newAuthUser.save();
        res.status(200).json(authuser);
    }
    catch (err) { res.status(500).json({ err: err.message }) }
}

//login auth

const loginAuth_control = async (req, res, next) => {
    try {
        const authuser = await auth.findOne({ email: req.body.email });
        !authuser && res.status(400).json("Wrong Credentials!");

        const validated = await bcrypt.compare(req.body.password, authuser.password);
        !validated && res.status(400).json("Wrong Credentials!");

        const { password, ...others } = authuser._doc;
        res.status(200).json({ message: 'login successfully!', others });
    }
    catch (err) { res.status(500).json({ err: err.message }) }
}

//update user by id

const updateuser_control = async (req, res, next) => {

    try {
        const updatedUser = await Auth.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json(updatedUser)
    }
    catch (err) { res.status(500).json(err) }
}

//delete user by id

const deleteuser_control = async (req, res, next) => {
    try {
        const auth = await Auth.findById(req.params.id);
        await auth.delete();
        res.status(200).json("account has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }

}


module.exports = {
    registerAuth_control,
    loginAuth_control,
    updateuser_control,
    deleteuser_control
}