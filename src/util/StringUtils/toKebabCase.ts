/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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


import { kebabCase } from 'lodash';


/**
 * Returns the kebab case representation of the given string
 *
 * @param text The source string to inspect
 *
 * @returns the kebab case representation of the given string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * toKebabCase('FOO BAR');    // 'foo-bar'
 * toKebabCase('fooBar');    // 'foo-bar'
 * toKebabCase('__FOO_BAR__');    // 'foo-bar'
 * ```
 */
export function toKebabCase(text?: string | null): string | null | undefined {
    return !text ? text : kebabCase(text);
}
