import { textMedium } from "@/foundation/styles"

type LegalSectionProps = {
    children: React.ReactNode
}

export const LegalSection = ({ children }: LegalSectionProps) => {
    return (<section className={`
        ${textMedium} 
        px-4
        py-2
        sm:px-12
        sm:py-4

        space-y-[1rem]
        leading-[2rem]

        [&>ul]:px-4
        [&>ul]:list-disc
        sm:[&>ul]:px-8

        [&>ol]:px-4
        [&>ol]:list-decimal
        sm:[&>ol]:px-8

        [&>h2]:font-primary
        [&>h2]:text-[1.5rem]
        [&>h2]:leading-[2rem]
        sm:[&>h2]:text-[2rem]
        sm:[&>h2]:leading-[2.5rem]

        [&>h3]:font-secondary
        [&>h3]:font-bold
        [&>h3]:text-[1.25rem]
        [&>h3]:leading-[1.5rem]
        sm:[&>h3]:text-[1.5rem]
        sm:[&>h3]:leading-[2.25rem]

        [&>h4]:font-secondary
        [&>h4]:font-bold
        `}>
        {children}
    </section>)
}