import { Request, Response, NextFunction } from 'express'

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    const auth = true
    if (auth) {
        next()
    }
    throw new Error('Unauthorized')
}