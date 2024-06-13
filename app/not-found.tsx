import { heading2, textLarge, textRegular } from "@/foundation/styles";
import { SectionContainer } from "@/lib/layout/SectionContainer";

/**
 * Default page
 * @returns 
 */
export default function NotFound() {
  return (
    <main>
      <SectionContainer className="flex flex-col gap-4">
        <section id="main" className="bg-gray-100 p-4 rounded-xl">
          <h1 className={`${heading2} text-black`}>Uh oh, it looks like that page doesn't exist.</h1>
          <p className={`${textLarge}`}>Please use the navigation menu to select another page.</p>
        </section>
      </SectionContainer>
    </main>
  )
}
