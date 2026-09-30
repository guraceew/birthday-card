const envelope = document.getElementById("envelope");
const instruction = document.getElementById("instruction");

let isOpen = false;

function toggleEnvelope() {
  isOpen = !isOpen;
  envelope.classList.toggle("open", isOpen);

  if (isOpen) {
    instruction.textContent = "Close Letter";
  } else {
    instruction.textContent = "Open Letter ✦";
  }
}

envelope.addEventListener("click", toggleEnvelope);
instruction.addEventListener("click", toggleEnvelope);
