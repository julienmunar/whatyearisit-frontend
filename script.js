fetch("https://whatyearisit-backend-6a9caga8r-julienmunar.vercel.app/year")
  .then((res) => res.json())
  .then((data) => (document.querySelector("#year").textContent = data.year));
