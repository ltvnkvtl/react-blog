import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/theme";
import LightIcon from 'shared/assets/icons/ic-theme-light.svg';
import DarkIcon from 'shared/assets/icons/ic-theme-dark.svg';
import {Button, ButtonType} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      buttonType={ButtonType.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> }
    </Button>
  );
};