import React from "react";
import Nav from "./style";
import List from "./listStyle";
import avatar from "../../images/user-avatar.png";
import Icons from "./iconStyle";


const Navbar = () => {
    return (
        <Nav>
            <svg
                width="111"
                height="30"
                viewBox="0 0 111 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.2628 28.0656C13.5931 28.3589 11.8939 28.4468 10.1362 28.6809L4.77506 12.9787V29.3548C3.10529 29.5305 1.58197 29.7649 0 29.9993V0.000854492H4.45301L10.5463 17.0217V0.000854492H15.2628V28.0656ZM24.4909 10.9866C26.3073 10.9866 29.0903 10.8987 30.7601 10.8987V15.5858C28.6801 15.5858 26.2487 15.5858 24.4909 15.6737V22.6462C27.2448 22.4704 29.9985 22.2359 32.7814 22.148V26.6592L19.8035 27.6847V0.000854492H32.7814V4.68811H24.4909V10.9866ZM50.2121 4.68822H45.3491V26.2495C43.7672 26.2495 42.1852 26.2495 40.6621 26.308V4.68822H35.7991V0.000854492H50.2123L50.2121 4.68822ZM57.8288 10.6644H64.2446V15.3516H57.8288V25.9859H53.2292V0.000854492H66.3246V4.68811H57.8288V10.6644ZM73.9413 21.8844C76.6072 21.9429 79.3022 22.1483 81.9097 22.2945V26.9232C77.7205 26.6594 73.5312 26.3961 69.2541 26.308V0.000854492H73.9413V21.8844ZM85.8645 27.2455C87.3585 27.3335 88.9405 27.4214 90.4638 27.5969V0.000854492H85.8645V27.2455ZM111 0.000854492L105.053 14.2677L111 29.9993C109.242 29.7649 107.484 29.4426 105.727 29.1496L102.358 20.4784L98.9306 28.4468C97.2311 28.1536 95.5906 28.0656 93.8918 27.8313L99.9266 14.0918L94.4775 0.000854492H99.5161L102.592 7.88131L105.873 0.000854492H111V0.000854492Z"
                    fill="#B9090B"
                />
            </svg>

            <List>
                <li className="nav--active">
                    <a href="?">Ana Sayfa</a>
                </li>
                <li>
                    <a href="?">Diziler</a>
                </li>
                <li>
                    <a href="?">Filmler</a>
                </li>
                <li>
                    <a href="?">Yeni ve Popüler</a>
                </li>
                <li>
                    <a href="?">Listem</a>
                </li>
            </List>

            <Icons>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.361 18.2168L14.601 13.2662C15.8249 11.8113 16.4954 9.98069 16.4954 8.07499C16.4954 3.62251 12.8729 0 8.42045 0C3.96797 0 0.345459 3.62251 0.345459 8.07499C0.345459 12.5275 3.96797 16.15 8.42045 16.15C10.092 16.15 11.6849 15.6458 13.0467 14.6888L17.8429 19.677C18.0434 19.8852 18.313 20 18.602 20C18.8755 20 19.1349 19.8957 19.3319 19.7061C19.7504 19.3034 19.7637 18.6357 19.361 18.2168ZM8.42045 2.10652C11.7115 2.10652 14.3889 4.78391 14.3889 8.07499C14.3889 11.3661 11.7115 14.0435 8.42045 14.0435C5.12937 14.0435 2.45198 11.3661 2.45198 8.07499C2.45198 4.78391 5.12937 2.10652 8.42045 2.10652Z"
                        fill="white"
                    />
                </svg>

                <p>ÇOCUK</p>

                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.9385 10.0388C17.9385 10.1247 17.8661 10.1971 17.7801 10.1971H17.5938H16.2367H3.05906H1.70195H1.51557C1.42962 10.1971 1.35724 10.1247 1.35724 10.0388V7.52904C1.35724 7.44218 1.42962 7.3698 1.51557 7.3698H8.96885H14.5312H17.7801C17.8661 7.3698 17.9385 7.44218 17.9385 7.52904V10.0388ZM16.2367 18.5732C16.2367 18.6094 16.2032 18.6429 16.167 18.6429H10.326V11.5542H16.2367V18.5732ZM8.96885 18.6429H3.12873C3.09163 18.6429 3.05906 18.6094 3.05906 18.5732V11.5542H8.96885V18.6429ZM6.67894 1.35687C7.9112 1.35687 8.91276 2.35933 8.91276 3.59069V5.8245H6.67894C5.44759 5.8245 4.44513 4.82204 4.44513 3.59069C4.44513 2.35933 5.44759 1.35687 6.67894 1.35687ZM10.326 4.93423C10.326 3.85125 11.2072 2.97094 12.2902 2.97094C13.374 2.97094 14.2544 3.85125 14.2544 4.93423C14.2544 5.33503 14.1295 5.70326 13.9214 6.01268H10.326V4.93423ZM17.7801 6.01268H15.4188C15.5382 5.67431 15.6115 5.31422 15.6115 4.93423C15.6115 3.10303 14.1214 1.61291 12.2902 1.61291C11.4361 1.61291 10.6643 1.94677 10.0754 2.47875C9.60398 1.04474 8.26858 -0.000244141 6.67894 -0.000244141C4.69936 -0.000244141 3.08801 1.61111 3.08801 3.59069C3.08801 4.53071 3.46077 5.37665 4.05609 6.01268H1.51557C0.679585 6.01268 0.00012207 6.69305 0.00012207 7.52904V10.0388C0.00012207 10.8748 0.679585 11.5542 1.51557 11.5542H1.70195V18.5732C1.70195 19.3604 2.3416 20 3.12873 20H16.167C16.9541 20 17.5938 19.3604 17.5938 18.5732V11.5542H17.7801C18.6161 11.5542 19.2956 10.8748 19.2956 10.0388V7.52904C19.2956 6.69305 18.6161 6.01268 17.7801 6.01268Z"
                        fill="white"
                    />
                </svg>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.99999 20.0001C11.1416 20.0001 12.08 19.1302 12.1887 18.0171H7.81128C7.92003 19.1302 8.85835 20.0001 9.99999 20.0001Z"
                        fill="white"
                    />
                    <path
                        d="M17.6529 13.5882C16.982 13.5882 16.4382 13.0444 16.4382 12.3735V8.35574C16.4382 5.50652 14.5872 3.08996 12.0222 2.24203C12.0293 2.17324 12.0329 2.10352 12.0329 2.03289C12.0329 0.911953 11.121 0 10 0C8.87911 0 7.96715 0.911953 7.96715 2.03289C7.96715 2.10352 7.97082 2.17324 7.97785 2.24203C5.41289 3.08996 3.56192 5.50652 3.56192 8.35574V12.3735C3.56192 13.0444 3.01805 13.5882 2.34719 13.5882C1.44781 13.5882 0.71875 14.3173 0.71875 15.2167C0.71875 16.1161 1.44785 16.8452 2.34719 16.8452H17.6529C18.5523 16.8452 19.2814 16.1161 19.2814 15.2167C19.2814 14.3173 18.5523 13.5882 17.6529 13.5882ZM10 1.17188C10.4553 1.17188 10.8289 1.52703 10.8589 1.97477C10.5779 1.9373 10.2913 1.91762 10 1.91762C9.70879 1.91762 9.42219 1.9373 9.14122 1.97477C9.17122 1.52703 9.54481 1.17188 10 1.17188Z"
                        fill="white"
                    />
                </svg>
                <div>
                    <img alt="avatar" src={avatar}/>
                    <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.92907 7.07973L13.968 0.645906C13.9838 0.633879 13.9946 0.616512 13.9985 0.59707C14.0023 0.577628 13.9989 0.557451 13.9889 0.540332C13.9789 0.523213 13.963 0.510332 13.9442 0.50411C13.9254 0.497888 13.905 0.498754 13.8867 0.506546H0.113253C0.0950305 0.498754 0.0745892 0.497888 0.0557726 0.50411C0.0369559 0.510332 0.0210601 0.523213 0.011074 0.540332C0.001088 0.557451 -0.0023004 0.577628 0.00154573 0.59707C0.00539187 0.616512 0.0162077 0.633879 0.0319596 0.645906L6.07093 7.07973C6.19034 7.20626 6.33434 7.30707 6.4941 7.37597C6.65386 7.44487 6.82602 7.48041 7 7.48041C7.17398 7.48041 7.34614 7.44487 7.5059 7.37597C7.66566 7.30707 7.80966 7.20626 7.92907 7.07973Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </Icons>
        </Nav>
    );
};

export default Navbar;