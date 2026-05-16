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


import { isPlain } from './isPlain';


/**
 * Sets the property value on the given object
 *
 * @param object The object to inspect
 * @param prop The property name to inspect
 * @param value The value to set
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * setProp({}, 'foo', 'bar');
 * ```
 */
export function setProp(object: any, prop?: string | null, value?: any): void {
    if (isPlain(object) && prop) {
        object[prop as keyof typeof object] = value;
    }
}
