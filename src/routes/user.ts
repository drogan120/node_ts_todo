import BaseRoutes from './BaseRoutes'
import { auth } from '../middlewares/AuthMiddleware'

// Controller
import UserController from '../controllers/UserController'

class User extends BaseRoutes {

    public routes(): void {

        this.router.get('/', auth, UserController.index)
        this.router.post('/', UserController.create)
        this.router.get('/:id', UserController.show)
        this.router.put('/:id', UserController.update)
        this.router.delete('/:id', UserController.destroy)

    }
}

export default new User().router