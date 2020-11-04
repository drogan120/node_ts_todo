import { Request, Response } from 'express'
import ControllerInterface from './ControllersInterface'
const db = require('../db/models')

class TodosController implements ControllerInterface {
    index(req: Request, res: Response): Response {
        return res.send('index todos')
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential
        const { descriptions } = req.body
        const todo = await db.todo.create({
            user_id: id,
            description: descriptions
        })

        return res.send({
            data: todo,
            messages: "todo has been created"
        })
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