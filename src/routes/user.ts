import { Router, Request, Response, NextFunction } from 'express'
import RouterInterface from './routerInterface'

class user implements RouterInterface {

    public router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    public routes(): void {

        this.router.get('/', (req: Request, res: Response) => {
            res.send('oke')
        })

        this.router.post('/', (req: Request, res: Response) => {
            res.send(req.body)
        })

    }
}

export default new user().router