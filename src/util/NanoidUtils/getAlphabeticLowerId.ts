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


import { customAlphabet } from 'nanoid';


const customNanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz');


/**
 * Returns an alphabetic lowercase nanoid
 *
 * @param size The length expected
 *
 * @returns an alphabetic lowercase nanoid
 *
 * @author David Hsing
 */
export function getAlphabeticLowerId(size?: number): string {
    return customNanoid(size);
}
