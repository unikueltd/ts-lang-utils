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


import {equalsAny} from '@/util/StringUtils/equalsAny';
import {isBlank} from '@/util/StringUtils/isBlank';
import {isEmpty} from './isEmpty';


/**
 * Utilities for array
 *
 * @author David Hsing
 */


/**
 * Returns whether each element in the given array is the expected type
 *
 * @param array the array to check
 * @param type the expected element type
 * @param relaxed treat null as string or object
 *
 * @returns whether each element in the given array is the expected type
 *
 * @example
 * ```ts
 * isTypeof(['foo', 'bar'], 'string');    // true
 * isTypeof(['foo', 'bar', null], 'string', true);    // true
 * ```
 */
export function isTypeof(array?: any[] | readonly any[] | null, type?: string, relaxed = false): boolean {
    if (isEmpty(array) || isBlank(type)) {
        return false;
    }
    // @ts-ignore
    return array?.every(item => {
        return (typeof item === type) || (relaxed && item === null && equalsAny(type, ['string', 'object']));
    });
}
