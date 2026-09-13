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


import { parsePhoneNumberFromString, PhoneNumber, type CountryCode } from 'libphonenumber-js';


/**
 * Masks an international mobile phone number, regardless of its country.
 *
 * The local number keeps its leading digits in plain text, replaces the middle 4 digits with `*`,
 * and keeps the trailing 4 digits in plain text. The country calling code is dropped from the result,
 * so the masked value is a pure local number.
 *
 * The `text` may be:
 * - a plain local number, e.g. `13800138000`;
 * - an E.164 number with a `+` prefix, e.g. `+8613800138000`;
 * - an E.164 number followed by a dash, e.g. `+86-13812345678`.
 *
 * The optional `alphaOrDial` hints the country of the number:
 * - a two-letter ISO country code (case-insensitive, e.g. `CN`, `US`); or
 * - a dial code (e.g. `+86`, `86`). When it is a dial code and `text` has no `+` prefix,
 *   it is prepended to `text` so that `libphonenumber-js` can detect the country automatically.
 *
 * When `alphaOrDial` is omitted, `text` is parsed directly and the country is auto-detected,
 * which requires `text` to carry a `+` country code; otherwise the number cannot be resolved
 * and `undefined` is returned.
 *
 * A number is masked only when `libphonenumber-js` can resolve it to a country and extract its
 * local number; input that cannot be parsed (e.g. a bare local number without a country hint,
 * or an overly short number) yields `undefined`.
 *
 * @param text The mobile phone number to mask
 * @param alphaOrDial The ISO alpha-2 country code or dial code that hints the number's country
 *
 * @returns a masked local mobile number, or undefined if the given text is not a resolvable mobile number
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * maskMobile(undefined);                 // undefined
 * maskMobile('13800138000', 'CN');       // '138****8000'
 * maskMobile('+8613800138000');          // '138****8000'
 * maskMobile('+86-13812345678');         // '138****5678'
 * maskMobile('13812345678', '+86');      // '138****5678'
 * maskMobile('13812345678', 'cn');       // '138****5678'
 * maskMobile('5551234567', 'US');        // '55****4567'
 * maskMobile('+12025550123');            // '20****0123'
 * maskMobile('+447911123456');           // '79****3456'
 * maskMobile('invalid');                 // undefined
 * ```
 */
export function maskMobile(text?: string | null, alphaOrDial?: string): string | undefined {
    if (!text) {
        return undefined;
    }

    let country: CountryCode | undefined;
    let input = text;

    if (alphaOrDial) {
        if (/^[A-Za-z]{2}$/i.test(alphaOrDial)) {
            country = alphaOrDial.toUpperCase() as CountryCode;
        } else if (!text.startsWith('+')) {
            input = '+' + alphaOrDial.replace(/^\+/, '') + text;
        }
    }

    let parsed: PhoneNumber | undefined;
    try {
        parsed = country ? parsePhoneNumberFromString(input, country) : parsePhoneNumberFromString(input);
    } catch {
        return undefined;
    }

    if (!parsed || !parsed.country) {
        return undefined;
    }

    const phone = parsed.nationalNumber;
    if (phone.length < 8) {
        return undefined;
    }

    return phone.slice(0, phone.length - 8) + '****' + phone.slice(phone.length - 4);
}
