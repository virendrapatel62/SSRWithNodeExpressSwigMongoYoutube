import { Request, Response } from "express";
import { IUser } from "../types/user.types";

export function getAllUsersController(request: Request, response: Response) {
  const search = request.query.search as string;
  const sortBy = request.query.sortBy as string;

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users: IUser[]) => {
      if (search) return users.filter((user) => user.name.includes(search));
      return users;
    })
    .then((users: IUser[]) => {
      if (sortBy) {
        const isDesc = sortBy.charAt(0) == "-";
        let keyName = sortBy;
        if (isDesc) {
          keyName = sortBy.substring(1, sortBy.length);
        }

        return users.sort((u1, u2) => {
          return !isDesc
            ? u1[keyName].localeCompare(u2[keyName])
            : u2[keyName].localeCompare(u1[keyName]);
        });
      }

      return users;
    })
    .then((users) => {
      response.render("users.html", {
        users,
      });
    });
}

export function getUserByIdController(request: Request, response: Response) {
  const userId = +request.params.userId;
  if (!userId) {
    throw new Error("InValid user id");
  }
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      response.render("user-details.html", {
        user,
      });
    });
}
