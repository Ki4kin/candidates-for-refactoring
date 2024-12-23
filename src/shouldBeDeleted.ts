if (timer.hasExpired() && !timer.isRecurrent()) {
}

//проверку лучше вынести в отдельную сущность, улучшив читаемость и разделив логику

const isExpiredAndNotRecurrent = (timer) => {
    const {hasExpired, isRecurrent} = timer
    return hasExpired() && !isRecurrent()
}

if (isExpiredAndNotRecurrent(timer)) {

}