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
      headers: {
        "api-key": "d4f8ead1-df4a-4d4c-87db-1cfaa6822e5b",
      },
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
export const getTasks = () => {
  const promise: Promise<{ data: Array<GlobalTaskListItem> }> = fetch(
    "https://trelly.it-incubator.app/api/1.0/boards/tasks/",
    {
      headers: { "api-key": "d4f8ead1-df4a-4d4c-87db-1cfaa6822e5b" },
    },
  ).then((res) => res.json());
  return promise;
};
