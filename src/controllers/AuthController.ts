import { Request, Response } from 'express'
import { Authentication } from '../utils'

const db = require('../db/models')
class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body
        const hashedPassword: string = await Authentication.passwordHash(password)

        await db.user.create({
            username,
            password: hashedPassword
        })
        return res.send({ messages: "Berhasil registrasi" })
    }
    login = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body
        const user = await db.user.findOne({ where: { username: username } })

        if (user) {
            const compare = await Authentication.passwordCompare(password, user.password)

            if (compare) {
                let token = Authentication.generateToken(user.id, user.username, user.password)
                return res.send({ token })
            }
        }

        return res.send({ messages: 'Authentication Failed' })
    }
}

export default new AuthController()