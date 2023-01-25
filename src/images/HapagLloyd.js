const HapagLloyd = (props) => {

    const height = (props.height + 'vw'); 
    const width = ((props.height*2.63) + 'vw');

    return(
        <svg width= { width } height= { height } viewBox="0 0 200 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M58.355 25.4649H62.4692V17.3963H70.0581V25.4649H74.1723V6.7377H70.0581V13.9323H62.4692V6.7377H58.355V25.4649Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M84.1702 20.2209C84.1702 21.0309 84.0636 23.3438 81.1538 23.3438C79.9494 23.3438 78.8728 23.0028 78.8728 21.6171C78.8728 20.2528 79.928 19.8585 81.0792 19.624C82.2303 19.4108 83.5413 19.3895 84.1702 18.8353V20.2209ZM79.2885 16.0853C79.4164 14.6144 80.3437 14.0389 81.7507 14.0389C83.0617 14.0389 84.1595 14.2734 84.1595 15.8722C84.1595 17.3963 82.0385 17.3111 79.7575 17.6521C77.4446 17.9612 75.1423 18.6967 75.1423 21.7664C75.1423 24.5483 77.1888 25.8273 79.7575 25.8273C81.4096 25.8273 83.1363 25.3796 84.3194 24.1539C84.3407 24.6016 84.4473 25.0492 84.5859 25.4649H88.359C88.0179 24.9107 87.89 23.6849 87.89 22.4485V15.4032C87.89 12.1523 84.6391 11.5448 81.9319 11.5448C78.8835 11.5448 75.7712 12.5893 75.558 16.0853H79.2885Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M89.105 30.24H92.8248V23.7915H92.8781C93.7734 25.1238 95.3189 25.838 96.9391 25.838C100.904 25.838 102.897 22.4592 102.897 18.8353C102.897 14.9768 100.979 11.5448 96.7365 11.5448C95.0525 11.5448 93.5923 12.1949 92.6969 13.6445H92.6436V11.9178H89.105V30.24ZM95.9585 23.0347C93.5496 23.0347 92.7076 20.935 92.7076 18.7287C92.7076 16.5223 93.4963 14.348 95.9371 14.348C98.3247 14.348 99.188 16.5756 99.188 18.7287C99.1774 20.935 98.3886 23.0347 95.9585 23.0347Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M112.426 20.2209C112.426 21.0309 112.319 23.3438 109.41 23.3438C108.205 23.3438 107.129 23.0028 107.129 21.6171C107.129 20.2528 108.173 19.8585 109.335 19.624C110.486 19.4108 111.797 19.3895 112.426 18.8353V20.2209ZM107.544 16.0853C107.672 14.6144 108.589 14.0389 110.007 14.0389C111.318 14.0389 112.415 14.2734 112.415 15.8722C112.415 17.3963 110.294 17.3111 108.013 17.6521C105.7 17.9612 103.398 18.6967 103.398 21.7664C103.398 24.5483 105.445 25.8273 108.013 25.8273C109.665 25.8273 111.392 25.3796 112.575 24.1539C112.597 24.6016 112.703 25.0492 112.842 25.4649H116.615C116.274 24.9107 116.146 23.6849 116.146 22.4485V15.4032C116.146 12.1523 112.895 11.5448 110.188 11.5448C107.15 11.5448 104.027 12.5893 103.814 16.0853H107.544Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M130.929 11.9072H127.391V13.7191H127.337C126.442 12.1417 125.078 11.5448 123.298 11.5448C119.493 11.5448 117.478 14.7423 117.478 18.2597C117.478 21.9795 119.205 25.0812 123.277 25.0812C124.907 25.0812 126.527 24.399 127.337 22.9814H127.391V24.7614C127.412 26.7013 126.474 28.1189 124.396 28.1189C123.085 28.1189 121.955 27.6499 121.614 26.2536H117.915C118.096 29.3446 121.219 30.6023 123.895 30.6023C130.141 30.6023 130.929 26.8292 130.929 24.5909V11.9072ZM124.215 22.2673C121.934 22.2673 121.198 20.1463 121.198 18.2064C121.198 16.1813 122.115 14.348 124.215 14.348C126.623 14.348 127.391 16.3198 127.391 18.5155C127.38 20.466 126.336 22.2673 124.215 22.2673Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M131.953 19.9117H139.84V16.7141H131.953V19.9117Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M140.842 25.4649H154.09V22.0115H144.967V6.7377H140.842V25.4649Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M154.964 25.4649H158.684V6.7377H154.964V25.4649Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M159.526 18.7073C159.526 23.0134 162.287 25.838 166.529 25.838C170.803 25.838 173.564 23.0028 173.564 18.7073C173.564 14.38 170.814 11.5448 166.529 11.5448C162.287 11.5448 159.526 14.38 159.526 18.7073ZM163.257 18.7073C163.257 16.533 164.014 14.348 166.54 14.348C169.087 14.348 169.844 16.5223 169.844 18.7073C169.844 20.8604 169.087 23.0347 166.54 23.0347C164.014 23.0347 163.257 20.8497 163.257 18.7073Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M186.652 11.9072H182.794L179.831 21.1909H179.778L176.708 11.9072H172.722L177.497 24.6336C177.912 25.7101 177.497 27.0424 176.207 27.181C175.472 27.2023 174.736 27.1064 174.033 27.0531V30.1228C174.789 30.1974 175.557 30.2507 176.314 30.2507C178.882 30.2507 180.172 29.3554 180.982 27.181L186.652 11.9072Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M195.904 25.4649H199.443V6.7377H195.712V13.5592H195.659H195.68C194.817 12.2162 193.24 11.5447 191.641 11.5447C187.655 11.5447 185.629 14.9235 185.629 18.5687C185.629 22.3206 187.623 25.8379 191.715 25.8379C193.442 25.8379 194.966 25.2091 195.83 23.7382H195.883V25.4649H195.904ZM195.851 18.654C195.851 20.8817 195.116 23.0347 192.653 23.0347C190.34 23.0347 189.371 20.8071 189.371 18.686C189.371 16.4583 190.213 14.3586 192.653 14.3586C195.073 14.3479 195.851 16.4477 195.851 18.654Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.6615 0.257324H25.8675L17.362 14.2094H19.9946L28.4149 0.257324H42.0579L33.627 13.9323H42.5696L38.8817 20.7112H29.4382L36.8033 30.1547H23.1603L16.3494 20.7112H13.7167L20.4956 30.1547H7.40684L0.041748 20.1996L12.6615 0.257324Z" fill="#033572"/>
        </svg>
    )
}

