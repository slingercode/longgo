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
    <main className="mx-auto h-screen  max-w-screen-lg overflow-hidden p-5">
      <TipTap />
    </main>
  );
}
