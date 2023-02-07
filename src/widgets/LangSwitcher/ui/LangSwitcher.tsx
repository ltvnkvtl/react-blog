import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonType} from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      buttonType={ButtonType.CLEAR}
      onClick={toggle}
    >
      {t('COMMON.CHANGE_LANG')}
    </Button>
  );
};