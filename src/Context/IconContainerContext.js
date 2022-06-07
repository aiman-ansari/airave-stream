import { createContext, useContext , useState} from "react";

const IconContainerContext = createContext()
const useIconContainer = () => useContext(IconContainerContext)

const IconContainerProvider = ({children}) =>{
    const [iconContainer, setIconContainer] = useState(null)
    const [show, setShow] = useState(false)   
    return(
        <IconContainerContext.Provider value={{iconContainer, setIconContainer, show, setShow}}>
            {children}
        </IconContainerContext.Provider>
    )
}
export {useIconContainer, IconContainerProvider}