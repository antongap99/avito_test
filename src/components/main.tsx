
interface Props {
    str: string;
}

export const  main = ({str}: Props): JSX.Element=> {
    return (
        <div>{str}</div>
    )
}
