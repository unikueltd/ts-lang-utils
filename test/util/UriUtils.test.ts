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


import {UriUtils} from '@unikue/ts-lang-utils';


describe('UriUtils', () => {
    test('Testing appendParam', () => {
        expect(UriUtils.appendParam(undefined, 'foo=bar')).toBe('foo=bar');
        expect(UriUtils.appendParam('unikue.cn/donation', undefined)).toBe('unikue.cn/donation');
        expect(UriUtils.appendParam('unikue.cn/donation', 'foo=bar')).toBe('unikue.cn/donation?foo=bar');
        expect(UriUtils.appendParam('unikue.cn/donation?from=today', 'foo=bar')).toBe('unikue.cn/donation?from=today&foo=bar');
    });
});
