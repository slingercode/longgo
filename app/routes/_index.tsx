import { Dropdown } from "~/components/dropdown";
import { TipTap } from "~/components/tiptap";

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Long:go" },
    { name: "Long:go", content: "Share your thoughts" },
  ];
};

export default function Index() {
  return (
    <>
      <nav className="fixed bottom-0 right-0 z-10 mb-3 mr-3 lg:top-0 lg:mr-5 lg:mt-5">
        <Dropdown />
      </nav>

      <main className="h-[100dvh] p-5 lg:mx-auto lg:max-w-screen-lg">
        <TipTap />
      </main>
    </>
  );
}
