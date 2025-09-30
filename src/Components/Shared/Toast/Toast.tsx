import { useEffect, useState } from "react";

type Props = {
  message: string;
  type: string;
  icon?: React.ReactNode
}
export default function Toast({ message, type, icon }: Props) {
  const [color, setColor] = useState<string>();
  useEffect(() => {
    switch (type) {
      case "success":
        setColor("bg-green-500")
        break;
      case "error":
        setColor("bg-red-500")
        break;
    }
  },[])
  return (
    <div className={`flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md ${color}`}>
      {icon}
      <span className="font-medium">{message}</span>
    </div>
  );
}
