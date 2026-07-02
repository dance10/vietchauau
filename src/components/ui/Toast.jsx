import { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const TYPE_STYLES = { success: "bg-primary text-white", error: "bg-error text-white" };
const TYPE_ICONS = { success: CheckCircle, error: XCircle };

export default function Toast({ message, type = "success", onDismiss }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => { setVisible(false); if (onDismiss) onDismiss(); }, 3000);
    return () => clearTimeout(timer);
  }, [onDismiss]);
  const Icon = TYPE_ICONS[type];
  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 toast-enter ${visible ? "block" : "hidden"}`}>
      <div className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg font-bold text-sm ${TYPE_STYLES[type]}`}>
        <Icon className="w-5 h-5" /><span>{message}</span>
      </div>
    </div>
  );
}
