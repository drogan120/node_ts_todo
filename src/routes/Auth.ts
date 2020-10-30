import BaseRoutes from './BaseRoutes'

// Controllers
import AuthController from '../controllers/AuthController'

class Auth extends BaseRoutes {

    public routes(): void {
        this.router.get('/', AuthController.index)
        this.router.post('/', AuthController.create)
        this.router.get('/:id', AuthController.show)
        this.router.put('/:id', AuthController.update)
        this.router.delete('/:id', AuthController.destroy)

    }
}

export default new Auth().router
