import { Router } from 'express'
import RouterInterface from './routerInterface';

// Controllers
import AuthController from '../controllers/AuthController'

class Auth implements RouterInterface {

    public router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    public routes(): void {
        this.router.get('/', AuthController.index)
        this.router.post('/', AuthController.create)
        this.router.get('/:id', AuthController.show)
        this.router.put('/:id', AuthController.update)
        this.router.delete('/:id', AuthController.destroy)

    }

}

export default new Auth().router
