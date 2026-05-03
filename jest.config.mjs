export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    moduleNameMapper: {
        '^@$': '<rootDir>/src',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@unikue/ts-lang-utils$': '<rootDir>/src',
        '^@unikue/ts-lang-utils/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: './tsconfig.test.json'
        }]
    }
};
