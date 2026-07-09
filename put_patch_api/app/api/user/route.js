import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  const db = await connectDB();

  const users = await db.collection("next-js").find({}).toArray();

  return NextResponse.json({ users });
}

export async function POST(req) {
  const db = await connectDB();

  const body = await req.json();

  const result = await db.collection("next-js").insertOne(body);

  return NextResponse.json({
    message: "User created successfully",
    data: result,
  });
}

// UPDATE (PUT)
export async function PUT(req) {
  const db = await connectDB();

  const body = await req.json();

  const { id, name, email } = body;

  if (!id) {
    return NextResponse.json(
      { error: "id is required" },
      { status: 400 }
    );
  }

  const result = await db.collection("next-js").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        email,
      },
    }
  );

  return NextResponse.json({
    message: "User updated successfully",
    data: result,
  });
}

// OPTIONAL: PATCH (partial update)
export async function PATCH(req) {
  const db = await connectDB();

  const body = await req.json();

  const { id, ...updatedfields } = body;

  if (!id) {
    return NextResponse.json(
      { error: "id is required" },
      { status: 400 }
    );
  }

  const result = await db.collection("next-js").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: updatedfields,
    }
  );

  return NextResponse.json({
    message: "User partially updated successfully",
    data: result,
  });
}