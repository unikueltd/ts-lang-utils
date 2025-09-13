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


import {NanoidUtils, RegexUtils} from '@unikue/ts-lang-utils';


describe('NanoidUtils', () => {
    test('Testing getAlphabeticId', () => {
        expect(RegexUtils.isAlphabetic(NanoidUtils.getAlphabeticId())).toBeTruthy();
    });

    test('Testing getAlphabeticLowerId', () => {
        expect(RegexUtils.isAlphabeticLower(NanoidUtils.getAlphabeticLowerId())).toBeTruthy();
    });

    test('Testing getAlphabeticUpperId', () => {
        expect(RegexUtils.isAlphabeticUpper(NanoidUtils.getAlphabeticUpperId())).toBeTruthy();
    });

    test('Testing getAlphanumericId', () => {
        expect(RegexUtils.isAlphanumeric(NanoidUtils.getAlphanumericId())).toBeTruthy();
    });

    test('Testing getAlphanumericLowerId', () => {
        expect(RegexUtils.isAlphanumericLower(NanoidUtils.getAlphanumericLowerId())).toBeTruthy();
    });

    test('Testing getAlphanumericUpperId', () => {
        expect(RegexUtils.isAlphanumericUpper(NanoidUtils.getAlphanumericUpperId())).toBeTruthy();
    });

    test('Testing getNumericId', () => {
        expect(RegexUtils.isNumeric(NanoidUtils.getNumericId())).toBeTruthy();
    });

    test('Testing getPopularId', () => {
        expect(RegexUtils.isAlphanumeric(NanoidUtils.getPopularId())).toBeTruthy();
    });

    test('Testing getPopularLowerId', () => {
        expect(RegexUtils.isAlphanumericLower(NanoidUtils.getPopularLowerId())).toBeTruthy();
    });

    test('Testing getPopularUpperId', () => {
        expect(RegexUtils.isAlphanumericUpper(NanoidUtils.getPopularUpperId())).toBeTruthy();
    });

    test('Testing getRandomId', () => {
        expect(NanoidUtils.getRandomId()).toBeDefined();
    });
});
