import cloudinaryApi from '@/api/cloudinaryApi'

const uploadImage = async (file) => {
  if (!file) return
  try {
    const formData = new FormData()
    formData.append(
      'upload_preset',
      import.meta.env.VITE_CLOUDINDARY_UPLOAD_PRESET
    )
    formData.append('file', file)
    const { data } = await cloudinaryApi.post(
      `${import.meta.env.VITE_CLOUDINDARY_CLOUD_NAME}/image/upload`,
      formData
    )
    return data.secure_url
  } catch (error) {
    console.error(error)
    return
  }
}

export default uploadImage
