import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
  const result = await executeQuery(
    `SELECT * FROM reservering`
  );
  
  let untouched = result.filter((res) => res.status == "untouched");
  let goedgekeurd = result.filter((res) => res.status == "goedgekeurd");
  let afgewezen = result.filter((res) => res.status == "afgewezen");

  const reserveringen = {
    untouched: untouched,
    goedgekeurd: goedgekeurd,
    afgewezen: afgewezen
  }


  return NextResponse.json(reserveringen);
}