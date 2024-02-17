export default function ArrowDown({ stroke }: { stroke?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.9987 3.33325V12.6666M7.9987 12.6666L12.6654 7.99992M7.9987 12.6666L3.33203 7.99992"
        stroke={stroke ?? "#667085"}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
