const modal = document.getElementById("locationModal");
const openBtn = document.getElementById("open-location");
const closeBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveLocation");
const display = document.getElementById("current-location");

/* =======================
   TRADUÇÕES DO SISTEMA
======================= */
const translations = {
    pt_br: { // Português Brasil
        menu: { collection: "NOSSO / 2025", men: "Homem", women: "Mulher", kids: "Crianças", home: "Casa", lifestyle: "Arte de viver" },
        hero: { title: "Surpreenda-se", text: "Na coleção Nosso & Palanca, tradição e sofisticação encontram-se." },
        products: { suit: "Fato Palanca", shirt1: "Camisola NOSSO", shirt2: "Camisola Cinza", coat: "Casaco NOSSO" },
        footer: { newsletter: "Newsletter", subscribe: "Inscreva-se", follow: "Siga-nos", service: "Atendimento", sendTo: "Enviar para" }
    },
    pt_pt: { // Português Portugal
        menu: { collection: "NOSSO / 2025", men: "Homem", women: "Mulher", kids: "Crianças", home: "Casa", lifestyle: "Arte de viver" },
        hero: { title: "Surpreenda-se", text: "Na coleção Nosso & Palanca, tradição e sofisticação encontram-se." },
        products: { suit: "Fato Palanca", shirt1: "Camisola NOSSO", shirt2: "Camisola Cinza", coat: "Casaco NOSSO" },
        footer: { newsletter: "Newsletter", subscribe: "Subscrever", follow: "Siga-nos", service: "Atendimento", sendTo: "Enviar para" }
    },
    pt_ao: { // Português Angola
        menu: { collection: "NOSSO / 2025", men: "Homem", women: "Mulher", kids: "Crianças", home: "Casa", lifestyle: "Arte de viver" },
        hero: { title: "Surpreenda-se", text: "Na coleção Nosso & Palanca, tradição e sofisticação encontram-se." },
        products: { suit: "Fato Palanca", shirt1: "Camisola NOSSO", shirt2: "Camisola Cinza", coat: "Casaco NOSSO" },
        footer: { newsletter: "Newsletter", subscribe: "Inscreva-se", follow: "Siga-nos", service: "Atendimento", sendTo: "Enviar para" }
    },
    en: { /* English */ menu:{ collection:"OUR / 2025", men:"Men", women:"Women", kids:"Kids", home:"Home", lifestyle:"Art of Living" }, hero:{ title:"Be Surprised", text:"In the Nosso & Palanca collection, tradition meets sophistication." }, products:{ suit:"Palanca Suit", shirt1:"NOSSO Sweater", shirt2:"Gray Sweater", coat:"NOSSO Coat" }, footer:{ newsletter:"Newsletter", subscribe:"Subscribe", follow:"Follow us", service:"Customer Service", sendTo:"Ship to" } },
    kmb: { /* Kimbundu */ menu:{ collection:"NOSSO / 2025", men:"Wana", women:"Wana muana", kids:"Wana vata", home:"Nzo", lifestyle:"Nda kukola" }, hero:{ title:"Kakuka", text:"Na koleksyon Nosso & Palanca, kuxiluya ne kusóma kutila." }, products:{ suit:"Fato Palanca", shirt1:"Camisola NOSSO", shirt2:"Camisola Cinza", coat:"Casaco NOSSO" }, footer:{ newsletter:"Newsletter", subscribe:"Kwandika", follow:"Kukwata", service:"Atendimento", sendTo:"Kutuma" } },
    zu: { /* Zulu */ menu:{ collection:"OKWETHU / 2025", men:"Amadoda", women:"Abesifazane", kids:"Izingane", home:"Ikhaya", lifestyle:"Ubuciko bokuphila" }, hero:{ title:"Mangalisa", text:"Ekuqoqweni kweNosso & Palanca, amasiko ahlangana nobuhle." }, products:{ suit:"Ibhulukwe lePalanca", shirt1:"Ihembe leNOSSO", shirt2:"Ihembe elimnyama", coat:"Ijakhethi leNOSSO" }, footer:{ newsletter:"I-newsletter", subscribe:"Bhalisela", follow:"Silandele", service:"Insizakalo", sendTo:"Thumela ku" } }
};

/* =======================
   APLICA IDIOMA NO SITE
======================= */
function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const keys = el.dataset.i18n.split(".");
        let value = translations[lang];
        keys.forEach(k => value = value[k]);
        if (value) el.textContent = value;
    });

    let country, languageText;
    switch(lang){
        case "pt_br": country="Brasil"; languageText="Português (BR)"; break;
        case "pt_pt": country="Portugal"; languageText="Português (PT)"; break;
        case "pt_ao": country="Angola"; languageText="Português (AO)"; break;
        case "en": country="Brazil"; languageText="English"; break;
        case "kmb": country="Angola"; languageText="Kimbundu"; break;
        case "zu": country="South Africa"; languageText="Zulu"; break;
        default: country="Brasil"; languageText="Português (BR)";
    }
    display.innerText = `${country} • ${languageText}`;
}

/* =======================
   MODAL
======================= */
openBtn.addEventListener("click", e=>{ e.preventDefault(); modal.style.display="flex"; });
closeBtn.addEventListener("click", ()=>{ modal.style.display="none"; });

saveBtn.addEventListener("click", ()=>{
    const country=document.getElementById("country").value;
    const language=document.getElementById("language").value;

    let langCode;
    switch(language){
        case "Português (BR)": langCode="pt_br"; break;
        case "Português (PT)": langCode="pt_pt"; break;
        case "Português (AO)": langCode="pt_ao"; break;
        case "English": langCode="en"; break;
        case "Kimbundu": langCode="kmb"; break;
        case "Zulu": langCode="zu"; break;
        default: langCode="pt_br";
    }

    localStorage.setItem("location", `${country} • ${language}`);
    setLanguage(langCode);
    modal.style.display="none";
});

/* =======================
   CARREGAR AO ABRIR SITE
======================= */
document.addEventListener("DOMContentLoaded", ()=>{
    const savedLang=localStorage.getItem("lang")||"pt_br";
    setLanguage(savedLang);
});



