import { Request, Response, NextFunction } from "express";
import { CustomError } from "./Errors";

function middlewareErrors(error: Error & Partial<CustomError>, req: Request, res: Response, next: NextFunction) {
    console.log(error);

    const statusCode = error.httpStatusCode ?? 500;
    const message = error.message ?? 'Internal Server Error (MIDDLEWARE)';

    res.status(statusCode).json({
        error: {
            message,
            stack: error.stack,
            timestamp: error.timestamp
        }
    });

    next(error);
}

export {
    middlewareErrors
}