const services = [
  {name:"متابعين Instagram",desc:"خدمة زيادة متابعين إنستجرام",price:"حسب الكمية"},
  {name:"مشاهدات TikTok",desc:"زيادة مشاهدات تيك توك",price:"حسب الكمية"},
  {name:"مشاهدات YouTube",desc:"زيادة مشاهدات يوتيوب",price:"حسب الكمية"},
  {name:"أعضاء Telegram",desc:"زيادة أعضاء قنوات تليجرام",price:"حسب الكمية"}
];

const root = document.getElementById("services");

if (root) {
  root.innerHTML = services.map(service => `
    <article>
      <h3>${service.name}</h3>
      <p>${service.desc}</p>
      <strong>${service.price}</strong>
    </article>
  `).join("");
}
