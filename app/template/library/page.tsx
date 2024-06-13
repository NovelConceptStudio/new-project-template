import { Landing } from "./sections/landing";
import { Components } from "./sections/components";
import { Layout } from "./sections/layout";
import { Effects } from "./sections/effects";
import { Interactive } from "./sections/interactive";

export default function Home() {
  return (
    <main>
      <Landing />
      <Components />
      <Effects />
      <Interactive />
      <Layout />
    </main>
  );
}
