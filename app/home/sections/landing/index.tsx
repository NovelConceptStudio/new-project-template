import { SectionContainer } from "@/lib/layout/SectionContainer";
import { SectionContent } from "@/lib/layout/SectionContent";

export function Landing() {
    return (
        <section id="main_content">
            <SectionContainer>
                <SectionContent
                    heading={'Hello, World!'}
                    description={
                        <div className="flex flex-col gap-2">
                            <p>{`Follow the instructions found in "app/page.tsx" to get started`}</p>
                        </div>
                    }
                    isPrimary
                ></SectionContent>
            </SectionContainer>
        </section >
    )
}