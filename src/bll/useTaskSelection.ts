import { useState } from "react";
export function useTaskSelection() {
  const [selectedTaskId, setSelectedTaskId] = useState<null | string>(null);
  const [boardId, setBoardId] = useState<null | string>(null);

  return { selectedTaskId, setSelectedTaskId, boardId, setBoardId };
}
