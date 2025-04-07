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
 * Returns whether the given string is a JSON string
 *
 * @param text the string to check
 *
 * @returns whether the given object is a JSON string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isJsonString(`{"foo": "bar"}`);    // true
 * isJsonString(`[{"foo": "bar"}]`);    // true
 * isJsonString(`[{"foo": "bar"}, {"hello": "world"}]`);    // true
 * ```
 */
export function isJsonString(text?: string | null): boolean {
    if (!text) {
        return false;
    }
    try {
        return typeof JSON.parse(text) === 'object';
    } catch(_ignored) {
    }
    return false;
}
