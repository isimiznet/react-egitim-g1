import React from "react";
import styles from "./Register.module.css"
import axios from "axios";
import {useHistory} from "react-router";

function Register() {
    const history = useHistory();
    const [form, setForm] = React.useState({});

    const onInputChange = e => {
        let f = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(f);
    };

    const onCheckboxClick = e => {
        let selection = form[e.target.name] || [];
        let index = selection.indexOf(e.target.value);
        if (e.target.checked) {
            if (index === -1) {
                setForm({
                    ...form,
                    [e.target.name]: [...selection, e.target.value]
                })
            }
        } else {
            if (index > -1) {
                let list = [...selection];
                list.splice(index, 1);
                setForm({
                    ...form,
                    [e.target.name]: list
                })
            }
        }
    };

    const onFormClick = () => {
        if (!form.name) {
            alert('Lütfen isim alanını giriniz.');
            return;
        }
        if (!form.surname) {
            alert('Lütfen soyisim alanını giriniz.');
            return;
        }
        axios.post("http://localhost:1234/register", form).finally(() => {
            alert('Kayıt işlemi başarılı');
            history.push('/')
        })
    };

    return (
        <div className={styles.register}>
            <label>Adı:</label>
            <input type="text" name="name" value={form['name']} onChange={onInputChange}/>
            <TextValidation value={form['name']} min={0} max={3} message="Adınız minimum 3 karakter olmalıdır"/>
            <hr/>

            <label>Soyadı:</label>
            <input type="text" name="surname" value={form['surname']} onChange={onInputChange}/>
            <TextValidation value={form['surname']} min={0} max={3} message="Soyadınızı minimum 3 karakter olmalıdır"/>
            <hr/>

            <label>Cinsiyet:</label>
            <label>
                <input type="radio" name="gender" value="man" checked={form['gender'] === 'man'}
                       onChange={onInputChange}/> Erkek
            </label>
            <label>
                <input type="radio" name="gender" value="woman" checked={form['gender'] === 'woman'}
                       onChange={onInputChange}/> Kadın
            </label>

            <hr/>

            <label>Şehir:</label>
            <select name="city" onChange={onInputChange}>
                <option/>
                <option value="İstanbul">İstanbul</option>
                <option value="İzmir">İzmir</option>
                <option value="Ankara">Ankara</option>
            </select>

            <hr/>

            <label>İlgilendiğiniz Ürünler:}</label>
            <label>
                <input name="hoby" type="checkbox" value="moda" onClick={onCheckboxClick}/>
                MODA
            </label>
            <label>
                <input name="hoby" type="checkbox" value="elektronik" onClick={onCheckboxClick}/>
                ELEKTRONİK
            </label>
            <label>
                <input name="hoby" type="checkbox" value="spor" onClick={onCheckboxClick}/>
                SPOR
            </label>

            <hr/>

            <button onClick={onFormClick}>KAYIT OL</button>

            <hr/>

            <pre>{JSON.stringify(form, null, 2)}</pre>
        </div>
    )
}

function TextValidation({value, min, max, message}) {
    if (value && value.length > min && value.length < max) {
        return (
            <span style={{color: "red"}}>{message}</span>
        )
    } else {
        return null;
    }
}


export default Register;
