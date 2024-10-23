import { Request, Response } from "express";

export function getAllUsersController(request: Request, response: Response) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then((users: []) => {
            response.render('users.html', {
                users
            })
        })
}