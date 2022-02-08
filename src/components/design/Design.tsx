import "./Design.css";
import { toPng } from 'html-to-image';
import { useRef } from "react";

const initialText = 
`(function repeat() {
eat();
sleep();
love_yourself();
repeat();
})();
`

export default function Design({text}: DesignProps) {
    const post = useRef<HTMLDivElement>(null);

    function saveImage() {
        if (post.current) {
            toPng(post.current).then(dataUrl => {
                const a = document.createElement('a');
                a.href = "data:image/png;base64" + dataUrl;
                a.download = "Image.png";
                a.click();
                a.remove();
            })
        }
    }

    return (
        <div className="bg">
            <div className="post-area" ref={post} onClick={saveImage}>
                <h3>Your Daily Programming</h3>
                <div className="code-editor">
                    <div className="code-editor-header">
                        <div className="dots">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <span>index.js</span>
                    </div>
                    <hr></hr>
                    <div className="content">
                        <pre>
                            {text || initialText}
                        </pre>
                        <div className="tags">
                            <span className="tag">#Programming</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export interface DesignProps {
    text?: string;
}
