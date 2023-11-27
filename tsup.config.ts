import { defineConfig } from "tsup";

export default defineConfig(() => [
  {
    clean: true,
    target: "esnext",
    platform: "neutral",
    format: "esm",
    experimentalDts: true,
    entry: ["./src/components/ComponentA/index.tsx"],
  },
]);
