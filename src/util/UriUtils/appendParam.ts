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
 * Returns the joined string that represent the given source and param
 *
 * @param source The source uri to prepend
 * @param param The target param to append
 *
 * @returns the joined string that represent the given source and param
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * appendParam(undefined, 'foo=bar');    // 'foo=bar'
 * appendParam('unikue.cn/donation', undefined);    // 'unikue.cn/donation'
 * appendParam('unikue.cn/donation', 'foo=bar');    // 'unikue.cn/donation?foo=bar'
 * appendParam('unikue.cn/donation?from=today', 'foo=bar');    // 'unikue.cn/donation?from=today&foo=bar'
 * ```
 */
export function appendParam(source?: string | null, param?: string | null): string | null | undefined {
    if (!source) {
        return param;
    }
    if (!param) {
        return source;
    }
    return source.concat((source.includes('?') ? '&' : '?'), param);
}
