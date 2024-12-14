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


/**
 * Utilities for object
 *
 * @author David Hsing
 */


/**
 * Returns the property value if property name is present on the given object
 *
 * @param object the object to inspect
 * @param prop the property name to inspect, parent property and child property are concat with dot (.)
 *
 * @returns the property value if property name is present on the given object
 *
 * @example
 * ```ts
 * getProp({foo: {bar: 'foobar'}}, 'foo.bar');    // foobar
 * ```
 */
export function getProp(object: any, prop?: string | null): any {
    if (typeof object !== 'object' || !prop) {
        return undefined;
    }
    if (!prop.includes('.')) {
        return object[prop];
    }
    const props = prop.replace(/\[/g, '.').replace(/]/g, '').split('.');
    if (!props || !props.length) {
        return undefined;
    }
    return (props.length === 1) ? object[props[0]] : props.reduce((value, name) => (value || {})[name], object);
}
