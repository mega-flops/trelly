type TaskDetailsDto = {
  title: string;
  description: string | null;
  boardId: string;
  boardTitle: string;
  order: number;
  status: number;
  priority: number;
  addedAt: string;
};
export type TaskDetailsData = { id: string; attributes: TaskDetailsDto };

export const getTask = (boardId: string | null, selectedTaskId: string) => {
  const promise: Promise<{ data: TaskDetailsData }> = fetch(
    "https://trelly.it-incubator.app/api/1.0/boards/" +
      boardId +
      "/tasks/" +
      selectedTaskId,
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());
  return promise;
};

export type GlobalTaskListItem = {
  id: string;
  attributes: GlobalTaskListItemAttributes;
};

type GlobalTaskListItemAttributes = {
  title: string;
  boardId: string;
  status: number;
  priority: number;
  addedAt: string;
};
const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;

  return {
    "api-key": apiKey,
  };
};
export const getTasks = () => {
  const promise: Promise<{ data: Array<GlobalTaskListItem> }> = fetch(
    "https://trelly.it-incubator.app/api/1.0/boards/tasks/",
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());
  return promise;
};
