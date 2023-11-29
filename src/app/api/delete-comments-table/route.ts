import {sql} from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'

// ONLY RUN THIS ONCE LOCALLY, DELETE FILE IF NOT USING.
// IF YOU PUSH TO GITHUB THIS WILL RUN ON VERCEL WHEN BUILDING AND YOU
// WILL ALWAYS DELTE YOUR TABLE. 
export async function GET(request: NextRequest) {
    // await sql`DROP TABLE comments;`;
    return NextResponse.json({message: 'this holds my delte table func'})
}