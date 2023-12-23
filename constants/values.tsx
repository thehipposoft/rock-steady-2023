import React from "react";

const VALUES = [
    {
        title: 'Collaboration',
        description: 'Create a win:win collaborative environment between people and organisations. Promote people interactions through Face-to-face talking rather than technology Quality time with family, friends and colleagues.',
        icon: <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.408 14.1563H36.9897V19.1563C36.9897 20.9101 36.0015 23.3329 33.4597 23.9889L33.1861 24.0595L33.1054 24.3304C32.6833 25.7486 31.652 27.162 29.7897 27.6564L29.5189 27.7283L29.4388 27.9968C29.1765 28.8769 28.686 29.7488 27.9196 30.3982C27.16 31.0417 26.1029 31.4897 24.6563 31.4897H18.0747H17.867L17.7205 31.6368L12.7711 36.6044C12.132 37.2435 11.0621 37.8147 9.91632 37.8147C9.04278 37.8147 8.106 37.5022 7.20821 36.6044L1.71214 31.1084C1.15075 30.5207 0.639842 29.6294 0.524392 28.643C0.411479 27.6783 0.670987 26.5881 1.70769 25.5421L3.00736 24.2607L3.15632 24.1138V23.9047V16.7784L11.1499 8.78488L11.2092 8.7256L11.2459 8.65023C12.2014 6.68799 14.0581 4.98966 17.323 4.98966H22.0713H22.2793L22.4259 4.84217L25.5381 1.71163C26.1258 1.15044 27.0169 0.639807 28.003 0.524392C28.9681 0.411434 30.0588 0.671196 31.1052 1.70894C31.1054 1.70917 31.1056 1.70939 31.1058 1.70962L36.6005 7.20431C37.1613 7.79138 37.6727 8.68709 37.7882 9.67641C37.9012 10.6437 37.6415 11.7325 36.6073 12.7682L36.0605 13.2968L35.1713 14.1563H36.408ZM26.9897 26.4897V25.1563H28.323C29.1904 25.1563 29.8086 24.8543 30.1931 24.3535C30.5591 23.8768 30.6563 23.2929 30.6563 22.823V21.4897H31.9897C32.8571 21.4897 33.4753 21.1877 33.8598 20.6869C34.2258 20.2101 34.323 19.6263 34.323 19.1563V17.323V16.823H33.823H20.9897H20.4897V17.323C20.4897 18.3356 20.1517 19.5968 19.3605 20.5941C18.5835 21.5735 17.3521 22.323 15.4897 22.323C13.6272 22.323 12.3958 21.5735 11.6189 20.5941C10.8276 19.5968 10.4897 18.3356 10.4897 17.323V14.408V13.2009L9.6361 14.0544L5.96944 17.7211L5.82299 17.8675V18.0747V25.202L3.60444 27.4378C3.60419 27.438 3.60394 27.4383 3.6037 27.4385C3.60086 27.4413 3.59788 27.4443 3.59478 27.4474C3.49745 27.5444 3.27067 27.7703 3.20236 28.1034C3.12184 28.4959 3.27939 28.8782 3.61119 29.2329L3.61717 29.2393L3.62336 29.2455L9.10444 34.7082C9.10445 34.7082 9.10445 34.7082 9.10446 34.7082C9.10751 34.7113 9.11072 34.7145 9.11408 34.7179C9.21105 34.8152 9.43701 35.042 9.77002 35.1103C10.1625 35.1908 10.5449 35.0333 10.8996 34.7015L10.9057 34.6958L10.9115 34.6899L16.7784 28.823H24.6563C25.5237 28.823 26.142 28.521 26.5265 28.0202C26.8925 27.5435 26.9897 26.9596 26.9897 26.4897ZM31.238 14.1563H31.446L31.5926 14.0088L34.7082 10.8749C34.7083 10.8748 34.7084 10.8747 34.7085 10.8746C34.7114 10.8716 34.7146 10.8685 34.7179 10.8652C34.8152 10.7683 35.042 10.5423 35.1103 10.2093C35.1908 9.81679 35.0333 9.43442 34.7015 9.07975L34.6955 9.07336L34.6893 9.06718L29.2082 3.60444C29.2081 3.60432 29.208 3.6042 29.2079 3.60408C29.2049 3.60113 29.2018 3.59803 29.1986 3.59478C29.1016 3.49745 28.8756 3.27067 28.5426 3.20236C28.1501 3.12184 27.7678 3.27939 27.4131 3.61119L27.407 3.61688L27.4011 3.62277L23.3675 7.65632H17.323C15.4747 7.65632 14.3951 8.44991 13.8052 9.4121C13.2389 10.336 13.1563 11.3593 13.1563 11.823V17.323C13.1563 17.7929 13.2535 18.3768 13.6195 18.8535C14.004 19.3543 14.6223 19.6563 15.4897 19.6563C16.3571 19.6563 16.9753 19.3543 17.3598 18.8535C17.7258 18.3768 17.823 17.7929 17.823 17.323V14.1563H31.238Z" fill="#080D26" stroke="black"/>
        </svg>,
    },
    {
        title: 'Collaboration',
        description: 'Create a win:win collaborative environment between people and organisations. Promote people interactions through Face-to-face talking rather than technology Quality time with family, friends and colleagues.',
        icon: <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.408 14.1563H36.9897V19.1563C36.9897 20.9101 36.0015 23.3329 33.4597 23.9889L33.1861 24.0595L33.1054 24.3304C32.6833 25.7486 31.652 27.162 29.7897 27.6564L29.5189 27.7283L29.4388 27.9968C29.1765 28.8769 28.686 29.7488 27.9196 30.3982C27.16 31.0417 26.1029 31.4897 24.6563 31.4897H18.0747H17.867L17.7205 31.6368L12.7711 36.6044C12.132 37.2435 11.0621 37.8147 9.91632 37.8147C9.04278 37.8147 8.106 37.5022 7.20821 36.6044L1.71214 31.1084C1.15075 30.5207 0.639842 29.6294 0.524392 28.643C0.411479 27.6783 0.670987 26.5881 1.70769 25.5421L3.00736 24.2607L3.15632 24.1138V23.9047V16.7784L11.1499 8.78488L11.2092 8.7256L11.2459 8.65023C12.2014 6.68799 14.0581 4.98966 17.323 4.98966H22.0713H22.2793L22.4259 4.84217L25.5381 1.71163C26.1258 1.15044 27.0169 0.639807 28.003 0.524392C28.9681 0.411434 30.0588 0.671196 31.1052 1.70894C31.1054 1.70917 31.1056 1.70939 31.1058 1.70962L36.6005 7.20431C37.1613 7.79138 37.6727 8.68709 37.7882 9.67641C37.9012 10.6437 37.6415 11.7325 36.6073 12.7682L36.0605 13.2968L35.1713 14.1563H36.408ZM26.9897 26.4897V25.1563H28.323C29.1904 25.1563 29.8086 24.8543 30.1931 24.3535C30.5591 23.8768 30.6563 23.2929 30.6563 22.823V21.4897H31.9897C32.8571 21.4897 33.4753 21.1877 33.8598 20.6869C34.2258 20.2101 34.323 19.6263 34.323 19.1563V17.323V16.823H33.823H20.9897H20.4897V17.323C20.4897 18.3356 20.1517 19.5968 19.3605 20.5941C18.5835 21.5735 17.3521 22.323 15.4897 22.323C13.6272 22.323 12.3958 21.5735 11.6189 20.5941C10.8276 19.5968 10.4897 18.3356 10.4897 17.323V14.408V13.2009L9.6361 14.0544L5.96944 17.7211L5.82299 17.8675V18.0747V25.202L3.60444 27.4378C3.60419 27.438 3.60394 27.4383 3.6037 27.4385C3.60086 27.4413 3.59788 27.4443 3.59478 27.4474C3.49745 27.5444 3.27067 27.7703 3.20236 28.1034C3.12184 28.4959 3.27939 28.8782 3.61119 29.2329L3.61717 29.2393L3.62336 29.2455L9.10444 34.7082C9.10445 34.7082 9.10445 34.7082 9.10446 34.7082C9.10751 34.7113 9.11072 34.7145 9.11408 34.7179C9.21105 34.8152 9.43701 35.042 9.77002 35.1103C10.1625 35.1908 10.5449 35.0333 10.8996 34.7015L10.9057 34.6958L10.9115 34.6899L16.7784 28.823H24.6563C25.5237 28.823 26.142 28.521 26.5265 28.0202C26.8925 27.5435 26.9897 26.9596 26.9897 26.4897ZM31.238 14.1563H31.446L31.5926 14.0088L34.7082 10.8749C34.7083 10.8748 34.7084 10.8747 34.7085 10.8746C34.7114 10.8716 34.7146 10.8685 34.7179 10.8652C34.8152 10.7683 35.042 10.5423 35.1103 10.2093C35.1908 9.81679 35.0333 9.43442 34.7015 9.07975L34.6955 9.07336L34.6893 9.06718L29.2082 3.60444C29.2081 3.60432 29.208 3.6042 29.2079 3.60408C29.2049 3.60113 29.2018 3.59803 29.1986 3.59478C29.1016 3.49745 28.8756 3.27067 28.5426 3.20236C28.1501 3.12184 27.7678 3.27939 27.4131 3.61119L27.407 3.61688L27.4011 3.62277L23.3675 7.65632H17.323C15.4747 7.65632 14.3951 8.44991 13.8052 9.4121C13.2389 10.336 13.1563 11.3593 13.1563 11.823V17.323C13.1563 17.7929 13.2535 18.3768 13.6195 18.8535C14.004 19.3543 14.6223 19.6563 15.4897 19.6563C16.3571 19.6563 16.9753 19.3543 17.3598 18.8535C17.7258 18.3768 17.823 17.7929 17.823 17.323V14.1563H31.238Z" fill="#080D26" stroke="black"/>
        </svg>,
    },
    {
        title: 'Collaboration',
        description: 'Create a win:win collaborative environment between people and organisations. Promote people interactions through Face-to-face talking rather than technology Quality time with family, friends and colleagues.',
        icon: <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.408 14.1563H36.9897V19.1563C36.9897 20.9101 36.0015 23.3329 33.4597 23.9889L33.1861 24.0595L33.1054 24.3304C32.6833 25.7486 31.652 27.162 29.7897 27.6564L29.5189 27.7283L29.4388 27.9968C29.1765 28.8769 28.686 29.7488 27.9196 30.3982C27.16 31.0417 26.1029 31.4897 24.6563 31.4897H18.0747H17.867L17.7205 31.6368L12.7711 36.6044C12.132 37.2435 11.0621 37.8147 9.91632 37.8147C9.04278 37.8147 8.106 37.5022 7.20821 36.6044L1.71214 31.1084C1.15075 30.5207 0.639842 29.6294 0.524392 28.643C0.411479 27.6783 0.670987 26.5881 1.70769 25.5421L3.00736 24.2607L3.15632 24.1138V23.9047V16.7784L11.1499 8.78488L11.2092 8.7256L11.2459 8.65023C12.2014 6.68799 14.0581 4.98966 17.323 4.98966H22.0713H22.2793L22.4259 4.84217L25.5381 1.71163C26.1258 1.15044 27.0169 0.639807 28.003 0.524392C28.9681 0.411434 30.0588 0.671196 31.1052 1.70894C31.1054 1.70917 31.1056 1.70939 31.1058 1.70962L36.6005 7.20431C37.1613 7.79138 37.6727 8.68709 37.7882 9.67641C37.9012 10.6437 37.6415 11.7325 36.6073 12.7682L36.0605 13.2968L35.1713 14.1563H36.408ZM26.9897 26.4897V25.1563H28.323C29.1904 25.1563 29.8086 24.8543 30.1931 24.3535C30.5591 23.8768 30.6563 23.2929 30.6563 22.823V21.4897H31.9897C32.8571 21.4897 33.4753 21.1877 33.8598 20.6869C34.2258 20.2101 34.323 19.6263 34.323 19.1563V17.323V16.823H33.823H20.9897H20.4897V17.323C20.4897 18.3356 20.1517 19.5968 19.3605 20.5941C18.5835 21.5735 17.3521 22.323 15.4897 22.323C13.6272 22.323 12.3958 21.5735 11.6189 20.5941C10.8276 19.5968 10.4897 18.3356 10.4897 17.323V14.408V13.2009L9.6361 14.0544L5.96944 17.7211L5.82299 17.8675V18.0747V25.202L3.60444 27.4378C3.60419 27.438 3.60394 27.4383 3.6037 27.4385C3.60086 27.4413 3.59788 27.4443 3.59478 27.4474C3.49745 27.5444 3.27067 27.7703 3.20236 28.1034C3.12184 28.4959 3.27939 28.8782 3.61119 29.2329L3.61717 29.2393L3.62336 29.2455L9.10444 34.7082C9.10445 34.7082 9.10445 34.7082 9.10446 34.7082C9.10751 34.7113 9.11072 34.7145 9.11408 34.7179C9.21105 34.8152 9.43701 35.042 9.77002 35.1103C10.1625 35.1908 10.5449 35.0333 10.8996 34.7015L10.9057 34.6958L10.9115 34.6899L16.7784 28.823H24.6563C25.5237 28.823 26.142 28.521 26.5265 28.0202C26.8925 27.5435 26.9897 26.9596 26.9897 26.4897ZM31.238 14.1563H31.446L31.5926 14.0088L34.7082 10.8749C34.7083 10.8748 34.7084 10.8747 34.7085 10.8746C34.7114 10.8716 34.7146 10.8685 34.7179 10.8652C34.8152 10.7683 35.042 10.5423 35.1103 10.2093C35.1908 9.81679 35.0333 9.43442 34.7015 9.07975L34.6955 9.07336L34.6893 9.06718L29.2082 3.60444C29.2081 3.60432 29.208 3.6042 29.2079 3.60408C29.2049 3.60113 29.2018 3.59803 29.1986 3.59478C29.1016 3.49745 28.8756 3.27067 28.5426 3.20236C28.1501 3.12184 27.7678 3.27939 27.4131 3.61119L27.407 3.61688L27.4011 3.62277L23.3675 7.65632H17.323C15.4747 7.65632 14.3951 8.44991 13.8052 9.4121C13.2389 10.336 13.1563 11.3593 13.1563 11.823V17.323C13.1563 17.7929 13.2535 18.3768 13.6195 18.8535C14.004 19.3543 14.6223 19.6563 15.4897 19.6563C16.3571 19.6563 16.9753 19.3543 17.3598 18.8535C17.7258 18.3768 17.823 17.7929 17.823 17.323V14.1563H31.238Z" fill="#080D26" stroke="black"/>
        </svg>,
    },
    {
        title: 'Collaboration',
        description: 'Create a win:win collaborative environment between people and organisations. Promote people interactions through Face-to-face talking rather than technology Quality time with family, friends and colleagues.',
        icon: <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.408 14.1563H36.9897V19.1563C36.9897 20.9101 36.0015 23.3329 33.4597 23.9889L33.1861 24.0595L33.1054 24.3304C32.6833 25.7486 31.652 27.162 29.7897 27.6564L29.5189 27.7283L29.4388 27.9968C29.1765 28.8769 28.686 29.7488 27.9196 30.3982C27.16 31.0417 26.1029 31.4897 24.6563 31.4897H18.0747H17.867L17.7205 31.6368L12.7711 36.6044C12.132 37.2435 11.0621 37.8147 9.91632 37.8147C9.04278 37.8147 8.106 37.5022 7.20821 36.6044L1.71214 31.1084C1.15075 30.5207 0.639842 29.6294 0.524392 28.643C0.411479 27.6783 0.670987 26.5881 1.70769 25.5421L3.00736 24.2607L3.15632 24.1138V23.9047V16.7784L11.1499 8.78488L11.2092 8.7256L11.2459 8.65023C12.2014 6.68799 14.0581 4.98966 17.323 4.98966H22.0713H22.2793L22.4259 4.84217L25.5381 1.71163C26.1258 1.15044 27.0169 0.639807 28.003 0.524392C28.9681 0.411434 30.0588 0.671196 31.1052 1.70894C31.1054 1.70917 31.1056 1.70939 31.1058 1.70962L36.6005 7.20431C37.1613 7.79138 37.6727 8.68709 37.7882 9.67641C37.9012 10.6437 37.6415 11.7325 36.6073 12.7682L36.0605 13.2968L35.1713 14.1563H36.408ZM26.9897 26.4897V25.1563H28.323C29.1904 25.1563 29.8086 24.8543 30.1931 24.3535C30.5591 23.8768 30.6563 23.2929 30.6563 22.823V21.4897H31.9897C32.8571 21.4897 33.4753 21.1877 33.8598 20.6869C34.2258 20.2101 34.323 19.6263 34.323 19.1563V17.323V16.823H33.823H20.9897H20.4897V17.323C20.4897 18.3356 20.1517 19.5968 19.3605 20.5941C18.5835 21.5735 17.3521 22.323 15.4897 22.323C13.6272 22.323 12.3958 21.5735 11.6189 20.5941C10.8276 19.5968 10.4897 18.3356 10.4897 17.323V14.408V13.2009L9.6361 14.0544L5.96944 17.7211L5.82299 17.8675V18.0747V25.202L3.60444 27.4378C3.60419 27.438 3.60394 27.4383 3.6037 27.4385C3.60086 27.4413 3.59788 27.4443 3.59478 27.4474C3.49745 27.5444 3.27067 27.7703 3.20236 28.1034C3.12184 28.4959 3.27939 28.8782 3.61119 29.2329L3.61717 29.2393L3.62336 29.2455L9.10444 34.7082C9.10445 34.7082 9.10445 34.7082 9.10446 34.7082C9.10751 34.7113 9.11072 34.7145 9.11408 34.7179C9.21105 34.8152 9.43701 35.042 9.77002 35.1103C10.1625 35.1908 10.5449 35.0333 10.8996 34.7015L10.9057 34.6958L10.9115 34.6899L16.7784 28.823H24.6563C25.5237 28.823 26.142 28.521 26.5265 28.0202C26.8925 27.5435 26.9897 26.9596 26.9897 26.4897ZM31.238 14.1563H31.446L31.5926 14.0088L34.7082 10.8749C34.7083 10.8748 34.7084 10.8747 34.7085 10.8746C34.7114 10.8716 34.7146 10.8685 34.7179 10.8652C34.8152 10.7683 35.042 10.5423 35.1103 10.2093C35.1908 9.81679 35.0333 9.43442 34.7015 9.07975L34.6955 9.07336L34.6893 9.06718L29.2082 3.60444C29.2081 3.60432 29.208 3.6042 29.2079 3.60408C29.2049 3.60113 29.2018 3.59803 29.1986 3.59478C29.1016 3.49745 28.8756 3.27067 28.5426 3.20236C28.1501 3.12184 27.7678 3.27939 27.4131 3.61119L27.407 3.61688L27.4011 3.62277L23.3675 7.65632H17.323C15.4747 7.65632 14.3951 8.44991 13.8052 9.4121C13.2389 10.336 13.1563 11.3593 13.1563 11.823V17.323C13.1563 17.7929 13.2535 18.3768 13.6195 18.8535C14.004 19.3543 14.6223 19.6563 15.4897 19.6563C16.3571 19.6563 16.9753 19.3543 17.3598 18.8535C17.7258 18.3768 17.823 17.7929 17.823 17.323V14.1563H31.238Z" fill="#080D26" stroke="black"/>
        </svg>,
    },
    {
        title: 'Collaboration',
        description: 'Create a win:win collaborative environment between people and organisations. Promote people interactions through Face-to-face talking rather than technology Quality time with family, friends and colleagues.',
        icon: <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.408 14.1563H36.9897V19.1563C36.9897 20.9101 36.0015 23.3329 33.4597 23.9889L33.1861 24.0595L33.1054 24.3304C32.6833 25.7486 31.652 27.162 29.7897 27.6564L29.5189 27.7283L29.4388 27.9968C29.1765 28.8769 28.686 29.7488 27.9196 30.3982C27.16 31.0417 26.1029 31.4897 24.6563 31.4897H18.0747H17.867L17.7205 31.6368L12.7711 36.6044C12.132 37.2435 11.0621 37.8147 9.91632 37.8147C9.04278 37.8147 8.106 37.5022 7.20821 36.6044L1.71214 31.1084C1.15075 30.5207 0.639842 29.6294 0.524392 28.643C0.411479 27.6783 0.670987 26.5881 1.70769 25.5421L3.00736 24.2607L3.15632 24.1138V23.9047V16.7784L11.1499 8.78488L11.2092 8.7256L11.2459 8.65023C12.2014 6.68799 14.0581 4.98966 17.323 4.98966H22.0713H22.2793L22.4259 4.84217L25.5381 1.71163C26.1258 1.15044 27.0169 0.639807 28.003 0.524392C28.9681 0.411434 30.0588 0.671196 31.1052 1.70894C31.1054 1.70917 31.1056 1.70939 31.1058 1.70962L36.6005 7.20431C37.1613 7.79138 37.6727 8.68709 37.7882 9.67641C37.9012 10.6437 37.6415 11.7325 36.6073 12.7682L36.0605 13.2968L35.1713 14.1563H36.408ZM26.9897 26.4897V25.1563H28.323C29.1904 25.1563 29.8086 24.8543 30.1931 24.3535C30.5591 23.8768 30.6563 23.2929 30.6563 22.823V21.4897H31.9897C32.8571 21.4897 33.4753 21.1877 33.8598 20.6869C34.2258 20.2101 34.323 19.6263 34.323 19.1563V17.323V16.823H33.823H20.9897H20.4897V17.323C20.4897 18.3356 20.1517 19.5968 19.3605 20.5941C18.5835 21.5735 17.3521 22.323 15.4897 22.323C13.6272 22.323 12.3958 21.5735 11.6189 20.5941C10.8276 19.5968 10.4897 18.3356 10.4897 17.323V14.408V13.2009L9.6361 14.0544L5.96944 17.7211L5.82299 17.8675V18.0747V25.202L3.60444 27.4378C3.60419 27.438 3.60394 27.4383 3.6037 27.4385C3.60086 27.4413 3.59788 27.4443 3.59478 27.4474C3.49745 27.5444 3.27067 27.7703 3.20236 28.1034C3.12184 28.4959 3.27939 28.8782 3.61119 29.2329L3.61717 29.2393L3.62336 29.2455L9.10444 34.7082C9.10445 34.7082 9.10445 34.7082 9.10446 34.7082C9.10751 34.7113 9.11072 34.7145 9.11408 34.7179C9.21105 34.8152 9.43701 35.042 9.77002 35.1103C10.1625 35.1908 10.5449 35.0333 10.8996 34.7015L10.9057 34.6958L10.9115 34.6899L16.7784 28.823H24.6563C25.5237 28.823 26.142 28.521 26.5265 28.0202C26.8925 27.5435 26.9897 26.9596 26.9897 26.4897ZM31.238 14.1563H31.446L31.5926 14.0088L34.7082 10.8749C34.7083 10.8748 34.7084 10.8747 34.7085 10.8746C34.7114 10.8716 34.7146 10.8685 34.7179 10.8652C34.8152 10.7683 35.042 10.5423 35.1103 10.2093C35.1908 9.81679 35.0333 9.43442 34.7015 9.07975L34.6955 9.07336L34.6893 9.06718L29.2082 3.60444C29.2081 3.60432 29.208 3.6042 29.2079 3.60408C29.2049 3.60113 29.2018 3.59803 29.1986 3.59478C29.1016 3.49745 28.8756 3.27067 28.5426 3.20236C28.1501 3.12184 27.7678 3.27939 27.4131 3.61119L27.407 3.61688L27.4011 3.62277L23.3675 7.65632H17.323C15.4747 7.65632 14.3951 8.44991 13.8052 9.4121C13.2389 10.336 13.1563 11.3593 13.1563 11.823V17.323C13.1563 17.7929 13.2535 18.3768 13.6195 18.8535C14.004 19.3543 14.6223 19.6563 15.4897 19.6563C16.3571 19.6563 16.9753 19.3543 17.3598 18.8535C17.7258 18.3768 17.823 17.7929 17.823 17.323V14.1563H31.238Z" fill="#080D26" stroke="black"/>
        </svg>,
    },
];

export {
    VALUES
};