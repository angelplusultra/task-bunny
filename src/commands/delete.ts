import { Command } from "commander";
import * as actions from "../actions";

export const deleteTask = new Command("delete");
deleteTask
  .alias("d")
  .description("Delete a single task")
  .action(actions.deleteTask)
  .argument("[id]");
