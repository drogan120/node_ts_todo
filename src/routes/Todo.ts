import baseRoutes from './BaseRoutes'
import { auth } from '../middlewares'

// Controller
import { todosController } from '../controllers'

class Todos extends baseRoutes {
    routes(): void {
        this.router.get('/', auth, todosController.index)
        this.router.post('/', auth, todosController.create)
        this.router.get('/:id', auth, todosController.show)
        this.router.put('/:id', auth, todosController.update)
        this.router.delete('/:id', auth, todosController.destroy)
    }

}

export default new Todos().router