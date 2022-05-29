import './IconContainer.css'

export const IconContainer = () =>{
    return(
        <>
            <div className='icon-container'>
                <ul>
                    <li>
                        <i className='bi bi-list-ul'></i>
                        <span>Save</span>
                    </li>
                    <li>
                        <i className='bi bi-clock'></i>
                        <span>Watch later</span>
                    </li>
                   
                </ul>
            </div> 
        </>
    )
}