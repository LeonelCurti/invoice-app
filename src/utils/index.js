export const upperCaseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export function reduceErrors(errors) {
  const messages = [];
  for (const key in errors) {
    const value = errors[key];
    if (typeof value === "string") {
      messages.push(value);
    } else if (typeof value === "object") {
      messages.push(...reduceErrors(value));
    } else if (Array.isArray(value)) {
      for (const item of value) {
        messages.push(...reduceErrors(item));
      }
    }
  }
  return [...new Set(messages)];
}

export function generateRandomId() {
  let id = "";
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  id += letters.charAt(Math.floor(Math.random() * letters.length));
  id += letters.charAt(Math.floor(Math.random() * letters.length));
  id += String(Math.random()).slice(2, 6);
  return id;
}

export const calcTotalAmount = (items) => {
  return items
    .reduce((accum, item) => accum + item.qty * item.price, 0)
    .toFixed(2);
};

export function invoicesMessage(num, isDesktop) {
  if (isDesktop) {
    if (num === 0) {
      return `There are no invoices`;
    } else if (num === 1) {
      return "There is 1 invoice";
    } else if (num === 1) {
      return `There is 1 invoice`;
    } else {
      return `There are ${num} invoices`;
    }
  } else {
    if (num === 0) {
      return `No invoices`;
    } else if (num === 1) {
      return "1 invoice";
    } else if (num === 1) {
      return `1 invoice`;
    } else {
      return `${num} invoices.`;
    }
  }
}
