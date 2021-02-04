// Функция записи обозначения языка в хранилище данных
export function setLang(context, data) {
    context.commit('setLang', data)
}
// Функция записи имени пользователя в хранилище данных
export function setUsername(context, data) {
    context.commit('setUsername', data)
}
// Функция установки признака авторизации в хранилище данных
export function setAuth(context) {
    context.commit('setAuth', true)
}
// Функция сброса всех полей хранилища данных
export function unsetStorage(context) {
    context.commit('unsetLang')
    context.commit('unsetStorage')
    context.commit('unsetAuth')
}