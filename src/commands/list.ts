import { Command } from "commander";
export const list = new Command("list");
import * as actions from '../actions'

list.description("List all your tasks").action(actions.getAndLogTasks).alias('ls');
