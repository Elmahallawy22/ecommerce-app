
import './Navbar.scss';
import "flag-icon-css/css/flag-icon.min.css";
import { Link } from '../../../i18n/routing';
import NavList from './NavList';
import Sidebar from './Sidebar';

type NavbarParams = {
  search: string;
  login: string;
  wishlist: string;
  cart: string;
}

const Navbar = ({ search, login, wishlist, cart }: NavbarParams) => {
  return (
    <nav className='navbar flex justify-center py-1 md:py-[10px] px-1'>
      <div className="container flex justify-between items-center gap-2 md:gap-4">
        <Link href={'/'}><Logo /></Link>
        <div className="search flex justify-between items-center px-3 flex-grow gap-2">
          <input
            type="text"
            placeholder={search}
          />
          <SearchIcon />
        </div>
        <NavList login={login} wishlist={wishlist} cart={cart} />
        <Sidebar login={login} wishlist={wishlist} cart={cart} />
      </div>
    </nav >
  )
}
export default Navbar;

const Logo = () => (
  <svg width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.5028 14.2565C27.4077 14.4506 28.3153 14.1983 29.1305 14.5227C29.7636 14.7751 31.0734 15.693 31.5463 14.8888C31.5753 14.8403 31.618 14.8019 31.6688 14.7785C31.7196 14.7551 31.776 14.7479 31.8309 14.7578C31.8857 14.7677 31.9364 14.7942 31.9763 14.8339C32.0161 14.8736 32.0434 14.9246 32.0544 14.9803C32.1631 15.5368 32.0281 15.987 31.6495 16.3308C31.5716 16.4011 31.4819 16.426 31.3805 16.4057C30.8207 16.2911 29.9865 16.2106 28.8778 16.1644C28.2419 16.1367 26.106 15.2022 26.2365 14.2427C26.2427 14.1978 26.2352 14.1521 26.215 14.1118C26.1947 14.0715 26.1627 14.0386 26.1234 14.0176C26.0841 13.9966 26.0393 13.9886 25.9953 13.9946C25.9514 14.0007 25.9103 14.0205 25.8778 14.0513C24.3832 15.4628 23.0164 16.5527 20.8941 17.0269C19.6187 17.3116 18.3388 17.5759 17.0544 17.82C14.9865 18.2138 15.2908 21.1948 13.443 22.1433C12.4946 22.6313 12.6142 23.6158 12.3751 24.4921C12.1903 25.1687 11.7147 25.4987 11.2229 25.9341C11.1901 25.9634 11.1668 26.0021 11.1562 26.0452C11.1455 26.0883 11.1479 26.1337 11.1631 26.1754L11.2664 26.4665C11.3026 26.5701 11.2673 26.6218 11.1604 26.6218H9.85332C9.82982 26.6219 9.80666 26.6161 9.78578 26.6051C9.7649 26.5942 9.74692 26.5782 9.73333 26.5586C9.71975 26.5391 9.71098 26.5165 9.70774 26.4927C9.7045 26.469 9.7069 26.4448 9.71473 26.4222C9.7564 26.2946 9.82614 26.1846 9.92397 26.0922C10.0037 26.0182 10.0617 25.9304 10.0979 25.8287C10.4312 24.8711 10.6885 23.8912 10.8696 22.8892C10.9004 22.7247 10.8642 22.7071 10.7609 22.8365C10.1522 23.613 9.80169 24.1565 9.64408 25.2325C9.5535 25.8666 9.3189 26.4471 8.94027 26.974C8.92331 26.9973 8.91159 27.0241 8.90595 27.0523C8.90031 27.0806 8.9009 27.1098 8.90767 27.1376L9.00277 27.5286C9.02814 27.634 8.98738 27.6858 8.88049 27.6839L7.51364 27.6701C7.47497 27.6699 7.43724 27.6578 7.40535 27.6355C7.37347 27.6131 7.3489 27.5815 7.33484 27.5448C7.32078 27.508 7.31787 27.4677 7.3265 27.4293C7.33512 27.3908 7.35488 27.3558 7.38321 27.329C7.72288 27.0017 7.88321 26.6995 8.00006 26.2086C8.39408 24.542 8.60603 22.4733 9.60603 21.0645C10.4403 19.8915 10.7528 19.3341 10.9892 18.1001C11.0109 17.9799 10.9674 17.9457 10.8588 17.9975C10.6685 18.089 10.4729 18.2942 10.424 18.5216C10.2338 19.3979 9.82977 20.1226 9.21201 20.6957C9.15948 20.7438 9.116 20.7336 9.08158 20.6652C9.05259 20.606 9.05531 20.5487 9.08973 20.4933C9.15495 20.3823 9.18303 20.2612 9.17397 20.13C9.1631 19.9858 9.10785 19.9654 9.00821 20.069C7.89227 21.2189 6.52814 21.8696 4.91582 22.0212C4.9028 22.0228 4.88966 22.0197 4.8786 22.0125C4.86755 22.0053 4.85925 21.9945 4.85511 21.9818C4.85096 21.9691 4.85122 21.9554 4.85585 21.9428C4.86047 21.9303 4.86917 21.9198 4.88049 21.9131L5.84788 21.3002C5.86589 21.2868 5.87871 21.2674 5.88411 21.2453C5.88952 21.2233 5.88716 21.2 5.87746 21.1795C5.86775 21.1591 5.85132 21.1427 5.83101 21.1334C5.81071 21.124 5.78783 21.1222 5.76636 21.1283C4.81799 21.4666 3.9294 21.7883 2.92397 21.4527C2.32433 21.2549 1.72016 21.0802 1.11147 20.9286C1.01002 20.9028 0.998244 20.8547 1.07614 20.7844C1.57614 20.3333 2.15404 20.1753 2.80984 20.3102C2.83481 20.3149 2.86062 20.311 2.88317 20.2991C2.90571 20.2872 2.92371 20.2679 2.93432 20.2443C2.94492 20.2208 2.94753 20.1943 2.94171 20.1691C2.9359 20.1438 2.92201 20.1213 2.90223 20.105L2.56256 19.8277C2.54998 19.8184 2.54106 19.8051 2.53726 19.7899C2.53345 19.7747 2.53498 19.7586 2.5416 19.7441C2.54822 19.7296 2.55953 19.7177 2.5737 19.7102C2.58787 19.7027 2.60405 19.7002 2.61962 19.7029L4.7093 20.1106C4.72161 20.1124 4.73417 20.1102 4.74522 20.1044C4.75627 20.0985 4.76526 20.0893 4.77094 20.078C4.77663 20.0667 4.77872 20.0539 4.77692 20.0414C4.77512 20.0288 4.76953 20.0171 4.76093 20.008L4.60332 19.8471C4.48919 19.7306 4.51274 19.6789 4.67397 19.6918C5.72469 19.7843 6.58973 19.4164 7.26908 18.5881C7.3669 18.4661 7.33973 18.4199 7.18756 18.4495L6.4593 18.5854C6.34698 18.6075 6.33339 18.5789 6.41853 18.4994C8.09969 16.9631 10.0173 15.8548 12.1713 15.1744C12.2146 15.1607 12.2539 15.1362 12.2852 15.1032C12.3166 15.0703 12.3391 15.0299 12.3506 14.9859C12.6223 14.0042 13.106 13.3571 13.8017 13.0447C16.8588 11.6748 18.6549 10.8567 20.2691 9.32317C21.3397 8.30544 22.5191 7.58166 23.7473 6.85233C23.8597 6.78577 23.8578 6.72477 23.7419 6.6693L23.6169 6.60829C23.4955 6.54914 23.4937 6.48628 23.6115 6.41972L24.6386 5.84292C24.7799 5.76342 24.7799 5.68485 24.6386 5.6072L24.4185 5.48796C24.2917 5.41771 24.2944 5.35393 24.4267 5.29661C25.0118 5.04149 25.6205 4.87972 26.2528 4.81132C26.2771 4.80877 26.2998 4.79814 26.3176 4.78109C26.3354 4.76403 26.3472 4.74149 26.3512 4.71691C26.3553 4.69234 26.3513 4.6671 26.3398 4.64508C26.3284 4.62306 26.3103 4.60547 26.2881 4.59502L26.0218 4.46191C26.0002 4.45083 25.9822 4.43359 25.97 4.41228C25.9577 4.39096 25.9519 4.36649 25.953 4.34183C25.9542 4.31717 25.9623 4.29338 25.9764 4.27334C25.9906 4.25331 26.0101 4.2379 26.0327 4.22897C27.0472 3.84073 28.1006 3.78065 29.193 4.04872C29.4539 4.11157 29.5046 4.25762 29.3452 4.48687C29.3053 4.54418 29.3098 4.59687 29.3588 4.64493C29.4294 4.71334 29.4865 4.70594 29.5299 4.62275C29.8723 3.98493 30.1242 3.52275 30.2854 3.23619C30.2992 3.21156 30.3203 3.19223 30.3457 3.18099C30.3711 3.16975 30.3995 3.16718 30.4267 3.17367C30.4539 3.18015 30.4786 3.19535 30.4971 3.21705C30.5157 3.23876 30.5272 3.26586 30.5299 3.29443L30.5897 4.16796C30.5934 4.23821 30.6223 4.25115 30.6767 4.20678C31.1622 3.80376 31.6015 3.86014 31.9946 4.37594C32.4403 4.95829 33.0952 4.60611 33.6278 4.75308C33.6765 4.76662 33.7205 4.79387 33.7547 4.83172C33.789 4.86956 33.8121 4.91648 33.8214 4.9671C33.8308 5.01771 33.826 5.07 33.8076 5.11797C33.7892 5.16594 33.758 5.20767 33.7174 5.23838C32.683 6.03149 31.6731 6.79964 30.6876 7.54283C30.2963 7.83956 30.2011 8.18342 29.8588 8.54393C29.4267 8.99317 28.9484 8.86283 29.0055 9.73082C29.0067 9.75068 29.0031 9.77055 28.9949 9.78861C28.9867 9.80666 28.9741 9.82233 28.9585 9.83419C28.9428 9.84604 28.9245 9.85371 28.9052 9.85648C28.8858 9.85925 28.8662 9.85704 28.8479 9.85006L28.5924 9.75023C28.5019 9.7151 28.4213 9.73174 28.3506 9.80014C28.1187 10.0201 28.0707 10.279 28.2066 10.5766C28.2428 10.658 28.2347 10.7347 28.1821 10.8068L27.7446 11.4058C27.7364 11.4176 27.7321 11.4319 27.7325 11.4464C27.7329 11.4609 27.738 11.4749 27.7469 11.4862C27.7558 11.4975 27.7682 11.5055 27.782 11.509C27.7958 11.5125 27.8103 11.5113 27.8234 11.5056C28.7926 11.0915 29.8008 10.9048 30.8479 10.9454C31.5218 10.9732 31.9973 10.5849 32.6685 10.7097C33.2464 10.8188 33.8153 10.8354 34.3751 10.7596C34.4024 10.7559 34.4301 10.7584 34.4564 10.7669C34.4826 10.7754 34.5067 10.7897 34.5269 10.8087C34.5472 10.8278 34.5631 10.8511 34.5734 10.8772C34.5838 10.9032 34.5885 10.9312 34.587 10.9593C34.5562 11.6822 34.376 12.3634 34.0463 13.0031C34.0274 13.0398 33.9992 13.0707 33.9645 13.0925C33.9299 13.1142 33.8902 13.126 33.8495 13.1265C33.8089 13.1271 33.7688 13.1164 33.7336 13.0957C33.6984 13.0749 33.6693 13.0449 33.6495 13.0086C33.087 11.977 32.1522 11.8883 31.2365 12.5705C29.8397 13.6104 28.6577 14.3785 26.837 14.1428C26.7193 14.128 26.6069 14.1345 26.5001 14.1622C26.3696 14.1974 26.3705 14.2288 26.5028 14.2565ZM31.2963 4.76695C31.3923 4.80947 31.4901 4.803 31.5897 4.74754C31.6857 4.69208 31.6912 4.62922 31.606 4.55897C31.4955 4.46838 31.3769 4.45082 31.2501 4.50628C31.2211 4.51912 31.1935 4.53519 31.1692 4.5534C31.1449 4.57161 31.1244 4.59153 31.1092 4.61179C31.094 4.63206 31.0844 4.6522 31.081 4.67084C31.0777 4.68948 31.0806 4.70618 31.0897 4.71981C31.097 4.73275 31.1196 4.73829 31.1577 4.73645C31.2066 4.73645 31.2528 4.74661 31.2963 4.76695ZM33.6196 11.1645C33.27 11.0554 32.9394 11.1091 32.6278 11.3254C32.5941 11.3484 32.57 11.3835 32.5603 11.4238C32.5506 11.464 32.556 11.5065 32.5753 11.5429C32.5947 11.5793 32.6267 11.607 32.665 11.6207C32.7034 11.6343 32.7453 11.6328 32.7827 11.6165L33.6251 11.2671C33.7193 11.2283 33.7174 11.1941 33.6196 11.1645Z" fill="#3C4242" />
    <path d="M28.6114 19.0623C28.6476 19.0993 28.6893 19.1067 28.7364 19.0845C30.6458 18.1842 32.5127 18.2683 34.3369 19.3369C34.4275 19.3905 34.5072 19.3776 34.5761 19.2981C34.9782 18.8303 35.4991 18.59 36.1386 18.5771C37.9185 18.541 39.2364 18.4384 39.2609 20.7512C39.2681 21.6645 39.269 22.5796 39.2636 23.4966C39.2636 23.5927 39.3107 23.6408 39.4049 23.6408H40.2717C40.3641 23.6408 40.4112 23.5936 40.413 23.4993C40.4375 22.1211 39.8261 18.6159 41.9321 18.5937C43.1956 18.5798 46.4321 18.272 47.4592 18.8211C48.5598 19.4034 48.5407 21.5193 47.9619 22.3984C47.9158 22.469 47.8913 22.552 47.8913 22.6369C47.9076 23.7489 48.0272 24.9081 46.8315 25.4128C46.4293 25.5847 45.9293 25.4904 45.4565 25.5181C45.3514 25.5237 45.3016 25.581 45.3071 25.6901C45.4755 29.3173 42.9918 28.0223 41.0163 28.2192C39.4674 28.3744 37.8342 28.2885 36.2772 28.2829C35.5435 28.2792 34.9701 28.0361 34.5571 27.5536C34.4955 27.4834 34.4239 27.4713 34.3424 27.5176C32.0906 28.7839 29.9212 28.6666 27.8342 27.1654C27.7473 27.1025 27.6802 27.121 27.6331 27.2208C26.9946 28.5935 24.0924 28.6573 23.2418 27.7616C23.1784 27.695 23.1114 27.6932 23.0407 27.756C21.9538 28.7488 18.932 28.6018 18.5706 26.9629C18.1051 24.8628 17.6422 22.7617 17.182 20.6597C16.6603 18.2914 19.6032 18.358 21.1223 18.7961C21.2147 18.8239 21.307 18.8248 21.3994 18.7989C22.5335 18.4791 23.6676 18.4735 24.8016 18.7823C24.894 18.8081 24.9864 18.8072 25.0788 18.7795C25.9293 18.5216 27.8859 18.3164 28.6114 19.0623ZM24.788 19.9442C24.7264 19.5171 24.5407 19.299 24.231 19.2897C23.1386 19.2537 21.7282 18.9875 21.4049 19.8915C21.3984 19.9085 21.3872 19.9231 21.3728 19.9338C21.3583 19.9444 21.3411 19.9505 21.3233 19.9514C21.3055 19.9523 21.2878 19.9479 21.2724 19.9387C21.257 19.9296 21.2445 19.9161 21.2364 19.8998C20.8234 19.0013 19.788 19.2676 18.9918 19.2731C17.981 19.2759 17.6494 19.7307 17.8614 20.729C18.3052 22.8236 18.7518 24.8692 19.2011 26.8659C19.2474 27.073 19.3614 27.2577 19.5245 27.3898C19.6875 27.5219 19.8897 27.5933 20.0978 27.5924L22.1359 27.5897C22.1871 27.5896 22.2377 27.5784 22.2841 27.5569C22.3305 27.5354 22.3717 27.504 22.4049 27.4649C22.7907 27.0064 22.9927 26.4675 23.0109 25.8481C23.0109 25.8167 23.0263 25.801 23.057 25.801H23.1331C23.2038 25.801 23.24 25.8371 23.2418 25.9092C23.2581 26.5248 23.4638 27.048 23.8587 27.4787C23.8913 27.5146 23.9311 27.5432 23.9755 27.5628C24.0199 27.5823 24.068 27.5924 24.1168 27.5924C24.9592 27.5952 26.8587 27.9613 27.0679 26.7827C27.1639 26.2373 27.259 25.7788 27.3532 25.4072C27.3967 25.2445 27.4502 25.2408 27.5136 25.3961C28.7282 28.3218 33.0462 28.4382 34.788 26.07C34.7992 26.0553 34.8148 26.0447 34.8325 26.0398C34.8503 26.035 34.8689 26.0362 34.8856 26.0432C34.9023 26.0503 34.9159 26.0628 34.9243 26.0787C34.9328 26.0946 34.9355 26.1131 34.9321 26.131C34.7609 27.3262 35.4239 27.6091 36.4755 27.6008C37.9538 27.5897 39.4339 27.5878 40.9157 27.5952C40.9866 27.5951 41.0556 27.5739 41.1141 27.5342C41.3098 27.3992 41.5045 27.3928 41.6984 27.5148C41.7744 27.5629 41.8578 27.5878 41.9484 27.5897C42.8342 27.6008 44.6821 27.9779 44.6902 26.5525C44.692 26.0552 44.6975 25.5496 44.7065 25.0356C44.7083 24.9469 44.7527 24.9016 44.8397 24.8997C46.7826 24.8748 47.6331 24.8776 47.1331 22.44C47.1168 22.3531 47.1404 22.2792 47.2038 22.2181L47.5299 21.902C47.559 21.874 47.5823 21.8401 47.5982 21.8024C47.6141 21.7648 47.6223 21.7241 47.6223 21.6829V20.105C47.6223 19.8844 47.5364 19.6728 47.3835 19.5168C47.2306 19.3608 47.0233 19.2731 46.8071 19.2731H41.9266C41.69 19.2731 41.463 19.3688 41.2954 19.5393C41.1278 19.7098 41.0333 19.9412 41.0326 20.1827V24.1538C41.0326 24.2647 40.9782 24.3202 40.8696 24.3202L38.75 24.3174C38.6413 24.3174 38.5869 24.2629 38.5869 24.1538V20.1744C38.587 19.9375 38.4953 19.7102 38.332 19.542C38.1686 19.3737 37.9467 19.2781 37.7147 19.2759C36.7799 19.2676 34.4837 18.871 34.9973 20.7595C35.0044 20.7834 35.0027 20.8091 34.9925 20.8318C34.9824 20.8546 34.9645 20.8727 34.9421 20.8829C34.9198 20.8931 34.8946 20.8947 34.8712 20.8873C34.8479 20.8799 34.8279 20.864 34.8152 20.8427C33.4701 18.7545 30.4157 18.749 28.557 19.9969C28.4773 20.0505 28.4212 20.0311 28.3886 19.9387C28.0516 18.9625 26.3614 19.2398 25.5706 19.2981C25.5229 19.3015 25.4765 19.3154 25.4348 19.3388C25.393 19.3623 25.3568 19.3948 25.3288 19.4339L24.9348 19.983C24.9251 19.9965 24.9117 20.0067 24.8964 20.0123C24.881 20.0179 24.8643 20.0187 24.8485 20.0145C24.8327 20.0103 24.8184 20.0014 24.8077 19.9888C24.7969 19.9763 24.79 19.9607 24.788 19.9442Z" fill="#3C4242" />
    <path d="M34.6345 23.8245C34.6331 24.2211 34.5552 24.6135 34.4053 24.9793C34.2553 25.3452 34.0362 25.6773 33.7604 25.9568C33.4847 26.2362 33.1577 26.4575 32.7982 26.608C32.4386 26.7585 32.0535 26.8352 31.6649 26.8339L30.9421 26.8313C30.5535 26.8299 30.1689 26.7504 29.8104 26.5974C29.4519 26.4443 29.1264 26.2207 28.8526 25.9393C28.5788 25.6579 28.3619 25.3242 28.2145 24.9573C28.067 24.5904 27.9918 24.1974 27.9932 23.8008L27.9959 23.0022C27.9973 22.6056 28.0752 22.2132 28.2251 21.8473C28.3751 21.4815 28.5942 21.1493 28.87 20.8699C29.1457 20.5904 29.4727 20.3692 29.8322 20.2187C30.1918 20.0682 30.5769 19.9914 30.9655 19.9928L31.6883 19.9954C32.0769 19.9968 32.4614 20.0763 32.82 20.2293C33.1785 20.3823 33.5039 20.606 33.7778 20.8874C34.0516 21.1688 34.2684 21.5024 34.4159 21.8694C34.5634 22.2363 34.6386 22.6293 34.6372 23.0258L34.6345 23.8245ZM32.1875 21.1616C31.7473 21.877 30.9429 21.8493 30.4049 21.1255C30.3745 21.084 30.3315 21.054 30.2824 21.0399C30.2333 21.0259 30.1808 21.0287 30.1331 21.0479C29.865 21.1551 29.7183 21.4195 29.6929 21.841C29.6694 22.22 29.4873 22.8301 29.1467 23.6712C29.1123 23.7581 29.1123 23.8441 29.1467 23.9291C29.4348 24.6806 30.6195 25.5292 31.182 26.1532C31.2509 26.2308 31.3215 26.2317 31.394 26.1559C31.8288 25.6993 32.3958 25.1669 33.0951 24.5586C33.856 23.8959 33.307 23.466 33.1739 22.8421C33.0616 22.3189 32.9157 21.7809 32.7364 21.2281C32.7185 21.1721 32.6852 21.1226 32.6406 21.0854C32.5959 21.0481 32.5416 21.0246 32.4841 21.0176C32.4266 21.0107 32.3682 21.0205 32.3157 21.046C32.2632 21.0714 32.2187 21.1115 32.1875 21.1616Z" fill="#3C4242" />
    <path d="M22.9918 23.0002L21.9918 26.5803C21.9592 26.7004 21.8822 26.7605 21.7608 26.7605H20.2391C20.0941 26.7605 20.0063 26.6884 19.9755 26.5442L18.6141 20.2603C18.61 20.2417 18.6101 20.2223 18.6143 20.2037C18.6186 20.185 18.6269 20.1676 18.6386 20.1527C18.6504 20.1378 18.6653 20.1258 18.6822 20.1175C18.6991 20.1093 18.7176 20.105 18.7364 20.105H20.2717C20.3228 20.1049 20.3724 20.1232 20.4117 20.1566C20.451 20.1901 20.4774 20.2367 20.4864 20.2881L21.0244 23.2359C21.0311 23.2716 21.0496 23.304 21.0767 23.3277C21.1038 23.3514 21.1379 23.365 21.1736 23.3663C21.2093 23.3676 21.2443 23.3565 21.273 23.3348C21.3017 23.3131 21.3223 23.2822 21.3315 23.247L22.1385 20.2576C22.1657 20.1559 22.2309 20.105 22.3342 20.105H23.9076C24.0181 20.105 24.086 20.1596 24.1114 20.2687C24.3469 21.2208 24.586 22.1618 24.8287 23.0917C24.865 23.2322 24.9374 23.3145 25.0461 23.3385C25.0645 23.3425 25.0835 23.3428 25.102 23.3392C25.1205 23.3357 25.1381 23.3284 25.1538 23.3178C25.1695 23.3072 25.183 23.2935 25.1934 23.2776C25.2038 23.2616 25.2111 23.2436 25.2146 23.2248L25.7554 20.2659C25.7636 20.2206 25.7872 20.1797 25.822 20.1503C25.8567 20.1209 25.9005 20.1049 25.9456 20.105H27.4565C27.5869 20.105 27.6376 20.1707 27.6086 20.3019L26.2445 26.6302C26.2246 26.7171 26.1711 26.7605 26.0842 26.7605H24.4429C24.3396 26.7605 24.2735 26.7097 24.2445 26.608L23.2581 23.0029C23.2501 22.9734 23.2328 22.9473 23.209 22.9286C23.1852 22.9099 23.156 22.8996 23.126 22.8993C23.0959 22.899 23.0666 22.9087 23.0424 22.9269C23.0182 22.9451 23.0004 22.9708 22.9918 23.0002Z" fill="#3C4242" />
    <path d="M37.9266 25.166H40.7419C40.7829 25.166 40.8223 25.1826 40.8514 25.2123C40.8804 25.2419 40.8967 25.2821 40.8967 25.324V26.6024C40.8967 26.6444 40.8804 26.6846 40.8514 26.7142C40.8223 26.7439 40.7829 26.7605 40.7419 26.7605H35.9565C35.9154 26.7605 35.876 26.7439 35.847 26.7142C35.818 26.6846 35.8016 26.6444 35.8016 26.6024V20.2631C35.8016 20.2212 35.818 20.181 35.847 20.1513C35.876 20.1217 35.9154 20.105 35.9565 20.105H37.6169C37.6579 20.105 37.6973 20.1217 37.7264 20.1513C37.7554 20.181 37.7717 20.2212 37.7717 20.2631V25.0079C37.7717 25.0498 37.7881 25.09 37.8171 25.1197C37.8462 25.1493 37.8856 25.166 37.9266 25.166Z" fill="#3C4242" />
    <path d="M44.0109 22.6702H46.25C46.2896 22.6702 46.3277 22.6862 46.3557 22.7148C46.3837 22.7434 46.3995 22.7822 46.3995 22.8227V23.8709C46.3995 23.9109 46.3841 23.9493 46.3567 23.9778C46.3292 24.0063 46.2919 24.0227 46.2527 24.0234L44.0326 24.0678C43.9935 24.0685 43.9561 24.0849 43.9287 24.1135C43.9012 24.142 43.8859 24.1804 43.8859 24.2203V26.608C43.8859 26.6484 43.8701 26.6872 43.8421 26.7158C43.8141 26.7444 43.7761 26.7605 43.7364 26.7605H42.0652C42.0256 26.7605 41.9876 26.7444 41.9595 26.7158C41.9315 26.6872 41.9158 26.6484 41.9158 26.608V20.2576C41.9158 20.2171 41.9315 20.1783 41.9595 20.1497C41.9876 20.1211 42.0256 20.105 42.0652 20.105H46.6576C46.6973 20.105 46.7353 20.1211 46.7633 20.1497C46.7913 20.1783 46.8071 20.2171 46.8071 20.2576V21.3391C46.8071 21.3795 46.7913 21.4183 46.7633 21.4469C46.7353 21.4755 46.6973 21.4916 46.6576 21.4916H44.0489C44.0102 21.4916 43.973 21.5069 43.9451 21.5343C43.9172 21.5617 43.9009 21.5991 43.8995 21.6386L43.8614 22.5121C43.8607 22.5326 43.864 22.553 43.8712 22.5722C43.8784 22.5913 43.8893 22.6088 43.9032 22.6236C43.9172 22.6383 43.9339 22.65 43.9524 22.6581C43.9709 22.6661 43.9908 22.6702 44.0109 22.6702Z" fill="#3C4242" />
    <path d="M30.4891 21.9436C30.4221 21.805 30.3061 21.7468 30.1413 21.7689C30.0163 21.7874 29.9755 21.7366 30.019 21.6164L30.0842 21.4389C30.1331 21.3003 30.2074 21.2846 30.307 21.3918C30.9538 22.0869 31.6005 22.1073 32.2473 21.4528C32.3252 21.3752 32.3822 21.3881 32.4185 21.4916L33.0951 23.3912C33.155 23.5577 33.1659 23.7385 33.1263 23.9114C33.0867 24.0844 32.9984 24.2419 32.8723 24.3646L31.4266 25.7594C31.4038 25.7818 31.377 25.7993 31.3475 25.811C31.3181 25.8227 31.2867 25.8283 31.2551 25.8276C31.2235 25.8268 31.1924 25.8196 31.1635 25.8065C31.1346 25.7934 31.1086 25.7746 31.0869 25.7511L29.4674 24.0096C29.3822 23.919 29.3596 23.8146 29.3994 23.6962L29.9456 22.0296C29.9964 21.878 30.0652 21.8688 30.1521 22.0019C30.2083 22.0888 30.2898 22.1257 30.3967 22.1128C30.5054 22.0999 30.5362 22.0435 30.4891 21.9436ZM32.2119 21.7911L32.0896 21.9159C32.0755 21.9303 32.0655 21.9483 32.0605 21.968C32.0555 21.9877 32.0559 22.0084 32.0614 22.028C32.067 22.0475 32.0776 22.0652 32.0921 22.0791C32.1066 22.0931 32.1245 22.1028 32.144 22.1073C32.2581 22.1331 32.3369 22.1054 32.3804 22.0241C32.4257 21.9427 32.4085 21.8651 32.3288 21.7911C32.2889 21.7523 32.25 21.7523 32.2119 21.7911ZM31.913 23.602L31.9375 22.8061C31.9393 22.7192 31.8976 22.6739 31.8125 22.6702C31.7835 22.6702 31.7536 22.6702 31.7228 22.6702C31.634 22.672 31.5896 22.7192 31.5896 22.8116V23.6297C31.5896 23.7369 31.5444 23.8183 31.4538 23.8737L31.3886 23.9126C31.3338 23.9445 31.2704 23.9572 31.2079 23.9488C31.1454 23.9404 31.0873 23.9113 31.0426 23.866C30.9979 23.8206 30.9689 23.7616 30.9603 23.6979C30.9516 23.6341 30.9636 23.5693 30.9945 23.5132C31.1449 23.2507 31.1476 22.991 31.0027 22.734C30.9901 22.7113 30.9728 22.6918 30.952 22.6766C30.9313 22.6615 30.9077 22.6512 30.8828 22.6464C30.8579 22.6416 30.8323 22.6425 30.808 22.649C30.7836 22.6556 30.761 22.6675 30.7418 22.6841C30.4429 22.9429 30.4266 23.1971 30.6929 23.4467C30.7167 23.4662 30.7319 23.4945 30.7352 23.5254C30.7385 23.5564 30.7297 23.5874 30.7106 23.6117C30.6915 23.6359 30.6637 23.6515 30.6334 23.6549C30.6031 23.6582 30.5727 23.6492 30.5489 23.6297C30.3406 23.4818 30.1893 23.2858 30.0951 23.0418C30.0498 22.9216 30.009 22.9235 29.9728 23.0473C29.8233 23.5881 30.163 24.0429 30.3532 24.531C30.3895 24.6215 30.4502 24.6881 30.5353 24.7306C30.8415 24.8804 31.0489 25.1161 31.1576 25.4378C31.168 25.4669 31.1869 25.4922 31.2117 25.5101C31.2365 25.5281 31.2662 25.5378 31.2966 25.5381C31.327 25.5384 31.3568 25.5293 31.382 25.5118C31.4072 25.4944 31.4265 25.4695 31.4375 25.4405C31.5625 25.1078 31.7916 24.8702 32.125 24.7278C32.2137 24.689 32.2735 24.6234 32.3043 24.531C32.4511 24.0956 32.9837 23.3274 32.3967 23.0085C32.3061 22.9586 32.2645 22.9863 32.2717 23.0917C32.2898 23.3173 32.221 23.5095 32.0652 23.6685C31.9583 23.7776 31.9076 23.7554 31.913 23.602Z" fill="#3C4242" />
    <path d="M31.8071 24.481C31.6658 24.6899 31.4719 24.7786 31.2255 24.7472C31.1277 24.7343 31.0426 24.6945 30.9701 24.628L30.7092 24.3895C30.6549 24.3377 30.6612 24.2961 30.7283 24.2647C31.0362 24.1168 31.3388 24.1131 31.6359 24.2536C31.6975 24.2832 31.7518 24.273 31.7989 24.2231L31.8777 24.1427C31.9629 24.0576 32.0027 24.1223 31.9973 24.3368C31.9973 24.3775 31.9773 24.3996 31.9375 24.4033C31.8831 24.4089 31.8397 24.4348 31.8071 24.481Z" fill="#3C4242" />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#B0B0B0" />
    <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="#B0B0B0" />
    <path d="M2.66998 18.95L7.59998 15.64C8.38998 15.11 9.52998 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="#B0B0B0" />
  </svg>
);