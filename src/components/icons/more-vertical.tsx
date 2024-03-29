export default function MoreVertical({ stroke }: { stroke?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0013 10.8333C10.4615 10.8333 10.8346 10.4602 10.8346 9.99992C10.8346 9.53968 10.4615 9.16659 10.0013 9.16659C9.54106 9.16659 9.16797 9.53968 9.16797 9.99992C9.16797 10.4602 9.54106 10.8333 10.0013 10.8333Z"
        stroke={stroke ?? "#98A2B3"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0013 4.99992C10.4615 4.99992 10.8346 4.62682 10.8346 4.16659C10.8346 3.70635 10.4615 3.33325 10.0013 3.33325C9.54106 3.33325 9.16797 3.70635 9.16797 4.16659C9.16797 4.62682 9.54106 4.99992 10.0013 4.99992Z"
        stroke={stroke ?? "#98A2B3"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0013 16.6666C10.4615 16.6666 10.8346 16.2935 10.8346 15.8333C10.8346 15.373 10.4615 14.9999 10.0013 14.9999C9.54106 14.9999 9.16797 15.373 9.16797 15.8333C9.16797 16.2935 9.54106 16.6666 10.0013 16.6666Z"
        stroke={stroke ?? "#98A2B3"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
