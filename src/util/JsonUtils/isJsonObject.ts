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


import { isPlain } from '@/util/ObjectUtils/isPlain';


/**
 * Returns whether the given object is a json object
 *
 * @param object The object to check
 *
 * @returns whether the given object is a json object
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isJsonObject(undefined);    // false
 * isJsonObject({foo: 'bar'});    // true
 * ```
 */
export function isJsonObject(object: any): boolean {
    return isPlain(object);
}
