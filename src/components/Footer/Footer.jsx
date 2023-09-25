import TELEGRAM from '../../assets/TELEGRAM.svg';
import GITHUB from '../../assets/GITHUB.svg';
import INSTAGRAM from '../../assets/INSTAGRAM.svg';


function Footer() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-gray-900 w-full py-20 mt-36">
      <p className="text-white text-3xl">social media</p>
      <div className="flex gap-1">
        <img src={TELEGRAM} alt="telegram" className="w-7 h-7 cursor-pointer"/>
        <img src={GITHUB} alt="github" className="w-7 h-7 cursor-pointer"/>
        <img src={INSTAGRAM} alt="instagram" className="w-7 h-7 cursor-pointer"/>
      </div>
    </div>
  );
}

export default Footer;
