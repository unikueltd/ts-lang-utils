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


const findPropIgnoreCase = (object: any, propName: string): string | undefined => {
    if (typeof object !== 'object' || !object) {
        return undefined;
    }
    return Object.keys(object).find(key => key.toLowerCase() === propName.toLowerCase());
};


/**
 * Returns the property value if property name is present on the given object, case-insensitive
 *
 * @param object The object to inspect
 * @param prop The property name to inspect, parent property and child property are concat with dot (.), case insensitive
 * @param defaultValue The default value if the prop cannot be found
 *
 * @returns the property value if property name is present on the given object, case-insensitive
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * getPropIgnoreCase({Foo: 'bar'}, 'foo');    // 'bar'
 * getPropIgnoreCase({foo: {bar: 'foobar'}}, 'FOO.BAR');    // 'foobar'
 * ```
 */
export function getPropIgnoreCase(object: any, prop?: string | null, defaultValue?: any): any {
    if (typeof object !== 'object' || !prop) {
        return defaultValue;
    }
    if (!prop.includes('.')) {
        const actualProp = findPropIgnoreCase(object, prop);
        return actualProp !== undefined ? object[actualProp] : defaultValue;
    }
    const props = prop.replace(/\[/g, '.').replace(/]/g, '').split('.');
    if (!props || !props.length) {
        return defaultValue;
    }
    let result: any = object;
    for (let i = 0; i < props.length; i++) {
        if (typeof result !== 'object' || !result) {
            return defaultValue;
        }
        const actualProp = findPropIgnoreCase(result, props[i]);
        if (actualProp === undefined) {
            return defaultValue;
        }
        result = result[actualProp];
    }
    return result;
}
