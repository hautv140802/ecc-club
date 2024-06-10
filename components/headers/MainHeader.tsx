'use client';
import icons from '@/assets/svgs';
import { Menu } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  { key: '1', label: 'Option 1' },
  { key: '2', label: 'Option 2' },
  { key: '3', label: 'Option 3' },
];
const MainHeader = () => {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <header className="bg-gradient-blue-light">
      <div className="flex flex-row-reverse justify-between md:flex-row items-center my-[1rem] mx-[2rem]">
        <div className="md:w-full md:flex-3 md:ml-[12.9rem] md:my-[2.3rem]">
          <a href="/" className="flex flex-row items-center">
            <Image
              src={icons.logo}
              alt="logo"
              priority={true}
              className="w-[5rem] h-[5rem] my-[1rem] md:w-[13rem] md:h-[13rem]"
            />
            <p className="hidden md:block font-pop text-[4rem] ml-[4rem] font-bold bg-gradient-bule-light-text inline-block text-transparent bg-clip-text">
              ECommerce UIT
            </p>
          </a>
        </div>

        <nav className="hidden md:block w-full flex-2 mr-[10rem] ml-[19rem]">
          <ul className="w-full h-full flex flex-row justify-between items-center text-[4rem] font-400">
            <li>
              <a
                href="/"
                className={clsx([
                  'text-[4rem]',
                  pathname === '/' ? 'border-b-[0.5rem] border-[#FFFFFF]' : '',
                ])}
              >
                Trang chủ
              </a>
            </li>

            <li>
              <a
                href="/news"
                className={clsx([
                  'text-[4rem]',
                  pathname === '/news'
                    ? 'border-b-[0.5rem] border-[#FFFFFF]'
                    : '',
                ])}
              >
                Tin tức
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={clsx([
                  'text-[4rem]',
                  pathname === '/about'
                    ? 'border-b-[0.5rem] border-[#FFFFFF]'
                    : '',
                ])}
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={clsx([
                  'text-[4rem]',
                  pathname === '/contact'
                    ? 'border-b-[0.5rem] border-[#FFFFFF]'
                    : '',
                ])}
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>

        {/* <div className="md:hidden relative ">
          <Image
            src={icons.menu}
            priority
            alt="menu"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
          <Menu
            rootClassName="bg-gradient-blue-light"
            className="absolute left-[-4rem] top-[5rem]"
            items={items}
            hidden={isOpenMenu}
          />
        </div> */}
      </div>
    </header>
  );
};

export default MainHeader;
