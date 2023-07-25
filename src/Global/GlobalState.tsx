import React, { PropsWithChildren, createContext, useState } from 'react'

interface iData {
  globalState?: boolean;
  setGlobalState?: React.Dispatch<React.SetStateAction<boolean>>
}

export const contextState = createContext<iData>({})

const GlobalState: React.FC<PropsWithChildren> = ({children}) => {
  const [globalState, setGlobalState] = useState<boolean>(false)
  return (
    <div>
      <contextState.Provider value={{globalState, setGlobalState}}>{children}</contextState.Provider>
    </div>
  )
}

export default GlobalState