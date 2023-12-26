import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yask Design',
    short_name: 'Yask',
    description: 'Design portfolio site',
    start_url: '/',
    scope: "/",
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    display_override: ["fullscreen", "minimal-ui"],
    id: "/",
    prefer_related_applications: true,
  
  orientation: "portrait" ,
    icons: [
        {
          src: "48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "192.png",
          sizes: "192x192",
          type: "image/png",
          purpose:"maskable"
        },
        {
          src: "512.png",
          sizes: "512x512",
          type: "image/png"
        },
        
      ],
  }
}