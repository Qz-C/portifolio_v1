import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-main': 'radial-gradient(circle at center, #11023C, #0B0126)',
      },
      colors: {
        dracula: {
          background: '#282a36',
          currentLine: '#44475a',
          foreground: '#f8f8f2',
          comment: '#6272a4',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c',
        },
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
      backdropBlur: ['responsive'],
    },
  },
  plugins: [
    require('tailwindcss-filters'), // Add this line if you haven't added tailwindcss-filters plugin
  ],
};
export default config;
