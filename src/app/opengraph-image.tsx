import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tanuja Vankalas - Marathi & Hindi Actress";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    // We can load fonts here if needed, but for now we'll use system fonts for speed and reliability in this edge function
    return new ImageResponse(
        (
            <div
                style={{
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "60px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        maxWidth: "60%",
                    }}
                >
                    <div
                        style={{
                            fontSize: 24,
                            color: "#C8A96A", // Accent color
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: 20,
                            fontFamily: "serif",
                        }}
                    >
                        Professional Portfolio
                    </div>
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: "#1C1C1C",
                            lineHeight: 1,
                            marginBottom: 20,
                            fontFamily: "serif",
                        }}
                    >
                        Tanuja Vankalas
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: "#525252",
                            fontFamily: "sans-serif",
                        }}
                    >
                        Marathi & Hindi Television Actress
                    </div>
                    <div
                        style={{
                            marginTop: 40,
                            display: "flex",
                            alignItems: "center",
                            fontSize: 24,
                            color: "#737373",
                        }}
                    >
                        <span>📍 Thane, Mumbai</span>
                    </div>
                </div>

                {/* Abstract graphical element since we don't have the reliable local image path in edge yet */}
                <div
                    style={{
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: "#FAFAF8",
                        border: "4px solid #F2F2F0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 100,
                    }}
                >
                    🎭
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
