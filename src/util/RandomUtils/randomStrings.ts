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


import {randomString} from './randomString';


/**
 * Returns a random string array that between the length range, matching the given size
 *
 * @param size the size of the expected array
 * @param minLength the min length, inclusive
 * @param maxLength the max length, exclusive
 * @param characters the source characters to be generated from
 *
 * @returns a random string array that between the length range, matching the given size
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * randomStrings(3, 6, 10);
 * ```
 */
export function randomStrings(size?: number, minLength?: number, maxLength?: number, characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'): string[] | undefined {
    if (!size || size <= 0 || size > Number.MAX_SAFE_INTEGER || !minLength || minLength <= 0) {
        return undefined;
    }
    const result: string[] = [];
    for (let i = 0; i < size; i++) {
        const value = randomString(minLength, maxLength, characters);
        if (!value) {
            break;
        }
        result.push(value);
    }
    return result;
}
