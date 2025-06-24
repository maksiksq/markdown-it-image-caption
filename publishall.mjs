import fs from "fs";
import path from "path";
import 'dotenv/config';
import { execSync } from "child_process";
import {configDotenv} from "dotenv";

// the script works but my token is being wrongled, idk just did it manually

execSync("pnpm run build", { stdio: "inherit" });

execSync("pnpm publish --no-git-checks", { stdio: "inherit" });

const tmp = ".gh-publish-tmp";
fs.rmSync(tmp, { recursive: true, force: true });
fs.mkdirSync(tmp);
fs.cpSync("dist", tmp, { recursive: true });

const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
pkg.name = "@maksiksq/" + pkg.name.split("/")[1];
pkg.publishConfig = { registry: "https://npm.pkg.github.com/" };
console.log(pkg);

fs.writeFileSync(`${tmp}/package.json`, JSON.stringify(pkg, null, 2));

execSync(`cd ${tmp} && pnpm publish --no-git-checks`, { stdio: "inherit" });

fs.rmSync(tmp, { recursive: true, force: true });

