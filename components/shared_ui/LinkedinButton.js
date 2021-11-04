import React from "react";

export default function LinkedinButton({
  className,
  link = "https://twitter.com/gimbalabs",
}) {
  return (
    <a target="blank" href={link}>
      <svg
        className={`fill-current ${className}`}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.85769 3.43829C5.85769 4.81929 4.74769 5.93829 3.37769 5.93829C2.00769 5.93829 0.897686 4.81929 0.897686 3.43829C0.897686 2.05829 2.00769 0.938293 3.37769 0.938293C4.74769 0.938293 5.85769 2.05829 5.85769 3.43829ZM5.87769 7.93829H0.877686V23.9383H5.87769V7.93829ZM13.8597 7.93829H8.89169V23.9383H13.8607V15.5393C13.8607 10.8693 19.8897 10.4873 19.8897 15.5393V23.9383H24.8777V13.8073C24.8777 5.92729 15.9557 6.21429 13.8597 10.0933V7.93829Z" />
      </svg>
    </a>
  );
}
