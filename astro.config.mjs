import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Animatio",
      social: {
        github: "https://github.com/CarlosViller/animatio",
      },
      customCss: [
        './src/tailwind.css',
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [
            {
              label: "What is the purpose of this guide?",
              link: "/welcome/introduction",
            },
          ],
        },
        {
          label: "Core basics",
          autogenerate: {
            directory: "basics",
          },
        },
        {
          label: "Glow",
          items: [
            {
              label: "Glowing mouse",
              link: "/glow/glowing-mouse",
            },
          ],
        },
        {
          label: "Gradients",
          items: [
            {
              label: "Button background gradient",
              link: "/gradients/button-gradient",
            },
            {
              label: "Box border",
              link: "/gradients/box-border",
            },
          ],
        },
        {
          label: "Text",
          items: [
            {
              label: "Auto type text",
              link: "/text/typing-text",
            },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
