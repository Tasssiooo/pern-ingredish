import bcrypt from "bcrypt";
import * as jose from "jose";
import pool from "../sql/pool";

import type { Request, Response } from "express";
import type { QueryResult } from "pg";
import type { UserData } from "../types/types";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const alg = "HS256";

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    /* Get email from database */
    const oldUser = await pool.query(
      'SELECT * FROM "user" WHERE email = $1 LIMIT 1',
      [email]
    );

    /* Check if this user exist */
    if (!oldUser.rows.length)
      return res.status(404).json({ message: "User doesn't exist" });

    /* Compare requested password with the one from database */
    const isPasswordCorrect = await bcrypt.compare(
      password,
      oldUser.rows[0].password
    );

    /* Check if the requested password is valid */
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    /* Sign in JWT */
    const token = await new jose.SignJWT({
      email: oldUser.rows[0].email,
      id: oldUser.rows[0].user_id,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("1h")
      .sign(secret);

    res.status(200).json({ result: oldUser.rows[0], token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    /* Get email from database */
    const oldUser = await pool.query(
      'SELECT * FROM "user" WHERE email = $1 LIMIT 1',
      [email]
    );

    /* Check if this email already exists */
    if (oldUser.rows.length)
      return res.status(400).json({ message: "User already exists!" });

    /* Encrypt password */
    const hashedPassword = await bcrypt.hash(password, 12);

    /* Create a new user on database */
    const result: QueryResult<UserData> = await pool.query(
      'INSERT INTO "user"(username, email, password) VALUES($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );

    /* Sign in JWT */
    const token = await new jose.SignJWT({
      email: result.rows[0].email,
      id: result.rows[0].user_id,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("1h")
      .sign(secret);

    res.status(201).json({ result: result.rows[0], token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong! :(" });

    console.log(error);
  }
};
