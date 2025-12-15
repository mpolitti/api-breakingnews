import bcrypt from "bcryptjs";
import { loginService } from "../services/auth.service.js";

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

        res.send("Login OK");

    } catch (err) {
        res.status(500).send(err.message);
    }

}

export { login };