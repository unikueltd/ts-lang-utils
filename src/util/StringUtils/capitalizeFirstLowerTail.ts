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


/**
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns the first letter uppercase and others lowercase representation of the given string
 *
 * @param text the source string to check
 *
 * @returns the letter uppercase and others lowercase representation of the given string
 *
 * @example
 * ```ts
 * capitalizeFirstLowerTail('fooBar');    // 'Foobar'
 * ```
 */
export function capitalizeFirstLowerTail(text?: string | null): string | undefined | null {
    return !text ? text : (text.charAt(0).toUpperCase() + text.substring(1)?.toLowerCase());
}
