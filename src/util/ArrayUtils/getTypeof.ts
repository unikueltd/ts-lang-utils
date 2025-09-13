/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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


import {isEmpty} from './isEmpty';


/**
 * Returns the element types of the given array
 *
 * @param array The array to check
 *
 * @returns the element types of the given array
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * getTypeof(['foo', 'bar']);    // ['string', 'string']
 * ```
 */
export function getTypeof(array?: any[] | readonly any[] | null): string[] | undefined {
    if (isEmpty(array)) {
        return undefined;
    }
    return array?.map(item => {
        if (Array.isArray(item)) {
            return 'array';
        }
        if (typeof item === 'object') {
            return (item === null) ? 'null' : 'object';
        }
        return typeof item;
    });
}
