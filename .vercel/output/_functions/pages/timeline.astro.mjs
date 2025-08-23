/* empty css                                */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_VnVRUUcK.mjs';
import { $ as $$Timeline$1 } from '../chunks/Timeline_DsXu5iuy.mjs';
export { renderers } from '../renderers.mjs';

const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const timelineData = [
    {
      title: "Community Involvement",
      items: [
        {
          logo: "/logos/tie-mangaluru.png",
          title: "TIE Mangaluru",
          organization: "TIE Mangaluru",
          startDate: "2024-06-01",
          isPresent: true
        },
        {
          logo: "/logos/ieee.png",
          title: "IEEE Mangalore Subsection",
          organization: "IEEE Mangalore Subsection",
          startDate: "2022-01-01",
          isPresent: true
        },
        {
          logo: "/logos/foss-united.png",
          title: "FOSS United",
          organization: "FOSS United",
          startDate: "2023-06-01",
          isPresent: true
        },
        {
          logo: "/logos/sosc.png",
          title: "Sahyadri Open Source Community",
          organization: "Sahyadri Open Source Community (SOSC)",
          startDate: "2023-01-01",
          endDate: "2024-12-01"
        },
        {
          logo: "/logos/postman.png",
          title: "Postman",
          organization: "Postman",
          startDate: "2022-06-01",
          endDate: "2023-06-01"
        }
      ]
    },
    {
      title: "Education",
      items: [
        {
          logo: "/logos/sahyadri-college.png",
          title: "Sahyadri College of Engineering and Management",
          organization: "Sahyadri College of Engineering and Management",
          startDate: "2021-01-01",
          endDate: "2025-01-01"
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Experience Timeline" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TimelineComponent", $$Timeline$1, { "sections": timelineData })} ` })}`;
}, "E:/portfolio-web/nick-devfolio/src/pages/timeline.astro", void 0);

const $$file = "E:/portfolio-web/nick-devfolio/src/pages/timeline.astro";
const $$url = "/timeline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Timeline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
