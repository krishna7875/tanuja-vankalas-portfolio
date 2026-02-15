"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TestPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Container className="py-24 space-y-24">

                {/* Colors */}
                <div>
                    <SectionHeading title="Colors" subtitle="Design System" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="h-24 bg-background border flex items-center justify-center">Background</div>
                        <div className="h-24 bg-foreground text-background flex items-center justify-center">Foreground</div>
                        <div className="h-24 bg-accent flex items-center justify-center">Accent</div>
                        <div className="h-24 bg-muted flex items-center justify-center">Muted</div>
                    </div>
                </div>

                {/* Typography Scale */}
                <div>
                    <SectionHeading title="Typography" subtitle="Inter & Playfair" />
                    <div className="space-y-6 border p-8 rounded-xl bg-white/50">
                        <Heading level={1}>Heading 1 (4xl-6xl)</Heading>
                        <Heading level={2} family="serif">Heading 2 Serif (3xl-4xl)</Heading>
                        <Heading level={3}>Heading 3 (xl-2xl)</Heading>
                        <Heading level={4}>Heading 4 (lg-xl)</Heading>
                        <Text variant="large">Body Large: The quick brown fox jumps over the lazy dog.</Text>
                        <Text>Body Default: The quick brown fox jumps over the lazy dog.</Text>
                        <Text variant="muted">Muted Text: The quick brown fox jumps over the lazy dog.</Text>
                        <Text variant="small">Small Text: The quick brown fox jumps over the lazy dog.</Text>
                    </div>
                </div>

                {/* Buttons */}
                <div>
                    <SectionHeading title="Buttons" subtitle="Interactions" />
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button>Primary Button</Button>
                        <Button variant="secondary">Outline Button</Button>
                        <Button variant="ghost">Ghost Button</Button>
                        <Button disabled>Disabled</Button>
                    </div>
                </div>

                {/* Layout */}
                <div>
                    <SectionHeading title="Container" subtitle="Layout" />
                    <div className="bg-muted p-4 rounded-xl text-center">
                        <Text>This content is inside a Container (max-w-6xl)</Text>
                    </div>
                </div>

            </Container>
        </main>
    );
}
