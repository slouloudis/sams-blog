import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await sql`CREATE TABLE IF NOT EXISTS comments ( 
    id varchar(255),
    slug varchar(255),
    username varchar(255),
    content text);`;

  return NextResponse.json({ message: "Table created" });
}