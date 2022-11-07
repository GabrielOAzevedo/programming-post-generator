import React, { useState } from "react";
import "./App.css";
import { initialText } from "../application/code.context";
import Navbar from "./components/navbar/Navbar";
import TextEditor from "./components/texteditor/TextEditor";
import PostPreview from "./components/postpreview/PostPreview";

function App() {
  const [text, setText] = useState(initialText);
  return (
    <div className="App">
      <Navbar></Navbar>
      <TextEditor text={text} onChange={setText}></TextEditor>
      <PostPreview text={text}></PostPreview>
    </div>
  );
}

export default App;
