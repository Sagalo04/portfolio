import React from 'react';
import Button from '../../Button/Button'
import SocialLinks from './SocialLinks/SocialLinks';
import Styles from './Welcome.module.scss'
import { SANTIIMAGE, BANNERFORM, SANTIBANNER } from '../../../constants/images'
import { DownloadIcon } from '../../../constants/icons'
import cv from "../../../images/CV SANTIAGO GARCIA.pdf"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Modal } from "@mui/material";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

function Welcome(props) {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_rxp57ml', 'template_qli27me', e.target, 'user_0L14uxwE2jPakyN5UFPci')
            .then((result) => {
                swal("Mensaje Enviado", "Pronto me pondré en contacto contigo", "success").then(() => {
                    window.location.reload()
                  });
            }, (error) => {
                swal("Opps", "Un error inesperado ha ocurrido, intentalo de  nuevo mas tard", "error").then(() => {
                    window.location.reload()
                  });
            });
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className={Styles.o_welcome}>
                <div className={Styles.o_socialcontainer}>
                    <SocialLinks className={Styles.o_socialcomponent} />
                    <span className={Styles.o_dummysocial}>
                    </span>
                </div>
                <div className={Styles.o_container}>
                    <img src={SANTIIMAGE} alt="Santiago García Vector" />
                    <div className={Styles.o_info}>
                        <h1>Hola, soy <br /><span>Santiago García</span></h1>
                        <p className={Styles.o_profession}>Ingeniero Multimedia / Fullstack Developer</p>
                        <p>¡Hola! Soy Santiago García,  una persona creativa, con iniciativa y me gusta trabajar en equipo. Como Desarrollador Web me he dedicado a crear productos con la capacidad de ofrecer experiencias interactivas multiplataforma.
                            <br /><br />
                            Desde que descubrí la programación, siempre procuro que mis desarrollos se adapten completamente a la necesidad de los usuarios, convirtiendose en sistemas dinámicos para todos.</p>
                        <div className={Styles.o_btns}>
                            <Button title="Contáctame" btn={true} onclick={handleOpen} />
                            <Button title="CV" icon={DownloadIcon} refr={cv} targ="_blank" />
                        </div>
                    </div>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box className={Styles.o_modal}>
                        <img className={Styles.o_banner} src={BANNERFORM} alt="" />
                        <img className={Styles.o_santibanner} src={SANTIBANNER} alt="" />

                        <Box
                            className={Styles.o_form}
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            onSubmit={sendEmail}
                            autoComplete="off"
                        >
                            <TextField required fullWidth id="outlined-basic" label="Tu nombre" variant="outlined" name="from_name" />
                            <TextField required fullWidth id="outlined-basic" label="Tu Email" variant="outlined" type="email" name="from_email" />
                            <TextField required fullWidth id="outlined-basic" label="Asunto" variant="outlined" name="email_subject" />
                            <TextField required fullWidth id="outlined-multiline-static"
                                multiline
                                rows={4}
                                label="Mensaje" variant="outlined"
                                name="html_message" />
                            <Button title="Enviar" btn={true} />
                        </Box>
                    </Box>

                </Modal>

            </div >
        </>
    );
}

export default Welcome;