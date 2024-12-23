const match = rawHeaderLine.match(headerPattern);

if (match?.length === 3) headers.set(match[1].toLowerCase(), match[2]);

//Отсутствует проверка возвращаемого значения rawHeaderLine.match(headerPattern)