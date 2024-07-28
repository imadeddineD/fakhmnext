
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    try {
        const body = await req.json();

        const { name, number , message } = body;

        
        if (!name) {
            return new NextResponse("name is required", { status: 400 });
        }

        if (!number) {
            return new NextResponse("Image URL is required", { status: 400 });
        }

        if (!message) {
            return new NextResponse("message is required", { status: 400 });
        }

    

        const Home = await db.order.create({
            data: {
                name,
                number,
                message
            }
        });

        return NextResponse.json(Home);
    } catch (error) {
        console.log('[HOME_POST]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}