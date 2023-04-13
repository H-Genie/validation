import { useState } from "react"
import "./App.css"

const strengthLabels = ["weak", "medium", "strong"]

const App = () => {
  const [strength, setStrength] = useState('')

  const getStrength = password => {
    let strengthIndicator = -1,
      upper = false,
      lower = false,
      numbers = false

    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i)
      if (!upper && char >= 65 && char <= 90) {
        upper = true
        strengthIndicator++
      }
      if (!numbers && char >= 48 && char <= 57) {
        numbers = true
        strengthIndicator++
      }
      if (!lower && char >= 97 && char <= 122) {
        lower = true
        strengthIndicator++
      }
    }

    setStrength(strengthLabels[strengthIndicator])
  }

  const handleChange = e => getStrength(e.target.value)

  return (
    <div style={{ width: 350 }}>
      <input
        name="password"
        spellCheck="false"
        className="control"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <div className={`bars ${strength}`}>
        <div></div>
      </div>
      <div className="strength">
        {strength && <>{strength} password</>}
      </div>
    </div>
  )
}

export default App