import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const loginService = (email) => User.findOne({ email: email }).select("+password");

//gera o token que expira em 24 horas (86400 segundos)
//secret_jwt: md5
const generateToken = (id) => jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

export { loginService, generateToken, };