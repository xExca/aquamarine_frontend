import Sidebar from '../Shared/Sidebar'
  
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const Bag = ({ open, setOpen }: Props) => {
  return (
    <Sidebar open={open} setOpen={setOpen} isFilter={false}>
      <div>Bag</div>
    </Sidebar>
  )
}

export default Bag