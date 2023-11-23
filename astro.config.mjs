import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Animatio",
      social: {
        github: "https://github.com/CarlosViller/animatio",
      },
      customCss: [
        './src/styles/custom.css',
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
          autogenerate: { directory: "basics" },
        },
      ],
    }),
  ],
});
