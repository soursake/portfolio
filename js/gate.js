// Simple client-side password gate.
// NOTE: this only deters casual visitors -- it is not real security.
// Anyone who reads this file's source could work around it. Do not use it
// to protect anything truly confidential.

// To change the password: pick a new password, then run in a browser console:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('yourNewPassword'))
//     .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
// and paste the resulting hex string in place of GATE_HASH below.
const GATE_HASH = "dbc5e82b21270c62e7ad48bc43f385ea3f199f335e43e52f5047a09e189aa414";

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function unlockSite() {
  document.documentElement.classList.remove("locked");
  document.documentElement.classList.add("unlocked");
  try {
    sessionStorage.setItem("yz_site_unlocked", "1");
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-password");
  const error = document.getElementById("gate-error");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const hash = await sha256(input.value);
    if (hash === GATE_HASH) {
      unlockSite();
    } else {
      error.textContent = "Incorrect password.";
      input.value = "";
      input.focus();
    }
  });
});
