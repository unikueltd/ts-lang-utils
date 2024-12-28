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
 * Utilities for json
 *
 * @author David Hsing
 */


/**
 * Returns a JSON object that represents the given string
 *
 * @param text the string to inspect
 *
 * @returns a JSON object that represents the given string
 *
 * @example
 * ```ts
 * toJsonObject(`{"foo":"bar"}`);    // {foo: 'bar'}
 * ```
 */
export function toJsonObject(text?: string | null): object | undefined {
    if (!text) {
        return undefined;
    }
    try {
        return JSON.parse(text);
    } catch(_ignored) {
    }
    return undefined;
}
