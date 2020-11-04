import { Request, Response } from 'express'
import ControllerInterface from './ControllersInterface'

class TodosController implements ControllerInterface {
    index(req: Request, res: Response): Response {
        return res.send('index todos')
    }
    create(req: Request, res: Response): Response {
        return res.send('create todos')
    }
    show(req: Request, res: Response): Response {
        return res.send('show todos')

    }
    update(req: Request, res: Response): Response {
        return res.send('update todos')
    }
    destroy(req: Request, res: Response): Response {

        return res.send('hapus todos')

    }

}


export default new TodosController()