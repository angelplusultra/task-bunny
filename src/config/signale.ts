import signale from "signale";

const options = {
  disabled: false,
  interactive: false,
  logLevel: "info",
  scope: "custom",
  secrets: [],
  stream: process.stdout,
  types: {
    task: {
      badge: "📝",
      color: "yellow",
      label: "Task",
      logLevel: "info",
    },
  },
};

export const custom = new signale.Signale<"task">(options);

