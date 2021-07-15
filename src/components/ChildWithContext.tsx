import GrandchildWithContext from "./GrandchildWithContext";

function ChildWithContext(): JSX.Element {
    return <>
        <h4>Passing variables using Context:</h4>
        <GrandchildWithContext /> 
    </>
}

export default ChildWithContext
