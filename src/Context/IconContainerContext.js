import { createContext, useContext , useState} from "react";

const IconContainerContext = createContext()
const useIconContainer = () => useContext(IconContainerContext)

const IconContainerProvider = ({children}) =>{
    const [iconContainer, setIconContainer] = useState(null)
    const [show, setShow] = useState(false)   
    const [iconContainer1, setIconContainer1] = useState(null)
    const [show1, setShow1] = useState(false)   
    return(
        <IconContainerContext.Provider value={{iconContainer, setIconContainer, show, setShow,iconContainer1, setIconContainer1, show1, setShow1}}>
            {children}
        </IconContainerContext.Provider>
    )
}
export {useIconContainer, IconContainerProvider}