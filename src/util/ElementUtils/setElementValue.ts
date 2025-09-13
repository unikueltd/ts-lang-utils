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


import {getValueDescriptor} from './getValueDescriptor';


/**
 * Sets value for the given element
 *
 * @param element The element to inspect
 * @param value The value to set
 * @param callback The function to execute after value been set
 *
 * @author David Hsing
 *
 * @see "https://coryrylan.com/blog/trigger-input-updates-with-react-controlled-inputs"
 */
export function setElementValue(element?: HTMLElement | null, value?: string, callback?: ((previous?: string) => void)): void {
    const descriptor = getValueDescriptor(element);
    if (!descriptor) {
        return;
    }
    const previous = descriptor.get?.call(element) || '';
    descriptor.set?.call(element, value || '');
    element?.dispatchEvent(new Event('change', {bubbles: true}));
    if (callback) {
        callback(previous);
    }
}
