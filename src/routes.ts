import { Request, Response } from "express";

import CreateCoursea from "./CreateCourse";

export function CreateCourse(request: Request, response: Response) {
    CreateCoursea.execute("node", 30, "ze");

    return response.send();
}
