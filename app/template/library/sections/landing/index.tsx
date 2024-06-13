import { BgContainer } from "@/lib/layout/BgContainer";
import { SectionContainer } from "@/lib/layout/SectionContainer";
import { SectionContent } from "@/lib/layout/SectionContent";

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
                            classNames={{
                                container: 'items-center bg-white rounded-xl p-8',
                                description: 'flex flex-row justify-center'
                            }}
                            heading={'Library'}
                            description={
                                <div className="flex flex-col gap-4 w-1/2 ">
                                    <p>This template project maintains a library of utilities that can be leveraged to dramatically shrink development time. Each of these fall into one of four categories:</p>
                                    <ul className="list-disc px-8">
                                        <li>Components</li>
                                        <li>Effects</li>
                                        <li>Interactive</li>
                                        <li>Layout</li>
                                    </ul>
                                    <p>{`This page will demonstrate many (but not all!) of these components and how they should be used.`}</p>
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