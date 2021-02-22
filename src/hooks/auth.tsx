import React, {
  createContext,
  useContext
} from 'react'
import { loadRequest } from '../store/ducks/login/actions';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

interface IAuthContext {
  signIn(email: string, password: string): Promise<void>
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)


const AuthProvider: React.FC = ({ children }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const signIn = async (email: string, password: string) => {
    dispatch(loadRequest(email, password))

  }

  return (
    <AuthContext.Provider value={{
      signIn,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthContext')
  }

  return context
}

export { AuthProvider, useAuth }
