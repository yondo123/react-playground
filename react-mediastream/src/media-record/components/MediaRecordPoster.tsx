import type { VideoState } from "../types";

interface MediaRecordPosterProps {
  videoState: VideoState;
  recording: boolean;
}

export const MediaRecordPoster = ({
  videoState,
  recording,
}: MediaRecordPosterProps) => {
  if (videoState !== "HAVE_ENOUGH_DATA") {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[480px] bg-base-200 animate-pulse flex items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 bg-base-300 rounded-full animate-pulse"></div>
          <div className="h-4 w-48 bg-base-300 rounded animate-pulse"></div>
          <div className="h-3 w-32 bg-base-300 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!recording) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[640px] h-[480px] flex flex-col items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-bold text-primary">녹화 대기중...</h3>
          <p className="text-base-content text-sm animate-bounce">
            🎥 카메라와 마이크 준비가 완료되었습니다.
          </p>
          <div className="badge badge-primary badge-outline mt-2">
            준비가 되었다면 Record 버튼을 눌러주세요 ✨
          </div>
        </div>
      </div>
    );
  }
  return null;
};
