import { createContext, useState } from "react";

export const TestContext = createContext()

function TestContextWrapper({children}) {

  const [account, setAccount]  = useState({uid:"USER00", nickname:""})

  const signin = (uid, nickname) => {

    setAccount(() => ({uid, nickname}))
  }

  return (
    <TestContext.Provider value={{account, signin}}>
      {children}
    </TestContext.Provider>
  )

}


export default TestContextWrapper