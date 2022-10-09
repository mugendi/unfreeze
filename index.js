/**
 * Copyright (c) 2022 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

function unfreeze(o) {
	if ('object' !== typeof o) return o;

	o = Array.isArray(o) ? [...o] : { ...o };

	for (let k in o) {
		if ('object' == typeof o[k]) {
			o[k] = unfreeze(o[k]);
		}
	}

	return o;
}

module.exports = unfreeze;
