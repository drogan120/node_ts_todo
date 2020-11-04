import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const auth = (req: Request, res: Response, next: NextFunction): any => {
    if (!req.headers.authorization) {
        return res.status(401).send('Not Authotized')
    }

    const secretKey = process.env.JWT_SECRET_KEY || 'secret'
    const token: string = req.headers.authorization.split(" ")[1]
    try {
        const credential: string | object = jwt.verify(token, secretKey)
        if (credential) {
            req.app.locals.credential = credential
            next()
        }
        return res.send('token is invalid')
    } catch (e) {
        return res.send(e)
    }
}

export default auth