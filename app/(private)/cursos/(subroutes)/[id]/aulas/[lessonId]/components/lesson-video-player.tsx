"use client";

import Column from "@/components/core/column";
import { PlayCircle } from "lucide-react";
import Vimeo from "@u-wave/react-vimeo";

type LessonVideoPlayerProps = {
  vimeoVideoId?: string;
};

const DEMO_VIDEO_ID = "76979871";

const LessonVideoPlayer = ({ vimeoVideoId }: LessonVideoPlayerProps) => {
  const videoId = vimeoVideoId ?? DEMO_VIDEO_ID;

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-video">
      {videoId ? (
        <Vimeo video={videoId} responsive className="absolute inset-0" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Column className="items-center gap-2 text-zinc-400">
            <PlayCircle className="size-16" />
            <span className="text-sm">Video em breve</span>
          </Column>
        </div>
      )}
    </div>
  );
};

export default LessonVideoPlayer;
