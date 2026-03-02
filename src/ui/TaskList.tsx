import { useTasks } from "../bll/useTasks";
import { TaskItem } from "./TaskItem";
type Props = {
  onSelect: (id: string | null, boardid: string | null) => void;
  selectedTaskId: string | null;
};

export const TaskList = ({ onSelect, selectedTaskId }: Props) => {
  const { tasks } = useTasks();

  if (tasks === null) {
    return <span>Loading...</span>;
  }
  if (tasks.length === 0) {
    return <span>No tasks</span>;
  }

  return (
    <div>
      <button
        onClick={() => {
          onSelect?.(null, null);
        }}
      >
        Reset
      </button>
      <hr></hr>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            isSelected={task.id === selectedTaskId}
            onTaskSelected={onSelect}
          />
        );
      })}
    </div>
  );
};
