export default function CalendarIcon({
  width,
  height,
  fill,
}: {
  width?: string;
  height?: string;
  fill?: string;
}) {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: width ?? "29px",
        height: height ?? "28px",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.291 1.45825C11.7743 1.45825 12.166 1.85 12.166 2.33325V3.80396C12.9468 3.79159 13.8143 3.79159 14.7781 3.79159H14.8039C15.7677 3.79159 16.6352 3.79159 17.416 3.80396V2.33325C17.416 1.85 17.8078 1.45825 18.291 1.45825C18.7743 1.45825 19.166 1.85 19.166 2.33325V3.86576C20.9299 3.97635 22.285 4.26216 23.4007 5.07276C23.9702 5.48653 24.4711 5.98736 24.8848 6.55686C25.8203 7.84446 26.0569 9.45094 26.1318 11.6366C26.166 12.6367 26.166 13.8003 26.166 15.1537V15.1794C26.166 16.5329 26.166 17.6965 26.1318 18.6965C26.0569 20.8822 25.8203 22.4887 24.8848 23.7763C24.4711 24.3458 23.9702 24.8466 23.4007 25.2604C22.1131 26.1959 20.5067 26.4324 18.321 26.5073C17.3208 26.5416 16.1571 26.5416 14.8036 26.5416H14.7382C12.5956 26.5416 10.9161 26.5416 9.58357 26.3972C8.22378 26.2499 7.122 25.9439 6.18129 25.2604C5.61179 24.8466 5.11096 24.3458 4.69719 23.7763C4.01373 22.8356 3.70769 21.7338 3.56037 20.374C3.416 19.0415 3.41601 17.362 3.41602 15.2194L3.41602 15.1537C3.41602 13.8003 3.41602 12.6367 3.45028 11.6366C3.52516 9.45094 3.76169 7.84446 4.69719 6.55686C5.11096 5.98736 5.61179 5.48653 6.18129 5.07276C7.29699 4.26216 8.65211 3.97635 10.416 3.86576V2.33325C10.416 1.85 10.8078 1.45825 11.291 1.45825ZM10.416 5.62004C8.82695 5.72933 7.90975 5.98008 7.20991 6.48854C6.78898 6.79437 6.4188 7.16455 6.11297 7.58548C5.60451 8.28532 5.35376 9.20252 5.24447 10.7916H24.3376C24.2283 9.20252 23.9775 8.28532 23.4691 7.58548C23.1632 7.16455 22.7931 6.79437 22.3721 6.48854C21.6723 5.98008 20.7551 5.72933 19.166 5.62004V5.83325C19.166 6.3165 18.7743 6.70825 18.291 6.70825C17.8078 6.70825 17.416 6.3165 17.416 5.83325V5.55417C16.6465 5.54164 15.7798 5.54159 14.791 5.54159C13.8022 5.54159 12.9355 5.54164 12.166 5.55417V5.83325C12.166 6.3165 11.7743 6.70825 11.291 6.70825C10.8078 6.70825 10.416 6.3165 10.416 5.83325V5.62004ZM24.4034 12.5416H5.1786C5.16607 13.3111 5.16602 14.1778 5.16602 15.1666C5.16602 17.3734 5.16722 18.9583 5.30018 20.1855C5.43138 21.3964 5.68237 22.155 6.11297 22.7477C6.4188 23.1686 6.78898 23.5388 7.20991 23.8446C7.80259 24.2752 8.56117 24.5262 9.77207 24.6574C10.9993 24.7904 12.5842 24.7916 14.791 24.7916C15.7808 24.7916 16.6481 24.7915 17.4181 24.779C17.4232 24.2252 17.4405 23.8175 17.4986 23.4505C17.9532 20.5801 20.2045 18.3288 23.0749 17.8742C23.442 17.816 23.8496 17.7988 24.4034 17.7937C24.416 17.0237 24.416 16.1563 24.416 15.1666C24.416 14.1778 24.416 13.3111 24.4034 12.5416ZM24.3373 19.5448C23.8649 19.5503 23.5879 19.5647 23.3487 19.6026C21.2271 19.9387 19.5631 21.6026 19.2271 23.7243C19.1892 23.9635 19.1747 24.2405 19.1693 24.7129C20.7563 24.6035 21.6728 24.3527 22.3721 23.8446C22.7931 23.5388 23.1632 23.1686 23.4691 22.7477C23.9772 22.0483 24.2279 21.1319 24.3373 19.5448Z"
        fill={fill ?? "#272A2D"}
      />
      <path
        d="M10.416 16.3333C10.416 15.85 10.8078 15.4583 11.291 15.4583H18.291C18.7743 15.4583 19.166 15.85 19.166 16.3333C19.166 16.8165 18.7743 17.2083 18.291 17.2083H11.291C10.8078 17.2083 10.416 16.8165 10.416 16.3333Z"
        fill="#0074E0"
      />
    </svg>
  );
}
