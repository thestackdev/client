import store from '@/redux/store'
import Spinner from 'components/Spinner'
import { SessionProvider, useSession } from 'next-auth/react'
import { Provider as ReduxProvider } from 'react-redux'
import 'styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </ReduxProvider>
    </SessionProvider>
  )
}

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true })

  if (status === 'loading')
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner height={50} width={50} color="#3949ab" />
      </div>
    )

  if (!session) return <span>Not auth</span>
  return children
}
