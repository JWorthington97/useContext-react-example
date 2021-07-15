import GrandchildWithProps from "./GrandchildWithProps"

export interface TextProps {
    text: string
}

function ChildWithProps({ text }: TextProps): JSX.Element {
    return <>
        <h4>Passing variables using Props:</h4>
        <GrandchildWithProps text={text} />
    </>
}

export default ChildWithProps
