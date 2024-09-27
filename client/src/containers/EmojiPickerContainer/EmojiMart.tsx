import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface IEmojMart {
  onSelected: ({ native }: any) => void;
  theme: "dark" | "light";
  styles?: React.CSSProperties;
  ref: React.LegacyRef<HTMLDivElement> | undefined;
}

const EmojiMart = ({
  onSelected,
  theme = "light",
  styles,
  ref
}: IEmojMart) => {
  return (
    <div
    ref={ref}
      style={{
        background: "transparent",
        position: "absolute",
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
  );
};

export default EmojiMart;
