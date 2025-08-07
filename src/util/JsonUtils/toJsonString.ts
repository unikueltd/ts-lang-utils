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


import {isPlain} from '@/util/ObjectUtils/isPlain';


/**
 * Returns a JSON string that represents the given object
 *
 * @param target The object to inspect
 *
 * @returns a JSON string that represents the given object
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * toJsonString({foo: 'bar'});    // `{"foo":"bar"}`
 * ```
 */
export function toJsonString(target: any): string | undefined {
    if (typeof target === 'string' && (target as string).length > 0) {
        try {
            const json = JSON.parse(target as string);
            if (typeof json === 'object') {
                return JSON.stringify(json);
            }
        } catch {
        }
    }
    if (isPlain(target)) {
        return JSON.stringify(target);
    }
    return undefined;
}
