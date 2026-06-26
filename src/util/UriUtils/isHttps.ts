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
 * Checks whether the given url started with 'https://', case insensitive
 *
 * @param url The url to test
 *
 * @returns `true` if the url started with 'https://', otherwise `false`
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isHttps('https://example.com');     // true
 * isHttps('HTTPS://EXAMPLE.COM');     // true
 * isHttps('http://example.com');      // false
 * isHttps('ftp://example.com');       // false
 * isHttps(undefined);                 // false
 * isHttps(null);                      // false
 * ```
 */
export function isHttps(url?: string | null): boolean {
    return !!url && url.toLowerCase().startsWith('https://');
}
