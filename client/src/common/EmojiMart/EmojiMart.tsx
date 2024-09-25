import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface IEmojPicker {
  onSelected: ({ native }: any) => void;
  isShown: boolean;
  theme: 'dark' | 'light';
}

const EmojiMart = ({ onSelected, isShown, theme = 'light' }: IEmojPicker) => {
  return (
    <div
      style={{
        background: "transparent",
        position: "absolute",
        top: '-435px',
        right: '100px'
      }}
    >
      {isShown ? (
        <Picker
          data={data}
          onEmojiSelect={onSelected}
          emojiSize={20}
          showPreview={false}
          // perLine={6}
          theme={theme}
        />
      ) : null}
    </div>
  );
};

export default EmojiMart;
