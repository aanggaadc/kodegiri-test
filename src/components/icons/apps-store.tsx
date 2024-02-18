export default function AppsStoreIcon({
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
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: width ?? "20px",
        height: height ?? "20px",
      }}
    >
      <path
        d="M14.2086 16.9C13.392 17.6917 12.5003 17.5667 11.642 17.1917C10.7336 16.8083 9.9003 16.7917 8.94197 17.1917C7.74197 17.7083 7.10863 17.5583 6.39197 16.9C2.3253 12.7083 2.9253 6.325 7.54197 6.09167C8.66697 6.15 9.4503 6.70833 10.1086 6.75833C11.092 6.55833 12.0336 5.98333 13.0836 6.05833C14.342 6.15833 15.292 6.65833 15.917 7.55833C13.317 9.11667 13.9336 12.5417 16.317 13.5C15.842 14.75 15.2253 15.9917 14.2003 16.9083L14.2086 16.9ZM10.0253 6.04167C9.9003 4.18333 11.4086 2.65 13.142 2.5C13.3836 4.65 11.192 6.25 10.0253 6.04167Z"
        fill={fill ?? "white"}
      />
    </svg>
  );
}
