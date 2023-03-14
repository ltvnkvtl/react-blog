import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/theme';
import LightIcon from 'shared/assets/icons/ic-theme-light.svg';
import DarkIcon from 'shared/assets/icons/ic-theme-dark.svg';
import { Button, ButtonType } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            buttonType={ButtonType.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
});
