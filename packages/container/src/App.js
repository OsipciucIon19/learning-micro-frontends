import React, {lazy, Suspense, useState} from 'react'
import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazy}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
