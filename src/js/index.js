document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-link]").forEach((v) => {
    v.setAttribute("title", v.getAttribute("data-link"));
    v.addEventListener("click", () => {
      window.open(v.getAttribute("data-link"), "_blank");
    });
  });

  document.querySelectorAll("[data-href]").forEach((v) => {
    v.setAttribute("title", v.getAttribute("data-href"));
    v.addEventListener("click", () => {
      window.location.replace(v.getAttribute("data-href"));
    });
  });
});
