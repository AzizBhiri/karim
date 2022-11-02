import React, { useRef, useEffect } from "react";
import "../Styles/Canvas.css";
import background from "../background";

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    background(context, canvas);
  }, []);
  return <canvas ref={canvasRef} id="atoms" />;
}

export default Canvas;
