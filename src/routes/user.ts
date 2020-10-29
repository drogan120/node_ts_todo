import { Router, Request, Response, NextFunction } from 'express'
import RouterInterface from './routerInterface'

// Controller
import UserController from '../controllers/UserController'
class User implements RouterInterface {

    public router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    public routes(): void {

        this.router.get('/', UserController.index)
        this.router.post('/', UserController.create)
        this.router.get('/:id', UserController.show)
        this.router.put('/:id', UserController.update)
        this.router.delete('/:id', UserController.destroy)

    }
}

export default new User().router