import BaseRoutes from './BaseRoutes'

// Controllers
import AuthController from '../controllers/AuthController'

class Auth extends BaseRoutes {

    public routes(): void {
        this.router.get('/', AuthController.login)
        this.router.post('/register', AuthController.register)
    }
}

export default new Auth().router
