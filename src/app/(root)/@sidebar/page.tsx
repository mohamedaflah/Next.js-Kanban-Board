import { Logs } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SideBar() {
  return (
    <aside className="h-full min-w-56 border-r  flex flex-col">
      <div className="border-b p-5">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/kanban-logo.svg"}
              width={30}
              height={30}
              alt=""
            />
            <span className="font-medium font-sm">Kanban</span>
          </div>
          <div className="cursor-pointer h-full">
            <Image src={"/icons/expand.svg"} alt="" width={26} height={26} />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Link href={"/"} className="flex px-5 items-center h-12 gap-3 relative hover:bg-black/5 transition-all duration-300">
          <div>
            <Logs className="w-5" />
          </div>
          <span className="text-sm font-medium">Task 1</span>
          <div className="absolute top-0 right-0 h-full w-2 bg-black/10 shadow-md rounded-tl-md rounded-bl-md"></div>
        </Link>
      </div>
    </aside>
  );
}
