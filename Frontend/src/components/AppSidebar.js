import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


// sidebar nav config
import navigation from '../pages/LandingPages/Banquier/_nav'

const AppSidebar = () => {
  
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
 // <div className="sidebar" style={style}>
 <CSidebar 
 position="fixed"
 unfoldable={unfoldable}
 visible={sidebarShow}
 onVisibleChange={(visible) => {
   dispatch({ type: 'set', sidebarShow: visible })
 }}
 >
 <CSidebarNav  >
 <div className='sidebar'>
   <SimpleBar>
     <AppSidebarNav items={navigation} />
   </SimpleBar>
   </div>
 </CSidebarNav>
 <CSidebarToggler
   className="d-none d-lg-flex"
   onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
 />
</CSidebar>
   
  )
}
export default AppSidebar


