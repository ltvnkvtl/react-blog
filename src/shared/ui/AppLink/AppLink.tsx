import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGEROUS = 'dangerous',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  type?: AppLinkType;
}

export const AppLink: FC<AppLinkProps> = (props) => {
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
};
