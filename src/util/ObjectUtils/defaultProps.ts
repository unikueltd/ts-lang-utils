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


import {isPlain} from './isPlain';
import {setProp} from './setProp';


/**
 * Returns an object that merged the given props, when the key of props is missing, or the value of matching key is null or undefined
 *
 * @param target the object to inspect
 * @param props the properties to assign
 * @param overrideNil whether to override the value of target, when it is null or undefined
 *
 * @returns an object that merged the given props, when the key of props is missing, or the value of matching key is null or undefined
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * defaultProps({}, {'foo': 'bar'});
 * ```
 */
export function defaultProps(target?: object, props?: object, overrideNil = true): object | undefined {
    if (!target || !isPlain(target)) {
        return props;
    }
    if (!props || !isPlain(props)) {
        return target;
    }
    const attributes = {};
    Object.entries(props).filter(item => {
        return !Object.prototype.hasOwnProperty.call(target, item[0]) || (overrideNil && (target[item[0] as keyof typeof target] === undefined || target[item[0] as keyof typeof target] === null));
    }).forEach(item => setProp(attributes, item[0], item[1]));
    return Object.assign(target, attributes);
}
