import icons from '@/assets/svgs';
import Image from 'next/image';

const MainFooter = () => {
  return (
    <footer className="bg-gradient-blue-light text-[3.2rem] px-[3rem] md:px-[13.3rem] py-[5rem] md:pt-[7.3rem] md:pb-[11.3rem]">
      <div className="flex-8 flex flex-col md:flex-row ">
        <div className="w-full md:w-[60%] flex flex-col">
          <h3 className="text-[2rem] mb-[2rem] text-[2.5rem] md:text-[4.8rem] font-pop font-bold md:mb-[4.6rem]">
            ECC Blogs
          </h3>
          <p className="text-[2.5rem] md:text-[3.2rem] font-[400] text-justify pr-0 md:pr-[25rem]">
            TLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            scelerisque tortor sit amet condimentum porttitor. Integer augue
            urna, volutpat in sapien a, convallis commodo quam
          </p>
        </div>
        <div className="w-full md:w-[15%] flex items-center md:ml-[22rem] md:mr-[10.8rem]">
          <nav className="w-full">
            <ul className="w-full mt-[2rem] md:mt-[10.3rem] flex flex-row justify-between md:flex-col gap-[0.5rem] ">
              <li>
                <a
                  href="/"
                  className="text-[2.5rem] md:text-[4rem] font-[400] text-nowrap"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-[2.5rem] md:text-[4rem] font-[400] text-nowrap"
                >
                  Tin tức
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-[2.5rem] md:text-[4rem] font-[400] text-nowrap"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[2.5rem] md:text-[4rem] font-[400] text-nowrap"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-[25%] flex flex-row justify-between items-center mt-[2rem] md:mr-[20.8rem] md:mt-0">
          <a href="#" className="w-[4rem] h-[4rem] md:w-auto md:h-auto">
            <Image src={icons.facebook} alt="icon-facebool" />
          </a>
          <a href="#" className="w-[4rem] h-[4rem] md:w-auto md:h-auto">
            <Image src={icons.discord} alt="icon-discord" />
          </a>
          <a href="#" className="w-[4rem] h-[4rem] md:w-auto md:h-auto">
            <Image src={icons.instagram} alt="icon-instagram" />
          </a>
        </div>
      </div>
      <div className="text-[2.5rem] md:text-[4rem] mt-[2rem] md:mt-[5rem]">
        <p>COPYRIGHT &copy; 2022 ECC Club</p>
      </div>
    </footer>
  );
};

export default MainFooter;
