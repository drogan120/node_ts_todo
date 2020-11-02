import { Request, Response } from 'express'
const db = require('../db/models')
class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body
        const createdUser = await db.user.create({
            username,
            password
        })
        return res.send({ messages: "Berhasil registrasi" })
    }
    login(req: Request, res: Response): Response {
        return res.send('halaman login')
    }
}

export default new AuthController()