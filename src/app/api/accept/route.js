import executeQuery from "@/lib/db";
import sendVikingMail from "@/lib/mail";
import { NextResponse } from "next/server";


export async function POST(req){
  const data = await req.json();
  const { id, email, accept, title, body} = data;

  if (accept){
    executeQuery(`UPDATE reservering SET status='goedgekeurd' WHERE id='${id}';`);
    sendVikingMail(email, {title, body});
  }else{
    executeQuery(`UPDATE reservering SET status='afgewezen' WHERE id='${id}';`);
    sendVikingMail(email, {title, body});
  }
  
  return NextResponse.json(null);
}