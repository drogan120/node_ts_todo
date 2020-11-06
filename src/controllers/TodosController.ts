import { Request, Response } from 'express'
import ControllerInterface from './ControllersInterface'
import TodoService from '../services/TodoService'

class TodosController implements ControllerInterface {
    index = async (req: Request, res: Response): Promise<Response> => {

        const services = new TodoService(req)
        const todos = await services.getAll()

        return res.send({
            data: todos
        })
    }
    create = async (req: Request, res: Response): Promise<Response> => {

        const services = new TodoService(req)
        const todo = await services.store()

        return res.send({
            data: todo,
            messages: "todo has been created"
        })
    }
    show = async (req: Request, res: Response): Promise<Response> => {

        const services = new TodoService(req)
        const todo = await services.getOne()

        return res.send({
            data: todo
        })

    }
    update = async (req: Request, res: Response): Promise<Response> => {

        const services = new TodoService(req)
        const todo = await services.update()

        return res.send({
            data: todo,
            messages: "todo has been updated"
        })
    }
    destroy = async (req: Request, res: Response): Promise<Response> => {

        const services = new TodoService(req)
        const todo = await services.delete()

        return res.send({
            data: todo,
            messages: "todo has been deleted"
        })
    }

}


export default new TodosController()