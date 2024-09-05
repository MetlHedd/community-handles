import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
    redirect("https://fed.brid.gy/.well-known/host-meta/?"+request.nextUrl.searchParams.toString());
}
