import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';

import { useRouter } from 'next/router';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProfileDialog({ open, setOpen, handleClickOpen, handleClose }) {
    const router = useRouter();

    const handleLogoutClick = () => {
        router.push("/login")
    }

    const handlePassChangeClick = () => {
        router.push("/admin/change-password")
    }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        hideBackdrop={true}
        PaperProps={{ 
            sx: { 
                position: "fixed", 
                top: 70, 
                right: 30, 
                m: 0,
            } }}
            sx={{
                "& .MuiPaper-root": {
                    boxShadow: "0px 14px 80px rgba(0, 0, 0, 0.08), 0px 3.12708px 17.869px rgba(0, 0, 0, 0.0476886), 0px 0.931014px 5.32008px rgba(0, 0, 0, 0.0323114) !important"
                } 
            }}
      >
        <DialogContent dividers 
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "0.5rem"
            }}
        >
          <Button
            onClick={handlePassChangeClick}
          >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "0.5rem",
                    "& .MuiBox-root:hover": {
                        color: "#0B4CCB !important"
                    }
                }}
            >
                <LockResetIcon 
                    sx={{
                        color: "black",
                        "&:hover": {
                            color: "#0B4CCB"
                        }
                    }}
                />
                <Typography
                    sx={{
                        color: "black",
                        "&:hover": {
                            color: "#0B4CCB"
                        },
                        textTransform: "capitalize"
                    }}
                >
                    Change Password
                </Typography>
            </Box>
          </Button>

          <Button
            onClick={handleLogoutClick}
          >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "0.5rem",
                    "& .MuiBox-root:hover": {
                        color: "#0B4CCB !important"
                    }
                }}
            >
                <LogoutIcon 
                    sx={{
                        color: "black",
                        "&:hover": {
                            color: "#0B4CCB"
                        }
                    }}
                />
                <Typography
                    sx={{
                        color: "black",
                        "&:hover": {
                            color: "#0B4CCB"
                        },
                        textTransform: "capitalize"
                    }}
                >
                    Logout
                </Typography>
            </Box>
          </Button>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}