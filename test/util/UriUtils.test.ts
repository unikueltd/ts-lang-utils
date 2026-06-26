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


import { UriUtils } from '@unikue/ts-lang-utils';


describe('UriUtils.test', () => {
    test('Testing appendParam', () => {
        expect(UriUtils.appendParam(undefined, 'foo=bar')).toBe('foo=bar');
        expect(UriUtils.appendParam('unikue.cn/donation', undefined)).toBe('unikue.cn/donation');
        expect(UriUtils.appendParam('unikue.cn/donation', 'foo=bar')).toBe('unikue.cn/donation?foo=bar');
        expect(UriUtils.appendParam('unikue.cn/donation?from=today', 'foo=bar')).toBe('unikue.cn/donation?from=today&foo=bar');
    });

    test('Testing isHttp', () => {
        expect(UriUtils.isHttp('http://example.com')).toBe(true);
        expect(UriUtils.isHttp('HTTP://EXAMPLE.COM')).toBe(true);
        expect(UriUtils.isHttp('Http://Example.Com')).toBe(true);
        expect(UriUtils.isHttp('https://example.com')).toBe(false);
        expect(UriUtils.isHttp('HTTPS://EXAMPLE.COM')).toBe(false);
        expect(UriUtils.isHttp('ftp://example.com')).toBe(false);
        expect(UriUtils.isHttp(undefined)).toBe(false);
        expect(UriUtils.isHttp(null)).toBe(false);
        expect(UriUtils.isHttp('')).toBe(false);
    });

    test('Testing isHttps', () => {
        expect(UriUtils.isHttps('https://example.com')).toBe(true);
        expect(UriUtils.isHttps('HTTPS://EXAMPLE.COM')).toBe(true);
        expect(UriUtils.isHttps('Https://Example.Com')).toBe(true);
        expect(UriUtils.isHttps('http://example.com')).toBe(false);
        expect(UriUtils.isHttps('HTTP://EXAMPLE.COM')).toBe(false);
        expect(UriUtils.isHttps('ftp://example.com')).toBe(false);
        expect(UriUtils.isHttps(undefined)).toBe(false);
        expect(UriUtils.isHttps(null)).toBe(false);
        expect(UriUtils.isHttps('')).toBe(false);
    });
});
