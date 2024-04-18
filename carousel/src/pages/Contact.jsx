import React, { useState } from 'react';

const Contact = (props) => {

    // const [count, setCount] = useState(0)
    const [title, setTitle] = useState('Contact')

    // const incre = () => {
    //     setCount( count + 1)
    //     console.log(count)
    // }

    const [cont, setCont] = useState([
        {
            id: 1,
            fname: 'Amine',
            lname: 'Chraibi',
            email: 'amine.chr2@gmail.com',
            tel: '0493-82-09-47'
        },
        {
            id: 2,
            fname: 'José',
            lname: 'Feirera',
            email: 'jos.fer@gmail.com',
            tel: '0473-23-09-47'
        },
        {
            id: 3,
            fname: 'Martin',
            lname: 'Geginat',
            email: 'mart.geg@gmail.com',
            tel: '0476-78-11-02'
        }
    ])

    return (
        <div className='Contact'>
            <h1>{ title }</h1>
            {/* <h3>Count : { count }</h3>
            <button onClick={ incre } >Incre</button> */}
            {cont.map(contact=>(
            <h3 key={contact.id} >
                id :{contact.id}<br/>
                fname : {contact.fname}<br/>
                lname : {contact.lname}<br/>
                email : {contact.email}<br/>
                tel : {contact.tel}<br/>
            </h3>
            ))}
            
        </div>
    );
}

export default Contact;