import React, { memo } from 'react'

const SidebarElement = ({title, element}) => {
    console.log("%cForum -- Sidebar -- SidebarElement", 'background: lightgreen; color: black;')

    return(
        <div className="sidebar">
            { 
                title !== "" && (
                    <h5 className="mb-2">
                        <span>{ title }</span>
                    </h5>
                )
            }
            { element }
        </div>
    )
}

export default memo(SidebarElement)