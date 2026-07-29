import next from "eslint-config-next";

/**
 * eslint-config-next 16 default-exports a flat config array already,
 * so it just needs spreading — no FlatCompat shim.
 */
const eslintConfig = [
  ...next,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
];

export default eslintConfig;
