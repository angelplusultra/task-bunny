import inquirer from "inquirer";
import { delay } from "utilitrix";
import signale from "signale";
import * as actions from "../actions";
export interface ChoicePrompt {
  answer: Answer;
}


export type ActionFunction = (typeof actions)[keyof typeof actions];

export type Answer =
  | "List Tasks"
  | "Add Task"
  | "Delete Task"
  | "Clear Tasks"
  | "Mark Complete";

export async function taskBunnyCli() {
  const actionRouter: {
    [key in Answer]: ActionFunction;
  } = {
    "Add Task": actions.addTask,
    "List Tasks": actions.getAndLogTasks,
    "Clear Tasks": actions.clearTasks,
    "Delete Task": actions.deleteTask,
    "Mark Complete": actions.markTaskComplete,
  };
  signale.log("Welcome to Task Bunny!");
  await delay(2000);
  console.clear();
  const choice = await inquirer.prompt<ChoicePrompt>({
    name: "answer",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "List Tasks",
      "Add Task",
      "Delete Task",
      "Clear Tasks",
      "Mark Complete",
    ],
  });

  actionRouter[choice.answer]();
}
