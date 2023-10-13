import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect, useState } from "react";

const loader = new GLTFLoader();

export const useGLTFAnimationNames = ({ src }) => {
  const [animations, setAnimations] = useState(null);

  useEffect(() => {
    try {
      loader.load(src, (gltf) =>
        setAnimations(gltf.animations.map(({ name }) => name))
      );
    } catch (e) {
      console.error(e);
    }
  }, [src]);

  return animations;
};

export const useUpdateModel = (mesh, data) => {
  useEffect(() => {
    if (!mesh) return;
    const { clip, time } = data;
    mesh.animation.play(clip);
    mesh.animation.setTime(time);
  }, [mesh, data.clip, data.time]);

  useEffect(() => {
    if (!mesh) return;
    const { time } = data;
    mesh.animation.setTime(time);
  }, [mesh, data.time]);
};
