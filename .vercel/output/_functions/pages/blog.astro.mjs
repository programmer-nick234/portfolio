/* empty css                                */
import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_VnVRUUcK.mjs';
import { $ as $$Navigation, a as $$Footer } from '../chunks/Footer_COnq7bgZ.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const blogPosts = [
    {
      title: "Building a Modern Portfolio with Astro and Tailwind CSS",
      excerpt: "Learn how to create a stunning portfolio website using Astro's static site generation and Tailwind CSS for styling. This guide covers everything from setup to deployment.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["Astro", "Tailwind CSS", "Portfolio", "Web Design"]
    },
    {
      title: "The Future of React: What's New in React 19",
      excerpt: "Explore the latest features and improvements in React 19, including the new compiler, improved performance, and enhanced developer experience.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "React",
      tags: ["React", "JavaScript", "Frontend", "Web Development"]
    },
    {
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      excerpt: "Dive deep into TypeScript advanced patterns, generics, utility types, and best practices for writing maintainable and type-safe code.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"]
    },
    {
      title: "Designing for Dark Mode: A Complete Guide",
      excerpt: "Learn how to implement dark mode in your applications, from design considerations to technical implementation and user experience best practices.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "UI/UX Design",
      tags: ["Design", "Dark Mode", "UI/UX", "CSS"]
    },
    {
      title: "Performance Optimization Techniques for Web Applications",
      excerpt: "Discover proven techniques to optimize your web applications for better performance, including code splitting, lazy loading, and caching strategies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      date: "2023-12-20",
      readTime: "14 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web Development", "Best Practices"]
    },
    {
      title: "Getting Started with Next.js 14: A Beginner's Guide",
      excerpt: "A comprehensive guide to building modern web applications with Next.js 14, covering the App Router, Server Components, and new features.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "Next.js",
      tags: ["Next.js", "React", "Full-Stack", "Web Development"]
    }
  ];
  const categories = ["All", "Web Development", "React", "TypeScript", "UI/UX Design", "Performance", "Next.js"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Nick", "description": "Thoughts on web development, design, and technology", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-ijnerlr2": true })} ${maybeRenderHead()}<main class="pt-16" data-astro-cid-ijnerlr2> <section class="py-20 bg-dark-bg" data-astro-cid-ijnerlr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ijnerlr2> <div class="text-center mb-16" data-astro-cid-ijnerlr2> <h1 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4" data-astro-cid-ijnerlr2>
