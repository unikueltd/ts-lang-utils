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
 * Returns the replaced string of the source string (named placeholder) with the given parameters
 *
 * @param text The source string to inspect
 * @param params The parameters to replaced with, in the form of key values
 *
 * @returns the replaced string of the source string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * formatPlaceholder("foo{bar}", {bar: "bar"});    //  "foobar"
 * formatPlaceholder("foobar{none}");    //  "foobar{none}"
 * formatPlaceholder("foobar{none}", {});    //  "foobar{none}"
 * formatPlaceholder("hello {name}, foo{bar}", {name: "world", bar: "bar"});    //  "hello world, foobar"
 * ```
 */
export function formatPlaceholder(text?: string | null, params?: {[key: string]: any}): string | null | undefined {
    if (!text || text.length <= 2 || !params) {
        return text;
    }
    let result = text;
    for (const param in params) {
        const regex = new RegExp(`\\{${param}\\}`, 'g');
        const value = params[param];
        result = result.replace(regex, (value ? value.toString() : ''));
    }
    return result;
}
