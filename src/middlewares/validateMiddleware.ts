import { Request, Response, NextFunction } from "express";

export const validate = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      const err = new Error(error.errors[0].message);
      (err as any).status = 400;
      next(err);
    }
  };
};