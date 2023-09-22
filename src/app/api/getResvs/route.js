import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req){
  const reserveringen = await executeQuery(
    `SELECT * FROM reservering`
  )

  return NextResponse.json(reserveringen);
}