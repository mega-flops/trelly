import { getTasks, type GlobalTaskListItem } from "../dal/api";
import { useState, useEffect } from "react";
export function useTasks() {
  const [tasks, setTasks] = useState<Array<GlobalTaskListItem> | null>(null);
  useEffect(() => {
    getTasks().then((json) => {
      setTasks(json.data);
    });
  }, []);
  return { tasks };
}
