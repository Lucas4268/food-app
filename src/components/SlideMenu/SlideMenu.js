import React, { useState } from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import { MenuItems } from './MenuItems'

export const SlideMenu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <SwipeableDrawer
			  anchor='left'
			  open={openMenu}
			  onClose={() => setOpenMenu(false)}
			  onOpen={() => setOpenMenu(true)}
			>
			  <MenuItems/>
		</SwipeableDrawer>
    )
}
