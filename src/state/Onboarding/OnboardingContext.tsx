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
  notificationsAllowed: boolean
  setEmail: (name: string) => void
  setPassword: (name: string) => void
  setName: (name: string) => void
  setDueDate: (dueDate: Date) => void
  setWorkoutsPerWeek: (workoutsPerWeek: number) => void
  setNotificationsAllowed: (notificationsAllowed: boolean) => void
  submitOnboardingData: () => Promise<boolean>
}

export const OnboardingContext = createContext<OnboardingContextType>({
  name: '',
  password: '',
  email: '',
  dueDate: new Date(),
  workoutsPerWeek: 0,
  notificationsAllowed: false,
  setEmail: () => {},
  setPassword: () => {},
  setName: () => {},
  setDueDate: () => {},
  setWorkoutsPerWeek: () => {},
  setNotificationsAllowed: () => {},
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
  const [notificationsAllowed, setNotificationsAllowed] = useState(false)

  const submitOnboardingData = async () => {
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
    notificationsAllowed,
    setName,
    setPassword,
    setEmail,
    setDueDate,
    setWorkoutsPerWeek,
    setNotificationsAllowed,
    submitOnboardingData,
  }

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  )
}
