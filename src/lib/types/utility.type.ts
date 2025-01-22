/**
 * 함수의 첫번째 인자 타입을 가져오는 유틸리티 타입
 *
 * @example
 * function example(num: number, str: string) { return str; }
 * type FirstParam = Parameter<typeof example>; // number
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Parameter<T> = T extends (param: infer U) => any ? U : never;

/**
 * 배열의 요소 타입을 가져오는 유틸리티 타입
 */
type ArrayElement<T> = T extends Array<infer U> ? U : never;

/**
 * 객체의 값 타입을 가져오는 유틸리티 타입
 */
type ValueOf<T> = T[keyof T];

export { type Parameter, type ArrayElement, type ValueOf };
