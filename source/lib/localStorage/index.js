export const load = (key) => {
  try {
    const val = window.localStorage.getItem(key)
    return val ? JSON.parse(val) : undefined
  } catch (err) {}
}

export const save = (key, val) => {
  try {
    const serializedVal = JSON.stringify(val)
    window.localStorage.setItem(key, serializedVal)
  } catch (err) {}
}
