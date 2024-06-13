import { BgContainer } from "@/lib/layout/BgContainer";
import { SectionContainer } from "@/lib/layout/SectionContainer";
import { SectionContent } from "@/lib/layout/SectionContent";
import { TwoColumn } from "@/lib/layout/TwoColumn";

export function Landing() {
    return (
        <section id="main_content">
            <BgContainer className={{
                container: 'pt-24 -mt-24',
                background: "bg-sky-400 -skew-y-6"
            }}>
                <BgContainer className={{
                    container: 'pt-24 -mt-24',
                    background: "bg-sky-400 skew-y-6"
                }}>
                    <SectionContainer>
                        <SectionContent
                            heading={'Welcome to the Novel Concept template website!'}
                            description={
                                <div className="flex flex-col gap-2">
                                    <p>This website is intended to mirror a real, production-grade website that can be sold to clients.</p>
                                    <p>It will cover the basic paradigms used throughout the development process, showcase components, explain file structure, and more.</p>
                                    <p>Since this is also a template, new projects will default to this website. This means the template will need to be removed manually, but it also means plenty of code snippets and examples will be included from the very beginning. </p>
                                </div>
                            }
                            isPrimary
                        ></SectionContent>
                    </SectionContainer>
                </BgContainer>
            </BgContainer>
        </section >
    )
}