My <span class="text-neon-cyan" data-astro-cid-ijnerlr2>Blog</span> </h1> <div class="w-24 h-1 bg-neon-cyan mx-auto mb-6" data-astro-cid-ijnerlr2></div> <p class="text-text-secondary text-lg max-w-2xl mx-auto" data-astro-cid-ijnerlr2>
Thoughts, tutorials, and insights on web development, design, and technology
</p> </div> <!-- Category Filter --> <div class="flex flex-wrap justify-center gap-4 mb-12" data-astro-cid-ijnerlr2> ${categories.map((category) => renderTemplate`<button class="px-6 py-2 bg-dark-card border border-dark-border rounded-full text-text-secondary hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300" data-astro-cid-ijnerlr2> ${category} </button>`)} </div> <!-- Featured Post --> <div class="mb-16" data-astro-cid-ijnerlr2> <h2 class="text-2xl font-semibold text-text-primary mb-8" data-astro-cid-ijnerlr2>Featured Post</h2> <div class="bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-neon-cyan transition-all duration-300" data-astro-cid-ijnerlr2> <div class="md:flex" data-astro-cid-ijnerlr2> <div class="md:w-1/2" data-astro-cid-ijnerlr2> <img${addAttribute(blogPosts[0].image, "src")}${addAttribute(blogPosts[0].title, "alt")} class="w-full h-64 md:h-full object-cover" data-astro-cid-ijnerlr2> </div> <div class="md:w-1/2 p-8" data-astro-cid-ijnerlr2> <div class="flex items-center space-x-4 mb-4" data-astro-cid-ijnerlr2> <span class="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-xs font-medium" data-astro-cid-ijnerlr2> ${blogPosts[0].category} </span> <span class="text-text-muted text-sm" data-astro-cid-ijnerlr2>${blogPosts[0].readTime}</span> </div> <h3 class="text-2xl font-bold text-text-primary mb-4 hover:text-neon-cyan transition-colors duration-300" data-astro-cid-ijnerlr2> ${blogPosts[0].title} </h3> <p class="text-text-secondary mb-6 leading-relaxed" data-astro-cid-ijnerlr2> ${blogPosts[0].excerpt} </p> <div class="flex items-center justify-between" data-astro-cid-ijnerlr2> <span class="text-text-muted text-sm" data-astro-cid-ijnerlr2>${blogPosts[0].date}</span> <a href="#" class="text-neon-cyan hover:text-neon-purple transition-colors duration-300 font-medium" data-astro-cid-ijnerlr2>
Read More →
</a> </div> </div> </div> </div> </div> <!-- Blog Posts Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-ijnerlr2> ${blogPosts.slice(1).map((post) => renderTemplate`<article class="group bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-neon-cyan transition-all duration-300 hover:transform hover:scale-105" data-astro-cid-ijnerlr2> <!-- Post Image --> <div class="relative overflow-hidden h-48" data-astro-cid-ijnerlr2> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-astro-cid-ijnerlr2> <div class="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-ijnerlr2></div> </div> <!-- Post Content --> <div class="p-6" data-astro-cid-ijnerlr2> <div class="flex items-center space-x-4 mb-4" data-astro-cid-ijnerlr2> <span class="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs font-medium" data-astro-cid-ijnerlr2> ${post.category} </span> <span class="text-text-muted text-sm" data-astro-cid-ijnerlr2>${post.readTime}</span> </div> <h3 class="text-xl font-semibold text-text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2" data-astro-cid-ijnerlr2> ${post.title} </h3> <p class="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3" data-astro-cid-ijnerlr2> ${post.excerpt} </p> <!-- Tags --> <div class="flex flex-wrap gap-2 mb-4" data-astro-cid-ijnerlr2> ${post.tags.slice(0, 3).map((tag) => renderTemplate`<span class="px-2 py-1 bg-dark-bg border border-dark-border rounded text-xs text-text-muted hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300" data-astro-cid-ijnerlr2> ${tag} </span>`)} </div> <div class="flex items-center justify-between" data-astro-cid-ijnerlr2> <span class="text-text-muted text-sm" data-astro-cid-ijnerlr2>${post.date}</span> <a href="#" class="text-neon-cyan hover:text-neon-purple transition-colors duration-300 font-medium text-sm" data-astro-cid-ijnerlr2>
Read More →
</a> </div> </div> </article>`)} </div> <!-- Newsletter Signup --> <div class="mt-20 text-center" data-astro-cid-ijnerlr2> <div class="bg-dark-card border border-dark-border rounded-lg p-8 max-w-2xl mx-auto" data-astro-cid-ijnerlr2> <h3 class="text-2xl font-semibold text-text-primary mb-4" data-astro-cid-ijnerlr2>
Stay Updated
</h3> <p class="text-text-secondary mb-6" data-astro-cid-ijnerlr2>
Get notified when I publish new articles about web development and design.
</p> <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" data-astro-cid-ijnerlr2> <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:border-neon-cyan focus:outline-none transition-colors duration-300" data-astro-cid-ijnerlr2> <button class="px-6 py-3 bg-neon-cyan text-dark-bg rounded-lg font-semibold hover:bg-neon-purple transition-all duration-300" data-astro-cid-ijnerlr2>
Subscribe
</button> </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ijnerlr2": true })} ` })} `;
}, "E:/portfolio-web/nick-devfolio/src/pages/blog.astro", void 0);

const $$file = "E:/portfolio-web/nick-devfolio/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
