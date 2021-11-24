export const upperCaseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export function reduceErrors(errors) {
  const messages = []
  for (const key in errors) {
      const value = errors[key]
      if (typeof value === 'string') {
          messages.push(value)
      } else if (typeof value === 'object') {
          messages.push(...reduceErrors(value))
      } else if (Array.isArray(value)) {
          for (const item of value) {
              messages.push(...reduceErrors(item))
          }
      }
  }
  return [...new Set(messages)]
}