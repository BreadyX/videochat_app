export function unrefEl(el) {
  if (!el.value) {
    console.warn('unrefEl: should pass ref, not plain object!');
    return null;
  }

  if (el.value.$) return el.value.$el;
  else return el.value;
}

export function unrefProps(el) {
  if (!el.value) {
    console.warn('unrefProps: should pass ref, not plain object!');
    return null;
  }

  if (el.value.$) return el.value.$props;
  else {
    console.warn('unrefProps: should pass component, not plain element!');
    return null;
  }
}
