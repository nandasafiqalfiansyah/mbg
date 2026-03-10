/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_akqI5NS5.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Br_hvMJw.mjs';
import { $ as $$Section, a as $$SectionTitle, b as $$Sponsors } from '../chunks/SectionTitle_8Q7wdlrA.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_B0NMiroM.mjs';
import { p as p1 } from '../chunks/card-pic1_CX5Oziat.mjs';
import { p as p2, a as p3, b as p4, c as p5, d as p6 } from '../chunks/card-pic6_BqrhZ7ZR.mjs';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 1,
      titleTop: "Profil",
      titleBottom: "Petani Terverifikasi",
      img: p1,
      alt: "SEO",
      link: "/login"
    },
    {
      index: 2,
      titleTop: "Katalog",
      titleBottom: "Hasil Panen Segar",
      img: p2,
      alt: "SEO",
      link: "/login"
    },
    {
      index: 3,
      titleTop: "Pemesanan",
      titleBottom: "Langsung ke Petani",
      img: p3,
      alt: "SEO",
      link: "/login"
    },
    {
      index: 1,
      titleTop: "Pelacakan",
      titleBottom: "Status Pengiriman",
      img: p4,
      alt: "SEO",
      link: "/login"
    },
    {
      index: 2,
      titleTop: "Pembayaran",
      titleBottom: "Aman dan Mudah",
      img: p5,
      alt: "SEO",
      link: "/login"
    },
    {
      index: 3,
      titleTop: "Langganan",
      titleBottom: "Paket Panen Mingguan",
      img: p6,
      alt: "SEO",
      link: "/login"
    }
  ];
  const description = "Fitur utama PanenLangsung untuk membantu petani menjual langsung dan memudahkan konsumen mendapatkan hasil panen terbaik tanpa rantai distribusi panjang.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-5"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Fitur Utama", "description": description })} <div class="grid lg:grid-cols-2 lg:grid-rows-3 gap-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": card.index, "titleTop": card.titleTop, "titleBottom": card.titleBottom, "img": card.img, "alt": card.alt, "link": card.link })}`)} </div> </div> ` })}`;
}, "/Users/nanda/Documents/Hackaton/mgb/src/components/sections/Services.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:pb-20 md:pt-10"> <div class="text-center space-y-10"> <h2 class="text-5xl font-medium leading-none md:text-6xl">We Navigate the <br> digital landscape <br> for success</h2> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="https://github.com/manulthanura/Positivus" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Book a consultation</h2> </a> </div> </div> </div> </div> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Services", $$Services, {})} </main> ` })}`;
}, "/Users/nanda/Documents/Hackaton/mgb/src/pages/about.astro", void 0);

const $$file = "/Users/nanda/Documents/Hackaton/mgb/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
