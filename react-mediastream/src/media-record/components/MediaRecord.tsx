import { useRef, useEffect, useState } from "react";
import {
  loadMediaStream,
  stopMediaStream,
  clearMediaStream,
  subscribeVideoState,
  startMediaRecord,
} from "../utils";
import { MediaRecordDomException } from "./MediaRecordDomException";
import { MediaRecordPoster } from "./MediaRecordPoster";
import type { VideoState } from "../types";

const LIMIT_RECORD_TIME = 5000;

export const MediaRecord = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const recordVideoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordBlob, setRecordBlob] = useState<Blob | null>(null);
  const [videoState, setVideoState] = useState<VideoState>("HAVE_NOTHING");
  const timerId = useRef<number | null>(null);

  useEffect(() => {
    return subscribeVideoState(videoRef, setVideoState);
  }, []);

  useEffect(() => {
    loadMediaStream(videoRef, (error) => setError(error as string));
    return () => {
      clearMediaStream(videoRef);
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  /** 장치 연결 함수 */
  const handlePlayMediaStream = async () => {
    clearMediaStream(videoRef);
    await loadMediaStream(videoRef, (error) => setError(error as string));
    if (videoRef.current) {
      videoRef.current.play();
      setRecording(true);
    }
  };

  /** 장치 연결 해제 함수 */
  const handleStopMediaStream = () => {
    if (videoRef.current) {
      stopMediaStream(videoRef.current.srcObject as MediaStream);
      setRecording(false);
    }
  };

  /** 녹화 시작 함수 */
  const handleStartRecord = () => {
    startMediaRecord(videoRef, setRecordBlob, () => {
      timerId.current = setTimeout(() => {
        handleStopMediaStream();
      }, LIMIT_RECORD_TIME);
    });
  };

  /** 녹화 재생 함수 */
  const handlePlayRecord = () => {
    if (recordBlob) {
      const url = URL.createObjectURL(recordBlob);
      if (recordVideoRef.current) {
        recordVideoRef.current.src = url;
        recordVideoRef.current.play();
      }
    }
  };

  /** 녹화 초기화 함수 */
  const handleReset = () => {
    clearMediaStream(videoRef);
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    if (recordVideoRef.current) {
      recordVideoRef.current.src = "";
      recordVideoRef.current.pause();
    }
    setRecordBlob(null);
    setRecording(false);
    loadMediaStream(videoRef, (error) => setError(error as string));
  };

  return (
    <section>
      <div className="flex gap-2">
        <button
          className="btn btn-secondary"
          disabled={recording}
          onClick={handlePlayMediaStream}
        >
          On
        </button>
        <button
          className="btn btn-primary"
          disabled={!recording}
          onClick={handleStopMediaStream}
        >
          Stop
        </button>
        <button
          disabled={!recording}
          className="btn btn-success"
          onClick={handleStartRecord}
        >
          Start Record
        </button>
        <button
          disabled={!recordBlob}
          className="btn btn-info"
          onClick={handlePlayRecord}
        >
          Play Record
        </button>
        <button className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
      <p className="text-center text-2xl font-bold text-slate-200">
        비디오 상태: {videoState}
      </p>
      <div className="flex flex-col gap-4">
        <section className="relative mt-12 flex justify-center items-center w-[640px] h-[480px] mx-auto">
          <video
            ref={videoRef}
            width={640}
            height={480}
            id="vbn-interview"
            autoPlay={false}
          />

          <MediaRecordPoster videoState={videoState} recording={recording} />
        </section>
        <section className="relative mt-12 flex justify-center items-center w-[640px] h-[480px] mx-auto">
          <video
            ref={recordVideoRef}
            width={640}
            height={480}
            id="vbn-interview"
            autoPlay={false}
          />
        </section>
      </div>
      {error && <MediaRecordDomException error={error} />}
    </section>
  );
};
