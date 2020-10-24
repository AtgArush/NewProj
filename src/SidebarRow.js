import React from 'react'
import "./sidebarRow.css"


function SidebarRow({title, Icon, selected}) {
    return (
        <div className={`SidebarRow ${selected && "selected"} `}>
            <Icon className="sidebarRow__icon"/>
            <h4 className="sidebarRow__title">{title}</h4>
        </div>
    )
}

export default SidebarRow
