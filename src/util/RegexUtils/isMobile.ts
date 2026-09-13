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


import { CHINESE_MOBILE_REGEX } from '@/constant/regex-pattern';
import { compilePattern } from './compilePattern';
import { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js';


/**
 * Returns whether the given text is a valid mobile phone number
 *
 * The `alphaOrPattern` argument accepts two kinds of values:
 * - a two-letter ISO country code (case-insensitive, e.g. `CN`, `US`), in which case the number
 *   is validated through `libphonenumber-js` against that country;
 * - a regex or regex pattern string, in which case the behaviour is unchanged: the text is tested
 *   against that regex (defaulting to the Chinese mobile number rule).
 *
 * @param text The text to check
 * @param alphaOrPattern The ISO alpha-2 country code to validate via `libphonenumber-js`,
 *        or a regex / regex pattern for mobile numbers (defaults to China)
 *
 * @returns whether the given text is a valid mobile phone number
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isMobile(undefined);                                    // false
 * isMobile('13812345678');                                // true
 * isMobile('+8613812345678');                             // true, 带国家码
 * isMobile('+86-13812345678');                            // true, 带国家码与连字符
 * isMobile('12345678901');                                // false
 * isMobile('0086-13812345678');                           // false, 国际拨号前缀
 * isMobile('2125551234', 'US');                           // true, 美国（libphonenumber-js 校验）
 * isMobile('2125551234', '^[2-9]\\d{2}[2-9]\\d{6}$');     // true, 美国（正则）
 * isMobile('2125551234', /^[2-9]\d{2}[2-9]\d{6}$/);       // true, 美国（正则）
 * isMobile('1125551234', /^[2-9]\d{2}[2-9]\d{6}$/);       // false, 区号不能以 1 开头
 * ```
 */
export function isMobile(text?: string | null, alphaOrPattern: string | RegExp = CHINESE_MOBILE_REGEX): boolean {
    if (!text) {
        return false;
    }
    if (typeof alphaOrPattern === 'string' && /^[A-Za-z]{2}$/i.test(alphaOrPattern)) {
        try {
            return isValidPhoneNumber(text, alphaOrPattern.toUpperCase() as CountryCode);
        } catch {
            return false;
        }
    }
    if (typeof alphaOrPattern === 'string') {
        const regex = compilePattern(alphaOrPattern);
        return !!regex && regex.test(text);
    }
    return alphaOrPattern.test(text);
}
