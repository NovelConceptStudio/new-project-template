import { smText } from "@/styles";

type Props = {
  className?: string
}

export default function Footer({ className }: Props) {
  return (
    <footer className={`flex flex-row justify-center py-8 border-t-black border-[1px] bg-white ${className}`}>
      <p className={`font-secondary ${smText}`}>&copy; Novel Concepts Studio</p>
    </footer>
  );
}
