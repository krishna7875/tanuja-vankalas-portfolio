import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 20,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1C1C1C",
                    fontWeight: 700,
                    borderRadius: "4px",
                    border: "1px solid #F2F2F0",
                }}
            >
                TV
            </div>
        ),
        {
            ...size,
        }
    );
}
