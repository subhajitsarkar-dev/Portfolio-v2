import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import profileImage from "./../public/dp.jpg";

const ImageComp = () => {
  return (
    <>
      <div className="size-[250px]">
        <Image
          src={profileImage}
          alt="profile-image"
          priority
          className={cn(
            "transition-transform duration-200 ease-in-out",
            "h-full w-full object-cover rounded-2xl"
          )}
        />
      </div>
    </>
  );
};

export default ImageComp;
