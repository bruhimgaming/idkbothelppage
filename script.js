// Shows errors right on the page (and in console)
window.addEventListener("error", (e) => {
  const dbg = document.getElementById("debug");
  if (dbg) dbg.textContent = "JS error: " + e.message;
  console.error(e.error || e.message);
});

document.addEventListener("DOMContentLoaded", () => {
  const commandList = document.getElementById("commandList");
  const dbg = document.getElementById("debug");

  // ✅ Your commands — note the commas at the end of each line
  const commands = [
    ";help - this motherfucker",
    ";hello - this was a test thing",
    ";credits - shows the credits",
    ";time - idk it shows random numbers it was a mistake so i left it in",
    ";fish - says gulb gulb idk",
    ";calc - calculator (cant subtract)",
    ";roll - roll a dice",
    ";room - only bruh and bensav bitch",
  ];

  try {
    commands.forEach((cmd) => {
      const li = document.createElement("li");
      li.textContent = cmd;
      commandList.appendChild(li);
    });
    if (dbg) dbg.textContent = "Loaded " + commands.length + " commands.";
  } catch (err) {
    if (dbg) dbg.textContent = "JS error: " + err.message;
    console.error(err);
  }
});
