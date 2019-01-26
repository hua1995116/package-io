/**
 * @desc return pkg context
 * @param {string} [url] package.json path
 * @returns {Object}
 */
declare function pkgRead(url?: string): Object;
/**
 * @desc update your pkg
 * @param {string} url package.json path
 * @param {Object} data cover data
 */
declare function pkgUpdate(url: string, data: Object): void;
/**
 * @desc get path form your workSpace
 * @param {string} [url] package.json path
 * @returns {string}
 */
declare function pkgPath(url?: string): string;
export { pkgPath, pkgRead, pkgUpdate };
