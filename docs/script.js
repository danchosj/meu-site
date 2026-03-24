// Tema dark/light
function toggleTema() {
  document.body.classList.toggle("light");

  const btn = document.getElementById("temaBtn");
  if (document.body.classList.contains("light")) {
    btn.innerText = "☀️ Claro";
  } else {
    btn.innerText = "🌙 Escuro";
  }
}

// Animação de entrada nas seções
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));