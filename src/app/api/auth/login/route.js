import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";
const crypto = require('crypto');

export async function POST(req){
  const data = await req.json();
  const { username, password } = data;

  //get user from database
  const user = await executeQuery(
    `SELECT * FROM user WHERE gebruikersnaam = "${username}"`
  );
  const salt = user[0].salt;
  const hashedPass = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString('hex');

  if(hashedPass == user[0].wachtwoord){
    return NextResponse.json(user[0]);
  }
  return NextResponse.json(null);
}