

const Container = ({children}) => {
    
    //a higher order component is used to add extra functionalities to our compnents
  return (
    <>
    <div className="bg-red-400">

     {children}
    </div>
    </>
  )
}

export default Container