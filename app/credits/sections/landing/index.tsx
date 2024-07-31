import { textRegular } from "@/foundation/styles";
import { SectionContainer } from "@/lib/layout/SectionContainer";
import { SectionContent } from "@/lib/layout/SectionContent";

export function Landing() {
    return (
        <section id="main_content">
            <SectionContainer className="flex flex-col gap-8">
                <SectionContent
                    heading={'Credits'}
                    description={
                        <div className="flex flex-col gap-4">
                            <p>{`Assets used on this website:`}</p>
                            <ul className={`text-small`}>
                                <li>
                                    <Credit
                                        asset={`"Wiggle" pattern`}
                                        assetHref={"https://heropatterns.com/"}
                                        author={"Hero Patterns"}
                                        license={"ccby3.0"}
                                    />
                                </li>
                            </ul>
                        </div>
                    }
                    classNames={{
                        container: 'bg-licorice-900 rounded-lg p-4 lg:max-w-[66%]'
                    }}
                    isPrimary
                />
            </SectionContainer>
        </section >
    )
}

type CreditProps = {
    asset: string
    assetHref: string
    author: string
    license: "ccby3.0" | "ccby4.0" | 'mit',
    alterations?: string
}

const Credit = (
    {
        asset,
        assetHref,
        author,
        license,
        alterations = "No alterations made."
    }: CreditProps
) => {
    const generateLicenseLink = () => {
        switch (license) {
            case ('ccby3.0'):
                return <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>
            case ('ccby4.0'):
                return <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
        }
    }
    return (<div className={`flex flex-row gap-2 ${textRegular}`}>
        <p><a href={assetHref}>{asset}</a> by {author}</p>
        <p>Released under {generateLicenseLink()}.</p>
        <p>{alterations}</p>
    </div>)

}