// import { Request, Response, NextFunction } from "express";

// const errorMiddleware = (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   console.error(err);
//   res
//     .status(err.status || 500)
//     .json({ error: err.message || "Internal Server Error" });
// };

// export default errorMiddleware

import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";

const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  return errorResponse(
    res,
    err.message || "Internal Server Error",
    err.status || 500
  );
};

export default errorMiddleware;


