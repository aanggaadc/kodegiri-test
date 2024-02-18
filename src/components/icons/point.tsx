export default function PointIcon({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: width ?? "18px",
        height: height ?? "18px",
      }}
    >
      <g clipPath="url(#clip0_2015_598)">
        <rect
          y="0.905396"
          width="19.9166"
          height="19.9161"
          rx="9.95805"
          fill="white"
        />
        <path
          d="M9.95805 20.8215C4.45822 20.8215 0 16.3633 0 10.8634V3.89281C0 3.1005 0.314745 2.34064 0.874993 1.78039C1.43524 1.22014 2.1951 0.905396 2.98741 0.905396H9.46014V5.27399C9.46014 6.27079 9.3994 7.30344 8.8766 8.15187C8.50231 8.75989 8.00163 9.2803 7.40852 9.67779C6.81541 10.0753 6.14374 10.3406 5.43909 10.4557L5.24839 10.4865C5.16977 10.5134 5.10153 10.5642 5.0532 10.6318C5.00488 10.6994 4.9789 10.7804 4.9789 10.8634C4.9789 10.9465 5.00488 11.0275 5.0532 11.0951C5.10153 11.1627 5.16977 11.2135 5.24839 11.2404L5.43909 11.2712C6.46866 11.4394 7.41941 11.9267 8.15708 12.6644C8.89475 13.4021 9.38208 14.3528 9.55027 15.3824L9.58114 15.5731C9.60801 15.6517 9.65879 15.72 9.72638 15.7683C9.79396 15.8166 9.87496 15.8426 9.95805 15.8426C10.0411 15.8426 10.1221 15.8166 10.1897 15.7683C10.2573 15.72 10.3081 15.6517 10.335 15.5731L10.3658 15.3824C10.4809 14.6777 10.7462 14.0061 11.1437 13.4129C11.5412 12.8198 12.0616 12.3192 12.6696 11.9449C13.518 11.4221 14.5507 11.3613 15.5475 11.3613H19.9041C19.6437 16.6296 15.2906 20.8215 9.95805 20.8215Z"
          fill="#FECE25"
        />
        <path
          d="M19.9166 10.3655H15.548C14.5512 10.3655 13.5186 10.3048 12.6701 9.782C12.0069 9.37334 11.4487 8.81506 11.04 8.15187C10.5172 7.30344 10.4565 6.2708 10.4565 5.27399V0.905401H16.9292C17.7215 0.905401 18.4814 1.22015 19.0416 1.78039C19.6019 2.34064 19.9166 3.1005 19.9166 3.89281V10.3655Z"
          fill="#FECE25"
        />
      </g>
      <rect
        x="0.66387"
        y="1.56927"
        width="18.5889"
        height="18.5884"
        rx="9.29418"
        stroke="#FBE8A6"
        strokeWidth="1.32774"
      />
      <defs>
        <clipPath id="clip0_2015_598">
          <rect
            y="0.905396"
            width="19.9166"
            height="19.9161"
            rx="9.95805"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
