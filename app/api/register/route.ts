import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({ error: "This endpoint has moved. Use the backend API." }, { status: 410 })
} 