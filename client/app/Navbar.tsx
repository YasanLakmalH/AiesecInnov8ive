import React from 'react'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="bg-black">
      <div className="max-w-7X1 mx-outo px-4 sm:px-6 lg:px-8">
        <div className="flex-items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className ="tex-white"></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar