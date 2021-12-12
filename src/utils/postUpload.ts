import { RegisterUploadData } from './../types/index';

const IMAGE_MAX_COUNT = 5;
const TAG_MAX_COUNT = 5;

export const isValidImageLength = (images: RegisterUploadData['images']) => {
  return IMAGE_MAX_COUNT <= images.length;
};

export const isValidTagLength = (tags: RegisterUploadData['tags']) => {
  return TAG_MAX_COUNT <= tags.length;
};

export const hasDuplicated = (tags: RegisterUploadData['tags']) => {
  if (tags.length === 0) return false;
  return new Set(tags).size !== tags.length;
};
