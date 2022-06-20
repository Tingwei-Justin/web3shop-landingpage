import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
  open: boolean
  handleClickOpen: () => void
  handleClose: () => void
}
export default function EarlyAccessModal({
  open,
  handleClickOpen,
  handleClose,
}: Props) {
  const [accessCode, setAccessCode] = React.useState('')
  const [notValid, setNotValid] = React.useState(true)

  function handleSubmit() {
    if (accessCode !== 'weB3sh0p') {
      setNotValid(true)
    } else {
      setNotValid(false)
      window.open('https://shop.web3shop.me/')
    }
  }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        BackdropProps={{
          style: {
            backdropFilter: 'blur(3px)',
            backgroundColor: 'rgba(217, 217, 217, 0.5)',
          },
        }}
        // sx={{borderRadius:"100%"}}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="bg-black text-white p-8 flex flex-col w-full gap-4 items-center">
          <div className="w-2/3 flex flex-col justify-center items-center gap-4">
            <Image
              src="/bg-logo.png"
              width={336}
              height={41}
              alt="web3shop-logo"
              layout="intrinsic"
              className="pointer-events-none"
            />
            <div className="text-2xl tex">Enter access code</div>
          </div>
          <input
            className="w-full mt-10 h-12 rounded-lg bg-[#D9D9D9] bg-opacity-10 border border-[#666666] px-3 focus:outline-none"
            placeholder="Access code"
            value={accessCode}
            onChange={(e) => {
              setAccessCode(e.target.value)
              setNotValid(false)
            }}
          />

          {notValid && (
            <div className="text-[#df5949] text-sm  self-start">
              This is not a valid access code
            </div>
          )}

          <div className="w-full flex gap-4 justify-between">
            <button
              className="w-36 h-10 text-lg rounded-lg bg-[#df5949] text-white hover:scale-105"
              onClick={handleSubmit}
            >
              Try access
            </button>
            <button
              onClick={handleClose}
              className="w-36 h-10 text-lg rounded-lg bg-white text-black hover:scale-105"
            >
              Back
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
