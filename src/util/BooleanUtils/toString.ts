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
 * Returns a string value from the boolean value
 *
 * @param value The boolean value to check
 * @param truthy The string to represent true
 * @param falsy The string to represent false
 * @param nil The string to represent undefined or null
 *
 * @returns a string value from the boolean value
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * toString(undefined, 'true', 'false');    // 'true'
 * ```
 */
export function toString(value?: boolean, truthy?: string, falsy?: string, nil?: string): string | undefined {
    return (value === undefined) ? nil : (value ? truthy : falsy);
}
