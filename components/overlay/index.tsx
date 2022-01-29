import React from "react";

interface OverlayPropI {
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Overlay: React.FC<OverlayPropI> = (props: OverlayPropI) => {
  const { onClose, children } = props;

  const closeOutSide = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose && onClose();
    e.stopPropagation();
  };

  return (
    <div className={"overlay"} onClick={(e) => closeOutSide(e)}>
      <div className={"content"}>
        <div className={"close_btn"} onClick={onClose} />
        {children}
      </div>
    </div>
  );
};
