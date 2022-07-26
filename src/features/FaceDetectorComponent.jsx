import * as React from "react";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";

export default function FaceDetectorComponent() {
  const handleFacesDetected = ({ faces }) => {
    console.log(faces);
  };

  return (
    <Camera
      onFacesDetected={handleFacesDetected}
      faceDetectorSettings={{
        mode: FaceDetector.FaceDetectorMode.fast,
        detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
        runClassifications: FaceDetector.FaceDetectorClassifications.none,
        minDetectionInterval: 100,
        tracking: true,
      }}
    />
  );
}
