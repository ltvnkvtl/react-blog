import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonType } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                buttonType={ButtonType.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('COMMON.LOGIN')}
            </Button>
            <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                { /* eslint-disable-next-line */ }
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores consectetur consequuntur cumque debitis deserunt distinctio dolorem doloremque doloribus earum, eos exercitationem expedita facere harum illum inventore itaque iure laborum libero magni nesciunt, nisi nobis non obcaecati officiis placeat provident quas quibusdam quisquam reiciendis rem reprehenderit sit suscipit tempore totam vero voluptatum? Accusamus animi at aut consequuntur dignissimos earum et eum hic, ipsa iste labore libero maiores nemo non numquam officia perferendis perspiciatis quam quibusdam quisquam sapiente suscipit voluptatibus! Esse est explicabo quod reprehenderit sequi. Alias assumenda dolore eligendi nisi quibusdam sapiente sequi ut vero. Architecto distinctio nobis quos velit?
            </Modal>
        </div>
    );
};
