import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './FileUpload.scss' 
import { Grid } from '@mui/material'

import Checkbox from '@mui/material/Checkbox'; 
import FormControlLabel from '@mui/material/FormControlLabel';




const FileUpload = ({ files }) => {
    
    

    return (
        <>
            <div className="file-card"> 
            <div justify='center' className="info">
            <p >1.
              Selfie Photo. Your Personal Photo. The photo must be done by yourself. <br />  
              The photo must show your face and your both shoulders. (Please attach file )</p> 
            <p >2.
              ID Card. Valid Government ID Card. Front and Back side. Original ID Card. Full photo. <br />  
              All parts of the ID card must be shown. The four corners of the ID card must show on the photo.  <br />
              ID must be original and valid. ID card must be very clear. (Please attach file) </p>
              </div>   
                  <div className="file-inputs"> 
                
                    <input type="file"  />
                    <button>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i>
                        Upload
                    </button>
                </div>

                <p className="main">Supported files</p>
                <p className="info">PDF, JPG, PNG</p>

            </div> 
            <Grid item xs={12}>
   <FormControlLabel
     control={<Checkbox color="secondary" name="saveCard" value="yes" />}
     label="I hereby agree that the information given is true, accurate and complete as of the date of this application submission"
   />
 </Grid>
        </>
    )
}

export default FileUpload