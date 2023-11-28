


import { NextApiRequest, NextApiResponse } from "next";




export const GET = async () => {
    const resumeUrl = "https://resume-bucket-rohan.s3.ap-south-1.amazonaws.com/websiteresume.pdf";

    console.log("GET RESUME");

    try {
        const response = await fetch(resumeUrl);
        const blob = await response.blob();


        return new Response(blob, { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Cannot Fetch File", { status: 500 });
    }

}