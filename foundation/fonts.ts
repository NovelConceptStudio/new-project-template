import { Gelasio, Plus_Jakarta_Sans } from "next/font/google";

const primary = Gelasio({
    subsets: ["latin"],
    variable: '--font-primary',
    weight: "400"
  });
  
const secondary = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-secondary' })

/**
 * Remember to add any font variables to the 'tailwind.config.ts' file
 */
export const fonts = `${primary.variable} ${secondary.variable}`