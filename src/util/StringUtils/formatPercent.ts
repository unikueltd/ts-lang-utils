/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import {minLength} from '@/util/ArrayUtils/minLength';
import {isPlain} from '@/util/ObjectUtils/isPlain';
import {toString} from '@/util/ObjectUtils/toString';


/**
 * Returns the replaced string of the source string ("%" placeholder) with the given parameters
 *
 * @param text the source string to inspect
 * @param params the parameters to replaced with
 *
 * @returns the replaced string of the source string
 *
 * @author David Hsing
 *
 * @see "https://github.com/samsonjs/format/blob/main/format.js"
 *
 * @example
 * ```ts
 * formatPercent("foo%s", "bar");    // "foobar"
 * formatPercent("foobar %d", 2023);    // "foobar 2023"
 * formatPercent("hello %s, foo%s", "world", "bar");    // "hello world, foobar"
 * ```
 */
export function formatPercent(text?: string | null, ...params: any[]): string | null | undefined {
    if (!text || text.length <= 2 || !params || !params.length) {
        return text;
    }
    const matches = text.match(/%[bcdfjosxX]/g) || [];
    const count = minLength(matches, params);
    if (count === 0) {
        return text;
    }
    let result = text;
    for (let i = 0; i < count; i++) {
        const param = params[i];
        const pattern = matches[i].substring(1);
        switch (pattern) {
            case 'b':
            case 'c':
            case 'd':
            case 'o':
            case 'x':
            case 'X':
                try {
                    let value = undefined;
                    if (typeof param === 'string') {
                        value = Number.parseInt(param);
                    } else if (param instanceof String) {
                        value = Number.parseInt(param.toString());
                    } else if (typeof param === 'number') {
                        value = param;
                    }
                    if (value) {
                        if (pattern === 'b') {
                            result = result.replace(`%${pattern}`, (value as number).toString(2));
                        } else if (pattern === 'c') {
                            result = result.replace(`%${pattern}`, String.fromCharCode(value as number));
                        } else if (pattern === 'd') {
                            result = result.replace(`%${pattern}`, (value as number).toString(10));
                        } else if (pattern === 'o') {
                            result = result.replace(`%${pattern}`, '0' + (value as number).toString(8));
                        } else if (pattern === 'x') {
                            result = result.replace(`%${pattern}`, '0x' + (value as number).toString(16));
                        } else if (pattern === 'X') {
                            result = result.replace(`%${pattern}`, '0x' + (value as number).toString(16).toUpperCase());
                        }
                    }
                } catch (ignored) {
                    throw new TypeError(`Invalid parameter type of '${param}', index ${i}`);
                }
                break;
            case 'f':
                try {
                    let value = undefined;
                    if (typeof param === 'string') {
                        value = Number.parseFloat(param);
                    } else if (param instanceof String) {
                        value = Number.parseFloat(param.toString());
                    } else if (typeof param === 'number') {
                        value = param;
                    }
                    if (value) {
                        result = result.replace(`%${pattern}`, '0x' + (value as number).toString());
                    }
                } catch (ignored) {
                    throw new TypeError(`Invalid parameter type of '${param}', index ${i}`);
                }
                break;
            case 'j':
                if (param === undefined || param === null) {
                    result = result.replace(`%${pattern}`, '');
                    break;
                } else if (isPlain(param)) {
                    result = result.replace(`%${pattern}`, JSON.stringify(param));
                    break;
                }
                throw new TypeError(`Invalid parameter type of '${param}', index ${i}`);
            case 's':
                result = result.replace(`%${pattern}`, toString(param, '') as string);
                break;
            default:
                break;
        }
    }
    return result;
}
