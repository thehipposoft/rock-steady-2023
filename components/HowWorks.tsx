"use client"
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "./common/Carousel";

type constantsType = {
    title: string,
    text: React.ReactElement,
    icon: React.ReactElement,
    image: string,
    order: number,
}

const HOW_WORKS: constantsType[] = [
    {
        order: 1,
        title: 'Discover',
        text: <p>
            A discovery is a preliminary phase that involves <span className={'font-poppins-bold'}>researching the problem space, framing the problem to be solved, and gathering enough evidence</span> and initial direction on what to do next.
        </p>,
        image: '/assets/how/discovery.png',
        icon: <svg className={'mb-6'} fill="#D9B346" width="31" height="31" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.81 481.81">
            <path d="M477.986,413.648L324.612,260.274c-5.421-5.496-14.306-5.496-19.802,0l-3.388,3.388l-14.381-14.456 c44.122-62.344,37.195-148.48-17.242-202.993c-61.666-61.591-161.958-61.591-223.548,0c-61.666,61.666-61.666,161.958,0,223.624 c30.569,30.569,71.078,46.155,111.737,46.155c31.849,0,63.849-9.562,91.181-28.988l14.456,14.456l-3.388,3.388 c-5.421,5.496-5.496,14.381,0,19.802l153.374,153.374c1.581,1.581,4.668,3.765,9.638,3.765c1.581,0,3.388-0.226,5.346-0.753 c17.769-4.744,47.661-34.635,52.48-52.405C483.256,420.425,480.094,415.681,477.986,413.648z M238.475,238.514 c-22.136,22.212-51.351,33.28-80.489,33.28c-29.139,0-58.278-11.068-80.489-33.28c-44.348-44.348-44.348-116.631,0-160.979 c44.424-44.348,116.631-44.348,160.979,0C282.899,121.884,282.899,194.166,238.475,238.514z">
            </path>
        </svg>,
    },
    {
        order: 2,
        title: 'Innovation',
        text: <p>
            We adopt a <span className={'font-poppins-bold'}>human-centred perspective in creating innovative solutions</span> while also integrating logic and research. In order to embrace innovation, we need to ensure that we have the right mindsets, collaborative teams, and conducive environments.
        </p>,
        image: '/assets/how/innovation.png',
        icon: <svg width="31" height="31" className={'mb-6'} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4997 30.0368C7.45699 30.0368 0.9375 23.5173 0.9375 15.4747C0.9375 7.43196 7.45699 0.912476 15.4997 0.912476C23.5424 0.912476 30.0619 7.43196 30.0619 15.4747C30.0619 23.5173 23.5424 30.0368 15.4997 30.0368ZM15.4997 27.1244C18.5894 27.1244 21.5525 25.897 23.7373 23.7123C25.922 21.5275 27.1494 18.5644 27.1494 15.4747C27.1494 12.385 25.922 9.42179 23.7373 7.23704C21.5525 5.05229 18.5894 3.82491 15.4997 3.82491C12.41 3.82491 9.44682 5.05229 7.26207 7.23704C5.07732 9.42179 3.84994 12.385 3.84994 15.4747C3.84994 18.5644 5.07732 21.5275 7.26207 23.7123C9.44682 25.897 12.41 27.1244 15.4997 27.1244ZM8.21859 14.7465L21.3246 9.64978L16.2278 22.7587L14.0435 16.9309L8.21859 14.7465Z" fill="#D9B346"/>
        </svg>
    },
    {
        order: 3,
        title: 'Development',
        text: <p>
           We specialize in the development of <span className={'font-poppins-bold'}>customized websites</span>, and we put them together tailored to the client's needs.
        </p>,
        image: '/assets/how/development.png',
        icon:  <svg width="31" height="31" className={'mb-6'} viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.1442 8.56104L26.5999 9.15266C27.2014 10.5608 27.507 12.0538 27.507 13.5899C27.507 20.1147 21.9067 25.4224 15.0223 25.4224C11.986 25.4224 9.07614 24.3625 6.81412 22.4898L9.30658 22.1453L9.06759 20.5838L4.20215 21.2556V25.4224H5.86678V23.7917C8.40973 25.8398 11.6448 27.0001 15.0223 27.0001C22.8236 27.0001 29.1716 20.9844 29.1716 13.5899C29.1716 11.8496 28.8254 10.158 28.1442 8.56104Z" fill="#D9B346"/>
            <path d="M14.9775 1.57766C18.0137 1.57766 20.9236 2.63754 23.1856 4.51028L20.6931 4.85474L20.9321 6.4162L25.7976 5.74443V1.57766H24.1329V3.20839C21.59 1.16021 18.3549 0 14.9775 0C7.17613 0 0.828125 6.01563 0.828125 13.4101C0.828125 15.1504 1.17437 16.842 1.85553 18.439L3.39987 17.8473C2.79838 16.4392 2.49275 14.9462 2.49275 13.4101C2.49275 6.88535 8.09301 1.57766 14.9775 1.57766Z" fill="#D9B346"/>
            <path d="M22.4229 14.2684V12.7318H20.6899C20.5487 11.8252 20.172 10.9962 19.6074 10.2942L20.8312 9.1537L19.6648 8.06728L18.441 9.20779C17.6874 8.68192 16.7976 8.33106 15.8243 8.19969V6.58545H14.1747V8.19969C13.2015 8.33106 12.3116 8.68192 11.558 9.20779L10.3342 8.06728L9.16785 9.1537L10.3917 10.2942C9.82698 10.9962 9.45032 11.8252 9.30916 12.7318H7.57617V14.2684H9.30916C9.45032 15.175 9.82698 16.004 10.3917 16.706L9.16785 17.8465L10.3342 18.9329L11.558 17.7924C12.3116 18.3183 13.2015 18.6691 14.1747 18.8005V20.4147H15.8243V18.8005C16.7976 18.6691 17.6874 18.3183 18.441 17.7924L19.6648 18.9329L20.8312 17.8465L19.6074 16.706C20.172 16.004 20.5487 15.175 20.6899 14.2684H22.4229ZM14.9995 15.805C13.635 15.805 12.5251 14.7711 12.5251 13.5001C12.5251 12.2291 13.635 11.1952 14.9995 11.1952C16.364 11.1952 17.474 12.2291 17.474 13.5001C17.474 14.7711 16.364 15.805 14.9995 15.805Z" fill="#D9B346"/>
        </svg>,
    },
    {
        order: 4,
        title: 'Action',
        text: <p>
            Here <span className={'font-poppins-bold'}>the draft solution becomes an actionable</span>. It can be broadly divided into 'Socializing', 'Piloting', and 'Integration'. Socializing is the part where we gain buy-in for the idea and get people on board.
        </p>,
        image: '/assets/how/action.png',
        icon: <svg width="29" height="28" className={'mb-6'} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1745_1204)">
                <path d="M9.40451 10.9003C9.32997 10.754 9.18412 10.658 9.02057 10.6473L5.1005 10.3859C4.89736 10.3658 4.70957 10.4917 4.63546 10.6808L1.80946 17.9031C1.73351 18.097 1.79548 18.3174 1.96138 18.4436C2.04433 18.507 2.14405 18.5387 2.24327 18.5387C2.34156 18.5387 2.43991 18.508 2.52286 18.4455L4.86847 16.6866L6.23421 16.9596C6.45696 17.0039 6.67965 16.8818 6.76074 16.6689C7.49417 14.7477 8.37713 12.9613 9.38404 11.3598C9.47119 11.2208 9.47911 11.0461 9.40451 10.9003ZM6.03287 15.9689L4.84658 15.7318C4.71705 15.7061 4.58189 15.7369 4.47568 15.8161L3.27399 16.7172L5.37867 11.3382L8.19211 11.5255C7.38135 12.8978 6.65726 14.3879 6.03287 15.9689Z" fill="#D9B346" stroke="#D9B346" strokeWidth="0.5"/>
                <path d="M18.0937 23.3808L17.8323 19.4602C17.8211 19.2962 17.7251 19.1504 17.5788 19.0758C17.433 19.0013 17.2582 19.0087 17.1194 19.0963C15.5174 20.1032 13.7314 20.9862 11.8103 21.7196C11.5979 21.8002 11.4748 22.0229 11.5196 22.2461L11.7926 23.6118L10.0337 25.957C9.90879 26.1238 9.90928 26.353 10.0355 26.5189C10.1255 26.6373 10.2639 26.7029 10.4064 26.7029C10.4633 26.7029 10.5206 26.6922 10.5765 26.6717L17.7988 23.8457C17.9879 23.7717 18.1072 23.5834 18.0937 23.3808ZM11.7618 25.2059L12.663 24.0042C12.7422 23.8985 12.773 23.7634 12.7469 23.6333L12.5097 22.4475C14.0911 21.8231 15.5808 21.099 16.953 20.2882L17.1408 23.1012L11.7618 25.2059Z" fill="#D9B346" stroke="#D9B346" strokeWidth="0.5"/>
                <path d="M14.0324 13.9801H10.8928C10.7237 13.9801 10.568 14.0719 10.4855 14.2196L6.54493 21.3003C6.44243 21.4848 6.47688 21.7159 6.6288 21.8622C6.71781 21.948 6.83473 21.9927 6.95219 21.9927C7.03514 21.9927 7.11852 21.9708 7.19306 21.9251L14.2737 17.6402C14.413 17.5559 14.4983 17.4049 14.4983 17.2419V14.4461C14.4984 14.1889 14.2896 13.9801 14.0324 13.9801ZM13.5665 16.9795L8.21313 20.2192L11.1664 14.9125V14.912H13.5665V16.9795Z" fill="#D9B346" stroke="#D9B346" strokeWidth="0.5"/>
                <path d="M28.4577 0.449231C28.4386 0.222336 28.2588 0.0424583 28.0318 0.0233457C27.8771 0.0112228 12.5328 -1.06002 5.89112 16.336C5.82543 16.5079 5.86687 16.7017 5.99689 16.8317L8.21249 19.0473C8.31641 19.1513 8.46177 19.1988 8.60763 19.1792C8.75256 19.1582 8.8793 19.0707 8.95013 18.9425L11.1699 14.912H13.5687V16.985L9.51395 19.545C9.3942 19.6209 9.31546 19.7468 9.29962 19.8875C9.28378 20.0282 9.33315 20.1684 9.43335 20.2686L11.6489 22.4842C11.738 22.5732 11.8568 22.6208 11.9784 22.6208C12.0343 22.6208 12.0907 22.611 12.1447 22.59C29.5415 15.9478 28.4708 0.603497 28.4577 0.449231ZM26.0133 8.71623C24.3783 12.7616 20.6367 18.2613 12.0934 21.6111L10.5045 20.0221L14.2834 17.6364C14.4185 17.5507 14.5005 17.4021 14.5005 17.2422V14.4465C14.5005 14.1893 14.2917 13.9805 14.0345 13.9805H10.894C10.7239 13.9805 10.5678 14.0732 10.4858 14.2219L8.43234 17.9504L6.87002 16.3876C12.7005 1.51348 25.1285 0.904931 27.5444 0.938952C27.5617 2.02559 27.462 5.13162 26.0133 8.71623Z" fill="#D9B346" stroke="#D9B346" strokeWidth="0.5"/>
                <path d="M8.50229 20.5801C8.40116 20.446 8.23996 20.3807 8.08198 20.3975C8.09831 20.2391 8.03305 20.0783 7.89932 19.9772C7.19668 19.446 6.28992 19.2694 5.41068 19.4921C4.47738 19.7293 3.71413 20.3658 3.31713 21.2394L0.562449 27.3001C0.481848 27.4771 0.519582 27.6855 0.65703 27.8224C0.74604 27.9119 0.865303 27.959 0.986478 27.959C1.05173 27.959 1.11743 27.945 1.17941 27.917L7.24009 25.1618C8.11327 24.7653 8.74978 24.0021 8.98694 23.0688C9.21012 22.1905 9.03352 21.2833 8.50229 20.5801ZM8.08389 22.8395C7.91706 23.497 7.46884 24.0342 6.85473 24.3138L1.92491 26.5546L4.16568 21.6244C4.44478 21.0102 4.9825 20.562 5.63998 20.3952C5.81287 20.3514 5.98663 20.3299 6.1581 20.3299C6.44839 20.3299 6.73213 20.3919 6.99075 20.5126L6.54718 21.2977C6.44419 21.4799 6.47542 21.7087 6.62357 21.8564C6.77172 22.0051 7.00053 22.0358 7.18226 21.9328L7.96741 21.4888C8.15843 21.8997 8.20179 22.3745 8.08389 22.8395Z" fill="#D9B346" stroke="#D9B346" strokeWidth="0.5"/>
                <path d="M28.4567 0.449718C28.4376 0.222824 28.2577 0.0429461 28.0308 0.0238334C27.8491 0.00936239 23.5297 -0.317738 18.4498 2.02231C18.3114 2.08565 18.2131 2.21333 18.1861 2.36339C18.159 2.51345 18.2075 2.66717 18.3152 2.7748L25.7052 10.1649C25.7933 10.2529 25.9121 10.3014 26.0347 10.3014C26.0621 10.3014 26.0897 10.299 26.1171 10.2944C26.2672 10.2674 26.3944 10.1691 26.4582 10.0306C28.7987 4.95081 28.4716 0.630961 28.4567 0.449718ZM25.8837 9.02465L19.4554 2.59635C23.1742 1.02654 26.4307 0.918416 27.5439 0.937092C27.5625 2.0512 27.4576 5.29751 25.8837 9.02465Z" fill="#D9B346" stroke="#D9B346" strokeWidth="0.5"/>
                <path d="M21.0997 7.38046C19.5327 5.81345 16.9835 5.81345 15.4165 7.38046C13.8495 8.94748 13.8495 11.4967 15.4165 13.0637C16.1998 13.8474 17.2291 14.2388 18.2579 14.2388C19.2872 14.2388 20.316 13.847 21.0997 13.0637C22.6667 11.4967 22.6667 8.94743 21.0997 7.38046ZM20.4409 12.4048C19.2373 13.6083 17.2789 13.6083 16.0754 12.4048C14.8718 11.2012 14.8718 9.24285 16.0754 8.0393C16.6769 7.43775 17.4676 7.13675 18.2579 7.13675C19.0482 7.13675 19.8389 7.43775 20.4409 8.0393C21.6444 9.24285 21.6444 11.2012 20.4409 12.4048Z" fill="#D9B346" stroke="#D9B346" strokeWidth="0.5"/>
                <path d="M19.1822 11.1489C18.6715 11.6605 17.8403 11.66 17.3291 11.1489C16.8184 10.6377 16.8184 9.80693 17.3291 9.29574C17.8398 8.78505 18.671 8.78462 19.1822 9.29574C19.364 9.47791 19.6594 9.47791 19.8411 9.29574C20.0232 9.11357 20.0232 8.81907 19.8411 8.6369C18.9674 7.7628 17.5444 7.7628 16.6703 8.6369C15.7961 9.51101 15.7961 10.9336 16.6703 11.8077C17.1073 12.2448 17.6819 12.4633 18.2559 12.4633C18.8304 12.4633 19.4045 12.2448 19.8411 11.8077C20.0232 11.6255 20.0232 11.331 19.8411 11.1489C19.6593 10.9667 19.364 10.9667 19.1822 11.1489Z" fill="#D9B346" stroke="#D9B346" strokeWidth="0.5"/>
            </g>
            <defs>
                <clipPath id="clip0_1745_1204">
                    <rect width="27.9594" height="27.9594" fill="white" transform="translate(0.520508)"/>
                </clipPath>
            </defs>
        </svg>,
    },
    {
        order: 5,
        title: 'Grow',
        text: <p>
            We follow <span>incremental design and development</span>. We work this way for a different reason – to manage technical risks by breaking big changes down and making small bets instead of big ones.
        </p>,
        image: '/assets/how/grow.png',
        icon: <svg width="27" height="25" className={'mb-6'} viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M25.9578 4.33441L24.5287 4.01302L20.6662 7.67418L18.4785 5.55015L22.2457 1.78243L21.9159 0.399009C21.1198 0.14512 20.2872 0.0107633 19.4478 0.000751685C18.5321 -0.0126716 17.6234 0.153816 16.7782 0.489839C15.9621 0.842 15.2244 1.34008 14.6051 1.9571C13.9157 2.57966 13.3697 3.33215 13.0018 4.16673C12.2936 5.82767 12.2936 7.68661 13.0018 9.34756C9.18199 12.9301 5.41146 16.5602 1.69122 20.2367C1.30645 20.7171 1.12322 21.3162 1.17086 21.9189C1.2084 22.567 1.51416 23.1745 2.02103 23.608C2.24823 23.8438 2.51941 24.0394 2.82174 24.1809C3.13322 24.3119 3.46853 24.387 3.8075 24.4027C4.3865 24.3922 4.94168 24.1826 5.37226 23.8141C8.20862 21.2691 13.6431 16.0411 16.7305 12.9773C17.5679 13.3162 18.4675 13.4908 19.3763 13.4891C20.2911 13.4884 21.1965 13.3129 22.039 12.973C22.8815 12.6331 23.6439 12.1356 24.2813 11.51C25.5906 10.2371 26.3218 8.52416 26.317 6.74142C26.3382 5.92565 26.2168 5.11221 25.9578 4.33441ZM4.26374 22.5756C4.19321 22.6353 4.1082 22.6774 4.01638 22.6979C3.92605 22.7128 3.8337 22.7128 3.74337 22.6979C3.64866 22.6841 3.55845 22.6501 3.47952 22.5983C3.39483 22.5511 3.32321 22.4852 3.27064 22.4062C3.01412 22.1564 2.7741 21.6813 3.01412 21.414C5.52434 18.869 10.6932 13.8943 13.9253 10.8533C14.1085 11.0838 14.3101 11.3039 14.5263 11.51C14.7425 11.7249 14.9752 11.924 15.2226 12.1057C12.0967 15.1625 6.99932 20.0778 4.26557 22.5756H4.26374ZM24.6349 6.74142C24.6386 8.07768 24.0926 9.36153 23.1105 10.3187C22.1305 11.2353 20.8124 11.7487 19.4395 11.7487C18.0667 11.7487 16.7486 11.2353 15.7686 10.3187C15.0503 9.60415 14.5596 8.70981 14.3537 7.73977C14.1477 6.76973 14.2349 5.76387 14.6051 4.83922C14.8515 4.20993 15.2337 3.63695 15.7271 3.15734C16.2204 2.67772 16.8138 2.30216 17.4689 2.05492C18.091 1.80672 18.7588 1.67963 19.4331 1.68112H19.8985L16.5693 4.95276V6.16849L20.0414 9.46285H21.2507L24.6349 6.29076V6.74142ZM4.82624 9.92923H7.63145L8.92321 11.1816L10.1655 10.0043L8.94702 8.82004V8.74494L9.05146 5.86456L8.64837 5.10123L3.40806 1.81387L2.32519 1.92915L0.802571 3.41214L0.681641 4.45843L4.04936 9.55542L4.82624 9.93097V9.92923ZM3.09474 3.58506L7.33463 6.2471L7.26317 8.20869H5.29164L2.55789 4.08288L3.09474 3.58506ZM16.113 15.7424L17.348 14.5668L23.039 20.1302C23.5184 20.6105 23.7857 21.248 23.7857 21.911C23.7857 22.5739 23.5184 23.2115 23.039 23.6918C22.6786 24.0446 22.2151 24.2857 21.7089 24.3839C21.2027 24.482 20.6772 24.4326 20.2008 24.242C19.8968 24.1135 19.6242 23.9261 19.4001 23.6918L13.6431 18.097L14.8873 16.9127L20.6259 22.4918C20.7031 22.5729 20.7991 22.6357 20.9063 22.6752C21.1172 22.7569 21.3532 22.7569 21.5641 22.6752C21.6712 22.6357 21.7672 22.5729 21.8444 22.4918C21.9246 22.416 21.987 22.325 22.0276 22.2245C22.0697 22.122 22.092 22.0132 22.0936 21.9031C22.0918 21.7933 22.0701 21.6846 22.0295 21.5817C21.9889 21.4813 21.9264 21.3902 21.8462 21.3145L16.113 15.7424Z" fill="#D9B346"/>
        </svg>,
    },

]

const HowWorks = () => {
    const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(2);

    return (
        <section id={"section-how-works"} className={'h-screen grid grid-cols-1 md:grid-cols-2 w-full'}>
            <div className={'relative'}>
                {
                    HOW_WORKS.map((element, index) =>
                        <Image
                            key={element.order}
                            alt={'How it works'}
                            src={element.image}
                            fill
                            className={`object-cover w-full transition-all duration-300 ${index === selectedServiceIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    )
                }
            </div>
            <Carousel
                selectedServiceIndex={selectedServiceIndex}
                setSelectedServiceIndex={setSelectedServiceIndex}
                items={HOW_WORKS}
            />
        </section>
    )
};

export default HowWorks;