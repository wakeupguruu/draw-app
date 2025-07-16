import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const  middleware = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    const decoded = jwt.decode(token, { complete: true });

    if (!decoded || !(decoded as JwtPayload).userId) {
        req.userId = decoded?.userId;
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
    
}