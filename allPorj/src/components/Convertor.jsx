import React from 'react'
import { useState } from 'react'
import './Convertor.css'
import { FormControl, Paper, Select, TextField } from '@material-ui/core'


function Convertor() {
    return (
        <div>
            <Paper className='paper'>
                <h3>Convertisseur de devises</h3>
                <form action="">
                    <div>
                        <TextField className='textf' variant='outlined' />
                        <FormControl className='dropdown' variant='outlined'>
                            <Select native>
                                <option value="">abc</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField className='textf' variant='standard' size='small'/>
                        <FormControl className='dropdown' variant='outlined'>
                            <Select native>
                                <option value="">abc</option>
                            </Select>
                        </FormControl>
                    </div>
                </form>
                <button type='submit' className='buttonn' variant='container' >Convertir</button>

            </Paper>
        </div>
    )
}

export default Convertor