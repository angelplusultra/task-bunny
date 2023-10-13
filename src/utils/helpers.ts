import { readFileSync, writeFileSync } from "fs";
import { dataFilePath } from "../config";
import signale, { DefaultMethods, LoggerFunc, SignaleBase } from "signale";
interface Data {
  latestId: number;
  data: Todo[];
}
interface Todo {
  body: string;
  completed: boolean;
  id: number;
}

export function getTodos() {
  const data = readFileSync(dataFilePath);

  const todos = JSON.parse(data.toString());

  return todos as Data;
}

export function addTodo(todoBody: string) {
  const currentTodos = getTodos();
  currentTodos.data.push({
    completed: false,
    body: todoBody,
    id: currentTodos.latestId++,
  });

  writeToDataFile(currentTodos);
}

export function writeToDataFile(data: Data) {
  writeFileSync(dataFilePath, JSON.stringify(data));
}


export function spaceLogger(message: string, type: DefaultMethods){
	signale.log()
	signale[type](message)
	signale.log()
}

