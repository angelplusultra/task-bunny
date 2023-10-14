Certainly! Here's an updated README.md for your Task Bunny CLI tool with the usage information you provided:

```markdown
# Task Bunny

Task Bunny is a simple and efficient command-line task manager designed to help you keep track of your to-do lists and tasks directly from your terminal. It provides a straightforward interface with essential commands for managing your tasks.

## Installation

You can install Task Bunny globally using npm or yarn:

```bash
npm install -g task-bunny
# OR
yarn global add task-bunny
```

## Usage

Task Bunny offers a set of commands to interact with your tasks. Here's how you can use them:

### List Tasks

Use the `list` or `ls` command to display all your tasks.

```bash
task-bunny list
# OR
task-bunny ls
```

### Add a Task

To add a new task to your list, use the `add` or `a` command, followed by the task description.

```bash
task-bunny add "Buy groceries"
# OR
task-bunny a "Finish the report"
```

### Delete a Task

You can delete a single task using the `delete` or `d` command, it will prompt you to select a task to delete

```bash
task-bunny delete 
# OR
task-bunny d 
```

### Clear All Tasks

Use the `clear` or `cl` command to clear all tasks from your list.

```bash
task-bunny clear
# OR
task-bunny cl
```

### Mark a Task as Complete

To mark a single task as complete, use the `complete` or `comp` command, followed by the task's ID.

```bash
task-bunny complete 3
# OR
task-bunny comp 4
```

### Help

If you need assistance or want to see the available commands, you can use the `help` command:

```bash
task-bunny --help
```

## Contributing

If you would like to contribute to Task Bunny, feel free to open issues or submit pull requests on our [GitHub repository](https://github.com/yourusername/task-bunny). We welcome contributions and improvements to make Task Bunny even more helpful.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy efficient task management with Task Bunny! 🐰
```

You can replace `"yourusername/task-bunny"` with the actual GitHub repository URL where you host your Task Bunny project.
