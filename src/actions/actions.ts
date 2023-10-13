import signale from "signale";
import { addTodo, getTodos, spaceLogger, writeToDataFile } from "../utils";
import inquirer from "inquirer";
import { custom } from "../config";

export function addTask(task: string[] | string) {
  const todo = Array.isArray(task) ? task.join(" ") : task;

  addTodo(todo);

  spaceLogger(`New tasks added!: ${todo}`, "success");
}
export async function deleteTask() {
  const data = getTodos();
  if (data.data.length === 0) {
		spaceLogger('You currently have no tasks', 'error')
    process.exit(1);
  }
  const answer = await inquirer.prompt<{
    delete: number;
  }>({
    name: "delete",
    type: "list",
    choices: data.data.map((todo) => ({
      name: todo.body,
      value: todo.id as number,
    })),
  });

  data.data = data.data.filter((todo) => todo.id !== answer.delete);

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
    custom.task(`${todo.body}`);
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
