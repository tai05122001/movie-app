import React from "react";
import '~video-react/dist/video-react.css'; // import css
import { Player } from "video-react";
const Content = () => {
  return (
    <div className="flex justify-between">
      <div className="size-full grip grid-cols-7">
        <div className="col-span-5">
          <div className="w-80">
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};
export default Content;
