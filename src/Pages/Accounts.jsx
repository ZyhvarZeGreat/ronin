import React from "react";

const Accounts = () => {
  return (
    <div className="mx-auto w-full bg-blue-500 max-w-[1180px]">
      <header className="sticky top-0 z-sticky flex h-[64px] items-center justify-between bg-tc-bg md:h-[80px]">
        <div className="flex items-center gap-24 2xl:hidden">
          <svg
            className="cursor-pointer text-tc-icon"
            viewBox="0 0 20 20"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M17 3H3c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1Zm0 6H3c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1ZM3 15h14c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1Z"
              clipRule="evenodd"
            ></path>
          </svg>
          <a
            className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined"
            href="/"
          >
            <svg
              width="99"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00012207 2.46163V22.2039C0.000354831 22.5726 0.0842659 22.9366 0.245656 23.2689C0.407047 23.6013 0.641793 23.8935 0.932554 24.1239L10.3346 31.595C10.6653 31.8572 11.0764 32 11.5001 32C11.9238 32 12.3349 31.8572 12.6657 31.595L22.0677 24.1239C22.3585 23.8935 22.5932 23.6013 22.7546 23.2689C22.916 22.9366 22.9999 22.5726 23.0001 22.2039V2.46163C23.0001 1.80876 22.7382 1.18264 22.2718 0.720994C21.8055 0.259349 21.1731 0 20.5136 0H2.48661C1.82715 0 1.1947 0.259349 0.728397 0.720994C0.26209 1.18264 0.00012207 1.80876 0.00012207 2.46163V2.46163Z"
                fill="#004DE5"
              ></path>
              <path
                d="M18.2045 11.4066V7.1038C18.2045 6.53321 17.9784 5.98599 17.5759 5.58253C17.1734 5.17906 16.6276 4.95239 16.0584 4.95239H6.93783C6.36867 4.95239 5.82282 5.17906 5.42037 5.58253C5.01791 5.98599 4.79181 6.53321 4.79181 7.1038V19.5887C4.79201 19.911 4.86443 20.2291 5.00372 20.5196C5.14301 20.81 5.34562 21.0654 5.59657 21.2668L8.91754 23.9399C8.95696 23.972 9.00465 23.9922 9.05506 23.9982C9.10547 24.0041 9.15654 23.9956 9.20233 23.9737C9.24812 23.9517 9.28676 23.9172 9.31374 23.8741C9.34073 23.831 9.35496 23.7811 9.35479 23.7302V14.9027C9.35479 14.8313 9.38305 14.7629 9.43336 14.7125C9.48367 14.6621 9.5519 14.6337 9.62304 14.6337H12.0373C12.4642 14.6337 12.8736 14.8037 13.1754 15.1063C13.4773 15.4089 13.6468 15.8194 13.6468 16.2473V23.7302C13.6469 23.7808 13.6612 23.8304 13.6881 23.8733C13.715 23.9162 13.7535 23.9505 13.799 23.9724C13.8446 23.9944 13.8954 24.0029 13.9456 23.9972C13.9957 23.9914 14.0433 23.9716 14.0827 23.9399L17.4037 21.2668C17.6547 21.0654 17.8573 20.81 17.9966 20.5196C18.1359 20.2291 18.2083 19.911 18.2085 19.5887V15.7094C18.2085 15.1389 17.9824 14.5916 17.5799 14.1882C17.1775 13.7847 16.6316 13.558 16.0625 13.558C16.6309 13.557 17.1757 13.3298 17.5773 12.9265C17.9789 12.5231 18.2045 11.9765 18.2045 11.4066ZM12.0346 12.4823H9.62036C9.54922 12.4823 9.48098 12.454 9.43068 12.4036C9.38037 12.3531 9.35211 12.2847 9.35211 12.2134V7.37273C9.35211 7.3014 9.38037 7.233 9.43068 7.18257C9.48098 7.13214 9.54922 7.1038 9.62036 7.1038H13.3759C13.447 7.1038 13.5153 7.13214 13.5656 7.18257C13.6159 7.233 13.6442 7.3014 13.6442 7.37273V10.8688C13.6442 11.2967 13.4746 11.7071 13.1727 12.0097C12.8709 12.3123 12.4615 12.4823 12.0346 12.4823Z"
                fill="url(#paint0_linear_ronin_logo)"
              ></path>
              <path
                d="M38.5473 22.8V18.3986H41.8099L44.7659 22.8H48.5759L45.1381 17.7214C46.1454 17.27 46.9227 16.6192 47.4701 15.769C48.0175 14.9188 48.2912 13.9069 48.2912 12.7331C48.2912 11.5594 48.0212 10.5437 47.4811 9.686C46.9409 8.82829 46.1709 8.16619 45.171 7.69971C44.1711 7.23324 42.9923 7 41.6347 7H35.0001V22.8H38.5473ZM41.6003 15.6H38.685V10H41.6003C42.6751 10 43.4923 10.241 44.0518 10.723C44.6113 11.2049 44.891 11.8973 44.891 12.8C44.891 13.6874 44.6113 14.376 44.0518 14.8656C43.4923 15.3552 42.6751 15.6 41.6003 15.6ZM56.6354 23C57.8812 23 58.9952 22.7309 59.9773 22.1926C60.9593 21.6543 61.7289 20.9076 62.2859 19.9523C62.8428 18.9971 63.1213 17.913 63.1213 16.7C63.1213 15.487 62.8428 14.4029 62.2859 13.4477C61.7289 12.4924 60.9593 11.7457 59.9773 11.2074C58.9952 10.6691 57.8812 10.4 56.6354 10.4C55.3895 10.4 54.2718 10.6691 53.2824 11.2074C52.2931 11.7457 51.5199 12.4924 50.9629 13.4477C50.4059 14.4029 50.1274 15.487 50.1274 16.7C50.1274 17.913 50.4059 18.9971 50.9629 19.9523C51.5199 20.9076 52.2931 21.6543 53.2824 22.1926C54.2718 22.7309 55.3895 23 56.6354 23ZM56.6353 20.2C55.7608 20.2 55.0394 19.8919 54.4709 19.2758C53.9025 18.6597 53.6183 17.8345 53.6183 16.8C53.6183 15.7655 53.9025 14.9403 54.4709 14.3242C55.0394 13.7081 55.7608 13.4 56.6353 13.4C57.5098 13.4 58.2276 13.7081 58.7887 14.3242C59.3499 14.9403 59.6304 15.7655 59.6304 16.8C59.6304 17.8345 59.3499 18.6597 58.7887 19.2758C58.2276 19.8919 57.5098 20.2 56.6353 20.2ZM68.6652 22.8V16.759C68.6652 15.6689 68.9202 14.8475 69.4304 14.2949C69.9405 13.7422 70.6255 13.4659 71.4854 13.4659C72.2579 13.4659 72.8482 13.7044 73.2563 14.1813C73.6643 14.6582 73.8684 15.3812 73.8684 16.3502V22.8H77.2789V15.8051C77.2789 14.0186 76.8307 12.6711 75.9344 11.7626C75.038 10.8542 73.8611 10.4 72.4036 10.4C71.602 10.4 70.866 10.54 70.1955 10.8201C69.5251 11.1002 68.964 11.4977 68.5121 12.0125V10.5817H65.2547V22.8H68.6652ZM82.1274 9C82.7579 9 83.271 8.8046 83.6669 8.41379C84.0628 8.02299 84.2607 7.52874 84.2607 6.93103C84.2607 6.37931 84.0628 5.91954 83.6669 5.55172C83.271 5.18391 82.7579 5 82.1274 5C81.4969 5 80.9838 5.19157 80.5879 5.57471C80.192 5.95785 79.9941 6.43295 79.9941 7C79.9941 7.56705 80.192 8.04215 80.5879 8.42529C80.9838 8.80843 81.4969 9 82.1274 9ZM83.8728 22.8V10.6H80.3819V22.8H83.8728ZM90.3864 22.8V16.759C90.3864 15.6689 90.6415 14.8475 91.1516 14.2949C91.6617 13.7422 92.3467 13.4659 93.2066 13.4659C93.9791 13.4659 94.5694 13.7044 94.9775 14.1813C95.3856 14.6582 95.5896 15.3812 95.5896 16.3502V22.8H99.0001V15.8051C99.0001 14.0186 98.5519 12.6711 97.6556 11.7626C96.7592 10.8542 95.5823 10.4 94.1248 10.4C93.3232 10.4 92.5872 10.54 91.9167 10.8201C91.2463 11.1002 90.6852 11.4977 90.2334 12.0125V10.5817H86.9759V22.8H90.3864Z"
                fill="currentColor"
                className="style_content__v85Qk"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-24 2xl:hidden">
          <div>
            <svg
              className="cursor-pointer text-tc-icon md:hidden"
              viewBox="0 0 20 20"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M13.742 12.328a6.524 6.524 0 1 0-1.414 1.414l3.965 3.965a1 1 0 0 0 1.414-1.414l-3.965-3.965ZM4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
              ></path>
            </svg>
            <div className="hidden w-[320px] md:block">
              <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                <div className="input-module_container__Gch8D input-module_default__Rk4yp max-w-full md:w-[320px]">
                  <div className="input-module_form__2zFJF">
                    <span className="input-module_prefix__uR1Sx">
                      <svg viewBox="0 0 20 20" width="20" height="20">
                        <path
                          fill="currentColor"
                          d="M13.742 12.328a6.524 6.524 0 1 0-1.414 1.414l3.965 3.965a1 1 0 0 0 1.414-1.414l-3.965-3.965ZM4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
                        ></path>
                      </svg>
                    </span>
                    <input
                      tabIndex="1"
                      placeholder="Address, Tx Hash, Block, etc."
                      id="1"
                      className="input-module_formControl__oYbNL input-module_hasPrefix__Zh5xG input-module_hasSuffix__hiMdC"
                      value=""
                    />
                    <span className="input-module_suffix__nC3z-">
                      <div className="inline-flex items-center gap-4">
                        <svg
                          className="hidden cursor-pointer md:hidden"
                          viewBox="0 0 20 20"
                          width="20"
                          height="20"
                        >
                          <path
                            fill="currentColor"
                            d="M10 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm2.386 7.326a.375.375 0 0 1 0 .53l-.53.53a.375.375 0 0 1-.53 0L10 11.062l-1.326 1.325a.375.375 0 0 1-.53 0l-.53-.53a.375.375 0 0 1 0-.53L8.94 10 7.614 8.674a.375.375 0 0 1 0-.53l.53-.53a.375.375 0 0 1 .53 0L10 8.94l1.326-1.326a.375.375 0 0 1 .53 0l.53.53a.375.375 0 0 1 0 .53L11.062 10l1.325 1.326Z"
                          ></path>
                        </svg>
                        <svg viewBox="0 0 20 20" width="20" height="20">
                          <g clipPath="url(#slash_svg__a)">
                            <path
                              fill="var(--dg-tc-sf-dim)"
                              d="M0 4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                            ></path>
                            <path
                              fill="var(--dg-tc-icon)"
                              d="M11.65 4.176h-.978L8 15.109h.979L11.65 4.176Z"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="slash_svg__a">
                              <path fill="#fff" d="M0 0h20v20H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="cursor-pointer text-tc-icon"
            viewBox="0 0 20 20"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M13 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.5 3A1.5 1.5 0 0 1 14 4.5H5.5V5H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.182A2.182 2.182 0 0 1 2 14.818V4.5c0 .16.026.276.074.36A.942.942 0 0 1 2 4.5C2 3.671 3.171 3 4 3h8.5ZM14 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="hidden 2xl:flex">
          <div className="w-[320px]">
            <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
              <div className="input-module_container__Gch8D input-module_default__Rk4yp max-w-full md:w-[320px]">
                <div className="input-module_form__2zFJF">
                  <span className="input-module_prefix__uR1Sx">
                    <svg viewBox="0 0 20 20" width="20" height="20">
                      <path
                        fill="currentColor"
                        d="M13.742 12.328a6.524 6.524 0 1 0-1.414 1.414l3.965 3.965a1 1 0 0 0 1.414-1.414l-3.965-3.965ZM4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    tabIndex="1"
                    placeholder="Address, Tx Hash, Block, etc."
                    id="2"
                    className="input-module_formControl__oYbNL input-module_hasPrefix__Zh5xG input-module_hasSuffix__hiMdC"
                    value=""
                  />
                  <span className="input-module_suffix__nC3z-">
                    <div className="inline-flex items-center gap-4">
                      <svg
                        className="hidden cursor-pointer md:hidden"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="currentColor"
                          d="M10 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm2.386 7.326a.375.375 0 0 1 0 .53l-.53.53a.375.375 0 0 1-.53 0L10 11.062l-1.326 1.325a.375.375 0 0 1-.53 0l-.53-.53a.375.375 0 0 1 0-.53L8.94 10 7.614 8.674a.375.375 0 0 1 0-.53l.53-.53a.375.375 0 0 1 .53 0L10 8.94l1.326-1.326a.375.375 0 0 1 .53 0l.53.53a.375.375 0 0 1 0 .53L11.062 10l1.325 1.326Z"
                        ></path>
                      </svg>
                      <svg viewBox="0 0 20 20" width="20" height="20">
                        <g clipPath="url(#slash_svg__a)">
                          <path
                            fill="var(--dg-tc-sf-dim)"
                            d="M0 4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          ></path>
                          <path
                            fill="var(--dg-tc-icon)"
                            d="M11.65 4.176h-.978L8 15.109h.979L11.65 4.176Z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="slash_svg__a">
                            <path fill="#fff" d="M0 0h20v20H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-8 2xl:flex">
          <div className="dropdown-module_container__iY02y">
            <div className="dropdown-module_triggerWrapper__nVet0">
              <div className="form-item-module_form__3-Rfq">
                <button
                  className="select-module_select-root__iUjOH select-module_wrapper__Hc5F3 select-module_default__LhAiz select-module_variant-filled__mqpkY select-module_has-prefix__uq3r1 select-module_has-suffix__cxAEt"
                  type="button"
                >
                  <span className="select-module_prefix__CcSAb">
                    <svg viewBox="0 0 20 20" width="20" height="20">
                      <rect
                        width="16"
                        height="16"
                        x="2"
                        y="2"
                        fill="var(--dg-tc-icon-success)"
                        fillOpacity="0.15"
                        rx="8"
                      ></rect>
                      <rect
                        width="8"
                        height="8"
                        x="6"
                        y="6"
                        fill="var(--dg-tc-icon-success)"
                        rx="4"
                      ></rect>
                    </svg>
                  </span>
                  <div className="select-module_input-wrapper__2e9Sr select-module_has-value__gkGdm">
                    <div className="select-module_input__QFtX8">
                      <div className="dropdown-module_wrapper-selected-option__TdgBl">
                        <div className="dropdown-module_selected-option__TFYEe">
                          Mainnet
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="select-module_suffix__JN2c1">
                    <svg
                      className="select-module_toggle-icon__2Oqot"
                      cursor="pointer"
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-default__caw9O button-module_button-root__0roWY">
            <span className="button-module_icon-wrapper__VV4f-">
              <svg
                className="button-module_icon__-nXel"
                viewBox="0 0 20 20"
                width="16"
                height="16"
              >
                <path
                  fill="currentColor"
                  d="M13 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.5 3A1.5 1.5 0 0 1 14 4.5H5.5V5H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.182A2.182 2.182 0 0 1 2 14.818V4.5c0 .16.026.276.074.36A.942.942 0 0 1 2 4.5C2 3.671 3.171 3 4 3h8.5ZM14 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            Connect Wallet
          </button>
        </div>
      </header>
      <main className="pb-24 pt-16 md:pb-48 md:pt-24">
        <div className="typo-module_t-display-xl__twhe3 typo-module_mobile-t-display-lg__6JAaA typo-module_neutral__9orA9">
          Accounts
        </div>
      </main>
    </div>
  );
};

export default Accounts;
