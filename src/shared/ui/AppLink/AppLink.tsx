import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkType {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  DANGEROUS = 'dangerous',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  type?: AppLinkType;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        type = AppLinkType.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[type]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
