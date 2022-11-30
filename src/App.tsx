import { ThemeProvider } from 'styled-components'
import {
  AppContainer,
  GlobalStyles,
  RouterProviderContainer,
} from './styles/GlobalStyles'
import { defaultTheme } from './styles/themes/defaultTheme'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import coverImg from '../public/Cover.png'
import { Issue } from './pages/Issue'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/issue/:issueNumber',
    element: <Issue />,
  },
])

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppContainer>
        <img src={coverImg} alt="" />
        <RouterProviderContainer>
          <RouterProvider router={router} />
        </RouterProviderContainer>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
