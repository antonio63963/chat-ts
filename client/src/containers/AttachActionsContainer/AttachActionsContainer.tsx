import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { Camera, Image, Sticker, File, User, Paperclip } from "phosphor-react";

import "./attachActions.css";

import IconButton from "../../common/components/IconButton/IconButton";

import { Colors } from "../../common/constants";
import useHeigtElement from "../../hooks/useHeigtElement";

const actions = [
  {
    color: Colors.xlBlue,
    icon: <Image size={24} />,
    title: "Photo/Video",
  },
  {
    color: Colors.xBlue,
    icon: <Sticker size={24} />,
    title: "Stickers",
  },
  {
    color: Colors.lBlue,
    icon: <Camera size={24} />,
    title: "Image",
  },
  {
    color: Colors.blue,
    icon: <File size={24} />,
    title: "Document",
  },
  {
    color: Colors.darkBlue,
    icon: <User size={24} />,
    title: "Contact",
  },
];

function AttachActions() {
  const [shownActions, setShowActions] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const actionsHeight = useHeigtElement(ref, shownActions)

  return (
    <div className="attachActions_wrapper">
      {shownActions ? (
        <div
          ref={ref}
          style={{ top: `-${actionsHeight}px` }}
          className="attachActions_actions"
        >
          {actions.map((a, idx) => {
            return (
              <IconButton key={idx} isFilled bgColor={a.color} onClick={() => {}}>
                {a.icon}
              </IconButton>
            );
          })}
        </div>
      ) : null}
      <IconButton
        onClick={() => {
          setShowActions(!shownActions);
        }}
      >
        <Paperclip size={24} />
      </IconButton>
    </div>
  );
}

export default AttachActions;
