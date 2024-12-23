if (!buffer.shouldNotCompact()) {
}

//проверку лучше вынести в отдельную сущность, улучшив читаемость (двойное НЕ) и разделив логику

const bufferShouldCompact = !buffer.shouldNotCompact();

if (bufferShouldCompact) {
}