export default HapagLloyd;

{/* <svg width="200" height="31" viewBox="0 0 200 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M58.355 25.4649H62.4692V17.3963H70.0581V25.4649H74.1723V6.7377H70.0581V13.9323H62.4692V6.7377H58.355V25.4649Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M84.1702 20.2209C84.1702 21.0309 84.0636 23.3438 81.1538 23.3438C79.9494 23.3438 78.8728 23.0028 78.8728 21.6171C78.8728 20.2528 79.928 19.8585 81.0792 19.624C82.2303 19.4108 83.5413 19.3895 84.1702 18.8353V20.2209ZM79.2885 16.0853C79.4164 14.6144 80.3437 14.0389 81.7507 14.0389C83.0617 14.0389 84.1595 14.2734 84.1595 15.8722C84.1595 17.3963 82.0385 17.3111 79.7575 17.6521C77.4446 17.9612 75.1423 18.6967 75.1423 21.7664C75.1423 24.5483 77.1888 25.8273 79.7575 25.8273C81.4096 25.8273 83.1363 25.3796 84.3194 24.1539C84.3407 24.6016 84.4473 25.0492 84.5859 25.4649H88.359C88.0179 24.9107 87.89 23.6849 87.89 22.4485V15.4032C87.89 12.1523 84.6391 11.5448 81.9319 11.5448C78.8835 11.5448 75.7712 12.5893 75.558 16.0853H79.2885Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M89.105 30.24H92.8248V23.7915H92.8781C93.7734 25.1238 95.3189 25.838 96.9391 25.838C100.904 25.838 102.897 22.4592 102.897 18.8353C102.897 14.9768 100.979 11.5448 96.7365 11.5448C95.0525 11.5448 93.5923 12.1949 92.6969 13.6445H92.6436V11.9178H89.105V30.24ZM95.9585 23.0347C93.5496 23.0347 92.7076 20.935 92.7076 18.7287C92.7076 16.5223 93.4963 14.348 95.9371 14.348C98.3247 14.348 99.188 16.5756 99.188 18.7287C99.1774 20.935 98.3886 23.0347 95.9585 23.0347Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M112.426 20.2209C112.426 21.0309 112.319 23.3438 109.41 23.3438C108.205 23.3438 107.129 23.0028 107.129 21.6171C107.129 20.2528 108.173 19.8585 109.335 19.624C110.486 19.4108 111.797 19.3895 112.426 18.8353V20.2209ZM107.544 16.0853C107.672 14.6144 108.589 14.0389 110.007 14.0389C111.318 14.0389 112.415 14.2734 112.415 15.8722C112.415 17.3963 110.294 17.3111 108.013 17.6521C105.7 17.9612 103.398 18.6967 103.398 21.7664C103.398 24.5483 105.445 25.8273 108.013 25.8273C109.665 25.8273 111.392 25.3796 112.575 24.1539C112.597 24.6016 112.703 25.0492 112.842 25.4649H116.615C116.274 24.9107 116.146 23.6849 116.146 22.4485V15.4032C116.146 12.1523 112.895 11.5448 110.188 11.5448C107.15 11.5448 104.027 12.5893 103.814 16.0853H107.544Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M130.929 11.9072H127.391V13.7191H127.337C126.442 12.1417 125.078 11.5448 123.298 11.5448C119.493 11.5448 117.478 14.7423 117.478 18.2597C117.478 21.9795 119.205 25.0812 123.277 25.0812C124.907 25.0812 126.527 24.399 127.337 22.9814H127.391V24.7614C127.412 26.7013 126.474 28.1189 124.396 28.1189C123.085 28.1189 121.955 27.6499 121.614 26.2536H117.915C118.096 29.3446 121.219 30.6023 123.895 30.6023C130.141 30.6023 130.929 26.8292 130.929 24.5909V11.9072ZM124.215 22.2673C121.934 22.2673 121.198 20.1463 121.198 18.2064C121.198 16.1813 122.115 14.348 124.215 14.348C126.623 14.348 127.391 16.3198 127.391 18.5155C127.38 20.466 126.336 22.2673 124.215 22.2673Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M131.953 19.9117H139.84V16.7141H131.953V19.9117Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M140.842 25.4649H154.09V22.0115H144.967V6.7377H140.842V25.4649Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M154.964 25.4649H158.684V6.7377H154.964V25.4649Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M159.526 18.7073C159.526 23.0134 162.287 25.838 166.529 25.838C170.803 25.838 173.564 23.0028 173.564 18.7073C173.564 14.38 170.814 11.5448 166.529 11.5448C162.287 11.5448 159.526 14.38 159.526 18.7073ZM163.257 18.7073C163.257 16.533 164.014 14.348 166.54 14.348C169.087 14.348 169.844 16.5223 169.844 18.7073C169.844 20.8604 169.087 23.0347 166.54 23.0347C164.014 23.0347 163.257 20.8497 163.257 18.7073Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M186.652 11.9072H182.794L179.831 21.1909H179.778L176.708 11.9072H172.722L177.497 24.6336C177.912 25.7101 177.497 27.0424 176.207 27.181C175.472 27.2023 174.736 27.1064 174.033 27.0531V30.1228C174.789 30.1974 175.557 30.2507 176.314 30.2507C178.882 30.2507 180.172 29.3554 180.982 27.181L186.652 11.9072Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M195.904 25.4649H199.443V6.7377H195.712V13.5592H195.659H195.68C194.817 12.2162 193.24 11.5447 191.641 11.5447C187.655 11.5447 185.629 14.9235 185.629 18.5687C185.629 22.3206 187.623 25.8379 191.715 25.8379C193.442 25.8379 194.966 25.2091 195.83 23.7382H195.883V25.4649H195.904ZM195.851 18.654C195.851 20.8817 195.116 23.0347 192.653 23.0347C190.34 23.0347 189.371 20.8071 189.371 18.686C189.371 16.4583 190.213 14.3586 192.653 14.3586C195.073 14.3479 195.851 16.4477 195.851 18.654Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.6615 0.257324H25.8675L17.362 14.2094H19.9946L28.4149 0.257324H42.0579L33.627 13.9323H42.5696L38.8817 20.7112H29.4382L36.8033 30.1547H23.1603L16.3494 20.7112H13.7167L20.4956 30.1547H7.40684L0.041748 20.1996L12.6615 0.257324Z" fill="#033572"/>
</svg> */}
