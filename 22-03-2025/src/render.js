export function createElement(tag, options = {}) {
  const {
    classNames = [],
    children = [],
    textContent = null,
  } = options;
  const element = document.createElement(tag);

  // Can be replaced to .forEach
  for (const className of classNames) {
    element.classList.add(className);
  }

  // Can be replaced to .forEach
  for (const child of children) {
    element.append(child);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

// Columns:
// {
//    header: "Column name",
//    selector: (r) => r.name
// }

export function renderTable(rootElement, columns, data) {
  const header = createElement('thead', {
    children: columns
      .map((v) => v.header)
      .map((v) => createElement('th', { textContent: v })),
  });

  const rows = data.map((row) =>
    columns
      .map((v) => v.selector(row))
      .map((v) => createElement('td', { textContent: v })),
  );

  const table = createElement('table', {
    children: [
      header,
      ...rows.map((cells) =>
        createElement('tr', { children: cells }),
      ),
    ],
    classNames: ['table__wrapper'],
  });

  rootElement.append(table);
}
