import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonType {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    buttonType?: ButtonType;
    square?: boolean;
    size?: ButtonSize;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        buttonType = ButtonType.OUTLINE,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;
    const mods: Mods = {
        [cls.square]: square,
    };
    const additionalClasses = [className, cls[buttonType], cls[size]];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additionalClasses)}
            {...otherProps}
        >
            {children}
        </button>
    );
});
