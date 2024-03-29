import * as path from "path";
import * as fs from "fs";
import * as os from "os";
/**
 * @desc return pkg context
 * @param {string} [url] package.json path
 * @returns {Object}
 */
function pkgRead(url?: string): Object {
  const pkgUrl: string = pkgPath(url);
  const packageCtx: Boolean = fs.existsSync(pkgUrl);
  if (packageCtx) {
    const file: string = fs.readFileSync(pkgUrl).toString();
    let data: Object = {};
    try {
      data = JSON.parse(file);
      return data;
    } catch (e) {
      return {}
    }
  }
}

/**
 * @desc update your pkg
 * @param {string} url package.json path
 * @param {Object} data cover data
 */
function pkgUpdate(url: string, data: Object): void {
  const pkg: string = pkgPath(url);
  const context: string = JSON.stringify(data, null, 2);
  fs.writeFileSync(pkg, context + os.EOL);
}

/**
 * @desc get path form your workSpace
 * @param {string} [url] package.json path
 * @returns {string}
 */
function pkgPath(url?: string): string {
  if (url) {
    return url;
  }
  return path.join(process.cwd(), "package.json");
}

export {
  pkgPath,
  pkgRead,
  pkgUpdate
}