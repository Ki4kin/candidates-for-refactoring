const render = (size: number) => {
  const html = new StringBuffer('<hr');

  if (size > 0) {
    html.append(` size="${size + 1}"`);
  }
  html.append('>');

  return html.toString();
};

const render2 = (size: number) => {
  return `<hr ${size > 0 ? `size="${size + 1}"` : ''}>`;
};

//ни разу не использовал StringBuffer, но могу предположить, что вместо трех .append можно воспользовать один раз с шаблонной строкой, либо вообще не использовать его, а только шаблонную строку
