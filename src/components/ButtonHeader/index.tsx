import { Button } from "./styles";


interface PropsButton {
  title: string

}

export function ButtonHeader({ title, }: PropsButton) {
  return (
    <Button >
      {title}
    </Button>
  )
}