import * as GooglePhotosAlbum from '../node_modules/google-photos-album-image-url-fetch/dist/index';

export async function getPhotos() {
    const url = process.env.PHOTOS_URL
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