import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object().shape({
    name: Yup.string()
        .min(2, 'Անունը պետք է լինի 2 նիշից ոչ պակաս')
        .max(50, 'Անունը պետք է լինի 50 նիշից ոչ ավել')
        .required('Նշված դաշտը պարտադիր է'),
    surname: Yup.string()
        .min(2, 'Ազգանունը պետք է լինի 2 նիշից ոչ պակաս')
        .max(50, 'Ազգանունը պետք է լինի 50 նիշից ոչ ավել')
        .required('Նշված դաշտը պարտադիր է'),
    email: Yup.string()
        .email('Խնդրում ենք մուտքագրել ճիշտ էլ․ հասցե')
        .required('Նշված դաշտը պարտադիր է'),
    password: Yup.string()
        .required("Նշված դաշտը պարտադիր է")
        .min(8, 'Գաղտնաբառը պետք է լինի 8 նիշից ոչ պակաս')
        .max(50, 'Գաղտնաբառը պետք է լինի 50 նիշից ոչ ավել')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
            "Գաղտնաբառը պետք է պարունակի մեծատառ և փոքրատառ սիմվոլ, և թիվ"
        ),
    confirm: Yup.string()
        .required('Նշված դաշտը պարտադիր է')
        .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Գաղտնաբառերը չեն համընկնում"
            )
        }),
    phone: Yup.string()
        .required('Նշված դաշտը պարտադիր է')
        .matches(phoneRegExp, 'Խնդրում ենք մուտքագրել ճիշտ հեռախոսահամար'),
    profession: Yup.string()
        .required('Նշված դաշտը պարտադիր է')
});