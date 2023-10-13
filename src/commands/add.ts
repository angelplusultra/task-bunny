import { Command } from "commander";
import { addTodo } from "../utils";
import signale from "signale";
import * as actions from '../actions'

export const add = new Command("add");

add.argument("<task...>").action(actions.addTask).description('Add a new task to your task list').alias('a')
