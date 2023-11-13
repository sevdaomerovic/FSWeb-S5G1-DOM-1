const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach((element, index) => {
  // element.textContent = siteContent.nav["nav-item- " + (index + 1)];
  element.classList.add("italic");
});

navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

// document.getElementById("logo-img").src = siteContent["logo-img"];
// document.querySelector("#logo-img").src = siteContent.images;
document
  .querySelector("#logo-img")
  .setAttribute("src", siteContent.images["logo-img"]);

document.getElementById("cta-img").src = siteContent.images["cta-img"];

document
  .querySelector("#middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);

document.getElementById("cta-img").src = siteContent.images["cta-img"];

//main content
const divTextContent = document.querySelectorAll(
  "section.main-content .text-content"
);
const mainContentArr = [];

for (let key in siteContent["ana-içerik"])
  mainContentArr.push(siteContent["ana-içerik"][key]);
let i = 0;
divTextContent.forEach((element) => {
  element.children[0].textContent = mainContentArr[i++];
  element.children[1].textContent = mainContentArr[i++];
});

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent.iletisim["iletişim-h4"];

const contactData = Object.values(siteContent.iletisim);
const contactItems = document.querySelectorAll(".contact p");

contactItems.forEach((item, index) => {
  item.textContent = contactData[index + 1];
});

const copyright = document.querySelector("footer a");
copyright.classList.add("bold");

copyright.textContent = siteContent.footer.copyright;
