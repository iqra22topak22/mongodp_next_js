import clientPromise from "@/lib/mongodb";

export async function GET(){
    const client = await clientPromise

    const db = client.db("next_js")

    return Response.json({
        message: "BD CONNECTED SUCCESSFULLY"
    })
}

