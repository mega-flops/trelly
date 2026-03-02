import { useTaskDetails } from "../bll/useTaskDetails";
import styles from "./TaskDetails.module.css";
type Props = { selectedTaskId: string | null; boardId: string | null };

export const TaskDetails = ({ selectedTaskId, boardId }: Props) => {
  const { taskDetails } = useTaskDetails(selectedTaskId, boardId);

  return (
    <div className={styles.task}>
      <h1>Task details</h1>
      {taskDetails === null &&
        selectedTaskId === null &&
        "Task is not selected"}
      {selectedTaskId && !taskDetails && "Loading..."}
      {selectedTaskId &&
        taskDetails &&
        selectedTaskId !== taskDetails.id &&
        "Loading..."}
      {taskDetails && (
        <ul>
          <li>
            <span>title - </span>
            {taskDetails?.attributes?.title || "Task is not selected"}
          </li>
          <li>
            <span>boardTitle - </span>
            {taskDetails?.attributes?.boardTitle || "no board title"}
          </li>
          <li>
            <span>description - </span>
            {taskDetails?.attributes?.description || "no description"}
          </li>
        </ul>
      )}
    </div>
  );
};
