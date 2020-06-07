import React from "react"

function Calculator() {
    const [sayi1, setSayi1] = React.useState(0);
    const [sayi2, setSayi2] = React.useState(0);
    const [sonuc, setSonuc] = React.useState(0);


    function onSayi1Change(e) {
        setSayi1(parseInt(e.target.value));
    }

    function onSayi2Change(e) {
        setSayi2(parseInt(e.target.value));
    }

    function onToplaClick() {
        setSonuc(sayi1 + sayi2);
    }

    function onCarpClick(){
        setSonuc(sayi1 * sayi2)
    }

    function onBolmeClick() {
        setSonuc(sayi1 / sayi2)
    }

    function onCikartClick(){
        setSonuc(sayi1 - sayi2)
    }

    return (
        <table>
            <tbody>
            <tr>
                <td>Sayı 1:</td>
                <td>
                    <input value={sayi1} onChange={onSayi1Change} />
                </td>
            </tr>
            <tr>
                <td>Sayı 2:</td>
                <td>
                    <input value={sayi2} onChange={onSayi2Change} />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button onClick={onToplaClick}>topla</button>
                    <button onClick={onCikartClick}>çıkart</button>
                    <button onClick={onCarpClick}>çarp</button>
                    <button onClick={onBolmeClick}>böl</button>
                </td>
            </tr>
            <tr>
                <td>Sonuç</td>
                <td>{sonuc}</td>
            </tr>
            </tbody>
        </table>
    )
}
export default Calculator;
