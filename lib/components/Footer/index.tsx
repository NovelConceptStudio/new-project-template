import { textRegular } from "@/foundation/styles";
import { BgContainer } from "@/lib/layout/BgContainer";
import Link from "next/link";

type Props = {
  className?: string
}

export function Footer({ className }: Props) {
  return (
    <div className={`flex flex-col mb-[-1rem]`}>
      <BgContainer className={{
        background: `bg-onyx rotate-180 !bottom-[-1rem]`,
        container: `pt-[7.5%]`
      }}>
        <div className={`h-16`} />
      </BgContainer>
        <footer className={`flex flex-col w-full px-4 py-8 sm:px-8 sm:py-12 gap-4 sm:gap-8 flex-wrap bg-onyx text-white-smoke bg-leading-[150%] ${textRegular} ${className}`}>
          <div className={`flex flex-col sm:flex-row justify-around gap-y-8`}>
            <div className={`flex flex-row gap-x-12 gap-y-8 flex-wrap justify-around items-center`}>
              <div className="flex flex-col gap-2">
                <Link className="underline" href="/">Home</Link>
                <Link className="underline" href="/privacyPolicy">Privacy Policy</Link>
                <Link className="underline" href="/termsAndConditions">{`Terms & Conditions`}</Link>
                <Link className="underline" href="/credits">Assets used on this website</Link>
              </div>
            </div>
            <div className="flex flex-row gap-x-12 gap-y-8 flex-wrap text-left justify-around items-center">
              <div className="flex flex-col">
                <p>{`Business hours (all times PST)`}</p>
                <table>
                  <tbody>
                    <tr>
                      <th>{`Sunday:`}</th>
                      <td>{`Closed`}</td>
                    </tr>
                    <tr>
                      <th>{`Monday:`}</th>
                      <td>{`9 AM - 6 PM`}</td>
                    </tr>
                    <tr>
                      <th>{`Tuesday:`}</th>
                      <td>{`9 AM - 6 PM`}</td>
                    </tr>
                    <tr>
                      <th>{`Wednesday:`}</th>
                      <td>{`9 AM - 6 PM`}</td>
                    </tr>
                    <tr>
                      <th>{`Thursday:`}</th>
                      <td>{`9 AM - 6 PM`}</td>
                    </tr>
                    <tr>
                      <th>{`Friday:`}</th>
                      <td>{`9 AM - 6 PM`}</td>
                    </tr>
                    <tr>
                      <th>{`Saturday:`}</th>
                      <td>{`9 AM - 6 PM`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <p>{`Want to chat?`}</p>
                  <p><a className="underline" href="tel:+12092132347">{`(209) 213 - 2347`}</a></p>
                </div>
                <div className="flex flex-col">
                  <p>{`Found a bug on this website?`}</p>
                  <p><a className="underline" href="mailto:issues@novelconcept.studio">{`issues@novelconcept.studio`}</a></p>
                </div>
                <div className="flex flex-col">
                  <p>{`Questions?`}</p>
                  <p><a className="underline" href="mailto:support@novelconcept.studio">{`support@novelconcept.studio`}</a></p>
                </div>
              </div>
            </div>
          </div>
          <p className={`flex flex-row w-full justify-center`}>&copy;{` 2024 Novel Concept Studio`}</p>
        </footer>
    </div>


  );
}