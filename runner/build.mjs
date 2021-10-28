import { Parcel } from "@parcel/core";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const require = createRequire(import.meta.url);

let bundler = new Parcel({
  entries: path.join(__dirname, "..", "project", "index.js"),
  defaultConfig: require.resolve("@parcel/config-default"),
});

try {
  let { bundleGraph, buildTime } = await bundler.run();
  let bundles = bundleGraph.getBundles();
  console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
} catch (err) {
  console.log(err.diagnostics);
}
