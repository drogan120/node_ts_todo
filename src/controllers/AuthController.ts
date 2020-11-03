import { Request, Response } from 'express'
import { passwordHash } from '../utils'

const db = require('../db/models')
class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body
        const hashedPassword: string = await passwordHash.hash(password)

        await db.user.create({
            username,
            password: hashedPassword
        })
        return res.send({ messages: "Berhasil registrasi" })
    }
    login(req: Request, res: Response): Response {
        return res.send('halaman login')
    }
}

export default new AuthController()