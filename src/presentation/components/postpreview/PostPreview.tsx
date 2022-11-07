import { toPng } from "html-to-image";
import { useRef } from "react";
import {
  Background,
  CodeEditorHeader,
  CodeEditorWrapper,
  Dot,
  Dots,
  FileName,
  PostArea,
  PostCode,
  PostContent,
  PostHeader,
  PostTag,
  PostTags,
  Splitter,
} from "./Components";

const initialText = `
(function repeat() {
eat();
sleep();
love_yourself();
repeat();
})();
`;

export default function PostPreview({ text }: PostPreviewProps) {
  const post = useRef<HTMLDivElement>(null);

  function saveImage() {
    if (post.current) {
      toPng(post.current).then((dataUrl) => {
        const a = document.createElement("a");
        a.href = "data:image/png;base64" + dataUrl;
        a.download = "Image.png";
        a.click();
        a.remove();
      });
    }
  }

  return (
    <Background>
      <PostArea ref={post} onClick={saveImage}>
        <PostHeader>Your Daily Programming</PostHeader>
        <CodeEditorWrapper>
          <CodeEditorHeader>
            <Dots>
              <Dot color={"#ffde59"} />
              <Dot color={"#7ed957"} />
              <Dot color={"#ff5757"} />
            </Dots>
            <FileName>index.js</FileName>
          </CodeEditorHeader>
          <Splitter></Splitter>
          <PostContent>
            <PostCode>{text || initialText}</PostCode>
            <PostTags>
              <PostTag>#Programming</PostTag>
            </PostTags>
          </PostContent>
        </CodeEditorWrapper>
      </PostArea>
    </Background>
  );
}

export interface PostPreviewProps {
  text?: string;
}
