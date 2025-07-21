import { MediaRecord } from "./media-record/components/MediaRecord";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-7xl w-full p-6 bg-gray-800 rounded-lg shadow-xl">
        <p className="text-lg font-bold text-center text-white">
          MediaRecord Test
        </p>
        <MediaRecord />
      </div>
    </div>
  );
}
