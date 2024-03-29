import { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import { TextEditorWrapper } from "./styled";

let isEditorCreated = false;

export default function TextEditor({ text, onChange }: TextEditorProps) {
  const editor = useRef<HTMLDivElement>(null);

  function onTextChange(
    instance: CodeMirror.Editor,
    changes: CodeMirror.EditorChange
  ) {
    const text = instance.getValue();
    onChange(text);
  }

  useEffect(() => {
    const current = editor.current;
    if (current && !isEditorCreated) {
      const txtEditor = CodeMirror(editor.current, {
        value: text,
        mode: "javascript",
        lineNumbers: true,
        theme: "monokai",
      });

      txtEditor.on("change", onTextChange);
      isEditorCreated = true;
    }
  });

  return <TextEditorWrapper ref={editor}></TextEditorWrapper>;
}

interface TextEditorProps {
  text: string;
  onChange: (text: string) => void;
}
