import executeQuery from "@/lib/db";


export async function GET(){
  const history = await executeQuery(
    "SELECT * FROM hisory"
  );

  return Response.json(history);
}