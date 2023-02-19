export interface Weather {
  code: string,
  soundUrl: string,
  iconUrl: string,
  bgUrl: string,
}

/**
 * @see https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
 */
export type HTMLElementEvent<T = any> = Event & {
  target: T;
}
