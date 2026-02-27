/* starter-kit/scripts/check-secrets.js */
import fs from "fs";
import { execSync } from "child_process";

// Simple patterns for demonstration; in production use more robust regex
const PATTERNS = [
  {
    name: "Generic Secret",
    regex: /(api_key|secret|token)[\s=:"']*([A-Za-z0-9+/]{20,})/i,
  },
  { name: "AWS Key", regex: /AKIA[0-9A-Z]{16}/ },
  { name: "Private Key", regex: /-----BEGIN PRIVATE KEY-----/ },
];

try {
  // Check staged files
  const stagedFiles = execSync("git diff --cached --name-only", {
    encoding: "utf-8",
  })
    .split("\n")
    .filter(Boolean);
  let failed = false;

  stagedFiles.forEach((file) => {
    if (!fs.existsSync(file)) return;
    // Skip checking this script itself or lockfiles
    if (file.includes("check-secrets.js") || file.includes("package-lock.json"))
      return;

    const content = fs.readFileSync(file, "utf-8");
    PATTERNS.forEach((pattern) => {
      if (pattern.regex.test(content)) {
        console.error(
          `[Security] Potential secret found in ${file}: ${pattern.name}`,
        );
        failed = true;
      }
    });
  });

  if (failed) {
    console.error(
      "[Security] Commit blocked. Remove secrets or bypass with --no-verify if false positive.",
    );
    process.exit(1);
  } else {
    console.log("[Security] No secrets found in staged files.");
  }
} catch (e) {
  // If git command fails (e.g. no git repo yet) or other error
  console.warn("[Security] Check skipped or failed to run:", e.message);
  process.exit(0);
}
