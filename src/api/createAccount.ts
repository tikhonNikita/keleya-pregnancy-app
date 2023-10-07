export const createAccount = async (
  email: string,
  password: string,
): Promise<boolean> => {
  return new Promise((resolve) => {
    console.log(`Creating account for ${email} with password ${password}`)
    setTimeout(() => {
      resolve(true)
    }, 1500)
  })
}
