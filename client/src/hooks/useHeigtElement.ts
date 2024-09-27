import React, { useEffect, useState } from "react";

function useHeigtElement(
  ref: React.MutableRefObject<any>,
  isExisting: boolean
) {
  const [actionsHeight, setActionsHeight] = useState<number>(0);
  useEffect(() => {
    if (ref) {
      setActionsHeight(ref.current?.clientHeight);
    }
  }, [isExisting, ref]);
  return actionsHeight;
}

export default useHeigtElement;
