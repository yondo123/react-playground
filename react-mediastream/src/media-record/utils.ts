import type { RefObject } from "react";
import type { VideoState } from "./types";

const videoStateMap: Record<number, VideoState> = {
  0: "HAVE_NOTHING",
  1: "HAVE_METADATA",
  2: "HAVE_CURRENT_DATA",
  3: "HAVE_FUTURE_DATA",
  4: "HAVE_ENOUGH_DATA",
};

/**
 * 미디어 스트림을 로드하고 비디오 요소에 연결합니다.
 * @param ref - 비디오 요소에 대한 React ref 객체
 * @param handleError - 에러 발생 시 호출될 콜백 함수
 * @returns 생성된 미디어 스트림 객체를 반환합니다.
 */
export const loadMediaStream = async (
  ref: RefObject<HTMLVideoElement | null>,
  handleError?: (error: unknown) => void
): Promise<MediaStream | undefined> => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    if (ref.current) {
      ref.current.srcObject = stream;
    }
    return stream;
  } catch (error: unknown) {
    if (error instanceof DOMException) {
      handleError?.(getMediaError(error));
    }
    return undefined;
  }
};

/**
 * 비디오 요소의 미디어 스트림을 제거합니다.
 * @param ref - 비디오 요소에 대한 React ref 객체
 */
export const clearMediaStream = (
  ref: RefObject<HTMLVideoElement | null>
): void => {
  if (ref.current && ref.current.srcObject) {
    const stream = ref.current.srcObject as MediaStream;
    stream.getTracks().forEach((track) => track.stop());
    ref.current.srcObject = null;
  }
};

/**
 * 미디어 스트림의 모든 트랙을 중지합니다.
 * @param stream - 중지할 미디어 스트림 객체
 */
export const stopMediaStream = (stream: MediaStream): void => {
  if (!stream) {
    return;
  }
  stream.getTracks().forEach((track) => track.stop());
};

export const startMediaRecord = (
  ref: RefObject<HTMLVideoElement | null>,
  setRecordBlob: (blob: Blob) => void,
  callback: () => void
) => {
  try {
    if (ref.current && ref.current.srcObject) {
      const mediaRecorder = new MediaRecorder(
        ref.current.srcObject as MediaStream
      );
      const chunks: Blob[] = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setRecordBlob(blob);
      };
      callback();
      mediaRecorder.start();
    }
  } catch (error) {
    console.error("[startMediaRecord] error", error);
  }
};

/**
 * 비디오 상태를 실시간으로 구독합니다.
 * @param ref - 비디오 요소에 대한 React ref 객체
 * @param setVideoState - 비디오 상태를 업데이트할 setState 함수
 */
export const subscribeVideoState = (
  ref: RefObject<HTMLVideoElement | null>,
  setVideoState: (state: VideoState) => void
): (() => void) => {
  if (!ref.current) {
    return () => {};
  }

  const handleStateChange = () => {
    if (ref.current) {
      setVideoState(videoStateMap[ref.current.readyState]);
    }
  };

  ref.current.addEventListener("loadedmetadata", handleStateChange);
  ref.current.addEventListener("loadeddata", handleStateChange);
  ref.current.addEventListener("playing", handleStateChange);
  ref.current.addEventListener("waiting", handleStateChange);
  ref.current.addEventListener("ended", handleStateChange);
  setVideoState(videoStateMap[ref.current.readyState]);
  return () => {
    if (ref.current) {
      ref.current.removeEventListener("loadedmetadata", handleStateChange);
      ref.current.removeEventListener("loadeddata", handleStateChange);
      ref.current.removeEventListener("playing", handleStateChange);
      ref.current.removeEventListener("waiting", handleStateChange);
      ref.current.removeEventListener("ended", handleStateChange);
    }
  };
};

/**
 * DOMException 에러 메시지를 반환합니다.
 * @param error - 처리할 에러 객체
 * @returns 사용자 친화적인 에러 메시지
 */
export const getMediaError = (error: unknown): string => {
  if (error instanceof DOMException) {
    switch (error.name) {
      case "NotAllowedError":
      case "PermissionDeniedError":
        return "카메라와 마이크 접근 권한을 허용해주세요";
      case "NotFoundError":
        return "카메라 또는 마이크를 찾을 수 없습니다";
      case "NotReadableError":
      case "TrackStartError":
        return "카메라 또는 마이크를 읽을 수 없습니다";
      case "OverconstrainedError":
        return "지원하지 않는 미디어 스트림 형식입니다";
      case "SecurityError":
        return "보안 오류가 발생했습니다";
      case "TypeError":
        return "타입 오류가 발생했습니다";
    }
  }
  return "알 수 없는 오류가 발생했습니다";
};
