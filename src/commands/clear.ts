import { Command } from "commander";
import * as actions from '../actions'
export const clear = new Command("clear");

clear.description("Clears all tasks").alias("cl").action(actions.clearTasks)
