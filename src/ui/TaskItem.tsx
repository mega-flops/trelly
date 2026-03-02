import type { GlobalTaskListItem } from "../dal/api";
import styles from "./TaskItem.module.css";
import clsx from "clsx";
type Props = {
  isSelected: boolean;
  onTaskSelected: (id: string | null, boardid: string | null) => void;
  task: GlobalTaskListItem;
};

export function TaskItem({ task, isSelected, onTaskSelected }: Props) {
  const titleClassName = clsx({ [styles.done]: task.attributes.status === 2 });
  const itemName = clsx({
    [styles.noncond]: true,
    [styles.itemSelected]: isSelected,
    [styles.priority]: task.attributes.priority > 1,
  });
  return (
    <div
      onClick={() => {
        onTaskSelected?.(task.id, task.attributes.boardId);
      }}
    >
      <div className={itemName}>
        <div>
          <p>
            Заголовок:
            <span className={titleClassName}>{task.attributes.title}</span>
          </p>
          <p>
            Статус:
            <input
              type="checkbox"
              checked={task.attributes.status === 2 ? true : false}
            ></input>
          </p>
          <p>
            Дата создания задачи:{" "}
            {new Date(task.attributes.addedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <br></br>
    </div>
  );
}
