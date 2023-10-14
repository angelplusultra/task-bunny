import signale from "signale";
import { addTodo, getTodos, spaceLogger, writeToDataFile } from "../utils";
import inquirer from "inquirer";
import { custom } from "../config";

export async function addTask(task: string[] | void) {
  interface TaskPrompt {
    body: string;
  }
  let todo = Array.isArray(task) ? task.join(" ") : task;
  if (!todo) {
    const taskObject = await inquirer.prompt<TaskPrompt>({
      name: "body",
      type: "input",
      message: "Enter Task: \n",
    });
    todo = taskObject.body;
  }
  addTodo(todo);

  spaceLogger(`New tasks added!: ${todo}`, "success");
}
export async function deleteTask(id: string | void) {
  const data = getTodos();
  if (data.data.length === 0) {
    spaceLogger("You currently have no tasks", "error");
    process.exit(1);
  }
  if (id === undefined) {
    const answer = await inquirer.prompt<{
      delete: string;
    }>({
      name: "delete",
      type: "list",
      choices: data.data.map((todo) => ({
        name: todo.body,
        value: todo.id,
      })),
    });
    id = answer.delete;
  }
  const taskId = Number(id);

  const task = data.data.find((task) => task.id === taskId);
  if (!task) {
    spaceLogger("No task exists with the provided ID", "error");
    process.exit(1);
  }
  data.data = data.data.filter((todo) => todo.id !== taskId);

  writeToDataFile(data);

  spaceLogger("Task deleted", "success");
}
export function getAndLogTasks() {
  const { data: tasks } = getTodos();
  console.log();
  if (tasks.length === 0) {
    signale.error("You currently have no tasks");
    console.log();
    process.exit(1);
  }

  tasks.forEach((todo) => {
    custom.task({
      suffix: !todo.completed ? `[❗️]` : `[✅]`,
      message: todo.body,
      prefix: `[${todo.id}]`,
    });
    console.log();
    console.log("-----------------------------------------");
    console.log();
  });
}

export function clearTasks() {
  const data = getTodos();
  writeToDataFile({
    data: [],
    latestId: data.latestId,
  });
  spaceLogger("All tasks have been deleted", "success");
}

export async function markTaskComplete(id: string | void) {
  const data = getTodos();
  if (data.data.length === 0) {
    spaceLogger("No tasks", "error");
    process.exit(1);
  }

  let taskId = id;
  if (!id) {
    const choices = data.data.map((task) => ({
      name: task.body,
      value: task.id,
    }));
    const taskSelection = await inquirer.prompt({
      name: "id",
      type: "list",
      message: "Select the task: ",
      choices,
    });
    taskId = taskSelection.id;
  }
  const task = data.data.find((task) => task.id === Number(taskId));
  if (!task) {
    spaceLogger("No task exists with that ID", "error");
  } else {
    task.completed = true;

    writeToDataFile(data);

    spaceLogger("Task has been marked complete", "complete");
  }
}
