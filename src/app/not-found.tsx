import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>صفحه مورد نظر یافت نشد</h2>
      <p>برای بازگشت به صفحه اول کلیک کنید</p>
      <Link href={'/'}>بازگشت به صفحه اول</Link>
    </div>
  )
}

export default NotFound