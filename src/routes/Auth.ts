import BaseRoutes from './BaseRoutes'
import { validate, auth } from '../middlewares/'


// Controllers
import { AuthController } from '../controllers'


class Auth extends BaseRoutes {

    public routes(): void {
        this.router.post('/login', validate, AuthController.login)
        this.router.post('/register', validate, AuthController.register)
        this.router.get('/profile', auth, AuthController.profile)
    }
}

export default new Auth().router
