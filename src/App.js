import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState("");
    const [ageValue, setAgeValue] = React.useState();
    const [remarksValue, setRemarksValue] = React.useState();

  return (
    <div className={"divstyle"}>
        <form>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor={"name"}>Naam
                    <input
                        type={"text"}
                        id={"name"}
                        name={"name"}
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    >
                    </input>
                </label>
                <label htmlFor={"age"}>Leeftijd
                    <input
                        type={"number"}
                        id={"age"}
                        name={"age"}
                        value={ageValue}
                        onChange={(e) => setAgeValue(e.target.value)}
                        >
                    </input>
                </label>
            </fieldset>
            <fieldset>
                <legend>Jouw review</legend>
                <label htmlFor={"source"}>Hoe heb je dit recept gevonden?
                    <select
                    id={"source"}
                    name={"source"}
                    >
                        <option value={"anders"}>Anders</option>
                        <option value={"vriend"}>Vriend</option>
                        <option value={"google"}>Google</option>
                        <option value={"advertentie"}>Advertentie</option>
                    </select>
                </label>
                <label htmlFor={"remarks"}>Opmerkingen:
                    <textarea
                        id={"remarks"}
                        name={"remarks"}
                        placeholder={"Wat vond je van het recept?"}
                        value={remarksValue}
                        onChange={(e) => setRemarksValue(e.target.value)}
                    >
                    </textarea>
                </label>
            </fieldset>
        </form>
    </div>
  );
}

export default App;
