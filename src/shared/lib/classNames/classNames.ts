type Modificators = Record<string, boolean | string>;

export function classNames(className: string, mods: Modificators = {}, additional: string[] = []): string {
  return [
    className,
    ...additional.filter(Boolean),
    Object.keys(mods).filter(modificator => mods[modificator])
  ].join(' ');
}
