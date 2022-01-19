import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '550px',
        width: '100%',
        margin: '0 auto'
    },
    paper: {
        backgroundColor: '#f7f2f2',
        border: '1px solid #7b7b7b',
        borderRadius: '10px',
        outline: 'none',
        boxShadow: theme.shadows[5],
        padding: '30px',
        width: '100%',
    },
}));



const CustomModal = React.memo(function CustomModal(props) {
    const classes = useStyles();


    return (
        <>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={props.open}
                    onClose={props.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={props.open}>
                        <div className={classes.paper}>
                            {props.children}
                        </div>
                    </Fade>
                </Modal>
            </div>
        </>
    );
});

export default CustomModal;
