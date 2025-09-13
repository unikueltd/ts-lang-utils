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


import {isPlain} from './isPlain';


/**
 * Processes each prop key in the object
 *
 * @param object The object to inspect
 * @param callback The callback function that processes each prop key
 *
 * @author David Hsing
 */
export function forEachProp(object: any, callback?: (key?: string, index?: number) => void): void {
    if (!object || !isPlain(object) || !callback) {
        return;
    }
    Object.keys(object).filter(key => Object.prototype.hasOwnProperty.call(object, key)).forEach((key: string, index: number) => {
        callback(key, index);
    });
}
