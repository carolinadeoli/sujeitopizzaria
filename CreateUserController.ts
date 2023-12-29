import {Request, response, Response} from 'express'
import { CreatUserService } from '../../services/user/CreateUserService'

class CreateUserController{
    async handle(req: Request, res: Response){
       const { name, email, password} = req.body;

       const createUserService = new CreatUserService();
       
       const user = await createUserService.execute({
        name,
        email,
        password
       });
       
       return res.json(user)
    }
}

export { CreateUserController}