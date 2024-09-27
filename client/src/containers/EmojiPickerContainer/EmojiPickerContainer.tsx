import React, { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import IconButton from "../../common/components/IconButton/IconButton";
import { Smiley } from "phosphor-react";
import useHeigtElement from "../../hooks/useHeigtElement";

interface IEmojPicker {
  onSelected: ({ native }: any) => void;
  theme: "dark" | "light";
}

function EmojiPickerButton({ onSelected, theme }: IEmojPicker) {
  const [isShown, setIsShown] = useState<boolean>(false);
  const ref = useRef(null);
  const emojiMartHeight = useHeigtElement(ref, isShown);

  const styles = emojiMartHeight ? {
    top: `-${emojiMartHeight}px`,
    right: 0,
    opacity: 1,
  } : null;

  return (
    <div className="emojiPicker_wrapper" style={{ position: "relative" }}>
      {isShown && (
        <div
          ref={ref}
          style={{
            paddingBottom: "20px",
            background: "transparent",
            position: "absolute",
            opacity: 0,
            ...styles,
          }}
        >
          <Picker
            data={data}
            onEmojiSelect={onSelected}
            emojiSize={20}
            showPreview={false}
            // perLine={6}
            theme={theme}
          />
        </div>
      )}
      <IconButton onClick={() => setIsShown(!isShown)}>
        <Smiley size={24} />
      </IconButton>
    </div>
  );
}

export default EmojiPickerButton;
