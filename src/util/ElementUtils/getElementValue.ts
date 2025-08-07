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


import {getValueDescriptor} from './getValueDescriptor';


/**
 * Returns the value of the given element
 *
 * @param element The element to inspect
 *
 * @returns the value of the given element
 *
 * @author David Hsing
 *
 * @see "https://coryrylan.com/blog/trigger-input-updates-with-react-controlled-inputs"
 */
export function getElementValue(element?: HTMLElement | null): string | undefined {
    const descriptor = getValueDescriptor(element);
    return !descriptor ? undefined : (descriptor.get?.call(element) || '');
}
