export const cmsAssetUrl = (path: string) => {
  return process.env.NEXT_PUBLIC_CMS_URL + path;
}