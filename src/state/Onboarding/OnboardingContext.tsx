import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'
import {sendOnboardingData} from '../../api'

type OnboardingContextType = {
  email: string
  password: string
  name: string
  dueDate: Date
  workoutsPerWeek: number

  setEmail: (name: string) => void
  setPassword: (name: string) => void
  setName: (name: string) => void
  setDueDate: (dueDate: Date) => void
  setWorkoutsPerWeek: (workoutsPerWeek: number) => void
  submitOnboardingData: (notificationsAllowed: boolean) => Promise<boolean>
}

export const OnboardingContext = createContext<OnboardingContextType>({
  name: '',
  password: '',
  email: '',
  dueDate: new Date(),
  workoutsPerWeek: 0,
  setEmail: () => {},
  setPassword: () => {},
  setName: () => {},
  setDueDate: () => {},
  setWorkoutsPerWeek: () => {},
  submitOnboardingData: async () => false,
})

export const useOnboarding = (): OnboardingContextType => {
  const context = useContext(OnboardingContext)
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider')
  }
  return context
}

export const OnboardingProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dueDate, setDueDate] = useState(new Date())
  const [workoutsPerWeek, setWorkoutsPerWeek] = useState(0)

  const submitOnboardingData = async (notificationsAllowed: boolean) => {
    try {
      const success = await sendOnboardingData(
        email,
        password,
        name,
        dueDate,
        workoutsPerWeek,
        notificationsAllowed,
      )
      return success
    } catch (error) {
      console.error('Failed to send onboarding data', error)
      return false
    }
  }

  const contextValue: OnboardingContextType = {
    email,
    password,
    name,
    dueDate,
    workoutsPerWeek,
    setName,
    setPassword,
    setEmail,
    setDueDate,
    setWorkoutsPerWeek,
    submitOnboardingData,
  }

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  )
}
