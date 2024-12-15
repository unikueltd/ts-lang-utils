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


import {customAlphabet} from 'nanoid'


/**
 * Utilities for nanoid
 *
 * @author David Hsing
 */


const customNanoid = customAlphabet('346789ABCDEFGHJKMNPQRTWXY');


/**
 * Returns a popular uppercase nanoid
 * <p>
 * Without lookalikes: 1, l, I, 0, O, o, u, v, 5, S, s, 2, Z
 *
 * @param size the length expected
 *
 * @returns a popular uppercase nanoid
 */
export function getPopularUpperId(size?: number): string {
    return customNanoid(size);
}
