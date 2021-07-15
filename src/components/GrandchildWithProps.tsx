import { TextProps } from "./ChildWithProps";

function GrandchildWithProps({ text }: TextProps): JSX.Element{
    return <p>{text}</p>
}

export default GrandchildWithProps
