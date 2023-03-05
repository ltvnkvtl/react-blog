import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextType {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  type?: TextType;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        type = TextType.PRIMARY,
    } = props;

    return (
        <div className={classNames('', {}, [className, cls[type]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};