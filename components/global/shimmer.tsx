//shimmer

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const Shimmer = (w: number, h: number, c: string = "#ffffff") => `
<svg width="${w}" height="${h}"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${c}" offset="20%" stop-opacity="0" />
      <stop stop-color="${c}" offset="50%" stop-opacity="0.6" />
      <stop stop-color="${c}" offset="70%" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f5f5f5" opacity="0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

