import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";
const crypto = require('crypto');

export async function POST(req){
  const data = await req.json();
  const { username, password } = data;

  // TODO: Test als dit werk maar wel nog database aanpassen

  // create salt with good random generator
  const salt = crypto.randomBytes(16).toString('hex');

  //hash password
  const hashedPass = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString('hex');

  //TODO: check if username exists

  const result = await executeQuery(
    `INSERT INTO user(gebruikersnaam, wachtwoord, salt) VALUES ('${username}', '${hashedPass}', '${salt}')`
  );
  return NextResponse.json(result);
}