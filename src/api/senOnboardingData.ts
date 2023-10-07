export const senOnboardingData = async (
  name: string,
  dueDate: Date,
  workoutsPerWeek: number,
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Sending onboarding data to server: ${name}, ${dueDate.toISOString()}, ${workoutsPerWeek} workouts per week`,
      )
      resolve(true)
    }, 1000)
  })
}
