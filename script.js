// Example: Add commands to the list dynamically
document.addEventListener("DOMContentLoaded", () => {
  const commandList = document.getElementById("commandList");

  // Replace with your actual commands
  const commands = [
    ";hello - this was a test thing",
    ";credits - shows the credits",
    ";time - idk it shows random numbers it was a mistake so i left it in"
  ];

  commands.forEach(cmd => {
    const li = document.createElement("li");
    li.textContent = cmd;
    commandList.appendChild(li);
  });
});
