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


import {setElementValue} from './setElementValue';


/**
 * Clears value for the given element
 *
 * @param element the element to inspect
 * @param callback the function to execute after value been set
 *
 * @author David Hsing
 */
export function clearElementValue(element?: HTMLElement | null, callback?: ((previous?: string) => void)): void {
    setElementValue(element, undefined, callback)
}
