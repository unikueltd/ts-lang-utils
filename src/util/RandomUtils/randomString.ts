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


import {randomInteger} from './randomInteger';
import {randomElement} from './randomElement';


/**
 * Utilities for random
 *
 * @author David Hsing
 */


/**
 * Returns a random string that between the length range
 *
 * @param minLength the min length, inclusive
 * @param maxLength the max length, exclusive
 * @param characters the source characters to be generated from
 *
 * @returns a random string that between the length range
 *
 * @example
 * ```ts
 * randomString(8);
 * ```
 */
export function randomString(minLength?: number, maxLength?: number, characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'): string | undefined {
    if (!minLength || minLength <= 0 || (maxLength && maxLength < minLength) || !characters) {
        return undefined;
    }
    if (maxLength === undefined && characters.length === 1) {
        return characters.repeat(minLength);
    }
    const result: string[] = [];
    const length = (maxLength === undefined) ? minLength : randomInteger(minLength, maxLength) as number;
    const source = characters.split('') as string[];
    for (let i = 0; i < length; i++) {
        result.push(randomElement(source) as string);
    }
    return result.join('');
}
