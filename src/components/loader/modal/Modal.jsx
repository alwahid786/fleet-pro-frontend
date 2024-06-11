import { styled } from '@mui/material'
import React from 'react'

const Modal = ({ children, onClose }) => {
  return (
    <>
        <ModalOuter onClick={onClose}>
            <MOdalInner onClick={(e) => e.stopPropagation()} sx={{
               padding: {
                xs: '1rem',
                md: '1.2rem'
                },
                width: {
                    xs: '300px',
                    md: '600px',
                    lg: '900px',
                    xl: '1000px'
                }
            }}>
                {children}
            </MOdalInner>
        </ModalOuter>
    </>
  )
}

export default Modal

const ModalOuter = styled('div')({
    background: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    inset: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
    padding: '30px 16px'
})

const MOdalInner = styled('div')({
    background: 'rgba(245, 244, 244, 1)',
    borderRadius: '24px',
    maxWidth: '100%',
    overflow: 'auto',
    height: '100%'
})