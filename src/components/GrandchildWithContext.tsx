import { useContext } from "react"
import { TextContext } from "../App"

function GrandchildWithContext(): JSX.Element {
    // Step 3: Use the context in any child component
    const text = useContext(TextContext)
    
    return <p>{text}</p>
}

export default GrandchildWithContext
