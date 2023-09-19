import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req){
  const data = await req.json();
  const { username, password } = data;

  //TODO: check if username exists

  const result = await executeQuery(
    `INSERT INTO user(gebruikersnaam, wachtwoord) VALUES ('${username}', '${password}')`
  );
  return NextResponse.json(result);
}