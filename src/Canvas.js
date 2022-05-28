import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
import "./Canvas.css"

export function Canvas() {
  const { canvasRef, prepareCanvas, startDrawing, finishDrawing, draw } =
    useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);
  const { clearCanvas } = useCanvas();
  const { changeRed } = useCanvas();
  const { changeBlue } = useCanvas();
  const { changeGreen } = useCanvas();
  const { changeBlack } = useCanvas();
  const { redfilling } = useCanvas();
  const { bluefilling } = useCanvas();
  const { greenfilling } = useCanvas();
  const { blackfilling } = useCanvas();

  return (
    <div className="main">
      <h1 className="heading">DESIGNING ARTBOARD</h1>
      <div className="buttons">
    <button
      className="btn"
      onClick={clearCanvas}
    >
      CLEAR THE BOARD
    </button>
    <button
      className="btn"
      onClick={changeRed}>
      change pen to red
    </button>
    <button
      className="btn"
      onClick={changeBlue}>
      change pen to blue
    </button>
    <button
      className="btn"
      onClick={changeGreen}>
      change pen to green
    </button>
    <button
      className="btn"
      onClick={changeBlack}>
      change pen to black
    </button>
    <button
      className="btn"
      onClick={redfilling}>
      fill in red color
    </button>
    <button
      className="btn"
      onClick={bluefilling}>
      fill in blue color
    </button>
    <button
      className="btn"
      onClick={greenfilling}>
      fill in green color
    </button>
    <button
      className="btn"
      onClick={blackfilling}>
      fill in black color
    </button>
    </div>
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
    </div>
  );
}
