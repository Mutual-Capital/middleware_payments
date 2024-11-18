class CustomError extends Error {
    constructor(
        readonly message: string,
        readonly httpStatusCode: number,
        readonly timestamp: string
    ) {
        super(message);
        this.httpStatusCode = httpStatusCode;
        this.timestamp = new Date().toLocaleString('pt-br');
        Error.captureStackTrace(this, this.constructor);
    }
}

class InternalServerError extends CustomError {
    constructor(
        readonly message: string,
    ) {
        super(message, 500, new Date().toLocaleString('pt-br'));
    }
}

class BadRequestError extends CustomError {
    constructor(
        readonly message: string,
    ) {
        super(message, 400, new Date().toLocaleString('pt-br'));
    }
}

class NotFoundError extends CustomError {
    constructor(
        readonly message: string,
    ) {
        super(message, 404, new Date().toLocaleString('pt-br'));
    }
}

export {
    CustomError,
    InternalServerError,
    BadRequestError,
    NotFoundError
}