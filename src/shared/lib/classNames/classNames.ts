type Modificators = Record<string, boolean | string>;

export function classNames(className: string, modificators: Modificators, additional: string[]): string {
  return [
    className,
    ...additional,
    Object.keys(modificators).filter(modificator => modificators[modificator])
  ].join(' ');
}
