import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import profileImage from "./../public/dp.jpg";

const ImageComp = () => {
  return (
    <>
      <div className="group">
        <div
          className={cn(
            "size-[250px] p-5 bg-neutral-100 border border-neutral-100 rounded-lg",
            "bg-[radial-gradient(#dddddd_1px,transparent_1px)]",
            "[background-size:10px_10px]",
            "hover:bg-neutral-200 transition-all duration-200",
            "shadow-2xl relative perspective-distant transform-3d"
          )}
        >
          <Image
            src={profileImage}
            alt="profile-image"
            priority
            className={cn(
              "transition-transform duration-200 ease-in-out",
              "h-full w-full object-cover rounded-2xl",
              // 🔥 Start flat, tilt on hover
              "transform rotate-x-0 rotate-z-0 rotate-y-0",
              "group-hover:rotate-x-20 group-hover:rotate-z-20 group-hover:-rotate-y-20 group-hover:translate-z-20"
            )}
          />
        </div>
      </div>
    </>
  );
};

export default ImageComp;
