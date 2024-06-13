'use client'
import { heading2, textLarge } from "@/foundation/styles";
import { SectionContainer } from "@/lib/layout/SectionContainer";

export function Effects() {
    return (
        <section>
            <SectionContainer className={`flex flex-col gap-8 ${textLarge}`}>
                <div className={`flex flex-col gap-4`}>
                    <h2 className={`${heading2}`}>Effects</h2>
                </div>
            </SectionContainer>
        </section>
    )
}