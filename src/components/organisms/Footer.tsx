import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faYoutube,faInstagram } from "@fortawesome/free-brands-svg-icons";


// Copyright © Yoichi Ishigaki. All Rights Reserved.
const Footer: React.FC = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-black h-80 p-2 md:h-40'>
            <div className='text-center'>
                <p className="text-white block text-xl m-4 md:inline-block"> 
                    利用規約
                </p>
                <p className="text-white block text-xl m-4 md:inline-block"> 
                    よくあるご質問
                </p>
                <p className="text-white block text-xl m-4 md:inline-block"> 
                    お問い合わせ
                </p>
                <p className="text-white block text-xl m-4 md:inline-block"> 
                    プライバシーポリシー
                </p>
            </div>
            <div className='text-center'>
                {/* <a href="https://www.instagram.com/"> */}
                    <FontAwesomeIcon className="text-white font-normal m-4 text-xl" icon={faInstagram} />
                {/* </a> */}
                {/* <a href="https://www.youtube.com/"> */}
                    <FontAwesomeIcon className="text-white font-normal m-4 text-xl" icon={faTwitter} />
                {/* </a> */}
                {/* <a href="https://twitter.com/"> */}
                    <FontAwesomeIcon className="text-white font-normal m-4 text-xl" icon={faYoutube} />
                {/* </a> */}
            </div>
            <div>
                <small>
                    <p className="text-white text-lg text-center m-2">Copyright © Yoichi Ishigaki. {year} All Rights Reserved.</p>
                </small>
            </div>
        </footer>
    )
}

export default Footer
