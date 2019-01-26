/**
 * @export
 * @desc return pkg context
 * @param {string} [url]
 * @returns {Object}
 */
export declare function pkgRead(url?: string): Object;
/**
 * @export
 * @desc update your pkg
 * @param {string} url
 * @param {Object} data
 */
export declare function pkgUpdate(url: string, data: Object): void;
/**
 * @export
 * @desc get path form your workSpace
 * @param {string} [url]
 * @returns {string}
 */
export declare function pkgPath(url?: string): string;
