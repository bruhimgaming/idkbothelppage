// Example: Add commands to the list dynamically
document.addEventListener("DOMContentLoaded", () => {
  const commandList = document.getElementById("commandList");

  // Replace with your actual commands
  const commands = [
    "/help - Show all commands",
    "/ping - Check if the bot is alive",
    "/about - Info about this bot"
  ];

  commands.forEach(cmd => {
    const li = document.createElement("li");
    li.textContent = cmd;
    commandList.appendChild(li);
  });
});
