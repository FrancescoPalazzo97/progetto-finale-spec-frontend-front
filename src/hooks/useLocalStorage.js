import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // Quando si và a montare la componente prova a leggere localStorage
    const [value, setValue] = useState(() => {
        // Try lo uso per non far crashare il tutto
        try {
            // Cerco
            const saved = localStorage.getItem(key);
            // Se trovo qualcosa lo converto da stringa a oggetto altrimenti uso initialValue
            return saved ? JSON.parse(saved) : initialValue;
            // Catch mi prende ggli errori
        } catch {
            // In caso di errori mi restituisce initialValue
            return initialValue;
        }
    });

    // Funzione per salvare un nuovo valore
    const saveValue = (newValue) => {
        try {
            // aggiorno lo stato di value
            setValue(newValue);
            // Salvo nel localStorage convertendo in stringa
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (err) {
            console.error(`Errore nel salvare: ${err}`);
        }
    };

    return [value, saveValue]
}