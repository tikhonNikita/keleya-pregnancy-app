export const sendOnboardingData = async (
  email: string,
  password: string,
  name: string,
  dueDate: Date,
  workoutsPerWeek: number,
  allowNotifications: boolean,
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Sending onboarding data to server: 
        email: ${email}, password: ${password}, name:${name}, 
        ${dueDate.toISOString()}, ${workoutsPerWeek}
         workouts per week. Notifications: ${allowNotifications}`,
      )
      resolve(true)
    }, 1000)
  })
}
