"use client";

import { PropsWithChildren } from "react";
import classNames from "classnames";

interface CustomButtonProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  width?: "full" | "auto";
}

const CustomButton = ({
  onClick,
  className,
  children,
  disabled,
  type,
  width,
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick && onClick}
      className={classNames(
        "rollable-link relative inline-block overflow-hidden text-black no-underline uppercase",
        {
          "w-full": width === "full",
        }
      )}
      disabled={disabled}
      type={type}
    >
      <span
        data-title={children}
        className={classNames(
          "rollable-text block relative transition-transform duration-700 ease-in-out bg-transparent border-2 border-black py-3 px-6",
          className,
          {
            "w-full": width === "full",
          }
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default CustomButton;

// "use client";

// import { PropsWithChildren } from "react";
// import classNames from "classnames";

// interface CustomButtonProps extends PropsWithChildren {
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
//   type?: "button" | "submit" | "reset";
// }

// const CustomButton = ({
//   onClick,
//   className,
//   children,
//   disabled,
//   type,
// }: CustomButtonProps) => {
//   return (
//     <button
//       onClick={onClick && onClick}
//       className={
//         "rollable-link relative inline-block overflow-hidden text-white no-underline uppercase"
//       }
//       disabled={disabled}
//       type={type}
//     >
//       <span
//         data-title={children}
//         className={classNames(
//           "rollable-text block relative transition-transform duration-700 ease-in-out bg-transparent border-2 border-white py-3 px-6",
//           className
//         )}
//       >
//         {children}
//       </span>
//     </button>
//   );
// };

// export default CustomButton;
