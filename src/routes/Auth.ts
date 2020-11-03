import BaseRoutes from './BaseRoutes'
import { validate } from '../middlewares/'

// Controllers
import AuthController from '../controllers/AuthController'


class Auth extends BaseRoutes {

    public routes(): void {
        this.router.post('/login', validate, AuthController.login)
        this.router.post('/register', validate, AuthController.register)
    }
}

export default new Auth().router
