export const merchantRoleSelector = state => {
  return state.userReducer.roles?.find(role => role === 'MERCHANT')
}