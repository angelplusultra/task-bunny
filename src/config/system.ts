import { join } from "path";
import { spaceLogger, writeToDataFile } from "../utils";
import { existsSync, mkdirSync } from "fs";
import signale from "signale";
import { program } from "commander";
import * as commands from "../commands";
import { taskBunnyCli } from "../cli/cli";

export const appDataDir =
  process.platform === "win32" ? process.env.APPDATA : process.env.HOME;
export const appDir = join(appDataDir as string, ".task-bunny");
export const dataFilePath = join(appDir, "data.json");

export function init() {
  if (!existsSync(appDir)) {
    mkdirSync(appDir);
    writeToDataFile({
      data: [],
      latestId: 1,
    });

    spaceLogger("Data directory created", "success");
  }
  program
    .name("Task Bunny")
    .description("Simple task manager for terminal")
    .action(taskBunnyCli);

  for (const command of Object.values(commands)) {
    program.addCommand(command);
  }

  program.parse(process.argv);
}
