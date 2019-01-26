import * as path from "path";
import * as fs from "fs";
import * as os from "os";
/**
 * @export
 * @desc return pkg context
 * @param {string} [url]
 * @returns {Object}
 */
export function pkgRead(url?: string): Object {
  const pkgUrl: string = pkgPath(url);
  const packageCtx: Boolean = fs.existsSync(pkgUrl);
  if (packageCtx) {
    const file: string = fs.readFileSync(pkgUrl).toString();
    let data: Object = {};
    try {
      data = JSON.parse(file);
      return data;
    } catch (e) {
      throw new Error("No valid package.json found");
    }
  }
  throw new Error("No package.json found");
}

/**
 * @export
 * @desc update your pkg
 * @param {string} url
 * @param {Object} data
 */
export function pkgUpdate(url: string, data: Object): void {
  const pkg: string = pkgPath(url);
  const context: string = JSON.stringify(data, null, 2);
  fs.writeFileSync(pkg, context + os.EOL);
}

/**
 * @export
 * @desc get path form your workSpace
 * @param {string} [url]
 * @returns {string}
 */
export function pkgPath(url?: string): string {
  if (url) {
    return url;
  }
  return path.join(process.cwd(), "package.json");
}
