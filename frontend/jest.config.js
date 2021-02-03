module.exports = {
    roots: ["./src"],
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
        "\\.(css)$": "<rootDir>/src/__tests__/styleMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>/setup-unit-tests.ts"],
};
