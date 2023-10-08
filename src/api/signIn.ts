export const signIn = async (
  email: string,
  password: string,
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Signing in with email: ${email}, password: ${password}`)
      resolve(true)
    }, 1000)
  })
}
