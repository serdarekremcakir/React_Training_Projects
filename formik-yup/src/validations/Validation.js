import * as Yup from 'yup'

Yup.setLocale({
    mixed:{
        required: 'Bu alanın doldurulması zorunludur!',
        oneOf: 'Bu alanı işaretlemek zorunludur!'
        
    },
    string:{
        min: 'Minimum ${min} karakter girilmelidir'
    },
    
})

export default Yup;