import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import MosChart from "../components/MosChart";
import MosGauge from "../components/MosGauge";

const Codec = () => {
  return (
    <div className="codec-body">
      <Helmet>
        <title>Codec</title>
      </Helmet>
      <div className="c-outer-1">
        <div className="c-side-menu">
          <div className="user-profile">
            <img className="profile-img" src="img/frame.png" alt="Admin Image"/>
            <p className="open-sans profile-name">Jeffrey Boadu</p>
          </div>
          <ul className="c-side-menu-options">
            <p className="open-sans option-head">Dashboard</p>
            <li>
              <Link className="open-sans option-item option-active" to="/codec">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.81261 9.09609C7.90765 9.04123 7.98656 8.96231 8.04142 8.86727C8.09627 8.77223 8.12514 8.66442 8.12511 8.55469V2.92969C8.12456 2.83004 8.10018 2.73198 8.05402 2.64367C8.00786 2.55536 7.94126 2.47936 7.85976 2.42202C7.77826 2.36469 7.68424 2.32766 7.58553 2.31405C7.48681 2.30043 7.38628 2.31062 7.2923 2.34375C5.46807 2.98939 3.93396 4.26457 2.96575 5.94005C1.99755 7.61554 1.65875 9.58145 2.01027 11.4844C2.02849 11.5828 2.07008 11.6754 2.13153 11.7544C2.19298 11.8333 2.27249 11.8964 2.3634 11.9383C2.44531 11.9766 2.53468 11.9963 2.62511 11.9961C2.73481 11.9961 2.84259 11.9673 2.93761 11.9125L7.81261 9.09609ZM6.87511 3.87656V8.19375L3.13449 10.3523C3.12511 10.2344 3.12511 10.1156 3.12511 10C3.12622 8.73309 3.4769 7.49106 4.13855 6.41066C4.80019 5.33025 5.74713 4.45337 6.87511 3.87656ZM18.1251 10C18.1257 11.7837 17.5394 13.518 16.4565 14.9354C15.3737 16.3528 13.8545 17.3745 12.1334 17.8428C10.4122 18.3111 8.58484 18.2 6.9331 17.5267C5.28137 16.8534 3.8971 15.6553 2.99386 14.1172C2.95176 14.0461 2.92415 13.9675 2.91263 13.8857C2.90112 13.8039 2.90592 13.7207 2.92677 13.6407C2.94762 13.5608 2.9841 13.4859 3.0341 13.4201C3.0841 13.3544 3.14664 13.2992 3.21808 13.2578L9.37511 9.67422V2.5C9.37511 2.33424 9.44096 2.17527 9.55817 2.05806C9.67538 1.94085 9.83435 1.875 10.0001 1.875C11.418 1.87572 12.811 2.24729 14.0409 2.95282C15.2707 3.65834 16.2947 4.67328 17.0111 5.89688C17.0196 5.90938 17.0275 5.92188 17.0353 5.93516C17.0431 5.94844 17.0509 5.96406 17.0579 5.97812C17.759 7.20247 18.1269 8.58916 18.1251 10Z"
                    fill=""
                  />
                </svg>
                Overview
              </Link>
            </li>
            <li>
              <Link className="open-sans option-item" to="/codec">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill=""
                  />
                </svg>
                Statistics
              </Link>
            </li>
            <li>
              <Link className="open-sans option-item" to="/codec">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.875 7.75V20.25H7.125C6.95924 20.25 6.80027 20.1842 6.68306 20.0669C6.56585 19.9497 6.5 19.7908 6.5 19.625V8.375C6.5 8.20924 6.56585 8.05027 6.68306 7.93306C6.80027 7.81585 6.95924 7.75 7.125 7.75H10.875Z"
                    fill=""
                    fill-opacity="0.1"
                  />
                  <path
                    d="M20.875 7.125H7.125C6.79348 7.125 6.47554 7.2567 6.24112 7.49112C6.0067 7.72554 5.875 8.04348 5.875 8.375V19.625C5.875 19.9565 6.0067 20.2745 6.24112 20.5089C6.47554 20.7433 6.79348 20.875 7.125 20.875H20.875C21.2065 20.875 21.5245 20.7433 21.7589 20.5089C21.9933 20.2745 22.125 19.9565 22.125 19.625V8.375C22.125 8.04348 21.9933 7.72554 21.7589 7.49112C21.5245 7.2567 21.2065 7.125 20.875 7.125ZM7.125 15.875H8.375C8.54076 15.875 8.69973 15.8092 8.81694 15.6919C8.93415 15.5747 9 15.4158 9 15.25C9 15.0842 8.93415 14.9253 8.81694 14.8081C8.69973 14.6908 8.54076 14.625 8.375 14.625H7.125V13.375H8.375C8.54076 13.375 8.69973 13.3092 8.81694 13.1919C8.93415 13.0747 9 12.9158 9 12.75C9 12.5842 8.93415 12.4253 8.81694 12.3081C8.69973 12.1908 8.54076 12.125 8.375 12.125H7.125V10.875H8.375C8.54076 10.875 8.69973 10.8092 8.81694 10.6919C8.93415 10.5747 9 10.4158 9 10.25C9 10.0842 8.93415 9.92527 8.81694 9.80806C8.69973 9.69085 8.54076 9.625 8.375 9.625H7.125V8.375H10.25V19.625H7.125V15.875ZM20.875 19.625H11.5V8.375H20.875V19.625Z"
                    fill=""
                  />
                </svg>
                Analyze
              </Link>
            </li>
            <li>
              <Link className="open-sans option-item" to="/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.875 14C20.875 15.3597 20.4718 16.689 19.7164 17.8195C18.9609 18.9501 17.8872 19.8313 16.631 20.3517C15.3747 20.872 13.9924 21.0082 12.6588 20.7429C11.3251 20.4776 10.1001 19.8228 9.13864 18.8614C8.17716 17.8999 7.52238 16.6749 7.2571 15.3412C6.99183 14.0076 7.12798 12.6253 7.64833 11.3691C8.16868 10.1128 9.04987 9.03908 10.1805 8.28365C11.311 7.52821 12.6403 7.125 14 7.125C15.8234 7.125 17.5721 7.84933 18.8614 9.13864C20.1507 10.428 20.875 12.1766 20.875 14Z"
                    fill=""
                    fill-opacity="0.1"
                  />
                  <path
                    d="M14.625 10.25V13.6461L17.4469 15.3391C17.589 15.4244 17.6914 15.5628 17.7316 15.7236C17.7717 15.8845 17.7463 16.0547 17.6609 16.1969C17.5756 16.339 17.4372 16.4414 17.2764 16.4816C17.1155 16.5217 16.9453 16.4963 16.8031 16.4109L13.6781 14.5359C13.5856 14.4804 13.5091 14.4018 13.456 14.3079C13.4029 14.214 13.375 14.1079 13.375 14V10.25C13.375 10.0842 13.4408 9.92527 13.5581 9.80806C13.6753 9.69085 13.8342 9.625 14 9.625C14.1658 9.625 14.3247 9.69085 14.4419 9.80806C14.5592 9.92527 14.625 10.0842 14.625 10.25ZM14 6.5C13.0141 6.49754 12.0374 6.69065 11.1266 7.06815C10.2158 7.44564 9.38889 8.00003 8.69375 8.69922C8.12578 9.27422 7.62109 9.82734 7.125 10.4063V9C7.125 8.83424 7.05915 8.67527 6.94194 8.55806C6.82473 8.44085 6.66576 8.375 6.5 8.375C6.33424 8.375 6.17527 8.44085 6.05806 8.55806C5.94085 8.67527 5.875 8.83424 5.875 9V12.125C5.875 12.2908 5.94085 12.4497 6.05806 12.5669C6.17527 12.6842 6.33424 12.75 6.5 12.75H9.625C9.79076 12.75 9.94973 12.6842 10.0669 12.5669C10.1842 12.4497 10.25 12.2908 10.25 12.125C10.25 11.9592 10.1842 11.8003 10.0669 11.6831C9.94973 11.5658 9.79076 11.5 9.625 11.5H7.82812C8.38672 10.8422 8.94297 10.2227 9.57734 9.58047C10.446 8.71184 11.5513 8.11844 12.7553 7.87444C13.9592 7.63043 15.2084 7.74662 16.3467 8.2085C17.485 8.67039 18.4619 9.45747 19.1555 10.4714C19.849 11.4854 20.2283 12.6812 20.2461 13.9095C20.2639 15.1378 19.9193 16.3441 19.2554 17.3777C18.5915 18.4113 17.6377 19.2263 16.5132 19.7209C15.3888 20.2155 14.1435 20.3678 12.933 20.1587C11.7225 19.9496 10.6004 19.3885 9.70703 18.5453C9.64732 18.4889 9.57708 18.4448 9.50032 18.4155C9.42356 18.3862 9.34179 18.3723 9.25967 18.3747C9.17754 18.377 9.09668 18.3954 9.0217 18.429C8.94672 18.4626 8.87908 18.5106 8.82266 18.5703C8.76623 18.63 8.72212 18.7003 8.69283 18.777C8.66355 18.8538 8.64967 18.9356 8.652 19.0177C8.65432 19.0998 8.67279 19.1807 8.70636 19.2556C8.73993 19.3306 8.78795 19.3983 8.84766 19.4547C9.73785 20.2947 10.8201 20.9042 12 21.2298C13.1799 21.5554 14.4215 21.5872 15.6166 21.3226C16.8116 21.058 17.9237 20.5049 18.8559 19.7117C19.788 18.9184 20.5118 17.9091 20.9642 16.7717C21.4165 15.6344 21.5836 14.4036 21.4509 13.1869C21.3182 11.9701 20.8897 10.8043 20.2029 9.7912C19.516 8.77811 18.5916 7.94852 17.5104 7.37483C16.4292 6.80114 15.224 6.5008 14 6.5Z"
                    fill="white"
                  />
                </svg>
                Homepage
              </Link>
            </li>
          </ul>
        </div>

        <div className="c-dashboard">
          <nav className="c-navbar">
            <div className="c-navbar-left">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z"
                    fill=""
                    fill-opacity="0.1"
                  />
                  <path
                    d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z"
                    fill=""
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3851 11.5391C14.2995 11.6143 14.2358 11.7114 14.2009 11.8199C14.1659 11.9284 14.161 12.0444 14.1867 12.1555L15.2429 16.7289C15.2709 16.8484 15.263 16.9734 15.2204 17.0884C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4955C14.5409 17.5012 14.4194 17.4707 14.314 17.4078L10.3218 14.9859C10.2248 14.927 10.1135 14.8958 9.99998 14.8958C9.88645 14.8958 9.7751 14.927 9.6781 14.9859L5.68591 17.4078C5.58058 17.4707 5.45907 17.5012 5.33654 17.4955C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0884C4.73695 16.9734 4.72909 16.8484 4.75701 16.7289L5.81326 12.1555C5.83893 12.0444 5.83404 11.9284 5.7991 11.8199C5.76416 11.7114 5.70048 11.6143 5.61482 11.5391L2.0906 8.46485C1.99638 8.38477 1.92803 8.27854 1.8942 8.1596C1.86038 8.04067 1.86259 7.91437 1.90056 7.79669C1.93853 7.67902 2.01056 7.57524 2.10752 7.49851C2.20449 7.42178 2.32203 7.37554 2.44529 7.36563L7.0906 6.96407C7.20393 6.95397 7.31236 6.91313 7.40419 6.84594C7.49602 6.77876 7.56777 6.68778 7.61169 6.58282L9.42654 2.25782C9.47501 2.146 9.55512 2.05079 9.657 1.98391C9.75889 1.91703 9.8781 1.8814 9.99998 1.8814C10.1218 1.8814 10.2411 1.91703 10.3429 1.98391C10.4448 2.05079 10.5249 2.146 10.5734 2.25782L12.3883 6.58282C12.4322 6.68778 12.5039 6.77876 12.5958 6.84594C12.6876 6.91313 12.796 6.95397 12.9094 6.96407L17.5547 7.36563C17.6779 7.37554 17.7955 7.42178 17.8924 7.49851C17.9894 7.57524 18.0614 7.67902 18.0994 7.79669C18.1374 7.91437 18.1396 8.04067 18.1057 8.1596C18.0719 8.27854 18.0036 8.38477 17.9094 8.46485L14.3851 11.5391Z"
                    fill=""
                    fill-opacity="0.1"
                  />
                  <path
                    d="M18.6875 7.60078C18.6118 7.36749 18.4692 7.16161 18.2773 7.00881C18.0855 6.856 17.8529 6.763 17.6086 6.7414L12.9688 6.3414L11.15 2.0164C11.0553 1.78946 10.8956 1.59561 10.691 1.45926C10.4863 1.32291 10.2459 1.25015 10 1.25015C9.75411 1.25015 9.51371 1.32291 9.30907 1.45926C9.10443 1.59561 8.94471 1.78946 8.85002 2.0164L7.03674 6.3414L2.39142 6.74375C2.14614 6.76436 1.9124 6.85693 1.71952 7.00985C1.52663 7.16278 1.38319 7.36924 1.30718 7.60336C1.23117 7.83748 1.22598 8.08883 1.29225 8.32589C1.35852 8.56295 1.49331 8.77517 1.6797 8.93593L5.20392 12.0156L4.14767 16.5891C4.09182 16.8284 4.10776 17.0789 4.19349 17.3092C4.27923 17.5395 4.43095 17.7395 4.6297 17.884C4.82845 18.0286 5.0654 18.1113 5.31093 18.122C5.55647 18.1326 5.79968 18.0706 6.01017 17.9437L9.99455 15.5219L13.9875 17.9437C14.198 18.0706 14.4412 18.1326 14.6868 18.122C14.9323 18.1113 15.1692 18.0286 15.368 17.884C15.5667 17.7395 15.7185 17.5395 15.8042 17.3092C15.8899 17.0789 15.9059 16.8284 15.85 16.5891L14.7945 12.0109L18.318 8.93593C18.5044 8.77462 18.6389 8.56179 18.7046 8.32423C18.7704 8.08667 18.7644 7.83497 18.6875 7.60078ZM17.4985 7.9914L13.975 11.0664C13.8035 11.2156 13.676 11.4087 13.606 11.6249C13.5361 11.8412 13.5265 12.0724 13.5781 12.2937L14.6367 16.875L10.6469 14.4531C10.4522 14.3346 10.2287 14.2719 10.0008 14.2719C9.77288 14.2719 9.54936 14.3346 9.3547 14.4531L5.37033 16.875L6.42189 12.2969C6.47357 12.0755 6.46393 11.8443 6.394 11.6281C6.32407 11.4118 6.1965 11.2187 6.02502 11.0695L2.50002 7.99609C2.49973 7.99376 2.49973 7.99139 2.50002 7.98906L7.14377 7.5875C7.37049 7.56751 7.58745 7.48601 7.77125 7.35177C7.95505 7.21754 8.09871 7.03567 8.18674 6.82578L10 2.50625L11.8125 6.82578C11.9005 7.03567 12.0442 7.21754 12.228 7.35177C12.4118 7.48601 12.6288 7.56751 12.8555 7.5875L17.5 7.98906C17.5 7.98906 17.5 7.99375 17.5 7.99453L17.4985 7.9914Z"
                    fill=""
                  />
                </svg>
              </button>
              <p className="open-sans c-nav-left-text">
                <span className="left-text-1">Codec</span>{" "}
                <span className="open-sans left-text-1">/</span>{" "}
                  Dashboard
              </p>
            </div>

            <div className="c-navbar-right">
              <form className="c-navbar-form" action="">
                <input
                  className="c-navbar-search"
                  placeholder="&#xf002; Search                       &#x2318;"
                  type="text"
                  name=""
                  id=""
                />
              </form>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.375 10C14.375 10.8653 14.1184 11.7112 13.6377 12.4306C13.157 13.1501 12.4737 13.7108 11.6742 14.042C10.8748 14.3731 9.99515 14.4597 9.14648 14.2909C8.29781 14.1221 7.51826 13.7054 6.90641 13.0936C6.29456 12.4817 5.87788 11.7022 5.70907 10.8535C5.54026 10.0049 5.6269 9.12519 5.95803 8.32576C6.28916 7.52633 6.84992 6.84305 7.56938 6.36232C8.28885 5.88159 9.13471 5.625 10 5.625C11.1603 5.625 12.2731 6.08594 13.0936 6.90641C13.9141 7.72688 14.375 8.83968 14.375 10Z"
                    fill=""
                    fill-opacity="0.1"
                  />
                  <path
                    d="M9.375 3.125V1.25C9.375 1.08424 9.44085 0.925268 9.55806 0.808058C9.67527 0.690848 9.83424 0.625 10 0.625C10.1658 0.625 10.3247 0.690848 10.4419 0.808058C10.5592 0.925268 10.625 1.08424 10.625 1.25V3.125C10.625 3.29076 10.5592 3.44973 10.4419 3.56694C10.3247 3.68415 10.1658 3.75 10 3.75C9.83424 3.75 9.67527 3.68415 9.55806 3.56694C9.44085 3.44973 9.375 3.29076 9.375 3.125ZM15 10C15 10.9889 14.7068 11.9556 14.1573 12.7779C13.6079 13.6001 12.827 14.241 11.9134 14.6194C10.9998 14.9978 9.99445 15.0969 9.02455 14.9039C8.05464 14.711 7.16373 14.2348 6.46447 13.5355C5.7652 12.8363 5.289 11.9454 5.09607 10.9755C4.90315 10.0055 5.00216 9.00021 5.3806 8.08658C5.75904 7.17295 6.3999 6.39206 7.22215 5.84265C8.04439 5.29324 9.01109 5 10 5C11.3256 5.00145 12.5966 5.5287 13.5339 6.46606C14.4713 7.40343 14.9986 8.67436 15 10ZM13.75 10C13.75 9.25832 13.5301 8.5333 13.118 7.91661C12.706 7.29993 12.1203 6.81928 11.4351 6.53545C10.7498 6.25162 9.99584 6.17736 9.26841 6.32206C8.54098 6.46675 7.8728 6.8239 7.34835 7.34835C6.8239 7.8728 6.46675 8.54098 6.32206 9.26841C6.17736 9.99584 6.25162 10.7498 6.53545 11.4351C6.81928 12.1203 7.29993 12.706 7.91661 13.118C8.5333 13.5301 9.25832 13.75 10 13.75C10.9942 13.749 11.9475 13.3535 12.6505 12.6505C13.3535 11.9475 13.749 10.9942 13.75 10ZM4.55781 5.44219C4.67509 5.55946 4.83415 5.62535 5 5.62535C5.16585 5.62535 5.32491 5.55946 5.44219 5.44219C5.55946 5.32491 5.62535 5.16585 5.62535 5C5.62535 4.83415 5.55946 4.67509 5.44219 4.55781L4.19219 3.30781C4.07491 3.19054 3.91585 3.12465 3.75 3.12465C3.58415 3.12465 3.42509 3.19054 3.30781 3.30781C3.19054 3.42509 3.12465 3.58415 3.12465 3.75C3.12465 3.91585 3.19054 4.07491 3.30781 4.19219L4.55781 5.44219ZM4.55781 14.5578L3.30781 15.8078C3.19054 15.9251 3.12465 16.0841 3.12465 16.25C3.12465 16.4159 3.19054 16.5749 3.30781 16.6922C3.42509 16.8095 3.58415 16.8753 3.75 16.8753C3.91585 16.8753 4.07491 16.8095 4.19219 16.6922L5.44219 15.4422C5.50026 15.3841 5.54632 15.3152 5.57775 15.2393C5.60917 15.1634 5.62535 15.0821 5.62535 15C5.62535 14.9179 5.60917 14.8366 5.57775 14.7607C5.54632 14.6848 5.50026 14.6159 5.44219 14.5578C5.38412 14.4997 5.31518 14.4537 5.23931 14.4223C5.16344 14.3908 5.08212 14.3747 5 14.3747C4.91788 14.3747 4.83656 14.3908 4.76069 14.4223C4.68482 14.4537 4.61588 14.4997 4.55781 14.5578ZM15 5.625C15.0821 5.62506 15.1634 5.60895 15.2393 5.57759C15.3152 5.54622 15.3841 5.50021 15.4422 5.44219L16.6922 4.19219C16.8095 4.07491 16.8753 3.91585 16.8753 3.75C16.8753 3.58415 16.8095 3.42509 16.6922 3.30781C16.5749 3.19054 16.4159 3.12465 16.25 3.12465C16.0841 3.12465 15.9251 3.19054 15.8078 3.30781L14.5578 4.55781C14.4703 4.64522 14.4107 4.75663 14.3865 4.87793C14.3624 4.99924 14.3748 5.12498 14.4221 5.23924C14.4695 5.35351 14.5496 5.45116 14.6525 5.51982C14.7554 5.58849 14.8763 5.6251 15 5.625ZM15.4422 14.5578C15.3249 14.4405 15.1659 14.3747 15 14.3747C14.8341 14.3747 14.6751 14.4405 14.5578 14.5578C14.4405 14.6751 14.3747 14.8341 14.3747 15C14.3747 15.1659 14.4405 15.3249 14.5578 15.4422L15.8078 16.6922C15.8659 16.7503 15.9348 16.7963 16.0107 16.8277C16.0866 16.8592 16.1679 16.8753 16.25 16.8753C16.3321 16.8753 16.4134 16.8592 16.4893 16.8277C16.5652 16.7963 16.6341 16.7503 16.6922 16.6922C16.7503 16.6341 16.7963 16.5652 16.8277 16.4893C16.8592 16.4134 16.8753 16.3321 16.8753 16.25C16.8753 16.1679 16.8592 16.0866 16.8277 16.0107C16.7963 15.9348 16.7503 15.8659 16.6922 15.8078L15.4422 14.5578ZM3.75 10C3.75 9.83424 3.68415 9.67527 3.56694 9.55806C3.44973 9.44085 3.29076 9.375 3.125 9.375H1.25C1.08424 9.375 0.925268 9.44085 0.808058 9.55806C0.690848 9.67527 0.625 9.83424 0.625 10C0.625 10.1658 0.690848 10.3247 0.808058 10.4419C0.925268 10.5592 1.08424 10.625 1.25 10.625H3.125C3.29076 10.625 3.44973 10.5592 3.56694 10.4419C3.68415 10.3247 3.75 10.1658 3.75 10ZM10 16.25C9.83424 16.25 9.67527 16.3158 9.55806 16.4331C9.44085 16.5503 9.375 16.7092 9.375 16.875V18.75C9.375 18.9158 9.44085 19.0747 9.55806 19.1919C9.67527 19.3092 9.83424 19.375 10 19.375C10.1658 19.375 10.3247 19.3092 10.4419 19.1919C10.5592 19.0747 10.625 18.9158 10.625 18.75V16.875C10.625 16.7092 10.5592 16.5503 10.4419 16.4331C10.3247 16.3158 10.1658 16.25 10 16.25ZM18.75 9.375H16.875C16.7092 9.375 16.5503 9.44085 16.4331 9.55806C16.3158 9.67527 16.25 9.83424 16.25 10C16.25 10.1658 16.3158 10.3247 16.4331 10.4419C16.5503 10.5592 16.7092 10.625 16.875 10.625H18.75C18.9158 10.625 19.0747 10.5592 19.1919 10.4419C19.3092 10.3247 19.375 10.1658 19.375 10C19.375 9.83424 19.3092 9.67527 19.1919 9.55806C19.0747 9.44085 18.9158 9.375 18.75 9.375Z"
                    fill=""
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2499 15H3.7499C3.64051 14.9993 3.53321 14.97 3.43872 14.9149C3.34423 14.8597 3.26587 14.7808 3.21146 14.6859C3.15705 14.591 3.1285 14.4835 3.12866 14.3741C3.12883 14.2647 3.1577 14.1572 3.2124 14.0625C3.72725 13.1719 4.3749 10.9227 4.3749 8.125C4.3749 6.63316 4.96753 5.20242 6.02243 4.14752C7.07732 3.09263 8.50806 2.5 9.9999 2.5C11.4917 2.5 12.9225 3.09263 13.9774 4.14752C15.0323 5.20242 15.6249 6.63316 15.6249 8.125C15.6249 10.9234 16.2733 13.1719 16.789 14.0625C16.8437 14.1574 16.8726 14.2649 16.8727 14.3745C16.8728 14.484 16.8441 14.5916 16.7895 14.6865C16.7349 14.7815 16.6563 14.8604 16.5616 14.9154C16.4669 14.9705 16.3594 14.9996 16.2499 15Z"
                    fill=""
                    fill-opacity="0.1"
                  />
                  <path
                    d="M17.3282 13.7453C16.8946 12.9984 16.2501 10.8852 16.2501 8.125C16.2501 6.4674 15.5916 4.87769 14.4195 3.70558C13.2474 2.53348 11.6577 1.875 10.0001 1.875C8.34247 1.875 6.75276 2.53348 5.58065 3.70558C4.40855 4.87769 3.75007 6.4674 3.75007 8.125C3.75007 10.8859 3.10476 12.9984 2.67116 13.7453C2.56044 13.9352 2.50174 14.1509 2.50098 14.3707C2.50023 14.5905 2.55745 14.8066 2.66687 14.9973C2.77629 15.1879 2.93404 15.3463 3.12422 15.4565C3.31439 15.5667 3.53027 15.6248 3.75007 15.625H6.93835C7.08255 16.3306 7.46603 16.9647 8.02392 17.4201C8.58182 17.8756 9.2799 18.1243 10.0001 18.1243C10.7202 18.1243 11.4183 17.8756 11.9762 17.4201C12.5341 16.9647 12.9176 16.3306 13.0618 15.625H16.2501C16.4698 15.6247 16.6856 15.5665 16.8757 15.4562C17.0657 15.346 17.2234 15.1875 17.3327 14.9969C17.442 14.8063 17.4992 14.5903 17.4984 14.3705C17.4976 14.1508 17.4389 13.9351 17.3282 13.7453ZM10.0001 16.875C9.61243 16.8749 9.23435 16.7546 8.91788 16.5308C8.60141 16.3069 8.3621 15.9905 8.23288 15.625H11.7673C11.638 15.9905 11.3987 16.3069 11.0823 16.5308C10.7658 16.7546 10.3877 16.8749 10.0001 16.875ZM3.75007 14.375C4.35163 13.3406 5.00007 10.9438 5.00007 8.125C5.00007 6.79892 5.52686 5.52715 6.46454 4.58947C7.40222 3.65178 8.67399 3.125 10.0001 3.125C11.3262 3.125 12.5979 3.65178 13.5356 4.58947C14.4733 5.52715 15.0001 6.79892 15.0001 8.125C15.0001 10.9414 15.6469 13.3383 16.2501 14.375H3.75007Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </nav>

          <div className="c-metrics">
            <div className="metrics-set">
              <div className="mini-metric-card">
                <p className="lato">Round Trip Time (RTT)</p>
                <div className="mini-metric-calculation">
                  <p className="mini-metric-value lato" id="rtt">
                    0ms
                  </p>
                  <p>
                    <small
                      className="mini-metric-value-percent lato"
                      id="perRtt"
                    ></small>
                  </p>
                </div>
              </div>

              <div className="mini-metric-card">
                <p className="lato">Jitter (JIT)</p>
                <div className="mini-metric-calculation">
                  <p className="mini-metric-value lato" id="jit">
                    0ms
                  </p>
                  <p>
                    <small
                      className="mini-metric-value-percent lato"
                      id="perJit"
                    ></small>
                  </p>
                </div>
              </div>
            </div>

            <div className="metrics-set">
              <div className="mini-metric-card">
                <p className="lato">De-Jitter Buffer (DJB)</p>
                <div className="mini-metric-calculation">
                  <p className="mini-metric-value lato" id="djb">
                    0ms
                  </p>
                  <p>
                    <small
                      className="mini-metric-value-percent lato"
                      id="perDjb"
                    ></small>
                  </p>
                </div>
              </div>

              <div className="mini-metric-card">
                <p className="lato">Signal to Noise Ratio (SNR)</p>
                <div className="mini-metric-calculation">
                  <p className="mini-metric-value lato" id="snr">
                    0dB
                  </p>
                  <p>
                    <small
                      className="mini-metric-value-percent lato"
                      id="perSnr"
                    ></small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mos-wrapper">
            <div className="mos-gauge">
              <MosGauge/>
            </div>

            <div className="mos-compare">
              <div className="call-info">
                <p className="call-codec lato" id="codec-name">
                  No ongoing call
                </p>
                <p className="call-ips lato" id="source-and-destination">
                  S: N/A <i className="fa-call fa-solid fa-phone-volume"></i>{" "}
                  <i className="fa-arrow fa-solid fa-arrow-right-arrow-left"></i>{" "}
                  D: N/A
                </p>
              </div>
              {/* Mos Chart */}
              <MosChart/>
            </div>
          </div>
          <div className="other-predictions">
            <div className="jit-djb-wrapper">
              <div className="jit-djb domine" id="predJit">
                0
              </div>
              <p className="section-info open-sans">Predicted Call Jitter</p>
            </div>
            <div className="jit-djb-wrapper">
              <div className="jit-djb domine" id="predDjb">
                0
              </div>
              <p className="section-info open-sans">
              Predicted Jitter buffer
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer isHome={false}/>
    </div>
  );
};

export default Codec;
