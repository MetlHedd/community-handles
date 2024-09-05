import { redirect } from 'next/navigation';

export const GET = async (
  request: Request,
  searchParams: { [key: string]: string | string[] | undefined }
) => {
    if (typeof searchParams == "string" ) {
        redirect("https://fed.brid.gy/.well-known/host-meta/?"+searchParams);
    } else if(typeof searchParams == "object") {
        const searchParamsString = searchParams.toString();
        redirect("https://fed.brid.gy/.well-known/host-meta/?"+searchParamsString);
    } else {
        return new Response("Invalid searchParams type", { status: 400 });
    }
}
