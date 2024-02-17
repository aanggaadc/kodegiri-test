export default function ArrowLeft({
  stroke,
  fill,
}: {
  stroke?: string;
  fill?: string;
}) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66699 10H16.3337M16.3337 10L10.5003 4.16667M16.3337 10L10.5003 15.8333"
        stroke={stroke ?? "#101828"}
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
