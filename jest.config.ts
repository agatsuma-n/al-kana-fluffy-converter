/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	testPathIgnorePatterns: [".d.ts", ".js"],
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	preset: "ts-jest",
	testEnvironment: "node",
};
