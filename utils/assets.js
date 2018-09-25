/**
 * Example:
 *
 * get logo() {
 *   return this._require('logo', require('./logos/logo.png'));
 * }
 **/

export class Assets {
    _cache = {};

    _require(name, source) {
        if (!this._cache[name]) {
            this._cache[name] = source;
        }

        return this._cache[name];
    }

    clearCache() {
        this._cache = {};
    }
}
