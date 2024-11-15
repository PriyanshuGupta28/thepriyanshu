// utils/toast.tsx
import toast from "react-hot-toast";
import { IconCircleDashedCheck, IconCircleX } from "@tabler/icons-react";

export function showSuccessToast(message: string) {
  toast.success(
    <div className="flex items-center space-x-2">
      <span>{message}</span>
    </div>,
    {
      style: {
        background: "#3f3f46",
        border: "1px solid #71717a",
        color: "#ffffff",
      },
      icon: (
        <IconCircleDashedCheck className="w-10 h-10 text-green-500 animate-bounce" />
      ),
      duration: 5000,
    }
  );
}

export function showErrorToast(message: string) {
  toast.error(
    <div className="flex items-center space-x-2 ">
      <span>{message}</span>
    </div>,
    {
      style: {
        background: "#3f3f46",
        border: "1px solid #71717a",
        color: "#ffffff",
      },
      icon: <IconCircleX className="w-5 h-5 text-red-500 animate-bounce" />,
      duration: 5000,
    }
  );
}
