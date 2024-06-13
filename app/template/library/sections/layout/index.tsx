'use client'
import { heading2, textLarge } from "@/foundation/styles";
import { SectionContainer } from "@/lib/layout/SectionContainer";
import { SectionContent } from "@/lib/layout/SectionContent";
import { TwoColumn } from "@/lib/layout/TwoColumn";

export function Layout() {
    return (
        <section>
            <SectionContainer className={`flex flex-col gap-8 ${textLarge}`}>
                <div className={`flex flex-col gap-4`}>
                    <h2 className={`${heading2}`}>Layout</h2>
                    <p>{`Layouts' sole responsibilities are handling their elements' organization and spacing.`}</p>
                    <p>{`Layouts typically don't come with much styling applied. Styles are delegated to the elements supplied to the layout.`}</p>
                    <p>{`A ready example of this is the "SectionContainer" element. This element is intended to wrap all section content and apply horizontal and vertical padding as the website is resized -- and that's all.`}</p>
                    <p>{`Another good example can be found in the landing section of this page. That's an example of the "BgContainer". That element applies a background underneath the content provided. The background can then be modified in any way without affecting the content supplied. That's how I am able to skew the background without changing the text content.`}</p>
                    <p>{`You can see some more examples below:`}</p>
                    <TwoColumn
                        column1={
                            <SectionContent
                                subheading={`Section Components`}
                                heading={`This is a "SectionContent" component.`}
                                description={<div className="flex flex-col gap-4">
                                    <p>{`It is contained within a "TwoColumn" container. The "TwoColumn" container component handles moving content from "row" to "column" as the screen resizes.`}</p>
                                    <p>{`Styles can be overwritten by providing the optional "classNames" prop.`}</p>
                                    <p>{`The blue square to the right is a placehholder for an image or a block of content.`}</p>
                                </div>}
                                classNames={{ container: 'bg-gray-100 rounded-xl p-8' }}
                            />
                        }
                        column2={<div className="flex aspect-square min-w-[100px] w-2/3 bg-sky-400 rounded-xl" />}
                    />
                </div>
            </SectionContainer>
        </section>
    )
}