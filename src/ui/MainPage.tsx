import { TaskList } from "./TaskList";
import { TaskDetails } from "./TaskDetails";
import { useTaskSelection } from "../bll/useTaskSelection";
import styles from "./MainPage.module.css";
import { Header } from "./Header";

export function MainPage() {
  const { selectedTaskId, setSelectedTaskId, boardId, setBoardId } =
    useTaskSelection();
  const onSelect = (id: string | null, boardid: string | null) => {
    setSelectedTaskId(id);
    setBoardId(boardid);
  };
  return (
    <div className={styles.mainpage}>
      <Header />
      <TaskList onSelect={onSelect} selectedTaskId={selectedTaskId} />
      <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId} />
    </div>
  );
}
