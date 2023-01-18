import React from 'react'
import '../../routes/admin/Admin.css'

function AdminHome() {
  return (
    <div className='adminHome'>
      <div className="adminHomeWrapper">
        <div className="adminHomeWrapperItem">
            <h2>Barcha mahsulotlar soni</h2>
            <h1>4560</h1>
        </div>
        <div className="adminHomeWrapperItem">
            <h2>Barcha foydalanuvchilar soni</h2>
            <h1>2681</h1>
        </div>
        <div className="adminHomeWrapperItem">
            <h2>Barcha nimadur soni</h2>
            <h1>1681</h1>
        </div>
        <div className="adminHomeWrapperItem">
            <h2>Barcha numadur soni</h2>
            <h1>6835</h1>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
