import * as GooglePhotosAlbum from '../node_modules/google-photos-album-image-url-fetch/dist/index';
import albumData from '../public/links.json';

export async function getPhotos(url) {
    const urls = await GooglePhotosAlbum.fetchImageUrls(url)
    
    const allPhotosData = urls.map(photo => {
      const uid = photo.uid
      const url = photo.url
      const height = photo.height
      const width = photo.width

      return {
          uid,
          url,
          height,
          width
      }
    }

    )

    return allPhotosData
}

export async function getPhotosDataById(id) {
  return albumData[id]
}