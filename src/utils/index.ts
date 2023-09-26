export * from "./regExp";
export * from "./htmlElement";

export const nonNullable = <T>(value: T): value is NonNullable<T> =>
	value != null;