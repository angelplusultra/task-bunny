import inquirer from "inquirer";
import { addTodo, getTodos } from "../utils";
import { delay } from "utilitrix";
import signale from "signale";
import * as actions from "../actions";
export interface ChoicePrompt {
  answer: "List Tasks" | "Add Task" | "Delete Task" | "Clear Tasks";
}

export interface TaskPrompt {
  body: string;
}

export async function taskBunnyCli() {
  signale.log("Welcome to Task Bunny!");
  await delay(3000);
  console.clear();
  const choice = await inquirer.prompt<ChoicePrompt>({
    name: "answer",
    type: "list",
    message: "What would you like to do?",
    choices: ["List Tasks", "Add Task", "Delete Task", "Clear Tasks"],
  });

  if (choice.answer === "Add Task") {
    const task = await inquirer.prompt<TaskPrompt>({
      name: "body",
      type: "input",
      message: "Enter Task: \n",
    });
    actions.addTask(task.body);
  }
  if (choice.answer === "List Tasks") {
    actions.getAndLogTasks();
  }
  if (choice.answer === "Delete Task") {
    actions.deleteTask();
  }
	if(choice.answer === 'Clear Tasks'){
		actions.clearTasks()
	}
}
