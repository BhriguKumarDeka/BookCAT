import React, { useState, useEffect } from "react";

export default function Signup() {
  const [lampOn, setLampOn] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [ropeStretch, setRopeStretch] = useState(0);
  const [startY, setStartY] = useState(0);

  // Block mobile refresh only while dragging
  useEffect(() => {
    if (!dragging) return;

    const stopRefresh = (e) => {
      if (e.cancelable) e.preventDefault();
    };

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.documentElement.style.overscrollBehavior = "none";

    window.addEventListener("touchmove", stopRefresh, {
      passive: false,
    });

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overscrollBehavior =
        "";

      window.removeEventListener(
        "touchmove",
        stopRefresh
      );
    };
  }, [dragging]);

  const startDrag = (e) => {
    if (e.cancelable) e.preventDefault();

    const y =
      e.clientY || e.touches?.[0]?.clientY || 0;

    setStartY(y);
    setDragging(true);
  };

  const moveDrag = (e) => {
    if (!dragging) return;

    if (e.cancelable) e.preventDefault();

    const y =
      e.clientY || e.touches?.[0]?.clientY || 0;

    const delta = y - startY;

    setRopeStretch(
      Math.max(0, Math.min(delta, 100))
    );
  };

  const endDrag = () => {
    if (!dragging) return;

    setDragging(false);

    if (ropeStretch > 30) {
      setLampOn((prev) => !prev);
    }

    setRopeStretch(0);
  };

  // Add listeners ONLY when dragging
  useEffect(() => {
    if (!dragging) return;

    const options = { passive: false };

    window.addEventListener(
      "mousemove",
      moveDrag
    );
    window.addEventListener("mouseup", endDrag);

    window.addEventListener(
      "touchmove",
      moveDrag,
      options
    );

    window.addEventListener(
      "touchend",
      endDrag
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveDrag
      );
      window.removeEventListener(
        "mouseup",
        endDrag
      );
      window.removeEventListener(
        "touchmove",
        moveDrag
      );
      window.removeEventListener(
        "touchend",
        endDrag
      );
    };
  }, [dragging, startY, ropeStretch]);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "#0f172a",
        touchAction: dragging
          ? "none"
          : "auto",
        overscrollBehavior: "none",
      }}
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-white text-2xl mb-8">
        {lampOn ? "💡 ON" : "🌙 OFF"}
      </h1>

      <div className="flex flex-col items-center">
        <div
          style={{
            width: "4px",
            height: `${120 + ropeStretch}px`,
            background: "white",
          }}
        />

        <div
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "#3b82f6",
            transform: `translateY(${ropeStretch}px)`,
            cursor: "grab",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "40px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: lampOn
            ? "yellow"
            : "#334155",
          boxShadow: lampOn
            ? "0 0 100px yellow"
            : "none",
          transition: "0.3s",
        }}
      />
    </div>
  );
}