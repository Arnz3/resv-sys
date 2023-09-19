import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req){
  const data = await req.json();
  const { username, password } = data;

  //get user from database
  const user = await executeQuery(
    `SELECT * FROM user WHERE gebruikersnaam = "${username}"`
  );

  if(password == user[0].wachtwoord){
    return NextResponse.json(user[0]);
  }
  return NextResponse.json(null);
}