import styled from "styled-components";

export const Background = styled.div`
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostArea = styled.div`
  width: 400px;
  height: 400px;
  background-color: #7ed957;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 48px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const PostHeader = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bold;
  align-self: flex-start;
  margin: 0;
  margin-bottom: 16px;
  margin-left: 8px;
  word-wrap: break-word;
  max-width: 200px;
`;

export const CodeEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  background-color: var(--bg-color);
  height: 100%;
  width: 100%;
  padding: 20px 24px;
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const CodeEditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FileName = styled.span`
  color: white;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
`;

export const Dots = styled.div`
  display: flex;
`;

export const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  margin: 2px;
  background-color: ${(props) => props.color};
`;

export const Splitter = styled.hr`
  height: 1px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 14px 0px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
`;

export const PostCode = styled.pre`
  color: white;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  white-space: pre-wrap;
`;

export const PostTags = styled.div`
  display: flex;
`;

export const PostTag = styled.span`
  color: #a0bdff;
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 600;
`;
