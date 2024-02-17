export default function EyeIcon({
  stroke,
  fill,
  width,
  height,
}: {
  stroke?: string;
  fill?: string;
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: width ?? "20px", height: height ?? "20pd" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6.87498C8.27414 6.87498 6.87503 8.27409 6.87503 9.99998C6.87503 11.7259 8.27414 13.125 10 13.125C11.7259 13.125 13.125 11.7259 13.125 9.99998C13.125 8.27409 11.7259 6.87498 10 6.87498ZM8.12503 9.99998C8.12503 8.96445 8.96449 8.12498 10 8.12498C11.0356 8.12498 11.875 8.96445 11.875 9.99998C11.875 11.0355 11.0356 11.875 10 11.875C8.96449 11.875 8.12503 11.0355 8.12503 9.99998Z"
        fill={fill ?? "#9A9A9A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.70831C8.2159 2.70831 6.60273 3.59081 5.29313 4.66308C3.97638 5.7412 2.8997 7.06552 2.1762 8.07333L2.11653 8.1563C1.68098 8.76151 1.32245 9.25969 1.32245 9.99998C1.32245 10.7403 1.68098 11.2385 2.11653 11.8437L2.1762 11.9266C2.8997 12.9344 3.97638 14.2588 5.29313 15.3369C6.60273 16.4092 8.2159 17.2916 10 17.2916C11.7842 17.2916 13.3973 16.4092 14.7069 15.3369C16.0237 14.2588 17.1003 12.9344 17.8239 11.9266L17.8835 11.8437C18.3191 11.2385 18.6776 10.7403 18.6776 9.99998C18.6776 9.25969 18.3191 8.76151 17.8835 8.15631L17.8238 8.07332C17.1003 7.06552 16.0237 5.7412 14.7069 4.66308C13.3973 3.59081 11.7842 2.70831 10 2.70831ZM3.19163 8.8023C3.88269 7.83969 4.88626 6.61176 6.08502 5.63024C7.29094 4.64286 8.62855 3.95831 10 3.95831C11.3715 3.95831 12.7091 4.64286 13.915 5.63024C15.1138 6.61176 16.1174 7.83969 16.8084 8.8023C17.3284 9.52659 17.4276 9.70121 17.4276 9.99998C17.4276 10.2987 17.3284 10.4734 16.8084 11.1977C16.1174 12.1603 15.1138 13.3882 13.915 14.3697C12.7091 15.3571 11.3715 16.0416 10 16.0416C8.62855 16.0416 7.29094 15.3571 6.08502 14.3697C4.88626 13.3882 3.88269 12.1603 3.19163 11.1977C2.67166 10.4734 2.57245 10.2987 2.57245 9.99998C2.57245 9.70121 2.67166 9.52659 3.19163 8.8023Z"
        fill={fill ?? "#9A9A9A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6.87498C8.27414 6.87498 6.87503 8.27409 6.87503 9.99998C6.87503 11.7259 8.27414 13.125 10 13.125C11.7259 13.125 13.125 11.7259 13.125 9.99998C13.125 8.27409 11.7259 6.87498 10 6.87498ZM8.12503 9.99998C8.12503 8.96445 8.96449 8.12498 10 8.12498C11.0356 8.12498 11.875 8.96445 11.875 9.99998C11.875 11.0355 11.0356 11.875 10 11.875C8.96449 11.875 8.12503 11.0355 8.12503 9.99998Z"
        stroke={stroke ?? "#9A9A9A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.70831C8.2159 2.70831 6.60273 3.59081 5.29313 4.66308C3.97638 5.7412 2.8997 7.06552 2.1762 8.07333L2.11653 8.1563C1.68098 8.76151 1.32245 9.25969 1.32245 9.99998C1.32245 10.7403 1.68098 11.2385 2.11653 11.8437L2.1762 11.9266C2.8997 12.9344 3.97638 14.2588 5.29313 15.3369C6.60273 16.4092 8.2159 17.2916 10 17.2916C11.7842 17.2916 13.3973 16.4092 14.7069 15.3369C16.0237 14.2588 17.1003 12.9344 17.8239 11.9266L17.8835 11.8437C18.3191 11.2385 18.6776 10.7403 18.6776 9.99998C18.6776 9.25969 18.3191 8.76151 17.8835 8.15631L17.8238 8.07332C17.1003 7.06552 16.0237 5.7412 14.7069 4.66308C13.3973 3.59081 11.7842 2.70831 10 2.70831ZM3.19163 8.8023C3.88269 7.83969 4.88626 6.61176 6.08502 5.63024C7.29094 4.64286 8.62855 3.95831 10 3.95831C11.3715 3.95831 12.7091 4.64286 13.915 5.63024C15.1138 6.61176 16.1174 7.83969 16.8084 8.8023C17.3284 9.52659 17.4276 9.70121 17.4276 9.99998C17.4276 10.2987 17.3284 10.4734 16.8084 11.1977C16.1174 12.1603 15.1138 13.3882 13.915 14.3697C12.7091 15.3571 11.3715 16.0416 10 16.0416C8.62855 16.0416 7.29094 15.3571 6.08502 14.3697C4.88626 13.3882 3.88269 12.1603 3.19163 11.1977C2.67166 10.4734 2.57245 10.2987 2.57245 9.99998C2.57245 9.70121 2.67166 9.52659 3.19163 8.8023Z"
        stroke={stroke ?? "#9A9A9A"}
      />
    </svg>
  );
}
