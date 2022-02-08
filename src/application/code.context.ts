import { createContext } from "react";

const initialText = 
`/* Start editing below to update the frame on the side */
function helloWorld() {
    console.log("Hello World!");
}
`
const CodeContext = createContext(initialText);

export {
    CodeContext,
    initialText
}