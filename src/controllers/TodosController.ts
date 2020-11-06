import { Request, Response } from 'express'
import ControllerInterface from './ControllersInterface'
const db = require('../db/models')

class TodosController implements ControllerInterface {
    index = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential

        const todos = await db.todo.findAll({ where: { user_id: id }, attributes: ['id', 'description'] })
        return res.send({
            data: todos
        })
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
    show = async (req: Request, res: Response): Promise<Response> => {
        const { id: user_id } = req.app.locals.credential
        const { id } = req.params

        const todos = await db.todo.findOne({ where: { id, user_id }, attributes: ['id', 'description'] })
        return res.send({
            data: todos
        })

    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const { id: user_id } = req.app.locals.credential
        const { id } = req.params
        const { descriptions } = req.body

        const todo = await db.todo.update(
            {
                description: descriptions
            },
            {
                where: { id, user_id }
            }
        )
        return res.send({
            data: todo,
            messages: "todo has been updated"
        })
    }
    destroy = async (req: Request, res: Response): Promise<Response> => {

        const { id: user_id } = req.app.locals.credential
        const { id } = req.params
        const todo = await db.todo.destroy({ where: { id, user_id } })
        return res.send({
            data: todo,
            messages: "todo has been deleted"
        })
    }

}


export default new TodosController()