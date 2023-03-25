export function typer<T, R>(target: T): R

type ConvertedValue<T, R> = T extends string ? R : T

export function convertValueFromString<R, T = string>(value: T): ConvertedValue<T, R>