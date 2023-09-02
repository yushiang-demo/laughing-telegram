import hooks from "./hooks";
import THREEPanoramaOutline from "./components/PanoramaOutline";
import ProjectionMesh from "./components/PanoramaProjectionMesh";
import TextureMesh from "./components/PanoramaTextureMesh";
import Canvas from "./components/ThreeCanvas";
import Math from "./core/helpers/Math";
import {
  raycastGeometry,
  raycastMeshFromScreen,
} from "./core/helpers/Raycaster";
import { getEmptyRoomGeometry, downloadMesh } from "./core/RoomGeometry";
import THREECss3DObject from "./components/Css3DObject";
import THREEPlaceholder from "./components/Placeholder";

// React components
export const ThreeCanvas = Canvas;
export const Css3DObject = THREECss3DObject;
export const Placeholder = THREEPlaceholder;
export const PanoramaOutline = THREEPanoramaOutline;
export const PanoramaProjectionMesh = ProjectionMesh;
export const PanoramaTextureMesh = TextureMesh;

// React Hooks
export const Loaders = hooks;

// THREE Algorithm
export const Core = {
  Math,
  raycastGeometry,
  raycastMeshFromScreen,
  getEmptyRoomGeometry,
  downloadMesh,
};
