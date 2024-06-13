import { textSmall, textTiny } from "@/foundation/styles";

type Props = {
  className?: string
}

export function Footer({ className }: Props) {
  return (
    <footer className={`flex flex-row justify-center py-8 border-t-black border-[1px] bg-white ${className}`}>
      <p className={`${textTiny}`}>&copy;{` 2024 Novel Concept Studio`}</p>
    </footer>
  );
}
