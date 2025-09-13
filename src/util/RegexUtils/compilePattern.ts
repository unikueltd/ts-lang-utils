/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
 * Returns a regex that compiled by the given pattern
 *
 * @param pattern The pattern to inspect
 * @param flags Any combination of <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags' target='_blank'>flag values</a>
 *
 * @returns a regex that compiled by the given pattern
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * compilePattern('[a-zA-Z0-9]+', 'g');
 * ```
 */
export function compilePattern(pattern?: string | null, flags?: string): RegExp | undefined {
    if (!pattern) {
        return undefined;
    }
    try {
        return new RegExp(pattern, flags);
    } catch {
    }
    return undefined;
}
