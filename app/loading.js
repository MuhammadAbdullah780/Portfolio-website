import Image from "next/image";
import Logo from '../public/logo.png'

function loading() {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Image src={Logo} alt='name' className="animate-ping"  width={250}
            height={250} />
        </div>
    );
}

export default loading;