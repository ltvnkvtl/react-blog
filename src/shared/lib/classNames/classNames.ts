type Mods = Record<string, boolean | string>;

export function classNames(className: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        className,
        ...additional.filter(Boolean),
        Object.keys(mods).filter((mod) => mods[mod]),
    ].join(' ');
}
