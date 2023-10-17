import executeQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req){
  const data = await req.json();
  const { naam, email, telefoon, datum, aantal, aankomst, opm } = data;

  //TODO: format date and time so it can go in the query eh

  const result = await executeQuery(
    `INSERT INTO reservering(naam, email, telefoon, datum, aantal, aankomst, opm) VALUES ('${naam}', '${email}', '${telefoon}', '${datum}', '${aantal}', '${aankomst}', '${opm}')`
  );
  return NextResponse.json(result);
}

//201 - resource added
