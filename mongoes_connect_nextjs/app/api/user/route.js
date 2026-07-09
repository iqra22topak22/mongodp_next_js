import {connectDB} from "@/lib/mongoose"

export async function GET(){
  await connectDB()
  console.log("api call and DB Connected")
  return Response.json({
    message:"DB connection find on terminal"
  })
}