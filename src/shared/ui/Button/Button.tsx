import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonType {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonType?: ButtonType;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    buttonType,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[buttonType]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
