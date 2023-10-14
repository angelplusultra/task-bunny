import { Command } from "commander";
export const complete = new Command("complete");
import * as actions from "../actions";

complete
  .description("Mark a single task as complete")
  .action(actions.markTaskComplete)
  .alias("comp")
  .argument("[id]");
