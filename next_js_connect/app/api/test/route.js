import clientPromise from "@/lib/mongodb";

export async function GET(){
    const client = await clientPromise

    const db = client.db("next_js")

    return Response.json({
        message: "BD CONNECTED SUCCESSFULLY"
    })
}

// ---------------------------------------------


// import mongoose from "mongoose";

// export async function GET() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);

//     return Response.json({
//       success: true,
//       message: "MongoDB Connected",
//     });
//   } catch (error) {
//     console.log(error);
//     return Response.json({
//       success: false,
//       error: error.message,
//     });
//   }
// }