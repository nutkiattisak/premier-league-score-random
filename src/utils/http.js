const buildFormData = (formData, data, parentKey) => {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach((key) => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key)
    })
  } else {
    const value = data == null ? '' : data

    formData.append(parentKey, value)
  }
}

const getFormData = (data) => {
  const formData = new FormData()
  buildFormData(formData, data)

  return formData
}

const parseJSON = (response) => {
  return new Promise((resolve) =>
    response.json().then((json) =>
      resolve({
        status: response.status,
        ok: response.ok,
        json,
      })
    )
  )
}

// https://github.com/github/fetch/issues/203#issuecomment-266034180

const get = async (url, params = null) => {
  // url = setUrlParams(url, params)
  // return new Promise(async (resolve, reject) => {
  await fetch(url)
    .then(parseJSON)
    .then((response) => {
      if (response.ok) {
        return resolve(response.json)
      }
      // extract the error from the server's json
      return reject(response.json)
    })
    .catch((error) => {
      reject({
        networkError: error.message,
      })
    })
  // })
}

const http = {
  get,
}

export default http
