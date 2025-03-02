const socket = io();

const copyButton = document.getElementById("copyButton");
const copyText = document.getElementById("copyText");
const pastedText = document.getElementById("pastedText");

copyButton.addEventListener("click", () => {
  const textToCopy = copyText.value.trim();

  if (textToCopy) {
    socket.emit("copy", textToCopy);
  }
});

socket.on("paste", (data) => {
  pastedText.textContent = `Полученные данные: ${data}`;
});
