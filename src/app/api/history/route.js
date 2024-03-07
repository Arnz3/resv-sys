import executeQuery from "@/lib/db";


export async function GET(){
  const history = await executeQuery(
    "SELECT * FROM history"
  );

  return Response.json(history);
}