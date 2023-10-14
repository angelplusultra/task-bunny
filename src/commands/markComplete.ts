import { Command } from "commander";
import * as actions from "../actions";

export const complete = new Command("complete");
complete
  .description("Mark a single task as complete")
  .action(actions.markTaskComplete)
  .alias("comp")
  .argument("[id]");
