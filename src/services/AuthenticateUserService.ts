import { Connection, getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface IAuthenticateRequest {
    email: string
    password: string
}




class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({
            email
        })

        if(!user) {
            throw new Error("Email and Password incorrect!")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email and Password incorrect!")
        }       
        
        const token = sign(
            {
                email: user.email,
            },
            "993987fa737ef7d49d539f592aa196185e35b71b",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )


        return token

    }
}

export { AuthenticateUserService }