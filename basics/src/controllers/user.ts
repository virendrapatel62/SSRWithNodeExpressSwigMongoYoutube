import { Request, Response } from "express";
import { IUser } from "../types/user.types";
import { User } from "../models/user.model";

export async function getAllUsersController(
  request: Request,
  response: Response
) {
  const search = request.query.search as string;

  const sortBy = request.query.sortBy as string;
  const _users = await User.find();

  // if (search) {
  //   _users = _users.filter((user) => user.name.includes(search));
  // }

  // if (sortBy) {
  //   const isDesc = sortBy.charAt(0) == "-";
  //   let keyName = sortBy;
  //   if (isDesc) {
  //     keyName = sortBy.substring(1, sortBy.length);
  //   }

  //   _users = _users.sort((u1, u2) => {
  //     return !isDesc
  //       ? u1[keyName].localeCompare(u2[keyName])
  //       : u2[keyName].localeCompare(u1[keyName]);
  //   });
  // }

  response.render("pages/users.html", {
    users: _users,
  });
}

export async function getUserByIdController(
  request: Request,
  response: Response
) {
  const userId = request.params.userId;
  if (!userId) {
    throw new Error("InValid user id");
  }
  const user = await User.find({
    _id: userId,
  });
  response.render("user-details.html", {
    user,
  });
}

export function addUserPageController(request: Request, response: Response) {
  response.render("pages/add-user-page.html");
}

export async function addUserController(request: Request, response: Response) {
  const user = request.body;

  const errors: Record<string, string> = {};

  if (!user.name?.trim()) {
    errors.name = "Enter Name";
  }
  if (!user.email?.trim()) {
    errors.email = "Enter Email";
  }
  if (!user.username?.trim()) {
    errors.username = "Enter Username";
  }

  const hasErrors = Object.keys(errors).length;

  if (hasErrors) {
    return response.render("pages/add-user-page.html", {
      errors: errors,
    });
  }

  try {
    await User.create({
      ...user,
    });
    response.render("pages/add-user-page.html", {
      message: "User created",
    });
  } catch (error: any) {
    errors.username = error.message;
    response.render("pages/add-user-page.html", {
      errors,
    });
  }
}
