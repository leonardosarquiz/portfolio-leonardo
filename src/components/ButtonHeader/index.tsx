import { Button } from './styles'

interface Props {
  title: string;
}

export function ButtonHeader({ title }: Props) {
  return (
    <Button>
      {title}
    </Button>
  )
}