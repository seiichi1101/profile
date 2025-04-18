import React from 'react';
import Link from 'next/link';
import { Seiichi } from './icons/seiichi';

const Header: React.FC = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Seiichi className="mx-2" />
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex space-x-6">
            <Link href="/projects">
              <span className="text-white hover:text-gray-300">Projects</span>
            </Link>
            <Link href="/blogs">
              <span className="text-white hover:text-gray-300">Blogs</span>
            </Link>
            <Link href="/showcases">
              <span className="text-white hover:text-gray-300">Showcases</span>
            </Link>
          </div>

          {/* モバイルメニュー */}
          <div className="md:hidden relative">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label
              htmlFor="menu-toggle"
              className="text-white cursor-pointer"
              aria-label="メニュー">
              ☰
            </label>

            <div className="hidden peer-checked:block absolute top-full right-0 mt-2 w-48 bg-black rounded-lg shadow-lg">
              <div className="py-2">
                <Link href="/projects">
                  <span className="block px-4 py-2 text-white hover:bg-gray-800">Projects</span>
                </Link>
                <Link href="/blogs">
                  <span className="block px-4 py-2 text-white hover:bg-gray-800">Blogs</span>
                </Link>
                <Link href="/showcases">
                  <span className="block px-4 py-2 text-white hover:bg-gray-800">Showcases</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
