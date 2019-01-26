/**
 * @desc return pkg context
 * @param {string} [url] package.json path
 * @returns {Object}
 */
export declare function pkgRead(url?: string): Object;
/**
 * @desc update your pkg
 * @param {string} url package.json path
 * @param {Object} data cover data
 */
export declare function pkgUpdate(url: string, data: Object): void;
/**
 * @desc get path form your workSpace
 * @param {string} [url] package.json path
 * @returns {string}
 */
export declare function pkgPath(url?: string): string;
