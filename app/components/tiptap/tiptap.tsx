import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";

export function TipTap() {
  const editor = useEditor({
    autofocus: "start",
    editorProps: {
      attributes: {
        class:
          "h-full overflow-auto bg-white p-2 focus-visible:outline-none dark:bg-neutral-950 dark:text-white sm:rounded-sm sm:border",
      },
    },
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "What are you thinking?",
        emptyEditorClass:
          "first:before:pointer-events-none first:before:float-left first:before:h-0 first:before:text-gray-300 first:before:content-[attr(data-placeholder)] dark:first:before:text-gray-400",
      }),
    ],
  });

  return (
    <EditorContent
      editor={editor}
      className="h-full sm:rounded-sm sm:drop-shadow-md"
    />
  );
}
