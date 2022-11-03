import  Yup from './Validation'

export const SampleSchema = Yup.object().shape({
    name: Yup.string().required(),
    about: Yup.string().required(),
    accept: Yup.boolean().oneOf([true]),
    gender: Yup.string().required(),
    avatar:Yup.mixed().nullable().test({
        message:'Bir avatar seçmelisin!',
        test: file => file?.name 
    }),
    level:Yup.string().required('Bir seviye seçin!')

})




// name: 'serdar',
// accept: true,
// avatar: '',
// skills: ['html', 'js'],
// about: '',
// gender: 0,
// level: 'jr'