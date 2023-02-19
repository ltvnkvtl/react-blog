import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonType {
    CLEAR = 'clear',
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        buttonType,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
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
};
