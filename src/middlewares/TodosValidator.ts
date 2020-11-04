import { Request, Response, NextFunction } from 'express'
import { validationResult, check } from 'express-validator'

const validate = [
    check('descriptions').isString(),
    (req: Request, res: Response, next: NextFunction) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(422).send({ messages: error.array() })
        }

        return next()
    }
]

export default validate