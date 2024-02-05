/* import type { NextFunction, Request, Response } from "express";
import * as jose from "jose";

const secret = new TextEncoder().encode(
  "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
);

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    let decodedData;

    if (token) {
      decodedData = await jose.jwtVerify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jose.decodeJwt(token ? token : "");

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
 */