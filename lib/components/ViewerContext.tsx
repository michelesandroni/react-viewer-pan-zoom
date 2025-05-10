import { createContext } from 'react'
import { ViewerContextType } from './types'

const ViewerContext = createContext<ViewerContextType>({} as ViewerContextType)

export { ViewerContext }
