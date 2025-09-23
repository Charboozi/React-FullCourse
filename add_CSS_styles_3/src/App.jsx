/*
  HOW TO STYLE REACT COMPONENTS WITH CSS

  (not including external frameworks or preprocessors)

  1. EXTERNAL (like from a css file)
  2. MODULES (we don't have to worry about naming conflicts, creates unique hash)
  3. INLINE
*/

import Button from './Button/Button.jsx'
import ButtonInline from './Button_Inline.jsx'

function App() {

  return(
    <>
      <Button></Button>
      <ButtonInline></ButtonInline>
    </>
  );
}

export default App
