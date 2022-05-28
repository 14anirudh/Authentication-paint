import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const changeRed = ()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "red"
  }
  const changeBlue = ()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "blue"
  }
  const changeGreen = ()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "green"
    
  }
  const changeBlack = ()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "black"
    
  }
  const redfilling = ()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle="red"
    context.fill();
    
  }
  const bluefilling = ()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle="blue"
    context.fill();
    
  }
  const greenfilling = ()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle="green"
    context.fill();
    
  }
  const blackfilling = ()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle="black"
    context.fill();
    
  }

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        changeRed,
        changeBlue,
        changeGreen,
        changeBlack,
        redfilling,
        bluefilling,
        greenfilling,
        blackfilling,
        draw,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
