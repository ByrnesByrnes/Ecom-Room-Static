// The Original Api changed and the json data image is missing herokuapp.
export const fixImageUrl = (image) => {
  return image.replace(/fakestoreapi/i,'fakestoreapi.herokuapp')
}