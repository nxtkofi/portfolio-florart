import { type ReactElement } from "react";

export function PhotoGallery(): ReactElement {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="grid gap-4">
          <div>
            <img
              className="rounded-lg object-cover aspect-[6/4] w-full object-[0%_bottom]"
              src="./1.O_mnie/MountainsCropped.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-lg aspect-[80/37] w-full object-cover object-[50%_45%]"
              src="./1.O_mnie/IMG_20201109_135516.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="rounded-lg aspect-[5/4] w-full object-cover object-[50%_20%]"
              src="./1.O_mnie/lastone.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-lg aspect-[6/2] w-full object-cover"
              src="./1.O_mnie/IMG_20230704_100449.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
