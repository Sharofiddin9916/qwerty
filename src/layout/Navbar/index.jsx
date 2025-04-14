import React from 'react';
import {
    NavbarWrapper,
    TopInfoWrapper,
    NavbarContentWrapper,
    MenuItems,
    ContactsWrapper,
} from './Navbar.styles';
import { Link } from 'react-router';
import LogoSvg from '../../assets/images/logo.svg';
import { Button, Input } from '../../components';
import { CartIcon, HeartIcon, NetworkIcon, TogglerIcon } from '../../assets/icons';

function Navbar() {
    return (
        <NavbarWrapper className='container'>
            <TopInfoWrapper>
                <MenuItems>
                    <Link to="/" className='link'> компании</Link>
                    <Link className='link'>Доставка и оплата</Link>
                    <Link className='link'>Возврат</Link>
                    <Link className='link'>Гарантии</Link>
                    <Link className='link'>Контакты</Link>
                    <Link className='link'>Блог</Link>
                </MenuItems>
                <ContactsWrapper>
                    <a href='tel:88008904656'>8 (800) 890-46-56</a>
                    <button>Заказать звонок</button>
                </ContactsWrapper>
            </TopInfoWrapper>
            <NavbarContentWrapper>
                <Link to='/'>
                    <img className='logo' src={LogoSvg} alt="Logo" />
                </Link>
                <Button>
                    <TogglerIcon /> Каталог
                </Button>
                <Input type="search" placeholder="Поиск по товарам" />
                <div className='action-bar'>
                    <div>
                        <HeartIcon />
                        <p>Избранное</p>
                    </div>
                    <div>
                        <NetworkIcon />
                        <p>Сравнение</p>
                    </div>
                    <div>
                        <CartIcon />
                        <p>Корзина</p>
                    </div>
                </div>
            </NavbarContentWrapper>
        </NavbarWrapper>
    );
}

export default Navbar;