import Image from "next/image"
import phone from "./../image/phone.png"
import mail from "./../image/mail 1.png";
import instagram from "./../image/instagram 2.png";
import youtube from "./../image/youtube 3.png";
import facebook from "./../image/facebook 4.png";
import twitter from "./../image/twitter 5.png";

export default function BlueHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <Image src={phone} alt="phone" width={16} height={16} />
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <Image src={mail} alt="mail 1" width={16} height={16} />
            <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px]">
            <Image src={instagram} alt="instagram 2" width={16} height={16} />
            <Image src={youtube} alt="YouTube" width={16} height={16} />
            <Image src={facebook} alt="facebook 4" width={16} height={16} />
            <Image src={twitter} alt="Twitter" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}