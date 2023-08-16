import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["via-20%", "via-25%", "via-30%", "via-35%", "via-40%", "via-45%", "via-50%", "via-55%", "via-60%", "via-65%", "via-70%", "via-75%", "via-80%", "via-85%", "via-90%", "via-95%", "via-100%", "from-5%", "from-10%", "from-15%", "from-20%", "from-25%", "from-30%", "from-35%", "from-40%", "from-45%", "from-50%", "from-55%", "from-60%", "from-65%", "from-70%", "from-75%", "from-80%", "from-85%", "from-90%", "from-95%", "from-100%", "to-5%", "to-10%", "to-15%", "to-20%", "to-25%", "to-30%", "to-35%", "to-40%", "to-45%", "to-50%", "to-55%", "to-60%", "to-65%", "to-70%", "to-75%", "to-80%"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
