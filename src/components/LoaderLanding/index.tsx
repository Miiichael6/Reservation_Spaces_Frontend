import { CircularProgress } from '@mui/material'

const LoaderLanding = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-[#1F2937]'>
        <CircularProgress size="5rem" color='warning'/>
    </div>
  )
}

export default LoaderLanding