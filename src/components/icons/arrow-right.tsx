export default function ArrowRight({
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
        d="M16.3337 10H4.66699M4.66699 10L10.5003 15.8333M4.66699 10L10.5003 4.16667"
        stroke={stroke ?? "#101828"}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
