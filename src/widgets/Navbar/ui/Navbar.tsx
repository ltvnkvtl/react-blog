import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonType } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    // TODO: improve. problems with close modal animation on login
    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    buttonType={ButtonType.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('COMMON.LOGOUT')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                buttonType={ButtonType.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('COMMON.LOGIN')}
            </Button>
            <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
        </div>
    );
});
