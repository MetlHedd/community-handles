import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
    return new Response(JSON.stringify(request.nextUrl.searchParams.toString()), { status: 200 });

    /*if (typeof searchParams == "string" ) {
        redirect("https://fed.brid.gy/.well-known/host-meta/?"+searchParams);
    } else if(typeof searchParams == "object") {
        const searchParamsString = searchParams.toString();
        redirect("https://fed.brid.gy/.well-known/host-meta/?"+searchParamsString);
    } else {
        return new Response("Invalid searchParams type", { status: 400 });
    }*/
}
