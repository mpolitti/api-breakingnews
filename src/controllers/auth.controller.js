import bcrypt from "bcryptjs";
import { loginService, generateToken } from "../services/auth.service.js";

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ "message": "Submit email and password for auth!" });
        }

        const user = await loginService(email);

        if (!user) {
            return res.status(404).send({"message": "User or password not found!"});
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(404).send({"message": "User or password not found!"});
        }

        const token = generateToken(user.id);

        res.send({token});

    } catch (err) {
        res.status(500).send(err.message);
    }

}

export { login };