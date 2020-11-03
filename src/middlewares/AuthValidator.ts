import { Request, Response, NextFunction, request } from 'express'
import { validationResult, check } from 'express-validator'

const validate = [
    check('username').isString(),
    check('password').isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(422).send({ messages: error.array() })
        }

        next()
    }
]

export default validate