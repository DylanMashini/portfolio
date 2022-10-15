import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req, res) {
  return new ImageResponse(
    (
      <div
        tw="w-[1200px] h-[630px] text-center flex flex-row justify-center items-center m-0"
        style={{
          background:
            "linear-gradient(112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%)",
        }}
      >
        <h1 tw="font-bold drop-shaddow-2xl text-[15] m-0">
          Dylan Mashini's Development Portfolio
        </h1>
      </div>
    )
  );
}
