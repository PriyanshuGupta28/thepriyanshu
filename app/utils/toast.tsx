// utils/toast.tsx
import toast from "react-hot-toast";
import { IconCircleDashedCheck } from "@tabler/icons-react";

export function showSuccessToast(message: string) {
  toast.success(
    <div className="flex items-center space-x-2">
      <IconCircleDashedCheck className="w-5 h-5 text-green-500 animate-bounce" />
      <span>{message}</span>
    </div>,
    {
      style: {
        background: "#e6fffa",
        border: "1px solid #81e6d9",
        color: "#234e52",
      },
      icon: null,
    }
  );
}
