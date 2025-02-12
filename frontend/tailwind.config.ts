import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'softpet': `
            radial-gradient(50% 50% at 50% 50%, 
            rgba(0, 102, 255, 0.45) 0%, 
            rgba(0, 32, 79, 0.00) 100%);
          ),
            background: radial-gradient(50% 50% at 50% 50%, 
            rgba(0, 102, 255, 0.20) 0%, 
            rgba(0, 32, 79, 0.00) 100%);
        `
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#00060F",
        darkblue: "#001E4D",
        blue: "#0056E2",
        lightblue: "#00CAFC",
        danger: "#ED254E",
        yellow: "#F9DC5C",
        grey: "#404A5C"
      },
    },
  },
  plugins: [],
} satisfies Config;
