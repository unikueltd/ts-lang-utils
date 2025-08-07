/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
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


/**
 * Returns whether the given pattern can be compiled to a regex
 *
 * @param pattern The pattern to check
 * @param flags Any combination of <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags' target='_blank'>flag values</a>
 *
 * @returns whether the given pattern can be compiled to a regex
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isCompilable(undefined);    // false
 * isCompilable('foobar');    // true
 * isCompilable('[a-zA-Z0-9]+', 'g');    // true
 * ```
 */
export function isCompilable(pattern?: string | null, flags?: string): boolean {
    if (!pattern) {
        return false;
    }
    try {
        new RegExp(pattern, flags);
        return true;
    } catch {
    }
    return false;
}
